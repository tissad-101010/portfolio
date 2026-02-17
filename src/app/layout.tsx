import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tahar Issad - Portfolio',
  description: 'Développeur Full-Stack / C++ & Web',
  icons: [
    { rel: 'icon', url: 'favicon.ico' },
  ],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

