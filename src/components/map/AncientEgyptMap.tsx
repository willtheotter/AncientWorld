'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { sites } from '@/lib/data/sites'
import MapFilters, { FilterOptions } from './MapFilters'

// Dynamically import Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface AncientEgyptMapProps {
  onSelectSite: (site: any) => void
  selectedSite: any
}

// Helper function to determine site type
const getSiteType = (location: any): string => {
  if (location.type) return location.type
  if (location.name.includes('Tomb') || location.name.includes('Nefertari') || location.name.includes('Valley')) return 'tomb'
  if (location.name.includes('Temple') || location.name.includes('Sanctuary') || location.name.includes('House')) return 'temple'
  if (location.name.includes('Pyramid') || location.name.includes('Sphinx') || location.name.includes('Colossi') || location.name.includes('Obelisk')) return 'monument'
  return 'city'
}

export default function AncientEgyptMap({ onSelectSite, selectedSite }: AncientEgyptMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [hoveredSite, setHoveredSite] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    deity: 'all',
    region: 'all',
    type: 'all',
  })
  const [filteredSites, setFilteredSites] = useState(Object.values(sites))

  useEffect(() => {
    setMapLoaded(true)
    import('leaflet/dist/leaflet.css')
    import('leaflet').then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    })
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = Object.values(sites)

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(site =>
        site.name.toLowerCase().includes(searchLower) ||
        site.locations.some(loc => loc.name.toLowerCase().includes(searchLower))
      )
    }

    // Deity filter
    if (filters.deity !== 'all') {
      filtered = filtered.filter(site =>
        site.locations.some(loc => loc.deity === filters.deity)
      )
    }

    // Region filter
    if (filters.region !== 'all') {
      filtered = filtered.filter(site => site.region === filters.region)
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter(site =>
        site.locations.some(loc => getSiteType(loc) === filters.type)
      )
    }

    setFilteredSites(filtered)
  }, [filters])

  if (!mapLoaded) {
    return (
      <div className="w-full h-[70vh] bg-gradient-to-b from-amber-900/20 to-egyptian-blue/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl animate-spin mb-4">𓂀</div>
          <p className="text-gold text-lg">Loading Map of the Ancient World...</p>
        </div>
      </div>
    )
  }

  const totalLocations = filteredSites.reduce((acc, site) => acc + site.locations.length, 0)

  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden border-2 border-gold/30 shadow-xl">
      <MapContainer
        center={[32, 35]}  // Centered on Eastern Mediterranean to show all civilizations
        zoom={4.5}          // Zoomed out to show from Greece to Mesopotamia
        zoomControl={true}
        attributionControl={true}
        style={{ height: '100%', width: '100%' }}
        maxBounds={[
          [-35, -20],  // Southwest corner (Africa)
          [50, 70]    // Northeast corner (Central Asia)
        ]}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        {filteredSites.map((site) => (
          <Marker
            key={site.id}
            position={site.coordinates}
            eventHandlers={{
              click: () => {
                console.log('Clicked:', site.name)
                onSelectSite(site)
              },
              mouseover: () => setHoveredSite(site.id),
              mouseout: () => setHoveredSite(null),
            }}
          >
            <Popup>
              <div className="text-center min-w-[180px] max-w-[250px]">
                <strong className="text-egyptian-blue text-base block">{site.name}</strong>
                <p className="text-sm text-gray-600 mt-1">{site.region}</p>
                <p className="text-xs text-gold mt-1 font-semibold">
                  {site.locations.length} site{site.locations.length !== 1 ? 's' : ''}
                </p>
                {/* Show deity badges */}
                {site.locations.some(loc => loc.deity) && (
                  <div className="flex flex-wrap gap-1 mt-2 justify-center">
                    {site.locations.map(loc => loc.deity && (
                      <span key={loc.deity} className="text-xs bg-gold/20 px-1.5 py-0.5 rounded">
                        {loc.deity}
                      </span>
                    ))}
                  </div>
                )}
                {/* Show type badge */}
                <div className="mt-2">
                  <span className="text-xs bg-egyptian-blue/20 px-1.5 py-0.5 rounded">
                    {site.locations[0]?.type || getSiteType(site.locations[0])}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Search & Filter Component - Top Right */}
      <MapFilters 
        filters={filters}
        onFilterChange={setFilters}
      />

      {/* Results counter - Bottom Left (moved from top-left to bottom-left) */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full z-[2000] flex items-center gap-2 pointer-events-none">
        <span className="text-gold">🏺</span>
        {totalLocations} site{totalLocations !== 1 ? 's' : ''} found
      </div>

      {/* Custom tooltip - Bottom Center */}
      <AnimatePresence>
        {hoveredSite && filteredSites.find(s => s.id === hoveredSite) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-sm z-[2000] whitespace-nowrap pointer-events-none"
          >
            {filteredSites.find(s => s.id === hoveredSite)?.name}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map instructions - Bottom Right */}
      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full z-[2000] flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
        Click markers to explore
      </div>
    </div>
  )
}