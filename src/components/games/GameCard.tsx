'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scroll, Brain, Scale, LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Scroll: Scroll,
  Brain: Brain,
  Scale: Scale,
}

interface GameCardProps {
  title: string
  description: string
  iconName: string
  href: string
  difficulty: string
  color: string
  comingSoon?: boolean
}

export default function GameCard({
  title,
  description,
  iconName,
  href,
  difficulty,
  color,
  comingSoon = false,
}: GameCardProps) {
  const Icon = iconMap[iconName]
  
  if (!Icon) {
    console.error(`Icon "${iconName}" not found`)
    return null
  }

  if (comingSoon) {
    return (
      <div className="egyptian-card opacity-75 cursor-not-allowed relative overflow-hidden group backdrop-blur-md">
        <div className="absolute top-2 right-2 bg-[#d4af37]/20 px-2 py-1 rounded text-xs">
          Coming Soon
        </div>
        <div className="p-6 text-center">
          <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
            <Icon size={40} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <span className="text-sm text-gray-500">{difficulty}</span>
        </div>
      </div>
    )
  }

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="egyptian-card cursor-pointer relative overflow-hidden group backdrop-blur-md"
      >
        <div className="p-6 text-center">
          <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon size={40} className="text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <span className="text-sm text-[#d4af37] font-semibold">{difficulty}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
      </motion.div>
    </Link>
  )
}