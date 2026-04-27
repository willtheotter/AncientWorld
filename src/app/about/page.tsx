'use client'

import { motion } from 'framer-motion'
import { Globe, MapPin, BookOpen, Scale, Gem, Scroll, Users, Award, Compass, Heart, Shield, Star, Building2, Pyramid, Landmark, Crown, Feather, Music, Waves } from 'lucide-react'
import { ImageIcon } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Globe size={28} />
          <span className="text-sm uppercase tracking-wider">About</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Ancient World Explorer</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An interactive journey through 200+ legendary sites across 20+ ancient civilizations
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="egyptian-card text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star size={24} className="text-gold" />
          <h2 className="text-2xl font-bold text-egyptian-blue">Our Mission</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Ancient World Explorer brings history to life through interactive maps, dual-image site views (AI regenerated + current state), 
          educational content, and detailed cultural information. Our goal is to make the rich heritage of ancient civilizations 
          accessible, engaging, and meaningful for learners of all ages.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: 'Civilizations', value: '20+', icon: <Globe size={20} />, color: 'from-amber-600 to-orange-600' },
          { label: 'Historical Sites', value: '200+', icon: <MapPin size={20} />, color: 'from-emerald-600 to-teal-600' },
          { label: 'Deities Represented', value: '60+', icon: <Star size={20} />, color: 'from-purple-600 to-pink-600' },
          { label: 'Years of History', value: '5,000+', icon: <Landmark size={20} />, color: 'from-blue-600 to-cyan-600' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            className={`egyptian-card text-center bg-gradient-to-r ${stat.color}/10`}
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue text-center mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Interactive Map',
              description: 'Explore 200+ archaeological sites across 20+ ancient civilizations with our immersive map interface. Click markers to discover detailed information.',
              icon: <MapPin size={28} />,
              color: 'from-amber-600 to-orange-600'
            },
            {
              title: 'Dual-Image View',
              description: 'Toggle between AI-regenerated images showing original glory and current state photographs of archaeological remains.',
              icon: <ImageIcon size={28} />,
              color: 'from-cyan-600 to-blue-600'
            },
            {
              title: 'Civilization Explorer',
              description: 'Discover Egyptian, Nubian, Phoenician, Babylonian, Israelite, Hittite, Greek, Persian, Indian, Chinese, Maya, Inca, and more.',
              icon: <Crown size={28} />,
              color: 'from-emerald-600 to-teal-600'
            },
            {
              title: 'Deity Filter System',
              description: 'Filter map markers by specific deities to find temples and sacred sites dedicated to each god or goddess.',
              icon: <Star size={28} />,
              color: 'from-purple-600 to-pink-600'
            },
            {
              title: 'Mythology Encyclopedia',
              description: 'Discover 60+ gods and goddesses from Egyptian, Greek, Mesopotamian, Indian, Chinese, Maya, and Inca traditions.',
              icon: <BookOpen size={28} />,
              color: 'from-blue-600 to-cyan-600'
            },
            {
              title: 'Educational Content',
              description: 'Access detailed historical descriptions, visual highlights, and cultural context for every site.',
              icon: <Scroll size={28} />,
              color: 'from-indigo-600 to-blue-600'
            }
          ].map((feature, index) => {
            const Icon = feature.icon.type
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className={`egyptian-card hover:scale-105 transition-all duration-300 bg-gradient-to-br ${feature.color}/5`}
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-egyptian-blue mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Civilizations Section - Expanded to 20+ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="egyptian-card"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue text-center mb-6 flex items-center justify-center gap-2">
          <Compass size={24} className="text-gold" />
          Civilizations Explored
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Egyptian', icon: 'PYR', color: 'from-amber-600 to-orange-600', sites: 45, region: 'Africa' },
            { name: 'Nubian/Kushite', icon: 'MNT', color: 'from-emerald-600 to-teal-600', sites: 13, region: 'Africa' },
            { name: 'Punt/Aksumite', icon: 'TRD', color: 'from-blue-600 to-cyan-600', sites: 10, region: 'Africa' },
            { name: 'Phoenician', icon: 'SHP', color: 'from-purple-600 to-pink-600', sites: 10, region: 'Mediterranean' },
            { name: 'Babylonian', icon: 'GTE', color: 'from-yellow-600 to-amber-600', sites: 10, region: 'Mesopotamia' },
            { name: 'Israelite', icon: 'TMP', color: 'from-indigo-600 to-blue-600', sites: 10, region: 'Levant' },
            { name: 'Hittite', icon: 'WLL', color: 'from-red-600 to-orange-600', sites: 10, region: 'Anatolia' },
            { name: 'Greek', icon: 'PRT', color: 'from-cyan-600 to-blue-600', sites: 20, region: 'Europe' },
            { name: 'Mycenaean', icon: 'SWD', color: 'from-amber-700 to-brown-600', sites: 10, region: 'Europe' },
            { name: 'Minoan', icon: 'BUL', color: 'from-teal-600 to-green-600', sites: 10, region: 'Europe' },
            { name: 'Persian', icon: 'LIO', color: 'from-purple-700 to-indigo-700', sites: 10, region: 'Asia' },
            { name: 'Etruscan', icon: 'URN', color: 'from-orange-700 to-red-700', sites: 10, region: 'Europe' },
            { name: 'Indian', icon: 'REL', color: 'from-saffron-600 to-orange-600', sites: 10, region: 'Asia' },
            { name: 'Chinese', icon: 'DGN', color: 'from-red-700 to-gold-600', sites: 10, region: 'Asia' },
            { name: 'Maya', icon: 'PYR', color: 'from-jade-600 to-green-600', sites: 5, region: 'Americas' },
            { name: 'Inca', icon: 'SUN', color: 'from-terracotta-600 to-orange-600', sites: 3, region: 'Americas' },
            { name: 'Ancient North America', icon: 'CLF', color: 'from-desert-600 to-sand-600', sites: 2, region: 'Americas' },
            { name: 'West Africa', icon: 'MSC', color: 'from-orange-600 to-yellow-600', sites: 10, region: 'Africa' },
            { name: 'North Africa', icon: 'DSR', color: 'from-amber-700 to-brown-600', sites: 10, region: 'Africa' },
            { name: 'Southern Africa', icon: 'STN', color: 'from-green-600 to-emerald-600', sites: 10, region: 'Africa' },
          ].map((civ, index) => (
            <motion.div
              key={civ.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.01 }}
              className={`bg-gradient-to-r ${civ.color} rounded-lg p-2 text-center text-white shadow-md`}
            >
              <div className="text-lg mb-1">{civ.icon}</div>
              <div className="font-semibold text-[11px] truncate">{civ.name}</div>
              <div className="text-[10px] opacity-90">{civ.sites} sites</div>
              <div className="text-[9px] opacity-70">{civ.region}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Key Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75 }}
        className="grid md:grid-cols-3 gap-4"
      >
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🎨</div>
          <h3 className="font-bold text-gold mb-1">AI Regenerated Images</h3>
          <p className="text-xs text-gray-600">See how sites appeared in their original glory</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">📸</div>
          <h3 className="font-bold text-gold mb-1">Current State Photos</h3>
          <p className="text-xs text-gray-600">View archaeological remains as they exist today</p>
        </div>
        <div className="egyptian-card text-center">
          <div className="text-3xl mb-2">🔍</div>
          <h3 className="font-bold text-gold mb-1">Deity Filtering</h3>
          <p className="text-xs text-gray-600">Find temples dedicated to specific gods</p>
        </div>
      </motion.div>

      {/* Footer / Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Shield size={20} className="text-gold" />
          <span className="font-semibold">Start Your Journey Today</span>
        </div>
        <p className="text-gray-600 text-sm">
          Explore the interactive map, toggle between ancient glory and modern remains, and discover 200+ legendary sites.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <a href="/" className="px-4 py-2 bg-gold text-gray-900 rounded-lg hover:bg-gold/80 transition-colors text-sm font-semibold">
            Explore Map
          </a>
          <a href="/learn" className="px-4 py-2 bg-egyptian-blue/20 text-egyptian-blue rounded-lg hover:bg-egyptian-blue/30 transition-colors text-sm font-semibold">
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  )
}