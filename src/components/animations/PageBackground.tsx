'use client'

import { usePathname } from 'next/navigation'
import HieroglyphicBackground from './HieroglyphicBackground'

export default function PageBackground() {
  const pathname = usePathname()

  // Choose background based on page
  const getBackgroundVariant = () => {
    if (pathname?.includes('/games/hangman')) return 'tomb'
    if (pathname?.includes('/games/trivia')) return 'temple'
    if (pathname?.includes('/learn')) return 'papyrus'
    if (pathname === '/') return 'pyramid'
    return 'papyrus'
  }

  return (
    <div className="fixed inset-0 -z-10">
      <HieroglyphicBackground 
        variant={getBackgroundVariant()} 
        opacity={0.25}
        animated={true}
      />
    </div>
  )
}