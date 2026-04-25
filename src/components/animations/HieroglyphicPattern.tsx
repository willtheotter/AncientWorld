'use client'

import { useState, useEffect } from 'react'

interface HieroglyphicPatternProps {
  variant?: 'grid' | 'bordered' | 'scattered'
  density?: 'light' | 'medium' | 'heavy'
}

export default function HieroglyphicPattern({ 
  variant = 'scattered', 
  density = 'medium' 
}: HieroglyphicPatternProps) {
  const [mounted, setMounted] = useState(false)
  
  const hieroglyphs = ['𓋴', '𓈖', '𓃀', '𓂀', '𓋹', '𓎛', '𓇋', '𓊨', '𓆣', '𓅃']
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const getOpacity = () => {
    switch(density) {
      case 'light': return 'opacity-5'
      case 'medium': return 'opacity-10'
      case 'heavy': return 'opacity-15'
    }
  }

  // Fixed positions for scattered variant
  const fixedPositions = [
    { top: '10%', left: '5%', rotate: '15deg', duration: '6s' },
    { top: '20%', left: '85%', rotate: '45deg', duration: '8s' },
    { top: '35%', left: '15%', rotate: '-20deg', duration: '7s' },
    { top: '45%', left: '70%', rotate: '30deg', duration: '9s' },
    { top: '55%', left: '30%', rotate: '-10deg', duration: '5s' },
    { top: '65%', left: '80%', rotate: '60deg', duration: '7.5s' },
    { top: '75%', left: '10%', rotate: '-30deg', duration: '8.5s' },
    { top: '85%', left: '50%', rotate: '15deg', duration: '6.5s' },
    { top: '15%', left: '45%', rotate: '-45deg', duration: '9.5s' },
    { top: '50%', left: '95%', rotate: '20deg', duration: '7s' },
  ]

  if (!mounted) {
    return null
  }

  if (variant === 'grid') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${getOpacity()}`}>
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array(120).fill(0).map((_, i) => (
            <div key={i} className="flex items-center justify-center text-2xl">
              {hieroglyphs[i % hieroglyphs.length]}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'bordered') {
    return (
      <div className={`absolute inset-0 pointer-events-none ${getOpacity()}`}>
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-20 flex justify-around items-center">
          {Array(20).fill(0).map((_, i) => (
            <span key={i} className="text-3xl">{hieroglyphs[i % hieroglyphs.length]}</span>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-20 flex justify-around items-center">
          {Array(20).fill(0).map((_, i) => (
            <span key={i} className="text-3xl">{hieroglyphs[i % hieroglyphs.length]}</span>
          ))}
        </div>
        
        {/* Left border */}
        <div className="absolute top-0 left-0 bottom-0 w-20 flex flex-col justify-around items-center">
          {Array(15).fill(0).map((_, i) => (
            <span key={i} className="text-3xl">{hieroglyphs[i % hieroglyphs.length]}</span>
          ))}
        </div>
        
        {/* Right border */}
        <div className="absolute top-0 right-0 bottom-0 w-20 flex flex-col justify-around items-center">
          {Array(15).fill(0).map((_, i) => (
            <span key={i} className="text-3xl">{hieroglyphs[i % hieroglyphs.length]}</span>
          ))}
        </div>
      </div>
    )
  }

  // Scattered variant with fixed positions
  return (
    <div className={`absolute inset-0 pointer-events-none ${getOpacity()}`}>
      {fixedPositions.map((pos, i) => (
        <div
          key={i}
          className="absolute text-4xl"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `rotate(${pos.rotate})`,
            animation: `float ${pos.duration} ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          {hieroglyphs[i % hieroglyphs.length]}
        </div>
      ))}
    </div>
  )
}