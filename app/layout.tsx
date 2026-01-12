import type { Metadata, Viewport } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
  adjustFontFallback: false,
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Portfolio Website',
  description: 'Portfolio website',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable} style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <body className={`${spaceGrotesk.className} bg-[hsl(var(--background))] overflow-x-hidden`} style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>{children}</body>
    </html>
  )
}

