'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { featuredSites, civilizationColors } from '@/lib/data/sites'
import SiteDetailPanel from '@/components/map/SiteDetailPanel'

// Dynamically import map to avoid SSR issues
const AncientEgyptMap = dynamic(
  () => import('@/components/map/AncientEgyptMap'),
  { ssr: false, loading: () => <MapLoading /> }
)

function MapLoading() {
  return (
    <div className="w-full h-[70vh] bg-gradient-to-b from-amber-900/20 to-egyptian-blue/20 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl animate-pulse mb-4">𓂀</div>
        <p className="text-gold text-lg font-semibold">Loading the Ancient World...</p>
        <p className="text-sm text-gray-500 mt-2">Exploring 200+ legendary sites across 20 civilizations</p>
      </div>
    </div>
  )
}

// Type definition for civilization stats
interface CivilizationStat {
  name: string
  icon: string
  count: number
  color: string
}

// Civilization stats for the homepage - 15 civilizations
const civilizationStats: CivilizationStat[] = [
  { name: 'Egyptian', icon: 'PYR', count: 45, color: 'from-amber-600 to-orange-600' },
  { name: 'Nubian', icon: 'MNT', count: 13, color: 'from-emerald-600 to-teal-600' },
  { name: 'Punt', icon: 'TRD', count: 10, color: 'from-blue-600 to-cyan-600' },
  { name: 'Phoenician', icon: 'SHP', count: 10, color: 'from-purple-600 to-pink-600' },
  { name: 'Babylonian', icon: 'GTE', count: 10, color: 'from-yellow-600 to-amber-600' },
  { name: 'Israelite', icon: 'TMP', count: 10, color: 'from-indigo-600 to-blue-600' },
  { name: 'Hittite', icon: 'WLL', count: 10, color: 'from-red-600 to-orange-600' },
  { name: 'Greek', icon: 'PRT', count: 10, color: 'from-cyan-600 to-blue-600' },
  { name: 'Mycenaean', icon: 'SWD', count: 10, color: 'from-amber-700 to-brown-600' },
  { name: 'Minoan', icon: 'BUL', count: 10, color: 'from-teal-600 to-green-600' },
  { name: 'Persian', icon: 'LIO', count: 10, color: 'from-purple-700 to-indigo-700' },
  { name: 'Etruscan', icon: 'URN', count: 10, color: 'from-orange-700 to-red-700' },
  { name: 'Indian', icon: 'REL', count: 10, color: 'from-orange-600 to-red-600' },
  { name: 'Chinese', icon: 'DGN', count: 10, color: 'from-red-700 to-gold-600' },
  { name: 'West African', icon: 'MSC', count: 10, color: 'from-orange-600 to-yellow-600' },
  { name: 'North African', icon: 'DSR', count: 10, color: 'from-amber-700 to-brown-600' },
  { name: 'Southern African', icon: 'STN', count: 10, color: 'from-green-600 to-emerald-600' },
  { name: 'Mesoamerican', icon: 'SUN', count: 8, color: 'from-green-700 to-teal-600' },
  { name: 'Andean', icon: 'MOU', count: 5, color: 'from-terracotta-600 to-orange-600' },
  { name: 'North American', icon: 'HUT', count: 2, color: 'from-desert-600 to-sand-600' },
]

// Type definition for featured site
interface FeaturedSite {
  id: string
  name: string
  icon: string
  siteId: string
  civilization: string
}

export default function Home() {
  const [selectedSite, setSelectedSite] = useState(null)

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gold drop-shadow-lg">
          Ancient World Explorer
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
          Journey through 200+ legendary sites across Egypt, Nubia, Persia, India, China, Greece, and the Americas
        </p>
      </motion.div>

      {/* Civilization Stats - 20 civilizations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2"
      >
        {civilizationStats.map((civ: CivilizationStat, index: number) => (
          <motion.div
            key={civ.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + index * 0.008 }}
            className={`bg-gradient-to-r ${civ.color} rounded-lg p-2 text-center shadow-md`}
          >
            <div className="text-sm font-bold">{civ.icon}</div>
            <div className="text-[10px] font-semibold text-white truncate">{civ.name}</div>
            <div className="text-[9px] text-white/80">{civ.count} sites</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
      >
        <AncientEgyptMap 
          onSelectSite={setSelectedSite}
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
          <h2 className="text-2xl md:text-3xl font-bold text-gold">Featured Destinations</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-sm text-gray-600 mt-2">Explore iconic sites from across the ancient world</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {featuredSites.map((dest: FeaturedSite, index: number) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.008 }}
            >
              <Link
                href={`/explore/${dest.id}`}
                className="egyptian-card block text-center hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">{dest.icon}</div>
                <div className="font-semibold text-gray-800 text-xs truncate">{dest.name}</div>
                <div className="text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-opacity mt-1">Explore</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4"
      >
        {[
          { label: 'Civilizations', value: '20+', icon: '🏛️' },
          { label: 'Historical Sites', value: '200+', icon: '🗺️' },
          { label: 'Years of History', value: '5,000+', icon: '📅' },
          { label: 'Deities', value: '60+', icon: '⭐' },
        ].map((stat: { label: string; value: string; icon: string }, i: number) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + i * 0.05 }}
            className="egyptian-card text-center"
          >
            <div className="text-3xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-gold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dual-Image Feature Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="grid grid-cols-2 gap-4"
      >
        <div className="egyptian-card text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="font-bold text-gold text-sm">AI Regenerated</h3>
          <p className="text-xs text-gray-600">See original glory</p>
        </div>
        <div className="egyptian-card text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10">
          <div className="text-3xl mb-2">📸</div>
          <h3 className="font-bold text-gold text-sm">Current State</h3>
          <p className="text-xs text-gray-600">Archaeological remains</p>
        </div>
      </motion.div>

      {/* Site Detail Panel */}
      <SiteDetailPanel 
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
      />
    </div>
  )
}