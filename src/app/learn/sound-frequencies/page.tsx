'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Waves, Volume2, Music, GitBranch, Activity, Heart } from 'lucide-react'

const frequencies = [
  {
    hz: '174 Hz',
    name: 'Foundation',
    color: 'from-red-600 to-orange-600',
    effect: 'Pain relief, grounding, safety',
    healing: 'Reduces physical and energetic pain, creates security',
    egyptianUse: 'Healing temple chants, surgery preparation'
  },
  {
    hz: '285 Hz',
    name: 'Healing',
    color: 'from-orange-600 to-yellow-600',
    effect: 'Tissue healing, immune system',
    healing: 'Heals tissues, rejuvenates energy fields',
    egyptianUse: 'After-surgery recovery, wound healing'
  },
  {
    hz: '396 Hz',
    name: 'Liberation',
    color: 'from-yellow-600 to-amber-600',
    effect: 'Releasing fear, grief, guilt',
    healing: 'Releases negative patterns, emotional blockages',
    egyptianUse: 'Purification rituals, death preparation'
  },
  {
    hz: '417 Hz',
    name: 'Sacral',
    color: 'from-amber-600 to-orange-600',
    effect: 'Creativity, emotional release',
    healing: 'Clears trauma, facilitates change',
    egyptianUse: 'Creativity rituals, life transitions'
  },
  {
    hz: '432 Hz',
    name: 'Universal',
    color: 'from-green-600 to-teal-600',
    effect: 'Nature connection, universal harmony',
    healing: 'Mathematical resonance with nature, deep peace',
    egyptianUse: 'Temple music, sacred ceremonies'
  },
  {
    hz: '528 Hz',
    name: 'Miracle',
    color: 'from-teal-600 to-cyan-600',
    effect: 'DNA repair, transformation, love',
    healing: 'Repairs DNA, increases life energy, miracles',
    egyptianUse: 'High healing rituals, sun temple music'
  },
  {
    hz: '639 Hz',
    name: 'Heart',
    color: 'from-cyan-600 to-blue-600',
    effect: 'Relationships, connection, harmony',
    healing: 'Heals relationships, fosters love',
    egyptianUse: 'Community ceremonies, relationship healing'
  },
  {
    hz: '741 Hz',
    name: 'Expression',
    color: 'from-blue-600 to-indigo-600',
    effect: 'Creativity, self-expression',
    healing: 'Expression, toxin cleansing',
    egyptianUse: 'Art creation, truth ceremonies'
  },
  {
    hz: '852 Hz',
    name: 'Awakening',
    color: 'from-indigo-600 to-purple-600',
    effect: 'Spiritual order, intuition',
    healing: 'Raises spiritual awareness, clears mind',
    egyptianUse: 'Priest training, high initiations'
  },
  {
    hz: '963 Hz',
    name: 'Crown',
    color: 'from-purple-600 to-pink-600',
    effect: 'Divine connection, light, oneness',
    healing: 'Connects to higher self, divine source',
    egyptianUse: 'Solar temple, pharaoh rituals'
  }
]

const templeAcoustics = [
  {
    name: 'Great Pyramid',
    description: 'King\'s Chamber resonates at 114 Hz, Alters brain waves to Theta state',
    purpose: 'Deep meditation, spiritual visions'
  },
  {
    name: 'Hypostyle Hall',
    description: '134 columns designed as acoustic resonators',
    purpose: 'Sound amplification, divine presence'
  },
  {
    name: 'Abu Simbel',
    description: 'Chambers resonate during solar alignment',
    purpose: 'Cosmic harmony, sun activation'
  },
  {
    name: 'Dendera',
    description: 'Crystal sound healing, sistrum rhythms',
    purpose: 'Lightbody awakening, Hathor\'s healing'
  }
]

export default function SoundFrequenciesPage() {
  const [activeFreq, setActiveFreq] = useState(frequencies[5])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Waves size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Acoustics</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Sound Frequencies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The healing power of sound, vibration, and sacred acoustics in ancient Egypt
        </p>
      </motion.div>

      {/* Solfeggio Frequencies */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Music size={24} />
          Solfeggio Frequencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
          {frequencies.map((freq) => (
            <button
              key={freq.hz}
              onClick={() => setActiveFreq(freq)}
              className={`p-3 rounded-lg text-center transition-all ${
                activeFreq.hz === freq.hz
                  ? `bg-gradient-to-r ${freq.color} text-white shadow-lg`
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            >
              <div className="font-bold">{freq.hz}</div>
              <div className="text-sm">{freq.name}</div>
            </button>
          ))}
        </div>

        <motion.div
          key={activeFreq.hz}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`egyptian-card bg-gradient-to-r ${activeFreq.color}/10`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-2">{activeFreq.hz} - {activeFreq.name}</h3>
              <p className="text-gray-700 mb-3">{activeFreq.effect}</p>
              <div className="space-y-2">
                <div><span className="font-semibold">Healing Properties:</span> {activeFreq.healing}</div>
                <div><span className="font-semibold">Egyptian Use:</span> {activeFreq.egyptianUse}</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2 animate-pulse">🎵</div>
                <p className="text-sm text-gray-500">Sacred resonance frequency</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Temple Acoustics */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <GitBranch size={24} />
          Temple Acoustics
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {templeAcoustics.map((temple, index) => (
            <motion.div
              key={temple.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card"
            >
              <h3 className="text-xl font-bold text-gold mb-2">{temple.name}</h3>
              <p className="text-gray-700 mb-2">{temple.description}</p>
              <p className="text-sm text-gray-500">Purpose: {temple.purpose}</p>
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
          💡 <span className="font-semibold">Did you know?</span> The King's Chamber in the Great Pyramid resonates at 114 Hz, which research shows can shift brain waves into a meditative theta state!
        </p>
      </motion.div>
    </div>
  )
}