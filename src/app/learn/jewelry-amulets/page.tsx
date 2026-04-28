'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Gem, Shield, Eye, Star, Heart, Sun as SunIcon, Moon, Key, Circle } from 'lucide-react'

const jewelryTypes = [
  // Egyptian (8)
  { 
    name: 'The Ankh', 
    civilization: 'Egyptian', 
    meaning: 'Eternal Life, Divine Breath', 
    materials: 'Gold, Lapis Lazuli, Carnelian', 
    purpose: 'Worn by gods and pharaohs as the key to eternal life', 
    symbol: 'Life, Infinity, Key of the Nile',
    practice: 'The ankh was placed in tombs to ensure the deceased had eternal life. Living pharaohs carried ankhs in ceremonies to channel divine power.',
    use: 'Worn as a pendant or amulet, depicted in temple reliefs, carried in royal ceremonies, placed on sarcophagi.'
  },
  { 
    name: 'The Scarab', 
    civilization: 'Egyptian', 
    meaning: 'Rebirth, Protection, Resurrection', 
    materials: 'Lapis Lazuli, Turquoise, Steatite', 
    purpose: 'Placed on mummies hearts, worn as protective ring or amulet', 
    symbol: 'Sun, Morning rebirth',
    practice: 'The heart scarab was inscribed with Chapter 30B of the Book of the Dead to prevent the heart from betraying the deceased during judgment.',
    use: 'Heart scarab amulet on mummies, signet rings, commemorative scarabs for victories, funerary offerings.'
  },
  { 
    name: 'The Eye of Horus', 
    civilization: 'Egyptian', 
    meaning: 'Healing, Protection, Royal Power', 
    materials: 'Gold, Lapis Lazuli, Obsidian', 
    purpose: 'Powerful amulet against evil, surgical symbol', 
    symbol: 'Sacred Vision, 6 Senses',
    practice: 'The wedjat was painted on the prows of boats to "see" danger ahead. Worn by the living for protection against the evil eye.',
    use: 'Amulets, jewelry, painted on coffins, temple walls, medical prescriptions, boat prows.'
  },
  { 
    name: 'The Djed Pillar', 
    civilization: 'Egyptian', 
    meaning: 'Stability, Osiris Spine, Strength', 
    materials: 'Gold, Lapis Lazuli, Green Jasper', 
    purpose: 'Strengthen the spine of the deceased for resurrection', 
    symbol: 'Tree of Life, Resurrection',
    practice: 'The djed pillar was raised during the "Raising of the Djed" ceremony, a ritual reenacting the resurrection of Osiris.',
    use: 'Amulets on mummies, temple architecture, festival ceremonies, tomb paintings.'
  },
  { 
    name: 'Broad Collar (Wesekh)', 
    civilization: 'Egyptian', 
    meaning: 'Divine Protection, Wealth, Status', 
    materials: 'Gold, Faience, Carnelian, Lapis', 
    purpose: 'Worn by nobility, depicted on gods, temple treasures', 
    symbol: 'Wealth in afterlife',
    practice: 'The wesekh collar was a sign of high status, often depicted on pharaohs and gods. Thousands of faience beads were strung together.',
    use: 'Royal regalia, temple offerings, burial goods, depictions in art.'
  },
  { 
    name: 'Menat Necklace', 
    civilization: 'Egyptian', 
    meaning: 'Divine Protection, Hathor\'s Blessing', 
    materials: 'Faience, Gold, Semi-precious stones', 
    purpose: 'Sacred to Hathor, used in rituals for protection and fertility', 
    symbol: 'Hathor, Fertility',
    practice: 'The menat was shaken during rituals to invoke Hathor\'s protective and joyful aspects.',
    use: 'Ritual instruments, temple offerings, protective amulets.'
  },
  { 
    name: 'Vulture Crown', 
    civilization: 'Egyptian', 
    meaning: 'Divine Motherhood, Protection, Nekhbet', 
    materials: 'Gold, Lapis Lazuli, Turquoise', 
    purpose: 'Worn by queens and goddesses as symbol of divine motherhood', 
    symbol: 'Protection, Motherhood',
    practice: 'The vulture crown was associated with the goddess Nekhbet, protector of Upper Egypt.',
    use: 'Royal regalia, depictions of goddesses, burial goods.'
  },
  { 
    name: 'Cartouche Pendant', 
    civilization: 'Egyptian', 
    meaning: 'Royal Name, Protection, Eternity', 
    materials: 'Gold, Lapis Lazuli, Carnelian', 
    purpose: 'Protected the royal name and ensured eternal life', 
    symbol: 'Eternity, Royal Name',
    practice: 'The cartouche oval enclosed a pharaoh\'s name, protecting it for eternity.',
    use: 'Royal pendants, temple inscriptions, sarcophagi, amulets.'
  },

  // Greek (5)
  { 
    name: 'Fillet (Headband)', 
    civilization: 'Greek', 
    meaning: 'Victory, Divine Favor', 
    materials: 'Gold, Silver, Fabric, Laurel Leaves', 
    purpose: 'Worn by athletes, heroes, and gods as a sign of victory', 
    symbol: 'Apollo, Athletic Victory',
    practice: 'Victorious athletes received a woolen fillet, later made of gold for special occasions.',
    use: 'Athletic crowns, religious ceremonies, depictions of gods, victory monuments.'
  },
  { 
    name: 'Intaglio Signet Ring', 
    civilization: 'Greek', 
    meaning: 'Identity, Authority, Family', 
    materials: 'Gold, Silver, Carnelian, Amethyst', 
    purpose: 'Seal documents, identify the wearer, family heirloom', 
    symbol: 'Family crest, Oath',
    practice: 'Each noble family had a unique intaglio design used to seal legal documents in wax.',
    use: 'Legal seals, personal identification, marriage contracts, military command.'
  },
  { 
    name: 'Laurel Wreath', 
    civilization: 'Greek', 
    meaning: 'Victory, Honor, Apollo', 
    materials: 'Gold, Laurel Leaves', 
    purpose: 'Crown for victors, rulers, and poets', 
    symbol: 'Apollo, Victory',
    practice: 'The laurel wreath was awarded at the Pythian Games in Apollo\'s honor.',
    use: 'Athletic crowns, military honors, imperial regalia, literary awards.'
  },
  { 
    name: 'Arm Ring', 
    civilization: 'Greek', 
    meaning: 'Strength, Valor, Heroism', 
    materials: 'Gold, Silver, Bronze', 
    purpose: 'Worn by warriors and heroes as a mark of valor', 
    symbol: 'Strength, Courage',
    practice: 'Arm rings were given as prizes for valor in battle.',
    use: 'Warrior rewards, religious offerings, depictions of heroes, status symbols.'
  },
  { 
    name: 'Gorgoneion', 
    civilization: 'Greek', 
    meaning: 'Protection, Averting Evil', 
    materials: 'Gold, Bronze, Gemstones', 
    purpose: 'Apotropaic amulet to ward off evil', 
    symbol: 'Protection, Medusa',
    practice: 'The Gorgon face was placed on shields, armor, and doorways to frighten away enemies.',
    use: 'Amulets, shield decorations, architectural details, jewelry.'
  },

  // Roman (4)
  { 
    name: 'Bullae', 
    civilization: 'Roman', 
    meaning: 'Protection, Status, Coming of Age', 
    materials: 'Gold, Leather, Wool', 
    purpose: 'Worn by children for protection, by magistrates for status', 
    symbol: 'Protection, Maturity',
    practice: 'Free-born Roman children wore a bulla from birth until they reached adulthood.',
    use: 'Child protection amulet, magistrate insignia, coming-of-age ceremonies.'
  },
  { 
    name: 'Fibula (Brooch)', 
    civilization: 'Roman', 
    meaning: 'Status, Fashion, Utility', 
    materials: 'Gold, Silver, Bronze, Gems', 
    purpose: 'Fasten clothing, display wealth and status', 
    symbol: 'Fashion, Status',
    practice: 'The fibula was essential for fastening togas and cloaks.',
    use: 'Clothing fasteners, status indicators, fashion accessories, military uniform components.'
  },
  { 
    name: 'Signet Ring (Roman)', 
    civilization: 'Roman', 
    meaning: 'Authority, Legacy, Family', 
    materials: 'Gold, Silver, Iron, Gemstones', 
    purpose: 'Seal official documents, mark ownership', 
    symbol: 'Authority, Legacy',
    practice: 'Roman citizens used signet rings to seal wills and legal documents.',
    use: 'Legal seals, personal identification, marriage contracts, military orders.'
  },
  { 
    name: 'Lunula Pendant', 
    civilization: 'Roman', 
    meaning: 'Moon Magic, Protection, Fertility', 
    materials: 'Gold, Silver', 
    purpose: 'Worn by women as a protective amulet', 
    symbol: 'Moon, Diana',
    practice: 'The crescent moon shape honored the goddess Diana and protected women during childbirth.',
    use: 'Women\'s amulets, fertility charms, burial goods.'
  },

  // Indian (4)
  { 
    name: 'Mangalsutra', 
    civilization: 'Indian', 
    meaning: 'Marriage Bond, Protection, Husband\'s Longevity', 
    materials: 'Gold, Black Beads, Diamonds, Rubies', 
    purpose: 'Worn by married women for protection of the husband', 
    symbol: 'Marriage, Union',
    practice: 'The husband ties the mangalsutra around the bride\'s neck during the wedding ceremony.',
    use: 'Marital symbol, daily wear for married women, family heirlooms.'
  },
  { 
    name: 'Nose Ring (Nath)', 
    civilization: 'Indian', 
    meaning: 'Purity, Marriage, Goddess Parvati', 
    materials: 'Gold, Pearls, Rubies, Diamonds', 
    purpose: 'Symbol of marriage, honor to the goddess Parvati', 
    symbol: 'Marriage, Fertility',
    practice: 'The left nostril is pierced for the wedding, as Ayurveda associates this side with female reproductive health.',
    use: 'Wedding adornment, daily wear, religious ceremonies, dance performances.'
  },
  { 
    name: 'Maang Tikka', 
    civilization: 'Indian', 
    meaning: 'Third Eye, Spiritual Power, Focus', 
    materials: 'Gold, Diamonds, Rubies, Pearls', 
    purpose: 'Worn on forehead, enhances spiritual power, protects the third eye', 
    symbol: 'Third Eye, Wisdom',
    practice: 'The maang tikka is worn at the center of the forehead, the location of the ajna chakra.',
    use: 'Wedding adornment, temple visits, dance performances, religious ceremonies.'
  },
  { 
    name: 'Bangles (Chudi)', 
    civilization: 'Indian', 
    meaning: 'Marriage, Prosperity, Protection', 
    materials: 'Gold, Glass, Ivory, Shell', 
    purpose: 'Symbol of marriage, bring good fortune', 
    symbol: 'Marriage, Fertility',
    practice: 'The sound of bangles is believed to ward off negative energy.',
    use: 'Marital symbols, daily adornment, ceremonial wear.'
  },

  // Chinese (4)
  { 
    name: 'Jade Bi Disc', 
    civilization: 'Chinese', 
    meaning: 'Heaven, Nobility, Eternity', 
    materials: 'Jade (Nephrite, Jadeite)', 
    purpose: 'Burial goods, ritual offerings, symbol of heaven', 
    symbol: 'Heaven, Sun, Circle of Life',
    practice: 'Bi discs were placed on the chest and back of the deceased to protect the body.',
    use: 'Burial goods, ritual offerings, status symbols, temple decorations.'
  },
  { 
    name: 'Jade Cong Tube', 
    civilization: 'Chinese', 
    meaning: 'Earth, Stability, Square of Earth', 
    materials: 'Jade (Nephrite, Jadeite)', 
    purpose: 'Burial goods, ritual offerings, symbol of earth', 
    symbol: 'Earth, Four Directions',
    practice: 'The cong represents the square shape of the earth, with the circular hole representing the axis between heaven and earth.',
    use: 'Burial goods, ritual offerings, status symbols, ancestor worship.'
  },
  { 
    name: 'Hairpin (Zan)', 
    civilization: 'Chinese', 
    meaning: 'Beauty, Status, Coming of Age', 
    materials: 'Gold, Jade, Pearls', 
    purpose: 'Hair ornament for noble women, signifies marital status', 
    symbol: 'Femininity, Status',
    practice: 'At age 15, a girl received her first hairpin in a coming-of-age ceremony.',
    use: 'Hair adornment, wedding accessories, status indicators, family heirlooms.'
  },
  { 
    name: 'Jade Pendant', 
    civilization: 'Chinese', 
    meaning: 'Protection, Virtue, Harmony', 
    materials: 'Jade', 
    purpose: 'Worn for protection and to cultivate virtue', 
    symbol: 'Virtue, Perfection',
    practice: 'Confucius praised jade for representing the five virtues: benevolence, wisdom, righteousness, courage, and purity.',
    use: 'Personal amulets, burial goods, status symbols.'
  },

  // Japanese (3)
  { 
    name: 'Netsuke', 
    civilization: 'Japanese', 
    meaning: 'Status, Utility, Artistry', 
    materials: 'Ivory, Wood, Amber, Coral', 
    purpose: 'Counterweight for carrying pouches on kimono sashes', 
    symbol: 'Status, Craftsmanship',
    practice: 'Elaborate netsuke demonstrated the owner\'s wealth and taste.',
    use: 'Functional clothing accessory, status symbol, artistic expression, collectible art.'
  },
  { 
    name: 'Kanzashi', 
    civilization: 'Japanese', 
    meaning: 'Beauty, Status, Seasonal Awareness', 
    materials: 'Gold, Silver, Coral, Jade, Tortoiseshell', 
    purpose: 'Hair ornament for women, signifies marital status and season', 
    symbol: 'Femininity, Seasons',
    practice: 'Different styles of kanzashi are worn for different seasons and occasions.',
    use: 'Hair adornment, wedding accessories, seasonal celebrations, formal occasions.'
  },
  { 
    name: 'Magatama', 
    civilization: 'Japanese', 
    meaning: 'Spirit Power, Protection, Soul', 
    materials: 'Jade, Agate, Jasper', 
    purpose: 'Ritual objects, imperial regalia', 
    symbol: 'Spirit, Soul',
    practice: 'Magatama were used in Shinto rituals and are part of the Japanese imperial regalia.',
    use: 'Ritual objects, imperial treasures, burial goods, amulets.'
  },

  // Mesoamerican (3)
  { 
    name: 'Jade Mask', 
    civilization: 'Mesoamerican', 
    meaning: 'Divine Identity, Royal Power, Afterlife', 
    materials: 'Jadeite, Obsidian, Shell, Pyrite', 
    purpose: 'Burial masks for royalty, depict the gods, ensure divine identity', 
    symbol: 'Gods, Royalty, Immortality',
    practice: 'The death mask of the Maya ruler Pakal is made of jadeite, depicting him as the Maize God reborn.',
    use: 'Burial masks, royal regalia, ritual offerings, temple deposits.'
  },
  { 
    name: 'Labret (Lip Plug)', 
    civilization: 'Mesoamerican', 
    meaning: 'Status, Nobility, Speech', 
    materials: 'Jade, Gold, Obsidian', 
    purpose: 'Worn by nobles and warriors, sign of high rank', 
    symbol: 'Status, Authority',
    practice: 'Larger labrets indicated higher status. Aztec nobles wore labrets of gold and jadeite.',
    use: 'Status symbols, warrior adornment, royal regalia, religious ceremonies.'
  },
  { 
    name: 'Ear Spools', 
    civilization: 'Mesoamerican', 
    meaning: 'Royalty, Status, Cosmic Connection', 
    materials: 'Jade, Gold, Wood, Shell', 
    purpose: 'Ear ornaments for nobility, symbol of cosmic connection', 
    symbol: 'Cosmos, Royalty',
    practice: 'Ear spools stretched the earlobes, a sign of nobility across Mesoamerica.',
    use: 'Royal adornment, status symbols, ritual objects.'
  },

  // Persian (2)
  { 
    name: 'Cylinder Seal', 
    civilization: 'Persian', 
    meaning: 'Authority, Ownership, Divine Favor', 
    materials: 'Lapis Lazuli, Carnelian, Gold, Silver', 
    purpose: 'Roll over clay to impress unique design, authenticate documents', 
    symbol: 'Authority, Divine Protection',
    practice: 'Cylinder seals were rolled over wet clay to create a continuous design for authenticating documents.',
    use: 'Document sealing, ownership marks, administrative records, religious offerings.'
  },
  { 
    name: 'Royal Armlet', 
    civilization: 'Persian', 
    meaning: 'Royalty, Power, Divine Right', 
    materials: 'Gold, Lapis Lazuli, Turquoise', 
    purpose: 'Worn by Persian kings and nobles as symbol of authority', 
    symbol: 'Royalty, Divine Favor',
    practice: 'Armlets worn on the upper arm by royalty, often featuring lion or ibex heads.',
    use: 'Royal regalia, status symbols, diplomatic gifts, temple offerings.'
  }
]

const civilizations = ['All', 'Egyptian', 'Greek', 'Roman', 'Indian', 'Chinese', 'Japanese', 'Mesoamerican', 'Persian']

export default function AmuletsJewelryPage() {
  const [selectedCivilization, setSelectedCivilization] = useState('All')

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
          <Crown size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Adornments</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Amulets & Jewelry</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover 33 sacred amulets and jewelry pieces from 9 ancient civilizations
        </p>
        <div className="flex justify-center gap-2 mt-2 flex-wrap">
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Egyptian: 8</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Greek: 5</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Roman: 4</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Indian: 4</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Chinese: 4</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Japanese: 3</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Mesoamerican: 3</span>
          <span className="px-2 py-0.5 bg-gold/20 rounded-full text-xs">Persian: 2</span>
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

      {/* Jewelry Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Crown size={24} />
          Sacred Adornments Across Civilizations ({filteredJewelry.length} pieces)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredJewelry.map((jewelry, index) => (
            <motion.div
              key={jewelry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
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

      {/* Summary by Civilization */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gold/10 rounded-lg p-6 border border-gold/30"
      >
        <h3 className="text-xl font-bold text-gold mb-3 text-center">33 Amulets & Jewelry by Civilization</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-sm">
          <div><span className="font-semibold text-egyptian-blue">Egyptian</span><p className="text-xs text-gray-600">8 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Greek</span><p className="text-xs text-gray-600">5 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Roman</span><p className="text-xs text-gray-600">4 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Indian</span><p className="text-xs text-gray-600">4 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Chinese</span><p className="text-xs text-gray-600">4 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Japanese</span><p className="text-xs text-gray-600">3 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Mesoamerican</span><p className="text-xs text-gray-600">3 pieces</p></div>
          <div><span className="font-semibold text-egyptian-blue">Persian</span><p className="text-xs text-gray-600">2 pieces</p></div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">Total: 33 sacred adornments from 8 civilizations</p>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-gray-700 italic text-sm">
          💡 <span className="font-semibold">Did you know?</span> The ankh is one of the most recognized symbols of ancient Egypt, 
          representing eternal life. Roman bullae were worn by children from birth until adulthood for protection, 
          and Japanese magatama are still part of the imperial regalia today!
        </p>
      </motion.div>
    </div>
  )
}