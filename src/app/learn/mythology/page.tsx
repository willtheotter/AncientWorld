'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Moon, Sun, Feather, Crown, Zap, Bird, Fish, Heart, BookOpen, MapPin } from 'lucide-react'
import Link from 'next/link'

const deities = [
  {
    id: 'ra',
    name: 'Ra',
    title: 'God of the Sun, King of the Gods',
    icon: Sun,
    symbol: 'Sun disk, falcon, scarab',
    color: 'from-amber-600 to-orange-600',
    description: 'The supreme sun god who sailed across the sky in his solar barque each day and through the underworld each night.',
    story: `Ra was the most important deity in the Egyptian pantheon. According to myth, Ra created himself from the primordial waters of Nun and then created all other gods and the world. Each day, Ra sailed across the sky in his solar barque, bringing light to the world. At night, he traveled through the underworld, battling the serpent Apophis to ensure the sun would rise again.

Ra was often merged with other gods, becoming Amun-Ra (with Amun of Thebes) and Ra-Horakhty (with Horus). Pharaohs claimed descent from Ra, calling themselves "Sons of Ra."`,
    temples: ['Temple of Heliopolis', 'Karnak (as Amun-Ra)', 'Abu Simbel'],
    visualElements: ['Falcon head with sun disk', 'Solar barque', 'Scarab beetle representing morning sun']
  },
  {
    id: 'horus',
    name: 'Horus',
    title: 'God of the Sky, Kingship, and Protection',
    icon: Bird,
    symbol: 'Falcon, Eye of Horus, double crown',
    color: 'from-blue-600 to-cyan-600',
    description: 'The falcon-headed god who represented divine kingship and protection.',
    story: `Horus was the son of Osiris and Isis. After his father was murdered by Set, Horus avenged his death in a series of battles. The conflict between Horus and Set represented the struggle between order and chaos. Horus eventually triumphed and became the rightful ruler of Egypt.

The pharaoh was considered the living embodiment of Horus on earth. The "Eye of Horus" (Wedjat) was a powerful symbol of protection and healing.`,
    temples: ['Temple of Horus at Edfu (best-preserved)', 'Kom Ombo (shared with Sobek)'],
    visualElements: ['Falcon head', 'Double crown of Egypt', 'Eye of Horus symbol']
  },
  {
    id: 'isis',
    name: 'Isis',
    title: 'Goddess of Magic, Motherhood, and Healing',
    icon: Heart,
    symbol: 'Throne, knot, cow horns with sun disk',
    color: 'from-emerald-600 to-teal-600',
    description: 'The divine mother and master healer who used magic to resurrect her husband Osiris.',
    story: `Isis was the devoted wife of Osiris and mother of Horus. When Set murdered Osiris, Isis used her powerful magic to resurrect him long enough to conceive Horus. She protected her son from Set's attacks and helped him claim the throne.

Isis was worshipped throughout Egypt and beyond, with her cult spreading to Greece and Rome. She was associated with healing, protection, and maternal love.`,
    temples: ['Temple of Isis at Philae', 'Temple of Isis at Giza'],
    visualElements: ['Throne headdress', 'Knot of Isis (tyet)', 'Cow horns with sun disk']
  },
  {
    id: 'osiris',
    name: 'Osiris',
    title: 'God of the Afterlife, Death, and Resurrection',
    icon: Feather,
    symbol: 'Crook and flail, Atef crown, mummy form',
    color: 'from-green-600 to-emerald-600',
    description: 'The King of the Underworld who judged the souls of the dead.',
    story: `Osiris was originally a wise king who brought civilization to Egypt. His jealous brother Set murdered him and scattered his body parts across Egypt. Isis gathered the pieces and, with Anubis' help, mummified Osiris, making him the first mummy. Osiris became the ruler of the underworld, where he judged the souls of the deceased.

The "Weighing of the Heart" ceremony, where the deceased's heart was weighed against the feather of Ma'at, determined their fate in the afterlife.`,
    temples: ['Abydos (Temple of Seti I)', 'Temple of Osiris at Abydos'],
    visualElements: ['Green skin (rebirth)', 'Mummy wrappings', 'Atef crown', 'Crook and flail']
  },
  {
    id: 'anubis',
    name: 'Anubis',
    title: 'God of Embalming, Tombs, and the Dead',
    icon: Moon,
    symbol: 'Jackal, embalming tools',
    color: 'from-gray-700 to-gray-900',
    description: 'The jackal-headed god who guided souls to the afterlife.',
    story: `Anubis was the god of mummification and protector of tombs. He presided over the embalming process and guided souls through the underworld. During the "Weighing of the Heart" ceremony, Anubis weighed the heart against the feather of Ma'at.

Anubis is often depicted as a black jackal, symbolizing both the color of rotting flesh and the fertile soil of the Nile. His role was later partly taken over by Osiris, but he remained an important funerary deity.`,
    temples: ['Shrines in Valley of the Kings', 'Cynopolis (center of worship)'],
    visualElements: ['Jackal head', 'Black coloring', 'Embalming pose']
  },
  {
    id: 'thoth',
    name: 'Thoth',
    title: 'God of Wisdom, Writing, and Knowledge',
    icon: BookOpen,
    symbol: 'Ibis, baboon, writing palette',
    color: 'from-indigo-600 to-purple-600',
    description: 'The divine scribe who recorded the deeds of the dead.',
    story: `Thoth was the inventor of writing, language, and mathematics. He served as the scribe of the gods, recording the outcome of the "Weighing of the Heart" ceremony. Thoth was also associated with magic, science, and the moon.

According to myth, Thoth wrote the "Book of Thoth," which contained powerful magical knowledge. He was often depicted with the head of an ibis or as a baboon.`,
    temples: ['Hermopolis (center of worship)', 'House of Life at Karnak'],
    visualElements: ['Ibis head', 'Baboon form', 'Writing palette']
  },
  {
    id: 'hathor',
    name: 'Hathor',
    title: 'Goddess of Love, Beauty, Music, and Joy',
    icon: Heart,
    symbol: 'Cow horns with sun disk, sistrum, mirror',
    color: 'from-rose-500 to-pink-500',
    description: 'The goddess of feminine love, motherhood, and celebration.',
    story: `Hathor was one of the most beloved goddesses in Egypt. She was associated with beauty, music, dance, and joy. Hathor welcomed the dead into the afterlife and was known as the "Lady of the Western Mountain" (the necropolis).

As a sky goddess, she was sometimes depicted as a cow with stars on her belly. The Hathor-headed columns at Dendera are among the most recognizable architectural features of Egyptian temples.`,
    temples: ['Temple of Hathor at Dendera', 'Temple of Hathor at Philae'],
    visualElements: ['Cow horns with sun disk', 'Sistrum (musical instrument)', 'Mirror']
  },
  {
    id: 'sobek',
    name: 'Sobek',
    title: 'God of the Nile, Crocodiles, and Fertility',
    icon: Fish,
    symbol: 'Crocodile, offering table',
    color: 'from-teal-600 to-cyan-600',
    description: 'The crocodile god who embodied the power and danger of the Nile.',
    story: `Sobek was associated with the Nile's fertility and the unpredictable danger of crocodiles. He was both feared and revered, with crocodiles being kept in temple pools and mummified after death.

Sobek represented the raw, untamed power of nature. He was sometimes merged with Ra to become Sobek-Ra, the sun god with crocodile power.`,
    temples: ['Temple of Kom Ombo (shared with Horus)', 'Crocodilopolis (Faiyum region)'],
    visualElements: ['Crocodile head', 'Priest attendants', 'Sacred crocodile pools']
  },
  {
    id: 'bastet',
    name: 'Bastet',
    title: 'Goddess of Home, Fertility, and Protection',
    icon: Moon,
    symbol: 'Cat, sistrum, lioness',
    color: 'from-orange-500 to-amber-500',
    description: 'The cat-headed goddess of home, fertility, and protection against evil.',
    story: `Bastet was originally a fierce lioness goddess of war, but gradually transformed into the gentle cat goddess of home and family. She protected households from evil spirits and disease.

The city of Bubastis was the center of her cult, where massive festivals celebrated her with music, dance, and feasting. Cats were sacred to Bastet, and killing one was a capital offense.`,
    temples: ['Temple of Bastet at Bubastis', 'Shrines throughout Egypt'],
    visualElements: ['Cat head', 'Lioness form', 'Sistrum', 'Kitten protection']
  }
]

export default function MythologyPage() {
  const [selectedDeity, setSelectedDeity] = useState(deities[0])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Eye size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Pantheon</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Mythology Encyclopedia</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet the gods and goddesses of ancient Egypt
        </p>
      </motion.div>

      {/* Deity Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {deities.map((deity) => {
          const Icon = deity.icon
          return (
            <motion.button
              key={deity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedDeity(deity)}
              className={`p-3 rounded-lg text-center transition-all ${
                selectedDeity.id === deity.id
                  ? `bg-gradient-to-r ${deity.color} text-white shadow-lg`
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            >
              <Icon size={28} className="mx-auto mb-1" />
              <div className="font-semibold text-sm">{deity.name}</div>
            </motion.button>
          )
        })}
      </div>

      {/* Deity Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDeity.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`egyptian-card bg-gradient-to-br ${selectedDeity.color}/10`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column - Deity Info */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedDeity.color} flex items-center justify-center`}>
                  <selectedDeity.icon size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-egyptian-blue">{selectedDeity.name}</h2>
                  <p className="text-gold">{selectedDeity.title}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">Mythology & Story</h3>
                <p className="text-gray-700 leading-relaxed">{selectedDeity.story}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">Visual Elements</h3>
                <ul className="space-y-1">
                  {selectedDeity.visualElements.map((element) => (
                    <li key={element} className="flex items-center gap-2">
                      <span className="text-gold">•</span>
                      <span className="text-gray-700">{element}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Symbols & Temple Connections */}
            <div className="flex-1 space-y-4">
              <div className="bg-white/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gold mb-2 flex items-center gap-2">
                  <Crown size={18} />
                  Symbols & Associations
                </h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Symbol:</span> {selectedDeity.symbol}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedDeity.symbol.split(',').map((sym) => (
                    <span key={sym} className="px-2 py-1 bg-gold/20 rounded text-sm">
                      {sym.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gold mb-2 flex items-center gap-2">
                  <MapPin size={18} />
                  Temple Connections
                </h3>
                <div className="space-y-2">
                  {selectedDeity.temples.map((temple) => (
                    <div key={temple} className="flex items-center gap-2">
                      <Link
                        href={`/explore/${temple.toLowerCase().replace(/ /g, '-')}`}
                        className="text-egyptian-blue hover:text-gold transition-colors text-sm"
                      >
                        {temple}
                      </Link>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Visit these sites on the interactive map!
                </p>
              </div>

              <div className="bg-gold/20 rounded-lg p-4 text-center">
                <div className="text-4xl mb-2">𓋹</div>
                <p className="text-sm text-gray-700">
                  Click any temple name to explore it on the map
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Note */}
      <div className="text-center text-sm text-gray-500">
        <p>The ancient Egyptian pantheon includes over 1,500 deities. These represent the most important and well-documented figures.</p>
      </div>
    </div>
  )
}