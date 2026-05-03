'use client'

import { motion } from 'framer-motion'
import { 
  Globe, MapPin, BookOpen, Scale, Gem, Scroll, Users, Award, 
  Compass, Heart, Shield, Star, Building2, Pyramid, Landmark, 
  Crown, Feather, Music, Waves, Sparkles, Camera, Palette, 
  Filter, Map, Library, Sword, Coffee, Sun, Moon,
  Wind, Droplet, Mountain, Flower, Bird, Fish,
  Eye, Key, Lock, Zap, Cloud, Anchor, Trees,
  Brain, Circle, LayoutGrid, FileText, Image, Layers
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <div className="flex items-center justify-center gap-2 text-amber-600">
          <Globe size={28} />
          <span className="text-sm uppercase tracking-wider font-semibold">About</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
          Ancient World Explorer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          An interactive journey through 200+ legendary sites across 20+ ancient civilizations
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 text-center border border-amber-200 shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star size={24} className="text-amber-600" />
          <h2 className="text-2xl font-bold text-amber-800">Our Mission</h2>
        </div>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
          { label: 'Civilizations', value: '20+', icon: <Globe size={20} />, color: 'from-amber-600 to-orange-600', bg: 'bg-amber-50' },
          { label: 'Historical Sites', value: '200+', icon: <MapPin size={20} />, color: 'from-emerald-600 to-teal-600', bg: 'bg-emerald-50' },
          { label: 'Deities Represented', value: '60+', icon: <Star size={20} />, color: 'from-purple-600 to-pink-600', bg: 'bg-purple-50' },
          { label: 'Years of History', value: '5,000+', icon: <Landmark size={20} />, color: 'from-blue-600 to-cyan-600', bg: 'bg-blue-50' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05 }}
            className={`${stat.bg} rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200`}
          >
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2 text-white`}>
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-amber-700">{stat.value}</div>
            <div className="text-xs text-gray-600">{stat.label}</div>
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
        <h2 className="text-2xl font-bold text-amber-800 text-center mb-6">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Interactive Map',
              description: 'Explore 200+ archaeological sites across 20+ ancient civilizations with our immersive map interface. Click markers to discover detailed information.',
              icon: <Map size={28} />,
              color: 'from-amber-600 to-orange-600'
            },
            {
              title: 'Dual-Image View',
              description: 'Toggle between AI-regenerated images showing original glory and current state photographs of archaeological remains.',
              icon: <Image size={28} />,
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
              icon: <Filter size={28} />,
              color: 'from-purple-600 to-pink-600'
            },
            {
              title: 'Mythology Encyclopedia',
              description: 'Discover 60+ gods and goddesses from Egyptian, Greek, Mesopotamian, Indian, Chinese, Maya, and Inca traditions.',
              icon: <Library size={28} />,
              color: 'from-blue-600 to-cyan-600'
            },
            {
              title: 'Educational Content',
              description: 'Access detailed historical descriptions, visual highlights, and cultural context for every site.',
              icon: <FileText size={28} />,
              color: 'from-indigo-600 to-blue-600'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className={`bg-gradient-to-br ${feature.color}/5 rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-amber-200 hover:scale-105`}
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 text-white shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Civilizations Section - Expanded to 20+ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-br from-amber-50/50 to-orange-50/50 rounded-2xl p-6 border border-amber-200"
      >
        <h2 className="text-2xl font-bold text-amber-800 text-center mb-6 flex items-center justify-center gap-2">
          <Compass size={24} className="text-amber-600" />
          Civilizations Explored
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {[
            { name: 'Egyptian', icon: '𓂀', color: 'from-amber-600 to-orange-600', sites: 45, region: 'Africa' },
            { name: 'Nubian/Kushite', icon: '🗿', color: 'from-emerald-600 to-teal-600', sites: 13, region: 'Africa' },
            { name: 'Punt/Aksumite', icon: '🏝️', color: 'from-blue-600 to-cyan-600', sites: 10, region: 'Africa' },
            { name: 'Phoenician', icon: '⛵', color: 'from-purple-600 to-pink-600', sites: 10, region: 'Mediterranean' },
            { name: 'Babylonian', icon: '🏛️', color: 'from-yellow-600 to-amber-600', sites: 10, region: 'Mesopotamia' },
            { name: 'Israelite', icon: '🕍', color: 'from-indigo-600 to-blue-600', sites: 10, region: 'Levant' },
            { name: 'Hittite', icon: '⚔️', color: 'from-red-600 to-orange-600', sites: 10, region: 'Anatolia' },
            { name: 'Greek', icon: '🏺', color: 'from-cyan-600 to-blue-600', sites: 20, region: 'Europe' },
            { name: 'Mycenaean', icon: '🛡️', color: 'from-amber-700 to-brown-600', sites: 10, region: 'Europe' },
            { name: 'Minoan', icon: '🐂', color: 'from-teal-600 to-green-600', sites: 10, region: 'Europe' },
            { name: 'Persian', icon: '🦁', color: 'from-purple-700 to-indigo-700', sites: 10, region: 'Asia' },
            { name: 'Etruscan', icon: '🏺', color: 'from-orange-700 to-red-700', sites: 8, region: 'Europe' },
            { name: 'Indian', icon: '🕉️', color: 'from-orange-600 to-red-600', sites: 12, region: 'Asia' },
            { name: 'Chinese', icon: '🐉', color: 'from-red-700 to-amber-600', sites: 15, region: 'Asia' },
            { name: 'West African', icon: '🥁', color: 'from-orange-600 to-yellow-600', sites: 10, region: 'Africa' },
            { name: 'North African', icon: '🏜️', color: 'from-amber-700 to-brown-600', sites: 8, region: 'Africa' },
            { name: 'Southern African', icon: '🪨', color: 'from-green-600 to-emerald-600', sites: 7, region: 'Africa' },
            { name: 'Maya', icon: '🗿', color: 'from-green-700 to-teal-600', sites: 8, region: 'Americas' },
            { name: 'Inca', icon: '⛰️', color: 'from-terracotta-600 to-orange-600', sites: 6, region: 'Americas' },
            { name: 'Ancient Americas', icon: '🏺', color: 'from-amber-600 to-sand-600', sites: 5, region: 'Americas' },
          ].map((civ, index) => (
            <motion.div
              key={civ.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.008 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className={`bg-gradient-to-r ${civ.color} rounded-lg p-2 text-center text-white shadow-md cursor-pointer`}
              title={`${civ.name} civilization - ${civ.sites} sites in ${civ.region}`}
            >
              <div className="text-xl mb-0.5">{civ.icon}</div>
              <div className="font-semibold text-[11px] truncate">{civ.name}</div>
              <div className="text-[10px] opacity-90">{civ.sites} sites</div>
              <div className="text-[9px] opacity-70 truncate">{civ.region}</div>
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
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 text-center border border-purple-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-3 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <Palette size={28} className="text-white" />
            </div>
          </div>
          <h3 className="font-bold text-purple-700 mb-1">AI Regenerated Images</h3>
          <p className="text-xs text-gray-600">See how sites appeared in their original glory</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 text-center border border-blue-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-3 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
              <Camera size={28} className="text-white" />
            </div>
          </div>
          <h3 className="font-bold text-blue-700 mb-1">Current State Photos</h3>
          <p className="text-xs text-gray-600">View archaeological remains as they exist today</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-5 text-center border border-amber-200 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="text-4xl mb-3 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
              <Filter size={28} className="text-white" />
            </div>
          </div>
          <h3 className="font-bold text-amber-700 mb-1">Deity Filtering</h3>
          <p className="text-xs text-gray-600">Find temples dedicated to specific gods</p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center bg-gradient-to-r from-amber-600/10 to-orange-600/10 rounded-2xl p-8 border border-amber-300 shadow-lg"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Heart size={24} className="text-amber-600" />
          <span className="font-semibold text-amber-800 text-lg">Start Your Journey Today</span>
        </div>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          Explore the interactive map, toggle between ancient glory and modern remains, and discover 200+ legendary sites across 20+ ancient civilizations.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a 
            href="/" 
            className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold"
          >
            Explore Map
          </a>
          <a 
            href="/learn" 
            className="px-6 py-2.5 bg-white text-amber-700 rounded-lg border-2 border-amber-600 hover:bg-amber-50 transition-all duration-300 text-sm font-semibold"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  )
}