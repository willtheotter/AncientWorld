'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ScrollText, Scale, BookOpen, Users, Globe, 
  Code, Feather, Shield, Heart, Star, Crown,
  ChevronLeft, ChevronRight, Scroll, Library,
  Gavel, Award, FileText, GraduationCap,
  Building2, Landmark, Eye, Sparkles
} from 'lucide-react'

interface LegalCode {
  id: string
  name: string
  civilization: string
  region: string
  date: string
  icon: any
  color: string
  description: string
  keyPrinciples: string[]
  laws: string[]
  legacy: string
}

interface WisdomText {
  id: string
  name: string
  civilization: string
  date: string
  icon: any
  description: string
  themes: string[]
  quotes: string[]
  influence: string
}

interface CulturalTradition {
  id: string
  name: string
  civilization: string
  category: string
  description: string
  practices: string[]
  significance: string
}

const legalCodes: LegalCode[] = [
  {
    id: 'hammurabi',
    name: 'Code of Hammurabi',
    civilization: 'Babylonian',
    region: 'Mesopotamia (Iraq)',
    date: 'c. 1754 BCE',
    icon: Gavel,
    color: 'from-amber-600 to-orange-600',
    description: `The Code of Hammurabi is one of the oldest and best-preserved legal codes in history. Created by King Hammurabi of Babylon, it consists of 282 laws that governed daily life, trade, property, family, and criminal justice. The code was inscribed on a 2.25-meter stone stele and placed in a public location for all to see, establishing the principle that law should be known and accessible.`,
    keyPrinciples: [
      'Retributive justice ("eye for an eye")',
      'Class-based penalties (different for nobles, commoners, slaves)',
      'Written and public laws',
      'Presumption of innocence',
      'Evidence-based judgment'
    ],
    laws: [
      'Law 1: "If a man accuses another man of murder but cannot prove it, the accuser shall be put to death."',
      'Law 22: "If a man commits robbery and is caught, he shall be put to death."',
      'Law 196: "If a man puts out the eye of another man, his eye shall be put out."',
      'Law 218: "If a surgeon causes the death of a patient, his hands shall be cut off."',
      'Law 229: "If a builder builds a house that collapses and kills the owner, the builder shall be put to death."'
    ],
    legacy: 'The Code influenced later legal systems including Roman law, Islamic law, and European civil law. The stele is now in the Louvre Museum in Paris.'
  },
  {
    id: 'ur-nammu',
    name: 'Code of Ur-Nammu',
    civilization: 'Sumerian',
    region: 'Mesopotamia (Iraq)',
    date: 'c. 2100 BCE',
    icon: Scroll,
    color: 'from-yellow-600 to-amber-600',
    description: `The Code of Ur-Nammu is the oldest known surviving law code, predating Hammurabi by three centuries. It was created by King Ur-Nammu of Ur during the Sumerian Renaissance. The code established monetary fines rather than corporal punishment—a more progressive approach than later codes.`,
    keyPrinciples: [
      'Monetary compensation over physical punishment',
      'Protection for the poor and vulnerable',
      'Standardized weights and measures',
      'Fair treatment of slaves and workers',
      'Divine authority of the king to establish justice'
    ],
    laws: [
      'Law: "If a man commits a robbery, he shall be fined 25 shekels of silver."',
      'Law: "If a man cuts off the foot of another, he shall pay 10 shekels."',
      'Law: "If a man cuts off the nose of another with a copper knife, he shall pay two-thirds of a mina."',
      'Law: "If a slave escapes from the city and returns, he shall be returned and fed milk for one month."'
    ],
    legacy: 'The Code established the principle of monetary compensation and influenced all subsequent Mesopotamian legal codes.'
  },
  {
    id: 'egyptian-wisdom',
    name: 'Egyptian Wisdom Literature',
    civilization: 'Egyptian',
    region: 'Northeast Africa',
    date: 'c. 2500-1000 BCE',
    icon: Scroll,
    color: 'from-amber-600 to-orange-600',
    description: `Egyptian wisdom literature (Sebayt) is a genre of instructive texts teaching proper behavior, moral conduct, and practical wisdom. These "teachings" were attributed to famous sages and pharaohs, providing guidance on truth, justice, and living in harmony with Ma'at (cosmic order).`,
    keyPrinciples: [
      'Living according to Ma\'at (truth, balance, order)',
      'Humility and self-control',
      'Generosity to the poor',
      'Respect for elders and hierarchy',
      'Justice tempered with mercy'
    ],
    laws: [
      'The Instruction of Ptahhotep (c. 2375 BCE) - oldest complete book',
      '"Do not be proud of your knowledge, consult the ignorant as well as the wise."',
      '"Be not arrogant because of your might; take counsel with the ignorant as well as the wise."',
      '"If you are a leader, listen to the words of the petitioner. Do not reject his plea."'
    ],
    legacy: 'Egyptian wisdom texts influenced biblical proverbs, Greek philosophy, and Islamic literature.'
  },
  {
    id: 'roman-law',
    name: 'Roman Law',
    civilization: 'Roman',
    region: 'Mediterranean',
    date: 'c. 450 BCE - 530 CE',
    icon: Landmark,
    color: 'from-red-600 to-orange-600',
    description: `Roman law is the most influential legal system in Western history. It began with the Twelve Tables (451-450 BCE), which established equal legal rights for patricians and plebeians. Roman law developed over centuries, culminating in the Corpus Juris Civilis under Emperor Justinian (528-534 CE), which became the foundation of civil law in Europe.`,
    keyPrinciples: [
      'Equal treatment under the law',
      'Innocent until proven guilty',
      'Burden of proof on accuser',
      'Legal rights of citizens (right to appeal, fair trial)',
      'Natural law (ius naturale)'
    ],
    laws: [
      'Table I: "If a person is summoned to court, they must go."',
      'Table VIII: "Anyone who sings or composes a slanderous song shall be clubbed to death." (later modified)',
      'Table IX: "Provocation against a capital sentence is allowed." (right to appeal)',
      'Justinian Code: "The laws protect the innocent, punish the guilty, and maintain the common good."'
    ],
    legacy: 'Roman law forms the basis of civil law systems in continental Europe, Latin America, Scotland, and Quebec.'
  },
  {
    id: 'confucianism',
    name: 'Confucian Classics',
    civilization: 'Chinese',
    region: 'East Asia',
    date: 'c. 500-200 BCE',
    icon: GraduationCap,
    color: 'from-red-700 to-gold-600',
    description: `The Confucian Classics form the foundation of Chinese philosophy, government, and culture for over 2,000 years. They emphasize moral cultivation, social harmony, respect for authority, and educational achievement. These texts became the basis for China's civil service examination system.`,
    keyPrinciples: [
      'Ren (benevolence)',
      'Li (ritual propriety)',
      'Xiao (filial piety)',
      'Yi (righteousness)',
      'Junzi (virtuous person)'
    ],
    laws: [
      '"Do not do to others what you would not want done to yourself." (Golden Rule)',
      '"In a country well governed, poverty is something to be ashamed of. In a country badly governed, wealth is something to be ashamed of."',
      '"When you see a worthy person, endeavor to emulate them. When you see an unworthy person, examine your own character."'
    ],
    legacy: 'Confucianism shaped Chinese government, social structure, education, and ethics for over 2,000 years, and continues to influence East Asian culture.'
  },
  {
    id: 'maya-codices',
    name: 'Maya Codices',
    civilization: 'Maya',
    region: 'Mesoamerica',
    date: 'c. 600-1500 CE',
    icon: BookOpen,
    color: 'from-green-700 to-teal-600',
    description: `The Maya codices are folding books made of fig bark paper, containing hieroglyphic texts about astronomy, calendars, rituals, and divination. They represent the most advanced writing system in the pre-Columbian Americas. Only four codices survive today (Dresden, Madrid, Paris, and Grolier).`,
    keyPrinciples: [
      'Astronomical calculations',
      'Calendar systems (Tzolk\'in, Haab, Long Count)',
      'Ritual cycles and ceremonies',
      'Divination and prophecy',
      'Historical records'
    ],
    laws: [
      'Dresden Codex: Venue tables (Venus cycles)',
      'Dresden Codex: Eclipse tables',
      'Madrid Codex: Ritual and divination procedures',
      'Paris Codex: Katun prophecies',
      'Grolier Codex: Venus calendar'
    ],
    legacy: 'The codices preserve Maya astronomical knowledge and calendar systems, which are among the most accurate in the ancient world.'
  }
]

const wisdomTexts: WisdomText[] = [
  {
    id: 'ptahhotep',
    name: 'The Instruction of Ptahhotep',
    civilization: 'Egyptian',
    date: 'c. 2375 BCE',
    icon: Feather,
    description: `The oldest complete book in existence, this wisdom text was written by the vizier Ptahhotep for his son. It offers practical advice on how to live a virtuous and successful life, emphasizing humility, self-control, and justice.`,
    themes: ['Humility', 'Listening to others', 'Self-control under pressure', 'Respect for elders', 'Justice and fairness'],
    quotes: [
      '"Do not be proud of your knowledge, consult the ignorant as well as the wise."',
      '"If you are a leader, listen to the words of the petitioner. Do not reject his plea."',
      '"Be not arrogant because of your might; take counsel with the ignorant as well as the wise."'
    ],
    influence: 'Influenced biblical wisdom literature (Proverbs, Ecclesiastes) and Greek philosophy.'
  },
  {
    id: 'sinuhe',
    name: 'The Story of Sinuhe',
    civilization: 'Egyptian',
    date: 'c. 1875 BCE',
    icon: BookOpen,
    description: `Considered the masterpiece of ancient Egyptian literature, this tale of an official who flees Egypt into exile and eventually returns explores themes of identity, longing for home, and redemption.`,
    themes: ['Exile and displacement', 'Identity and belonging', 'Mercy and forgiveness', 'Patriotism', 'Redemption'],
    quotes: [
      '"I was fleeing in fear, my feet dragging, my heart beating fast."',
      '"I have been a stranger in a strange land. But I am an Egyptian."',
      '"The king heard my words and his heart was glad."'
    ],
    influence: 'Influenced later exile narratives and adventure stories.'
  },
  {
    id: 'shipwrecked',
    name: 'The Tale of the Shipwrecked Sailor',
    civilization: 'Egyptian',
    date: 'c. 2000 BCE',
    icon: BookOpen,
    description: `An adventure tale of a sailor shipwrecked on a magical island ruled by a giant serpent. The story explores themes of fate, divine providence, and the power of storytelling.`,
    themes: ['Human helplessness', 'Divine intervention', 'Faith and patience', 'The power of stories'],
    quotes: [
      '"The storm descended while we were at sea, and before we could reach land, the wind had risen to a howl."',
      '"Do not be afraid, little sailor, for the god has protected you."'
    ],
    influence: 'One of the earliest surviving adventure stories.'
  },
  {
    id: 'hammurabi',
    name: 'The Code of Hammurabi',
    civilization: 'Babylonian',
    date: 'c. 1754 BCE',
    icon: Gavel,
    description: `The most complete ancient law code, inscribed on a 2.25-meter stele. It established the principle that law should be public and accessible to all citizens.`,
    themes: ['Justice', 'Retribution', 'Class and hierarchy'],
    quotes: [
      '"To cause justice to prevail in the land, to destroy the wicked and the evil, that the strong might not oppress the weak."',
      '"An eye for an eye, a tooth for a tooth."'
    ],
    influence: 'Influenced all subsequent Mesopotamian legal codes.'
  }
]

const culturalTraditions: CulturalTradition[] = [
  {
    id: 'egyptian-law',
    name: 'Ancient Egyptian Legal System',
    civilization: 'Egyptian',
    category: 'Legal System',
    description: `Egyptian law was based on Ma'at—truth, balance, order, and justice. Courts were called "Kenbet" and consisted of local officials, priests, and elders. Women had significant legal rights, including property ownership and the right to divorce.`,
    practices: [
      'Town councils (kenbet) presided over local cases',
      'High courts (great kenbet) handled serious crimes and appeals',
      'Oracles consulted for difficult cases',
      'Written contracts required for property transactions',
      'Women could own property, initiate divorce, and serve on juries'
    ],
    significance: 'Egyptian law was unique in the ancient world for protecting rights of women and emphasizing restitution over punishment.'
  },
  {
    id: 'roman-family',
    name: 'Roman Family Law',
    civilization: 'Roman',
    category: 'Family Law',
    description: `Roman family law centered on the paterfamilias (male head of household) with absolute authority over his family. However, women had more freedom than in many ancient societies, and marriage laws evolved over time.`,
    practices: [
      'Paterfamilias had legal authority over children and grandchildren',
      'Two forms of marriage (cum manu and sine manu)',
      'Divorce allowed (in later periods)',
      'Women could own property separate from their husbands',
      'Adoption common for political and inheritance purposes'
    ],
    significance: 'Roman family law influenced Western family law, including concepts of custody, inheritance, and parental authority.'
  },
  {
    id: 'chinese-exams',
    name: 'Chinese Civil Service System',
    civilization: 'Chinese',
    category: 'Education & Government',
    description: `The Chinese civil service examination system (keju) was the dominant method of selecting government officials for over 2,000 years. Based on Confucian classics, it promoted meritocracy over hereditary privilege.`,
    practices: [
      'Local examinations (xian shi)',
      'Provincial examinations (xiang shi)',
      'Metropolitan examinations (hui shi)',
      'Palace examinations (dian shi)',
      'Study of Confucian classics required'
    ],
    significance: 'The exam system created a merit-based bureaucracy and remains influential in Chinese education and government.'
  }
]

export default function LawsTextsPage() {
  const [activeCode, setActiveCode] = useState(legalCodes[0])
  const [selectedWisdom, setSelectedWisdom] = useState<WisdomText | null>(null)
  const [activeTab, setActiveTab] = useState<'legal' | 'wisdom' | 'culture'>('legal')
  const codeIndex = legalCodes.findIndex(c => c.id === activeCode.id)

  const nextCode = () => {
    if (codeIndex < legalCodes.length - 1) {
      setActiveCode(legalCodes[codeIndex + 1])
    }
  }

  const prevCode = () => {
    if (codeIndex > 0) {
      setActiveCode(legalCodes[codeIndex - 1])
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
          <ScrollText size={24} />
          <span className="text-sm uppercase tracking-wider">Order & Knowledge</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Laws, Texts & Culture</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore ancient legal systems, wisdom literature, and cultural traditions from civilizations around the world
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => setActiveTab('legal')}
          className={`px-6 py-2 rounded-full transition-all ${
            activeTab === 'legal'
              ? 'bg-gold text-gray-900 font-semibold shadow-md'
              : 'bg-white/50 hover:bg-white/80 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <Gavel size={18} />
            <span>Legal Codes</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('wisdom')}
          className={`px-6 py-2 rounded-full transition-all ${
            activeTab === 'wisdom'
              ? 'bg-gold text-gray-900 font-semibold shadow-md'
              : 'bg-white/50 hover:bg-white/80 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            <span>Wisdom Literature</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('culture')}
          className={`px-6 py-2 rounded-full transition-all ${
            activeTab === 'culture'
              ? 'bg-gold text-gray-900 font-semibold shadow-md'
              : 'bg-white/50 hover:bg-white/80 text-gray-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <Users size={18} />
            <span>Cultural Traditions</span>
          </div>
        </button>
      </div>

      {/* Legal Codes Section */}
      {activeTab === 'legal' && (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
              <Scale size={24} className="text-gold" />
              Ancient Legal Codes
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevCode}
                disabled={codeIndex === 0}
                className={`p-2 rounded-full transition-all ${
                  codeIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCode}
                disabled={codeIndex === legalCodes.length - 1}
                className={`p-2 rounded-full transition-all ${
                  codeIndex < legalCodes.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCode.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className={`egyptian-card bg-gradient-to-r ${activeCode.color}/10`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${activeCode.color} text-white`}>
                  <activeCode.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-egyptian-blue">{activeCode.name}</h3>
                  <p className="text-sm text-gold">{activeCode.civilization} • {activeCode.date} • {activeCode.region}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{activeCode.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gold/20">
                <div>
                  <h4 className="font-semibold text-gold mb-2">Key Principles</h4>
                  <ul className="space-y-1">
                    {activeCode.keyPrinciples.map((principle) => (
                      <li key={principle} className="flex items-start gap-2 text-sm">
                        <span className="text-gold mt-1">•</span>
                        <span className="text-gray-700">{principle}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2">Example Laws</h4>
                  <ul className="space-y-1">
                    {activeCode.laws.slice(0, 3).map((law) => (
                      <li key={law} className="flex items-start gap-2 text-sm">
                        <span className="text-gold mt-1">•</span>
                        <span className="text-gray-700">{law}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gold/20">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-semibold text-gold">Legacy:</span> {activeCode.legacy}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {/* Wisdom Literature Section */}
      {activeTab === 'wisdom' && (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wisdomTexts.map((text, index) => {
              const Icon = text.icon
              return (
                <motion.div
                  key={text.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="egyptian-card cursor-pointer hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedWisdom(text)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <h3 className="text-md font-bold text-egyptian-blue">{text.name}</h3>
                  </div>
                  <p className="text-xs text-gold mb-1">{text.civilization} • {text.date}</p>
                  <p className="text-xs text-gray-600 line-clamp-3">{text.description}</p>
                  <div className="mt-2 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for excerpts →
                  </div>
                </motion.div>
              )
            })}
          </div>
        </>
      )}

      {/* Cultural Traditions Section */}
      {activeTab === 'culture' && (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            {culturalTraditions.map((tradition, index) => (
              <motion.div
                key={tradition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="egyptian-card"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <Building2 size={18} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-egyptian-blue">{tradition.name}</h3>
                </div>
                <p className="text-xs text-gold mb-2">{tradition.civilization} • {tradition.category}</p>
                <p className="text-sm text-gray-700 mb-3">{tradition.description}</p>
                <h4 className="font-semibold text-gold text-sm mb-1">Practices</h4>
                <ul className="space-y-1 mb-2">
                  {tradition.practices.slice(0, 3).map((practice) => (
                    <li key={practice} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-gold">•</span>
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic mt-2">{tradition.significance}</p>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Comparison Table (Legal Codes) */}
      {activeTab === 'legal' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="egyptian-card overflow-x-auto"
        >
          <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
            <FileText size={24} className="text-gold" />
            Legal Codes Comparison
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/30">
                <th className="text-left py-2 px-2 text-gold">Code</th>
                <th className="text-left py-2 px-2 text-gold">Civilization</th>
                <th className="text-left py-2 px-2 text-gold">Date</th>
                <th className="text-left py-2 px-2 text-gold">Key Principle</th>
               </tr>
            </thead>
            <tbody>
              {legalCodes.map((code) => (
                <tr key={code.id} className="border-b border-gold/20 hover:bg-white/20 transition-colors">
                  <td className="py-2 px-2 font-semibold text-egyptian-blue">{code.name}</td>
                  <td className="py-2 px-2 text-gray-600">{code.civilization}</td>
                  <td className="py-2 px-2 text-gray-600">{code.date}</td>
                  <td className="py-2 px-2 text-gray-600">{code.keyPrinciples[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {/* Wisdom Text Modal */}
      <AnimatePresence>
        {selectedWisdom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedWisdom(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-2xl w-full p-6 border-2 border-gold max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <selectedWisdom.icon size={24} className="text-gold" />
                  <h3 className="text-2xl font-bold text-gold">{selectedWisdom.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedWisdom(null)}
                  className="p-1 hover:bg-gold/20 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedWisdom.civilization}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedWisdom.date}</span>
              </div>
              <p className="text-gray-700 mb-4">{selectedWisdom.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Themes</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedWisdom.themes.map((theme) => (
                    <span key={theme} className="text-xs bg-gold/10 px-2 py-1 rounded">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-egyptian-blue mb-2">Selected Quotes</h4>
                <ul className="space-y-2">
                  {selectedWisdom.quotes.map((quote, i) => (
                    <li key={i} className="text-sm text-gray-700 italic border-l-2 border-gold pl-3 py-1">
                      "{quote}"
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-egyptian-blue mb-2">Influence</h4>
                <p className="text-sm text-gray-700">{selectedWisdom.influence}</p>
              </div>
              <button
                onClick={() => setSelectedWisdom(null)}
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
        <span className="text-gold font-semibold">📜 6 Legal Codes</span>
        <span className="mx-2">•</span>
        <span>📖 4 Wisdom Texts</span>
        <span className="mx-2">•</span>
        <span>🏛️ 3 Cultural Traditions</span>
        <span className="mx-2">•</span>
        <span>🌍 Global Coverage</span>
      </motion.div>
    </div>
  )
}