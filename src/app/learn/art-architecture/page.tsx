'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, Pyramid, Landmark, Columns, 
  Castle, Church, Library, BookOpen, Users,
  ChevronLeft, ChevronRight, Globe, Star,
  Sparkles, Eye, Heart, Crown, Shield,
  Zap, Droplet, Leaf, Mountain, Sun, Moon,
  Scissors, Paintbrush, Ruler, Compass, Grid
} from 'lucide-react'

interface ArchitecturalWonder {
  id: string
  name: string
  civilization: string
  location: string
  period: string
  type: string
  icon: any
  color: string
  description: string
  features: string[]
  measurements: string
  legacy: string
  materials: string
  purpose: string
}

interface ArtStyle {
  id: string
  name: string
  civilization: string
  period: string
  characteristics: string[]
  techniques: string[]
  themes: string[]
  examples: string[]
  icon: any
}

interface StructuralInnovation {
  id: string
  name: string
  civilization: string
  description: string
  innovation: string
  examples: string[]
  influence: string
}

const architecturalWonders: ArchitecturalWonder[] = [
  {
    id: 'great-pyramid',
    name: 'Great Pyramid of Giza',
    civilization: 'Egyptian',
    location: 'Giza, Egypt',
    period: 'c. 2560 BCE',
    type: 'Pyramid/Tomb',
    icon: Pyramid,
    color: 'from-amber-600 to-orange-600',
    description: `The Great Pyramid of Khufu is the largest of the three pyramids at Giza and the only surviving wonder of the ancient world. It was the tallest man-made structure on Earth for over 3,800 years, rising 146.6 meters (481 feet) before losing its smooth limestone casing. The pyramid contains an estimated 2.3 million blocks of limestone and granite, weighing an average of 2.5 to 15 tons each.`,
    features: [
      'King\'s Chamber with granite sarcophagus',
      'Grand Gallery (47 meters long, 8 meters high)',
      'Queen\'s Chamber with air shafts',
      'Descending passage and subterranean chamber',
      'Relieving chambers above the King\'s Chamber'
    ],
    measurements: 'Original height: 146.6m (481ft), Current height: 138.8m (455ft), Base: 230.3m (756ft) square',
    legacy: 'The only surviving structure of the Seven Wonders of the Ancient World, symbol of Egyptian architectural genius',
    materials: 'Limestone blocks (casing), granite (inner chambers), mortar',
    purpose: 'Tomb of Pharaoh Khufu, astronomical alignment, symbol of divine kingship'
  },
  {
    id: 'parthenon',
    name: 'Parthenon',
    civilization: 'Greek',
    location: 'Athens, Greece',
    period: '447-432 BCE',
    type: 'Temple',
    icon: Landmark,
    color: 'from-cyan-600 to-blue-600',
    description: `The Parthenon is the greatest surviving temple of Classical Greece, dedicated to the goddess Athena. It is the most important surviving building of Classical Greece and the culmination of Doric order architecture. The temple housed the gold and ivory statue of Athena Parthenos by the sculptor Pheidias.`,
    features: [
      'Doric columns with optical refinements (entasis, curvature)',
      'Sculpted metopes depicting battles (Gigantomachy, Centauromachy, Trojan War)',
      'Ionic frieze (Panathenaic procession, 160 meters long)',
      'Pediment sculptures (birth of Athena, contest with Poseidon)',
      'Opisthodomos (west cella) for treasury'
    ],
    measurements: 'Dimensions: 30.9m × 69.5m (101.4ft × 228.0ft), Columns: 17 on sides, 8 on ends',
    legacy: 'Most imitated building in Western history, symbol of democracy and classical ideals',
    materials: 'Pentelic marble (from Mount Pentelicus), limestone foundations',
    purpose: 'Temple to Athena Parthenos, treasury of the Delian League'
  },
  {
    id: 'colosseum',
    name: 'Colosseum',
    civilization: 'Roman',
    location: 'Rome, Italy',
    period: '72-80 CE',
    type: 'Amphitheater',
    icon: Landmark,
    color: 'from-red-600 to-orange-600',
    description: `The Colosseum (Flavian Amphitheatre) is the largest amphitheater ever built and one of the greatest works of Roman architecture and engineering. It could hold 50,000-80,000 spectators for gladiatorial contests, animal hunts, and public spectacles.`,
    features: [
      'Retractable velarium (awning) system',
      'Complex hypogeum (underground tunnels and chambers)',
      'Tiered seating (senators, equestrians, citizens, women)',
      '80 arched entrances (76 numbered for spectators)',
      'Marble seating and travertine facade'
    ],
    measurements: 'Height: 48 meters (157ft), Length: 189m (620ft), Width: 156m (512ft), Capacity: 50,000+',
    legacy: 'Symbol of Imperial Rome, inspiration for modern stadium architecture',
    materials: 'Travertine limestone, tufa, concrete, brick, marble',
    purpose: 'Gladiatorial contests, animal hunts (venationes), public spectacles'
  },
  {
    id: 'petra',
    name: 'Petra (Rose City)',
    civilization: 'Nabataean',
    location: 'Jordan',
    period: 'c. 100 BCE - 200 CE',
    type: 'Rock-Cut City',
    icon: Castle,
    color: 'from-rose-600 to-pink-600',
    description: `Petra, the "Rose City," is an archaeological city carved entirely from red sandstone cliffs. The Nabataeans created an elaborate water management system that allowed them to thrive in the desert. The Treasury (Al-Khazneh) is the most famous facade, but the city includes hundreds of tombs, temples, and dwellings.`,
    features: [
      'Al-Khazneh (Treasury) - 40m high facade carved into rock',
      'Monastery (Ad-Deir) - 50m wide, 45m high',
      'Siq canyon (1.2km long approach)',
      'Roman-style theater (3,000 seats carved from rock)',
      'Water channel system (dams, cisterns, aqueducts)'
    ],
    measurements: 'City area: 264 sq km, Treasury: 40m high × 25m wide, Monastery: 50m × 45m',
    legacy: 'UNESCO World Heritage site, New Seven Wonders of the World candidate',
    materials: 'Red sandstone (entirely rock-cut)',
    purpose: 'Caravan city, religious center, royal necropolis'
  },
  {
    id: 'great-wall',
    name: 'Great Wall of China',
    civilization: 'Chinese',
    location: 'Northern China',
    period: '7th century BCE - 16th century CE',
    type: 'Fortification',
    icon: Mountain,
    color: 'from-red-700 to-gold-600',
    description: `The Great Wall of China is a series of fortifications built across the historical northern borders of China to protect against nomadic invasions. Sections built by the Ming Dynasty are the best preserved, with watchtowers, barracks, and signaling stations.`,
    features: [
      'Watchtowers (every 500-1000 meters)',
      'Signal towers for smoke and fire communication',
      'Parapets and crenellations for defense',
      'Horse tracks and troop transports',
      'Passes with fortified gatehouses'
    ],
    measurements: 'Total length: 21,196 km (13,171 miles), Height: 6-10m, Width: 4-5m at base, 3-4m at top',
    legacy: 'One of the New Seven Wonders of the World, symbol of Chinese engineering',
    materials: 'Earth, stone, brick, wood, rammed earth',
    purpose: 'Border defense, trade route control, signaling network'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    civilization: 'Indian (Mughal)',
    location: 'Agra, India',
    period: '1632-1653 CE',
    type: 'Mausoleum',
    icon: Castle,
    color: 'from-white to-blue-100',
    description: `The Taj Mahal is an ivory-white marble mausoleum built by Mughal Emperor Shah Jahan for his wife Mumtaz Mahal. It is considered the finest example of Mughal architecture, a style that combines Indian, Persian, and Islamic influences.`,
    features: [
      'White marble main tomb with onion dome',
      'Four minarets (42m high) slightly tilted outward',
      'Charbagh garden (divided into four quadrants)',
      'Reflecting pool leading to the tomb',
      'Intricate pietra dura (stone inlay) floral patterns',
      'Calligraphy passages from the Quran'
    ],
    measurements: 'Height: 73m (240ft) including dome, Minarets: 42m (138ft)',
    legacy: 'One of the New Seven Wonders of the World, symbol of eternal love',
    materials: 'White Makrana marble, precious stones (jade, turquoise, lapis lazuli)',
    purpose: 'Mausoleum for Mumtaz Mahal, symbol of Mughal power'
  }
]

const artStyles: ArtStyle[] = [
  {
    id: 'egyptian',
    name: 'Egyptian Art',
    civilization: 'Egyptian',
    period: 'c. 3100-30 BCE',
    characteristics: [
      'Canon of proportions (18 fists tall)',
      'Composite view (head profile, shoulders frontal, legs profile)',
      'Hierarchical scale (larger = more important)',
      'Register lines (ground lines for figures)',
      'Minimal background, no depth/perspective'
    ],
    techniques: [
      'Relief carving (sunken and raised)',
      'Fresco painting (tempera on plaster)',
      'Sculpture in the round (hard stones)',
      'Gold leaf application',
      'Faience (glazed ceramic) production'
    ],
    themes: [
      'Pharaohs and gods',
      'Afterlife and funerary rites',
      'Victory in battle',
      'Daily life and occupations',
      'Religious rituals and offerings'
    ],
    examples: [
      'Narmer Palette',
      'Great Sphinx of Giza',
      'Temple of Hatshepsut reliefs',
      'Tutankhamun\'s death mask',
      'Nefertiti bust'
    ],
    icon: Eye
  },
  {
    id: 'greek',
    name: 'Greek Art',
    civilization: 'Greek',
    period: 'c. 800-146 BCE',
    characteristics: [
      'Idealized human form (proportion, balance)',
      'Contrapposto (natural weight shift)',
      'Anatomical detail and realism',
      'Drapery and movement',
      'Mythological and athletic themes'
    ],
    techniques: [
      'Lost-wax bronze casting',
      'Marble carving (point chisel, claw chisel)',
      'Black-figure and red-figure pottery',
      'Mosaic (tesserae arranged)',
      'Temple sculpture (pediments, metopes, friezes)'
    ],
    themes: [
      'Greek gods and heroes',
      'Athletes and athletic contests',
      'Battles (Amazonomachy, Centauromachy)',
      'Symposium and banquets',
      'Mythological narratives'
    ],
    examples: [
      'Parthenon Marbles (Elgin Marbles)',
      'Discobolus (Discus Thrower)',
      'Venus de Milo',
      'Winged Victory of Samothrace',
      'Laocoön and His Sons'
    ],
    icon: Star
  },
  {
    id: 'roman',
    name: 'Roman Art',
    civilization: 'Roman',
    period: 'c. 509 BCE - 476 CE',
    characteristics: [
      'Veristic portraiture (warts-and-all realism)',
      'Historical reliefs (narrative scenes)',
      'Use of concrete and vaulting',
      'Arch and dome construction',
      'Copying Greek originals'
    ],
    techniques: [
      'Fresco painting (four Pompeian styles)',
      'Mosaic (opus vermiculatum, opus tessellatum)',
      'Portrait sculpture (marble and bronze)',
      'Relief carving (historical scenes)',
      'Wall painting (illusionistic architecture)'
    ],
    themes: [
      'Imperial propaganda',
      'Military victories and conquests',
      'Portrait busts of emperors and elites',
      'Mythological scenes',
      'Daily life and domestic scenes'
    ],
    examples: [
      'Augustus of Prima Porta',
      'Ara Pacis reliefs',
      'Column of Trajan frieze',
      'House of the Vettii frescoes (Pompeii)',
      'Alexander Mosaic'
    ],
    icon: Crown
  }
]

const structuralInnovations: StructuralInnovation[] = [
  {
    id: 'arch',
    name: 'Arch and Vault',
    civilization: 'Roman',
    description: `The development of the true arch and vault allowed Romans to span greater distances than ever before, creating monumental spaces like basilicas and bath complexes.`,
    innovation: 'Voussoir arch (wedge-shaped stones) distributing weight to abutments, barrel vaults, groin vaults, domes',
    examples: ['Colosseum arches', 'Aqueduct of Segovia', 'Pantheon dome', 'Basilica of Maxentius'],
    influence: 'Foundation of Romanesque and Gothic architecture, still used in bridges and buildings today'
  },
  {
    id: 'concrete',
    name: 'Roman Concrete',
    civilization: 'Roman',
    description: `Roman concrete (opus caementicium) revolutionized construction, allowing for complex shapes like domes and vaults and enabling the mass production of buildings.`,
    innovation: 'Mixture of lime mortar, volcanic ash (pozzolana), water, and aggregate (tufa, brick, stone)',
    examples: ['Pantheon (largest unreinforced concrete dome)', 'Baths of Caracalla', 'Harbor structures at Caesarea'],
    influence: 'Enabled rapid construction of infrastructure across the Roman Empire, precursor to modern concrete'
  },
  {
    id: 'colonnade',
    name: 'Colonnade and Peristyle',
    civilization: 'Greek',
    description: `The use of columns to create covered walkways and define public spaces became the hallmark of Greek and Roman civic architecture.`,
    innovation: 'Ordered systems of columns (Doric, Ionic, Corinthian) with standardized proportions and ornament',
    examples: ['Parthenon peristyle', 'Stoa of Attalos (Athenian Agora)', 'Colonnaded streets of Palmyra'],
    influence: 'Foundation of classical architecture, Renaissance and Neoclassical revivals'
  },
  {
    id: 'rock-cut',
    name: 'Rock-Cut Architecture',
    civilization: 'Indian',
    description: `The excavation of entire temples and monastic complexes from solid rock, creating interior spaces that blend architecture with the natural landscape.`,
    innovation: 'Excavation techniques to carve multi-story structures from single rock formations',
    examples: ['Ajanta Caves (India, 2nd century BCE)', 'Ellora Kailasa Temple', 'Petra (Jordan)'],
    influence: 'Influenced Buddhist rock-cut architecture in China and Southeast Asia'
  }
]

export default function ArtArchitecturePage() {
  const [activeWonder, setActiveWonder] = useState(architecturalWonders[0])
  const [selectedArtStyle, setSelectedArtStyle] = useState<ArtStyle | null>(null)
  const wonderIndex = architecturalWonders.findIndex(w => w.id === activeWonder.id)

  const nextWonder = () => {
    if (wonderIndex < architecturalWonders.length - 1) {
      setActiveWonder(architecturalWonders[wonderIndex + 1])
    }
  }

  const prevWonder = () => {
    if (wonderIndex > 0) {
      setActiveWonder(architecturalWonders[wonderIndex - 1])
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Building2 size={24} />
          <span className="text-sm uppercase tracking-wider">Monumental Achievements</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Art & Architecture</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the monumental architecture, sacred art, and structural innovations of ancient civilizations
        </p>
      </motion.div>

      {/* Architectural Wonders Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Pyramid size={24} className="text-gold" />
            Architectural Wonders
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevWonder}
              disabled={wonderIndex === 0}
              className={`p-2 rounded-full transition-all ${
                wonderIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextWonder}
              disabled={wonderIndex === architecturalWonders.length - 1}
              className={`p-2 rounded-full transition-all ${
                wonderIndex < architecturalWonders.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeWonder.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`egyptian-card bg-gradient-to-r ${activeWonder.color}/10`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${activeWonder.color} text-white`}>
                <activeWonder.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-egyptian-blue">{activeWonder.name}</h3>
                <p className="text-sm text-gold">{activeWonder.civilization} • {activeWonder.period} • {activeWonder.location}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{activeWonder.description}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gold mb-2">Features</h4>
                <ul className="space-y-1">
                  {activeWonder.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Details</h4>
                <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Dimensions:</span> {activeWonder.measurements}</p>
                <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Materials:</span> {activeWonder.materials}</p>
                <p className="text-sm text-gray-700"><span className="font-semibold">Purpose:</span> {activeWonder.purpose}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gold/20">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold text-gold">Legacy:</span> {activeWonder.legacy}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Art Styles Section */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Paintbrush size={24} className="text-gold" />
          Art Styles & Traditions
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {artStyles.map((style, index) => {
            const Icon = style.icon
            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="egyptian-card cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedArtStyle(style)}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-egyptian-blue">{style.name}</h3>
                </div>
                <p className="text-xs text-gold mb-2">{style.civilization} • {style.period}</p>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {style.characteristics.slice(0, 3).join(' • ')}
                </p>
                <div className="mt-2 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details →
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Structural Innovations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="egyptian-card"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Ruler size={24} className="text-gold" />
          Structural Innovations
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {structuralInnovations.map((innovation) => (
            <div key={innovation.id} className="bg-white/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gold/20 rounded-lg">
                  <Compass size={16} className="text-gold" />
                </div>
                <h3 className="text-lg font-bold text-gold">{innovation.name}</h3>
                <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">{innovation.civilization}</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{innovation.description}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Innovation:</span> {innovation.innovation}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Examples:</span> {innovation.examples.join(', ')}</p>
              <p className="text-xs text-gray-500 italics">{innovation.influence}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Art Style Modal */}
      <AnimatePresence>
        {selectedArtStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedArtStyle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-2xl w-full p-6 border-2 border-gold max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <selectedArtStyle.icon size={24} className="text-gold" />
                  <h3 className="text-2xl font-bold text-gold">{selectedArtStyle.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedArtStyle(null)}
                  className="p-1 hover:bg-gold/20 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedArtStyle.civilization}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedArtStyle.period}</span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Characteristics</h4>
                <ul className="space-y-1">
                  {selectedArtStyle.characteristics.map((char) => (
                    <li key={char} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Techniques</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedArtStyle.techniques.map((tech) => (
                    <span key={tech} className="text-xs bg-gold/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Major Themes</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedArtStyle.themes.map((theme) => (
                    <span key={theme} className="text-xs bg-gold/20 px-2 py-1 rounded">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-egyptian-blue mb-2">Famous Examples</h4>
                <ul className="space-y-1">
                  {selectedArtStyle.examples.map((example) => (
                    <li key={example} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setSelectedArtStyle(null)}
                className="mt-6 w-full py-2 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-xs text-gray-500 border-t border-gold/20 pt-6"
      >
        <span className="text-gold font-semibold">🏛️ 6 Architectural Wonders</span>
        <span className="mx-2">•</span>
        <span>🎨 3 Art Styles</span>
        <span className="mx-2">•</span>
        <span>🔧 4 Structural Innovations</span>
        <span className="mx-2">•</span>
        <span>🌍 Global Coverage</span>
      </motion.div>
    </div>
  )
}