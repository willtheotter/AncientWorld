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
  sites?: Record<string, any> // Pass sites from your sites.ts
}

// Deities from your siteIdsByDeity
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
  { id: 'Demeter', name: 'Demeter', icon: '🌾' },
  { id: 'Hephaestus', name: 'Hephaestus', icon: '🔨' },
  { id: 'Dionysus', name: 'Dionysus', icon: '🍷' },
  { id: 'Artemis', name: 'Artemis', icon: '🏹' },
  { id: 'Aphrodite', name: 'Aphrodite', icon: '❤️' },
  { id: 'Ares', name: 'Ares', icon: '⚔️' },
  { id: 'Hermes', name: 'Hermes', icon: '✈️' },
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

// Regions that match your site.region values
const regions = [
  { id: 'all', name: 'All Regions', icon: <Globe size={14} /> },
  // North Africa
  { id: 'Egypt - Delta', name: 'Egypt - Nile Delta', icon: <MapPin size={14} /> },
  { id: 'Egypt - Memphis', name: 'Egypt - Memphis / Giza', icon: <Pyramid size={14} /> },
  { id: 'Egypt - Thebes', name: 'Egypt - Thebes / Luxor', icon: <Building2 size={14} /> },
  { id: 'Egypt - Upper Egypt', name: 'Egypt - Upper Egypt', icon: <Compass size={14} /> },
  { id: 'Egypt - Far South', name: 'Egypt - Far South / Nubia', icon: <Compass size={14} /> },
  { id: 'Egypt - Middle Egypt', name: 'Egypt - Middle Egypt', icon: <Compass size={14} /> },
  // Nubia & East Africa
  { id: 'Nubia / Kush (Sudan)', name: 'Nubia / Kush (Sudan)', icon: <Pyramid size={14} /> },
  { id: 'East Africa (Ethiopia)', name: 'East Africa - Aksum (Ethiopia)', icon: <Landmark size={14} /> },
  // Red Sea & Horn of Africa
  { id: 'Red Sea Coast (Egypt)', name: 'Red Sea Coast', icon: <Compass size={14} /> },
  { id: 'Horn of Africa (Eritrea)', name: 'Horn of Africa (Eritrea)', icon: <MapPin size={14} /> },
  { id: 'Horn of Africa (Somalia)', name: 'Horn of Africa (Somalia)', icon: <MapPin size={14} /> },
  // West Africa
  { id: 'West Africa (Mauritania)', name: 'West Africa - Mauritania', icon: <Landmark size={14} /> },
  { id: 'West Africa (Nigeria)', name: 'West Africa - Nigeria', icon: <Building2 size={14} /> },
  { id: 'West Africa (Mali)', name: 'West Africa - Mali', icon: <Landmark size={14} /> },
  { id: 'West Africa (Ghana)', name: 'West Africa - Ghana', icon: <Compass size={14} /> },
  // Central Africa
  { id: 'Central Africa (Congo Basin)', name: 'Central Africa (Congo Basin)', icon: <Compass size={14} /> },
  { id: 'Great Lakes (Congo/Rwanda)', name: 'Great Lakes (Congo/Rwanda)', icon: <Landmark size={14} /> },
  // Southern Africa
  { id: 'Southern Africa (Zimbabwe)', name: 'Southern Africa (Zimbabwe)', icon: <Landmark size={14} /> },
  { id: 'Southern Africa (South Africa)', name: 'Southern Africa (South Africa)', icon: <Landmark size={14} /> },
  { id: 'Southern Africa (Botswana)', name: 'Southern Africa (Botswana)', icon: <Landmark size={14} /> },
  { id: 'Southern Africa (Namibia)', name: 'Southern Africa (Namibia)', icon: <Landmark size={14} /> },
  // North Africa (non-Egypt)
  { id: 'North Africa (Tunisia)', name: 'North Africa (Tunisia)', icon: <Landmark size={14} /> },
  { id: 'North Africa (Algeria)', name: 'North Africa (Algeria)', icon: <Landmark size={14} /> },
  { id: 'North Africa (Morocco)', name: 'North Africa (Morocco)', icon: <Landmark size={14} /> },
  { id: 'North Africa (Libya)', name: 'North Africa (Libya)', icon: <Landmark size={14} /> },
  // Mediterranean & Middle East
  { id: 'Phoenicia (Lebanon)', name: 'Phoenicia (Lebanon)', icon: <Building2 size={14} /> },
  { id: 'Mesopotamia (Iraq)', name: 'Mesopotamia (Iraq)', icon: <Building2 size={14} /> },
  { id: 'Judah/Canaan (Israel)', name: 'Judah / Canaan (Israel)', icon: <Landmark size={14} /> },
  { id: 'Judah/Canaan (West Bank)', name: 'Judah / Canaan (West Bank)', icon: <Landmark size={14} /> },
  { id: 'Anatolia (Turkey)', name: 'Anatolia (Turkey)', icon: <Castle size={14} /> },
  { id: 'Levant (Syria)', name: 'Levant (Syria)', icon: <Compass size={14} /> },
  { id: 'Sinai Peninsula (Egypt)', name: 'Sinai Peninsula', icon: <Compass size={14} /> },
  { id: 'Cyprus', name: 'Cyprus', icon: <MapPin size={14} /> },
  // Greece & Europe
  { id: 'Greece', name: 'Greece', icon: <Landmark size={14} /> },
  { id: 'Crete', name: 'Crete', icon: <Building2 size={14} /> },
  { id: 'Santorini', name: 'Santorini', icon: <Compass size={14} /> },
  { id: 'Asia Minor (Turkey)', name: 'Asia Minor (Turkey)', icon: <Castle size={14} /> },
  { id: 'Etruria (Italy)', name: 'Etruria (Italy)', icon: <Castle size={14} /> },
  { id: 'Italy', name: 'Italy', icon: <Castle size={14} /> },
  // Asia
  { id: 'Persia (Iran)', name: 'Persia (Iran)', icon: <Building2 size={14} /> },
  { id: 'Indus Valley (Pakistan)', name: 'Indus Valley (Pakistan)', icon: <Building2 size={14} /> },
  { id: 'India', name: 'India', icon: <Landmark size={14} /> },
  { id: 'Northern India (Bihar)', name: 'Northern India (Bihar)', icon: <Landmark size={14} /> },
  { id: 'Western India (Maharashtra)', name: 'Western India (Maharashtra)', icon: <Compass size={14} /> },
  { id: 'Northern China (Henan)', name: 'Northern China (Henan)', icon: <Pyramid size={14} /> },
  { id: 'Northern China (Shaanxi)', name: 'Northern China (Shaanxi)', icon: <Pyramid size={14} /> },
  { id: 'Northern China (Beijing)', name: 'Northern China (Beijing)', icon: <Pyramid size={14} /> },
  { id: 'Western China (Gansu)', name: 'Western China (Gansu)', icon: <Compass size={14} /> },
  { id: 'Southern China (Sichuan)', name: 'Southern China (Sichuan)', icon: <Landmark size={14} /> },
  // Americas
  { id: 'North America (Mexico)', name: 'North America (Mexico)', icon: <Pyramid size={14} /> },
  { id: 'North America (Guatemala)', name: 'North America (Guatemala)', icon: <Pyramid size={14} /> },
  { id: 'North America (Honduras)', name: 'North America (Honduras)', icon: <Pyramid size={14} /> },
  { id: 'South America (Peru)', name: 'South America (Peru)', icon: <Landmark size={14} /> },
  { id: 'South America (Bolivia)', name: 'South America (Bolivia)', icon: <Landmark size={14} /> },
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
    if (!sites) return { totalSites: '200+', deityCounts: {}, regionCounts: {}, typeCounts: {} }
    
    let totalLocations = 0
    const deityCounts: Record<string, number> = {}
    const regionCounts: Record<string, number> = {}
    const typeCounts: Record<string, number> = { temple: 0, tomb: 0, monument: 0, city: 0, palace: 0 }
    
    Object.values(sites).forEach((site: any) => {
      site.locations?.forEach((location: any) => {
        totalLocations++
        
        // Count by deity (from location.deity)
        if (location.deity) {
          deityCounts[location.deity] = (deityCounts[location.deity] || 0) + 1
        }
        
        // Count by region (from site.region)
        if (site.region) {
          regionCounts[site.region] = (regionCounts[site.region] || 0) + 1
        }
        
        // Count by type (from location.type)
        if (location.type) {
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
    <div className="absolute top-4 right-4 z-[2000] w-80">
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
            className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="p-5 space-y-5 pb-8">
              {/* Clear Filter Button - Prominent at top */}
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

              {/* Region Filter - Moved to Top */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <Globe size={12} /> Filter by Region
                </label>
                <div className="grid grid-cols-1 gap-1.5 mt-1 max-h-48 overflow-y-auto pr-1">
                  {regions.map((region) => {
                    const count = getFilterCounts.regionCounts[region.id] || 0
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

              {/* Deity Filter - Below Regions */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <span>𓋹</span> Filter by Deity
                </label>
                <div className="flex flex-wrap gap-2 mt-1 max-h-48 overflow-y-auto pb-1">
                  {deities.map((deity) => {
                    const count = deity.id === 'all' 
                      ? Object.values(getFilterCounts.deityCounts).reduce((a, b) => a + b, 0)
                      : getFilterCounts.deityCounts[deity.id] || 0
                    
                    if (deity.id !== 'all' && count === 0) return null
                    
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
                        {deity.id !== 'all' && count > 0 && (
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

              {/* Results Count */}
              <div className="text-center text-xs text-gray-500 pt-3 border-t border-gold/20">
                <span className="text-gold font-semibold">🏺 {getFilterCounts.totalSites} total sites</span>
                {hasActiveFilters && <span className="text-gray-400"> • Filtered results</span>}
              </div>

              <div className="h-2" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}