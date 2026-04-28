'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, FlaskConical, Scissors, Sparkles, Scroll, 
  Search, Leaf, Microscope, Pill, Activity, Brain,
  TreeDeciduous, Flower2, Droplet, Sun, Moon, Star,
  ChevronLeft, ChevronRight, Users, BookOpen, Globe
} from 'lucide-react'

interface Remedy {
  name: string
  uses: string
  preparation: string
  modernUse: string
}

interface Category {
  id: string
  name: string
  icon: any
  color: string
  description: string
  remedies: Remedy[]
}

interface MedicalTradition {
  id: string
  name: string
  region: string
  icon: any
  color: string
  description: string
  keyPrinciples: string[]
  treatments: string[]
  famousPractitioners: string[]
  texts: string[]
}

const categories: Category[] = [
  {
    id: 'herbal',
    name: 'Herbal Remedies',
    icon: Leaf,
    color: 'from-emerald-600 to-green-600',
    description: 'Natural healing from plants and herbs used across civilizations',
    remedies: [
      { name: 'Garlic', uses: 'Antibiotic, immune booster, heart health', preparation: 'Consumed raw or mixed with honey', modernUse: 'Still used for immune support' },
      { name: 'Onion', uses: 'Respiratory issues, infections, healing wounds', preparation: 'Crushed or boiled', modernUse: 'Known antimicrobial properties' },
      { name: 'Aloe Vera', uses: 'Skin conditions, burns, healing', preparation: 'Applied as gel', modernUse: 'Widely used in skincare' },
      { name: 'Frankincense', uses: 'Inflammation, respiratory, spiritual', preparation: 'Burned as incense or consumed', modernUse: 'Subject of modern research' },
      { name: 'Honey', uses: 'Wound healing, antibiotic, digestive', preparation: 'Applied directly or mixed', modernUse: 'Medical-grade honey used in hospitals' },
      { name: 'Willow Bark', uses: 'Pain relief, fever, inflammation', preparation: 'Chewed or brewed as tea', modernUse: 'Source of aspirin' }
    ]
  },
  {
    id: 'surgical',
    name: 'Surgical Techniques',
    icon: Scissors,
    color: 'from-blue-600 to-cyan-600',
    description: 'Advanced medical procedures from ancient physicians',
    remedies: [
      { name: 'Trepanation', uses: 'Cranial pressure relief, head trauma', preparation: 'Drilling hole in skull', modernUse: 'Precursor to modern neurosurgery' },
      { name: 'Bone Setting', uses: 'Fracture treatment, broken bones', preparation: 'Wooden splints and linen wraps', modernUse: 'Modern orthopedic techniques' },
      { name: 'Circumcision', uses: 'Ritual and hygiene', preparation: 'Surgical removal', modernUse: 'Still practiced today' },
      { name: 'Wound Suturing', uses: 'Closing wounds, promoting healing', preparation: 'Needle and linen thread', modernUse: 'Basic surgical technique' },
      { name: 'Cataract Surgery', uses: 'Restoring vision', preparation: 'Couching technique with needle', modernUse: 'Precursor to modern eye surgery' },
      { name: 'Amputation', uses: 'Removing infected limbs', preparation: 'Saw and cauterization', modernUse: 'Still a surgical necessity' }
    ]
  },
  {
    id: 'spiritual',
    name: 'Spiritual Healing',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-600',
    description: 'Magic, ritual, and divine intervention in healing',
    remedies: [
      { name: 'Amulets', uses: 'Protection, healing, luck', preparation: 'Carved stones and metals', modernUse: 'Symbolic in various cultures' },
      { name: 'Incantations', uses: 'Dispelling evil, invoking gods', preparation: 'Spoken during rituals', modernUse: 'Continued in spiritual practices' },
      { name: 'Temple Sleep', uses: 'Dream interpretation, divine healing', preparation: 'Sleeping in temple', modernUse: 'Similar to meditation retreats' },
      { name: 'Offerings', uses: 'Appeasing gods, healing requests', preparation: 'Food, drink, incense', modernUse: 'Present in modern faith healing' }
    ]
  }
]

const medicalPapyri = [
  {
    name: 'Edwin Smith Papyrus',
    date: '1600 BCE',
    origin: 'Egypt',
    content: 'Surgical treatise describing 48 cases of injuries',
    significance: 'First known medical text to use systematic diagnosis',
    imageIcon: Scroll
  },
  {
    name: 'Ebers Papyrus',
    date: '1550 BCE',
    origin: 'Egypt',
    content: '700 remedies for various ailments',
    significance: 'Most comprehensive ancient medical text',
    imageIcon: BookOpen
  },
  {
    name: 'Kahun Papyrus',
    date: '1825 BCE',
    origin: 'Egypt',
    content: 'Gynecological and veterinary texts',
    significance: 'Oldest known medical papyrus',
    imageIcon: Scroll
  },
  {
    name: 'London Medical Papyrus',
    date: '1350 BCE',
    origin: 'Egypt',
    content: 'Magical and medical remedies',
    significance: 'Demonstrates blend of medicine and magic',
    imageIcon: BookOpen
  }
]

const medicalTraditions: MedicalTradition[] = [
  {
    id: 'egyptian',
    name: 'Egyptian Medicine',
    region: 'Northeast Africa',
    icon: Sun,
    color: 'from-amber-600 to-orange-600',
    description: `Egyptian medicine was the most advanced of the ancient world, combining practical surgery, herbal remedies, and spiritual healing. Physicians specialized in specific body parts—some treated only the eyes, others the teeth, and some focused solely on the stomach. The Ebers Papyrus (1550 BCE) contains over 700 remedies for various ailments, while the Edwin Smith Papyrus (1600 BCE) is a surgical text describing 48 cases of injuries with systematic diagnosis and treatment.`,
    keyPrinciples: [
      'Channel theory (metu) - similar to meridians',
      'Diagnosis through observation and palpation',
      'Rational treatment combined with ritual',
      'Preventive medicine through hygiene'
    ],
    treatments: [
      'Herbal remedies (garlic, onion, aloe)',
      'Surgery (trepanation, bone setting)',
      'Magic spells and amulets',
      'Dietary prescriptions',
      'Bandaging and wound care'
    ],
    famousPractitioners: [
      'Imhotep (deified physician, c. 2650 BCE)',
      'Hesy-Ra (earliest known dentist)',
      'Peseshet (earliest known female physician)',
      'Irj (ophthalmologist specialist)'
    ],
    texts: ['Edwin Smith Papyrus', 'Ebers Papyrus', 'Kahun Papyrus', 'London Medical Papyrus']
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda',
    region: 'South Asia',
    icon: Sun,
    color: 'from-orange-600 to-red-600',
    description: `Ayurveda ("Science of Life") is a holistic healing system that originated in India over 3,000 years ago. It focuses on balancing three doshas (Vata, Pitta, Kapha) through diet, herbs, yoga, and lifestyle. Ayurveda views health as a harmony between body, mind, and spirit, with disease resulting from imbalances.`,
    keyPrinciples: [
      'Three doshas (Vata, Pitta, Kapha)',
      'Panchakarma (five purification treatments)',
      'Rasayana (rejuvenation therapy)',
      'Individualized constitution (prakriti)'
    ],
    treatments: [
      'Herbal medicines (over 600 herbs)',
      'Dietary guidelines (according to dosha)',
      'Oil massage (Abhyanga)',
      'Detoxification (Panchakarma)',
      'Meditation and yoga'
    ],
    famousPractitioners: [
      'Charaka (Charaka Samhita, c. 300 BCE)',
      'Sushruta (Sushruta Samhita, father of surgery)',
      'Vagbhata (Ashtanga Hridaya)'
    ],
    texts: ['Charaka Samhita', 'Sushruta Samhita', 'Ashtanga Hridaya']
  },
  {
    id: 'tcm',
    name: 'Traditional Chinese Medicine',
    region: 'East Asia',
    icon: Moon,
    color: 'from-red-700 to-gold-600',
    description: `Traditional Chinese Medicine (TCM) has been practiced for over 2,500 years, based on the concept of Qi (vital energy) flowing through meridians. TCM uses acupuncture, herbal medicine, massage (tui na), and dietary therapy to restore balance between Yin and Yang.`,
    keyPrinciples: [
      'Qi (vital energy) flows through meridians',
      'Yin-Yang balance',
      'Five elements (Wood, Fire, Earth, Metal, Water)',
      'Eight principles (hot/cold, interior/exterior, excess/deficiency, yin/yang)'
    ],
    treatments: [
      'Acupuncture (inserting needles at meridian points)',
      'Herbal formulas (over 500 herbs)',
      'Cupping therapy',
      'Moxibustion (burning mugwort)',
      'Tai Chi and Qigong'
    ],
    famousPractitioners: [
      'Huang Di (Yellow Emperor, legendary)',
      'Zhang Zhongjing (Shanghan Lun)',
      'Li Shizhen (Bencao Gangmu)'
    ],
    texts: ['Huangdi Neijing (Yellow Emperor\'s Canon)', 'Shanghan Lun', 'Bencao Gangmu']
  },
  {
    id: 'greek',
    name: 'Greek Medicine',
    region: 'Southern Europe',
    icon: Star,
    color: 'from-cyan-600 to-blue-600',
    description: `Greek medicine, pioneered by Hippocrates (the "Father of Medicine"), moved away from supernatural explanations toward natural causes of disease. The Hippocratic Oath established ethical standards for physicians. Galen's anatomical studies influenced medicine for 1,500 years.`,
    keyPrinciples: [
      'Four humors (blood, phlegm, black bile, yellow bile)',
      'Natural causes of disease (not supernatural)',
      'Clinical observation and documentation',
      'Importance of diet and environment'
    ],
    treatments: [
      'Bloodletting and cupping',
      'Herbal remedies',
      'Dietary prescriptions',
      'Exercise and bathing',
      'Surgical procedures'
    ],
    famousPractitioners: [
      'Hippocrates (c. 460-370 BCE, Hippocratic Oath)',
      'Galen (129-216 CE, anatomical studies)',
      'Dioscorides (De Materia Medica)'
    ],
    texts: ['Hippocratic Corpus', 'De Materia Medica', 'Galen\'s works']
  },
  {
    id: 'islamic-golden-age',
    name: 'Islamic Golden Age Medicine',
    region: 'Middle East & North Africa',
    icon: Star,
    color: 'from-emerald-600 to-teal-600',
    description: `During the Islamic Golden Age (8th-13th centuries), physicians built upon Greek and Indian knowledge, establishing hospitals, medical schools, and pharmacies. They advanced surgery, ophthalmology, and pharmacology, and emphasized empirical observation.`,
    keyPrinciples: [
      'Empirical observation and experimentation',
      'Hospital-based medicine',
      'Pharmacy as separate profession',
      'Medical ethics and patient rights'
    ],
    treatments: [
      'Surgical procedures (cataract surgery, cauterization)',
      'Herbal pharmacology',
      'Dietary therapy',
      'Hygiene and sanitation',
      'Mental health treatment'
    ],
    famousPractitioners: [
      'Ibn Sina (Avicenna, Canon of Medicine)',
      'Al-Razi (Rhazes, smallpox/measles distinction)',
      'Ibn al-Nafis (pulmonary circulation discovery)',
      'Al-Zahrawi (father of modern surgery)'
    ],
    texts: ['The Canon of Medicine', 'Kitab al-Hawi', 'Al-Tasrif']
  }
]

export default function MedicinePage() {
  const [activeCategory, setActiveCategory] = useState('herbal')
  const [selectedRemedy, setSelectedRemedy] = useState<any>(null)
  const [activeTradition, setActiveTradition] = useState(medicalTraditions[0])
  const traditionIndex = medicalTraditions.findIndex(t => t.id === activeTradition.id)

  const currentCategory = categories.find(c => c.id === activeCategory)
  const Icon = currentCategory?.icon

  const nextTradition = () => {
    if (traditionIndex < medicalTraditions.length - 1) {
      setActiveTradition(medicalTraditions[traditionIndex + 1])
    }
  }

  const prevTradition = () => {
    if (traditionIndex > 0) {
      setActiveTradition(medicalTraditions[traditionIndex - 1])
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
          <Heart size={24} />
          <span className="text-sm uppercase tracking-wider">Ancient Wisdom</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Medicine & Healing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the sophisticated medical practices of ancient civilizations from Egypt, India, China, Greece, and beyond
        </p>
      </motion.div>

      {/* Medical Traditions Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Globe size={24} className="text-gold" />
            Medical Traditions
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
              disabled={traditionIndex === medicalTraditions.length - 1}
              className={`p-2 rounded-full transition-all ${
                traditionIndex < medicalTraditions.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
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
              <activeTradition.icon size={28} className="text-gold" />
              <div>
                <h3 className="text-2xl font-bold text-egyptian-blue">{activeTradition.name}</h3>
                <p className="text-sm text-gold">{activeTradition.region}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{activeTradition.description}</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gold mb-2">Key Principles</h4>
                <ul className="space-y-1">
                  {activeTradition.keyPrinciples.map((principle) => (
                    <li key={principle} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Treatments</h4>
                <ul className="space-y-1">
                  {activeTradition.treatments.map((treatment) => (
                    <li key={treatment} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gold/20">
              <div>
                <h4 className="font-semibold text-gold mb-2">Famous Practitioners</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTradition.famousPractitioners.map((practitioner) => (
                    <span key={practitioner} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {practitioner}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Sacred Texts</h4>
                <div className="flex flex-wrap gap-2">
                  {activeTradition.texts.map((text) => (
                    <span key={text} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Category Navigation */}
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((cat) => {
          const CatIcon = cat.icon
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl transition-all ${
                activeCategory === cat.id
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : 'bg-white/50 hover:bg-white/80 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <CatIcon size={20} />
                <span className="font-semibold">{cat.name}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`egyptian-card bg-gradient-to-br ${currentCategory?.color}/10`}
        >
          <div className="flex items-center gap-3 mb-6">
            {Icon && <Icon size={32} className="text-gold" />}
            <div>
              <h2 className="text-2xl font-bold text-egyptian-blue">{currentCategory?.name}</h2>
              <p className="text-gray-600">{currentCategory?.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {currentCategory?.remedies.map((remedy, index) => (
              <motion.button
                key={remedy.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedRemedy(remedy)}
                className="bg-white/50 rounded-lg p-4 text-left hover:bg-white/70 transition-all text-center"
              >
                <h3 className="font-bold text-egyptian-blue mb-2">{remedy.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{remedy.uses}</p>
                <span className="text-xs text-gold">Click for details →</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Medical Papyri Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card"
      >
        <div className="flex items-center gap-3 mb-6">
          <Scroll size={24} className="text-gold" />
          <h2 className="text-2xl font-bold text-egyptian-blue">Ancient Medical Papyri</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {medicalPapyri.map((papyrus) => {
            const PapyrusIcon = papyrus.imageIcon
            return (
              <div key={papyrus.name} className="bg-white/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PapyrusIcon size={20} className="text-gold" />
                  <h3 className="font-bold text-gold">{papyrus.name}</h3>
                  <span className="text-xs text-gray-500">{papyrus.date}</span>
                  <span className="text-xs bg-gold/20 px-2 py-0.5 rounded">{papyrus.origin}</span>
                </div>
                <p className="text-sm text-gray-700 mb-2">{papyrus.content}</p>
                <p className="text-xs text-egyptian-blue">{papyrus.significance}</p>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Brain size={20} className="text-gold" />
          <span className="font-semibold">Did You Know?</span>
        </div>
        <p className="text-gray-700 text-sm">
          💡 Ancient Egyptian physicians specialized in different areas — some treated only the eyes, others the teeth, 
          and some focused solely on the stomach! The Edwin Smith Papyrus describes the brain, meninges, and cerebrospinal fluid 
          — centuries before Western medicine. Ayurvedic surgeons performed cataract surgery and rhinoplasty (nose reconstruction) 
          over 2,000 years ago. Traditional Chinese Medicine identified diabetes and prescribed insulin-rich foods in the 3rd century CE. 
          Islamic physicians established the first hospitals with separate wards for different diseases and required licensing exams for doctors.
        </p>
      </motion.div>

      {/* Remedy Detail Modal */}
      <AnimatePresence>
        {selectedRemedy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] p-4"
            onClick={() => setSelectedRemedy(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-papyrus rounded-xl max-w-md w-full p-6 border-2 border-gold"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gold mb-4">{selectedRemedy.name}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-egyptian-blue">Uses:</span>
                  <p className="text-gray-700">{selectedRemedy.uses}</p>
                </div>
                <div>
                  <span className="font-semibold text-egyptian-blue">Preparation:</span>
                  <p className="text-gray-700">{selectedRemedy.preparation}</p>
                </div>
                <div>
                  <span className="font-semibold text-egyptian-blue">Modern Connection:</span>
                  <p className="text-gray-700">{selectedRemedy.modernUse}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedRemedy(null)}
                className="mt-6 w-full py-2 bg-gold text-white rounded-lg hover:bg-gold/80"
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
        transition={{ delay: 0.6 }}
        className="text-center text-xs text-gray-500 border-t border-gold/20 pt-6"
      >
        <span className="text-gold font-semibold">🌿 5 Medical Traditions</span>
        <span className="mx-2">•</span>
        <span>📜 4 Ancient Medical Papyri</span>
        <span className="mx-2">•</span>
        <span>🏥 15+ Healing Remedies</span>
        <span className="mx-2">•</span>
        <span>👨‍⚕️ 12+ Famous Physicians</span>
      </motion.div>
    </div>
  )
}