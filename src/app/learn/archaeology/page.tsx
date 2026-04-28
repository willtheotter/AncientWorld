'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Compass, 
  Map, 
  Brush, 
  Camera, 
  Microscope,
  Trophy,
  Search,
  Clock,
  Users,
  BookOpen,
  Ruler,
  Activity,
  Sparkles
} from 'lucide-react'

interface Discovery {
  id: string
  name: string
  year: number
  archaeologist: string
  location: string
  description: string
  icon: string
  image?: string
  civilization: string
}

interface Method {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  techniques: string[]
}

const archaeologicalMethods: Method[] = [
  {
    id: 'excavation',
    name: 'Excavation',
    description: 'Systematic uncovering of archaeological sites through careful digging and recording',
    icon: <Brush className="w-8 h-8" />,
    techniques: ['Stratigraphic excavation', 'Grid system mapping', 'Wet screening', 'Flotation']
  },
  {
    id: 'remote-sensing',
    name: 'Remote Sensing',
    description: 'Non-invasive techniques to detect archaeological features without digging',
    icon: <Globe className="w-8 h-8" />,
    techniques: ['Ground-penetrating radar', 'LIDAR scanning', 'Satellite imagery', 'Magnetometry']
  },
  {
    id: 'dating',
    name: 'Dating Methods',
    description: 'Scientific techniques to determine the age of archaeological finds',
    icon: <Clock className="w-8 h-8" />,
    techniques: ['Radiocarbon dating', 'Dendrochronology', 'Thermoluminescence', 'Potassium-argon dating']
  },
  {
    id: 'analysis',
    name: 'Laboratory Analysis',
    description: 'Scientific examination of artifacts in laboratory settings',
    icon: <Microscope className="w-8 h-8" />,
    techniques: ['DNA analysis', 'Isotope analysis', 'X-ray fluorescence', 'Mass spectrometry']
  },
  {
    id: 'survey',
    name: 'Archaeological Survey',
    description: 'Systematic field walking and surface collection to identify sites',
    icon: <Map className="w-8 h-8" />,
    techniques: ['Pedestrian survey', 'Geographic Information Systems', 'Drone mapping', 'Surface collection']
  },
  {
    id: 'conservation',
    name: 'Conservation',
    description: 'Preserving and restoring artifacts for future generations',
    icon: <Activity className="w-8 h-8" />,
    techniques: ['Chemical stabilization', 'Environmental control', 'Digital preservation', '3D scanning']
  }
]

const famousDiscoveries: Discovery[] = [
  {
    id: 'tutankhamun',
    name: 'Tomb of Tutankhamun',
    year: 1922,
    archaeologist: 'Howard Carter',
    location: 'Valley of the Kings, Egypt',
    description: 'The most intact pharaonic tomb ever discovered, containing over 5,000 artifacts',
    icon: '𓋴',
    civilization: 'Egyptian'
  },
  {
    id: 'rosetta-stone',
    name: 'Rosetta Stone',
    year: 1799,
    archaeologist: 'Pierre-François Bouchard',
    location: 'Rashid (Rosetta), Egypt',
    description: 'Key to deciphering Egyptian hieroglyphs, inscribed with three scripts',
    icon: '𓏠',
    civilization: 'Egyptian'
  },
  {
    id: 'dead-sea-scrolls',
    name: 'Dead Sea Scrolls',
    year: 1946,
    archaeologist: 'Bedouin shepherds',
    location: 'Qumran, Israel',
    description: 'Ancient Jewish manuscripts containing the oldest known biblical texts',
    icon: '📜',
    civilization: 'Israelite'
  },
  {
    id: 'pompeii',
    name: 'Pompeii',
    year: 1748,
    archaeologist: 'Rocque Joaquin de Alcubierre',
    location: 'Pompeii, Italy',
    description: 'Roman city perfectly preserved by volcanic ash from Mount Vesuvius',
    icon: '🏛️',
    civilization: 'Roman'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    year: 1911,
    archaeologist: 'Hiram Bingham',
    location: 'Andes Mountains, Peru',
    description: 'Incan citadel perched high in the mountains',
    icon: '🏔️',
    civilization: 'Incan'
  },
  {
    id: 'ur',
    name: 'Royal Tombs of Ur',
    year: 1922,
    archaeologist: 'Leonard Woolley',
    location: 'Tell al-Muqayyar, Iraq',
    description: 'Sumerian royal tombs with spectacular grave goods',
    icon: '👑',
    civilization: 'Mesopotamian'
  },
  {
    id: 'terracotta-army',
    name: 'Terracotta Army',
    year: 1974,
    archaeologist: 'Local farmers',
    location: 'Xi\'an, China',
    description: 'Thousands of life-sized warriors guarding China\'s first emperor',
    icon: '⚔️',
    civilization: 'Chinese'
  },
  {
    id: 'knossos',
    name: 'Palace of Knossos',
    year: 1900,
    archaeologist: 'Arthur Evans',
    location: 'Crete, Greece',
    description: 'Minoan palace complex associated with the Minotaur myth',
    icon: '🏰',
    civilization: 'Minoan'
  }
]

const timelineEvents = [
  { year: 1799, event: 'Rosetta Stone discovered', icon: '🔑' },
  { year: 1822, event: 'Hieroglyphs deciphered by Champollion', icon: '📖' },
  { year: 1870, event: 'Troy excavated by Schliemann', icon: '🏺' },
  { year: 1899, event: 'Temple of Karnak excavations begin', icon: '🏛️' },
  { year: 1900, event: 'Knossos Palace uncovered', icon: '👑' },
  { year: 1922, event: 'Tutankhamun\'s tomb found', icon: '𓋴' },
  { year: 1946, event: 'Dead Sea Scrolls discovered', icon: '📜' },
  { year: 1974, event: 'Terracotta Army found', icon: '⚔️' }
]

// Animation variants
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function ArchaeologyDiscoveryPage() {
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null)
  const [selectedDiscovery, setSelectedDiscovery] = useState<Discovery | null>(null)

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-amber-600/20 to-egyptian-blue/20 rounded-full">
            <Globe className="w-12 h-12 text-gold" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gold drop-shadow-lg">
          Archaeology & Discovery
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
          Uncovering the secrets of ancient civilizations through science and exploration
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          <span className="px-3 py-1 bg-black/30 rounded-full">Methods</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">Discoveries</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">Timeline</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">Technology</span>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Archaeological Methods', value: '6+', icon: <Brush size={24} /> },
          { label: 'Famous Discoveries', value: '50+', icon: <Trophy size={24} /> },
          { label: 'Active Digs Worldwide', value: '1,000+', icon: <Users size={24} /> },
          { label: 'Years of History', value: '5,000+', icon: <Clock size={24} /> },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={cardVariants}
            className="egyptian-card text-center p-4"
          >
            <div className="flex justify-center mb-2 text-gold">{stat.icon}</div>
            <div className="text-2xl font-bold text-gold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Archaeological Methods Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <Search className="w-8 h-8" />
            Archaeological Methods
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-gray-600 mt-2">The tools and techniques that bring history to life</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {archaeologicalMethods.map((method) => (
            <motion.div
              key={method.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="egyptian-card p-6 cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedMethod(method)}
            >
              <div className="flex items-start gap-4">
                <div className="text-gold shrink-0">{method.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-egyptian-blue mb-2">{method.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {method.techniques.slice(0, 2).map((tech, i) => (
                      <span key={i} className="text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {method.techniques.length > 2 && (
                      <span className="text-xs text-gray-400">+{method.techniques.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Famous Discoveries Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            Famous Discoveries
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-gray-600 mt-2">Groundbreaking finds that changed our understanding of history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {famousDiscoveries.map((discovery) => (
            <motion.div
              key={discovery.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="egyptian-card p-4 cursor-pointer hover:shadow-xl transition-all"
              onClick={() => setSelectedDiscovery(discovery)}
            >
              <div className="text-4xl mb-2 text-center">{discovery.icon}</div>
              <h3 className="font-bold text-egyptian-blue text-center mb-1">{discovery.name}</h3>
              <p className="text-xs text-center text-gold mb-2">{discovery.year}</p>
              <p className="text-xs text-gray-600 text-center line-clamp-2">{discovery.description}</p>
              <div className="mt-2 text-center">
                <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                  {discovery.civilization}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <Clock className="w-8 h-8" />
            Timeline of Discovery
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-gray-600 mt-2">Key moments in archaeological history</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold to-egyptian-blue hidden md:block"></div>
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                variants={cardVariants}
                className={`flex flex-col md:flex-row items-center gap-4 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="egyptian-card p-4 inline-block w-full md:w-auto">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <span className="text-2xl">{event.icon}</span>
                      <div>
                        <div className="font-bold text-gold">{event.year}</div>
                        <div className="text-sm text-gray-700">{event.event}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-gold rounded-full border-4 border-papyrus flex items-center justify-center">
                    <div className="w-2 h-2 bg-egyptian-blue rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tools of the Trade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <Compass className="w-8 h-8" />
            Tools of the Trade
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { tool: 'Trowel', icon: '🔨', use: 'Precise excavation' },
            { tool: 'Total Station', icon: '📡', use: 'Site mapping' },
            { tool: 'Ground Penetrating Radar', icon: '📡', use: 'Subsurface scanning' },
            { tool: '3D Scanner', icon: '📷', use: 'Digital preservation' },
            { tool: 'Dendrochronology Kit', icon: '🌳', use: 'Tree-ring dating' },
            { tool: 'Carbon Dating Lab', icon: '⚛️', use: 'Radiocarbon analysis' },
            { tool: 'Drone', icon: '🚁', use: 'Aerial survey' },
            { tool: 'Underwater ROV', icon: '🌊', use: 'Marine archaeology' },
          ].map((tool, index) => (
            <motion.div
              key={tool.tool}
              variants={cardVariants}
              className="egyptian-card p-4 text-center hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">{tool.icon}</div>
              <div className="font-semibold text-sm text-egyptian-blue">{tool.tool}</div>
              <div className="text-xs text-gray-500 mt-1">{tool.use}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Fun Facts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="egyptian-card p-6 bg-gradient-to-r from-amber-50 to-orange-50"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="text-3xl">💡</div>
          <h3 className="text-xl font-bold text-gold">Did You Know?</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <div className="text-gold mt-1">•</div>
            <p className="text-sm text-gray-700">Less than 10% of ancient Egyptian sites have been excavated</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-gold mt-1">•</div>
            <p className="text-sm text-gray-700">LIDAR technology can "see" through dense jungle canopy</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-gold mt-1">•</div>
            <p className="text-sm text-gray-700">Archaeology is one of the few fields that can take decades to excavate a single site</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="text-gold mt-1">•</div>
            <p className="text-sm text-gray-700">The oldest known archaeological excavation was conducted by Nabonidus in 550 BCE</p>
          </div>
        </div>
      </motion.div>

      {/* Method Detail Modal */}
      {selectedMethod && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMethod(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="egyptian-card max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-gold">{selectedMethod.icon}</div>
              <button onClick={() => setSelectedMethod(null)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <h3 className="text-xl font-bold text-egyptian-blue mb-2">{selectedMethod.name}</h3>
            <p className="text-gray-600 mb-4">{selectedMethod.description}</p>
            <div className="space-y-2">
              <div className="font-semibold text-gold text-sm">Key Techniques:</div>
              <ul className="space-y-1">
                {selectedMethod.techniques.map((tech, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}

      {/* Discovery Detail Modal */}
      {selectedDiscovery && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedDiscovery(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="egyptian-card max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="text-5xl">{selectedDiscovery.icon}</div>
              <button onClick={() => setSelectedDiscovery(null)} className="text-gray-500 hover:text-gray-700">✕</button>
            </div>
            <h3 className="text-2xl font-bold text-egyptian-blue mb-2">{selectedDiscovery.name}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-sm bg-gold/20 px-2 py-1 rounded">{selectedDiscovery.year}</span>
              <span className="text-sm bg-gold/20 px-2 py-1 rounded">{selectedDiscovery.archaeologist}</span>
              <span className="text-sm bg-gold/20 px-2 py-1 rounded">{selectedDiscovery.civilization}</span>
            </div>
            <p className="text-gray-600 mb-3">{selectedDiscovery.description}</p>
            <p className="text-sm text-gray-500">📍 {selectedDiscovery.location}</p>
          </motion.div>
        </div>
      )}
    </div>
  )
}