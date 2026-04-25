'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, CheckCircle, Heart, Shield, Star, Sun, Moon, Feather, Crown, Sparkles } from 'lucide-react'

const laws = [
  { number: 1, law: "I have not committed sin.", category: "General Conduct", principle: "Purity of heart" },
  { number: 2, law: "I have not committed robbery with violence.", category: "Justice", principle: "Respect for property" },
  { number: 3, law: "I have not stolen.", category: "Justice", principle: "Honesty" },
  { number: 4, law: "I have not slain men or women.", category: "Sanctity of Life", principle: "Respect for life" },
  { number: 5, law: "I have not stolen grain.", category: "Justice", principle: "Fair dealing" },
  { number: 6, law: "I have not purloined offerings.", category: "Piety", principle: "Respect for sacred things" },
  { number: 7, law: "I have not stolen from God.", category: "Piety", principle: "Reverence for divine" },
  { number: 8, law: "I have not uttered lies.", category: "Truth", principle: "Veracity" },
  { number: 9, law: "I have not carried away food.", category: "Justice", principle: "Generosity" },
  { number: 10, law: "I have not cursed.", category: "Speech", principle: "Kindness in words" },
  { number: 11, law: "I have not committed adultery.", category: "Relationships", principle: "Fidelity" },
  { number: 12, law: "I have not made anyone cry.", category: "Compassion", principle: "Empathy" },
  { number: 13, law: "I have not eaten the heart.", category: "Spiritual", principle: "No envy or regret" },
  { number: 14, law: "I have not attacked anyone.", category: "Peace", principle: "Non-violence" },
  { number: 15, law: "I am not deceitful.", category: "Truth", principle: "Integrity" },
  { number: 16, law: "I have not stolen cultivated land.", category: "Justice", principle: "Respect for boundaries" },
  { number: 17, law: "I have not been an eavesdropper.", category: "Privacy", principle: "Respect for others" },
  { number: 18, law: "I have not slandered.", category: "Speech", principle: "Avoid gossip" },
  { number: 19, law: "I have not been angry without reason.", category: "Emotions", principle: "Self-control" },
  { number: 20, law: "I have not seduced anyone&apos;s wife.", category: "Relationships", principle: "Fidelity" },
  { number: 21, law: "I have not polluted myself.", category: "Purity", principle: "Cleanliness" },
  { number: 22, law: "I have not terrorized anyone.", category: "Peace", principle: "Safety for all" },
  { number: 23, law: "I have not transgressed the law.", category: "Obedience", principle: "Rule of law" },
  { number: 24, law: "I have not been hot-tempered.", category: "Emotions", principle: "Patience" },
  { number: 25, law: "I have not rejected the truth.", category: "Truth", principle: "Honesty" },
  { number: 26, law: "I have not cursed God.", category: "Piety", principle: "Reverence" },
  { number: 27, law: "I have not behaved with violence.", category: "Peace", principle: "Gentleness" },
  { number: 28, law: "I am not arrogant.", category: "Humility", principle: "Modesty" },
  { number: 29, law: "I have not stolen the bread of the gods.", category: "Piety", principle: "Respect for offerings" },
  { number: 30, law: "I have not stolen the cakes of the glorified ones.", category: "Piety", principle: "Respect for ancestors" },
  { number: 31, law: "I have not taken food from a child.", category: "Compassion", principle: "Protection of vulnerable" },
  { number: 32, law: "I have not scorned the god of my city.", category: "Piety", principle: "Loyalty to community" },
  { number: 33, law: "I have not killed the cattle of the god.", category: "Piety", principle: "Respect for sacred animals" },
  { number: 34, law: "I have not turned a deaf ear to the words of truth.", category: "Wisdom", principle: "Openness to truth" },
  { number: 35, law: "I have not judged hastily.", category: "Justice", principle: "Fair judgment" },
  { number: 36, law: "I have not been an agitator.", category: "Peace", principle: "Harmony" },
  { number: 37, law: "I have not worked evil.", category: "Goodness", principle: "Do no harm" },
  { number: 38, law: "I have not cheated.", category: "Justice", principle: "Fairness" },
  { number: 39, law: "I have not polluted the water.", category: "Environment", principle: "Care for nature" },
  { number: 40, law: "I have not spoken scornfully.", category: "Speech", principle: "Respectful words" },
  { number: 41, law: "I have not cursed the gods.", category: "Piety", principle: "Reverence" },
  { number: 42, law: "I have not taken things for myself that belong to the gods.", category: "Piety", principle: "Humility before divine" }
]

const categories = [
  { name: "All", icon: Scale },
  { name: "Truth", icon: Feather },
  { name: "Justice", icon: Shield },
  { name: "Piety", icon: Crown },
  { name: "Compassion", icon: Heart },
  { name: "Speech", icon: Star },
  { name: "Peace", icon: Sun },
  { name: "Humility", icon: Moon }
]

export default function LawsOfMaatPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLaw, setSelectedLaw] = useState(laws[0])

  const filteredLaws = selectedCategory === "All" 
    ? laws 
    : laws.filter(law => law.category === selectedCategory)

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Scale size={24} />
          <span className="text-sm uppercase tracking-wider">Divine Principles</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">The 42 Laws of Maat</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The ethical and spiritual principles that guided ancient Egyptian life and the judgment of the soul
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Laws List */}
        <div className="lg:col-span-2">
          <div className="flex gap-2 flex-wrap mb-4">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1 transition-all ${
                    selectedCategory === cat.name
                      ? 'bg-gold text-gray-900'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                >
                  <Icon size={14} />
                  {cat.name}
                </button>
              )
            })}
          </div>
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2">
            {filteredLaws.map((law) => (
              <button
                key={law.number}
                onClick={() => setSelectedLaw(law)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedLaw.number === law.number
                    ? 'bg-gold/20 border-gold'
                    : 'bg-white/30 hover:bg-white/50'
                } border border-transparent`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gold font-bold">#{law.number}</span>
                  <span className="text-gray-700">{law.law}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Law Detail */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLaw.number}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="egyptian-card sticky top-24"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">⚖️</div>
                <h3 className="text-2xl font-bold text-gold">Law #{selectedLaw.number}</h3>
                <p className="text-lg text-egyptian-blue font-semibold mt-2">{selectedLaw.law}</p>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-gold">Category:</span>
                  <p className="text-gray-700">{selectedLaw.category}</p>
                </div>
                <div>
                  <span className="font-semibold text-gold">Principle:</span>
                  <p className="text-gray-700">{selectedLaw.principle}</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gold/30">
                <p className="text-sm text-gray-500 italic">
                  These laws were declared during the &quot;Weighing of the Heart&quot; ceremony in the Hall of Maat
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Feather size={20} className="text-gold" />
          <span className="font-semibold">The Weighing of the Heart</span>
        </div>
        <p className="text-gray-700 text-sm">
          In the Hall of Maat, the deceased&apos;s heart was weighed against the feather of Maat (truth). 
          If the heart was lighter than the feather, they were worthy of paradise. If heavier, their soul was devoured by Ammit.
        </p>
      </motion.div>
    </div>
  )
}