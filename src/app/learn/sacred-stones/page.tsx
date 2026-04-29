'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gem, Sparkles, Heart, Shield, Eye, Star, Crown, 
  Sun as SunIcon, Moon, Droplet, Flame, Wind, Leaf, 
  Diamond, Zap, Cloud, Waves, Target, Circle, Compass,
  Feather, Anchor, Infinity, Lock, Battery, Brain, Music, 
  Globe, Umbrella, Gift, ThumbsUp, Coffee, AlertCircle,
  Activity, Award, BookOpen, Camera, Cat, Command,
  Flower2, Footprints, Mountain, Rainbow, Infinity as InfinityIcon
} from 'lucide-react'

// ============ SECTION 1: A - C (27 stones) ============
const stones = [
  {
    name: 'Abalone Shell',
    civilization: 'Native American',
    meaning: 'Ocean Mother, Emotion, Protection',
    color: 'Iridescent White-Pink',
    chakra: 'Sacral',
    frequency: '432 Hz',
    deity: 'Ocean Spirits',
    symbol: 'Water, Moon, Motherhood',
    healing: 'Emotional healing, calms turbulent feelings, connects to ancestral waters.',
    ancientUses: 'Smudging bowls, ceremonial rattles, offerings to water spirits.',
    commonUses: 'Smudge bowl for sage burning, jewelry, meditation focus.',
    icon: Waves,
    isCrossCultural: false
  },
  {
    name: 'Aboriginal Ochre',
    civilization: 'Aboriginal',
    meaning: 'Earth Blood, Ancestors, Dreamtime',
    color: 'Red-Brown',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Ancestors, Rainbow Serpent',
    symbol: 'Earth, Blood, Ancestral Memory',
    healing: 'Grounding, ancestor connection, earth energy activation.',
    ancientUses: 'Body paint for ceremonies, cave paintings, burial rituals.',
    commonUses: 'Grounding rituals, art, ancestor meditation.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Agate',
    civilization: 'Greek/Roman/Persian',
    meaning: 'Protection, Health, Harvest',
    color: 'Banded White, Grey, Blue',
    chakra: 'Root',
    frequency: '417 Hz',
    deity: 'Demeter, Mithra',
    symbol: 'Harvest, Protection, Stability',
    healing: 'Protection from storms, good health, emotional stability.',
    ancientUses: 'Amulets, carved vessels, jewelry, seals.',
    commonUses: 'Worry stones, home protection, garden magic.',
    icon: Shield,
    isCrossCultural: true
  },
  {
    name: 'Agate (Japanese)',
    civilization: 'Japanese',
    meaning: 'Protection, Stability, Calm',
    color: 'Banded',
    chakra: 'Root',
    frequency: '417 Hz',
    deity: 'Inari',
    symbol: 'Protection, Calm',
    healing: 'Protection, emotional stability, calm.',
    ancientUses: 'Jewelry, carvings, amulets.',
    commonUses: 'Home decoration, meditation stones, pocket stones.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Alabaster',
    civilization: 'Egyptian',
    meaning: 'Purity, Divine Light, Offerings',
    color: 'White to Cream',
    chakra: 'Crown',
    frequency: '639 Hz',
    deity: 'Anubis',
    symbol: 'Purity, Offerings',
    healing: 'Purity, spiritual connection, divine light.',
    ancientUses: 'Canopic jars, offering tables, vessels.',
    commonUses: 'Sculpture, candle holders, sacred altar pieces.',
    icon: Crown,
    isCrossCultural: false
  },
  {
    name: 'Amazonite',
    civilization: 'Egyptian',
    meaning: 'Courage, Truth, Fertility',
    color: 'Green-Blue with White Streaks',
    chakra: 'Throat, Heart',
    frequency: '528 Hz',
    deity: 'Hathor, Maat',
    symbol: 'Nile waters, Truth speaking',
    healing: 'Balances emotions, truth, fertility.',
    ancientUses: 'Fertility amulets, temple offerings.',
    commonUses: 'Jewelry, communication aids, emotional balance.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Amber',
    civilization: 'Japanese/Celtic/Chinese',
    meaning: 'Sun Stone, Health, Longevity',
    color: 'Yellow to Brown',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Amaterasu, Ancestors, Sun Gods',
    symbol: 'Sun, Health, Ancestors',
    healing: 'Health, longevity, protection from evil.',
    ancientUses: 'Jewelry, carved netsuke, amulets, burial offerings.',
    commonUses: 'Teething necklaces, jewelry, energy cleansing.',
    icon: SunIcon,
    isCrossCultural: true
  },
  {
    name: 'Amber (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Sun Stone, Life, Ancestors',
    color: 'Golden',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Sun Gods',
    symbol: 'Sun, Life',
    healing: 'Life force, ancestor connection, protection.',
    ancientUses: 'Jewelry, offerings, burial goods.',
    commonUses: 'Jewelry, ancestor meditation, solar plexus healing.',
    icon: SunIcon,
    isCrossCultural: false
  },
  {
    name: 'Amethyst',
    civilization: 'Greek/Roman',
    meaning: 'Sobriety, Clarity, Protection',
    color: 'Purple to Violet',
    chakra: 'Third Eye, Crown',
    frequency: '639 Hz',
    deity: 'Dionysus, Athena, Bacchus',
    symbol: 'Sobriety, Wisdom',
    healing: 'Prevents drunkenness, calms the mind, clarity in decision-making.',
    ancientUses: 'Wine goblets, signet rings, carved intaglios.',
    commonUses: 'Meditation, sleep aid, home protection, jewelry.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Ametrine',
    civilization: 'Bolivian',
    meaning: 'Balance, Clarity, Meditation',
    color: 'Purple-Gold',
    chakra: 'Third Eye, Solar Plexus',
    frequency: '528 Hz',
    deity: 'Andean Spirits',
    symbol: 'Balance, Duality',
    healing: 'Balances mental and emotional bodies, enhances meditation.',
    ancientUses: 'Shamanic rituals, divination.',
    commonUses: 'Meditation, stress relief, chakra balancing.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Andalusite',
    civilization: 'Spanish',
    meaning: 'Vision, Strength, Alignment',
    color: 'Green-Brown-Red',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Earth Spirits',
    symbol: 'Vision, Strength',
    healing: 'Enhances vision, strengthens resolve, aligns energy.',
    ancientUses: 'Amulets for travelers, divination tools.',
    commonUses: 'Meditation, past life work, alignment practices.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Apatite',
    civilization: 'Global',
    meaning: 'Manifestation, Communication, Clarity',
    color: 'Blue-Green',
    chakra: 'Throat',
    frequency: '528 Hz',
    deity: 'Universal Spirit',
    symbol: 'Manifestation, Voice',
    healing: 'Enhances manifestation, clears communication blocks.',
    ancientUses: 'Mined for phosphorus, used in ritual pigments.',
    commonUses: 'Manifestation work, throat chakra healing, public speaking.',
    icon: Target,
    isCrossCultural: false
  },
  {
    name: 'Apophyllite',
    civilization: 'Indian',
    meaning: 'Spiritual Awakening, Light, Truth',
    color: 'Clear-White',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Hindu Spirits',
    symbol: 'Light, Truth, Awakening',
    healing: 'Spiritual awakening, connection to higher realms.',
    ancientUses: 'Meditation tools, temple offerings.',
    commonUses: 'Crown chakra healing, meditation, grid work.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Aquamarine',
    civilization: 'Roman/Greek',
    meaning: 'Courage, Calm, Sea Protection',
    color: 'Pale Blue to Green-Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    deity: 'Neptune, Poseidon',
    symbol: 'Sea, Courage, Calm',
    healing: 'Courage, calm, protection at sea.',
    ancientUses: 'Sailor amulets, intaglios, jewelry.',
    commonUses: 'Throat chakra healing, stress relief, travel protection.',
    icon: Droplet,
    isCrossCultural: false
  },
  {
    name: 'Aragonite',
    civilization: 'Moroccan',
    meaning: 'Grounding, Stability, Truth',
    color: 'Brown-White',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Earth Mother',
    symbol: 'Grounding, Truth',
    healing: 'Grounding, stability, earth connection.',
    ancientUses: 'Grounding rituals, earth altars.',
    commonUses: 'Grounding meditation, home stability, crystal grids.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Aventurine',
    civilization: 'Chinese',
    meaning: 'Luck, Prosperity, Abundance',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Caishen',
    symbol: 'Luck, Abundance',
    healing: 'Prosperity, luck, emotional calm.',
    ancientUses: 'Jewelry, carvings, feng shui.',
    commonUses: 'Prosperity grids, heart healing, luck talismans.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Azurite',
    civilization: 'Egyptian',
    meaning: 'Divine Vision, Intuition, Truth',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Thoth, Isis',
    symbol: 'Divine Vision, Truth',
    healing: 'Enhances intuition, divine vision, truth seeking.',
    ancientUses: 'Paint pigment, eye makeup, temple offerings.',
    commonUses: 'Third eye meditation, intuition development, vision quests.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Bloodstone',
    civilization: 'Celtic/Greek',
    meaning: 'Warrior\'s Stone, Courage, Strength',
    color: 'Dark Green with Red Spots',
    chakra: 'Root, Heart',
    frequency: '417 Hz',
    deity: 'The Morrigan, Lugh, Ares',
    symbol: 'Courage, Blood',
    healing: 'Courage, strength, blood purification.',
    ancientUses: 'Amulets for warriors, carved seals.',
    commonUses: 'Courage rituals, blood health, athletic performance.',
    icon: Target,
    isCrossCultural: false
  },
  {
    name: 'Blue Calcite',
    civilization: 'Celtic',
    meaning: 'Peace, Dreaming, Druid Magic',
    color: 'Pale Blue',
    chakra: 'Throat',
    frequency: '639 Hz',
    deity: 'Druids',
    symbol: 'Peace, Dreams',
    healing: 'Peace, dream recall, emotional calm.',
    ancientUses: 'Dream pillows, druid rituals.',
    commonUses: 'Dream work, anxiety relief, throat chakra.',
    icon: Moon,
    isCrossCultural: false
  },
  {
    name: 'Blue Lace Agate',
    civilization: 'Greek',
    meaning: 'Calm, Communication, Peace',
    color: 'Pale Blue with Lace',
    chakra: 'Throat',
    frequency: '639 Hz',
    deity: 'Athena',
    symbol: 'Calm, Communication',
    healing: 'Calms nerves, enhances gentle communication.',
    ancientUses: 'Jewelry, amulets for orators.',
    commonUses: 'Public speaking, anxiety relief, throat chakra.',
    icon: Waves,
    isCrossCultural: false
  },
  {
    name: 'Blue Sapphire',
    civilization: 'Indian',
    meaning: 'Saturn Stone, Discipline, Protection',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Shani, Krishna',
    symbol: 'Saturn, Protection',
    healing: 'Protection from evil, focus, discipline, longevity.',
    ancientUses: 'Amulets, astrological rings, temple offerings.',
    commonUses: 'Astrological jewelry, discipline aid, protection.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Calcite (Green)',
    civilization: 'Roman',
    meaning: 'Growth, Healing, Abundance',
    color: 'Pale Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Venus',
    symbol: 'Growth, Abundance',
    healing: 'Growth, healing, abundance attraction.',
    ancientUses: 'Garden amulets, fertility rituals.',
    commonUses: 'Heart healing, abundance grids, plant magic.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Carnelian',
    civilization: 'Egyptian/Persian/Roman/Celtic',
    meaning: 'Setting Sun, Vitality, Power',
    color: 'Orange-Red to Red-Brown',
    chakra: 'Sacral',
    frequency: '417 Hz',
    deity: 'Isis, Mithra, Mars, Brigid',
    symbol: 'Sun, Vitality, Maternal Blood',
    healing: 'Female reproductive health, creativity, courage, vitality.',
    ancientUses: 'Necklaces, rings, seals, protective amulets, temple offerings.',
    commonUses: 'Creativity blocks, fertility support, courage rituals.',
    icon: SunIcon,
    isCrossCultural: true
  },
  {
    name: 'Cat\'s Eye',
    civilization: 'Indian',
    meaning: 'Ketu Stone, Protection, Spirituality',
    color: 'Honey with Light Band',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Ketu',
    symbol: 'Protection, Spirituality',
    healing: 'Spiritual protection, intuition, clarity.',
    ancientUses: 'Astrological amulets, rings.',
    commonUses: 'Spiritual protection, intuition enhancer.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Celestite',
    civilization: 'Greek',
    meaning: 'Divine Communication, Peace',
    color: 'Pale Blue',
    chakra: 'Throat, Crown',
    frequency: '639 Hz',
    deity: 'Angels, Celestial Beings',
    symbol: 'Divine Communication, Peace',
    healing: 'Divine communication, peace, angelic connection.',
    ancientUses: 'Temple offerings, divination tools.',
    commonUses: 'Angel work, peaceful sleep, divine guidance.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Chalcedony',
    civilization: 'Greek/Roman',
    meaning: 'Nurturing, Protection, Calm',
    color: 'Blue-White',
    chakra: 'Throat',
    frequency: '639 Hz',
    deity: 'Goddess of Peace',
    symbol: 'Nurturing, Calm',
    healing: 'Nurturing, protection, emotional calm.',
    ancientUses: 'Seals, amulets, carved vessels.',
    commonUses: 'Nurturing self-care, throat chakra, calmness.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Charoite',
    civilization: 'Russian',
    meaning: 'Transformation, Courage, Spirit',
    color: 'Purple with Swirls',
    chakra: 'Third Eye, Crown',
    frequency: '432 Hz',
    deity: 'Siberian Spirits',
    symbol: 'Transformation, Courage',
    healing: 'Transformation, courage, spiritual awakening.',
    ancientUses: 'Shamanic rituals, spiritual tools.',
    commonUses: 'Transformation work, fear release, spiritual growth.',
    icon: Zap,
    isCrossCultural: false
  },
  {
    name: 'Chrysocolla',
    civilization: 'Egyptian',
    meaning: 'Wisdom, Calm, Communication',
    color: 'Blue-Green',
    chakra: 'Throat',
    frequency: '528 Hz',
    deity: 'Isis, Hathor',
    symbol: 'Wisdom, Calm',
    healing: 'Wisdom, calm, clear communication.',
    ancientUses: 'Temple offerings, jewelry, pigment.',
    commonUses: 'Communication, wisdom teachings, throat healing.',
    icon: Gem,
    isCrossCultural: false
  },
  {
    name: 'Chrysoprase',
    civilization: 'Greek',
    meaning: 'Joy, Abundance, Healing',
    color: 'Apple Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Aphrodite',
    symbol: 'Joy, Abundance',
    healing: 'Joy, abundance, emotional healing.',
    ancientUses: 'Jewelry, amulets, temple offerings.',
    commonUses: 'Heart healing, joy manifestation, depression aid.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Cinnabar',
    civilization: 'Chinese/Mesoamerican',
    meaning: 'Life Force, Protection, Prosperity',
    color: 'Red to Vermilion',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    deity: 'Caishen, Quetzalcoatl',
    symbol: 'Life Force, Wealth',
    healing: 'Life force, blood circulation, protection from evil.',
    ancientUses: 'Carved objects, seals, lacquerware, amulets.',
    commonUses: 'Prosperity grids, life force activation (use with care - toxic).',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Citrine',
    civilization: 'Roman',
    meaning: 'Abundance, Joy, Solar Power',
    color: 'Yellow to Golden',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Jupiter, Sol',
    symbol: 'Sun, Abundance',
    healing: 'Abundance, joy, personal power.',
    ancientUses: 'Jewelry, intaglios, royal adornment.',
    commonUses: 'Wealth manifestation, solar plexus healing, joy work.',
    icon: SunIcon,
    isCrossCultural: false
  },
  {
    name: 'Clear Quartz',
    civilization: 'Greek/Roman/Celtic/Chinese/Japanese',
    meaning: 'Eternal Ice, Healing, Vision',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Apollo, Asclepius, Druids, Tenjin',
    symbol: 'Ice, Purity, Healing, Stars',
    healing: 'Healing, clarity, amplification of energy.',
    ancientUses: 'Crystal balls for divination, healing rituals, Shinto rituals.',
    commonUses: 'Master healer, energy amplification, programming.',
    icon: Sparkles,
    isCrossCultural: true
  },
  {
    name: 'Coral (Japanese)',
    civilization: 'Japanese',
    meaning: 'Sea Stone, Protection, Fertility',
    color: 'Red to Pink',
    chakra: 'Root, Sacral',
    frequency: '432 Hz',
    deity: 'Ryujin',
    symbol: 'Sea, Protection',
    healing: 'Protection at sea, fertility, blood purification.',
    ancientUses: 'Jewelry, combs, hairpins, amulets for sailors.',
    commonUses: 'Sea protection, fertility support, root chakra.',
    icon: Waves,
    isCrossCultural: false
  },
  {
    name: 'Coral (Red - Indian)',
    civilization: 'Indian',
    meaning: 'Mars Stone, Courage, Vitality',
    color: 'Red to Pink',
    chakra: 'Root',
    frequency: '417 Hz',
    deity: 'Mangala',
    symbol: 'Courage, Vitality',
    healing: 'Courage, energy, vitality.',
    ancientUses: 'Astrological amulets, jewelry.',
    commonUses: 'Courage rituals, vitality boosts, astrological wear.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Crystal (Japanese)',
    civilization: 'Japanese',
    meaning: 'Purity, Clarity, Healing',
    color: 'Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Tenjin',
    symbol: 'Purity, Clarity',
    healing: 'Purity, clarity, spiritual healing.',
    ancientUses: 'Shinto rituals, amulets, crystal balls.',
    commonUses: 'Spiritual healing, clarity rituals, crown chakra.',
    icon: Sparkles,
    isCrossCultural: false
  }
]

// ============ SECTION 2: D - G (15 stones) ============
const stonesDToG = [
  {
    name: 'Danburite',
    civilization: 'Mexican',
    meaning: 'Divine Love, Angelic Connection',
    color: 'Clear to Pale Pink',
    chakra: 'Crown, Heart',
    frequency: '963 Hz',
    deity: 'Angelic Realms',
    symbol: 'Divine Love, Light',
    healing: 'Connects to angelic realms, opens heart to divine love, high vibration cleansing.',
    ancientUses: 'Discovered in 1839, used in Mexican spiritual ceremonies.',
    commonUses: 'Angel communication, crown chakra activation, high-vibration meditation.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Diamond',
    civilization: 'Roman/Indian',
    meaning: 'Invincibility, Love, Strength',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Jupiter, Venus, Indra',
    symbol: 'Invincibility, Eternal Bond',
    healing: 'Protection, strength, unbreakable love, amplifies energy.',
    ancientUses: 'Royal jewelry, signet rings, bridal gifts, astrological amulets.',
    commonUses: 'Engagement rings, wealth manifestation, crown chakra, energy amplification.',
    icon: Diamond,
    isCrossCultural: true
  },
  {
    name: 'Dumortierite',
    civilization: 'French',
    meaning: 'Mental Clarity, Patience, Order',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Wisdom Keepers',
    symbol: 'Clarity, Order',
    healing: 'Enhances mental clarity, patience, organizational skills.',
    ancientUses: 'Discovered in 1881, used in French spiritual practices.',
    commonUses: 'ADHD support, study aid, mental organization, third eye activation.',
    icon: Brain,
    isCrossCultural: false
  },
  {
    name: 'Emerald',
    civilization: 'Greek/Indian/Persian/Roman',
    meaning: 'Love, Wisdom, Beauty, Memory',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Aphrodite, Venus, Vishnu, Budha',
    symbol: 'Love, Beauty, Wisdom',
    healing: 'Love, beauty, emotional healing, memory enhancement, eye health.',
    ancientUses: 'Jewelry for Aphrodite priestesses, astrological jewelry, temple inlays, Ayurvedic medicine.',
    commonUses: 'Heart chakra healing, love attraction, memory aid, luxury jewelry.',
    icon: Heart,
    isCrossCultural: true
  },
  {
    name: 'Epidote',
    civilization: 'Global',
    meaning: 'Manifestation, Growth, Release',
    color: 'Green-Black',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Earth Spirits',
    symbol: 'Manifestation, Release',
    healing: 'Releases blockages, manifests desires, accelerates personal growth.',
    ancientUses: 'Used in European and African spiritual practices.',
    commonUses: 'Manifestation work, releasing limiting beliefs, growth acceleration.',
    icon: Target,
    isCrossCultural: false
  },
  {
    name: 'Fire Agate',
    civilization: 'Aztec/Mesoamerican',
    meaning: 'Protection, Courage, Fire Energy',
    color: 'Brown with Iridescent Fire',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    deity: 'Xiuhtecuhtli (Fire God)',
    symbol: 'Fire, Protection',
    healing: 'Protection, courage, ignites inner fire, creativity.',
    ancientUses: 'Aztec warrior amulets, ceremonial objects.',
    commonUses: 'Creativity blocks, courage rituals, sacral chakra activation.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Fire Opal',
    civilization: 'Mexican',
    meaning: 'Passion, Creativity, Transformation',
    color: 'Orange-Red',
    chakra: 'Sacral',
    frequency: '417 Hz',
    deity: 'Aztec Fire Gods',
    symbol: 'Passion, Transformation',
    healing: 'Ignites passion, enhances creativity, supports transformation.',
    ancientUses: 'Aztec and Mayan ceremonial stones, offerings to fire gods.',
    commonUses: 'Creative work, passion revival, sacral chakra healing.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Fluorite (Green)',
    civilization: 'Egyptian',
    meaning: 'Healing, Focus, Growth',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Thoth',
    symbol: 'Healing, Focus',
    healing: 'Physical healing, mental focus, emotional growth.',
    ancientUses: 'Carved into scarabs, used in Egyptian healing temples.',
    commonUses: 'Study aid, focus enhancement, heart healing.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Fluorite (Purple)',
    civilization: 'Roman',
    meaning: 'Intuition, Protection, Focus',
    color: 'Purple',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Minerva',
    symbol: 'Intuition, Protection',
    healing: 'Enhances intuition, protects from mental manipulation, improves focus.',
    ancientUses: 'Roman wine goblets (carved), amulets.',
    commonUses: 'Third eye activation, protection from negative thoughts, study sessions.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Garnet',
    civilization: 'Greek',
    meaning: 'Light in Darkness, Persistence',
    color: 'Deep Red to Orange-Red',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    deity: 'Hades, Persephone',
    symbol: 'Light in darkness, Perseverance',
    healing: 'Strength, protection, guides the lost, helps overcome challenges.',
    ancientUses: 'Jewelry, intaglios, carved cameos, guide for the underworld.',
    commonUses: 'Root chakra grounding, persistence rituals, protection during travel.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Goldstone',
    civilization: 'Italian (Man-made)',
    meaning: 'Ambition, Energy, Motivation',
    color: 'Copper-Brown Sparkling',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Vulcan',
    symbol: 'Ambition, Fire',
    healing: 'Boosts ambition, energy, motivation, success attraction.',
    ancientUses: 'Venetian glassmakers created in 17th century for alchemy.',
    commonUses: 'Success grids, motivation boost, solar plexus activation.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Gomed',
    civilization: 'Indian',
    meaning: 'Rahu\'s Stone, Protection, Karma',
    color: 'Honey-Brown',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Rahu',
    symbol: 'Protection, Karma',
    healing: 'Neutralizes negative karma, protection, grounds excess energy.',
    ancientUses: 'Astrological amulets, Vedic rituals.',
    commonUses: 'Astrological jewelry (Rahu), karma clearing, grounding.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Green Jasper',
    civilization: 'Celtic',
    meaning: 'Earth Stone, Healing, Rain',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Dagda',
    symbol: 'Earth, Healing',
    healing: 'Earth connection, healing, rain magic, fertility of land.',
    ancientUses: 'Jewelry, amulets, ritual objects for earth ceremonies.',
    commonUses: 'Earth connection, heart healing, nature magic, gardening.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Green Tourmaline',
    civilization: 'Brazilian',
    meaning: 'Heart Healing, Courage, Growth',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Earth Mothers',
    symbol: 'Growth, Courage',
    healing: 'Heart healing, courage, emotional growth, physical vitality.',
    ancientUses: 'Brazilian indigenous healing ceremonies, shamanic tools.',
    commonUses: 'Heart chakra healing, emotional release, plant growth (in gardens).',
    icon: Leaf,
    isCrossCultural: false
  }
]

// ============ SECTION 3: H - L (18 stones) ============
const stonesHtoL = [
  {
    name: 'Hematite',
    civilization: 'Greek/Persian/Mesoamerican',
    meaning: 'Grounding, Courage, Bloodstone',
    color: 'Metallic Black-Grey',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Ares, Athena, Ahura Mazda, Tezcatlipoca',
    symbol: 'Warrior\'s stone, Blood, Truth, Reflection',
    healing: 'Grounding, courage in battle, blood-related healing, mirror of truth.',
    ancientUses: 'Armor polish, amulets for soldiers, medical powder, polished mirrors, seals.',
    commonUses: 'Grounding meditation, EMF protection, blood circulation support, rooting energy.',
    icon: Shield,
    isCrossCultural: true
  },
  {
    name: 'Hemimorphite',
    civilization: 'Global',
    meaning: 'Emotional Healing, Joy, Connection',
    color: 'Blue-White',
    chakra: 'Throat, Heart',
    frequency: '528 Hz',
    deity: 'Healing Spirits',
    symbol: 'Joy, Connection',
    healing: 'Emotional healing, joy restoration, connection to higher self.',
    ancientUses: 'Mined historically for zinc, used in folk healing.',
    commonUses: 'Emotional release, joy manifestation, throat-heart connection.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Hessonite Garnet',
    civilization: 'Indian',
    meaning: 'Rahu Stone, Protection, Karma',
    color: 'Cinnamon to Honey',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Rahu',
    symbol: 'Protection, Karma',
    healing: 'Protection, karma clearing, grounding, elevates consciousness.',
    ancientUses: 'Astrological rings, amulets for Rahu-related issues.',
    commonUses: 'Astrological jewelry, karma clearing, root chakra grounding.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Howlite',
    civilization: 'Global',
    meaning: 'Calm, Patience, Awareness',
    color: 'White with Grey Veins',
    chakra: 'Crown, Third Eye',
    frequency: '639 Hz',
    deity: 'Peace Keepers',
    symbol: 'Calm, Awareness',
    healing: 'Calms overactive mind, patience, spiritual awareness, sleep aid.',
    ancientUses: 'Discovered in 1868, used in calming rituals.',
    commonUses: 'Anxiety relief, sleep aid, patience cultivation, crown chakra.',
    icon: Brain,
    isCrossCultural: false
  },
  {
    name: 'Iolite',
    civilization: 'Viking/Norse',
    meaning: 'Vision, Navigation, Inner Sight',
    color: 'Violet-Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Odin, Freyja',
    symbol: 'Vision, Navigation',
    healing: 'Enhances inner vision, navigation (physical and spiritual), intuition.',
    ancientUses: 'Viking sunstones for navigation at sea, shamanic vision quests.',
    commonUses: 'Third eye activation, spiritual navigation, intuition development.',
    icon: Compass,
    isCrossCultural: false
  },
  {
    name: 'Jade (Japanese)',
    civilization: 'Japanese',
    meaning: 'Purity, Status, Eternity',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Amaterasu',
    symbol: 'Purity, Eternity',
    healing: 'Purity, health, longevity, status elevation.',
    ancientUses: 'Magatama beads, jewelry, ritual objects, burial goods.',
    commonUses: 'Heart healing, purity rituals, longevity practices, jewelry.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Jade (Nephrite)',
    civilization: 'Chinese',
    meaning: 'Imperial Stone, Virtue, Eternity',
    color: 'Green to White',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Yu Huang (Jade Emperor)',
    symbol: 'Heaven, Earth, Eternity',
    healing: 'Longevity, kidney health, protection of the dead, virtue cultivation.',
    ancientUses: 'Burial suits, ritual objects, bi discs, cong tubes, imperial regalia.',
    commonUses: 'Heart healing, longevity practices, feng shui, ancestor connection.',
    icon: Crown,
    isCrossCultural: true
  },
  {
    name: 'Jadeite',
    civilization: 'Chinese/Maya',
    meaning: 'Imperial Fortune, Life, Power',
    color: 'Emerald Green, Lavender, White',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Guan Yu, Guan Yin, Quetzalcoatl, Tlaloc',
    symbol: 'Fortune, Compassion, Water, Life',
    healing: 'Prosperity, grace, protection, longevity, life force.',
    ancientUses: 'Masks, jewelry, ritual offerings, burial goods, imperial regalia.',
    commonUses: 'Prosperity grids, heart healing, luxury jewelry, feng shui.',
    icon: Star,
    isCrossCultural: true
  },
  {
    name: 'Jasper (Greek)',
    civilization: 'Greek',
    meaning: 'Nurturing, Protection, Strength',
    color: 'Multicolored',
    chakra: 'Root',
    frequency: '417 Hz',
    deity: 'Demeter, Gaia',
    symbol: 'Nurturing, Strength',
    healing: 'Nurturing, protection, physical strength, earth connection.',
    ancientUses: 'Amulets for farmers, carved intaglios, protective talismans.',
    commonUses: 'Grounding, protection, earth connection, strength rituals.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Jasper (Red - Egyptian)',
    civilization: 'Egyptian',
    meaning: 'Blood of Isis, Mother\'s Protection',
    color: 'Deep Red',
    chakra: 'Root',
    frequency: '432 Hz',
    deity: 'Isis, Bes',
    symbol: 'Maternal Protection, Life Force',
    healing: 'Circulation, grounding, protection for pregnant women, maternal bonding.',
    ancientUses: 'Used in amulets for pregnancy, carved into heart-shaped stones.',
    commonUses: 'Pregnancy support, maternal connection, root chakra, grounding.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Jasper (Roman)',
    civilization: 'Roman',
    meaning: 'Protection, Grounding',
    color: 'Red, Green, Brown',
    chakra: 'Root',
    frequency: '417 Hz',
    deity: 'Mars, Terra',
    symbol: 'Protection, Earth',
    healing: 'Protection, grounding, physical strength, courage.',
    ancientUses: 'Soldier amulets, seal stones, carved cameos.',
    commonUses: 'Grounding meditation, protection grids, earth connection.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Kambaba Jasper',
    civilization: 'African',
    meaning: 'Peace, Serenity, Connection',
    color: 'Dark Green with Black Circles',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Earth Spirits',
    symbol: 'Peace, Connection',
    healing: 'Peace, serenity, connection to nature, emotional calm.',
    ancientUses: 'African tribal rituals, fertility ceremonies.',
    commonUses: 'Nature connection, emotional calming, heart chakra healing.',
    icon: Circle,
    isCrossCultural: false
  },
  {
    name: 'Kyanite',
    civilization: 'Tibetan',
    meaning: 'Alignment, Meditation, Truth',
    color: 'Blue',
    chakra: 'Third Eye',
    frequency: '639 Hz',
    deity: 'Buddhist Deities',
    symbol: 'Alignment, Truth',
    healing: 'Aligns all chakras, deep meditation, truth speaking, no negative energy retention.',
    ancientUses: 'Tibetan meditation tools, temple offerings.',
    commonUses: 'Chakra alignment, meditation aid, truth enhancement, never needs cleansing.',
    icon: InfinityIcon,
    isCrossCultural: false
  },
  {
    name: 'Labradorite',
    civilization: 'Inuit/Celtic',
    meaning: 'Magic, Transformation, Protection',
    color: 'Grey with Blue-Green Flash',
    chakra: 'Third Eye, Throat',
    frequency: '432 Hz',
    deity: 'Northern Lights Spirits, Druids',
    symbol: 'Magic, Transformation',
    healing: 'Enhances magic, supports transformation, protects aura, raises consciousness.',
    ancientUses: 'Inuit believed it was frozen northern lights, Celtic druid tools.',
    commonUses: 'Magic work, transformation support, aura protection, creativity.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Lapis Lazuli',
    civilization: 'Egyptian/Roman/Chinese/Japanese/Persian',
    meaning: 'Heavenly Stone, Truth, Royalty',
    color: 'Deep Blue with Gold Flecks',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Maat, Isis, Jupiter, Yu Huang, Amaterasu, Ahura Mazda',
    symbol: 'Star-filled night sky, Royal status, Truth, Heaven',
    healing: 'Enhances spiritual vision, truth, divine connection. Blue relieves anxiety.',
    ancientUses: 'Buried with royalty, ground into pigment, carved into scarabs and amulets, temple offerings.',
    commonUses: 'Third eye activation, truth speaking, royal energy, anxiety relief.',
    icon: Star,
    isCrossCultural: true
  },
  {
    name: 'Larimar',
    civilization: 'Caribbean',
    meaning: 'Ocean Calm, Peace, Communication',
    color: 'Pale Blue-White',
    chakra: 'Throat, Heart',
    frequency: '528 Hz',
    deity: 'Ocean Spirits, Taino Deities',
    symbol: 'Ocean, Peace',
    healing: 'Ocean calm, peace, clear communication, emotional release.',
    ancientUses: 'Discovered in 1916, used by Taino people in Caribbean.',
    commonUses: 'Throat chakra healing, peace cultivation, emotional release, stress relief.',
    icon: Droplet,
    isCrossCultural: false
  },
  {
    name: 'Lehsunia',
    civilization: 'Indian',
    meaning: 'Ketu\'s Stone, Protection, Spirit',
    color: 'Green-Yellow',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Ketu',
    symbol: 'Protection, Spirituality',
    healing: 'Spiritual protection, intuition, past life recall, spirituality enhancement.',
    ancientUses: 'Astrological amulets for Ketu, Vedic rituals.',
    commonUses: 'Astrological jewelry, spiritual protection, past life work.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Lemurian Quartz',
    civilization: 'Lemurian (Mythical)',
    meaning: 'Ancient Wisdom, Connection, Healing',
    color: 'Clear with Ridges',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Lemurian Elders',
    symbol: 'Ancient Wisdom, Connection',
    healing: 'Accesses ancient wisdom, connects to Lemurian consciousness, high vibration healing.',
    ancientUses: 'Legendary crystal grids in Lemuria, healing temples.',
    commonUses: 'Past life recall, meditation, high-vibration grids, ancient wisdom access.',
    icon: BookOpen,
    isCrossCultural: false
  }
]

// ============ SECTION 4: M - R (26 stones) ============
const stonesMtoR = [
  {
    name: 'Malachite',
    civilization: 'Egyptian/Chinese',
    meaning: 'Transformation, Vision, Healing',
    color: 'Green with Dark Bands',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Hathor, Guan Yin',
    symbol: 'Transformation, Celebration, Music, Growth',
    healing: 'Healing of the soul, transformation, afterlife protection, emotional balance.',
    ancientUses: 'Eye makeup (kohl), tomb paintings, protective amulets, temple offerings.',
    commonUses: 'Transformation work, heart healing, protection, emotional release.',
    icon: Sparkles,
    isCrossCultural: true
  },
  {
    name: 'Mookaite',
    civilization: 'Australian Aboriginal',
    meaning: 'Grounding, Vitality, Strength',
    color: 'Red, Yellow, Purple',
    chakra: 'Root, Sacral',
    frequency: '417 Hz',
    deity: 'Aboriginal Ancestors',
    symbol: 'Earth, Vitality',
    healing: 'Grounding, vitality, strength, connection to Australian earth.',
    ancientUses: 'Aboriginal ceremonial stones, traded among tribes.',
    commonUses: 'Grounding meditation, vitality boost, ancestral connection.',
    icon: Mountain,
    isCrossCultural: false
  },
  {
    name: 'Moonstone',
    civilization: 'Roman/Celtic/Indian',
    meaning: 'Moon Magic, Intuition, Fertility',
    color: 'White with Blue Sheen',
    chakra: 'Third Eye, Crown',
    frequency: '639 Hz',
    deity: 'Diana, Luna, Cernunnos, Brigid, Chandra',
    symbol: 'Moon, Dreams, Peace',
    healing: 'Intuition, dreams, fertility, love, emotional balance.',
    ancientUses: 'Jewelry, amulets for travelers, offerings to moon deities.',
    commonUses: 'Moon rituals, intuition development, fertility support, dream work.',
    icon: Moon,
    isCrossCultural: true
  },
  {
    name: 'Morganite',
    civilization: 'Global',
    meaning: 'Divine Love, Compassion, Healing',
    color: 'Pale Pink',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Angel of Love',
    symbol: 'Divine Love, Compassion',
    healing: 'Divine love, compassion, emotional healing, attracts soulmate love.',
    ancientUses: 'Discovered in 1910, used in love rituals.',
    commonUses: 'Heart chakra healing, attracting love, compassion cultivation.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Nephrite Jade',
    civilization: 'Chinese',
    meaning: 'Imperial Stone, Virtue, Eternity',
    color: 'Green to White',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Yu Huang (Jade Emperor)',
    symbol: 'Heaven, Earth, Eternity',
    healing: 'Longevity, kidney health, protection of the dead, virtue.',
    ancientUses: 'Burial suits, ritual objects, bi discs, cong tubes.',
    commonUses: 'Heart healing, feng shui, ancestor connection, longevity.',
    icon: Crown,
    isCrossCultural: false
  },
  {
    name: 'Obsidian',
    civilization: 'Egyptian/Greek/Japanese/Mesoamerican',
    meaning: 'Mirror of Truth, Shadow Work',
    color: 'Black with Iridescent Sheen',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Anubis, Hades, Tezcatlipoca',
    symbol: 'Underworld mirror, Truth, Divination, Darkness',
    healing: 'Protection from negative energy, self-reflection, shadow work, divination.',
    ancientUses: 'Ritual mirrors, ceremonial knives, tomb protection, sacrificial tools.',
    commonUses: 'Shadow work, protection, truth reflection, grounding negative energy.',
    icon: Shield,
    isCrossCultural: true
  },
  {
    name: 'Obsidian (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Smoking Mirror, Divination, Sacrifice',
    color: 'Black with Silver Sheen',
    chakra: 'Root, Third Eye',
    frequency: '396 Hz',
    deity: 'Tezcatlipoca',
    symbol: 'Divination, Darkness, Magic',
    healing: 'Divination, protection, reflection of truth, shadow integration.',
    ancientUses: 'Ritual mirrors, sacrificial knives, sharp tools, divination scrying.',
    commonUses: 'Divination, scrying, shadow work, protection.',
    icon: Flame,
    isCrossCultural: false
  },
  {
    name: 'Onyx',
    civilization: 'Greek',
    meaning: 'Strength, Self-Control, Protection',
    color: 'Black with White Bands',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Artemis',
    symbol: 'Strength, Self-mastery',
    healing: 'Protection, self-mastery, overcoming grief, willpower.',
    ancientUses: 'Cameos, intaglios, protective amulets, Roman seals.',
    commonUses: 'Protection, grief support, willpower enhancement, grounding.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Opal (Australian)',
    civilization: 'Australian Aboriginal',
    meaning: 'Hope, Purity, Emotion',
    color: 'White with Rainbow Flashes',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Rainbow Serpent',
    symbol: 'Hope, Purity, Rainbow',
    healing: 'Hope, purity, emotional healing, amplifies feelings.',
    ancientUses: 'Aboriginal dreamtime stories, traded as sacred stone.',
    commonUses: 'Emotional healing, hope manifestation, creative inspiration.',
    icon: Rainbow,
    isCrossCultural: false
  },
  {
    name: 'Opal (Indian)',
    civilization: 'Indian',
    meaning: 'Hope, Purity, Emotion',
    color: 'White with Rainbow Flashes',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Lakshmi',
    symbol: 'Hope, Purity',
    healing: 'Hope, purity, emotional balance, amplifies positive emotions.',
    ancientUses: 'Temple offerings, royal jewelry.',
    commonUses: 'Emotional healing, hope manifestation, heart chakra.',
    icon: Gift,
    isCrossCultural: false
  },
  {
    name: 'Pearl',
    civilization: 'Greek/Roman/Japanese/Indian',
    meaning: 'Love, Purity, Marriage, Moon',
    color: 'White to Pink',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Aphrodite, Venus, Chandra',
    symbol: 'Love, Purity, Moon',
    healing: 'Love, purity, marital harmony, emotional balance, fertility.',
    ancientUses: 'Wedding jewelry, offerings to Aphrodite, royal adornment.',
    commonUses: 'Heart chakra healing, wedding jewelry, purity rituals, emotional balance.',
    icon: Circle,
    isCrossCultural: true
  },
  {
    name: 'Peridot',
    civilization: 'Egyptian',
    meaning: 'Gem of the Sun, Light, Vitality',
    color: 'Olive Green to Yellow-Green',
    chakra: 'Solar Plexus, Heart',
    frequency: '417 Hz',
    deity: 'Ra',
    symbol: 'Sun, Vitality',
    healing: 'Vitality, protection from nightmares, success, liver health.',
    ancientUses: 'Jewelry, temple offerings, amulets for protection.',
    commonUses: 'Solar plexus healing, vitality boost, success manifestation.',
    icon: SunIcon,
    isCrossCultural: false
  },
  {
    name: 'Petalite',
    civilization: 'Global',
    meaning: 'Spiritual Protection, Calm, Connection',
    color: 'Clear to White',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Angel of Peace',
    symbol: 'Protection, Calm',
    healing: 'Spiritual protection, calm, connection to higher realms, reduces anxiety.',
    ancientUses: 'Discovered in 1800, used in crystal healing.',
    commonUses: 'Crown chakra activation, anxiety relief, spiritual protection.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Pietersite',
    civilization: 'African',
    meaning: 'Storm Stone, Vision, Willpower',
    color: 'Blue-Gold-Brown',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Storm Gods',
    symbol: 'Storm, Vision',
    healing: 'Enhances vision, willpower, sees through chaos, inner strength.',
    ancientUses: 'Discovered in 1962, used in African shamanic rituals.',
    commonUses: 'Third eye activation, willpower enhancement, clarity in chaos.',
    icon: Cloud,
    isCrossCultural: false
  },
  {
    name: 'Prehnite',
    civilization: 'African',
    meaning: 'Unconditional Love, Prophecy, Healing',
    color: 'Pale Green',
    chakra: 'Heart, Third Eye',
    frequency: '528 Hz',
    deity: 'Earth Mother',
    symbol: 'Love, Prophecy',
    healing: 'Unconditional love, prophecy, healing, dream recall.',
    ancientUses: 'Discovered in 1788, used in African healing ceremonies.',
    commonUses: 'Heart healing, prophetic dreams, unconditional love cultivation.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Pyrite',
    civilization: 'Mesoamerican',
    meaning: 'Mirror of the Gods, Divination',
    color: 'Brassy Yellow',
    chakra: 'Solar Plexus',
    frequency: '432 Hz',
    deity: 'Tezcatlipoca',
    symbol: 'Mirror, Divination',
    healing: 'Divination, protection, attracting wealth, abundance manifestation.',
    ancientUses: 'Ritual mirrors, mosaics, jewelry, divination tools.',
    commonUses: 'Abundance manifestation, solar plexus activation, divination.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Quartz (Egyptian)',
    civilization: 'Egyptian',
    meaning: 'Healing, Vision, Magic',
    color: 'Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Thoth, Isis',
    symbol: 'Healing, Magic',
    healing: 'Healing, vision, magic, energy amplification.',
    ancientUses: 'Crystal balls, healing temples, scarab inlays.',
    commonUses: 'Master healer, energy amplification, programming.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Quartz (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Crystal Vision, Divination',
    color: 'Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Quetzalcoatl',
    symbol: 'Vision, Divination',
    healing: 'Crystal vision, divination, spiritual sight.',
    ancientUses: 'Scrying crystals, shamanic tools, temple offerings.',
    commonUses: 'Divination, scrying, spiritual vision, crown chakra.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Red Jasper',
    civilization: 'Egyptian',
    meaning: 'Blood of Isis, Mother\'s Protection',
    color: 'Deep Red',
    chakra: 'Root',
    frequency: '432 Hz',
    deity: 'Isis, Bes',
    symbol: 'Maternal Protection, Life Force',
    healing: 'Circulation, grounding, protection for pregnant women, vitality.',
    ancientUses: 'Amulets for pregnancy, carved heart-shaped stones.',
    commonUses: 'Pregnancy support, root chakra, grounding, vitality.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Rhodochrosite',
    civilization: 'Incan',
    meaning: 'Love, Self-Worth, Emotional Healing',
    color: 'Pink with White Bands',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Incan Goddess of Love',
    symbol: 'Love, Self-Worth',
    healing: 'Love, self-worth, emotional healing, inner child work.',
    ancientUses: 'Incan ceremonial stones, believed to be blood of Incan rulers.',
    commonUses: 'Inner child healing, self-worth, heart chakra, emotional release.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Rhodonite',
    civilization: 'Greek',
    meaning: 'Compassion, Forgiveness, Healing',
    color: 'Pink-Black',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Aphrodite',
    symbol: 'Compassion, Forgiveness',
    healing: 'Compassion, forgiveness, emotional healing, releases past trauma.',
    ancientUses: 'Greek amulets for travelers, offerings to Aphrodite.',
    commonUses: 'Forgiveness work, compassion cultivation, emotional trauma release.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Rose Quartz',
    civilization: 'Chinese',
    meaning: 'Love Stone, Harmony, Peace',
    color: 'Pink',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Guan Yin',
    symbol: 'Love, Peace',
    healing: 'Love, emotional healing, peace, self-love, harmony.',
    ancientUses: 'Jewelry, carvings, feng shui, temple offerings.',
    commonUses: 'Self-love, relationship healing, heart chakra, peace cultivation.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Ruby',
    civilization: 'Roman/Indian/Persian',
    meaning: 'Passion, Courage, Sun Stone',
    color: 'Red',
    chakra: 'Root, Heart',
    frequency: '417 Hz',
    deity: 'Mars, Surya, Vishnu',
    symbol: 'Sun, Royal power, Courage',
    healing: 'Heart health, courage, success in battle, passion, vitality.',
    ancientUses: 'Royal regalia, temple offerings, astrological amulets.',
    commonUses: 'Passion manifestation, courage rituals, heart chakra, royal energy.',
    icon: SunIcon,
    isCrossCultural: true
  }
]

// ============ SECTION 5: S - Z (25 stones = 111 total) ============
const stonesStoZ = [
  {
    name: 'Sapphire',
    civilization: 'Roman',
    meaning: 'Wisdom, Divine Favor, Protection',
    color: 'Deep Blue',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Jupiter',
    symbol: 'Wisdom, Prophecy',
    healing: 'Wisdom, divine connection, prophecy, mental clarity.',
    ancientUses: 'Oracle offerings, priestess jewelry, royal regalia.',
    commonUses: 'Third eye activation, wisdom enhancement, divine connection.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Selenite',
    civilization: 'Greek/Roman',
    meaning: 'Moon Light, Clarity, Purification',
    color: 'White-Clear',
    chakra: 'Crown',
    frequency: '963 Hz',
    deity: 'Selene, Luna',
    symbol: 'Moon Light, Purity',
    healing: 'Purification, clarity, angelic connection, never holds negative energy.',
    ancientUses: 'Temple windows (translucent), moon rituals, purification tools.',
    commonUses: 'Energy cleansing, crown chakra activation, meditation, grid work.',
    icon: Moon,
    isCrossCultural: false
  },
  {
    name: 'Serpentine',
    civilization: 'Egyptian/Mesoamerican/Celtic/Japanese',
    meaning: 'Serpent Power, Rebirth, Protection',
    color: 'Green to Yellow-Green',
    chakra: 'Heart',
    frequency: '432 Hz',
    deity: 'Wadjet, Quetzalcoatl, Druids, Snake Spirits',
    symbol: 'Serpent, Protection, Rebirth, Magic',
    healing: 'Rebirth, protection, serpent energy awakening, kundalini activation.',
    ancientUses: 'Amulets, scarabs, tomb offerings, ritual objects, jewelry.',
    commonUses: 'Kundalini work, rebirth rituals, protection, heart healing.',
    icon: Shield,
    isCrossCultural: true
  },
  {
    name: 'Serpentine (Japanese)',
    civilization: 'Japanese',
    meaning: 'Snake Power, Rebirth',
    color: 'Green',
    chakra: 'Heart',
    frequency: '432 Hz',
    deity: 'Snake Spirits',
    symbol: 'Rebirth, Snake Power',
    healing: 'Rebirth, transformation, snake power awakening.',
    ancientUses: 'Amulets, shrine offerings.',
    commonUses: 'Transformation work, kundalini activation.',
    icon: Zap,
    isCrossCultural: false
  },
  {
    name: 'Serpentine (Mesoamerican)',
    civilization: 'Mesoamerican',
    meaning: 'Serpent Power, Rebirth, Magic',
    color: 'Green to Black',
    chakra: 'Heart',
    frequency: '432 Hz',
    deity: 'Quetzalcoatl',
    symbol: 'Serpent, Rebirth',
    healing: 'Rebirth, transformation, serpent magic, shamanic journeying.',
    ancientUses: 'Ritual objects, jewelry, carvings, shamanic tools.',
    commonUses: 'Shamanic work, transformation, serpent energy.',
    icon: Feather,
    isCrossCultural: false
  },
  {
    name: 'Shungite',
    civilization: 'Russian',
    meaning: 'Protection, Purification, Grounding',
    color: 'Black',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Earth Spirits',
    symbol: 'Protection, Purification',
    healing: 'Protection from EMF, purification of water, grounding, detoxification.',
    ancientUses: 'Russian folk medicine, water purification, healing baths.',
    commonUses: 'EMF protection (phone/computer), water purification, grounding.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Smoky Quartz',
    civilization: 'Chinese',
    meaning: 'Grounding, Protection, Ancestors',
    color: 'Brown to Black',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Ancestors',
    symbol: 'Earth, Ancestors',
    healing: 'Grounding, protection, ancestor connection, releases negativity.',
    ancientUses: 'Funerary objects, amulets, ancestor rituals.',
    commonUses: 'Grounding meditation, ancestor connection, releasing negativity.',
    icon: Cloud,
    isCrossCultural: false
  },
  {
    name: 'Sodalite',
    civilization: 'Egyptian',
    meaning: 'Logic, Truth, Intuition',
    color: 'Deep Blue with White Veins',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Thoth, Maat',
    symbol: 'Logic, Truth',
    healing: 'Logic, truth, intuition, rational thinking, emotional balance.',
    ancientUses: 'Carved amulets, temple offerings, pigment.',
    commonUses: 'Third eye activation, study aid, truth speaking, logic enhancement.',
    icon: Brain,
    isCrossCultural: false
  },
  {
    name: 'Spectrolite',
    civilization: 'Finnish',
    meaning: 'Magic, Transformation, Joy',
    color: 'Grey with Multi-Color Flash',
    chakra: 'Third Eye',
    frequency: '432 Hz',
    deity: 'Northern Lights Spirits',
    symbol: 'Magic, Joy',
    healing: 'Magic, transformation, joy, auric protection, creativity.',
    ancientUses: 'Finnish shamanic tools, believed to be frozen aurora borealis.',
    commonUses: 'Joy manifestation, magic work, transformation support.',
    icon: Sparkles,
    isCrossCultural: false
  },
  {
    name: 'Sugilite',
    civilization: 'South African',
    meaning: 'Divine Love, Protection, Healing',
    color: 'Purple',
    chakra: 'Third Eye, Crown',
    frequency: '432 Hz',
    deity: 'African Spirits',
    symbol: 'Divine Love, Protection',
    healing: 'Divine love, protection, emotional healing, spiritual connection.',
    ancientUses: 'Discovered in 1944, used in African healing.',
    commonUses: 'Divine love connection, protection, crown chakra.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Sunstone',
    civilization: 'Egyptian/Norse',
    meaning: 'Ra\'s Light, Vitality, Joy',
    color: 'Golden-Orange',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Ra, Sol',
    symbol: 'Sun, Vitality',
    healing: 'Vitality, joy, personal power, leadership, independence.',
    ancientUses: 'Norse navigation at sea (sunstone), Egyptian sun offerings.',
    commonUses: 'Solar plexus healing, joy manifestation, leadership activation.',
    icon: SunIcon,
    isCrossCultural: false
  },
  {
    name: 'Tanzanite',
    civilization: 'African',
    meaning: 'Transformation, Communication, Spirit',
    color: 'Violet-Blue',
    chakra: 'Third Eye, Throat',
    frequency: '432 Hz',
    deity: 'African Spirits',
    symbol: 'Transformation, Spirit',
    healing: 'Transformation, communication, spiritual awakening, high vibration.',
    ancientUses: 'Discovered in 1967, Maasai traditions.',
    commonUses: 'Third eye activation, throat chakra, transformation work.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Tiger Eye',
    civilization: 'Chinese',
    meaning: 'Courage, Protection, Insight',
    color: 'Golden Brown with Chatoyancy',
    chakra: 'Solar Plexus',
    frequency: '417 Hz',
    deity: 'Guan Yu',
    symbol: 'Courage, Insight',
    healing: 'Courage, protection, insight, balance of yin-yang, practical mind.',
    ancientUses: 'Carved figures, jewelry, amulets, feng shui.',
    commonUses: 'Courage rituals, protection grids, insight enhancement.',
    icon: Eye,
    isCrossCultural: false
  },
  {
    name: 'Topaz',
    civilization: 'Roman',
    meaning: 'Strength, Intellect, Jupiter',
    color: 'Golden Yellow',
    chakra: 'Solar Plexus',
    frequency: '528 Hz',
    deity: 'Jupiter',
    symbol: 'Strength, Wisdom',
    healing: 'Strength, intellect, manifestation, abundance, truth.',
    ancientUses: 'Jewelry, intaglios, cameos, Roman seals.',
    commonUses: 'Manifestation, solar plexus healing, abundance attraction.',
    icon: Crown,
    isCrossCultural: false
  },
  {
    name: 'Tourmaline (Black)',
    civilization: 'Global',
    meaning: 'Protection, Grounding, Shadow Work',
    color: 'Black',
    chakra: 'Root',
    frequency: '396 Hz',
    deity: 'Earth Spirits',
    symbol: 'Protection, Grounding',
    healing: 'Protection from EMF and negative energy, grounding, shadow work.',
    ancientUses: 'Discovered in 1500s, used in protection amulets.',
    commonUses: 'EMF protection, grounding, shadow work, root chakra.',
    icon: Shield,
    isCrossCultural: false
  },
  {
    name: 'Tourmaline (Watermelon)',
    civilization: 'Brazilian',
    meaning: 'Balance, Love, Joy',
    color: 'Pink-Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Love Spirits',
    symbol: 'Balance, Love',
    healing: 'Balance of heart, love, joy, emotional healing, compassion.',
    ancientUses: 'Brazilian indigenous jewelry, love offerings.',
    commonUses: 'Heart healing, balance, love attraction, emotional release.',
    icon: Heart,
    isCrossCultural: false
  },
  {
    name: 'Turquoise',
    civilization: 'Egyptian/Chinese/Mesoamerican/Persian',
    meaning: 'Life, Protection, Joy, Victory',
    color: 'Sky Blue to Green-Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    deity: 'Hathor, Maat, Xi Wangmu, Tlaloc, Quetzalcoatl, Ahura Mazda',
    symbol: 'Sky, Life-giving waters, Protection, Rain, Victory',
    healing: 'Immune system, anti-inflammatory, protection from evil, brings good fortune.',
    ancientUses: 'Temple offerings, jewelry, divine protection, mosaics, masks, royal regalia.',
    commonUses: 'Throat chakra, protection amulet, good luck talisman, jewelry.',
    icon: Droplet,
    isCrossCultural: true
  },
  {
    name: 'Turquoise (Persian)',
    civilization: 'Persian',
    meaning: 'Victory, Protection, Royalty',
    color: 'Sky Blue to Robin\'s Egg Blue',
    chakra: 'Throat',
    frequency: '528 Hz',
    deity: 'Ahura Mazda',
    symbol: 'Victory, Sky',
    healing: 'Protection, victory in battle, royal favor, good fortune.',
    ancientUses: 'Royal regalia, jewelry, domes of palaces, amulets.',
    commonUses: 'Success rituals, protection, throat chakra.',
    icon: Crown,
    isCrossCultural: false
  },
  {
    name: 'Unakite',
    civilization: 'African',
    meaning: 'Balance, Grounding, Vision',
    color: 'Green-Pink',
    chakra: 'Heart, Root',
    frequency: '528 Hz',
    deity: 'Earth Spirits',
    symbol: 'Balance, Vision',
    healing: 'Balance of heart and root chakras, grounding, vision, emotional release.',
    ancientUses: 'Discovered in 1874, used in grounding rituals.',
    commonUses: 'Chakra balance, grounding, emotional release, vision work.',
    icon: Target,
    isCrossCultural: false
  },
  {
    name: 'Variscite',
    civilization: 'Egyptian',
    meaning: 'Calm, Peace, Abundance',
    color: 'Pale Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Hathor',
    symbol: 'Calm, Abundance',
    healing: 'Calm, peace, abundance, emotional balance, prosperity.',
    ancientUses: 'Carved amulets, tomb offerings, jewelry.',
    commonUses: 'Calm cultivation, abundance manifestation, heart healing.',
    icon: Leaf,
    isCrossCultural: false
  },
  {
    name: 'Yellow Sapphire',
    civilization: 'Indian',
    meaning: 'Jupiter Stone, Wisdom, Fortune',
    color: 'Yellow to Golden',
    chakra: 'Solar Plexus',
    frequency: '528 Hz',
    deity: 'Brihaspati',
    symbol: 'Fortune, Wisdom',
    healing: 'Wisdom, prosperity, marital happiness, good fortune.',
    ancientUses: 'Astrological jewelry, temple offerings, royal adornment.',
    commonUses: 'Prosperity manifestation, solar plexus healing, astrological wear.',
    icon: Star,
    isCrossCultural: false
  },
  {
    name: 'Zoisite',
    civilization: 'African',
    meaning: 'Growth, Joy, Transformation',
    color: 'Green-Red',
    chakra: 'Heart',
    frequency: '528 Hz',
    deity: 'Earth Spirits',
    symbol: 'Growth, Joy',
    healing: 'Growth, joy, transformation, emotional healing, heart opening.',
    ancientUses: 'Discovered in 1805, used in African healing.',
    commonUses: 'Heart healing, growth work, joy manifestation.',
    icon: Flower2,
    isCrossCultural: false
  }
]

// Combine all stones
const allStones = [...stones, ...stonesDToG, ...stonesHtoL, ...stonesMtoR, ...stonesStoZ]

// Define the 10 most cross-cultural stones (to be bolded)
const crossCulturalStones = [
  'Turquoise', 'Carnelian', 'Lapis Lazuli', 'Clear Quartz', 'Obsidian',
  'Jade', 'Serpentine', 'Agate', 'Ruby', 'Pearl'
]

export default function SacredStonesPage() {
  const [selectedStone, setSelectedStone] = useState(allStones[0])

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-amber-600">
          <Gem size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Treasures</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-amber-700">111 Sacred Stones & Crystals</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete alphabetical guide to {allStones.length} healing crystals and sacred stones from ancient civilizations
        </p>
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          <span className="px-2 py-0.5 bg-amber-100 rounded-full text-xs">★ Bold = Top 10 Cross-Cultural Stones</span>
          <span className="px-2 py-0.5 bg-amber-100 rounded-full text-xs">Total: {allStones.length} stones</span>
        </div>
      </motion.div>

      {/* Sacred Stones Grid - All 111 Stones */}
      <div>
        <h2 className="text-2xl font-bold text-amber-700 mb-4 flex items-center gap-2 border-b border-amber-200 pb-2">
          <Gem size={24} />
          Complete Alphabetical Collection ({allStones.length} stones)
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 mb-6">
          {allStones.map((stone) => {
            const IconComponent = stone.icon
            const isBold = crossCulturalStones.includes(stone.name)
            return (
              <button
                key={stone.name}
                onClick={() => setSelectedStone(stone)}
                className={`p-2 rounded-lg transition-all text-left ${
                  selectedStone.name === stone.name
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white/80 hover:bg-amber-50 border border-amber-100'
                }`}
              >
                <div className="text-center">
                  <IconComponent size={20} className={`mx-auto mb-1 ${selectedStone.name === stone.name ? 'text-white' : 'text-amber-600'}`} />
                  <div className={`font-semibold text-xs truncate ${isBold ? 'font-extrabold' : ''}`}>
                    {stone.name}
                  </div>
                  <div className="text-[10px] opacity-75 truncate">{stone.civilization.split('/')[0]}</div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Expanded Details Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStone.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-amber-200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <selectedStone.icon size={32} className="text-amber-600" />
                  <h3 className={`text-2xl font-bold text-amber-800 ${crossCulturalStones.includes(selectedStone.name) ? 'font-extrabold underline decoration-amber-400' : ''}`}>
                    {selectedStone.name}
                  </h3>
                  {crossCulturalStones.includes(selectedStone.name) && (
                    <span className="text-xs bg-amber-600 text-white px-2 py-0.5 rounded-full">★ Cross-Cultural</span>
                  )}
                  <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">{selectedStone.civilization}</span>
                </div>
                <p className="text-gray-700 mb-3 italic">"{selectedStone.meaning}"</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold text-amber-700">Color:</span>
                    <span className="text-gray-700">{selectedStone.color}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold text-amber-700">Chakra:</span>
                    <span className="text-gray-700">{selectedStone.chakra}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold text-amber-700">Frequency:</span>
                    <span className="text-gray-700">{selectedStone.frequency}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold text-amber-700">Deity:</span>
                    <span className="text-gray-700">{selectedStone.deity}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    <span className="font-semibold text-amber-700">Symbol:</span>
                    <span className="text-gray-700">{selectedStone.symbol}</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1 flex items-center gap-1">
                    <Heart size={16} /> Healing Properties
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedStone.healing}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1 flex items-center gap-1">
                    <Crown size={16} /> Ancient Uses
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedStone.ancientUses}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 mb-1 flex items-center gap-1">
                    <Gem size={16} /> Common Uses Today
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{selectedStone.commonUses}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Final Summary - All 111 Stones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg p-6 border border-amber-300 text-center"
      >
        <h3 className="text-xl font-bold text-amber-800 mb-2">✨ Complete Collection: 111 Sacred Stones ✨</h3>
        <p className="text-gray-700 text-sm mb-3">
          📿 <span className="font-semibold">Total: {allStones.length} unique sacred stones</span> from civilizations including:
          Egyptian, Greek, Roman, Indian, Chinese, Japanese, Mesoamerican, Persian, Celtic, African, Aboriginal, Norse, Tibetan, and more.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <span className="px-2 py-1 bg-amber-800 text-white rounded-full">★ Cross-cultural stones (10)</span>
          <span className="px-2 py-1 bg-white text-amber-800 rounded-full">A-C: 27 stones</span>
          <span className="px-2 py-1 bg-white text-amber-800 rounded-full">D-G: 15 stones</span>
          <span className="px-2 py-1 bg-white text-amber-800 rounded-full">H-L: 18 stones</span>
          <span className="px-2 py-1 bg-white text-amber-800 rounded-full">M-R: 26 stones</span>
          <span className="px-2 py-1 bg-white text-amber-800 rounded-full">S-Z: 25 stones</span>
        </div>
        <p className="text-center text-xs text-gray-600 mt-3">
          💎 Each stone includes: Meaning, Color, Chakra, Frequency (Hz), Deity, Symbol, 
          Healing Properties, Ancient Uses, and Common Uses Today.
        </p>
      </motion.div>
    </div>
  )
}