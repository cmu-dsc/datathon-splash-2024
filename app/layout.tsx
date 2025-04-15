import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'AI Sustainability Datathon',
  description: 'Explore the environmental impact of AI in this CMU Data Science Club event',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://umami.cmudsc.com/script.js"
          data-website-id="4c1a9665-a7ca-4e44-8fd9-e7eee962ad28"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
