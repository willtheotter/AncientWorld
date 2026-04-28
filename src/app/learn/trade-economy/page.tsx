'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Ship, Globe, Landmark, Coins, TrendingUp, 
  MapPin, Wheat, Gem, Wine, ShoppingCart, 
  ChevronLeft, ChevronRight, Carrot, Diamond,
  Anchor, Compass, Scroll, BookOpen, Star,
  DollarSign, Handshake, Factory, Users
} from 'lucide-react'

interface TradeRoute {
  id: string
  name: string
  region: string
  period: string
  description: string
  goods: string[]
  keyPorts: string[]
  impact: string
  icon: any
  color: string
}

interface Currency {
  id: string
  name: string
  civilization: string
  period: string
  material: string
  description: string
  features: string[]
  value: string
}

interface EconomicStructure {
  id: string
  name: string
  civilization: string
  period: string
  description: string
  features: string[]
  legacy: string
}

const tradeRoutes: TradeRoute[] = [
  {
    id: 'silk-road',
    name: 'Silk Road',
    region: 'Asia to Mediterranean',
    period: 'c. 130 BCE - 1450 CE',
    description: `The Silk Road was the world's most famous ancient trade route, connecting China to the Mediterranean. It facilitated the exchange of goods, technologies, religions, and cultures across Asia for over 1,500 years. The route was named for the lucrative silk trade, but also carried spices, textiles, precious metals, and ideas.`,
    goods: ['Silk', 'Spices', 'Porcelain', 'Glassware', 'Gold', 'Silver', 'Ivory', 'Tea', 'Jade', 'Horses'],
    keyPorts: ['Chang\'an (Xi\'an)', 'Samarkand', 'Bukhara', 'Baghdad', 'Antioch', 'Constantinople'],
    impact: 'Spread of Buddhism from India to China and Central Asia; transmission of papermaking, gunpowder, and compass from China to the West; cultural exchange between East and West',
    icon: MapPin,
    color: 'from-red-700 to-gold-600'
  },
  {
    id: 'incense-route',
    name: 'Incense Route',
    region: 'Southern Arabia to Mediterranean',
    period: 'c. 1000 BCE - 300 CE',
    description: `The Incense Route was a network of caravan trails that transported frankincense and myrrh from southern Arabia (modern Yemen and Oman) to the Mediterranean. These aromatic resins were highly valued for religious rituals, medicine, and perfumes throughout the ancient world.`,
    goods: ['Frankincense', 'Myrrh', 'Spices', 'Gold', 'Ivory', 'Precious stones', 'Textiles', 'Perfumes'],
    keyPorts: ['Shabwa', 'Marib', 'Qana (Yemen)', 'Petra (Jordan)', 'Gaza', 'Alexandria'],
    impact: 'Made the kingdoms of southern Arabia wealthy; connected Arabia to Egypt, Greece, and Rome; contributed to the rise of Petra as a trading hub',
    icon: MapPin,
    color: 'from-amber-600 to-orange-600'
  },
  {
    id: 'spice-route',
    name: 'Spice Route',
    region: 'Southeast Asia to Europe',
    period: 'c. 2000 BCE - 1500 CE',
    description: `The Spice Route was a maritime network connecting the Spice Islands (Maluku Islands) of Indonesia to India, Arabia, and Europe. Spices like cinnamon, pepper, cloves, and nutmeg were worth their weight in gold, driving exploration and colonization for millennia.`,
    goods: ['Cinnamon', 'Black Pepper', 'Cloves', 'Nutmeg', 'Cardamom', 'Ginger', 'Turmeric', 'Silk', 'Porcelain'],
    keyPorts: ['Maluku Islands', 'Malacca', 'Calicut', 'Hormuz', 'Aden', 'Alexandria', 'Venice'],
    impact: 'Drove European Age of Discovery (Columbus, Vasco da Gama, Magellan); made Venice and Genoa wealthy; spread Indian and Chinese cultures to Southeast Asia',
    icon: Ship,
    color: 'from-teal-600 to-cyan-600'
  },
  {
    id: 'trans-saharan',
    name: 'Trans-Saharan Trade Route',
    region: 'North Africa to West Africa',
    period: 'c. 300 - 1600 CE',
    description: `The Trans-Saharan trade route connected Mediterranean North Africa to the gold-rich kingdoms of West Africa (Ghana, Mali, Songhai). Gold from West Africa was traded for salt from the Sahara, as well as textiles, horses, and luxury goods.`,
    goods: ['Gold', 'Salt', 'Ivory', 'Slaves', 'Textiles', 'Copper', 'Kola nuts', 'Horses', 'Glass beads'],
    keyPorts: ['Timbuktu', 'Gao', 'Djenne', 'Sijilmasa', 'Ghadames', 'Tripoli', 'Cairo'],
    impact: 'Made the empires of Ghana, Mali, and Songhai wealthy; spread Islam across West Africa; created Timbuktu as a center of learning',
    icon: MapPin,
    color: 'from-yellow-600 to-amber-600'
  },
  {
    id: 'roman-roads',
    name: 'Roman Road Network',
    region: 'Roman Empire',
    period: 'c. 300 BCE - 400 CE',
    description: `The Roman road network was the most advanced transportation system of the ancient world, spanning over 400,000 kilometers of roads, including 80,500 kilometers of paved stone roads. It connected the entire Roman Empire, facilitating trade, military movement, and communication.`,
    goods: ['Grain', 'Olive oil', 'Wine', 'Pottery', 'Glassware', 'Marble', 'Gold', 'Silver', 'Slaves', 'Textiles'],
    keyPorts: ['Rome', 'Ostia', 'Pompeii', 'Carthage', 'Alexandria', 'Ephesus', 'Antioch', 'Londinium', 'Constantinople'],
    impact: 'Symbol of Roman engineering; facilitated the spread of Christianity; unified the Roman Empire economically and culturally',
    icon: Landmark,
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'maritime-jade',
    name: 'Maritime Jade Route',
    region: 'Southeast Asia to East Asia',
    period: 'c. 2000 BCE - 500 CE',
    description: `The Maritime Jade Route connected Taiwan, the Philippines, Vietnam, Malaysia, Indonesia, and southern China through the trade of jade (nephrite). This was one of the earliest maritime trade networks in the world, predating the Silk Road by over 1,000 years.`,
    goods: ['Jade (nephrite)', 'Gold', 'Pearls', 'Coral', 'Spices', 'Bird feathers', 'Resin', 'Sea shells'],
    keyPorts: ['Taiwan', 'Luzon (Philippines)', 'Palawan', 'Borneo', 'Vietnam', 'Southern China'],
    impact: 'Early long-distance maritime trade; evidence of sophisticated seafaring technology; spread of artistic styles and technologies across Southeast Asia',
    icon: Ship,
    color: 'from-cyan-600 to-blue-600'
  }
]

const currencies: Currency[] = [
  {
    id: 'lydian',
    name: 'Lydian Electrum Coins',
    civilization: 'Lydian',
    period: 'c. 600-550 BCE',
    material: 'Electrum (natural gold-silver alloy)',
    description: `The Lydians were the first civilization to use standardized metal coins as currency. Stamped with a lion's head, these electrum coins were the world's first government-issued currency, revolutionizing trade by providing a reliable medium of exchange.`,
    features: [
      'Lion head design (symbol of Lydian kings)',
      'Weight standard (1/3 stater)',
      'Government guarantee of authenticity',
      'Eliminated weighing bullion for each transaction'
    ],
    value: '1 electrum stater = 1 month\'s soldier pay'
  },
  {
    id: 'athenian-owl',
    name: 'Athenian Owl Tetradrachm',
    civilization: 'Greek (Athenian)',
    period: 'c. 510-38 BCE',
    material: 'Silver',
    description: `The Athenian "Owl" tetradrachm was the most widely used international currency in the ancient world. Depicting Athena on the obverse and her owl on the reverse, it was accepted across the Mediterranean for over 500 years.`,
    features: [
      'Athena head (Corinthian helmet)',
      'Owl with olive branch (symbol of Athens)',
      'ΑΘΕ inscription (of the Athenians)',
      'High silver purity (95-98%)',
      'Standard weight (17.2 grams)'
    ],
    value: '1 tetradrachm = 4 drachmae = day\'s wages for skilled labor'
  },
  {
    id: 'gold-stater',
    name: 'Gold Stater of Alexander',
    civilization: 'Greek/Macedonian',
    period: 'c. 336-300 BCE',
    material: 'Gold',
    description: `Alexander the Great's gold staters became the first truly international currency, circulating from Greece to India. Depicting Athena on the obverse and Nike (Victory) on the reverse, they spread Greek culture throughout the conquered Persian Empire.`,
    features: [
      'Athena head (Corinthian helmet)',
      'Nike standing, holding wreath and stylis',
      'Name ΑΛΕΞΑΝΔΡΟΥ (of Alexander)',
      'High gold purity (99%)'
    ],
    value: '1 gold stater = 20 silver drachmae'
  },
  {
    id: 'roman-denarius',
    name: 'Roman Denarius',
    civilization: 'Roman',
    period: 'c. 211 BCE - 240 CE',
    material: 'Silver (later debased with bronze)',
    description: `The denarius was the standard Roman silver coin for over 400 years, serving as the backbone of the Roman economy. It featured portraits of Roman emperors, making it a tool of imperial propaganda.`,
    features: [
      'Emperor portrait (propaganda tool)',
      'Reverse with gods, victories, or military scenes',
      'Weight standard (4.5g initially, later reduced)',
      'Inscriptions (imperial titles)'
    ],
    value: '1 denarius = 16 asses (bronze) = daily soldier pay'
  },
  {
    id: 'chinese-cash',
    name: 'Chinese Cash Coins',
    civilization: 'Chinese',
    period: 'c. 350 BCE - 1912 CE',
    material: 'Bronze, brass, iron',
    description: `Chinese cash coins were round with square holes, designed to be strung together. They were the world's longest-running currency system, remaining in use for over 2,000 years.`,
    features: [
      'Round shape with square hole (heaven and earth)',
      'Struck on a sprue (cast multiples)',
      'Imperial reign marks (top-bottom-right-left)',
      'Strung in strings of 1,000 coins'
    ],
    value: '1 string (1,000 cash) = 1 tael of silver'
  }
]

const economicStructures: EconomicStructure[] = [
  {
    id: 'egyptian',
    name: 'Egyptian Redistribution Economy',
    civilization: 'Egyptian',
    period: 'c. 3100-30 BCE',
    description: `Ancient Egypt operated a centralized redistribution economy. The pharaoh collected taxes in grain and goods, stored them in state granaries and treasuries, and redistributed them to officials, priests, and workers. This system enabled the construction of the pyramids and state-funded projects.`,
    features: [
      'State ownership of land (pharaoh as ultimate owner)',
      'Taxation in kind (grain, livestock, labor)',
      'State granaries and storehouses',
      'Payment in food, beer, and textiles',
      'Temple economies as major employers'
    ],
    legacy: 'Influenced centralized economic planning in later civilizations'
  },
  {
    id: 'roman',
    name: 'Roman Market Economy',
    civilization: 'Roman',
    period: 'c. 300 BCE - 400 CE',
    description: `The Roman economy was a sophisticated market system with widespread trade, private property rights, and a complex financial sector. It included banks, loans, investments, and even joint-stock companies.`,
    features: [
      'Private property rights',
      'Legal contracts and business structures',
      'Banking and credit systems',
      'Currency standardization (denarius)',
      'Professional associations (collegia)'
    ],
    legacy: 'Foundation of Western capitalism; influenced medieval and modern economics'
  },
  {
    id: 'indian',
    name: 'Gupta Agrarian Economy',
    civilization: 'Indian (Gupta)',
    period: 'c. 320-550 CE',
    description: `The Gupta Empire maintained a prosperous agrarian economy based on land grants to brahmins and officials. Trade flourished along the Silk Road and Indian Ocean routes, bringing gold and luxury goods from Rome and China.`,
    features: [
      'Agrarian base (rice, wheat, cotton)',
      'Land grants (agrahara) as tax-free endowments',
      'Guild system (shreni) for crafts and trade',
      'Indian Ocean trade network',
      'Gold coinage (dinara)'
    ],
    legacy: 'Spread of Indian culture to Southeast Asia; golden age of Indian civilization'
  },
  {
    id: 'inca',
    name: 'Inca Command Economy',
    civilization: 'Inca',
    period: 'c. 1200-1572 CE',
    description: `The Inca Empire operated a command economy with no currency or markets. The state controlled all production and distribution through the mit'a labor tax system, with goods stored in massive storehouses (qollqa).`,
    features: [
      'No currency (barter and state distribution)',
      'Mit\'a labor tax (mandatory public service)',
      'State storehouses (qollqa) for food and goods',
      'Road network (40,000 km) for distribution',
      'Quipu record-keeping (knotted strings)'
    ],
    legacy: 'Demonstrated viability of non-market economies; influenced later socialist planning'
  }
]

export default function TradeEconomyPage() {
  const [activeRoute, setActiveRoute] = useState(tradeRoutes[0])
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(null)
  const routeIndex = tradeRoutes.findIndex(r => r.id === activeRoute.id)

  const nextRoute = () => {
    if (routeIndex < tradeRoutes.length - 1) {
      setActiveRoute(tradeRoutes[routeIndex + 1])
    }
  }

  const prevRoute = () => {
    if (routeIndex > 0) {
      setActiveRoute(tradeRoutes[routeIndex - 1])
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Ship size={24} />
          <span className="text-sm uppercase tracking-wider">Ancient Commerce</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Trade & Economy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore ancient trade networks, currency systems, and economic structures from around the world
        </p>
      </motion.div>

      {/* Trade Routes Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Globe size={24} className="text-gold" />
            Ancient Trade Routes
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevRoute}
              disabled={routeIndex === 0}
              className={`p-2 rounded-full transition-all ${
                routeIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextRoute}
              disabled={routeIndex === tradeRoutes.length - 1}
              className={`p-2 rounded-full transition-all ${
                routeIndex < tradeRoutes.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoute.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`egyptian-card bg-gradient-to-r ${activeRoute.color}/10`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${activeRoute.color} text-white`}>
                <activeRoute.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-egyptian-blue">{activeRoute.name}</h3>
                <p className="text-sm text-gold">{activeRoute.period} • {activeRoute.region}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{activeRoute.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gold mb-2 flex items-center gap-1">
                  <Wheat size={16} />
                  Key Goods
                </h4>
                <div className="flex flex-wrap gap-1">
                  {activeRoute.goods.slice(0, 6).map((good) => (
                    <span key={good} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {good}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2 flex items-center gap-1">
                  <MapPin size={16} />
                  Key Ports/Cities
                </h4>
                <div className="flex flex-wrap gap-1">
                  {activeRoute.keyPorts.slice(0, 6).map((port) => (
                    <span key={port} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {port}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/20">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold text-gold">Historical Impact:</span> {activeRoute.impact}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ancient Currencies Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Coins size={24} className="text-gold" />
          Ancient Currencies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currencies.map((currency, index) => (
            <motion.div
              key={currency.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="egyptian-card cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedCurrency(currency)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Coins size={18} className="text-gold" />
                </div>
                <h3 className="text-md font-bold text-egyptian-blue">{currency.name}</h3>
              </div>
              <p className="text-xs text-gold mb-1">{currency.civilization} • {currency.period}</p>
              <p className="text-xs text-gray-600 mb-1">Material: {currency.material}</p>
              <p className="text-sm text-gray-700 line-clamp-2">{currency.description}</p>
              <div className="mt-2 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Click for details →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Economic Structures */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <TrendingUp size={24} className="text-gold" />
          Economic Structures
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {economicStructures.map((structure, index) => (
            <motion.div
              key={structure.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card"
            >
              <h3 className="text-xl font-bold text-gold mb-1">{structure.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{structure.civilization} • {structure.period}</p>
              <p className="text-sm text-gray-700 mb-3">{structure.description}</p>
              <div className="mb-3">
                <span className="font-semibold text-gold text-sm">Key Features</span>
                <ul className="mt-1 space-y-1">
                  {structure.features.map((feature) => (
                    <li key={feature} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-gold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-500 italic">{structure.legacy}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trade Routes Summary Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card overflow-x-auto"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <ShoppingCart size={24} className="text-gold" />
          Trade Routes Comparison
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold/30">
              <th className="text-left py-2 px-2 text-gold">Route</th>
              <th className="text-left py-2 px-2 text-gold">Period</th>
              <th className="text-left py-2 px-2 text-gold">Key Goods</th>
              <th className="text-left py-2 px-2 text-gold">Major Impact</th>
             </tr>
          </thead>
          <tbody>
            {tradeRoutes.map((route) => (
              <tr key={route.id} className="border-b border-gold/20 hover:bg-white/20 transition-colors">
                <td className="py-2 px-2 font-semibold text-egyptian-blue">{route.name}</td>
                <td className="py-2 px-2 text-gray-600">{route.period}</td>
                <td className="py-2 px-2 text-gray-600">{route.goods.slice(0, 2).join(', ')}...</td>
                <td className="py-2 px-2 text-gray-600">{route.impact.split(';')[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Currency Detail Modal */}
      <AnimatePresence>
        {selectedCurrency && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedCurrency(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-md w-full p-6 border-2 border-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gold mb-2">{selectedCurrency.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedCurrency.civilization}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedCurrency.period}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedCurrency.material}</span>
              </div>
              <p className="text-gray-700 mb-4">{selectedCurrency.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Features</h4>
                <ul className="space-y-1">
                  {selectedCurrency.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-gold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Value:</span> {selectedCurrency.value}
              </p>
              <button
                onClick={() => setSelectedCurrency(null)}
                className="mt-6 w-full py-2 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xs text-gray-500 border-t border-gold/20 pt-6"
      >
        <span className="text-gold font-semibold">6 Ancient Trade Routes</span>
        <span className="mx-2">•</span>
        <span>5 Ancient Currencies</span>
        <span className="mx-2">•</span>
        <span>4 Economic Systems</span>
        <span className="mx-2">•</span>
        <span>Global Coverage</span>
      </motion.div>
    </div>
  )
}