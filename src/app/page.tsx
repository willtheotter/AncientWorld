'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { featuredSites } from '@/lib/data/sites'
import SiteDetailPanel from '@/components/map/SiteDetailPanel'

// Dynamically import map to avoid SSR issues
const AncientEgyptMap = dynamic(
  () => import('@/components/map/AncientEgyptMap'),
  { ssr: false, loading: () => <MapLoading /> }
)

function MapLoading() {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-b from-amber-900/20 to-blue-900/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
      <div className="text-center">
        <div className="text-6xl animate-pulse mb-4">𓂀</div>
        <p className="text-amber-600 text-lg font-semibold">Loading the Ancient World...</p>
        <p className="text-sm text-gray-500 mt-2">Exploring 200+ legendary sites across 20 civilizations</p>
      </div>
    </div>
  )
}

// Type definitions
interface CivilizationStat {
  name: string
  icon: string
  count: number
  color: string
  region: string
}

interface FeaturedSite {
  id: string
  name: string
  icon: string
  siteId: string
  civilization: string
}

interface Stat {
  label: string
  value: string
  icon: string
  description: string
}

// Civilization stats with expanded data
const civilizationStats: CivilizationStat[] = [
  { name: 'Egyptian', icon: '𓂀', count: 45, color: 'from-amber-600 to-orange-600', region: 'Africa' },
  { name: 'Nubian', icon: '🗿', count: 13, color: 'from-emerald-600 to-teal-600', region: 'Africa' },
  { name: 'Punt', icon: '🏝️', count: 10, color: 'from-blue-600 to-cyan-600', region: 'Africa' },
  { name: 'Phoenician', icon: '⛵', count: 10, color: 'from-purple-600 to-pink-600', region: 'Mediterranean' },
  { name: 'Babylonian', icon: '🏛️', count: 10, color: 'from-yellow-600 to-amber-600', region: 'Mesopotamia' },
  { name: 'Israelite', icon: '🕍', count: 10, color: 'from-indigo-600 to-blue-600', region: 'Levant' },
  { name: 'Hittite', icon: '⚔️', count: 10, color: 'from-red-600 to-orange-600', region: 'Anatolia' },
  { name: 'Greek', icon: '🏺', count: 20, color: 'from-cyan-600 to-blue-600', region: 'Europe' },
  { name: 'Mycenaean', icon: '🛡️', count: 10, color: 'from-amber-700 to-brown-600', region: 'Europe' },
  { name: 'Minoan', icon: '🐂', count: 10, color: 'from-teal-600 to-green-600', region: 'Europe' },
  { name: 'Persian', icon: '🦁', count: 10, color: 'from-purple-700 to-indigo-700', region: 'Asia' },
  { name: 'Etruscan', icon: '🏺', count: 8, color: 'from-orange-700 to-red-700', region: 'Europe' },
  { name: 'Indian', icon: '🕉️', count: 12, color: 'from-orange-600 to-red-600', region: 'Asia' },
  { name: 'Chinese', icon: '🐉', count: 15, color: 'from-red-700 to-amber-600', region: 'Asia' },
  { name: 'West African', icon: '🥁', count: 10, color: 'from-orange-600 to-yellow-600', region: 'Africa' },
  { name: 'North African', icon: '🏜️', count: 8, color: 'from-amber-700 to-brown-600', region: 'Africa' },
  { name: 'Southern African', icon: '🪨', count: 7, color: 'from-green-600 to-emerald-600', region: 'Africa' },
  { name: 'Maya', icon: '🗿', count: 8, color: 'from-green-700 to-teal-600', region: 'Americas' },
  { name: 'Inca', icon: '⛰️', count: 6, color: 'from-terracotta-600 to-orange-600', region: 'Americas' },
  { name: 'North American', icon: '🏠', count: 5, color: 'from-amber-600 to-sand-600', region: 'Americas' },
]

// Stats data
const stats: Stat[] = [
  { label: 'Civilizations', value: '20+', icon: '🏛️', description: 'Ancient cultures explored' },
  { label: 'Historical Sites', value: '200+', icon: '🗺️', description: 'Archaeological locations' },
  { label: 'Years of History', value: '5,000+', icon: '📅', description: 'Of human heritage' },
  { label: 'Deities', value: '60+', icon: '⭐', description: 'Gods and goddesses' },
]

export default function Home() {
  const [selectedSite, setSelectedSite] = useState<any>(null)

  const handleSelectSite = useCallback((site: any) => {
    setSelectedSite(site)
    // Smooth scroll to panel on mobile
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('site-panel')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }, 100)
    }
  }, [])

  const handleClosePanel = useCallback(() => {
    setSelectedSite(null)
  }, [])

  // Memoize featured sites to prevent unnecessary re-renders
  const memoizedFeaturedSites = useMemo(() => featuredSites, [])

  return (
    <div className="space-y-12 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4 py-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/50 rounded-full backdrop-blur-sm">
          <span className="text-2xl">𓂀</span>
          <span className="text-sm font-semibold text-amber-700">Interactive Historical Atlas</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
          Ancient World Explorer
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Journey through 200+ legendary sites across Egypt, Nubia, Persia, India, China, Greece, and the Americas
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          <button 
            onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Explore Map
          </button>
          <Link 
            href="/about"
            className="px-6 py-2 border-2 border-amber-600 text-amber-700 rounded-lg hover:bg-amber-50 transition-all duration-300 font-semibold"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Civilization Stats Grid - 20+ civilizations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="space-y-3"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-800">Civilizations Explored</h2>
          <p className="text-sm text-gray-600">20+ ancient cultures across 4 continents</p>
          <p className="text-xs text-gray-500 mt-1">⭐ Filter panel is now on the left side of the map</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {civilizationStats.map((civ, index) => (
            <motion.div
              key={civ.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: Math.min(0.15 + index * 0.005, 0.5) }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-r ${civ.color} rounded-lg p-2 text-center shadow-md cursor-pointer group`}
              title={`${civ.name} civilization - ${civ.count} sites in ${civ.region}`}
            >
              <div className="text-xl mb-0.5">{civ.icon}</div>
              <div className="text-[11px] font-semibold text-white truncate">{civ.name}</div>
              <div className="text-[9px] text-white/80">{civ.count} sites</div>
              <div className="text-[8px] text-white/60 truncate">{civ.region}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Map Section */}
      <motion.div
        id="map-section"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative rounded-xl overflow-hidden shadow-2xl"
      >
        <AncientEgyptMap 
          onSelectSite={handleSelectSite}
          selectedSite={selectedSite}
        />
      </motion.div>

      {/* Featured Sites Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-5"
      >
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-700 to-amber-600 bg-clip-text text-transparent">
            Featured Destinations
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mt-2 rounded-full"></div>
          <p className="text-sm text-gray-600 mt-2">Explore iconic sites from across the ancient world</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {memoizedFeaturedSites.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(0.5 + index * 0.01, 0.8) }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={`/explore/${destination.id}`}
                className="block bg-white rounded-lg p-3 text-center hover:shadow-lg transition-all duration-300 group border border-gray-100 hover:border-amber-200"
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                  {destination.icon}
                </div>
                <div className="font-semibold text-gray-800 text-xs truncate">
                  {destination.name}
                </div>
                <div className="text-[10px] text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  Explore →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-4 text-center shadow-md border border-amber-100"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-gray-700 mt-1">{stat.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{stat.description}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dual-Image Feature Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-6 text-center border border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">🎨</div>
            <h3 className="font-bold text-purple-700 text-lg">AI Regenerated Views</h3>
            <p className="text-sm text-gray-600 mt-2">See ancient sites as they appeared in their original glory, reconstructed with AI technology</p>
            <div className="mt-3 text-xs text-purple-500 font-semibold">Original Appearance →</div>
          </div>
        </div>
        
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-6 text-center border border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative">
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">📸</div>
            <h3 className="font-bold text-blue-700 text-lg">Current State Photography</h3>
            <p className="text-sm text-gray-600 mt-2">View archaeological remains as they exist today, with detailed site documentation</p>
            <div className="mt-3 text-xs text-blue-500 font-semibold">Modern Remains →</div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
      >
        <h3 className="text-2xl font-bold text-amber-800 mb-3">Start Your Journey Today</h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore the interactive map, toggle between ancient glory and modern remains, 
          and discover 200+ legendary sites across 20+ ancient civilizations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button 
            onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
          >
            Explore Interactive Map
          </button>
          <Link 
            href="/civilizations"
            className="px-6 py-2.5 bg-white text-amber-700 rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-300 font-semibold"
          >
            Browse Civilizations
          </Link>
        </div>
      </motion.div>

      {/* Site Detail Panel */}
      {selectedSite && (
        <div id="site-panel">
          <SiteDetailPanel 
            site={selectedSite}
            onClose={handleClosePanel}
          />
        </div>
      )}
    </div>
  )
}