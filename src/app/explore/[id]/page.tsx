'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowLeft, MapPin, Sun, Moon, Eye, Sparkles, Globe, Building2, Pyramid, Landmark } from 'lucide-react'
import { sites } from '@/lib/data/sites'

// Helper function to get civilization emoji and color
const getCivilizationInfo = (region: string) => {
  if (region.includes('Egypt')) return { emoji: '🇪🇬', color: 'from-amber-600 to-orange-600', name: 'Egyptian' }
  if (region.includes('Nubia') || region.includes('Kush') || region.includes('Sudan')) return { emoji: '🇸🇩', color: 'from-emerald-600 to-teal-600', name: 'Nubian/Kushite' }
  if (region.includes('Ethiopia') || region.includes('Aksum')) return { emoji: '🇪🇹', color: 'from-blue-600 to-cyan-600', name: 'Aksumite' }
  if (region.includes('Phoenicia') || region.includes('Lebanon')) return { emoji: '🇱🇧', color: 'from-purple-600 to-pink-600', name: 'Phoenician' }
  if (region.includes('Carthage') || region.includes('North Africa')) return { emoji: '🇹🇳', color: 'from-orange-600 to-red-600', name: 'Carthaginian' }
  if (region.includes('Mesopotamia') || region.includes('Iraq') || region.includes('Babylon')) return { emoji: '🇮🇶', color: 'from-yellow-600 to-amber-600', name: 'Mesopotamian' }
  if (region.includes('Judah') || region.includes('Canaan') || region.includes('Israel')) return { emoji: '🇮🇱', color: 'from-indigo-600 to-blue-600', name: 'Canaanite/Israelite' }
  if (region.includes('Anatolia') || region.includes('Turkey') || region.includes('Hittite')) return { emoji: '🇹🇷', color: 'from-red-600 to-orange-600', name: 'Hittite' }
  if (region.includes('Levant') || region.includes('Syria')) return { emoji: '🇸🇾', color: 'from-green-600 to-teal-600', name: 'Levantine' }
  if (region.includes('Greece') || region.includes('Crete') || region.includes('Santorini')) return { emoji: '🇬🇷', color: 'from-cyan-600 to-blue-600', name: 'Greek/Minoan' }
  if (region.includes('Sicily')) return { emoji: '🇮🇹', color: 'from-orange-600 to-yellow-600', name: 'Sicilian' }
  if (region.includes('Red Sea') || region.includes('Horn of Africa')) return { emoji: '🌊', color: 'from-blue-600 to-cyan-600', name: 'Red Sea Trade' }
  return { emoji: '🏺', color: 'from-amber-600 to-orange-600', name: 'Ancient' }
}

export default function ExplorePage() {
  const params = useParams()
  const id = params.id as string
  const [imageError, setImageError] = useState(false)
  
  // Find the location across all sites
  let foundLocation = null
  let foundSite = null
  
  for (const site of Object.values(sites)) {
    const location = site.locations.find(loc => loc.id === id)
    if (location) {
      foundLocation = location
      foundSite = site
      break
    }
  }
  
  if (!foundLocation || !foundSite) {
    notFound()
  }

  const civInfo = getCivilizationInfo(foundSite.region)
  
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Map</span>
        </Link>
      </motion.div>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 text-gold">
            <MapPin size={16} />
            <span className="text-sm">{foundSite.name}, {foundSite.region}</span>
          </div>
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r ${civInfo.color} text-white text-xs`}>
            <span>{civInfo.emoji}</span>
            <span>{civInfo.name}</span>
          </div>
          {foundLocation.type && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/50 text-gray-700 text-xs">
              {foundLocation.type === 'temple' && <Building2 size={10} />}
              {foundLocation.type === 'tomb' && <Pyramid size={10} />}
              {foundLocation.type === 'monument' && <Landmark size={10} />}
              {foundLocation.type === 'city' && <Globe size={10} />}
              <span>{foundLocation.type}</span>
            </div>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">{foundLocation.name}</h1>
        <p className="text-xl text-gray-600 italic">{foundLocation.scene}</p>
      </motion.div>
      
      {/* Main image with better error handling */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-2 border-gold/30 bg-gradient-to-br ${civInfo.color}/20`}
      >
        {!imageError ? (
          <Image
            src={foundLocation.image}
            alt={foundLocation.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="text-8xl mb-4 animate-float">{civInfo.emoji}</div>
              <p className="text-gold text-lg">{foundLocation.name}</p>
              <p className="text-sm text-gray-400 mt-2">{civInfo.name} archaeological site</p>
              <p className="text-xs text-gray-500 mt-4">Artistic reconstruction coming soon</p>
            </div>
          </div>
        )}
        
        {/* Image overlay with scene name */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm">{foundLocation.scene}</p>
        </div>
      </motion.div>
      
      {/* Deity & Highlights Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Visual Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="egyptian-card"
        >
          <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-2">
            <Eye size={24} />
            Visual Highlights
          </h2>
          <div className="space-y-2">
            {foundLocation.visualHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-2 p-2 bg-white/30 rounded-lg"
              >
                <Sparkles size={16} className="text-gold flex-shrink-0" />
                <span className="text-gray-700 text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deity & Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="egyptian-card"
        >
          {foundLocation.deity && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gold mb-3 flex items-center gap-2">
                <Sun size={24} />
                Associated Deity
              </h2>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <div className="text-3xl mb-1">
                  {foundLocation.deity === 'Ra' && '𓇳'}
                  {foundLocation.deity === 'Horus' && '𓅃'}
                  {foundLocation.deity === 'Isis' && '𓊨'}
                  {foundLocation.deity === 'Osiris' && '𓋴'}
                  {foundLocation.deity === 'Thoth' && '𓁟'}
                  {foundLocation.deity === 'Anubis' && '𓃣'}
                  {foundLocation.deity === 'Sobek' && '𓆊'}
                  {foundLocation.deity === 'Hathor' && '𓋹'}
                  {foundLocation.deity === 'Bastet' && '𓃀'}
                  {foundLocation.deity === 'Amun-Ra' && '𓊹'}
                  {foundLocation.deity === 'Athena' && '🦉'}
                  {foundLocation.deity === 'Zeus' && '⚡'}
                  {foundLocation.deity === 'Apollo' && '🎵'}
                  {foundLocation.deity === 'Marduk' && '𓊨'}
                  {foundLocation.deity === 'Ishtar' && '⭐'}
                  {foundLocation.deity === 'Yahweh' && '🕯️'}
                </div>
                <p className="font-semibold text-egyptian-blue">{foundLocation.deity}</p>
              </div>
            </div>
          )}
          
          <div>
            <h2 className="text-2xl font-bold text-gold mb-3 flex items-center gap-2">
              <Globe size={24} />
              Civilization
            </h2>
            <div className="bg-white/50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{civInfo.emoji}</span>
                <div>
                  <p className="font-semibold text-egyptian-blue">{civInfo.name} Civilization</p>
                  <p className="text-xs text-gray-500">{foundSite.region}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="egyptian-card space-y-4"
      >
        <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
          <Sun size={20} className="text-gold" />
          <h2 className="text-xl font-bold text-gold">Historical Description</h2>
        </div>
        <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
          {foundLocation.longDescription.split('\n\n').map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
      
      {/* Navigation footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex justify-between items-center pt-6 border-t border-gold/20 flex-wrap gap-4"
      >
        <Link
          href="/"
          className="text-gold hover:text-gold/80 transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Return to Map
        </Link>
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Building2 size={14} />
            <span>{foundLocation.type || 'Historical Site'}</span>
          </div>
          <div className="w-1 h-1 bg-gold rounded-full"></div>
          <div className="flex items-center gap-1">
            <Moon size={14} />
            <span>Ancient World Heritage</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}