'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface HieroglyphicBackgroundProps {
  variant?: 'papyrus' | 'temple' | 'tomb' | 'pyramid'
  opacity?: number
  animated?: boolean
}

export default function HieroglyphicBackground({ 
  variant = 'papyrus', 
  opacity = 0.2,
  animated = true 
}: HieroglyphicBackgroundProps) {
  const [scrolled, setScrolled] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only show animations after mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!animated) return

    const handleScroll = () => {
      setScrolled(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [animated])

  const backgrounds = {
    papyrus: {
      image: '/images/hieroglyphics/backgrounds/papyrus-bg.jpg',
      overlay: 'bg-amber-900/30',
      hieroglyphs: ['𓋴', '𓈖', '𓃀', '𓂀']
    },
    temple: {
      image: '/images/hieroglyphics/backgrounds/temple-bg.jpg',
      overlay: 'bg-stone-800/40',
      hieroglyphs: ['𓋹', '𓎛', '𓇋', '𓊨']
    },
    tomb: {
      image: '/images/hieroglyphics/backgrounds/tomb-bg.jpg',
      overlay: 'bg-gray-900/50',
      hieroglyphs: ['𓆣', '𓅃', '𓂀', '𓋴']
    },
    pyramid: {
      image: '/images/hieroglyphics/backgrounds/pyramid-bg.jpg',
      overlay: 'bg-amber-800/30',
      hieroglyphs: ['𓋹', '𓂀', '𓈖', '𓃀']
    },
  }

  const currentBg = backgrounds[variant]

  // Fixed positions that don't change between server and client
  const fixedPositions = [
    { top: '15%', left: '15%' },
    { top: '30%', left: '85%' },
    { top: '45%', left: '25%' },
    { top: '60%', left: '75%' },
    { top: '75%', left: '45%' },
    { top: '85%', left: '10%' },
    { top: '20%', left: '65%' },
    { top: '70%', left: '90%' },
    { top: '90%', left: '55%' },
    { top: '10%', left: '45%' },
    { top: '50%', left: '10%' },
    { top: '40%', left: '95%' },
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentBg.image}
          alt={`Egyptian ${variant} hieroglyphics background`}
          fill
          className={`object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: animated ? `translateY(${scrolled * 0.3}px)` : 'none',
            transition: 'transform 0.1s ease-out',
          }}
          onLoad={() => setImageLoaded(true)}
          priority
        />
      </div>
      
      {/* Colored Overlay */}
      <div className={`absolute inset-0 ${currentBg.overlay}`} />
      
      {/* Floating Hieroglyphs Animation - only render after mount */}
      {mounted && animated && (
        <div className="absolute inset-0 pointer-events-none">
          {currentBg.hieroglyphs.map((glyph, i) => (
            <div
              key={`main-${i}`}
              className="absolute text-7xl opacity-10"
              style={{
                top: fixedPositions[i].top,
                left: fixedPositions[i].left,
                animation: `float ${6 + i * 1.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              {glyph}
            </div>
          ))}
          {/* Additional random hieroglyphs with fixed positions */}
          {fixedPositions.slice(4, 12).map((pos, i) => (
            <div
              key={`random-${i}`}
              className="absolute text-5xl opacity-8"
              style={{
                top: pos.top,
                left: pos.left,
                animation: `float-slow ${7 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.7}s`,
              }}
            >
              {['𓋴', '𓈖', '𓃀', '𓂀', '𓋹', '𓎛', '𓇋', '𓊨', '𓆣', '𓅃'][i % 10]}
            </div>
          ))}
        </div>
      )}
      
      {/* Fallback for server-side rendering */}
      {!mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Empty div to prevent hydration issues */}
        </div>
      )}
    </div>
  )
}