import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './global.css'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js on GitHub Pages',
  description: 'A Next.js web application on GitHub Pages',
  other: {
    "google-site-verification": "BKaRGcj6dvWbuNeWVZ5e885fwtXQvlG95Srx8O8Whjc"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
