import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tahar Issad - Portfolio',
  description: 'Développeur Full-Stack / C++ & Web',
  icons: [
    { rel: 'icon', url: 'favicon.ico' },
    { rel: 'image', url: 'tissad.jpg' },
  ],

  keywords: ['Tahar Issad', 'Portfolio', 'Développeur Full-Stack', 'C++', 'Web Development', 'React', 'Node.js', 'Next.js', 'TailwindCSS'],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // set dark mode by default, user can toggle it with the button in the header
    <html lang="fr" className="dark">
      <head> 
        <link rel="icon" href="favicon.ico" />
      </head> 
      <body className={inter.className}>{children}</body>
    </html>
  )
}

