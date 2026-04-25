'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { X, MapPin, ChevronRight, Pyramid, Building2, Sun, Moon } from 'lucide-react'

interface Location {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  scene: string
  visualHighlights: string[]
  type?: string
  deity?: string
}

interface Site {
  id: string
  name: string
  coordinates: [number, number]
  region: string
  locations: Location[]
}

interface SiteDetailPanelProps {
  site: Site | null
  onClose: () => void
}

export default function SiteDetailPanel({ site, onClose }: SiteDetailPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Handle escape key to close
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (site) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when panel is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [site, onClose])

  if (!site) return null

  const getRegionIcon = () => {
    if (site.region.includes('Giza') || site.region.includes('Pyramid')) return <Pyramid size={20} />
    if (site.region.includes('Thebes') || site.region.includes('Luxor')) return <Building2 size={20} />
    if (site.region.includes('Greece') || site.region.includes('Crete')) return <Building2 size={20} />
    if (site.region.includes('Mesopotamia')) return <Building2 size={20} />
    return <MapPin size={20} />
  }

  // Get civilization emoji based on region
  const getCivilizationEmoji = () => {
    if (site.region.includes('Egypt')) return '🇪🇬'
    if (site.region.includes('Nubia') || site.region.includes('Kush') || site.region.includes('Sudan')) return '🇸🇩'
    if (site.region.includes('Ethiopia') || site.region.includes('Aksum')) return '🇪🇹'
    if (site.region.includes('Phoenicia') || site.region.includes('Lebanon')) return '🇱🇧'
    if (site.region.includes('Carthage') || site.region.includes('North Africa')) return '🇹🇳'
    if (site.region.includes('Mesopotamia') || site.region.includes('Iraq')) return '🇮🇶'
    if (site.region.includes('Judah') || site.region.includes('Canaan') || site.region.includes('Israel')) return '🇮🇱'
    if (site.region.includes('Anatolia') || site.region.includes('Turkey')) return '🇹🇷'
    if (site.region.includes('Greece') || site.region.includes('Crete') || site.region.includes('Santorini')) return '🇬🇷'
    if (site.region.includes('Sicily')) return '🇮🇹'
    if (site.region.includes('Red Sea') || site.region.includes('Horn of Africa')) return '🌊'
    return '🏺'
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={onClose}
      >
        <motion.div
          ref={panelRef}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-papyrus/95 backdrop-blur-md shadow-2xl site-panel overflow-y-auto border-l-2 border-gold/30"
          style={{ zIndex: 9999 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with close button */}
          <div className="sticky top-0 bg-papyrus/95 backdrop-blur-md p-4 border-b border-gold/30 flex justify-between items-center z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-lg">{getCivilizationEmoji()}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-egyptian-blue">{site.name}</h2>
                <p className="text-xs text-gold">{site.region}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gold/20 rounded-full transition-colors group"
              aria-label="Close panel"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Region description */}
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/50 p-3 rounded-lg">
              {getRegionIcon()}
              <span>Explore {site.locations.length} sacred site{site.locations.length !== 1 ? 's' : ''} in {site.name}</span>
            </div>
            
            {/* Locations list */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gold border-b border-gold/30 pb-2 flex items-center gap-2">
                <Pyramid size={18} />
                Sacred Sites ({site.locations.length})
              </h3>
              
              {site.locations.map((location, index) => (
                <Link
                  key={location.id}
                  href={`/explore/${location.id}`}
                  className="block group"
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-all bg-white/30 hover:bg-white/50 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h4 className="font-bold text-egyptian-blue group-hover:text-gold transition-colors">
                            {location.name}
                          </h4>
                          {location.deity && (
                            <span className="text-xs bg-gold/20 px-1.5 py-0.5 rounded">
                              {location.deity}
                            </span>
                          )}
                          {location.type && (
                            <span className="text-xs bg-egyptian-blue/20 px-1.5 py-0.5 rounded">
                              {location.type}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {location.visualHighlights.slice(0, 2).map((highlight, i) => (
                            <span key={i} className="text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded">
                              {highlight}
                            </span>
                          ))}
                          {location.visualHighlights.length > 2 && (
                            <span className="text-xs text-gray-400">+{location.visualHighlights.length - 2} more</span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" size={20} />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Footer note */}
            <div className="pt-4 text-center text-xs text-gray-500 border-t border-gold/20">
              <span className="flex items-center justify-center gap-1">
                <Moon size={12} />
                Click any site to explore its full history
              </span>
              <span className="flex items-center justify-center gap-1 mt-1 text-xs opacity-70">
                Press ESC or click outside to close
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}