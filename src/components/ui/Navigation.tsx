'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, Gamepad2, BookOpen, Info } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Games', path: '/games', icon: Gamepad2 },
  { name: 'Learn', path: '/learn', icon: BookOpen },
  { name: 'About', path: '/about', icon: Info },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-[#1034a6]/80 backdrop-blur-md border-b-2 border-[#d4af37]/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl transition-transform group-hover:scale-110">𓂀</span>
            <span className="font-bold text-xl text-[#d4af37]">Egyptian Trials</span>
          </Link>
          
          <div className="flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              const Icon = item.icon
              
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-4 py-2 rounded-lg transition-colors hover:text-[#d4af37] text-white"
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37]"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}