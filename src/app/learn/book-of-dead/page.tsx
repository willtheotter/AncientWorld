'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scroll, Book, Sparkles, Shield, Feather, Eye, Heart, Star } from 'lucide-react'

const chapters = [
  { number: 1, title: "The Opening of the Mouth", description: "Restoring senses to the deceased" },
  { number: 15, title: "Hymn to Ra", description: "Praise to the rising sun" },
  { number: 17, title: "The Heart&apos;s Journey", description: "Protecting the heart" },
  { number: 22, title: "Giving Breath", description: "Restoring air to the dead" },
  { number: 23, title: "Opening the Mouth", description: "Speech and eating ability" },
  { number: 30, title: "Heart Scarab Spell", description: "Preventing heart betrayal" },
  { number: 43, title: "Protection from Beheading", description: "Preserving the head" },
  { number: 64, title: "Coming Forth by Day", description: "Leaving the tomb" },
  { number: 99, title: "The Boat of Ra", description: "Journey with the sun god" },
  { number: 125, title: "The Weighing of the Heart", description: "Hall of Maat judgment" },
  { number: 130, title: "The Bennu Bird", description: "Resurrection spell" },
  { number: 148, title: "The 7 Cows", description: "Food offerings" }
]

const symbols = [
  { name: "Ankh", meaning: "Life", symbol: "𓋹" },
  { name: "Eye of Horus", meaning: "Protection, Healing", symbol: "𓂀" },
  { name: "Scarab", meaning: "Resurrection", symbol: "𓆣" },
  { name: "Djed Pillar", meaning: "Stability", symbol: "𓊽" },
  { name: "Feather of Maat", meaning: "Truth", symbol: "𓆄" }
]

export default function BookOfDeadPage() {
  const [activeChapter, setActiveChapter] = useState(chapters[9])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Book size={24} />
          <span className="text-sm uppercase tracking-wider">Funerary Text</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">The Book of the Dead</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The ancient Egyptian guide to the afterlife, containing spells for safe passage through the underworld
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chapter List */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold text-egyptian-blue mb-3 flex items-center gap-2">
            <Scroll size={20} />
            Key Spells
          </h2>
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.number}
                onClick={() => setActiveChapter(chapter)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  activeChapter.number === chapter.number
                    ? 'bg-gold/20 border-gold'
                    : 'bg-white/30 hover:bg-white/50'
                } border border-transparent`}
              >
                <div className="font-semibold text-gold">Spell {chapter.number}</div>
                <div className="text-sm text-gray-700">{chapter.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Chapter Detail */}
        <div className="lg:col-span-2">
          <motion.div
            key={activeChapter.number}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="egyptian-card"
          >
            <h3 className="text-2xl font-bold text-gold mb-2">Spell {activeChapter.number}: {activeChapter.title}</h3>
            <p className="text-gray-700 mb-4">{activeChapter.description}</p>
            <div className="bg-white/30 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600 italic">
                This spell was essential for the deceased to progress through the underworld
              </p>
            </div>
          </motion.div>

          {/* Symbols Section */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-egyptian-blue mb-3 flex items-center gap-2">
              <Star size={20} />
              Sacred Symbols
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {symbols.map((symbol) => (
                <div key={symbol.name} className="egyptian-card text-center">
                  <div className="text-3xl mb-1">{symbol.symbol}</div>
                  <div className="font-semibold text-gold">{symbol.name}</div>
                  <div className="text-xs text-gray-600">{symbol.meaning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic">
          💡 <span className="font-semibold">Did you know?</span> No single &quot;Book of the Dead&quot; exists—each was personalized for the individual, with spells chosen based on their wealth and status. The most complete version belonged to Ani (c. 1250 BCE).
        </p>
      </motion.div>
    </div>
  )
}