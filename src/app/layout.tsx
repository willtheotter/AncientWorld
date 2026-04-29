import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/Navigation'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// Separate viewport configuration (moved from metadata)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Ancient World Explorer | 100+ Historical Sites',
    template: '%s | Ancient World Explorer',
  },
  description: 'Explore 100+ ancient sites across 8 civilizations including Egypt, Nubia, Phoenicia, Babylon, Greece, and more. View AI-regenerated images and current archaeological remains through interactive maps.',
  keywords: [
    'ancient egypt',
    'nubia',
    'kush',
    'phoenicia',
    'babylon',
    'mesopotamia',
    'greece',
    'minoan',
    'hittite',
    'israelite',
    'canaanite',
    'interactive map',
    'history',
    'archaeology',
    'mythology',
    'egyptian deities',
    'greek gods',
    'ancient civilizations',
    'world history',
    'educational games',
    'ai reconstruction',
    'historical sites'
  ],
  authors: [{ name: 'Ancient World Explorer', url: 'https://egyptianhangman.com' }],
  creator: 'Ancient World Explorer',
  publisher: 'Ancient World Explorer',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://egyptianhangman.com',
    siteName: 'Ancient World Explorer',
    title: 'Ancient World Explorer | 100+ Ancient Sites Across 8 Civilizations',
    description: 'Journey through 100+ legendary sites with AI-regenerated images showing original glory and current state photographs of archaeological remains.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ancient World Explorer Interactive Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ancient World Explorer | 100+ Ancient Sites',
    description: 'Explore 100+ historical sites with dual-image views - AI regenerated original glory and current archaeological state.',
    images: ['/images/og-image.jpg'],
    creator: '@ancientexplorer',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#d4af37',
      },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="relative z-10 container mx-auto px-4 pt-24 pb-12 md:pt-28 md:px-6 lg:px-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}