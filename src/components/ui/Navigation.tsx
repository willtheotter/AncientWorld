'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Gamepad2, BookOpen, Info, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Games', path: '/games', icon: Gamepad2 },
  { name: 'Learn', path: '/learn', icon: BookOpen },
  { name: 'About', path: '/about', icon: Info },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <nav className="bg-[#1034a6]/80 backdrop-blur-md border-b-2 border-[#d4af37]/30 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-3xl transition-transform group-hover:scale-110">𓂀</span>
              <span className="font-bold text-xl text-[#d4af37] hidden sm:inline">Egyptian Trials</span>
              <span className="font-bold text-lg text-[#d4af37] sm:hidden">ET</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#d4af37]/20 transition-colors text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-16 left-0 bottom-0 w-64 bg-[#1034a6]/95 backdrop-blur-md shadow-xl z-40 md:hidden"
            >
              <div className="flex flex-col py-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path
                  const Icon = item.icon
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                          isActive 
                            ? 'bg-[#d4af37]/20 text-[#d4af37] border-r-4 border-[#d4af37]' 
                            : 'text-white hover:bg-[#d4af37]/10 hover:text-[#d4af37]'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </motion.div>
                  )
                })}
                
                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#d4af37]/20">
                  <div className="text-center text-xs text-white/60">
                    <p>𓂀 Egyptian Trials</p>
                    <p className="mt-1">Ancient wisdom awaits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}