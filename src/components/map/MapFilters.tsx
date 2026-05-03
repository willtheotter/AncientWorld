'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X, MapPin, Building2, Pyramid, Landmark, Globe, Compass, Castle } from 'lucide-react'

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
  sites?: Record<string, any>
}

// Complete Deities list
const deities = [
  { id: 'all', name: 'All Deities', icon: '𓋹' },
  // Egyptian Deities
  { id: 'Ra', name: 'Ra', icon: '𓇳' },
  { id: 'Amun-Ra', name: 'Amun-Ra', icon: '𓊹' },
  { id: 'Osiris', name: 'Osiris', icon: '𓋴' },
  { id: 'Isis', name: 'Isis', icon: '𓊨' },
  { id: 'Horus', name: 'Horus', icon: '𓅃' },
  { id: 'Anubis', name: 'Anubis', icon: '𓃣' },
  { id: 'Thoth', name: 'Thoth', icon: '𓁟' },
  { id: 'Ptah', name: 'Ptah', icon: '𓊹' },
  { id: 'Hathor', name: 'Hathor', icon: '𓋹' },
  { id: 'Sobek', name: 'Sobek', icon: '𓆊' },
  { id: 'Bastet', name: 'Bastet', icon: '𓃀' },
  { id: 'Sekhmet', name: 'Sekhmet', icon: '🦁' },
  { id: 'Khonsu', name: 'Khonsu', icon: '🌙' },
  { id: 'Mut', name: 'Mut', icon: '🦅' },
  { id: 'Montu', name: 'Montu', icon: '🏹' },
  { id: 'Neith', name: 'Neith', icon: '🏺' },
  { id: 'Aten', name: 'Aten', icon: '☀️' },
  { id: 'Atum', name: 'Atum', icon: '𓇳' },
  // Greek Deities
  { id: 'Zeus', name: 'Zeus', icon: '⚡' },
  { id: 'Hera', name: 'Hera', icon: '👑' },
  { id: 'Athena', name: 'Athena', icon: '🦉' },
  { id: 'Apollo', name: 'Apollo', icon: '🎵' },
  { id: 'Poseidon', name: 'Poseidon', icon: '🌊' },
  { id: 'Artemis', name: 'Artemis', icon: '🏹' },
  { id: 'Aphrodite', name: 'Aphrodite', icon: '❤️' },
  { id: 'Hermes', name: 'Hermes', icon: '✈️' },
  { id: 'Demeter', name: 'Demeter', icon: '🌾' },
  { id: 'Dionysus', name: 'Dionysus', icon: '🍷' },
  { id: 'Ares', name: 'Ares', icon: '⚔️' },
  // Babylonian Deities
  { id: 'Marduk', name: 'Marduk', icon: '𓊨' },
  { id: 'Ishtar', name: 'Ishtar', icon: '⭐' },
  { id: 'Nabu', name: 'Nabu', icon: '📜' },
  { id: 'Shamash', name: 'Shamash', icon: '☀️' },
  { id: 'Nanna', name: 'Nanna', icon: '🌙' },
  // Israelite
  { id: 'Yahweh', name: 'Yahweh', icon: '🕯️' },
  // Phoenician
  { id: 'Tanit', name: 'Tanit', icon: '🌙' },
  { id: 'Melqart', name: 'Melqart', icon: '🏛️' },
  { id: 'Eshmun', name: 'Eshmun', icon: '🏺' },
  // Persian
  { id: 'Ahura Mazda', name: 'Ahura Mazda', icon: '🔥' },
  { id: 'Anahita', name: 'Anahita', icon: '💧' },
  // Indian
  { id: 'Shiva', name: 'Shiva', icon: '🕉️' },
  { id: 'Buddha', name: 'Buddha', icon: '☸️' },
  // Maya
  { id: 'Kukulkan', name: 'Kukulkan', icon: '🐍' },
  { id: 'Itzamna', name: 'Itzamna', icon: '🦎' },
  { id: 'Chaac', name: 'Chaac', icon: '🌧️' },
  // Inca
  { id: 'Inti', name: 'Inti', icon: '☀️' },
  { id: 'Viracocha', name: 'Viracocha', icon: '👑' },
]

// Regions matching your data files - UPDATED with Nubia & Kush and East Africa
const regions = [
  { id: 'all', name: 'All Regions', icon: <Globe size={14} /> },
  // Egypt
  { id: 'Lower Egypt', name: 'Lower Egypt (Nile Delta)', icon: <Compass size={14} /> },
  { id: 'Upper Egypt', name: 'Upper Egypt (Thebes to Aswan)', icon: <Pyramid size={14} /> },
  // Nubia & Kush (NEW)
  { id: 'Nubia & Kush', name: 'Nubia & Kush (Sudan)', icon: <Pyramid size={14} /> },
  // East Africa (NEW)
  { id: 'East Africa', name: 'East Africa (Punt, Aksum, Horn of Africa)', icon: <Compass size={14} /> },
  // North Africa
  { id: 'North Africa', name: 'North Africa (Carthage, Garamantes)', icon: <Landmark size={14} /> },
  // West Africa
  { id: 'West Africa', name: 'West Africa (Nok, Mali, Ghana)', icon: <Landmark size={14} /> },
  // Central Africa
  { id: 'Central Africa', name: 'Central Africa (Bantu, Kongo, Luba)', icon: <Compass size={14} /> },
  // Southern Africa
  { id: 'Southern Africa', name: 'Southern Africa (Zimbabwe, Mapungubwe)', icon: <Landmark size={14} /> },
  // Mediterranean & Middle East
  { id: 'Phoenicia', name: 'Phoenicia (Tyre, Sidon, Carthage)', icon: <Building2 size={14} /> },
  { id: 'Babylonia', name: 'Babylonia (Mesopotamia)', icon: <Building2 size={14} /> },
  { id: 'Israel & Judah', name: 'Israel & Judah', icon: <Landmark size={14} /> },
  { id: 'Anatolia', name: 'Anatolia (Hittites, Troy)', icon: <Castle size={14} /> },
  { id: 'Levant', name: 'Levant (Kadesh, Megiddo)', icon: <Compass size={14} /> },
  // Greece & Aegean
  { id: 'Greek & Aegean', name: 'Greek & Aegean (Athens, Delphi)', icon: <Landmark size={14} /> },
  { id: 'Mycenaean', name: 'Mycenaean (Mycenae, Tiryns, Pylos)', icon: <Castle size={14} /> },
  { id: 'Minoan', name: 'Minoan (Crete, Knossos, Phaistos)', icon: <Building2 size={14} /> },
  // Persia & Etruria
  { id: 'Persian Empire', name: 'Persian Empire (Persepolis)', icon: <Castle size={14} /> },
  { id: 'Etruscan', name: 'Etruscan (Tarquinia, Cerveteri)', icon: <Landmark size={14} /> },
  // Asia
  { id: 'Ancient India', name: 'Ancient India (Indus Valley)', icon: <Landmark size={14} /> },
  { id: 'Ancient China', name: 'Ancient China (Shang, Qin, Ming)', icon: <Pyramid size={14} /> },
  // Americas
  { id: 'Ancient Americas', name: 'Ancient Americas (Maya, Inca)', icon: <Landmark size={14} /> },
]

const types = [
  { id: 'all', name: 'All Types', icon: <Landmark size={16} /> },
  { id: 'temple', name: 'Temple', icon: <Building2 size={16} /> },
  { id: 'tomb', name: 'Tomb', icon: <Pyramid size={16} /> },
  { id: 'monument', name: 'Monument', icon: <Landmark size={16} /> },
  { id: 'city', name: 'City', icon: <MapPin size={16} /> },
  { id: 'palace', name: 'Palace', icon: <Castle size={16} /> },
]

export default function MapFilters({ filters, onFilterChange, onClose, sites }: MapFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localSearch, setLocalSearch] = useState(filters.search)

  // Calculate real counts from sites data
  const getFilterCounts = useMemo(() => {
    if (!sites) return { totalSites: '0', deityCounts: {}, regionCounts: {}, typeCounts: {} }
    
    let totalLocations = 0
    const deityCounts: Record<string, number> = {}
    const regionCounts: Record<string, number> = {}
    const typeCounts: Record<string, number> = { temple: 0, tomb: 0, monument: 0, city: 0, palace: 0 }
    
    Object.values(sites).forEach((site: any) => {
      site.locations?.forEach((location: any) => {
        totalLocations++
        
        if (location.deity) {
          deityCounts[location.deity] = (deityCounts[location.deity] || 0) + 1
        }
        
        if (site.region) {
          regionCounts[site.region] = (regionCounts[site.region] || 0) + 1
        }
        
        if (location.type && typeCounts[location.type] !== undefined) {
          typeCounts[location.type] = (typeCounts[location.type] || 0) + 1
        }
      })
    })
    
    return {
      totalSites: totalLocations.toString(),
      deityCounts,
      regionCounts,
      typeCounts
    }
  }, [sites])

  const handleSearchSubmit = useCallback(() => {
    onFilterChange({ ...filters, search: localSearch })
  }, [filters, localSearch, onFilterChange])

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit()
    }
  }, [handleSearchSubmit])

  const clearFilters = useCallback(() => {
    setLocalSearch('')
    onFilterChange({
      search: '',
      deity: 'all',
      region: 'all',
      type: 'all',
    })
  }, [onFilterChange])

  const hasActiveFilters = useMemo(() => {
    return filters.deity !== 'all' || filters.region !== 'all' || filters.type !== 'all' || filters.search !== ''
  }, [filters])

  const getRegionDisplay = useCallback(() => {
    const region = regions.find(r => r.id === filters.region)
    return region ? region.name : 'All Regions'
  }, [filters.region])

  const getDeityDisplay = useCallback(() => {
    const deity = deities.find(d => d.id === filters.deity)
    return deity ? deity.name : 'All Deities'
  }, [filters.deity])

  return (
    <div className="fixed top-24 left-4 z-[2000] w-80">
      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 mb-2"
      >
        <div className="flex items-center p-3">
          <Search size={18} className="text-gold ml-1" />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search ancient sites..."
            className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-800 placeholder-gray-500 text-sm"
          />
          {localSearch && (
            <button
              onClick={() => {
                setLocalSearch('')
                onFilterChange({ ...filters, search: '' })
              }}
              className="p-1.5 hover:bg-gold/20 rounded-full transition-colors"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 ml-1 rounded-lg transition-colors ${isExpanded || hasActiveFilters ? 'bg-gold/20 text-gold' : 'hover:bg-gold/10'}`}
            aria-label="Open filters"
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
            className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 overflow-y-auto max-h-[70vh]"
          >
            <div className="p-5 pt-6 pb-8 space-y-5">
              {/* Clear Filter Button */}
              <div>
                {hasActiveFilters ? (
                  <button
                    onClick={clearFilters}
                    className="w-full py-2.5 bg-gradient-to-r from-red-500/80 to-red-600/80 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                  >
                    <X size={16} />
                    Clear All Filters
                  </button>
                ) : (
                  <div className="w-full py-2.5 bg-gray-200/50 text-gray-400 font-semibold rounded-lg text-sm text-center cursor-not-allowed">
                    No Active Filters
                  </div>
                )}
              </div>

              {/* Region Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <Globe size={12} /> Filter by Region
                </label>
                <div className="grid grid-cols-1 gap-1.5 mt-1 max-h-48 overflow-y-auto pr-1">
                  {regions.map((region) => {
                    const count = getFilterCounts.regionCounts[region.id] || 0
                    if (region.id !== 'all' && count === 0) return null
                    return (
                      <button
                        key={region.id}
                        onClick={() => onFilterChange({ ...filters, region: region.id })}
                        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-xs transition-all text-left ${
                          filters.region === region.id
                            ? 'bg-gold text-gray-900 font-semibold shadow-md'
                            : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="opacity-70">{region.icon}</span>
                          <span>{region.name}</span>
                        </div>
                        {count > 0 && (
                          <span className={`text-xs ${filters.region === region.id ? 'text-gray-800' : 'text-gray-500'}`}>
                            ({count})
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Deity Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <span>𓋹</span> Filter by Deity
                </label>
                <div className="flex flex-wrap gap-2 mt-1 max-h-48 overflow-y-auto pb-1">
                  {deities.map((deity) => {
                    const count = deity.id === 'all' 
                      ? Object.values(getFilterCounts.deityCounts).reduce((a, b) => a + b, 0)
                      : getFilterCounts.deityCounts[deity.id] || 0
                    
                    return (
                      <button
                        key={deity.id}
                        onClick={() => onFilterChange({ ...filters, deity: deity.id })}
                        className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                          filters.deity === deity.id
                            ? 'bg-gold text-gray-900 font-semibold shadow-md'
                            : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                        }`}
                      >
                        <span className="mr-1">{deity.icon}</span>
                        {deity.name}
                        {count > 0 && (
                          <span className="ml-1 opacity-70">({count})</span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider mb-2 block">Filter by Type</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {types.map((type) => {
                    const count = type.id === 'all' 
                      ? Object.values(getFilterCounts.typeCounts).reduce((a, b) => a + b, 0)
                      : getFilterCounts.typeCounts[type.id as keyof typeof getFilterCounts.typeCounts] || 0
                    
                    return (
                      <button
                        key={type.id}
                        onClick={() => onFilterChange({ ...filters, type: type.id })}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all ${
                          filters.type === type.id
                            ? 'bg-gold text-gray-900 font-semibold shadow-md'
                            : 'bg-white/50 hover:bg-gold/20 text-gray-700'
                        }`}
                      >
                        {type.icon}
                        {type.name}
                        {count > 0 && (
                          <span className="ml-1 text-xs opacity-70">({count})</span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Active Filters Summary */}
              {hasActiveFilters && (
                <div className="bg-white/50 rounded-lg p-3 mt-2">
                  <div className="text-xs text-gray-600 mb-2 font-semibold">Active Filters:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {filters.search && (
                      <span className="text-xs bg-gold/30 px-2.5 py-1 rounded-full">🔍 "{filters.search}"</span>
                    )}
                    {filters.deity !== 'all' && (
                      <span className="text-xs bg-gold/30 px-2.5 py-1 rounded-full">𓋹 {getDeityDisplay()}</span>
                    )}
                    {filters.region !== 'all' && (
                      <span className="text-xs bg-gold/30 px-2.5 py-1 rounded-full">📍 {getRegionDisplay()}</span>
                    )}
                    {filters.type !== 'all' && (
                      <span className="text-xs bg-gold/30 px-2.5 py-1 rounded-full">🏛️ {types.find(t => t.id === filters.type)?.name}</span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}