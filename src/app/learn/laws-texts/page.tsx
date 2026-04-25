'use client'

import { motion } from 'framer-motion'
import { Scroll, BookOpen, Users, Scale, Code, Heart } from 'lucide-react'

const sections = [
  {
    title: 'Legal System',
    icon: Scale,
    content: `Ancient Egyptian law was based on a common sense view of right and wrong, following the principles of Ma'at (truth, balance, order). There was no formal law code like later civilizations, but legal principles were documented and enforced.

The pharaoh was the ultimate judge, but local courts called "Kenbet" handled most cases. These courts consisted of local officials, priests, and respected elders. Women had significant legal rights—they could own property, initiate divorce, and serve on juries.

Punishments ranged from fines and restitution to corporal punishment and exile. The most serious crimes (tomb robbery, treason) could result in execution. The concept of "innocent until proven guilty" existed, with both sides presenting evidence.`
  },
  {
    title: 'Wisdom Literature',
    icon: BookOpen,
    content: `Wisdom texts (Sebayt) were instructional writings teaching proper behavior and moral conduct. These "teachings" were attributed to famous sages and pharaohs, providing guidance on truth, justice, and living in harmony with Ma'at.

Famous texts include "The Instruction of Ptahhotep" (oldest complete book in history), "The Teaching for Merikare," and "The Instruction of Amenemope." These works influenced biblical proverbs and continue to be studied for their universal wisdom.

Key themes included: control your temper, listen to others, be generous to the poor, respect elders, avoid greed, and speak truth.`
  },
  {
    title: 'Social Structure',
    icon: Users,
    content: `Ancient Egyptian society was hierarchical but allowed for social mobility. The pharaoh stood at the top, followed by viziers, high priests, and nobles. Below them were scribes, soldiers, and skilled artisans.

The middle class included merchants, craftsmen, and doctors. Peasants and farmers formed the base of the social pyramid, while slaves (typically prisoners of war) were at the bottom.

Unlike many ancient civilizations, women could own property, serve as priests, and even rule as pharaoh (Hatshepsut, Cleopatra VII). Education was valued, with scribes holding particularly high status.`
  },
  {
    title: 'Daily Life & Culture',
    icon: Heart,
    content: `Family was the center of Egyptian life. Marriage had no formal ceremony—couples simply moved in together. Monogamy was the norm, though pharaohs had multiple wives for political reasons.

Homes were made of mud brick, with flat roofs used as living spaces. Meals consisted of bread, beer, onions, garlic, figs, dates, fish, and occasionally meat (for the wealthy). Entertainment included music, dancing, board games (Senet), hunting, and fishing.

Clothing was simple linen, white for purity. Both men and women wore jewelry, wigs, and makeup (made from malachite and galena)—used for both beauty and eye protection.`
  }
]

export default function LawsTextsPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Code size={24} />
          <span className="text-sm uppercase tracking-wider">Knowledge</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Laws, Texts & Culture</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring the legal, literary, and cultural foundations of ancient Egypt
        </p>
      </motion.div>

      <div className="space-y-6">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Icon size={24} className="text-gold" />
                </div>
                <h2 className="text-2xl font-bold text-egyptian-blue">{section.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic">
          💡 <span className="font-semibold">Did you know?</span> The "Instruction of Ptahhotep" is considered the oldest complete book in existence, dating to around 2375 BCE!
        </p>
      </motion.div>
    </div>
  )
}