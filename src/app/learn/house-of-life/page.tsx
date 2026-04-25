'use client'

import { motion } from 'framer-motion'
import { Library, BookOpen, Scroll, GraduationCap, Heart, Sparkles, Brain, PenTool } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: 'The Per Ankh',
    subtitle: 'House of Life',
    icon: Library,
    content: `The Per Ankh (House of Life) was ancient Egypt&apos;s most sacred institution of learning—part library, part university, part medical school, and part temple. These institutions were attached to major temples and served as centers for the preservation and creation of knowledge.

Only priests, scribes, and the elite could enter. The House of Life housed thousands of papyrus scrolls containing medical texts, magical spells, religious rituals, astronomical observations, and literary works. Scribes spent years copying these texts by hand, preserving knowledge for future generations.`
  },
  {
    title: 'Education & Training',
    subtitle: 'Path of the Scribe',
    icon: GraduationCap,
    content: `Scribes were among the most respected professionals in Egypt, requiring 12+ years of rigorous training beginning in childhood. Students memorized hundreds of hieroglyphic signs, practiced on pottery shards (ostraca), and learned mathematics, astronomy, medicine, and law.

The &quot;Satire of the Trades&quot; text famously encouraged boys to become scribes, describing how all other professions had hardships while scribes &quot;directed the work of others.&quot; Literacy was estimated at only 1-5% of the population, making scribes a privileged class.`
  },
  {
    title: 'Medical Knowledge',
    subtitle: 'Healing Arts',
    icon: Heart,
    content: `The Houses of Life were centers of medical education. Physicians specialized in different areas—dentistry, ophthalmology, gynecology, and proctology. Medical papyri (Ebers, Edwin Smith) contained detailed anatomical knowledge, surgical procedures, and hundreds of remedies.

Doctors performed complex surgeries, set broken bones, treated wounds with honey, and prescribed herbal medicines. The Edwin Smith Papyrus describes the brain, meninges, and cerebrospinal fluid—centuries before Western medicine.`
  },
  {
    title: 'Magical & Religious Texts',
    subtitle: 'Heka & Ritual',
    icon: Sparkles,
    content: `The House of Life also produced magical texts, spells, and ritual instructions. These were not &quot;superstition&quot; but part of heka—the divine force of creation. Specific rituals were believed to heal the sick, protect the dead, and maintain cosmic order.

The most famous texts produced include spells from the Book of the Dead, temple rituals, and healing incantations. Priests underwent extensive training in reciting these texts correctly—errors could be dangerous.`
  },
  {
    title: 'Famous Houses of Life',
    subtitle: 'Sacred Centers',
    icon: PenTool,
    content: `Major Houses of Life existed at Karnak (Thebes), Abydos, Heliopolis, Memphis, and Amarna. The largest was at Karnak, attached to the Temple of Amun-Ra. These institutions survived for thousands of years, with the last House of Life operating at Philae temple until the 6th century CE.

The famous Library of Alexandria may have been inspired by the House of Life tradition—preserving knowledge from Egypt and the entire Hellenistic world.`,
    sites: ['Karnak Temple', 'Abydos', 'Philae']
  }
]

export default function HouseOfLifePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Library size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Knowledge</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">The House of Life</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ancient Egypt&apos;s center of learning, medicine, and spiritual knowledge
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
                <div>
                  <h2 className="text-2xl font-bold text-egyptian-blue">{section.title}</h2>
                  <p className="text-sm text-gold">{section.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-3">{section.content}</p>
              {section.sites && (
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gold/20">
                  <span className="text-sm text-gold font-semibold">Visit on map:</span>
                  {section.sites.map((site) => (
                    <Link
                      key={site}
                      href={`/explore/${site.toLowerCase().replace(/ /g, '-')}`}
                      className="text-sm text-egyptian-blue hover:text-gold transition-colors"
                    >
                      {site}
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Brain size={20} className="text-gold" />
          <span className="font-semibold">Legacy of Knowledge</span>
        </div>
        <p className="text-gray-700 text-sm">
          The House of Life tradition influenced Greek philosophy, Roman medicine, and Islamic scholarship. 
          The Hippocratic Oath, the foundation of Western medicine, shows Egyptian influence in its ethical principles.
        </p>
      </motion.div>
    </div>
  )
}