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

  // Greek Stones (9-12)
  {
    name: 'Amethyst',
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
    name: 'Rock Crystal (Clear Quartz)',
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

  // Roman Stones (13-15)
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
    name: 'Agate',
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
    name: 'Onyx',
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

  // INDIAN STONES (16-19)
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
    name: 'Emerald',
    civilization: 'Indian',
    meaning: 'Wisdom, Memory, Healing',
    color: 'Green',
    chakra: 'Heart',
    frequency: '528 Hz',
    healing: 'Eye health, memory enhancement, emotional balance.',
    uses: 'Ayurvedic medicine, astrological jewelry, temple inlays.',
    deity: 'Budha (Mercury), Vishnu',
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
    deity: 'Shani (Saturn), Krishna',
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
    deity: 'Brihaspati (Jupiter)',
    symbol: 'Fortune, Wisdom',
    icon: Star
  },

  // CHINESE STONES (20-23)
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
    name: 'Pearl',
    civilization: 'Chinese',
    meaning: 'Moon Stone, Purity, Wisdom',
    color: 'White to Pink',
    chakra: 'Crown',
    frequency: '639 Hz',
    healing: 'Heart health, peace, wisdom, fertility.',
    uses: 'Royal jewelry, medicine (ground pearls), burial ornaments.',
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
    deity: 'Caishen (God of Wealth)',
    symbol: 'Life Force, Wealth',
    icon: Flame
  },

  // JAPANESE STONES (24-25)
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
    deity: 'Ryujin (Dragon God)',
    symbol: 'Sea, Protection',
    icon: Waves
  },

  // MESOAMERICAN STONES (26-29)
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
    deity: 'Tezcatlipoca (Smoking Mirror)',
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
    name: 'Pyrite (Fool\'s Gold)',
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

  // PERSIAN STONES (30-31)
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

  // CELTIC STONES (32-33)
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
    name: 'Bloodstone (Heliotrope)',
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
  }
]
const jewelryTypes = [
  // Egyptian (5)
  { 
    name: 'The Ankh', 
    civilization: 'Egyptian', 
    meaning: 'Eternal Life, Divine Breath', 
    materials: 'Gold, Lapis Lazuli, Carnelian', 
    purpose: 'Worn by gods and pharaohs as the key to eternal life', 
    symbol: 'Life, Infinity, Key of the Nile',
    practice: 'The ankh was placed in tombs to ensure the deceased had eternal life. Living pharaohs carried ankhs in ceremonies to channel divine power. It was often depicted being held to the nose of the deceased to "breathe" life back into them.',
    use: 'Worn as a pendant or amulet, depicted in temple reliefs, carried in royal ceremonies, placed on sarcophagi.'
  },
  { 
    name: 'The Scarab', 
    civilization: 'Egyptian', 
    meaning: 'Rebirth, Protection, Resurrection', 
    materials: 'Lapis Lazuli, Turquoise, Steatite', 
    purpose: 'Placed on mummies hearts, worn as protective ring or amulet', 
    symbol: 'Sun, Morning rebirth',
    practice: 'The heart scarab was inscribed with Chapter 30B of the Book of the Dead to prevent the heart from betraying the deceased during judgment. Living Egyptians wore scarab rings for daily protection.',
    use: 'Heart scarab amulet on mummies, signet rings, commemorative scarabs for victories, funerary offerings.'
  },
  { 
    name: 'The Eye of Horus (Wedjat)', 
    civilization: 'Egyptian', 
    meaning: 'Healing, Protection, Royal Power', 
    materials: 'Gold, Lapis Lazuli, Obsidian', 
    purpose: 'Powerful amulet against evil, surgical symbol', 
    symbol: 'Sacred Vision, 6 Senses',
    practice: 'The wedjat was painted on the prows of boats to "see" danger ahead. Worn by the living for protection against the evil eye. Used in medical texts as a symbol for measuring ingredients (each part of the eye represented a fraction).',
    use: 'Amulets, jewelry, painted on coffins, temple walls, medical prescriptions, boat prows.'
  },
  { 
    name: 'The Djed Pillar', 
    civilization: 'Egyptian', 
    meaning: 'Stability, Osiris Spine, Strength', 
    materials: 'Gold, Lapis Lazuli, Green Jasper', 
    purpose: 'Strengthen the spine of the deceased for resurrection', 
    symbol: 'Tree of Life, Resurrection',
    practice: 'The djed pillar was raised during the "Raising of the Djed" ceremony, a ritual reenacting the resurrection of Osiris. It was placed on the spine of mummies to ensure the deceased could sit up in the afterlife.',
    use: 'Amulets on mummies, temple architecture, festival ceremonies, tomb paintings.'
  },
  { 
    name: 'Broad Collar (Wesekh)', 
    civilization: 'Egyptian', 
    meaning: 'Divine Protection, Wealth, Status', 
    materials: 'Gold, Faience, Carnelian, Lapis', 
    purpose: 'Worn by nobility, depicted on gods, temple treasures', 
    symbol: 'Wealth in afterlife',
    practice: 'The wesekh collar was a sign of high status, often depicted on pharaohs and gods. Thousands of faience beads were strung together to create elaborate patterns. The collar was believed to magically protect the wearer.',
    use: 'Royal regalia, temple offerings, burial goods, depictions in art.'
  },
  
  // Greek (4)
  { 
    name: 'Fillet (Headband)', 
    civilization: 'Greek', 
    meaning: 'Victory, Divine Favor', 
    materials: 'Gold, Silver, Fabric, Laurel Leaves, Ivy', 
    purpose: 'Worn by athletes, heroes, and gods as a sign of victory', 
    symbol: 'Apollo, Athletic Victory',
    practice: 'Victorious athletes received a woolen fillet, later made of gold for special occasions. Worn during sacred processions and festivals. The laurel wreath specifically honored Apollo and the Pythian Games.',
    use: 'Athletic crowns, religious ceremonies, depictions of gods, victory monuments.'
  },
  { 
    name: 'Intaglio Signet Ring', 
    civilization: 'Greek', 
    meaning: 'Identity, Authority, Family', 
    materials: 'Gold, Silver, Carnelian, Amethyst, Garnet', 
    purpose: 'Seal documents, identify the wearer, family heirloom', 
    symbol: 'Family crest, Oath',
    practice: 'Each noble family had a unique intaglio design used to seal legal documents in wax. The ring was passed down through generations as a symbol of authority. Worn on the pinky finger of the left hand.',
    use: 'Legal seals, personal identification, marriage contracts, military command.'
  },
  { 
    name: 'Laurel Wreath', 
    civilization: 'Greek', 
    meaning: 'Victory, Honor, Apollo', 
    materials: 'Gold, Laurel Leaves', 
    purpose: 'Crown for victors, rulers, and poets', 
    symbol: 'Apollo, Victory',
    practice: 'The laurel wreath was awarded at the Pythian Games in Apollo\'s honor. It became a symbol of poetic achievement, worn by Apollo and later by Roman emperors.',
    use: 'Athletic crowns, military honors, imperial regalia, literary awards.'
  },
  { 
    name: 'Arm Ring', 
    civilization: 'Greek', 
    meaning: 'Strength, Valor, Heroism', 
    materials: 'Gold, Silver, Bronze', 
    purpose: 'Worn by warriors and heroes as a mark of valor', 
    symbol: 'Strength, Courage',
    practice: 'Arm rings were given as prizes for valor in battle. They were often dedicated to gods in sanctuaries after military victories.',
    use: 'Warrior rewards, religious offerings, depictions of heroes, status symbols.'
  },

  // Roman (3)
  { 
    name: 'Bullae', 
    civilization: 'Roman', 
    meaning: 'Protection, Status, Coming of Age', 
    materials: 'Gold, Leather, Wool', 
    purpose: 'Worn by children for protection, by magistrates for status', 
    symbol: 'Protection, Maturity',
    practice: 'Free-born Roman children wore a bulla from birth until they reached adulthood (around age 14-16). On the day a boy became a man (Liberalia festival), he dedicated his bulla to the household gods (Lares).',
    use: 'Child protection amulet, magistrate insignia, coming-of-age ceremonies.'
  },
  { 
    name: 'Fibula (Brooch)', 
    civilization: 'Roman', 
    meaning: 'Status, Fashion, Utility', 
    materials: 'Gold, Silver, Bronze, Gems', 
    purpose: 'Fasten clothing, display wealth and status', 
    symbol: 'Fashion, Status',
    practice: 'The fibula was essential for fastening togas and cloaks. Elaborate fibulae indicated high social status. They often featured gemstones and intricate metalwork.',
    use: 'Clothing fasteners, status indicators, fashion accessories, military uniform components.'
  },
  { 
    name: 'Signet Ring (Roman)', 
    civilization: 'Roman', 
    meaning: 'Authority, Legacy, Family', 
    materials: 'Gold, Silver, Iron, Gemstones', 
    purpose: 'Seal official documents, mark ownership', 
    symbol: 'Authority, Legacy',
    practice: 'Roman citizens used signet rings to seal wills and legal documents. The design was unique to the family; losing the ring was a serious matter, as it could be used to forge the owner\'s signature.',
    use: 'Legal seals, personal identification, marriage contracts, military orders.'
  },

  // Indian (3)
  { 
    name: 'Mangalsutra', 
    civilization: 'Indian', 
    meaning: 'Marriage Bond, Protection, Husband\'s Longevity', 
    materials: 'Gold, Black Beads, Diamonds, Rubies', 
    purpose: 'Worn by married women for protection of the husband', 
    symbol: 'Marriage, Union',
    practice: 'The husband ties the mangalsutra around the bride\'s neck during the wedding ceremony. Black beads are believed to ward off the evil eye. The number of beads and style varies by region.',
    use: 'Marital symbol, daily wear for married women, family heirlooms.'
  },
  { 
    name: 'Nose Ring (Nath)', 
    civilization: 'Indian', 
    meaning: 'Purity, Marriage, Goddess Parvati', 
    materials: 'Gold, Pearls, Rubies, Diamonds', 
    purpose: 'Symbol of marriage, honor to the goddess Parvati', 
    symbol: 'Marriage, Fertility',
    practice: 'The left nostril is pierced for the wedding, as Ayurveda associates this side with female reproductive health. The size and style indicate regional origin and family wealth.',
    use: 'Wedding adornment, daily wear, religious ceremonies, dance performances.'
  },
  { 
    name: 'Maang Tikka', 
    civilization: 'Indian', 
    meaning: 'Third Eye, Spiritual Power, Focus', 
    materials: 'Gold, Diamonds, Rubies, Pearls', 
    purpose: 'Worn on forehead, enhances spiritual power, protects the third eye', 
    symbol: 'Third Eye, Wisdom',
    practice: 'The maang tikka is worn at the center of the forehead, the location of the ajna chakra (third eye). It is believed to focus energy and protect the wearer from negative influences.',
    use: 'Wedding adornment, temple visits, dance performances, religious ceremonies.'
  },

  // Chinese (3)
  { 
    name: 'Jade Bi Disc', 
    civilization: 'Chinese', 
    meaning: 'Heaven, Nobility, Eternity', 
    materials: 'Jade (Nephrite, Jadeite)', 
    purpose: 'Burial goods, ritual offerings, symbol of heaven', 
    symbol: 'Heaven, Sun, Circle of Life',
    practice: 'Bi discs were placed on the chest and back of the deceased to protect the body and represent heaven. They were used in rituals to honor heaven, with the disc held toward the sky.',
    use: 'Burial goods, ritual offerings, status symbols, temple decorations.'
  },
  { 
    name: 'Jade Cong Tube', 
    civilization: 'Chinese', 
    meaning: 'Earth, Stability, Square of Earth', 
    materials: 'Jade (Nephrite, Jadeite)', 
    purpose: 'Burial goods, ritual offerings, symbol of earth', 
    symbol: 'Earth, Four Directions',
    practice: 'The cong represents the square shape of the earth, with the circular hole representing the axis between heaven and earth. Cong were placed around the body in burials to protect the deceased.',
    use: 'Burial goods, ritual offerings, status symbols, ancestor worship.'
  },
  { 
    name: 'Hairpin (Zan)', 
    civilization: 'Chinese', 
    meaning: 'Beauty, Status, Coming of Age', 
    materials: 'Gold, Jade, Pearls', 
    purpose: 'Hair ornament for noble women, signifies marital status', 
    symbol: 'Femininity, Status',
    practice: 'At age 15, a girl received her first hairpin in a coming-of-age ceremony, signifying she was ready for marriage. The number and type of hairpins indicated social rank.',
    use: 'Hair adornment, wedding accessories, status indicators, family heirlooms.'
  },

  // Japanese (2)
  { 
    name: 'Netsuke', 
    civilization: 'Japanese', 
    meaning: 'Status, Utility, Artistry', 
    materials: 'Ivory, Wood, Amber, Coral', 
    purpose: 'Counterweight for carrying pouches on kimono sashes', 
    symbol: 'Status, Craftsmanship',
    practice: 'Netsuke were carved toggles used to secure inro (small boxes) and sagemono (hanging objects) to the obi (sash).Elaborate netsuke demonstrated the owner\'s wealth and taste.',
    use: 'Functional clothing accessory, status symbol, artistic expression, collectible art.'
  },
  { 
    name: 'Kanzashi', 
    civilization: 'Japanese', 
    meaning: 'Beauty, Status, Seasonal Awareness', 
    materials: 'Gold, Silver, Coral, Jade, Tortoiseshell', 
    purpose: 'Hair ornament for women, signifies marital status and season', 
    symbol: 'Femininity, Seasons',
    practice: 'Different styles of kanzashi are worn for different seasons and occasions. Maiko (apprentice geisha) wear elaborate kanzashi with seasonal flowers. Married women wear simpler styles.',
    use: 'Hair adornment, wedding accessories, seasonal celebrations, formal occasions.'
  },

  // Mesoamerican (2)
  { 
    name: 'Jade Mask', 
    civilization: 'Mesoamerican', 
    meaning: 'Divine Identity, Royal Power, Afterlife', 
    materials: 'Jadeite, Obsidian, Shell, Pyrite', 
    purpose: 'Burial masks for royalty, depict the gods, ensure divine identity', 
    symbol: 'Gods, Royalty, Immortality',
    practice: 'The death mask of the Maya ruler Pakal (Palenque) is made of jadeite with shell and obsidian eyes, depicting him as the Maize God reborn. Jade masks were believed to transform the wearer into a god.',
    use: 'Burial masks, royal regalia, ritual offerings, temple deposits.'
  },
  { 
    name: 'Labret (Lip Plug)', 
    civilization: 'Mesoamerican', 
    meaning: 'Status, Nobility, Speech', 
    materials: 'Jade, Gold, Obsidian', 
    purpose: 'Worn by nobles and warriors, sign of high rank', 
    symbol: 'Status, Authority',
    practice: 'Labrets were inserted into a piercing below the lower lip. Larger labrets indicated higher status. Aztec nobles wore labrets made of gold and jadeite.',
    use: 'Status symbols, warrior adornment, royal regalia, religious ceremonies.'
  },

  // Persian (2 - NEW)
  { 
    name: 'Cylinder Seal', 
    civilization: 'Persian', 
    meaning: 'Authority, Ownership, Divine Favor', 
    materials: 'Lapis Lazuli, Carnelian, Gold, Silver', 
    purpose: 'Roll over clay to impress unique design, authenticate documents', 
    symbol: 'Authority, Divine Protection',
    practice: 'Cylinder seals were rolled over wet clay to create a continuous design, authenticating documents and marking ownership. The design often included royal imagery and divine symbols.',
    use: 'Document sealing, ownership marks, administrative records, religious offerings.'
  },
  { 
    name: 'Royal Armlet', 
    civilization: 'Persian', 
    meaning: 'Royalty, Power, Divine Right', 
    materials: 'Gold, Lapis Lazuli, Turquoise', 
    purpose: 'Worn by Persian kings and nobles as symbol of authority', 
    symbol: 'Royalty, Divine Favor',
    practice: 'Armlets were worn on the upper arm by Persian royalty, often featuring lion or ibex heads at the ends. They were given as gifts to nobles for service.',
    use: 'Royal regalia, status symbols, diplomatic gifts, temple offerings.'
  },

  // Celtic (2 - NEW)
  { 
    name: 'Torc (Torque)', 
    civilization: 'Celtic', 
    meaning: 'Nobility, Warrior Status, Divine Connection', 
    materials: 'Gold, Silver, Bronze, Electrum', 
    purpose: 'Worn by nobles and warriors, symbol of high status', 
    symbol: 'Nobility, Strength, Sun',
    practice: 'Torcs were worn as neck rings by Celtic nobility. The open-ended design allowed the wearer to bend the ends for fitting. Elaborate torcs were offered to gods at sacred sites.',
    use: 'Status symbols, warrior adornment, religious offerings, burial goods.'
  },
  { 
    name: 'Penannular Brooch', 
    civilization: 'Celtic', 
    meaning: 'Status, Craftsmanship, Identity', 
    materials: 'Gold, Silver, Bronze, Enamel', 
    purpose: 'Fasten cloaks, display status, family identity', 
    symbol: 'Status, Family, Artistry',
    practice: 'These brooches featured a pin that rotated around an open ring. The style and decoration indicated the wearer\'s social status and family affiliation.',
    use: 'Clothing fasteners, status indicators, family heirlooms, burial goods.'
  }
]

const civilizations = ['All', 'Egyptian', 'Greek', 'Roman', 'Indian', 'Chinese', 'Japanese', 'Mesoamerican', 'Persian', 'Celtic']

export default function StonesJewelryPage() {
  const [selectedStone, setSelectedStone] = useState(stones[0])
  const [selectedCivilization, setSelectedCivilization] = useState('All')

  const filteredStones = selectedCivilization === 'All' 
    ? stones 
    : stones.filter(stone => stone.civilization === selectedCivilization)

  const filteredJewelry = selectedCivilization === 'All'
    ? jewelryTypes
    : jewelryTypes.filter(jewelry => jewelry.civilization === selectedCivilization)

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
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Stones & Jewelry</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover 33 sacred stones and 22 jewelry types from 9 ancient civilizations
        </p>
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
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

      {/* Jewelry Types - Expanded with Practices and Uses */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Crown size={24} />
          Sacred Jewelry & Amulets ({filteredJewelry.length} types)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredJewelry.map((jewelry, index) => (
            <motion.div
              key={jewelry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              className="egyptian-card hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-gold">{jewelry.name}</h3>
                <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">{jewelry.civilization}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1"><span className="font-semibold">Materials:</span> {jewelry.materials}</p>
              <p className="text-gray-700 text-sm mb-1"><span className="font-semibold">Meaning:</span> {jewelry.meaning}</p>
              <p className="text-xs text-gray-600 mb-2"><span className="font-semibold">Symbol:</span> {jewelry.symbol}</p>
              <div className="bg-gold/5 rounded p-2 mt-1">
                <p className="text-xs text-gray-600"><span className="font-semibold text-gold">Practice:</span> {jewelry.practice}</p>
              </div>
              <p className="text-xs text-gray-500 mt-2"><span className="font-semibold">Uses:</span> {jewelry.use}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stone Count by Civilization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gold/10 rounded-lg p-6 border border-gold/30"
      >
        <h3 className="text-xl font-bold text-gold mb-3 text-center">Stones by Civilization</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-2 text-center text-sm">
          <div><span className="font-semibold text-egyptian-blue">Egyptian</span><p className="text-xs text-gray-600">8 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Greek</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Roman</span><p className="text-xs text-gray-600">3 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Indian</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Chinese</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Japanese</span><p className="text-xs text-gray-600">2 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Mesoamerican</span><p className="text-xs text-gray-600">4 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Persian</span><p className="text-xs text-gray-600">2 stones</p></div>
          <div><span className="font-semibold text-egyptian-blue">Celtic</span><p className="text-xs text-gray-600">2 stones</p></div>
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic text-sm">
          💡 <span className="font-semibold">Did you know?</span> The Egyptians believed lapis lazuli could send dreams to the gods, the Greeks thought amethyst prevented drunkenness, and the Maya considered jadeite more valuable than gold. Persian turquoise was believed to change color to warn of danger, while Celtic torcs were believed to have protective powers!
        </p>
      </motion.div>
    </div>
  )
}