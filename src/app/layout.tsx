import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/Navigation'
import PageBackground from '@/components/animations/PageBackground'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Ancient World Explorer | Egyptian Trials',
    template: '%s | Ancient World Explorer',
  },
  description: 'Explore ancient civilizations including Egypt, Nubia, Phoenicia, Babylon, Greece, and more through interactive maps, games, and historical learning experiences.',
  keywords: [
    'ancient egypt',
    'nubia', 
    'phoenicia',
    'babylon',
    'greece',
    'interactive map',
    'history',
    'archaeology',
    'mythology',
    'ancient civilizations',
    'world history',
    'educational games'
  ],
  authors: [{ name: 'Egyptian Trials', url: 'https://egyptianhangman.com' }],
  creator: 'Egyptian Trials',
  publisher: 'Egyptian Trials',
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
    title: 'Ancient World Explorer | Egyptian Trials',
    description: 'Explore ancient civilizations through interactive maps, games, and historical learning experiences.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ancient World Explorer Map',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ancient World Explorer | Egyptian Trials',
    description: 'Explore ancient civilizations through interactive maps and games',
    images: ['/images/og-image.jpg'],
    creator: '@egyptiantrials',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
        <PageBackground />
        <Navigation />
        <main className="relative z-10 container mx-auto px-4 py-8 md:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </body>
    </html>
  )
}