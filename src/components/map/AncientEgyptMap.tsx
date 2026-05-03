'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { sites } from '@/lib/data/sites'
import MapFilters, { FilterOptions } from './MapFilters'

// Dynamic Leaflet imports
const MapContainer = dynamic(() => import('react-leaflet').then(m => m.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(m => m.TileLayer), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(m => m.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(m => m.Popup), { ssr: false })

interface Props {
  onSelectSite: (site: any) => void
  selectedSite: any
}

// Helper
const getSiteType = (location: any): string => {
  if (location.type) return location.type
  if (/Tomb|Valley|Nefertari/i.test(location.name)) return 'tomb'
  if (/Temple|Sanctuary|House/i.test(location.name)) return 'temple'
  if (/Pyramid|Sphinx|Colossi|Obelisk/i.test(location.name)) return 'monument'
  return 'city'
}

export default function AncientEgyptMap({ onSelectSite, selectedSite }: Props) {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [hoveredSite, setHoveredSite] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    deity: 'all',
    region: 'all',
    type: 'all',
  })

  // Init Leaflet safely
  useEffect(() => {
    setMapLoaded(true)
    import('leaflet/dist/leaflet.css')

    import('leaflet').then(L => {
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })
    })
  }, [])

  // Filter logic
  const filteredSites = useMemo(() => {
    return Object.values(sites).filter(site => {
      const matchesSearch =
        !filters.search ||
        site.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        site.locations.some(loc =>
          loc.name.toLowerCase().includes(filters.search.toLowerCase())
        )

      const matchesDeity =
        filters.deity === 'all' ||
        site.locations.some(loc => loc.deity === filters.deity)

      const matchesRegion =
        filters.region === 'all' || site.region === filters.region

      const matchesType =
        filters.type === 'all' ||
        site.locations.some(loc => getSiteType(loc) === filters.type)

      return matchesSearch && matchesDeity && matchesRegion && matchesType
    })
  }, [filters])

  const totalLocations = useMemo(
    () => filteredSites.reduce((acc, s) => acc + s.locations.length, 0),
    [filteredSites]
  )

  // Markers
  const markers = useMemo(() => {
    return filteredSites.map(site => (
      <Marker
        key={site.id}
        position={site.coordinates}
        eventHandlers={{
          click: () => onSelectSite(site),
          mouseover: () => setHoveredSite(site.id),
          mouseout: () => setHoveredSite(null),
        }}
      >
        <Popup>
          <div className="text-center min-w-[160px]">
            <strong>{site.name}</strong>
            <p className="text-xs">{site.region}</p>
          </div>
        </Popup>
      </Marker>
    ))
  }, [filteredSites, onSelectSite])

  if (!mapLoaded) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <div className="animate-spin text-4xl">𓂀</div>
      </div>
    )
  }

  return (
    <>
      {/* FILTER PANEL - Fixed to viewport, outside the map container */}
      <MapFilters 
        filters={filters} 
        onFilterChange={setFilters}
        sites={sites}
      />

      {/* MAP CONTAINER */}
      <div className="relative w-full h-[70vh] rounded-lg overflow-hidden">
        <MapContainer
          center={[32, 35]}
          zoom={4.5}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {markers}
        </MapContainer>

        {/* DESKTOP HOVER TOOLTIP */}
        <AnimatePresence>
          {hoveredSite && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 bg-black text-white px-3 py-1 rounded text-xs z-[2000]"
            >
              {filteredSites.find(s => s.id === hoveredSite)?.name}
            </motion.div>
          )}
        </AnimatePresence>

        {/* COUNTER */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs z-[2000]">
          🏺 {totalLocations} sites
        </div>
      </div>

      {/* 📱 MOBILE BOTTOM SHEET */}
      <AnimatePresence>
        {selectedSite && (
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-4 rounded-t-2xl z-[3000] md:hidden"
          >
            <h3 className="text-lg font-bold">{selectedSite.name}</h3>
            <p className="text-sm opacity-80">{selectedSite.region}</p>

            <p className="text-xs mt-2 text-gold">
              {selectedSite.locations.length} locations
            </p>

            <button
              onClick={() => onSelectSite(null)}
              className="mt-3 text-xs underline"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}