import { spawn } from 'node:child_process'
import { mkdir, readFile, stat } from 'node:fs/promises'
import { createServer } from 'node:net'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const MAX_PDF_BYTES = 10 * 1024 * 1024
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const profile = JSON.parse(await readFile(path.join(rootDir, 'data', 'profile.json'), 'utf8'))
const pdfName = (profile.pdfFilename || `${profile.firstName}_${profile.lastName}_Portfolio.pdf`).replace(/[^a-z0-9_.-]/gi, '_')
const outputPath = path.join(rootDir, 'output', pdfName)

function getAvailablePort() {
  return new Promise((resolve, reject) => {
    const server = createServer()
    server.unref()
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const address = server.address()
      const port = typeof address === 'object' && address ? address.port : null
      server.close(() => port ? resolve(port) : reject(new Error('Unable to allocate a local port.')))
    })
  })
}

async function waitForServer(url, child, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    if (child?.exitCode !== null) {
      throw new Error(`Next.js server stopped unexpectedly (exit code ${child.exitCode}).`)
    }
    try {
      const response = await fetch(url, { redirect: 'follow' })
      if (response.ok) return
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`Next.js server did not respond within ${timeoutMs / 1000} seconds.`)
}

async function stopServer(child) {
  if (!child || child.exitCode !== null) return
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(child.pid), '/t', '/f'], { stdio: 'ignore' })
  } else {
    process.kill(-child.pid, 'SIGTERM')
  }
  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ])
  if (child.exitCode === null && process.platform !== 'win32') process.kill(-child.pid, 'SIGKILL')
}

async function waitForPageAssets(page) {
  await page.waitForLoadState('networkidle')
  await page.evaluate(async () => {
    await document.fonts.ready
    const images = [...document.images]
    await Promise.all(images.map((image) => {
      if (image.complete) return image.decode?.().catch(() => undefined)
      return new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true })
        image.addEventListener('error', resolve, { once: true })
      })
    }))
  })
}

let browser
let nextServer

try {
  const configuredUrl = process.env.PORTFOLIO_URL
  const port = configuredUrl ? null : await getAvailablePort()
  const portfolioUrl = configuredUrl || `http://127.0.0.1:${port}`

  if (!configuredUrl) {
    nextServer = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'dev', '--', '--hostname', '127.0.0.1', '--port', String(port)], {
      cwd: rootDir,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: process.platform !== 'win32',
    })
    nextServer.stdout.on('data', (chunk) => process.stdout.write(`[next] ${chunk}`))
    nextServer.stderr.on('data', (chunk) => process.stderr.write(`[next] ${chunk}`))
  }

  await waitForServer(portfolioUrl, nextServer)
  await mkdir(path.dirname(outputPath), { recursive: true })

  browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
  await page.emulateMedia({ media: 'screen', colorScheme: 'dark', reducedMotion: 'reduce' })
  await page.goto(portfolioUrl, { waitUntil: 'domcontentloaded', timeout: 120_000 })
  await waitForPageAssets(page)
  const githubProfile = profile.socialLinks?.find((link) => link.platform === 'github')?.url
  const githubUsername = githubProfile ? new URL(githubProfile).pathname.split('/').filter(Boolean)[0] : ''
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || path.basename(rootDir)
  const publicBaseUrl = process.env.PDF_PUBLIC_BASE_URL || (githubUsername ? `https://${githubUsername}.github.io/${repositoryName}` : '')
  await page.evaluate((baseUrl) => {
    if (!baseUrl) return
    for (const link of document.querySelectorAll('a[href]')) {
      const url = new URL(link.href)
      if (url.hostname === '127.0.0.1' || url.hostname === 'localhost') {
        link.href = `${baseUrl.replace(/\/$/, '')}${url.pathname}${url.search}${url.hash}`
      }
    }
  }, publicBaseUrl)
  await page.emulateMedia({ media: 'print', colorScheme: 'dark', reducedMotion: 'reduce' })

  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    tagged: true,
    outline: true,
  })

  const { size } = await stat(outputPath)
  const sizeMb = size / 1024 / 1024
  console.log(`\nPDF generated: ${outputPath}`)
  console.log(`Final size: ${sizeMb.toFixed(2)} MB`)
  if (size <= MAX_PDF_BYTES) {
    console.log('Size limit respected: yes (under 10 MB)')
  } else {
    throw new Error(`Size limit respected: no (${sizeMb.toFixed(2)} MB exceeds 10 MB). Optimize print images before retrying.`)
  }
} finally {
  await browser?.close()
  await stopServer(nextServer)
}
