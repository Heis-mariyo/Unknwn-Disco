import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Import our new shared components
import { Header, FloatingButtons } from './components/Header' 
import { Footer } from './components/Footer'
// Import the component you just made


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', 
  weight: ['400', '700', '800']
})

export const metadata: Metadata = {
  title: 'UNKNWN DISCO',
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
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}