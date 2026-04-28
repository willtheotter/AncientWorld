'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Feather, BookOpen, Users, Globe, Star, Sun, Moon, 
  Crown, Shield, Heart, Zap, Droplet, Leaf, TreePine,
  ChevronLeft, ChevronRight, Scroll, Circle, Church,
  Library, Flame, Wind, Sparkles, Target, Compass
} from 'lucide-react'

interface ReligiousTradition {
  id: string
  name: string
  region: string
  type: string
  icon: any
  color: string
  description: string
  coreBeliefs: string[]
  sacredTexts: string[]
  practices: string[]
  symbols: string[]
  keyFigures: string[]
  influence: string
}

interface Philosopher {
  name: string
  tradition: string
  era: string
  region: string
  keyIdeas: string[]
  works: string[]
  influence: string
}

const traditions: ReligiousTradition[] = [
  {
    id: 'egyptian',
    name: 'Ancient Egyptian Religion',
    region: 'Northeast Africa',
    type: 'Polytheistic',
    icon: Sun,
    color: 'from-amber-600 to-orange-600',
    description: `Ancient Egyptian religion was a complex system of polytheistic beliefs and rituals that formed an integral part of ancient Egyptian society. It centered on the Egyptians' interaction with many deities believed to be present in and in control of the world. The religion had its roots in Egypt's prehistory and lasted for more than 3,000 years.`,
    coreBeliefs: [
      'Ma\'at (truth, balance, order, harmony)',
      'Life after death and judgment of the soul',
      'Divine kingship (pharaoh as living god)',
      'Multiple gods governing natural forces'
    ],
    sacredTexts: [
      'Pyramid Texts',
      'Coffin Texts',
      'Book of the Dead',
      'Book of Gates',
      'Amduat'
    ],
    practices: [
      'Temple rituals and offerings',
      'Mummification and funerary rites',
      'Oracular consultation',
      'Festivals and processions',
      'Personal prayer and votive offerings'
    ],
    symbols: [
      'Ankh (life)',
      'Djed pillar (stability)',
      'Eye of Horus (protection)',
      'Scarab (rebirth)',
      'Feather of Ma\'at (truth)'
    ],
    keyFigures: [
      'Ra (sun god)',
      'Osiris (afterlife)',
      'Isis (magic, motherhood)',
      'Horus (kingship)',
      'Thoth (wisdom)',
      'Anubis (embalming)'
    ],
    influence: 'Egyptian religious concepts influenced Greek, Roman, and later Gnostic traditions. The idea of divine judgment and afterlife profoundly impacted Western religious thought.'
  },
  {
    id: 'zoroastrianism',
    name: 'Zoroastrianism',
    region: 'Persia (Iran)',
    type: 'Monotheistic/Dualistic',
    icon: Flame,
    color: 'from-yellow-600 to-amber-600',
    description: `Zoroastrianism is one of the world's oldest continuously practiced religions, founded by the prophet Zoroaster (Zarathustra) in ancient Persia. It centers on the worship of Ahura Mazda, the supreme deity representing wisdom, light, and goodness, who is in cosmic conflict with Angra Mainyu, the spirit of evil and darkness.`,
    coreBeliefs: [
      'One supreme god (Ahura Mazda)',
      'Cosmic struggle between good and evil',
      'Free will and moral responsibility',
      'Judgment after death based on deeds',
      'Resurrection and renewal of the world'
    ],
    sacredTexts: [
      'Avesta',
      'Gathas (hymns of Zoroaster)',
      'Yasna',
      'Vendidad',
      'Visperad'
    ],
    practices: [
      'Fire worship in temples',
      'Prayer five times daily',
      'Navjote (initiation ceremony)',
      'Funerary rites (Towers of Silence)',
      'Seasonal festivals'
    ],
    symbols: [
      'Faravahar (winged symbol)',
      'Fire (purity, divine light)',
      'Sacred girdle (kusti)',
      'Sudreh (sacred shirt)'
    ],
    keyFigures: [
      'Zoroaster (prophet)',
      'Ahura Mazda (supreme god)',
      'Angra Mainyu (evil spirit)',
      'Cyrus the Great (patron)',
      'Darius I (royal patron)'
    ],
    influence: 'Zoroastrian concepts of heaven, hell, resurrection, final judgment, and messianic salvation influenced Judaism, Christianity, and Islam.'
  },
  {
    id: 'hinduism',
    name: 'Hinduism',
    region: 'South Asia',
    type: 'Polytheistic/Henotheistic',
    icon: Circle,
    color: 'from-orange-600 to-red-600',
    description: `Hinduism is the world's oldest living religion, with roots dating back to the Indus Valley Civilization (c. 2500 BCE). It is a diverse system of thought encompassing monotheism, polytheism, panentheism, and atheism. Hinduism emphasizes dharma (righteous living), karma (action and consequence), samsara (cycle of rebirth), and moksha (liberation).`,
    coreBeliefs: [
      'Dharma (righteous duty)',
      'Karma (cause and effect)',
      'Samsara (cycle of rebirth)',
      'Moksha (liberation from rebirth)',
      'Atman (eternal self) and Brahman (ultimate reality)'
    ],
    sacredTexts: [
      'Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda)',
      'Upanishads',
      'Bhagavad Gita',
      'Ramayana',
      'Mahabharata',
      'Puranas'
    ],
    practices: [
      'Puja (worship) in temples and home',
      'Yoga and meditation',
      'Pilgrimage to sacred sites',
      'Festivals (Diwali, Holi, Navaratri)',
      'Cremation funerary rites'
    ],
    symbols: [
      'Aum (Om) - primordial sound',
      'Swastika (auspiciousness)',
      'Lotus (purity, creation)',
      'Trishula (trident of Shiva)',
      'Lingam (Shiva)'
    ],
    keyFigures: [
      'Brahma (creator)',
      'Vishnu (preserver)',
      'Shiva (destroyer)',
      'Devi (goddess)',
      'Krishna (divine avatar)',
      'Rama (ideal king)'
    ],
    influence: 'Hindu concepts of karma, yoga, and meditation have spread worldwide. The caste system shaped South Asian society for millennia.'
  },
  {
    id: 'buddhism',
    name: 'Buddhism',
    region: 'South & East Asia',
    type: 'Non-theistic',
    icon: TreePine,
    color: 'from-green-600 to-teal-600',
    description: `Buddhism was founded by Siddhartha Gautama (the Buddha) in the 5th century BCE in India. It focuses on the Four Noble Truths and the Eightfold Path as the way to end suffering (dukkha) and achieve nirvana (liberation from the cycle of rebirth). Buddhism emphasizes mindfulness, compassion, and non-attachment.`,
    coreBeliefs: [
      'Four Noble Truths',
      'Eightfold Path',
      'Non-attachment and impermanence (anicca)',
      'No permanent self (anatta)',
      'Compassion (karuna) for all beings',
      'Karma and rebirth'
    ],
    sacredTexts: [
      'Tripitaka (Pali Canon)',
      'Dhammapada',
      'Sutras (Mahayana)',
      'Tibetan Book of the Dead',
      'Heart Sutra',
      'Lotus Sutra'
    ],
    practices: [
      'Meditation (samadhi, vipassana)',
      'Mindfulness (sati)',
      'Monasticism',
      'Bowing and chanting',
      'Offerings to monks and temples'
    ],
    symbols: [
      'Dharma wheel (eight spokes)',
      'Bodhi tree (enlightenment)',
      'Lotus flower (purity)',
      'Buddha statue (meditation pose)',
      'Prayer flags (Tibetan)'
    ],
    keyFigures: [
      'Siddhartha Gautama (the Buddha)',
      'Dalai Lama (Tibetan Buddhism)',
      'Bodhidharma (Zen founder)',
      'Nagarjuna (Mahayana philosopher)',
      'Thich Nhat Hanh (mindfulness teacher)'
    ],
    influence: 'Buddhism spread throughout Asia and is now a global religion with millions of followers. Mindfulness practices have been adopted in Western psychology and medicine.'
  },
  {
    id: 'confucianism',
    name: 'Confucianism',
    region: 'East Asia',
    type: 'Philosophical/Ethical',
    icon: Crown,
    color: 'from-yellow-600 to-amber-600',
    description: `Confucianism is a system of ethical and philosophical teachings developed by Confucius (Kong Qiu) in 6th-5th century BCE China. It emphasizes personal and governmental morality, correctness of social relationships, justice, and sincerity. Confucianism became the state ideology of imperial China and shaped East Asian civilization.`,
    coreBeliefs: [
      'Ren (benevolence, humanity)',
      'Li (ritual propriety, etiquette)',
      'Xiao (filial piety)',
      'Yi (righteousness)',
      'Zhong (loyalty)',
      'Junzi (virtuous person)'
    ],
    sacredTexts: [
      'Analects (Lunyu)',
      'Five Classics (Wujing)',
      'Book of Documents',
      'Book of Poetry',
      'Book of Changes (I Ching)',
      'Spring and Autumn Annals'
    ],
    practices: [
      'Ancestor veneration',
      'Ritual ceremonies',
      'Civil service examinations',
      'Filial piety practices',
      'Self-cultivation and learning'
    ],
    symbols: [
      'Chinese character for "ren" (benevolence)',
      'Work of Confucius',
      'Scholars\' robes',
      'Temple of Confucius architecture'
    ],
    keyFigures: [
      'Confucius (Kong Qiu)',
      'Mencius (Mengzi)',
      'Xunzi',
      'Zhu Xi (Neo-Confucianism)',
      'Wang Yangming'
    ],
    influence: 'Confucianism shaped the social structure, education system, and government of China, Korea, Japan, and Vietnam for over 2,000 years.'
  },
  {
    id: 'taoism',
    name: 'Taoism',
    region: 'East Asia',
    type: 'Philosophical/Religious',
    icon: Wind,
    color: 'from-cyan-600 to-blue-600',
    description: `Taoism is a philosophical and religious tradition that emphasizes living in harmony with the Tao ("the Way"), the fundamental principle underlying the universe. It originated in China with the text Tao Te Ching by Laozi. Taoism values spontaneity, simplicity, and non-action (wu-wei).`,
    coreBeliefs: [
      'Tao (the Way) as ultimate reality',
      'Wu-wei (non-action, effortless action)',
      'Ziran (naturalness, spontaneity)',
      'Balance of Yin and Yang',
      'Immortality and alchemy',
      'Simplicity and humility'
    ],
    sacredTexts: [
      'Tao Te Ching (Daodejing)',
      'Zhuangzi',
      'I Ching (Book of Changes)',
      'Liezi',
      'Taoist Canon (Daozang)'
    ],
    practices: [
      'Qigong (energy cultivation)',
      'Tai Chi (meditative movement)',
      'Meditation and breathing exercises',
      'Feng Shui (harmonious placement)',
      'Alchemy (internal and external)',
      'Temple worship and festivals'
    ],
    symbols: [
      'Yin-Yang (Taijitu)',
      'Eight Trigrams (Bagua)',
      'Dragon and phoenix',
      'Three Treasures (Jing, Qi, Shen)'
    ],
    keyFigures: [
      'Laozi (author of Tao Te Ching)',
      'Zhuangzi (philosopher)',
      'Zhang Daoling (founder of religious Taoism)',
      'Lie Yukou (Liezi)'
    ],
    influence: 'Taoism influenced Chinese medicine, martial arts, landscape painting, and poetry. Its concepts of nature and simplicity resonated globally.'
  },
  {
    id: 'judaism',
    name: 'Judaism',
    region: 'Levant',
    type: 'Monotheistic',
    icon: Star,
    color: 'from-blue-600 to-indigo-600',
    description: `Judaism is the oldest monotheistic religion, originating with the covenant between God and Abraham around 2000 BCE. It is based on the Torah (the first five books of the Hebrew Bible) and emphasizes ethical monotheism, law (Halakha), and the special relationship between God and the Jewish people.`,
    coreBeliefs: [
      'One God (Yahweh)',
      'Covenant between God and Israel',
      'Torah as divine law',
      'Chosen people (to follow God\'s laws)',
      'Messianic redemption',
      'Tikkun olam (repairing the world)'
    ],
    sacredTexts: [
      'Torah (Pentateuch)',
      'Tanakh (Hebrew Bible)',
      'Talmud (oral law commentary)',
      'Mishnah',
      'Midrash',
      'Zohar (Kabbalah)'
    ],
    practices: [
      'Circumcision (Brit Milah)',
      'Sabbath observance (Shabbat)',
      'Kashrut (dietary laws)',
      'Prayer three times daily',
      'Passover, Yom Kippur, Rosh Hashanah',
      'Bar/Bat Mitzvah'
    ],
    symbols: [
      'Star of David (Magen David)',
      'Menorah (seven-branched lamp)',
      'Shofar (ram\'s horn)',
      'Mezuzah (doorpost scroll)',
      'Kippah (skullcap)'
    ],
    keyFigures: [
      'Abraham (patriarch)',
      'Moses (lawgiver)',
      'David (king)',
      'Isaiah (prophet)',
      'Hillel (sage)',
      'Maimonides (philosopher)'
    ],
    influence: 'Judaism gave rise to Christianity and Islam and introduced ethical monotheism to the world. Jewish law and ethics shaped Western civilization.'
  }
]

const philosophers: Philosopher[] = [
  {
    name: 'Socrates',
    tradition: 'Greek Philosophy',
    era: '469-399 BCE',
    region: 'Athens, Greece',
    keyIdeas: [
      'Socratic method (dialectical questioning)',
      '"Know thyself"',
      'Virtue is knowledge',
      'Unexamined life is not worth living',
      'Ethical intellectualism'
    ],
    works: ['No written works (taught through dialogue)', 'Recorded by Plato and Xenophon'],
    influence: 'Father of Western philosophy. His method of questioning influenced education, ethics, and critical thinking.'
  },
  {
    name: 'Plato',
    tradition: 'Greek Philosophy',
    era: '428-348 BCE',
    region: 'Athens, Greece',
    keyIdeas: [
      'Theory of Forms (Ideas)',
      'Allegory of the Cave',
      'Philosopher-king ideal',
      'Tripartite soul (reason, spirit, appetite)',
      'Justice as harmony'
    ],
    works: ['Republic', 'Symposium', 'Phaedo', 'Apology', 'Timaeus'],
    influence: 'Founded the Academy, first Western university. His ideas shaped Christianity, Renaissance art, and political theory.'
  },
  {
    name: 'Aristotle',
    tradition: 'Greek Philosophy',
    era: '384-322 BCE',
    region: 'Stagira, Greece',
    keyIdeas: [
      'Four causes (material, formal, efficient, final)',
      'Golden mean (virtue as balance)',
      'Hylomorphism (matter and form)',
      'Nicomachean Ethics (eudaimonia)',
      'Logic (syllogism)'
    ],
    works: ['Nicomachean Ethics', 'Politics', 'Metaphysics', 'Poetics', 'Categories'],
    influence: 'Founded the Lyceum. His logic dominated Western thought for 2,000 years. Influenced Islamic philosophy and medieval scholasticism.'
  },
  {
    name: 'Confucius',
    tradition: 'Chinese Philosophy',
    era: '551-479 BCE',
    region: 'Lu, China',
    keyIdeas: [
      'Ren (benevolence)',
      'Li (ritual propriety)',
      'Xiao (filial piety)',
      'Junzi (virtuous person)',
      'Rectification of names'
    ],
    works: ['Analects (recorded by disciples)'],
    influence: 'Shaped East Asian civilization for 2,500 years. Ethical system became state ideology of imperial China.'
  },
  {
    name: 'Laozi',
    tradition: 'Chinese Philosophy',
    era: '6th century BCE',
    region: 'Zhou, China',
    keyIdeas: [
      'Tao (the Way)',
      'Wu-wei (non-action)',
      'Ziran (naturalness)',
      'Yu wei er wu wei (action without striving)',
      'Simplicity and humility'
    ],
    works: ['Tao Te Ching (Daodejing)'],
    influence: 'Founder of Taoism. Influenced Chinese medicine, martial arts, and environmental ethics. Concepts of spontaneity and nature resonated globally.'
  },
  {
    name: 'Avicenna (Ibn Sina)',
    tradition: 'Islamic Philosophy',
    era: '980-1037 CE',
    region: 'Persia (Iran)',
    keyIdeas: [
      'Existence-essence distinction',
      'Proof of the Necessary Existent',
      'Floating man thought experiment',
      'Rational soul',
      'Causality and contingency'
    ],
    works: ['The Canon of Medicine', 'The Book of Healing', 'The Salvation'],
    influence: 'His philosophy dominated Islamic and European thought for centuries. Integrated Aristotelianism with Islamic theology.'
  },
  {
    name: 'Immanuel Kant',
    tradition: 'Western Philosophy',
    era: '1724-1804 CE',
    region: 'Königsberg, Prussia',
    keyIdeas: [
      'Categorical imperative',
      'Copernican revolution in philosophy',
      'Phenomena vs. noumena',
      'Sapere aude (dare to know)',
      'Enlightenment as emergence from self-imposed immaturity'
    ],
    works: ['Critique of Pure Reason', 'Groundwork of the Metaphysics of Morals', 'Critique of Practical Reason'],
    influence: 'Revolutionized Western philosophy. Shaped ethics, metaphysics, epistemology, and political philosophy.'
  }
]

export default function ReligionPhilosophyPage() {
  const [activeTradition, setActiveTradition] = useState(traditions[0])
  const [selectedPhilosopher, setSelectedPhilosopher] = useState<Philosopher | null>(null)
  const traditionIndex = traditions.findIndex(t => t.id === activeTradition.id)

  const nextTradition = () => {
    if (traditionIndex < traditions.length - 1) {
      setActiveTradition(traditions[traditionIndex + 1])
    }
  }

  const prevTradition = () => {
    if (traditionIndex > 0) {
      setActiveTradition(traditions[traditionIndex - 1])
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
          <Feather size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Wisdom</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Religion & Philosophy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the spiritual beliefs, sacred texts, and philosophical traditions from civilizations around the world
        </p>
      </motion.div>

      {/* Religious Traditions Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Globe size={24} className="text-gold" />
            Religious Traditions
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevTradition}
              disabled={traditionIndex === 0}
              className={`p-2 rounded-full transition-all ${
                traditionIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTradition}
              disabled={traditionIndex === traditions.length - 1}
              className={`p-2 rounded-full transition-all ${
                traditionIndex < traditions.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTradition.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`egyptian-card bg-gradient-to-r ${activeTradition.color}/10`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${activeTradition.color} text-white`}>
                <activeTradition.icon size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-egyptian-blue">{activeTradition.name}</h3>
                  <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">{activeTradition.type}</span>
                </div>
                <p className="text-sm text-gold">{activeTradition.region}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{activeTradition.description}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gold mb-2">Core Beliefs</h4>
                <ul className="space-y-1">
                  {activeTradition.coreBeliefs.map((belief) => (
                    <li key={belief} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{belief}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Sacred Texts</h4>
                <ul className="space-y-1">
                  {activeTradition.sacredTexts.map((text) => (
                    <li key={text} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-gold/20">
              <div>
                <h4 className="font-semibold text-gold mb-2">Practices</h4>
                <div className="flex flex-wrap gap-1">
                  {activeTradition.practices.map((practice) => (
                    <span key={practice} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {practice}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Symbols</h4>
                <div className="flex flex-wrap gap-1">
                  {activeTradition.symbols.map((symbol) => (
                    <span key={symbol} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Key Figures</h4>
                <div className="flex flex-wrap gap-1">
                  {activeTradition.keyFigures.map((figure) => (
                    <span key={figure} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {figure}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gold/20">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold text-gold">Influence:</span> {activeTradition.influence}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Great Philosophers Section */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Library size={24} className="text-gold" />
          Great Philosophers & Thinkers
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophers.map((philosopher, index) => (
            <motion.div
              key={philosopher.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="egyptian-card cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedPhilosopher(philosopher)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Users size={18} className="text-gold" />
                </div>
                <h3 className="text-lg font-bold text-egyptian-blue">{philosopher.name}</h3>
              </div>
              <p className="text-xs text-gold mb-1">{philosopher.tradition}</p>
              <p className="text-xs text-gray-500 mb-2">{philosopher.era} • {philosopher.region}</p>
              <p className="text-xs text-gray-600 line-clamp-2">
                {philosopher.keyIdeas.slice(0, 2).join(' • ')}
              </p>
              <div className="mt-2 text-gold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Click for details →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card overflow-x-auto"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Target size={24} className="text-gold" />
          Religious Traditions Comparison
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold/30">
              <th className="text-left py-2 px-2 text-gold">Tradition</th>
              <th className="text-left py-2 px-2 text-gold">Type</th>
              <th className="text-left py-2 px-2 text-gold">Region</th>
              <th className="text-left py-2 px-2 text-gold">Core Focus</th>
            </tr>
          </thead>
          <tbody>
            {traditions.map((tradition) => (
              <tr key={tradition.id} className="border-b border-gold/20 hover:bg-white/20 transition-colors">
                <td className="py-2 px-2 font-semibold text-egyptian-blue">{tradition.name}</td>
                <td className="py-2 px-2 text-gray-600">{tradition.type}</td>
                <td className="py-2 px-2 text-gray-600">{tradition.region}</td>
                <td className="py-2 px-2 text-gray-600">{tradition.coreBeliefs[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Footer Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-xs text-gray-500 border-t border-gold/20 pt-6"
      >
        <span className="text-gold font-semibold">🕊️ 7 Religious Traditions</span>
        <span className="mx-2">•</span>
        <span>📜 30+ Sacred Texts</span>
        <span className="mx-2">•</span>
        <span>🧘 7 Great Philosophers</span>
        <span className="mx-2">•</span>
        <span>🌍 Global Coverage</span>
      </motion.div>

      {/* Philosopher Detail Modal */}
      <AnimatePresence>
        {selectedPhilosopher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedPhilosopher(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-2xl w-full p-6 border-2 border-gold max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gold">{selectedPhilosopher.name}</h3>
                <button
                  onClick={() => setSelectedPhilosopher(null)}
                  className="p-1 hover:bg-gold/20 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedPhilosopher.tradition}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedPhilosopher.era}</span>
                <span className="text-xs bg-gold/20 px-2 py-1 rounded">{selectedPhilosopher.region}</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-egyptian-blue mb-2">Key Ideas</h4>
                  <ul className="space-y-1">
                    {selectedPhilosopher.keyIdeas.map((idea) => (
                      <li key={idea} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-egyptian-blue mb-2">Major Works</h4>
                  <ul className="space-y-1">
                    {selectedPhilosopher.works.map((work) => (
                      <li key={work} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-gold">•</span>
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-egyptian-blue mb-2">Influence</h4>
                  <p className="text-sm text-gray-700">{selectedPhilosopher.influence}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPhilosopher(null)}
                className="mt-6 w-full py-2 bg-gold text-white rounded-lg hover:bg-gold/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}