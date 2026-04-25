'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, Pyramid, Building2, Landmark, Scroll } from 'lucide-react'

const eras = [
  {
    id: 'old-kingdom',
    name: 'Old Kingdom',
    period: '2686–2181 BCE',
    color: 'from-amber-600 to-orange-600',
    icon: Pyramid,
    description: 'The Age of the Pyramids',
    content: `The Old Kingdom is often referred to as "the Age of the Pyramids." During this era, the great pyramids of Giza were constructed, including the Great Pyramid of Khufu. The concept of divine kingship became fully established, with pharaohs considered living gods.

Key achievements include the development of pyramid construction techniques, the establishment of a centralized government, and the creation of some of Egypt's most enduring artistic conventions. The Old Kingdom ended with a period of decentralization known as the First Intermediate Period.`,
    keyEvents: [
      'Construction of the Great Pyramid of Giza',
      'Development of pyramid texts',
      'Establishment of divine kingship',
      'Creation of the Sphinx'
    ],
    keyFigures: ['Djoser', 'Khufu', 'Khafre', 'Menkaure'],
    sites: ['Step Pyramid of Djoser', 'Great Pyramid of Giza', 'Great Sphinx']
  },
  {
    id: 'middle-kingdom',
    name: 'Middle Kingdom',
    period: '2055–1650 BCE',
    color: 'from-emerald-600 to-teal-600',
    icon: Building2,
    description: 'The Golden Age of Literature',
    content: `The Middle Kingdom is considered Egypt's "Golden Age" of literature and art. Pharaohs reunited Egypt after the First Intermediate Period and established a new capital at Thebes. This era saw a flourishing of arts, literature, and military expansion into Nubia.

The concept of the pharaoh changed from an inaccessible god-king to a shepherd of the people, responsible for public works and welfare. This period also saw the development of the Coffin Texts, which democratized the afterlife.`,
    keyEvents: [
      'Reunification of Egypt',
      'Expansion into Nubia',
      'Flourishing of literature',
      'Construction of Karnak Temple'
    ],
    keyFigures: ['Mentuhotep II', 'Senusret III', 'Amenemhat III'],
    sites: ['Karnak Temple', 'Faiyum Oasis']
  },
  {
    id: 'new-kingdom',
    name: 'New Kingdom',
    period: '1550–1069 BCE',
    color: 'from-purple-600 to-indigo-600',
    icon: Landmark,
    description: 'Egypt\'s Imperial Age',
    content: `The New Kingdom was Egypt's most prosperous and powerful era, often called the "Egyptian Empire." Pharaohs expanded Egypt's borders to their greatest extent, from Syria to Nubia. This period saw the construction of magnificent temples, including Karnak, Luxor, and Abu Simbel.

The Valley of the Kings became the royal burial ground, and some of Egypt's most famous pharaohs ruled, including Hatshepsut, Akhenaten, Tutankhamun, and Ramesses II. The New Kingdom ended with the Bronze Age Collapse and the Third Intermediate Period.`,
    keyEvents: [
      'Battle of Megiddo',
      'Reign of Hatshepsut',
      'Amarna Period (Akhenaten)',
      'Battle of Kadesh',
      'Ramesses II\'s monuments'
    ],
    keyFigures: ['Hatshepsut', 'Thutmose III', 'Akhenaten', 'Tutankhamun', 'Ramesses II'],
    sites: ['Karnak Temple', 'Luxor Temple', 'Valley of the Kings', 'Abu Simbel']
  },
  {
    id: 'ptolemaic',
    name: 'Ptolemaic Period',
    period: '332–30 BCE',
    color: 'from-blue-600 to-cyan-600',
    icon: Scroll,
    description: 'Greek-Roman Era',
    content: `The Ptolemaic Period began with Alexander the Great's conquest of Egypt and the establishment of the Ptolemaic dynasty, ending with Cleopatra VII and the Roman conquest. This era blended Greek and Egyptian cultures, creating a unique fusion reflected in art, religion, and architecture.

The Temple of Edfu and Temple of Dendera were completed during this period. The famous Library of Alexandria became the world's greatest center of learning. Egyptian religion persisted, with temples dedicated to both traditional Egyptian gods and new Greco-Egyptian deities like Serapis.`,
    keyEvents: [
      'Alexander the Great conquers Egypt',
      'Library of Alexandria established',
      'Rosetta Stone created',
      'Death of Cleopatra VII'
    ],
    keyFigures: ['Alexander the Great', 'Ptolemy I', 'Cleopatra VII'],
    sites: ['Library of Alexandria', 'Temple of Edfu', 'Temple of Dendera', 'Philae Temple']
  }
]

export default function TimelinePage() {
  const [activeEra, setActiveEra] = useState(0)
  const currentEra = eras[activeEra]
  const Icon = currentEra.icon

  const nextEra = () => {
    if (activeEra < eras.length - 1) {
      setActiveEra(activeEra + 1)
    }
  }

  const prevEra = () => {
    if (activeEra > 0) {
      setActiveEra(activeEra - 1)
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
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Interactive Timeline</h1>
        <p className="text-xl text-gray-600">Journey through 3,000 years of ancient Egyptian history</p>
      </motion.div>

      {/* Era Selector */}
      <div className="flex justify-center gap-2 flex-wrap">
        {eras.map((era, index) => (
          <button
            key={era.id}
            onClick={() => setActiveEra(index)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeEra === index
                ? `bg-gradient-to-r ${era.color} text-white shadow-lg`
                : 'bg-white/50 hover:bg-white/80 text-gray-700'
            }`}
          >
            {era.name}
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEra.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className={`egyptian-card bg-gradient-to-br ${currentEra.color}/10`}
        >
          {/* Era Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentEra.color} flex items-center justify-center`}>
                <Icon size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-egyptian-blue">{currentEra.name}</h2>
                <div className="flex items-center gap-2 text-gold text-sm mt-1">
                  <Calendar size={14} />
                  {currentEra.period}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 italic">{currentEra.description}</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevEra}
              disabled={activeEra === 0}
              className={`p-2 rounded-full transition-all ${
                activeEra > 0
                  ? 'hover:bg-gold/20 text-gold'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-sm text-gray-500">
              {activeEra + 1} of {eras.length}
            </div>
            <button
              onClick={nextEra}
              disabled={activeEra === eras.length - 1}
              className={`p-2 rounded-full transition-all ${
                activeEra < eras.length - 1
                  ? 'hover:bg-gold/20 text-gold'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gold">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{currentEra.content}</p>
              
              <h3 className="text-xl font-semibold text-gold mt-4">Key Events</h3>
              <ul className="space-y-2">
                {currentEra.keyEvents.map((event) => (
                  <li key={event} className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-gray-700">{event}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-4">
              <div className="bg-white/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gold mb-2">Key Figures</h3>
                <div className="flex flex-wrap gap-2">
                  {currentEra.keyFigures.map((figure) => (
                    <span key={figure} className="px-3 py-1 bg-gold/20 rounded-full text-sm">
                      {figure}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gold mb-2">Major Sites</h3>
                <div className="flex flex-wrap gap-2">
                  {currentEra.sites.map((site) => (
                    <span key={site} className="px-3 py-1 bg-egyptian-blue/20 rounded-full text-sm">
                      {site}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Timeline Visual */}
      <div className="relative py-8">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 -translate-y-1/2" />
        <div className="flex justify-between relative">
          {eras.map((era, index) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(index)}
              className={`relative z-10 flex flex-col items-center gap-2 transition-all ${
                activeEra === index ? 'scale-110' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-gold ${activeEra === index ? 'ring-4 ring-gold/30' : ''}`} />
              <span className="text-xs text-gray-600 hidden md:block">{era.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}