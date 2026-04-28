'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Moon, 
  Eye, 
  Zap, 
  Mountain, 
  Building2,
  Crown,
  Scroll,
  Pyramid,
  Ship,
  Sparkles,
  HelpCircle,
  Compass,
  Map,
  AlertCircle,
  Brain,
  Telescope,
  Users
} from 'lucide-react'

interface Mystery {
  id: string
  name: string
  category: string
  description: string
  theory1: string
  theory2: string
  theory3: string
  evidence: string[]
  icon: string
  color: string
  location: string
}

interface UnsolvedQuestion {
  id: string
  question: string
  field: string
  status: 'ongoing' | 'debated' | 'unresolved'
}

const mysteries: Mystery[] = [
  {
    id: 'pyramid-construction',
    name: 'The Great Pyramid Construction',
    category: 'Engineering',
    description: 'How were the massive pyramids of Giza built with such precision using ancient technology?',
    theory1: 'Ramps system (straight, zigzag, or spiral)',
    theory2: 'Water locks and internal ramps',
    theory3: 'Extraterrestrial assistance (debunked theory)',
    evidence: [
      'Quarry marks and tool marks',
      'Worker villages discovered',
      'Copper tool remnants',
      'Water transportation evidence'
    ],
    icon: '🏗️',
    color: 'from-amber-600 to-orange-600',
    location: 'Giza, Egypt'
  },
  {
    id: 'sphinx-age',
    name: 'The Age of the Sphinx',
    category: 'Dating',
    description: 'Is the Great Sphinx older than mainstream Egyptology suggests?',
    theory1: 'Built by Pharaoh Khafre (2500 BCE)',
    theory2: 'Predynastic origin (7000-5000 BCE)',
    theory3: 'Water erosion indicates much older age',
    evidence: [
      'Water erosion patterns on enclosure walls',
      'Lack of inscription evidence',
      'Astronomical alignment theories',
      'Geological studies'
    ],
    icon: '🦁',
    color: 'from-yellow-600 to-amber-600',
    location: 'Giza Plateau, Egypt'
  },
  {
    id: 'lost-city-atlantis',
    name: 'Atlantis',
    category: 'Legendary Cities',
    description: 'Did the advanced civilization of Atlantis actually exist, and where was it located?',
    theory1: 'Santorini (Minoan civilization)',
    theory2: 'Off the coast of Spain',
    theory3: 'In the Caribbean/Bahamas',
    evidence: [
      'Plato\'s detailed accounts',
      'Minoan civilization collapse',
      'Underwater structures found',
      'Richat Structure theory'
    ],
    icon: '🌊',
    color: 'from-blue-600 to-cyan-600',
    location: 'Unknown (hypothesized: Mediterranean/Atlantic)'
  },
  {
    id: 'nazca-lines',
    name: 'Nazca Lines',
    category: 'Geoglyphs',
    description: 'Why did the Nazca people create these massive geoglyphs visible only from above?',
    theory1: 'Astronomical calendar',
    theory2: 'Ritual walking paths',
    theory3: 'Messages to deities',
    evidence: [
      'Over 800 straight lines',
      '300 geometric figures',
      '70 animal/plant designs',
      'Ceremonial pottery found'
    ],
    icon: '✈️',
    color: 'from-terracotta-600 to-orange-600',
    location: 'Nazca Desert, Peru'
  },
  {
    id: 'stonehenge',
    name: 'Stonehenge Construction',
    category: 'Megalithic Sites',
    description: 'How did prehistoric people transport and arrange the massive bluestones?',
    theory1: 'Rolled on wooden logs',
    theory2: 'Transported by sea and river',
    theory3: 'Glacial movement theory',
    evidence: [
      'Bluestone quarry in Wales (140 miles)',
      'Wooden sledge remnants',
      'Worker settlement nearby',
      'Astronomical alignments'
    ],
    icon: '🗿',
    color: 'from-stone-600 to-gray-600',
    location: 'Wiltshire, England'
  },
  {
    id: 'sea-peoples',
    name: 'The Sea Peoples',
    category: 'Mysterious Groups',
    description: 'Who were the mysterious seafaring invaders who caused the Bronze Age collapse?',
    theory1: 'Multiple Mediterranean groups united',
    theory2: 'Philistines and other tribes',
    theory3: 'Refugees from natural disasters',
    evidence: [
      'Egyptian inscriptions at Medinet Habu',
      'Destruction layers across Mediterranean',
      'No known homeland identified',
      'Unique pottery styles'
    ],
    icon: '⛵',
    color: 'from-teal-600 to-blue-600',
    location: 'Eastern Mediterranean'
  },
  {
    id: 'baghdad-battery',
    name: 'Baghdad Battery',
    category: 'Ancient Technology',
    description: 'Was the Parthian-era clay jar actually an ancient electrical battery?',
    theory1: 'Galvanic cell for electroplating',
    theory2: 'Religious/ritual object',
    theory3: 'Scroll storage container',
    evidence: [
      'Iron rod surrounded by copper cylinder',
      'Acidic residue inside',
      'Produces low voltage when tested',
      'Found with other unusual artifacts'
    ],
    icon: '⚡',
    color: 'from-purple-600 to-pink-600',
    location: 'Baghdad, Iraq'
  },
  {
    id: 'saharan-rock-art',
    name: 'Saharan Rock Art',
    category: 'Ancient Art',
    description: 'Who created the mysterious rock art depicting "floating" figures and strange beings?',
    theory1: 'Ancient astronauts interpretation',
    theory2: 'Spiritual/trance visions',
    theory3: 'Ceremonial masks',
    evidence: [
      'Over 15,000 engravings',
      '"Round heads" with strange features',
      'Green Sahara period',
      'Similar art across North Africa'
    ],
    icon: '🎨',
    color: 'from-orange-700 to-red-600',
    location: 'Tassili n\'Ajjer, Algeria'
  }
]

const unsolvedQuestions: UnsolvedQuestion[] = [
  { id: '1', question: 'What happened to the Library of Alexandria?', field: 'History', status: 'debated' },
  { id: '2', question: 'How were the Easter Island statues moved?', field: 'Archaeology', status: 'ongoing' },
  { id: '3', question: 'What does the Phaistos Disc say?', field: 'Linguistics', status: 'unresolved' },
  { id: '4', question: 'Where is Alexander the Great\'s tomb?', field: 'Archaeology', status: 'ongoing' },
  { id: '5', question: 'What caused the Bronze Age collapse?', field: 'History', status: 'debated' },
  { id: '6', question: 'Were the Hanging Gardens real?', field: 'Archaeology', status: 'debated' }
]

const mysteryCategories = [
  { name: 'Engineering', count: 1, icon: <Building2 className="w-5 h-5" /> },
  { name: 'Dating', count: 1, icon: <Telescope className="w-5 h-5" /> },
  { name: 'Legendary Cities', count: 1, icon: <Crown className="w-5 h-5" /> },
  { name: 'Geoglyphs', count: 1, icon: <Map className="w-5 h-5" /> },
  { name: 'Megalithic Sites', count: 1, icon: <Mountain className="w-5 h-5" /> },
  { name: 'Mysterious Groups', count: 1, icon: <Users className="w-5 h-5" /> },
  { name: 'Ancient Technology', count: 1, icon: <Zap className="w-5 h-5" /> },
  { name: 'Ancient Art', count: 1, icon: <Scroll className="w-5 h-5" /> }
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

export default function AncientMysteriesPage() {
  const [selectedMystery, setSelectedMystery] = useState<Mystery | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredMysteries = activeCategory === 'all' 
    ? mysteries 
    : mysteries.filter(m => m.category === activeCategory)

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ongoing': return 'bg-blue-100 text-blue-800'
      case 'debated': return 'bg-orange-100 text-orange-800'
      case 'unresolved': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
          <div className="p-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full">
            <Moon className="w-12 h-12 text-gold" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gold drop-shadow-lg">
          Ancient Mysteries
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
          Unsolved questions, enigmatic artifacts, and mysteries that continue to baffle researchers
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-300">
          <span className="px-3 py-1 bg-black/30 rounded-full">🔍 Unsolved</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">🤔 Debated</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">✨ Enigmatic</span>
          <span className="px-3 py-1 bg-black/30 rounded-full">🏛️ Controversial</span>
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
          { label: 'Ancient Mysteries', value: '50+', icon: <HelpCircle size={24} /> },
          { label: 'Unsolved Enigmas', value: '30+', icon: <Eye size={24} /> },
          { label: 'Lost Civilizations', value: '15+', icon: <Crown size={24} /> },
          { label: 'Active Research', value: '100+', icon: <Sparkles size={24} /> },
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

      {/* Mystery Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-4"
      >
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
              activeCategory === 'all'
                ? 'bg-gold text-white shadow-lg'
                : 'egyptian-card text-gray-600 hover:bg-gold/20'
            }`}
          >
            All Mysteries
          </button>
          {mysteryCategories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all flex items-center gap-1 ${
                activeCategory === cat.name
                  ? 'bg-gold text-white shadow-lg'
                  : 'egyptian-card text-gray-600 hover:bg-gold/20'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Mysteries Grid */}
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredMysteries.map((mystery) => (
          <motion.div
            key={mystery.id}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className={`egyptian-card overflow-hidden cursor-pointer hover:shadow-xl transition-all bg-gradient-to-br ${mystery.color}`}
            onClick={() => setSelectedMystery(mystery)}
          >
            <div className="p-6">
              <div className="text-5xl mb-3">{mystery.icon}</div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white">{mystery.name}</h3>
                <span className="text-xs bg-black/30 text-white px-2 py-0.5 rounded">
                  {mystery.category}
                </span>
              </div>
              <p className="text-sm text-white/90 mb-3 line-clamp-2">{mystery.description}</p>
              <p className="text-xs text-white/70 flex items-center gap-1">
                <Map className="w-3 h-3" />
                {mystery.location}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Unsolved Questions Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8" />
            Questions That Remain Unsolved
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-gray-600 mt-2">Mysteries that continue to challenge researchers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {unsolvedQuestions.map((question) => (
            <motion.div
              key={question.id}
              variants={cardVariants}
              className="egyptian-card p-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-xs">
                      ?
                    </div>
                    <h3 className="font-semibold text-egyptian-blue">{question.question}</h3>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs text-gray-500">{question.field}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${getStatusColor(question.status)}`}>
                      {question.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Theories & Evidence Spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gold flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8" />
            Theories & Evidence
          </h2>
          <div className="w-20 h-0.5 bg-gold mx-auto mt-2"></div>
          <p className="text-gray-600 mt-2">Different perspectives on ancient puzzles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="egyptian-card p-4 bg-blue-50/50">
            <div className="text-2xl mb-2">🏛️</div>
            <h3 className="font-bold text-egyptian-blue mb-2">Mainstream Theory</h3>
            <p className="text-xs text-gray-600">Conventional archaeological and historical explanations</p>
          </div>
          <div className="egyptian-card p-4 bg-purple-50/50">
            <div className="text-2xl mb-2">🔮</div>
            <h3 className="font-bold text-egyptian-blue mb-2">Alternative Theory</h3>
            <p className="text-xs text-gray-600">Non-traditional interpretations and hypotheses</p>
          </div>
          <div className="egyptian-card p-4 bg-green-50/50">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-bold text-egyptian-blue mb-2">Scientific Evidence</h3>
            <p className="text-xs text-gray-600">Archaeological, geological, and scientific data</p>
          </div>
        </div>
      </motion.div>

      {/* Mystery Detail Modal */}
      {selectedMystery && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedMystery(null)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="egyptian-card max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-r ${selectedMystery.color} p-6 text-white`}>
              <div className="flex justify-between items-start">
                <div className="text-6xl">{selectedMystery.icon}</div>
                <button onClick={() => setSelectedMystery(null)} className="text-white/80 hover:text-white text-2xl">
                  ✕
                </button>
              </div>
              <h3 className="text-2xl font-bold mt-3">{selectedMystery.name}</h3>
              <div className="flex gap-2 mt-2">
                <span className="text-sm bg-white/20 px-2 py-0.5 rounded">{selectedMystery.category}</span>
                <span className="text-sm bg-white/20 px-2 py-0.5 rounded">📍 {selectedMystery.location}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-bold text-gold mb-2">The Mystery</h4>
                <p className="text-gray-700">{selectedMystery.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-gold mb-2">Leading Theories</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
                    <span className="text-sm text-gray-700"><strong>Theory 1:</strong> {selectedMystery.theory1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5"></div>
                    <span className="text-sm text-gray-700"><strong>Theory 2:</strong> {selectedMystery.theory2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5"></div>
                    <span className="text-sm text-gray-700"><strong>Theory 3:</strong> {selectedMystery.theory3}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gold mb-2">Archaeological Evidence</h4>
                <ul className="space-y-1">
                  {selectedMystery.evidence.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gold/20">
                <p className="text-xs text-gray-500 italic">
                  🔍 Research continues to uncover new evidence. Some mysteries may never be fully solved.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}