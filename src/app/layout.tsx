import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
  weight: ['400', '700', '800']
})

export const metadata: Metadata = {
  title: 'UNKNWN DISCO',
  // The error was happening here because the text was missing:
  description: 'We build visibility for the unseen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-inter bg-un-bg text-white`}>
        {children}
      </body>
    </html>
  )
}