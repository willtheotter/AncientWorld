'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas to fixed size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawStaticBackground(ctx, canvas)
    }

    // Draw completely static background (no movement, no animation loop)
    const drawStaticBackground = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#f5e6d3')
      gradient.addColorStop(0.5, '#eddbc8')
      gradient.addColorStop(1, '#e6d5b8')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Draw static sand particles (non-moving)
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 2.5 + 0.5
        const opacity = Math.random() * 0.25 + 0.05
        
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180, 140, 100, ${opacity})`
        ctx.fill()
      }
      
      // Draw subtle hieroglyphic-like patterns
      const hieroglyphs = ['𓂀', '𓋹', '𓇳', '𓅃', '𓊨', '𓋴', '𓃣', '𓁟', '𓏤', '𓈖']
      ctx.font = '20px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif'
      
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const glyph = hieroglyphs[Math.floor(Math.random() * hieroglyphs.length)]
        const size = Math.random() * 20 + 14
        ctx.font = `${size}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`
        ctx.fillStyle = `rgba(160, 120, 80, ${Math.random() * 0.06 + 0.02})`
        ctx.fillText(glyph, x, y)
      }
    }

    setCanvasSize()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawStaticBackground(ctx, canvas)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          zIndex: -10,
          pointerEvents: 'none'
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{ 
          zIndex: -5, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.15) 100%)',
          pointerEvents: 'none'
        }}
      />
    </>
  )
}