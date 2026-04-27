'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X, MapPin, Building2, Pyramid, Landmark, Globe, Compass, Castle, Crown } from 'lucide-react'

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
  { id: 'Wadjet', name: 'Wadjet', icon: '🐍' },
  { id: 'Nekhbet', name: 'Nekhbet', icon: '🦅' },
  { id: 'Min', name: 'Min', icon: '🌾' },
  { id: 'Atum', name: 'Atum', icon: '𓇳' },
  { id: 'Aten', name: 'Aten', icon: '☀️' },
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
  { id: 'Leto', name: 'Leto', icon: '👩' },
  // Mesopotamian Deities
  { id: 'Marduk', name: 'Marduk', icon: '𓊨' },
  { id: 'Ishtar', name: 'Ishtar', icon: '⭐' },
  { id: 'Nabu', name: 'Nabu', icon: '📜' },
  { id: 'Shamash', name: 'Shamash', icon: '☀️' },
  { id: 'Nanna', name: 'Nanna', icon: '🌙' },
  // Canaanite/Israelite Deities
  { id: 'Yahweh', name: 'Yahweh', icon: '🕯️' },
  // Phoenician Deities
  { id: 'Tanit', name: 'Tanit', icon: '🌙' },
  { id: 'Melqart', name: 'Melqart', icon: '🏛️' },
  { id: 'Baalat', name: 'Baalat', icon: '👑' },
  { id: 'Eshmun', name: 'Eshmun', icon: '🏺' },
  { id: 'Apedemak', name: 'Apedemak', icon: '🦁' },
  // Indian Deities
  { id: 'Shiva', name: 'Shiva', icon: '🕉️' },
  { id: 'Buddha', name: 'Buddha', icon: '☸️' },
  { id: 'Vishnu', name: 'Vishnu', icon: '🌀' },
  { id: 'Brahma', name: 'Brahma', icon: '📿' },
  // Chinese Deities
  { id: 'Yu Huang', name: 'Jade Emperor', icon: '☯️' },
  { id: 'Guan Yin', name: 'Guanyin', icon: '🌸' },
  // Americas Deities
  { id: 'Quetzalcoatl', name: 'Quetzalcoatl', icon: '🐍' },
  { id: 'Kukulkan', name: 'Kukulkan', icon: '🐍' },
  { id: 'Inti', name: 'Inti', icon: '☀️' },
  { id: 'Viracocha', name: 'Viracocha', icon: '👑' },
]

const regions = [
  { id: 'all', name: 'All Regions', icon: <Globe size={14} /> },
  // Egypt
  { id: 'Egypt - Delta', name: 'Egypt - Nile Delta', icon: <MapPin size={14} /> },
  { id: 'Egypt - Memphis', name: 'Egypt - Memphis / Giza', icon: <Pyramid size={14} /> },
  { id: 'Egypt - Thebes', name: 'Egypt - Thebes / Luxor', icon: <Building2 size={14} /> },
  { id: 'Egypt - Upper Egypt', name: 'Egypt - Upper Egypt', icon: <Compass size={14} /> },
  { id: 'Egypt - Far South', name: 'Egypt - Far South / Nubia', icon: <Compass size={14} /> },
  // Nubia & East Africa
  { id: 'Nubia / Kush', name: 'Nubia / Kush (Sudan)', icon: <Pyramid size={14} /> },
  { id: 'East Africa (Ethiopia)', name: 'East Africa - Aksum (Ethiopia)', icon: <Landmark size={14} /> },
  // Red Sea & Punt
  { id: 'Red Sea Coast', name: 'Red Sea Coast', icon: <Compass size={14} /> },
  { id: 'Horn of Africa', name: 'Horn of Africa (Somalia/Eritrea)', icon: <MapPin size={14} /> },
  { id: 'Red Sea', name: 'Red Sea', icon: <Compass size={14} /> },
  // Phoenicia & North Africa
  { id: 'Phoenicia', name: 'Phoenicia (Lebanon)', icon: <Building2 size={14} /> },
  { id: 'North Africa', name: 'North Africa - Carthage', icon: <Landmark size={14} /> },
  { id: 'Sicily', name: 'Sicily - Motya', icon: <MapPin size={14} /> },
  // Mesopotamia
  { id: 'Mesopotamia', name: 'Mesopotamia (Iraq)', icon: <Building2 size={14} /> },
  // Canaan & Hebrews
  { id: 'Judah/Canaan', name: 'Judah / Canaan (Israel/Palestine)', icon: <Landmark size={14} /> },
  { id: 'Sinai Peninsula', name: 'Sinai Peninsula', icon: <Compass size={14} /> },
  // Anatolia & Invaders
  { id: 'Anatolia', name: 'Anatolia (Turkey)', icon: <Building2 size={14} /> },
  { id: 'Levant', name: 'Levant (Syria/Lebanon)', icon: <Compass size={14} /> },
  // Greece & Aegean
  { id: 'Greece', name: 'Greece', icon: <Landmark size={14} /> },
  { id: 'Crete', name: 'Crete - Minoan Civilization', icon: <Building2 size={14} /> },
  { id: 'Santorini', name: 'Santorini - Akrotiri', icon: <Compass size={14} /> },
  // Cyprus
  { id: 'Cyprus', name: 'Cyprus - Paphos', icon: <MapPin size={14} /> },
  // Persia / Iran
  { id: 'Persia', name: 'Persia (Iran)', icon: <Building2 size={14} /> },
  // Etruria / Italy
  { id: 'Etruria', name: 'Etruria (Italy)', icon: <Castle size={14} /> },
  // India
  { id: 'Indus Valley', name: 'Indus Valley (Pakistan/India)', icon: <Building2 size={14} /> },
  { id: 'Northern India', name: 'Northern India (Bihar, UP)', icon: <Landmark size={14} /> },
  { id: 'Western India', name: 'Western India (Maharashtra)', icon: <Compass size={14} /> },
  // China
  { id: 'Northern China', name: 'Northern China (Henan, Shaanxi, Beijing)', icon: <Pyramid size={14} /> },
  { id: 'Western China', name: 'Western China (Gansu)', icon: <Compass size={14} /> },
  { id: 'Southern China', name: 'Southern China (Sichuan)', icon: <Landmark size={14} /> },
  // Americas
  { id: 'Mesoamerica', name: 'Mesoamerica (Mexico)', icon: <Pyramid size={14} /> },
  { id: 'Maya Region', name: 'Maya Region (Guatemala, Mexico, Honduras)', icon: <Building2 size={14} /> },
  { id: 'Andes', name: 'Andes (Peru, Bolivia)', icon: <Landmark size={14} /> },
  { id: 'North America', name: 'North America (USA)', icon: <Compass size={14} /> },
  // Africa - General
  { id: 'Southern Africa', name: 'Southern Africa (Zimbabwe, South Africa)', icon: <Landmark size={14} /> },
  { id: 'West Africa (Mauritania)', name: 'West Africa - Dhar Tichitt (Mauritania)', icon: <Landmark size={14} /> },
  { id: 'West Africa (Nigeria)', name: 'West Africa - Nok / Ife / Benin (Nigeria)', icon: <Building2 size={14} /> },
  { id: 'West Africa (Mali)', name: 'West Africa - Timbuktu / Jenne-Jeno (Mali)', icon: <Landmark size={14} /> },
  { id: 'West Africa (Ghana)', name: 'West Africa - Kintampo (Ghana)', icon: <Compass size={14} /> },
  { id: 'North Africa (Libya)', name: 'North Africa - Garamantes (Libya)', icon: <Compass size={14} /> },
  { id: 'North Africa (Algeria)', name: 'North Africa - Tassili (Algeria)', icon: <Landmark size={14} /> },
  { id: 'North Africa (Morocco)', name: 'North Africa - Volubilis (Morocco)', icon: <Building2 size={14} /> },
]

const types = [
  { id: 'all', name: 'All Types', icon: <Landmark size={16} /> },
  { id: 'temple', name: 'Temple', icon: <Building2 size={16} /> },
  { id: 'tomb', name: 'Tomb', icon: <Pyramid size={16} /> },
  { id: 'monument', name: 'Monument', icon: <Landmark size={16} /> },
  { id: 'city', name: 'City', icon: <MapPin size={16} /> },
  { id: 'palace', name: 'Palace', icon: <Castle size={16} /> },
]

export default function MapFilters({ filters, onFilterChange, onClose }: MapFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [localSearch, setLocalSearch] = useState(filters.search)

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
  }, [filters.deity, filters.region, filters.type, filters.search])

  const getRegionDisplay = useCallback(() => {
    const region = regions.find(r => r.id === filters.region)
    return region ? region.name : 'All Regions'
  }, [filters.region])

  const getDeityDisplay = useCallback(() => {
    const deity = deities.find(d => d.id === filters.deity)
    return deity ? deity.name : 'All Deities'
  }, [filters.deity])

  // Total sites count
  const totalSites = '200+'

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
            placeholder="Search 200+ ancient sites..."
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
            className="bg-papyrus/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/30 overflow-hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-5 space-y-5">
              {/* Deity Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <span>𓋹</span> Filter by Deity ({deities.length - 1} gods)
                </label>
                <div className="flex flex-wrap gap-2 mt-1 max-h-48 overflow-y-auto pb-1">
                  {deities.map((deity) => (
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
                    </button>
                  ))}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <label className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1 mb-2">
                  <Globe size={12} /> Filter by Region
                </label>
                <div className="grid grid-cols-1 gap-1.5 mt-1 max-h-48 overflow-y-auto pr-1">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => onFilterChange({ ...filters, region: region.id })}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all text-left ${
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
                <label className="text-xs text-gold font-semibold uppercase tracking-wider mb-2 block">Filter by Type</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {types.map((type) => (
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
                    </button>
                  ))}
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

              {/* Clear Filters Button */}
              <div className="pt-2">
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

              {/* Results Count */}
              <div className="text-center text-xs text-gray-500 pt-3 border-t border-gold/20">
                <span className="text-gold font-semibold">🏺 {totalSites} total sites</span>
                {hasActiveFilters && <span className="text-gray-400"> • Filtered results shown</span>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}