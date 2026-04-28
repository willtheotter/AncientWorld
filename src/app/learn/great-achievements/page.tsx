'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { featuredSites, type Site, type Location as DataLocation } from '@/lib/data/sites'
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
        <div className="text-6xl animate-pulse mb-4" role="presentation">𓂀</div>
        <p className="text-gold text-lg font-semibold">Loading the Ancient World...</p>
        <p className="text-sm text-gray-500 mt-2">Exploring 200+ legendary sites across 20 civilizations</p>
      </div>
    </div>
  )
}

// Define the exact Location type that SiteDetailPanel expects
interface PanelLocation {
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

// Define the exact Site type that SiteDetailPanel expects
interface PanelSite {
  id: string
  name: string
  coordinates: [number, number]
  region: string
  locations: PanelLocation[]
}

// Type definitions for other data structures
interface CivilizationStat {
  name: string
  icon: string
  count: number
  color: string
}

interface FeaturedSite {
  id: string
  name: string
  icon: string
  siteId: string
  civilization: string
}

interface StatItem {
  label: string
  value: string
  icon: string
}

// Civilization stats
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

// Quick stats data
const quickStats: StatItem[] = [
  { label: 'Civilizations', value: '20+', icon: '🏛️' },
  { label: 'Historical Sites', value: '200+', icon: '🗺️' },
  { label: 'Years of History', value: '5,000+', icon: '📅' },
  { label: 'Deities', value: '60+', icon: '⭐' },
]

// Staggered animation variants for better performance
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.008,
      delayChildren: 0.15,
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
}

const featuredItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

// Helper function to convert Site to PanelSite format
function convertToPanelSite(site: Site): PanelSite {
  return {
    id: site.id,
    name: site.name,
    coordinates: site.coordinates,
    region: site.region,
    locations: site.locations.map(loc => ({
      id: loc.id,
      name: loc.name,
      description: loc.description,
      longDescription: loc.longDescription || loc.description,
      image: `/images/sites/${loc.id}-regenerated.jpg`, // Construct the image path as expected by SiteDetailPanel
      scene: loc.scene || `${loc.name} - Ancient Site`,
      visualHighlights: loc.visualHighlights || [],
      type: loc.type,
      deity: loc.deity
    }))
  }
}

export default function GreatAchievementsPage() {
  const [selectedSite, setSelectedSite] = useState<PanelSite | null>(null)

  const handleSelectSite = (site: Site | null) => {
    if (site) {
      // Convert the site to PanelSite format when selected
      setSelectedSite(convertToPanelSite(site))
    } else {
      setSelectedSite(null)
    }
  }

  const handleClosePanel = () => {
    setSelectedSite(null)
  }

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
          Great Achievements
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
          Discover the monumental accomplishments of ancient civilizations
        </p>
      </motion.div>

      {/* Civilization Stats - 20 civilizations with improved performance */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-2"
      >
        {civilizationStats.map((civ) => (
          <motion.div
            key={civ.name}
            variants={statItemVariants}
            className={`bg-gradient-to-r ${civ.color} rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-shadow duration-200`}
          >
            <div className="text-sm font-bold" aria-label={`${civ.name} civilization icon`}>
              {civ.icon}
            </div>
            <div className="text-[10px] font-semibold text-white truncate">
              {civ.name}
            </div>
            <div className="text-[9px] text-white/80">
              {civ.count} sites
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative"
        aria-label="Interactive ancient world map"
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
          <h2 className="text-2xl md:text-3xl font-bold text-gold">Featured Destinations</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2" aria-hidden="true"></div>
          <p className="text-sm text-gray-600 mt-2">Explore iconic sites from across the ancient world</p>
        </div>
        
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3"
        >
          {featuredSites.map((dest) => (
            <motion.div
              key={dest.id}
              variants={featuredItemVariants}
            >
              <Link
                href={`/explore/${dest.id}`}
                className="egyptian-card block text-center hover:scale-105 transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold rounded-lg"
                aria-label={`Explore ${dest.name}`}
              >
                <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {dest.icon}
                </div>
                <div className="font-semibold text-gray-800 text-xs truncate">
                  {dest.name}
                </div>
                <div className="text-[10px] text-gold opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  Explore
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Quick Stats Section */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4"
      >
        {quickStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={statItemVariants}
            transition={{ delay: 0.7 + index * 0.05 }}
            className="egyptian-card text-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-3xl mb-1" aria-hidden="true">{stat.icon}</div>
            <div className="text-2xl font-bold text-gold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Great Achievements Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold">Humanity's Greatest Achievements</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Achievement cards */}
          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">🏗️</div>
            <h3 className="text-xl font-bold text-gold mb-2">The Pyramids of Giza</h3>
            <p className="text-sm text-gray-600">Engineering marvels that have stood for over 4,500 years</p>
          </div>

          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="text-xl font-bold text-gold mb-2">Written Language</h3>
            <p className="text-sm text-gray-600">The invention of hieroglyphs and cuneiform writing systems</p>
          </div>

          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">🌊</div>
            <h3 className="text-xl font-bold text-gold mb-2">Irrigation Systems</h3>
            <p className="text-sm text-gray-600">Revolutionary water management that enabled agriculture</p>
          </div>

          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">🏛️</div>
            <h3 className="text-xl font-bold text-gold mb-2">Democracy</h3>
            <p className="text-sm text-gray-600">The birth of democratic governance in ancient Athens</p>
          </div>

          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">🧮</div>
            <h3 className="text-xl font-bold text-gold mb-2">Mathematics</h3>
            <p className="text-sm text-gray-600">Foundational mathematical concepts from Babylon and Egypt</p>
          </div>

          <div className="egyptian-card p-6 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-3">⚕️</div>
            <h3 className="text-xl font-bold text-gold mb-2">Medicine</h3>
            <p className="text-sm text-gray-600">Ancient medical practices and the Hippocratic Oath</p>
          </div>
        </div>
      </motion.div>

      {/* Dual-Image Feature Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div 
          className="egyptian-card text-center bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="View AI regenerated images"
        >
          <div className="text-3xl mb-2" aria-hidden="true">🎨</div>
          <h3 className="font-bold text-gold text-sm">AI Regenerated</h3>
          <p className="text-xs text-gray-600">See original glory</p>
        </div>
        <div 
          className="egyptian-card text-center bg-gradient-to-r from-blue-600/10 to-cyan-600/10 hover:shadow-lg transition-all duration-200 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="View current archaeological state"
        >
          <div className="text-3xl mb-2" aria-hidden="true">📸</div>
          <h3 className="font-bold text-gold text-sm">Current State</h3>
          <p className="text-xs text-gray-600">Archaeological remains</p>
        </div>
      </motion.div>

      {/* Site Detail Panel - Conditionally render for better performance */}
      {selectedSite && (
        <SiteDetailPanel 
          site={selectedSite}
          onClose={handleClosePanel}
        />
      )}
    </div>
  )
}