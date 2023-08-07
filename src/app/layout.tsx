import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const inter = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audio E-commerce',
  description: 'Audiophile e-commerce website',
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
