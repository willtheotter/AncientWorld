'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scroll, Calendar, Heart, BookOpen, ChevronRight, Scale, Gem, Waves, Library, ScrollText, DoorOpen, Code, Feather, Ship, Shield, Users } from 'lucide-react'

const learnModules = [
  {
    id: 'timeline',
    title: 'Interactive Timeline',
    description: 'Journey through 5,000 years of ancient history, from Early Dynastic Egypt to Classical Greece.',
    icon: Calendar,
    href: '/learn/timeline',
    color: 'from-amber-600 to-orange-600',
    topics: ['Old Kingdom', 'New Kingdom', 'Babylonian Empire', 'Classical Greece']
  },
  {
    id: 'medicine',
    title: 'Medicine & Healing',
    description: 'Discover ancient medical practices, from Egyptian herbal remedies to Greek surgical techniques.',
    icon: Heart,
    href: '/learn/medicine',
    color: 'from-emerald-600 to-teal-600',
    topics: ['Herbal Remedies', 'Surgery', 'Spiritual Healing', 'Medical Papyri']
  },
  {
    id: 'mythology',
    title: 'Mythology Encyclopedia',
    description: 'Explore gods and goddesses from Egypt, Mesopotamia, Greece, and Canaan.',
    icon: BookOpen,
    href: '/learn/mythology',
    color: 'from-purple-600 to-indigo-600',
    topics: ['Egyptian Deities', 'Greek Pantheon', 'Mesopotamian Gods', 'Sacred Symbols']
  },
  {
    id: 'religion-mythology',
    title: 'Religion & Mythology',
    description: 'Deep dive into ancient religious beliefs, sacred stories, and legendary texts.',
    icon: Feather,
    href: '/learn/religion-mythology',
    color: 'from-violet-600 to-purple-600',
    topics: ['Egyptian Deities', 'Resurrection of Osiris', 'Sacred Literature', 'Biblical Connections']
  },
  {
    id: 'laws-texts',
    title: 'Laws, Texts & Culture',
    description: 'Explore ancient legal systems, wisdom literature, and cultural practices.',
    icon: ScrollText,
    href: '/learn/laws-texts',
    color: 'from-slate-600 to-gray-600',
    topics: ['Legal System', 'Wisdom Texts', 'Social Structure', 'Daily Life']
  },
  {
    id: 'stones-jewelry',
    title: 'Stones & Jewelry',
    description: 'Discover sacred stones, precious gems, and symbolic jewelry across civilizations.',
    icon: Gem,
    href: '/learn/stones-jewelry',
    color: 'from-cyan-600 to-blue-600',
    topics: ['Sacred Stones', 'Birthstones', 'Amulets', 'Jewelry Making']
  },
  {
    id: 'sound-frequencies',
    title: 'Sound Frequencies',
    description: 'Explore healing power of sound, vibration, and sacred acoustics in ancient temples.',
    icon: Waves,
    href: '/learn/sound-frequencies',
    color: 'from-violet-600 to-purple-600',
    topics: ['Solfeggio Frequencies', 'Temple Acoustics', 'Sound Healing', 'Sacred Chanting']
  },
  {
    id: 'house-of-life',
    title: 'The House of Life',
    description: 'Discover ancient centers of learning, medicine, and spiritual knowledge.',
    icon: Library,
    href: '/learn/house-of-life',
    color: 'from-orange-600 to-red-600',
    topics: ['Education', 'Medical Texts', 'Magical Papyri', 'Scribe Training']
  },
  {
    id: 'laws-of-maat',
    title: '42 Laws of Maat',
    description: 'Explore ethical and spiritual principles that guided ancient Egyptian life.',
    icon: Scale,
    href: '/learn/laws-of-maat',
    color: 'from-amber-600 to-yellow-600',
    topics: ['Negative Confessions', 'Divine Principles', 'Afterlife Judgment', 'Daily Ethics']
  },
  {
    id: 'book-of-dead',
    title: 'The Book of the Dead',
    description: 'Discover the ancient funerary text that guided souls through the afterlife.',
    icon: Scroll,
    href: '/learn/book-of-dead',
    color: 'from-indigo-600 to-purple-600',
    topics: ['Spells', 'Weighing of the Heart', 'Afterlife Journey', 'Papyrus Scrolls']
  },
  {
    id: 'gates-underworld',
    title: 'The 12 Gates of the Underworld',
    description: 'Journey through the Duat and the twelve gates of the Egyptian underworld.',
    icon: DoorOpen,
    href: '/learn/gates-underworld',
    color: 'from-gray-800 to-black',
    topics: ['The Duat', 'Gate Guardians', 'Soul\'s Journey', 'Solar Barque']
  }
]

export default function LearnPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Scroll size={24} />
          <span className="text-sm uppercase tracking-wider">Educational Hub</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Discover the Ancient World</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore the rich history, advanced medicine, and fascinating mythology of the world's greatest civilizations
        </p>
      </motion.div>

      {/* Learning Modules Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learnModules.map((module, index) => {
          const Icon = module.icon
          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link href={module.href}>
                <div className="egyptian-card h-full hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-egyptian-blue mb-2">{module.title}</h2>
                  <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {module.topics.slice(0, 3).map(topic => (
                      <span key={topic} className="text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-gold text-sm group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}