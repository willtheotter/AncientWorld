'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DoorOpen, Shield, Flame, Eye, Skull, Snake, Crown, Key, Scroll, Sun, Moon, Star, Heart } from 'lucide-react'

const gates = [
  {
    number: 1,
    name: "Gate of the Sun",
    guardian: "Nedjef-ef",
    challenge: "Finding the secret name of Ra",
    symbol: "Sun disk, Ram-headed staff",
    meaning: "Entry to the underworld, facing the unknown"
  },
  {
    number: 2,
    name: "Gate of the Moon",
    guardian: "Aser-em-ef",
    challenge: "Revealing the cycle of time",
    symbol: "Crescent moon, Falcon-headed key",
    meaning: "Cycles of life, death, rebirth"
  },
  {
    number: 3,
    name: "Gate of Starry Sky",
    guardian: "Seshat-her-ib",
    challenge: "Navigating celestial bodies",
    symbol: "Stars, Serpent-entwined staff",
    meaning: "Cosmic laws, celestial navigation"
  },
  {
    number: 4,
    name: "Gate of the Dead",
    guardian: "Khesef-hra",
    challenge: "Confronting ego and fear",
    symbol: "Black jackal, Embalming tools",
    meaning: "Ancestral wisdom, death of the ego"
  },
  {
    number: 5,
    name: "Gate of the Flame",
    guardian: "Arfi-em-het",
    challenge: "Purity, purification",
    symbol: "Torch, Fiery breath staff",
    meaning: "Purification through trials"
  },
  {
    number: 6,
    name: "Gate of the Abyss",
    guardian: "Tepy-em-hat",
    challenge: "Sinking into the void",
    symbol: "Dark water, Eel-headed key",
    meaning: "Surrendering control, faith"
  },
  {
    number: 7,
    name: "Gate of Serpents",
    guardian: "Sekhet-heru",
    challenge: "Facing the shadow self",
    symbol: "Ouroboros snake, Cobra-headed staff",
    meaning: "Self-mastery, transformation"
  },
  {
    number: 8,
    name: "Gate of Truth",
    guardian: "Khenemet-neferu",
    challenge: "Honesty without deception",
    symbol: "Mirror, Feather of Maat",
    meaning: "Radical honesty, authentic self"
  },
  {
    number: 9,
    name: "Gate of Immortality",
    guardian: "Henkh-ef-nefer",
    challenge: "Healing separation from source",
    symbol: "Ankh, Ibis-headed staff",
    meaning: "Eternal life, unity with the All"
  },
  {
    number: 10,
    name: "Gate of the Unknown",
    guardian: "Shen-ef",
    challenge: "Embracing uncertainty",
    symbol: "Mist, Forgotten hieroglyphs",
    meaning: "Trust in divine plan"
  },
  {
    number: 11,
    name: "Gate of Karma",
    guardian: "Maakheru",
    challenge: "Facing all past actions",
    symbol: "Scales, Jackal-headed key",
    meaning: "Consequences, soul responsibility"
  },
  {
    number: 12,
    name: "Gate of Resurrection",
    guardian: "Ra-ef",
    challenge: "Dawn of new identity",
    symbol: "Scarab beetle, Solar barque",
    meaning: "Transformed soul rises"
  }
]

export default function GatesUnderworldPage() {
  const [selectedGate, setSelectedGate] = useState(gates[0])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <DoorOpen size={24} />
          <span className="text-sm uppercase tracking-wider">Journey Through the Duat</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">The 12 Gates of the Underworld</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The soul&apos;s nocturnal journey through the Duat to reach resurrection
        </p>
      </motion.div>

      {/* Gate Navigation */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {gates.map((gate) => (
          <button
            key={gate.number}
            onClick={() => setSelectedGate(gate)}
            className={`p-2 rounded-lg text-center transition-all ${
              selectedGate.number === gate.number
                ? 'bg-gold text-gray-900 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          >
            <div className="text-lg font-bold">Gate {gate.number}</div>
            <div className="text-xs truncate">{gate.name}</div>
          </button>
        ))}
      </div>

      {/* Gate Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGate.number}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="egyptian-card bg-gradient-to-br from-gray-900 to-indigo-900 text-white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gold mb-2">{selectedGate.name}</h2>
              <p className="text-gray-300 mb-4">Gate of the Underworld</p>
              <div className="space-y-3">
                <div><span className="text-gold font-semibold">Guardian:</span> {selectedGate.guardian}</div>
                <div><span className="text-gold font-semibold">Challenge:</span> {selectedGate.challenge}</div>
                <div><span className="text-gold font-semibold">Symbol:</span> {selectedGate.symbol}</div>
                <div><span className="text-gold font-semibold">Meaning:</span> {selectedGate.meaning}</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-3">🚪</div>
                <div className="text-2xl font-bold text-gold">Gate {selectedGate.number}</div>
                <div className="text-sm text-gray-400 mt-2">Twelfth Hour of the Duat</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Journey Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🌙</div>
          <h3 className="font-bold text-gold">12 Hours</h3>
          <p className="text-sm text-gray-600">The sun god Ra travels through 12 gates during the night</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🐍</div>
          <h3 className="font-bold text-gold">The Serpent Apophis</h3>
          <p className="text-sm text-gray-600">The great enemy who tries to stop the solar barque</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">☀️</div>
          <h3 className="font-bold text-gold">Dawn Resurrection</h3>
          <p className="text-sm text-gray-600">The sun is reborn each morning after the journey</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Key size={20} className="text-gold" />
          <span className="font-semibold">The Soul&apos;s Journey</span>
        </div>
        <p className="text-gray-700 text-sm">
          Passing through all 12 gates, the soul would be transformed, purified, and ultimately resurrected 
          with the sun at dawn—ready for eternal life in the Field of Reeds.
        </p>
      </motion.div>
    </div>
  )
}