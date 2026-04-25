'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { words } from '@/lib/data/words'

export default function HangmanGame() {
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')
  const [currentWord, setCurrentWord] = useState('')
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')
  const [streak, setStreak] = useState(0)

  const maxWrongGuesses = 6

  useEffect(() => {
    selectNewWord()
  }, [difficulty])

  const selectNewWord = () => {
    const wordList = words[difficulty]
    const newWord = wordList[Math.floor(Math.random() * wordList.length)]
    setCurrentWord(newWord.toUpperCase())
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus('playing')
  }

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameStatus !== 'playing') return

    const newGuessed = [...guessedLetters, letter]
    setGuessedLetters(newGuessed)

    if (!currentWord.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1
      setWrongGuesses(newWrongGuesses)
      
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus('lost')
        setStreak(0)
      }
    } else {
      const allLettersGuessed = currentWord.split('').every(
        char => newGuessed.includes(char)
      )
      
      if (allLettersGuessed) {
        setGameStatus('won')
        setStreak(streak + 1)
      }
    }
  }

  const getDisplayWord = () => {
    return currentWord.split('').map(letter => 
      guessedLetters.includes(letter) ? letter : '_'
    ).join(' ')
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#d4af37] mb-2 drop-shadow-lg">Egyptian Hangman</h1>
        <p className="text-gray-100 drop-shadow-md">Save the Pharaoh from crumbling! Guess the hieroglyphic words.</p>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {(['easy', 'medium', 'hard'] as const).map(level => (
            <button
              key={level}
              onClick={() => setDifficulty(level)}
              className={`px-4 py-2 rounded-lg capitalize transition-all ${
                difficulty === level 
                  ? 'bg-[#d4af37] text-gray-900 font-bold shadow-lg' 
                  : 'bg-gray-700/50 hover:bg-gray-600/50 text-white backdrop-blur-sm'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        <div className="text-lg text-white drop-shadow-md">
          Streak: <span className="text-[#d4af37] font-bold text-2xl">{streak}</span>
        </div>
      </div>

      <div className="egyptian-card backdrop-blur-md">
        <div className="text-center">
          {/* Enhanced Hangman figure with Egyptian styling */}
          <div className="mb-8 font-mono text-2xl text-[#d4af37] whitespace-pre">
            {wrongGuesses === 0 && '   ☀️\n   \n   \n   \n   \n   '}
            {wrongGuesses === 1 && '   𓂀\n   |\n   \n   \n   \n   '}
            {wrongGuesses === 2 && '   𓂀\n   |\n   |\n   \n   \n   '}
            {wrongGuesses === 3 && '   𓂀\n  /|\n   |\n   \n   \n   '}
            {wrongGuesses === 4 && '   𓂀\n  /|\\\n   |\n   \n   \n   '}
            {wrongGuesses === 5 && '   𓂀\n  /|\\\n   |\n  / \n   \n   '}
            {wrongGuesses === 6 && '   𓂀\n  /|\\\n   |\n  / \\\n /   \\\n/     \\'}
          </div>
          
          <div className="text-3xl md:text-4xl font-mono tracking-wider mb-8 text-gray-800">
            {getDisplayWord()}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
              <button
                key={letter}
                onClick={() => handleGuess(letter)}
                disabled={guessedLetters.includes(letter) || gameStatus !== 'playing'}
                className={`
                  w-12 h-12 rounded-lg font-bold text-lg transition-all
                  ${guessedLetters.includes(letter) 
                    ? 'bg-gray-500/50 cursor-not-allowed text-gray-400' 
                    : 'bg-[#d4af37]/80 hover:bg-[#d4af37] hover:scale-105 text-gray-900 shadow-lg'
                  }
                `}
              >
                {letter}
              </button>
            ))}
          </div>
          
          <AnimatePresence>
            {gameStatus !== 'playing' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-4">
                  {gameStatus === 'won' ? '🎉 Victory! 🎉' : '💀 Defeat! 💀'}
                </h2>
                {gameStatus === 'lost' && (
                  <p className="mb-4 text-lg">The word was: <span className="text-[#d4af37] font-bold text-2xl">{currentWord}</span></p>
                )}
                <button
                  onClick={selectNewWord}
                  className="px-8 py-3 bg-[#d4af37] text-gray-900 rounded-lg hover:bg-[#d4af37]/80 transition-colors font-bold shadow-lg"
                >
                  Play Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}