'use client'

import GameCard from '@/components/games/GameCard'

const allGames = [
  {
    title: 'Hangman',
    description: 'Guess the hieroglyphic words before the Pharaoh statue crumbles!',
    iconName: 'Scroll',
    href: '/games/hangman',
    difficulty: 'Easy - Hard',
    color: 'from-amber-600 to-orange-600',
  },
  {
    title: 'Trivia Challenge',
    description: 'Test your knowledge of Egyptian history, gods, and medicine.',
    iconName: 'Brain',
    href: '/games/trivia',
    difficulty: '3 Levels',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Sacred Match',
    description: 'Match Egyptian symbols, gods, and artifacts in this memory challenge.',
    iconName: 'Gem',
    href: '/games/sacred-match',
    difficulty: '3 Levels',
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Scales of Ma\'at',
    description: 'Balance good vs evil in this physics-based challenge.',
    iconName: 'Scale',
    href: '/games/scales',
    difficulty: 'Coming Soon',
    color: 'from-emerald-600 to-teal-600',
    comingSoon: true,
  },
  {
    title: 'Egyptian Hangman (External)',
    description: '15+ sounds, 1000+ words, 6 languages - Full experience!',
    iconName: 'ExternalLink',
    href: 'https://egyptianhangman.com/',
    difficulty: 'All Levels',
    color: 'from-red-600 to-orange-600',
    external: true,
  },
]

export default function GamesPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#d4af37] mb-4">Choose Your Challenge</h1>
        <p className="text-gray-600">Each game tests different skills and knowledge</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allGames.map((game) => (
          <GameCard key={game.title} {...game} />
        ))}
      </div>
    </div>
  )
}