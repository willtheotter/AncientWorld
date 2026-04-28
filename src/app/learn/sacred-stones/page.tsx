'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gem, Sparkles, Heart, Shield, Eye, Star, Crown, 
  Sun as SunIcon, Moon, Droplet, Flame, Wind, Leaf, 
  Diamond, Coffee, Zap, Cloud, Snowflake, Anchor, 
  Compass, MapPin, Feather, Music, Flower, TreePine,
  Mountain, Waves, Battery, Target, Book, Cross,
  Circle, Square, Triangle
} from 'lucide-react'

const stones = [
  // Egyptian Stones (1-8)
  {
    name: 'Lapis Lazuli',
    civilization: 'Egyptian',
    meaning: 'Heavenly Stone, Truth, Royalty',
    color: 'Deep Blue with Gold Flecks',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    healing: 'Enhances spiritual vision, truth, and divine connection. Blue relieves anxiety.',
    uses: 'Buried with royalty, ground into pigment, carved into scarabs and amulets.',
    deity: 'Maat, Isis',
    symbol: 'Star-filled night sky, Royal status',
    icon: Star
  },
  {
    name: 'Turquoise',
    civilization: 'Egyptian',
    meaning: 'Life, Protection, Joy',
    color: 'Sky Blue to Green-Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    healing: 'Immune system, anti-inflammatory, protection from evil, brings good fortune.',
    uses: 'Temple offerings, jewelry, divine protection. Sacred to Hathor.',
    deity: 'Hathor, Maat',
    symbol: 'Sky, Life-giving waters',
    icon: Droplet
  },
  {
    name: 'Carnelian',
    civilization: 'Egyptian',
    meaning: 'Setting Sun, Blood of Isis, Fertility',
    color: 'Orange-Red to Red-Brown',
    chakra: 'Sacral',
    frequency: '417 Hz',
    healing: 'Female reproductive health, creativity, courage, war amulet.',
    uses: 'Necklaces, rings, protective amulets for the dead.',
    deity: 'Isis',
    symbol: 'Setting sun, Maternal Blood',
    icon: SunIcon
  },
  {
    name: 'Malachite',
    civilization: 'Egyptian',
    meaning: 'Transformation, Vision, Healing',
    color: 'Green with Dark Bands',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Healing of the soul, transformation, afterlife protection.',
    uses: 'Eye makeup (kohl), tomb paintings, protective amulets.',
    deity: 'Hathor',
    symbol: 'Transformation, Celebration, Music',
    icon: Sparkles
  },
  {
    name: 'Jasper (Red)',
    civilization: 'Egyptian',
    meaning: 'Blood of Isis, Mother\'s Protection',
    color: 'Deep Red',
    chakra: 'Root',
    frequency: '432 Hz',
    healing: 'Circulation, grounding, protection for pregnant women.',
    uses: 'Used in amulets for pregnancy, carved into heart-shaped stones.',
    deity: 'Isis, Bes',
    symbol: 'Maternal Protection, Life Force',
    icon: Heart
  },
  {
    name: 'Obsidian',
    civilization: 'Egyptian',
    meaning: 'Mirror of Truth, Shadow Work',
    color: 'Black with Iridescent Sheen',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Protection from negative energy, self-reflection.',
    uses: 'Ritual mirrors, ceremonial knives, tomb protection.',
    deity: 'Anubis',
    symbol: 'Underworld mirror, Truth',
    icon: Shield
  },
  {
    name: 'Amazonite',
    civilization: 'Egyptian',
    meaning: 'Courage, Truth, Fertility',
    color: 'Green-Blue with White Streaks',
    chakra: 'Throat, Heart',
    frequency: '528 Hz',
    healing: 'Balances emotions, truth, fertility.',
    uses: 'Fertility amulets, temple offerings.',
    deity: 'Hathor, Maat',
    symbol: 'Nile waters, Truth speaking',
    icon: Eye
  },
  {
    name: 'Peridot',
    civilization: 'Egyptian',
    meaning: 'Gem of the Sun, Light, Vitality',
    color: 'Olive Green to Yellow-Green',
    chakra: 'Solar Plexus, Heart',
    frequency: '417 Hz',
    healing: 'Vitality, protection from nightmares, success.',
    uses: 'Jewelry, temple offerings, amulets for protection.',
    deity: 'Ra',
    symbol: 'Sun, Vitality',
    icon: SunIcon
  },
  {
    name: 'Amethyst',
    civilization: 'Egyptian',
    meaning: 'Clarity, Protection, Sobriety',
    color: 'Purple to Violet',
    chakra: 'Third Eye, Crown',
    frequency: '639 Hz',
    healing: 'Calms the mind, protection, clarity in decision-making.',
    uses: 'Amulets, jewelry, burial gifts for pharaohs.',
    deity: 'Thoth',
    symbol: 'Wisdom, Clarity',
    icon: Star
  },
  {
    name: 'Quartz (Clear)',
    civilization: 'Egyptian',
    meaning: 'Eternal Light, Healing, Vision',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Healing, clarity, amplification of energy.',
    uses: 'Crystal balls, healing rituals, temple offerings.',
    deity: 'Ra',
    symbol: 'Light, Purity',
    icon: Sparkles
  },
  {
    name: 'Serpentine',
    civilization: 'Egyptian',
    meaning: 'Serpent Power, Rebirth, Protection',
    color: 'Green to Yellow-Green',
    chakra: 'Heart',
    frequency: '432 Hz',
    healing: 'Rebirth, protection, serpent energy awakening.',
    uses: 'Amulets, scarabs, tomb offerings.',
    deity: 'Wadjet',
    symbol: 'Serpent, Protection',
    icon: Shield
  },
  {
    name: 'Feldspar',
    civilization: 'Egyptian',
    meaning: 'Moon Magic, Fertility, Growth',
    color: 'Cream to Pink',
    chakra: 'Sacral',
    frequency: '528 Hz',
    healing: 'Fertility, growth, moon magic.',
    uses: 'Amulets for fertility, jewelry.',
    deity: 'Isis, Hathor',
    symbol: 'Moon, Fertility',
    icon: Moon
  },
  {
    name: 'Calcite (Green)',
    civilization: 'Egyptian',
    meaning: 'Heart Opening, Healing, Growth',
    color: 'Pale Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Heart healing, emotional growth, compassion.',
    uses: 'Heart scarabs, amulets, tomb offerings.',
    deity: 'Hathor',
    symbol: 'Heart, Compassion',
    icon: Heart
  },
  {
    name: 'Breccia',
    civilization: 'Egyptian',
    meaning: 'Unity, Strength, Diversity',
    color: 'Multi-colored fragments',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Unity, strength through diversity, grounding.',
    uses: 'Vessels, amulets, architectural elements.',
    deity: 'Geb',
    symbol: 'Unity, Earth',
    icon: Circle
  },
  {
    name: 'Alabaster',
    civilization: 'Egyptian',
    meaning: 'Purity, Divine Light, Offerings',
    color: 'White to Cream',
    chakra: 'Crown',
    frequency: '639 Hz',
    healing: 'Purity, spiritual connection, divine light.',
    uses: 'Canopic jars, offering tables, vessels.',
    deity: 'Anubis',
    symbol: 'Purity, Offerings',
    icon: Crown
  },

  // Greek Stones (9-18) - Expanded to 10
  {
    name: 'Amethyst (Greek)',
    civilization: 'Greek',
    meaning: 'Sobriety, Clarity, Protection',
    color: 'Purple to Violet',
    chakra: 'Third Eye, Crown',
    frequency: '639 Hz',
    healing: 'Prevents drunkenness, calms the mind, clarity in decision-making.',
    uses: 'Wine goblets, signet rings, carved intaglios.',
    deity: 'Dionysus, Athena',
    symbol: 'Sobriety, Wisdom',
    icon: Star
  },
  {
    name: 'Hematite',
    civilization: 'Greek',
    meaning: 'Grounding, Courage, Bloodstone',
    color: 'Metallic Black-Grey',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Grounding, courage in battle, blood-related healing.',
    uses: 'Armor polish, amulets for soldiers, medical powder.',
    deity: 'Ares, Athena',
    symbol: 'Warrior\'s stone, Blood',
    icon: Shield
  },
  {
    name: 'Garnet',
    civilization: 'Greek',
    meaning: 'Light in Darkness, Persistence',
    color: 'Deep Red to Orange-Red',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    healing: 'Strength, protection, guides the lost, helps overcome challenges.',
    uses: 'Jewelry, intaglios, carved cameos.',
    deity: 'Hades, Persephone',
    symbol: 'Light in darkness, Perseverance',
    icon: Flame
  },
  {
    name: 'Rock Crystal',
    civilization: 'Greek',
    meaning: 'Eternal Ice, Healing, Vision',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Healing, clarity, amplification of energy.',
    uses: 'Crystal balls for divination, healing rituals.',
    deity: 'Apollo, Asclepius',
    symbol: 'Ice, Purity, Healing',
    icon: Sparkles
  },
  {
    name: 'Pearl',
    civilization: 'Greek',
    meaning: 'Love, Purity, Marriage',
    color: 'White to Pink',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Love, purity, marital harmony.',
    uses: 'Wedding jewelry, offerings to Aphrodite.',
    deity: 'Aphrodite',
    symbol: 'Love, Purity',
    icon: Circle
  },
  {
    name: 'Onyx',
    civilization: 'Greek',
    meaning: 'Strength, Self-Control, Protection',
    color: 'Black with White Bands',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Protection, self-mastery, overcoming grief.',
    uses: 'Cameos, intaglios, protective amulets.',
    deity: 'Artemis',
    symbol: 'Strength, Self-mastery',
    icon: Shield
  },
  {
    name: 'Agate',
    civilization: 'Greek',
    meaning: 'Protection, Health, Harvest',
    color: 'Banded White, Grey, Blue',
    chakra: 'Root',
    frequency: '417 Hz',
    healing: 'Protection from storms, good health.',
    uses: 'Amulets, carved vessels, jewelry.',
    deity: 'Demeter',
    symbol: 'Harvest, Protection',
    icon: Leaf
  },
  {
    name: 'Jasper',
    civilization: 'Greek',
    meaning: 'Courage, Strength, Endurance',
    color: 'Red, Green, Yellow',
    chakra: 'Root',
    frequency: '432 Hz',
    healing: 'Courage, endurance, protection.',
    uses: 'Seals, amulets, intaglios.',
    deity: 'Hercules',
    symbol: 'Courage, Strength',
    icon: Target
  },
  {
    name: 'Sapphire',
    civilization: 'Greek',
    meaning: 'Wisdom, Divine Favor, Apollo',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    healing: 'Wisdom, divine connection, prophecy.',
    uses: 'Oracle offerings, priestess jewelry.',
    deity: 'Apollo',
    symbol: 'Wisdom, Prophecy',
    icon: Star
  },
  {
    name: 'Emerald',
    civilization: 'Greek',
    meaning: 'Venus Stone, Love, Beauty',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Love, beauty, emotional healing.',
    uses: 'Jewelry for Aphrodite priestesses.',
    deity: 'Aphrodite',
    symbol: 'Love, Beauty',
    icon: Heart
  },

  // Roman Stones (19-24) - Expanded to 6
  {
    name: 'Diamond',
    civilization: 'Roman',
    meaning: 'Invincibility, Love, Strength',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Protection, strength, unbreakable love.',
    uses: 'Royal jewelry, signet rings, bridal gifts.',
    deity: 'Jupiter, Venus',
    symbol: 'Invincibility, Eternal Bond',
    icon: Diamond
  },
  {
    name: 'Agate (Roman)',
    civilization: 'Roman',
    meaning: 'Protection, Health, Harvest',
    color: 'Banded White, Grey, Blue, Brown',
    chakra: 'Root',
    frequency: '417 Hz',
    healing: 'Protection from storms, good health, agricultural fertility.',
    uses: 'Amulets, cameos, carved vessels.',
    deity: 'Ceres, Neptune',
    symbol: 'Harvest, Sea',
    icon: Cloud
  },
  {
    name: 'Onyx (Roman)',
    civilization: 'Roman',
    meaning: 'Strength, Self-Control, Protection',
    color: 'Black with White Bands',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Protection, self-mastery, overcoming grief.',
    uses: 'Cameos, intaglios, protective amulets.',
    deity: 'Mars, Venus',
    symbol: 'Strength, Self-mastery',
    icon: Shield
  },
  {
    name: 'Carnelian (Roman)',
    civilization: 'Roman',
    meaning: 'Courage, Action, Leadership',
    color: 'Orange-Red',
    chakra: 'Sacral',
    frequency: '417 Hz',
    healing: 'Courage, action, leadership.',
    uses: 'Signet rings, seals, intaglios.',
    deity: 'Mars',
    symbol: 'Courage, Action',
    icon: Flame
  },
  {
    name: 'Lapis Lazuli (Roman)',
    civilization: 'Roman',
    meaning: 'Truth, Royalty, Jupiter',
    color: 'Deep Blue with Gold',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    healing: 'Truth, divine connection, royal favor.',
    uses: 'Jewelry, inlays, amulets.',
    deity: 'Jupiter',
    symbol: 'Truth, Royalty',
    icon: Star
  },
  {
    name: 'Emerald (Roman)',
    civilization: 'Roman',
    meaning: 'Venus Stone, Love, Fertility',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Love, fertility, prosperity.',
    uses: 'Jewelry, offerings to Venus.',
    deity: 'Venus',
    symbol: 'Love, Fertility',
    icon: Leaf
  },

  // Indian Stones (25-32) - Expanded to 8
  {
    name: 'Ruby',
    civilization: 'Indian',
    meaning: 'Sun Stone, Royalty, Passion',
    color: 'Red to Pinkish-Red',
    chakra: 'Root, Heart',
    frequency: '417 Hz',
    healing: 'Heart health, courage, success in battle.',
    uses: 'Royal regalia, temple offerings, astrological amulets.',
    deity: 'Surya, Vishnu',
    symbol: 'Sun, Royal power',
    icon: SunIcon
  },
  {
    name: 'Emerald (Indian)',
    civilization: 'Indian',
    meaning: 'Wisdom, Memory, Healing',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Eye health, memory enhancement, emotional balance.',
    uses: 'Ayurvedic medicine, astrological jewelry, temple inlays.',
    deity: 'Budha, Vishnu',
    symbol: 'Wisdom, Intelligence',
    icon: Leaf
  },
  {
    name: 'Blue Sapphire',
    civilization: 'Indian',
    meaning: 'Saturn Stone, Discipline, Protection',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    healing: 'Protection from evil, focus, discipline, longevity.',
    uses: 'Amulets, astrological rings, temple offerings.',
    deity: 'Shani, Krishna',
    symbol: 'Saturn, Protection',
    icon: Shield
  },
  {
    name: 'Yellow Sapphire',
    civilization: 'Indian',
    meaning: 'Jupiter Stone, Wisdom, Fortune',
    color: 'Yellow to Golden',
    chakra: 'Solar Plexus',
    frequency: '528 Hz',
    healing: 'Wisdom, prosperity, marital happiness.',
    uses: 'Astrological jewelry, temple offerings.',
    deity: 'Brihaspati',
    symbol: 'Fortune, Wisdom',
    icon: Star
  },
  {
    name: 'Diamond (Indian)',
    civilization: 'Indian',
    meaning: 'Venus Stone, Beauty, Love',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Beauty, love, prosperity.',
    uses: 'Royal jewelry, bridal ornaments.',
    deity: 'Venus (Shukra)',
    symbol: 'Love, Beauty',
    icon: Diamond
  },
  {
    name: 'Pearl (Indian)',
    civilization: 'Indian',
    meaning: 'Moon Stone, Peace, Emotion',
    color: 'White to Pink',
    chakra: 'Heart',
    frequency: '639 Hz',
    healing: 'Emotional balance, peace, fertility.',
    uses: 'Royal jewelry, offerings to Chandra.',
    deity: 'Chandra',
    symbol: 'Moon, Peace',
    icon: Moon
  },
  {
    name: 'Red Coral',
    civilization: 'Indian',
    meaning: 'Mars Stone, Courage, Energy',
    color: 'Red to Pink',
    chakra: 'Root',
    frequency: '417 Hz',
    healing: 'Courage, energy, vitality.',
    uses: 'Astrological amulets, jewelry.',
    deity: 'Mangala',
    symbol: 'Courage, Energy',
    icon: Flame
  },
  {
    name: 'Hessonite Garnet',
    civilization: 'Indian',
    meaning: 'Rahu Stone, Protection, Karma',
    color: 'Cinnamon to Honey',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Protection, karma clearing, grounding.',
    uses: 'Astrological rings, amulets.',
    deity: 'Rahu',
    symbol: 'Protection, Karma',
    icon: Shield
  },

  // Chinese Stones (33-40) - Expanded to 8
  {
    name: 'Jade (Nephrite)',
    civilization: 'Chinese',
    meaning: 'Imperial Stone, Virtue, Eternity',
    color: 'Green to White',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Longevity, kidney health, protection of the dead.',
    uses: 'Burial suits, ritual objects, bi discs, cong tubes.',
    deity: 'Yu Huang (Jade Emperor)',
    symbol: 'Heaven, Earth, Eternity',
    icon: Crown
  },
  {
    name: 'Jadeite',
    civilization: 'Chinese',
    meaning: 'Imperial Fortune, Grace, Prosperity',
    color: 'Emerald Green, Lavender, White',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Prosperity, grace, protection, longevity.',
    uses: 'Imperial regalia, jewelry, carvings.',
    deity: 'Guan Yu, Guan Yin',
    symbol: 'Fortune, Compassion',
    icon: Star
  },
  {
    name: 'Pearl (Chinese)',
    civilization: 'Chinese',
    meaning: 'Moon Stone, Purity, Wisdom',
    color: 'White to Pink',
    chakra: 'Crown',
    frequency: '639 Hz',
    healing: 'Heart health, peace, wisdom, fertility.',
    uses: 'Royal jewelry, medicine, burial ornaments.',
    deity: 'Guanyin, Moon Goddess',
    symbol: 'Moon, Purity',
    icon: Moon
  },
  {
    name: 'Cinnabar',
    civilization: 'Chinese',
    meaning: 'Life Force, Protection, Prosperity',
    color: 'Red to Vermilion',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    healing: 'Life force, blood circulation, protection from evil.',
    uses: 'Carved objects, seals, lacquerware, amulets.',
    deity: 'Caishen',
    symbol: 'Life Force, Wealth',
    icon: Flame
  },
  {
    name: 'Quartz (Rose)',
    civilization: 'Chinese',
    meaning: 'Love Stone, Harmony, Peace',
    color: 'Pink',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Love, emotional healing, peace.',
    uses: 'Jewelry, carvings, feng shui.',
    deity: 'Guan Yin',
    symbol: 'Love, Peace',
    icon: Heart
  },
  {
    name: 'Turquoise (Chinese)',
    civilization: 'Chinese',
    meaning: 'Heaven Stone, Protection, Luck',
    color: 'Blue to Green',
    chakra: 'Throat',
    frequency: '528 Hz',
    healing: 'Protection, good luck, health.',
    uses: 'Jewelry, belt hooks, sword fittings.',
    deity: 'Xi Wangmu',
    symbol: 'Heaven, Luck',
    icon: Eye
  },
  {
    name: 'Agate (Chinese)',
    civilization: 'Chinese',
    meaning: 'Prosperity, Longevity, Protection',
    color: 'Banded',
    chakra: 'Root',
    frequency: '417 Hz',
    healing: 'Prosperity, longevity, protection.',
    uses: 'Seals, snuff bottles, carvings.',
    deity: 'Shou Xing',
    symbol: 'Longevity',
    icon: Circle
  },
  {
    name: 'Crystal (Smoky)',
    civilization: 'Chinese',
    meaning: 'Grounding, Protection, Ancestors',
    color: 'Brown to Black',
    chakra: 'Root',
    frequency: '396 Hz',
    healing: 'Grounding, protection, ancestor connection.',
    uses: 'Funerary objects, amulets.',
    deity: 'Ancestors',
    symbol: 'Earth, Ancestors',
    icon: Mountain
  },

  // Japanese Stones (41-44) - Expanded to 4
  {
    name: 'Amber',
    civilization: 'Japanese',
    meaning: 'Sun Stone, Health, Longevity',
    color: 'Yellow to Brown',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    healing: 'Health, longevity, protection from evil.',
    uses: 'Jewelry, carved netsuke, amulets.',
    deity: 'Amaterasu',
    symbol: 'Sun, Health',
    icon: SunIcon
  },
  {
    name: 'Coral',
    civilization: 'Japanese',
    meaning: 'Sea Stone, Protection, Fertility',
    color: 'Red to Pink',
    chakra: 'Root, Sacral',
    frequency: '432 Hz',
    healing: 'Protection at sea, fertility, blood purification.',
    uses: 'Jewelry, combs, hairpins, amulets for sailors.',
    deity: 'Ryujin',
    symbol: 'Sea, Protection',
    icon: Waves
  },
  {
    name: 'Jade (Japanese)',
    civilization: 'Japanese',
    meaning: 'Purity, Status, Eternity',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Purity, health, longevity.',
    uses: 'Magatama beads, jewelry, ritual objects.',
    deity: 'Amaterasu',
    symbol: 'Purity, Eternity',
    icon: Leaf
  },
  {
    name: 'Quartz (Japanese)',
    civilization: 'Japanese',
    meaning: 'Purity, Clarity, Healing',
    color: 'Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Purity, clarity, spiritual healing.',
    uses: 'Shinto rituals, amulets, crystal balls.',
    deity: 'Tenjin',
    symbol: 'Purity, Clarity',
    icon: Sparkles
  },

  // Mesoamerican Stones (45-48) - Expanded to 4
  {
    name: 'Jadeite (Maya)',
    civilization: 'Mesoamerican',
    meaning: 'Green Gold, Life, Power',
    color: 'Emerald Green, Blue-Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Life force, power, connection to gods.',
    uses: 'Masks, jewelry, ritual offerings, burial goods.',
    deity: 'Quetzalcoatl, Tlaloc',
    symbol: 'Water, Maize, Life',
    icon: Leaf
  },
  {
    name: 'Obsidian (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Smoking Mirror, Divination, Sacrifice',
    color: 'Black with Silver Sheen',
    chakra: 'Root, Third Eye',
    frequency: '396 Hz',
    healing: 'Divination, protection, reflection of truth.',
    uses: 'Ritual mirrors, sacrificial knives, sharp tools.',
    deity: 'Tezcatlipoca',
    symbol: 'Divination, Darkness, Magic',
    icon: Flame
  },
  {
    name: 'Turquoise (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Sky Stone, Protection, Rain',
    color: 'Sky Blue to Green-Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    healing: 'Protection for warriors, connection to gods, rain bringing.',
    uses: 'Mosaics, masks, jewelry, ritual offerings.',
    deity: 'Tlaloc, Quetzalcoatl',
    symbol: 'Sky, Rain, Life',
    icon: Droplet
  },
  {
    name: 'Pyrite',
    civilization: 'Mesoamerican',
    meaning: 'Mirror of the Gods, Divination',
    color: 'Brassy Yellow',
    chakra: 'Solar Plexus',
    frequency: '432 Hz',
    healing: 'Divination, protection, attracting wealth.',
    uses: 'Ritual mirrors, mosaics, jewelry.',
    deity: 'Tezcatlipoca',
    symbol: 'Mirror, Divination',
    icon: Star
  },

  // Persian Stones (49-51) - Expanded to 3
  {
    name: 'Turquoise (Persian)',
    civilization: 'Persian',
    meaning: 'Victory, Protection, Royalty',
    color: 'Sky Blue to Robin\'s Egg Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    healing: 'Protection, victory in battle, royal favor.',
    uses: 'Royal regalia, jewelry, domes of palaces.',
    deity: 'Ahura Mazda',
    symbol: 'Victory, Sky',
    icon: Crown
  },
  {
    name: 'Agate (Persian)',
    civilization: 'Persian',
    meaning: 'Gem of the Magi, Protection',
    color: 'Banded Red, White, Blue',
    chakra: 'Root',
    frequency: '417 Hz',
    healing: 'Protection from storms, good health, eloquence.',
    uses: 'Seals, signet rings, amulets.',
    deity: 'Mithra',
    symbol: 'Protection, Eloquence',
    icon: Shield
  },
  {
    name: 'Lapis Lazuli (Persian)',
    civilization: 'Persian',
    meaning: 'Royal Stone, Truth, Divine Favor',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    healing: 'Truth, divine connection, royal favor.',
    uses: 'Royal jewelry, inlays, seals.',
    deity: 'Ahura Mazda',
    symbol: 'Truth, Royalty',
    icon: Star
  },

  // Celtic Stones (52-55) - Expanded to 4
  {
    name: 'Moonstone',
    civilization: 'Celtic',
    meaning: 'Dream Stone, Intuition, Fertility',
    color: 'White to Blue-White with Adularescence',
    chakra: 'Third Eye, Crown',
    frequency: '639 Hz',
    healing: 'Intuition, dreams, fertility, love.',
    uses: 'Jewelry, amulets for travelers.',
    deity: 'Cernunnos, Brigid',
    symbol: 'Moon, Dreams',
    icon: Moon
  },
  {
    name: 'Bloodstone',
    civilization: 'Celtic',
    meaning: 'Warrior\'s Stone, Courage, Strength',
    color: 'Dark Green with Red Spots',
    chakra: 'Root, Heart',
    frequency: '417 Hz',
    healing: 'Courage, strength, blood purification.',
    uses: 'Amulets for warriors, carved seals.',
    deity: 'The Morrigan, Lugh',
    symbol: 'Courage, Blood',
    icon: Target
  },
  {
    name: 'Quartz (Clear Celtic)',
    civilization: 'Celtic',
    meaning: 'Star Stone, Divination, Healing',
    color: 'Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    healing: 'Divination, healing, spiritual sight.',
    uses: 'Crystal balls, healing ceremonies.',
    deity: 'Druids',
    symbol: 'Stars, Sight',
    icon: Star
  },
  {
    name: 'Amber (Celtic)',
    civilization: 'Celtic',
    meaning: 'Sun Stone, Life, Ancestors',
    color: 'Golden',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    healing: 'Life force, ancestor connection, protection.',
    uses: 'Amulets, burial offerings, jewelry.',
    deity: 'Ancestors',
    symbol: 'Sun, Ancestors',
    icon: SunIcon
  }
]

const civilizations = ['All', 'Egyptian', 'Greek', 'Roman', 'Indian', 'Chinese', 'Japanese', 'Mesoamerican', 'Persian', 'Celtic']

export default function CrystalsStonesPage() {
  const [selectedStone, setSelectedStone] = useState(stones[0])
  const [selectedCivilization, setSelectedCivilization] = useState('All')

  const filteredStones = selectedCivilization === 'All' 
    ? stones 
    : stones.filter(stone => stone.civilization === selectedCivilization)

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Gem size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Treasures</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Crystals & Sacred Stones</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover 55 sacred stones from 9 ancient civilizations
        </p>
        <div className="flex justify-center gap-2 mt-2">
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Egyptian: 15</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Greek: 10</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Roman: 6</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Indian: 8</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Chinese: 8</span>
        </div>
      </motion.div>

      {/* Civilization Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {civilizations.map((civ) => (
          <button
            key={civ}
            onClick={() => setSelectedCivilization(civ)}
            className={`px-3 py-1.5 rounded-full text-xs transition-all ${
              selectedCivilization === civ
                ? 'bg-gold text-gray-900 font-semibold shadow-md'
                : 'bg-white/50 hover:bg-white/80 text-gray-700'
            }`}
          >
            {civ}
          </button>
        ))}
      </div>

      {/* Sacred Stones Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Gem size={24} />
          Sacred Stones Across Civilizations ({filteredStones.length} stones)
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-6">
          {filteredStones.map((stone) => {
            const IconComponent = stone.icon
            return (
              <button
                key={stone.name}
                onClick={() => setSelectedStone(stone)}
                className={`p-2 rounded-lg transition-all ${
                  selectedStone.name === stone.name
                    ? 'bg-gold text-gray-900 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              >
                <div className="text-center">
                  <IconComponent size={20} className="mx-auto mb-1" />
                  <div className="font-semibold text-xs">{stone.name}</div>
                  <div className="text-[10px] opacity-75">{stone.civilization}</div>
                </div>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStone.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="egyptian-card bg-gradient-to-br from-cyan-50 to-blue-50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <selectedStone.icon size={28} className="text-gold" />
                  <h3 className="text-2xl font-bold text-gold">{selectedStone.name}</h3>
                  <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">{selectedStone.civilization}</span>
                </div>
                <p className="text-gray-600 mb-3">{selectedStone.meaning}</p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold">Color:</span> {selectedStone.color}</div>
                  <div><span className="font-semibold">Chakra:</span> {selectedStone.chakra}</div>
                  <div><span className="font-semibold">Frequency:</span> {selectedStone.frequency}</div>
                  <div><span className="font-semibold">Deity:</span> {selectedStone.deity}</div>
                  <div><span className="font-semibold">Symbol:</span> {selectedStone.symbol}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-egyptian-blue mb-2">Healing Properties</h4>
                <p className="text-gray-700 text-sm mb-3">{selectedStone.healing}</p>
                <h4 className="font-semibold text-egyptian-blue mb-2">Ancient Uses</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{selectedStone.uses}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stone Count by Civilization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gold/10 rounded-lg p-6 border border-gold/30"
      >
        <h3 className="text-xl font-bold text-gold mb-3 text-center">55 Stones by Civilization</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center text-sm">
          <div><span className="font-semibold text-egyptian-blue">Egyptian</span><p className="text-xs text-gray-600">15 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Greek</span><p className="text-xs text-gray-600">10 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Roman</span><p className="text-xs text-gray-600">6 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Indian</span><p className="text-xs text-gray-600">8 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Chinese</span><p className="text-xs text-gray-600">8 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Japanese</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Mesoamerican</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Persian</span><p className="text-xs text-gray-600">3 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Celtic</span><p className="text-xs text-gray-600">4 stones</p></div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">Total: 55 sacred stones from 9 civilizations</p>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic text-sm">
          💡 <span className="font-semibold">Did you know?</span> The Egyptians believed lapis lazuli could send dreams to the gods, 
          the Greeks thought amethyst prevented drunkenness, the Maya considered jadeite more valuable than gold, 
          and Celtic druids used crystals for divination and healing ceremonies!
        </p>
      </motion.div>
    </div>
  )
}