'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Scroll, Calendar, Heart, BookOpen, ChevronRight, Scale, 
  Gem, Waves, Library, ScrollText, DoorOpen, Code, Feather, 
  Ship, Shield, Users, Globe, Building2, Crown, Sword, Sun, 
  Moon, Star, FlaskConical, Atom, UserRound, Music, Zap
} from 'lucide-react'

const learnModules = [
  {
    id: 'timeline',
    title: 'Interactive Timeline',
    description: 'Journey through 10,000 years of world history, from early civilizations to the fall of Rome.',
    icon: Calendar,
    href: '/learn/timeline',
    color: 'from-amber-600 to-orange-600',
    topics: ['Egyptian Kingdoms', 'Mesopotamian Empires', 'Greek Golden Age', 'Roman Republic', 'Han Dynasty']
  },
  {
    id: 'medicine',
    title: 'Medicine & Healing',
    description: 'Discover ancient medical practices from Egypt, India, China, Greece, and the Islamic world.',
    icon: Heart,
    href: '/learn/medicine',
    color: 'from-emerald-600 to-teal-600',
    topics: ['Herbal Remedies', 'Surgery', 'Ayurveda', 'Traditional Chinese Medicine', 'Spiritual Healing']
  },
  {
    id: 'mythology',
    title: 'World Mythology',
    description: 'Explore gods and goddesses from Egypt, Greece, Mesopotamia, India, China, Maya, and Inca traditions.',
    icon: BookOpen,
    href: '/learn/mythology',
    color: 'from-purple-600 to-indigo-600',
    topics: ['Egyptian Pantheon', 'Greek Gods', 'Hindu Deities', 'Chinese Mythology', 'Mesoamerican Gods']
  },
  {
    id: 'religion-philosophy',
    title: 'Religion & Philosophy',
    description: 'Deep dive into spiritual beliefs, sacred texts, and philosophical traditions across civilizations.',
    icon: Feather,
    href: '/learn/religion-philosophy',
    color: 'from-violet-600 to-purple-600',
    topics: ['Egyptian Religion', 'Greek Philosophy', 'Hinduism', 'Buddhism', 'Confucianism', 'Zoroastrianism']
  },
  {
    id: 'laws-texts',
    title: 'Laws, Texts & Culture',
    description: 'Explore ancient legal systems, wisdom literature, and cultural practices worldwide.',
    icon: ScrollText,
    href: '/learn/laws-texts',
    color: 'from-slate-600 to-gray-600',
    topics: ['Code of Hammurabi', 'Egyptian Wisdom Texts', 'Roman Law', 'Confucian Classics', 'Maya Codices']
  },
  {
    id: 'art-architecture',
    title: 'Art & Architecture',
    description: 'Discover the monumental architecture, sculpture, painting, and decorative arts of ancient civilizations.',
    icon: Building2,
    href: '/learn/art-architecture',
    color: 'from-rose-600 to-pink-600',
    topics: ['Pyramids & Temples', 'Greek Columns', 'Roman Engineering', 'Indian Rock-Cut', 'Maya Pyramids']
  },
  {
    id: 'warfare-weapons',
    title: 'Warfare & Weapons',
    description: 'Learn about ancient military technology, tactics, and legendary battles.',
    icon: Sword,
    href: '/learn/warfare-weapons',
    color: 'from-red-600 to-orange-600',
    topics: ['Chariot Warfare', 'Greek Phalanx', 'Roman Legions', 'Siege Engines', 'Naval Battles']
  },
  {
    id: 'trade-economy',
    title: 'Trade & Economy',
    description: 'Explore ancient trade networks, currency systems, and economic structures.',
    icon: Ship,
    href: '/learn/trade-economy',
    color: 'from-cyan-600 to-blue-600',
    topics: ['Silk Road', 'Incense Route', 'Maritime Trade', 'Coinage', 'Barter Systems']
  },
  {
    id: 'daily-life',
    title: 'Daily Life',
    description: 'Discover how ordinary people lived, worked, and played in ancient times.',
    icon: Users,
    href: '/learn/daily-life',
    color: 'from-green-600 to-teal-600',
    topics: ['Housing', 'Food & Drink', 'Clothing', 'Education', 'Entertainment']
  },
  {
    id: 'great-achievements',
    title: 'Great Achievements',
    description: 'Explore the inventions, discoveries, and cultural achievements of ancient civilizations.',
    icon: Star,
    href: '/learn/great-achievements',
    color: 'from-gold-600 to-amber-600',
    topics: ['Writing Systems', 'Mathematics', 'Astronomy', 'Engineering', 'Medicine']
  },
  {
    id: 'stones-jewelry',
    title: 'Stones & Jewelry',
    description: 'Discover the sacred stones, precious gems, and symbolic jewelry of ancient civilizations worldwide.',
    icon: Gem,
    href: '/learn/stones-jewelry',
    color: 'from-cyan-600 to-blue-600',
    topics: ['Sacred Stones', 'Birthstones', 'Amulets', 'Jewelry Making', 'Crystal Healing']
  },
  {
    id: 'sound-frequencies',
    title: 'Sacred Sound & Vibrations',
    description: 'Explore the healing power of sound, Solfeggio frequencies, and sacred temple acoustics.',
    icon: Music,
    href: '/learn/sound-frequencies',
    color: 'from-violet-600 to-purple-600',
    topics: ['Solfeggio Frequencies', 'Temple Acoustics', 'Sound Healing', '1111 Hz Gateway', 'Sacred Chanting']
  },
  {
    id: 'archaeology',
    title: 'Archaeology & Discovery',
    description: 'Learn about the discovery and excavation of ancient sites and the methods archaeologists use.',
    icon: Globe,
    href: '/learn/archaeology',
    color: 'from-brown-600 to-amber-600',
    topics: ['Famous Excavations', 'Dating Methods', 'Underwater Archaeology', 'Conservation']
  },
  {
    id: 'mysteries',
    title: 'Ancient Mysteries',
    description: 'Explore unresolved questions, controversial theories, and enduring enigmas of the ancient world.',
    icon: Moon,
    href: '/learn/mysteries',
    color: 'from-purple-800 to-indigo-800',
    topics: ['Lost Civilizations', 'Undeciphered Scripts', 'Unsolved Builds', 'Legendary Places']
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
          Explore the rich history, advanced medicine, fascinating mythology, and cultural achievements of 20+ ancient civilizations
        </p>
      </motion.div>

      {/* Civilization Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {[
          'Egyptian', 'Nubian', 'Phoenician', 'Babylonian', 'Israelite', 'Hittite', 
          'Greek', 'Persian', 'Indian', 'Chinese', 'Maya', 'Inca', 'Roman', 
          'Carthaginian', 'Minoan', 'Mycenaean', 'Etruscan'
        ].map((civ, i) => (
          <span key={civ} className="px-3 py-1 bg-gold/10 rounded-full text-xs text-gray-700">
            {civ}
          </span>
        ))}
      </motion.div>

      {/* Learning Modules Grid - 14 modules now */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learnModules.map((module, index) => {
          const Icon = module.icon
          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.015 }}
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

      {/* Civilizations Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="egyptian-card"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue text-center mb-6 flex items-center justify-center gap-2">
          <Globe size={24} className="text-gold" />
          Civilizations Covered
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { name: 'Egyptian', region: 'Africa', period: '3100 BCE - 30 BCE' },
            { name: 'Nubian/Kushite', region: 'Africa', period: '2500 BCE - 350 CE' },
            { name: 'Phoenician', region: 'Mediterranean', period: '1500 BCE - 300 BCE' },
            { name: 'Babylonian', region: 'Mesopotamia', period: '1894 BCE - 539 BCE' },
            { name: 'Israelite', region: 'Levant', period: '1200 BCE - 70 CE' },
            { name: 'Hittite', region: 'Anatolia', period: '1600 BCE - 1178 BCE' },
            { name: 'Greek', region: 'Europe', period: '800 BCE - 146 BCE' },
            { name: 'Mycenaean', region: 'Europe', period: '1600 BCE - 1100 BCE' },
            { name: 'Minoan', region: 'Europe', period: '2700 BCE - 1450 BCE' },
            { name: 'Persian', region: 'Asia', period: '550 BCE - 651 CE' },
            { name: 'Indian', region: 'Asia', period: '3300 BCE - 500 CE' },
            { name: 'Chinese', region: 'Asia', period: '2070 BCE - 220 CE' },
            { name: 'Maya', region: 'Americas', period: '2000 BCE - 1500 CE' },
            { name: 'Inca', region: 'Americas', period: '1200 CE - 1572 CE' },
            { name: 'Roman', region: 'Europe', period: '753 BCE - 476 CE' },
            { name: 'Carthaginian', region: 'Africa', period: '814 BCE - 146 BCE' },
            { name: 'Etruscan', region: 'Europe', period: '900 BCE - 27 BCE' },
            { name: 'West African', region: 'Africa', period: '1500 BCE - 1600 CE' },
            { name: 'Nazca', region: 'Americas', period: '100 BCE - 800 CE' },
            { name: 'Olmec', region: 'Americas', period: '1200 BCE - 400 BCE' },
          ].map((civ, i) => (
            <motion.div
              key={civ.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.008 }}
              className="bg-white/30 rounded-lg p-2 text-center hover:bg-white/50 transition-colors"
            >
              <div className="font-semibold text-egyptian-blue text-sm">{civ.name}</div>
              <div className="text-xs text-gray-500">{civ.region}</div>
              <div className="text-[10px] text-gray-400">{civ.period}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Resources Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">📚</div>
          <h3 className="font-bold text-gold text-sm">Educational Resources</h3>
          <p className="text-xs text-gray-600 mt-1">Recommended books, documentaries, and online courses</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🗺️</div>
          <h3 className="font-bold text-gold text-sm">Interactive Map</h3>
          <p className="text-xs text-gray-600 mt-1">Explore 200+ ancient sites on our interactive map</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🎮</div>
          <h3 className="font-bold text-gold text-sm">Coming Soon: Games</h3>
          <p className="text-xs text-gray-600 mt-1">Test your knowledge with quizzes and challenges</p>
        </div>
      </motion.div>

      {/* Learning Path Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center text-xs text-gray-500 border-t border-gold/20 pt-6"
      >
        <span className="text-gold font-semibold">14 Learning Modules</span>
        <span className="mx-2">•</span>
        <span>20+ Civilizations</span>
        <span className="mx-2">•</span>
        <span>200+ Ancient Sites</span>
        <span className="mx-2">•</span>
        <span>5,000+ Years of History</span>
      </motion.div>
    </div>
  )
}