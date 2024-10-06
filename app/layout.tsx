import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'  // This should work for both direct and proxy access

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'AI Sustainability Datathon',
  description: 'Explore the environmental impact of AI in this CMU Data Science Club event',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}