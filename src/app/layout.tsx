import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../style/globals.css'
import '../style/print.css'
import { fullName, profile } from '../lib/portfolioData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${fullName} - Portfolio`,
  description: profile.metadataDescription,
  icons: [
    { rel: 'icon', url: 'favicon.ico' },
    { rel: 'image', url: profile.profileImage },
  ],

  keywords: [fullName, 'Portfolio', profile.professionalTitle, ...(profile.skills ?? [])],

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
