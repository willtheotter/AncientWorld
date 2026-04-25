'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X, MapPin, Building2, Pyramid, Landmark, Globe, Compass, Church, Castle } from 'lucide-react'

export interface FilterOptions {
  search: string
  deity: string
  region: string
  type: string
}

interface MapFiltersProps {
  filters: FilterOptions
  onFilterChange: (filters: FilterOptions) => void
  onClose?: () => void
}

const deities = [
  { id: 'all', name: 'All Deities', icon: '𓋹' },
  { id: 'Ra', name: 'Ra', icon: '𓇳' },
  { id: 'Horus', name: 'Horus', icon: '𓅃' },
  { id: 'Isis', name: 'Isis', icon: '𓊨' },
  { id: 'Osiris', name: 'Osiris', icon: '𓋴' },
  { id: 'Thoth', name: 'Thoth', icon: '𓁟' },
  { id: 'Anubis', name: 'Anubis', icon: '𓃣' },
  { id: 'Sobek', name: 'Sobek', icon: '𓆊' },
  { id: 'Hathor', name: 'Hathor', icon: '𓋹' },
  { id: 'Bastet', name: 'Bastet', icon: '𓃀' },
  { id: 'Amun-Ra', name: 'Amun-Ra', icon: '𓊹' },
  { id: 'Apollo', name: 'Apollo', icon: '🎵' },
  { id: 'Athena', name: 'Athena', icon: '🦉' },
  { id: 'Zeus', name: 'Zeus', icon: '⚡' },
  { id: 'Marduk', name: 'Marduk', icon: '𓊨' },
  { id: 'Ishtar', name: 'Ishtar', icon: '⭐' },
  { id: 'Yahweh', name: 'Yahweh', icon: '🕯️' },
]

const regions = [
  { id: 'all', name: 'All Regions', icon: <Globe size={14} /> },
  // Egypt
  { id: 'Egypt - Delta', name: '🇪🇬 Egypt - Nile Delta', icon: <MapPin size={14} /> },
  { id: 'Egypt - Memphis', name: '🇪🇬 Egypt - Memphis / Giza', icon: <Pyramid size={14} /> },
  { id: 'Egypt - Thebes', name: '🇪🇬 Egypt - Thebes / Luxor', icon: <Building2 size={14} /> },
  { id: 'Egypt - Far South', name: '🇪🇬 Egypt - Far South / Nubia', icon: <Compass size={14} /> },
  // Nubia & Africa
  { id: 'Nubia / Kush', name: '🇸🇩 Nubia / Kush (Sudan)', icon: <Pyramid size={14} /> },
  { id: 'East Africa (Ethiopia)', name: '🇪🇹 East Africa - Aksum (Ethiopia)', icon: <Landmark size={14} /> },
  // Red Sea & Punt
  { id: 'Red Sea Coast', name: '🌊 Red Sea Coast', icon: <Compass size={14} /> },
  { id: 'Horn of Africa', name: '🌍 Horn of Africa (Somalia/Eritrea)', icon: <MapPin size={14} /> },
  { id: 'Red Sea', name: '🌊 Red Sea', icon: <Compass size={14} /> },
  // Phoenicia
  { id: 'Phoenicia', name: '🇱🇧 Phoenicia (Lebanon)', icon: <Building2 size={14} /> },
  { id: 'North Africa', name: '🇹🇳 North Africa - Carthage', icon: <Landmark size={14} /> },
  { id: 'Sicily', name: '🇮🇹 Sicily - Motya', icon: <MapPin size={14} /> },
  // Mesopotamia
  { id: 'Mesopotamia', name: '🇮🇶 Mesopotamia (Iraq)', icon: <Building2 size={14} /> },
  // Canaan & Hebrews
  { id: 'Judah/Canaan', name: '🇮🇱 Judah / Canaan (Israel/Palestine)', icon: <Landmark size={14} /> },
  { id: 'Sinai Peninsula', name: '🏔️ Sinai Peninsula', icon: <Compass size={14} /> },
  // Anatolia & Invaders
  { id: 'Anatolia', name: '🇹🇷 Anatolia (Turkey)', icon: <Building2 size={14} /> },
  { id: 'Levant', name: '🇸🇾 Levant (Syria/Lebanon)', icon: <Compass size={14} /> },
  // Greece & Aegean
  { id: 'Greece', name: '🇬🇷 Greece', icon: <Landmark size={14} /> },
  { id: 'Crete', name: '🇬🇷 Crete - Minoan Civilization', icon: <Building2 size={14} /> },
  { id: 'Santorini', name: '🇬🇷 Santorini - Akrotiri', icon: <Compass size={14} /> },
]

const types = [
  { id: 'all', name: 'All Types', icon: <Landmark size={16} /> },
  { id: 'temple', name: 'Temple', icon: <Building2 size={16} /> },
  { id: 'tomb', name: 'Tomb', icon: <Pyramid size={16} /> },  // Changed from Tomb to Pyramid
  { id: 'monument', name: 'Monument', icon: <Landmark size={16} /> },
  { id: 'city', name: 'City', icon: <MapPin size={16} /> },
  { id: 'palace', name: 'Palace', icon: <Castle size={16} /> },
]

export default function MapFilters({ filters, onFilterChange, onClose }: MapFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localSearch, setLocalSearch] = useState(filters.search)

  const handleSearchSubmit = () => {
    onFilterChange({ ...filters, search: localSearch })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit()
    }
  }

  const clearFilters = () => {
    setLocalSearch('')
    onFilterChange({
      search: '',
      deity: 'all',
      region: 'all',
      type: 'all',
    })
  }

  const hasActiveFilters = filters.deity !== 'all' || filters.region !== 'all' || filters.type !== 'all' || filters.search !== ''

  // Get region display name
  const getRegionDisplay = () => {
    const region = regions.find(r => r.id === filters.region)
    return region ? region.name : 'All Regions'
  }

  return (
    <div className="absolute top-4 right-4 z-[2000] w-80">
      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 mb-2"
      >
        <div className="flex items-center p-2">
          <Search size={18} className="text-gold ml-2" />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search 72 ancient sites..."
            className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-800 placeholder-gray-500 text-sm"
          />
          {localSearch && (
            <button
              onClick={() => {
                setLocalSearch('')
                onFilterChange({ ...filters, search: '' })
              }}
              className="p-1 hover:bg-gold/20 rounded-full transition-colors"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 ml-1 rounded-lg transition-colors ${isExpanded || hasActiveFilters ? 'bg-gold/20 text-gold' : 'hover:bg-gold/10'}`}
          >
            <Filter size={18} />
          </button>
        </div>
      </motion.div>

      {/* Filter Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-4 space-y-4">
              {/* Deity Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1">
                  <span>𓋹</span> Filter by Deity
                </label>
                <div className="flex flex-wrap gap-1.5 mt-2 max-h-32 overflow-y-auto">
                  {deities.map((deity) => (
                    <button
                      key={deity.id}
                      onClick={() => onFilterChange({ ...filters, deity: deity.id })}
                      className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                        filters.deity === deity.id
                          ? 'bg-gold text-gray-900 font-semibold shadow-md'
                          : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                      }`}
                    >
                      <span className="mr-1">{deity.icon}</span>
                      {deity.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Globe size={12} /> Filter by Region
                </label>
                <div className="grid grid-cols-1 gap-1 mt-2 max-h-48 overflow-y-auto">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => onFilterChange({ ...filters, region: region.id })}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs transition-all text-left ${
                        filters.region === region.id
                          ? 'bg-gold text-gray-900 font-semibold shadow-md'
                          : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                      }`}
                    >
                      <span className="opacity-70">{region.icon}</span>
                      <span>{region.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider">Filter by Type</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {types.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => onFilterChange({ ...filters, type: type.id })}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${
                        filters.type === type.id
                          ? 'bg-gold text-gray-900 font-semibold shadow-md'
                          : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                      }`}
                    >
                      {type.icon}
                      {type.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters Summary */}
              {hasActiveFilters && (
                <div className="bg-white/40 rounded-lg p-2">
                  <div className="text-xs text-gray-600 mb-1">Active Filters:</div>
                  <div className="flex flex-wrap gap-1">
                    {filters.search && (
                      <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">🔍 "{filters.search}"</span>
                    )}
                    {filters.deity !== 'all' && (
                      <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">𓋹 {deities.find(d => d.id === filters.deity)?.name}</span>
                    )}
                    {filters.region !== 'all' && (
                      <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">📍 {getRegionDisplay()}</span>
                    )}
                    {filters.type !== 'all' && (
                      <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">🏛️ {types.find(t => t.id === filters.type)?.name}</span>
                    )}
                  </div>
                </div>
              )}

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-700 rounded-lg text-sm transition-colors"
                >
                  Clear All Filters
                </button>
              )}

              {/* Results Count */}
              <div className="text-center text-xs text-gray-500 pt-2 border-t border-gold/20">
                <span className="text-gold font-semibold">72 total sites</span>
                {hasActiveFilters && <span> • Filtered results shown</span>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}