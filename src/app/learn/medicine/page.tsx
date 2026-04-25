'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlaskConical, Scissors, Sparkles, Scroll, Search, Heart } from 'lucide-react'

const categories = [
  {
    id: 'herbal',
    name: 'Herbal Remedies',
    icon: FlaskConical,
    color: 'from-emerald-600 to-green-600',
    description: 'Natural healing from the earth',
    remedies: [
      { name: 'Garlic', uses: 'Antibiotic, immune booster, heart health', preparation: 'Consumed raw or mixed with honey', modernUse: 'Still used for immune support' },
      { name: 'Onion', uses: 'Respiratory issues, infections, healing wounds', preparation: 'Crushed or boiled', modernUse: 'Known antimicrobial properties' },
      { name: 'Aloe Vera', uses: 'Skin conditions, burns, healing', preparation: 'Applied as gel', modernUse: 'Widely used in skincare' },
      { name: 'Frankincense', uses: 'Inflammation, respiratory, spiritual', preparation: 'Burned as incense or consumed', modernUse: 'Subject of modern research' },
      { name: 'Honey', uses: 'Wound healing, antibiotic, digestive', preparation: 'Applied directly or mixed', modernUse: 'Medical-grade honey used in hospitals' },
      { name: 'Willow Bark', uses: 'Pain relief, fever, inflammation', preparation: 'Chewed or brewed as tea', modernUse: 'Source of aspirin' }
    ]
  },
  {
    id: 'surgery',
    name: 'Surgical Techniques',
    icon: Scissors,
    color: 'from-blue-600 to-cyan-600',
    description: 'Advanced medical procedures',
    remedies: [
      { name: 'Trepanation', uses: 'Cranial pressure relief, head trauma', preparation: 'Drilling hole in skull', modernUse: 'Precursor to modern neurosurgery' },
      { name: 'Bone Setting', uses: 'Fracture treatment, broken bones', preparation: 'Wooden splints and linen wraps', modernUse: 'Modern orthopedic techniques' },
      { name: 'Circumcision', uses: 'Ritual and hygiene', preparation: 'Surgical removal', modernUse: 'Still practiced today' },
      { name: 'Wound Suturing', uses: 'Closing wounds, promoting healing', preparation: 'Needle and linen thread', modernUse: 'Basic surgical technique' }
    ]
  },
  {
    id: 'spiritual',
    name: 'Spiritual Healing',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-600',
    description: 'Magic, ritual, and divine intervention',
    remedies: [
      { name: 'Amulets', uses: 'Protection, healing, luck', preparation: 'Carved stones and metals', modernUse: 'Symbolic in various cultures' },
      { name: 'Incantations', uses: 'Dispelling evil, invoking gods', preparation: 'Spoken during rituals', modernUse: 'Continued in spiritual practices' },
      { name: 'Temple Sleep', uses: 'Dream interpretation, divine healing', preparation: 'Sleeping in temple', modernUse: 'Similar to meditation retreats' },
      { name: 'Offerings', uses: 'Appeasing gods, healing requests', preparation: 'Food, drink, incense', modernUse: 'Present in modern faith healing' }
    ]
  }
]

const medicalPapyri = [
  {
    name: 'Edwin Smith Papyrus',
    date: '1600 BCE',
    content: 'Surgical treatise describing 48 cases of injuries',
    significance: 'First known medical text to use systematic diagnosis'
  },
  {
    name: 'Ebers Papyrus',
    date: '1550 BCE',
    content: '700 remedies for various ailments',
    significance: 'Most comprehensive ancient medical text'
  },
  {
    name: 'Kahun Papyrus',
    date: '1825 BCE',
    content: 'Gynecological and veterinary texts',
    significance: 'Oldest known medical papyrus'
  },
  {
    name: 'London Medical Papyrus',
    date: '1350 BCE',
    content: 'Magical and medical remedies',
    significance: 'Demonstrates blend of medicine and magic'
  }
]

export default function MedicinePage() {
  const [activeCategory, setActiveCategory] = useState('herbal')
  const [selectedRemedy, setSelectedRemedy] = useState<any>(null)

  const currentCategory = categories.find(c => c.id === activeCategory)
  const Icon = currentCategory?.icon

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Heart size={24} />
          <span className="text-sm uppercase tracking-wider">Ancient Wisdom</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Medicine & Healing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the sophisticated medical practices of ancient Egypt
        </p>
      </motion.div>

      {/* Category Navigation */}
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => {
          const CatIcon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-white/50 hover:bg-white/80 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <CatIcon size={20} />
                <span className="font-semibold">{cat.name}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`egyptian-card bg-gradient-to-br ${currentCategory?.color}/10`}
        >
          <div className="flex items-center gap-3 mb-6">
            {Icon && <Icon size={32} className="text-gold" />}
            <div>
              <h2 className="text-2xl font-bold text-egyptian-blue">{currentCategory?.name}</h2>
              <p className="text-gray-600">{currentCategory?.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {currentCategory?.remedies.map((remedy, index) => (
              <motion.button
                key={remedy.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedRemedy(remedy)}
                className="bg-white/50 rounded-lg p-4 text-left hover:bg-white/70 transition-all text-center"
              >
                <h3 className="font-bold text-egyptian-blue mb-2">{remedy.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{remedy.uses}</p>
                <span className="text-xs text-gold">Click for details →</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Medical Papyri Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card"
      >
        <div className="flex items-center gap-3 mb-6">
          <Scroll size={24} className="text-gold" />
          <h2 className="text-2xl font-bold text-egyptian-blue">Medical Papyri</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {medicalPapyri.map((papyrus) => (
            <div key={papyrus.name} className="bg-white/30 rounded-lg p-4">
              <h3 className="font-bold text-gold">{papyrus.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{papyrus.date}</p>
              <p className="text-sm text-gray-700 mb-2">{papyrus.content}</p>
              <p className="text-xs text-egyptian-blue">{papyrus.significance}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic">
          💡 <span className="font-semibold">Did you know?</span> Ancient Egyptian physicians specialized in different areas 
          — some treated only the eyes, others the teeth, and some even focused solely on the stomach!
        </p>
      </motion.div>

      {/* Remedy Detail Modal */}
      <AnimatePresence>
        {selectedRemedy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedRemedy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-md w-full p-6 border-2 border-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gold mb-4">{selectedRemedy.name}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-egyptian-blue">Uses:</span>
                  <p className="text-gray-700">{selectedRemedy.uses}</p>
                </div>
                <div>
                  <span className="font-semibold text-egyptian-blue">Preparation:</span>
                  <p className="text-gray-700">{selectedRemedy.preparation}</p>
                </div>
                <div>
                  <span className="font-semibold text-egyptian-blue">Modern Connection:</span>
                  <p className="text-gray-700">{selectedRemedy.modernUse}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedRemedy(null)}
                className="mt-6 w-full py-2 bg-gold text-white rounded-lg hover:bg-gold/80"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}