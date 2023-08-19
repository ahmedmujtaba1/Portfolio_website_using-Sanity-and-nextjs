import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmed Mujtaba"s Porfolio',
  description: 'Ahmed Mujtaba"s Porfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://kit.fontawesome.com/85cf5382dc.js" crossOrigin="anonymous"></script>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
