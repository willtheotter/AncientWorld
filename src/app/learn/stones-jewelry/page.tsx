'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gem, Sparkles, Heart, Shield, Eye, Star, Crown, Sun as SunIcon } from 'lucide-react'

const stones = [
  {
    name: 'Lapis Lazuli',
    meaning: 'Heavenly Stone, Truth, Royalty',
    color: 'Deep Blue with Gold Flecks',
    chakra: 'Third Eye (Ajna)',
    frequency: '432 Hz',
    healing: 'Enhances spiritual vision, truth, and divine connection. Blue relieves anxiety.',
    uses: 'Buried with royalty, ground into pigment, carved into scarabs and amulets.',
    deity: 'Maat, Isis',
    symbol: 'Star-filled night sky, Royal status',
    icon: Star
  },
  {
    name: 'Turquoise',
    meaning: 'Life, Protection, Joy',
    color: 'Sky Blue to Green-Blue',
    chakra: 'Throat (Vishuddha)',
    frequency: '528 Hz',
    healing: 'Immune system, anti-inflammatory, protection from evil, brings good fortune.',
    uses: 'Temple offerings, jewelry, divine protection.',
    deity: 'Hathor, Maat',
    symbol: 'Sky, Life-giving waters',
    icon: Heart
  },
  {
    name: 'Carnelian',
    meaning: 'Setting Sun, Blood of Isis, Fertility',
    color: 'Orange-Red to Red-Brown',
    chakra: 'Sacral (Svadhisthana)',
    frequency: '417 Hz',
    healing: 'Female reproductive health, creativity, courage, war amulet.',
    uses: 'Necklaces, rings, protective amulets for the dead.',
    deity: 'Isis',
    symbol: 'Setting sun, Maternal Blood',
    icon: SunIcon
  },
  {
    name: 'Malachite',
    meaning: 'Transformation, Vision, Healing',
    color: 'Green with Dark Bands',
    chakra: 'Heart (Anahata)',
    frequency: '432 Hz, 528 Hz',
    healing: 'Healing of the soul, transformation, afterlife protection.',
    uses: 'Eye makeup (kohl), tomb paintings, protective amulets.',
    deity: 'Hathor',
    symbol: 'Transformation, Celebration, Music',
    icon: Sparkles
  },
  {
    name: 'Jasper (Red)',
    meaning: 'Blood of Isis, Mother\'s Protection',
    color: 'Deep Red',
    chakra: 'Root (Muladhara)',
    frequency: '432 Hz',
    healing: 'Circulation, grounding, protection for pregnant women.',
    uses: 'Used in amulets for pregnancy, carved into heart-shaped stones.',
    deity: 'Isis, Bes',
    symbol: 'Maternal Protection, Life Force',
    icon: Heart
  },
  {
    name: 'Obsidian',
    meaning: 'Mirror of Truth, Shadow Work',
    color: 'Black with Iridescent Sheen',
    chakra: 'Root (Muladhara)',
    frequency: '396 Hz',
    healing: 'Protection from negative energy, self-reflection.',
    uses: 'Ritual mirrors, ceremonial knives, tomb protection.',
    deity: 'Anubis',
    symbol: 'Underworld mirror, Truth',
    icon: Shield
  },
  {
    name: 'Amazonite',
    meaning: 'Courage, Truth, Fertility',
    color: 'Green-Blue with White Streaks',
    chakra: 'Throat and Heart',
    frequency: '528 Hz',
    healing: 'Balances emotions, truth, fertility.',
    uses: 'Fertility amulets, temple offerings.',
    deity: 'Hathor, Maat',
    symbol: 'Nile waters, Truth speaking',
    icon: Eye
  }
]

const jewelryTypes = [
  {
    name: 'The Ankh',
    meaning: 'Eternal Life, Divine Breath',
    materials: 'Gold, Lapis Lazuli, Carnelian',
    purpose: 'Worn by gods and pharaohs as the key to eternal life',
    symbol: 'Life, Infinity, Key of the Nile'
  },
  {
    name: 'The Scarab',
    meaning: 'Rebirth, Protection, Resurrection',
    materials: 'Lapis Lazuli, Turquoise, Steatite',
    purpose: 'Placed on mummies\' hearts, worn as protective ring or amulet',
    symbol: 'Sun, Morning rebirth'
  },
  {
    name: 'The Eye of Horus (Wedjat)',
    meaning: 'Healing, Protection, Royal Power',
    materials: 'Gold, Lapis Lazuli, Obsidian',
    purpose: 'Powerful amulet against evil, surgical symbol',
    symbol: 'Sacred Vision, 6 Senses'
  },
  {
    name: 'The Djed Pillar',
    meaning: 'Stability, Osiris\'s Spine, Strength',
    materials: 'Gold, Lapis Lazuli, Green Jasper',
    purpose: 'Strengthen the spine of the deceased for resurrection',
    symbol: 'Tree of Life, Resurrection'
  },
  {
    name: 'Broad Collars (Wesekh)',
    meaning: 'Divine Protection, Wealth, Status',
    materials: 'Gold, Faience, Carnelian, Lapis',
    purpose: 'Worn by nobility, depicted on gods, temple treasures',
    symbol: 'Wealth in afterlife'
  }
]

export default function StonesJewelryPage() {
  const [selectedStone, setSelectedStone] = useState(stones[0])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Gem size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Treasures</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Stones & Jewelry</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the sacred stones and symbolic jewelry of ancient Egypt
        </p>
      </motion.div>

      {/* Sacred Stones Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Gem size={24} />
          Sacred Stones & Their Meanings
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
          {stones.map((stone) => {
            const IconComponent = stone.icon
            return (
              <button
                key={stone.name}
                onClick={() => setSelectedStone(stone)}
                className={`p-3 rounded-lg transition-all ${
                  selectedStone.name === stone.name
                    ? 'bg-gold text-gray-900 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                <div className="text-center">
                  <IconComponent size={24} className="mx-auto mb-1" />
                  <div className="font-semibold">{stone.name}</div>
                  <div className="text-xs opacity-75">{stone.color.split(',')[0]}</div>
                </div>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStone.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="egyptian-card bg-gradient-to-br from-cyan-50 to-blue-50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gold mb-2">{selectedStone.name}</h3>
                <p className="text-gray-600 mb-3">{selectedStone.meaning}</p>
                <div className="space-y-2">
                  <div><span className="font-semibold">Color:</span> {selectedStone.color}</div>
                  <div><span className="font-semibold">Chakra:</span> {selectedStone.chakra}</div>
                  <div><span className="font-semibold">Frequency:</span> {selectedStone.frequency}</div>
                  <div><span className="font-semibold">Deity:</span> {selectedStone.deity}</div>
                  <div><span className="font-semibold">Symbol:</span> {selectedStone.symbol}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-egyptian-blue mb-2">Healing Properties</h4>
                <p className="text-gray-700 mb-3">{selectedStone.healing}</p>
                <h4 className="font-semibold text-egyptian-blue mb-2">Ancient Uses</h4>
                <p className="text-gray-700">{selectedStone.uses}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Jewelry Types */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Crown size={24} />
          Sacred Jewelry & Amulets
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jewelryTypes.map((jewelry, index) => (
            <motion.div
              key={jewelry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card"
            >
              <h3 className="text-xl font-bold text-gold mb-2">{jewelry.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{jewelry.materials}</p>
              <p className="text-gray-700 mb-2">{jewelry.meaning}</p>
              <p className="text-sm text-gray-600">{jewelry.purpose}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic">
          💡 <span className="font-semibold">Did you know?</span> The Egyptian Scarab represents the sun&apos;s journey across the sky—born at dawn, travels through day, and is reborn each morning!
        </p>
      </motion.div>
    </div>
  )
}