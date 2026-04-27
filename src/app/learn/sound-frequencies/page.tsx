'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Waves, Volume2, Music, GitBranch, Activity, Heart, Sun, 
  Moon, Star, Zap, Battery, Droplet, Flame, Leaf, Shield, 
  Eye, Crown, Headphones, Sparkles, Infinity, Circle
} from 'lucide-react'

interface Frequency {
  hz: string
  name: string
  color: string
  effect: string
  healing: string
  egyptianUse: string
  chakra: string
  deity: string
  symbol: string
  frequencyMeaning: string
  soundPillars: string[]
}

const frequencies: Frequency[] = [
  {
    hz: '111 Hz',
    name: 'Intuition',
    color: 'from-purple-600 to-pink-600',
    effect: 'Intuition, inner wisdom, third eye activation',
    healing: 'Activates the pineal gland, enhances intuition, connects to higher self. This frequency helps access inner wisdom and spiritual guidance.',
    egyptianUse: 'Used by high priests for oracle consultations and dream interpretation. Priests would chant at 111 Hz before entering the sacred dream temples to enhance prophetic visions.',
    chakra: 'Third Eye (Ajna)',
    deity: 'Thoth',
    symbol: 'Inner vision, Divine wisdom',
    frequencyMeaning: 'Angel number frequency, spiritual awakening',
    soundPillars: ['Oracle consultations', 'Dream temple rituals', 'Pineal gland activation']
  },
  {
    hz: '174 Hz',
    name: 'Foundation',
    color: 'from-red-600 to-orange-600',
    effect: 'Pain relief, grounding, security',
    healing: 'Reduces physical and energetic pain, creates security, relieves tension. This frequency acts as a natural anesthetic, helping to release pain at the source.',
    egyptianUse: 'Used in healing temple chants and surgery preparation. Priests would chant at 174 Hz to prepare patients for operations, inducing a pain-relieving trance state.',
    chakra: 'Root (Muladhara)',
    deity: 'Sekhmet',
    symbol: 'Grounding, Earth connection',
    frequencyMeaning: 'Natural anesthetic, pain relieving',
    soundPillars: ['Pain relief surgery preparation', 'Anesthetic induction trance', 'Physical tension release']
  },
  {
    hz: '285 Hz',
    name: 'Healing',
    color: 'from-orange-600 to-yellow-600',
    effect: 'Tissue healing, immune system',
    healing: 'Heals tissues, rejuvenates energy fields, supports cellular repair. This frequency signals the body to repair damaged tissue and organs.',
    egyptianUse: 'Used in after-surgery recovery and wound healing. Priests chanted 285 Hz over wounds to accelerate healing, often combined with herbal poultices.',
    chakra: 'Sacral (Svadhisthana)',
    deity: 'Imhotep',
    symbol: 'Cellular regeneration, Healing light',
    frequencyMeaning: 'Tissue regeneration, cellular repair',
    soundPillars: ['Post-surgical recovery', 'Wound healing acceleration', 'Cellular regeneration']
  },
  {
    hz: '396 Hz',
    name: 'Liberation',
    color: 'from-yellow-600 to-amber-600',
    effect: 'Releasing fear, grief, guilt',
    healing: 'Releases negative patterns, emotional blockages, liberates from fear and guilt. This frequency helps cleanse the subconscious of limiting beliefs.',
    egyptianUse: 'Used in purification rituals and death preparation. Priests chanted 396 Hz during embalming to release the soul from earthly attachments, preparing it for the journey through the Duat.',
    chakra: 'Root (Muladhara)',
    deity: 'Anubis',
    symbol: 'Emotional liberation, Soul release',
    frequencyMeaning: 'Emotional detoxification, grief release',
    soundPillars: ['Death preparation purification', 'Emotional blockage release', 'Soul liberation rituals']
  },
  {
    hz: '417 Hz',
    name: 'Sacral',
    color: 'from-amber-600 to-orange-600',
    effect: 'Creativity, emotional release',
    healing: 'Clears trauma, facilitates change, activates creativity. This frequency helps remove negative energy stored in the subconscious.',
    egyptianUse: 'Used in creativity rituals and life transition ceremonies. Priests chanted 417 Hz to help individuals embrace change and new beginnings, often during initiation rites.',
    chakra: 'Sacral (Svadhisthana)',
    deity: 'Bastet',
    symbol: 'Creativity flux, Emotional cleansing',
    frequencyMeaning: 'Trauma clearing, creative activation',
    soundPillars: ['Initiation rites', 'Trauma clearing ceremonies', 'Creative block removal']
  },
  {
    hz: '432 Hz',
    name: 'Universal',
    color: 'from-green-600 to-teal-600',
    effect: 'Nature connection, universal harmony',
    healing: 'Mathematical resonance with nature, deep peace, heart coherence. This frequency mathematically resonates with the golden ratio (phi) and the patterns of nature.',
    egyptianUse: 'Used in temple music and sacred ceremonies. Egyptian priests tuned their instruments to 432 Hz to align temple vibrations with cosmic harmony, creating sacred geometry in sound.',
    chakra: 'Heart (Anahata)',
    deity: 'Hathor',
    symbol: 'Cosmic harmony, Sacred geometry',
    frequencyMeaning: 'Universal resonance, golden ratio',
    soundPillars: ['Temple resonance tuning', 'Sacred geometry sound', 'Heart coherence practice']
  },
  {
    hz: '528 Hz',
    name: 'Miracle',
    color: 'from-teal-600 to-cyan-600',
    effect: 'DNA repair, transformation, love',
    healing: 'Repairs DNA, increases life energy, miracles. Known as the "Love Frequency," 528 Hz is used by biochemists for DNA repair.',
    egyptianUse: 'Used in high healing rituals and sun temple music. The 528 Hz frequency was sung in the inner sanctum of sun temples, believed to be the frequency of the sun god Ra, activating the body\'s natural ability to heal and regenerate.',
    chakra: 'Heart (Anahata)',
    deity: 'Ra',
    symbol: 'Divine love, Solar regeneration',
    frequencyMeaning: 'DNA repair, love frequency',
    soundPillars: ['Sun temple inner sanctum', 'High healing rituals', 'DNA activation ceremonies']
  },
  {
    hz: '639 Hz',
    name: 'Heart',
    color: 'from-cyan-600 to-blue-600',
    effect: 'Relationships, connection, harmony',
    healing: 'Heals relationships, fosters love, enhances communication. This frequency helps balance the heart chakra and improve interpersonal connections.',
    egyptianUse: 'Used in community ceremonies and relationship healing. Priests chanted 639 Hz during marriage ceremonies and community gatherings to foster harmony and understanding.',
    chakra: 'Heart (Anahata)',
    deity: 'Isis',
    symbol: 'Divine connection, Relationship harmony',
    frequencyMeaning: 'Relationship healing, heart coherence',
    soundPillars: ['Marriage ceremony chanting', 'Community gathering harmony', 'Relationship healing']
  },
  {
    hz: '741 Hz',
    name: 'Expression',
    color: 'from-blue-600 to-indigo-600',
    effect: 'Creativity, self-expression, problem-solving',
    healing: 'Expression, toxin cleansing, self-expression. This frequency awakens intuition and promotes creative problem-solving.',
    egyptianUse: 'Used in art creation and truth ceremonies. Priests chanted 741 Hz in the House of Life (Per Ankh) to inspire scribes and artists, and during truth ceremonies before the Hall of Maat.',
    chakra: 'Throat (Vishuddha)',
    deity: 'Thoth',
    symbol: 'Creative expression, Sacred art',
    frequencyMeaning: 'Self-expression, intuitive awakening',
    soundPillars: ['House of Life ceremonies', 'Truth declaration rituals', 'Artistic inspiration']
  },
  {
    hz: '777 Hz',
    name: 'Ascension',
    color: 'from-fuchsia-600 to-purple-600',
    effect: 'Spiritual ascension, angelic connection',
    healing: 'Connects to angelic realms, accelerates spiritual evolution, opens higher chakras. This frequency is associated with divine intervention and spiritual protection.',
    egyptianUse: 'Used during pharaoh coronation ceremonies and high spiritual initiations. The 777 Hz frequency was chanted only in the most sacred inner sanctums, believed to open a portal between the earthly and divine realms.',
    chakra: 'Crown (Sahasrara)',
    deity: 'Horus',
    symbol: 'Angelic connection, Sacred ascension',
    frequencyMeaning: 'Spiritual ascension, mystical union',
    soundPillars: ['Pharaoh coronation', 'Divine portal opening', 'Higher chakra activation']
  },
  {
    hz: '852 Hz',
    name: 'Awakening',
    color: 'from-indigo-600 to-purple-600',
    effect: 'Spiritual order, intuition, ego dissolution',
    healing: 'Raises spiritual awareness, clears mind, awakens intuition. This frequency helps one see through illusions and connect with higher consciousness.',
    egyptianUse: 'Used in priest training and high initiations. The 852 Hz frequency was reserved for high priests and initiates of the Mystery Schools, chanted during the "awakening" ceremony that allowed priests to perceive higher dimensions.',
    chakra: 'Third Eye (Ajna)',
    deity: 'Ma\'at',
    symbol: 'Spiritual order, Illusion piercing',
    frequencyMeaning: 'Spiritual awakening, ego dissolution',
    soundPillars: ['Mystery School initiations', 'Priest awakening ceremonies', 'Higher dimension perception']
  },
  {
    hz: '888 Hz',
    name: 'Abundance',
    color: 'from-gold-600 to-amber-600',
    effect: 'Abundance, prosperity, manifestation',
    healing: 'Attracts abundance, opens energy channels for prosperity, aligns with infinite flow. This frequency resonates with the energy of financial and spiritual abundance.',
    egyptianUse: 'Used in temple treasury ceremonies and harvest festivals. Priests chanted 888 Hz during the Festival of Min (god of fertility and abundance) to bless the harvest and ensure prosperity for the coming year.',
    chakra: 'Solar Plexus (Manipura)',
    deity: 'Min',
    symbol: 'Infinite abundance, Golden flow',
    frequencyMeaning: 'Prosperity manifestation, infinite wealth',
    soundPillars: ['Harvest blessing ceremonies', 'Prosperity rituals', 'Abundance activation']
  },
  {
    hz: '963 Hz',
    name: 'Crown',
    color: 'from-purple-600 to-pink-600',
    effect: 'Divine connection, light, oneness',
    healing: 'Connects to higher self, divine source, awakening. This frequency activates the crown chakra and connects one to universal consciousness.',
    egyptianUse: 'Used in solar temple and pharaoh rituals. The 963 Hz frequency was chanted only in the presence of the pharaoh and high priests during the "Opening of the Mouth" ceremony, believed to activate the pineal gland and connect directly to the divine source (the "Eye of Ra").',
    chakra: 'Crown (Sahasrara)',
    deity: 'Ra',
    symbol: 'Divine oneness, Pineal activation',
    frequencyMeaning: 'Divine source connection, universal consciousness',
    soundPillars: ['Pharaoh coronation ceremonies', 'Opening of the Mouth', 'Divine source connection']
  },
  {
    hz: '1111 Hz',
    name: 'Divine Gateway',
    color: 'from-violet-600 to-purple-700',
    effect: 'Divine gateway, soul purpose, enlightenment',
    healing: 'Opens the divine gateway, connects to soul purpose, facilitates enlightenment. This frequency is associated with the 11:11 phenomenon, representing a portal to higher dimensions.',
    egyptianUse: 'Used during the most sacred mysteries of Isis and Osiris. The 1111 Hz frequency was chanted in the inner sanctum during the "Resurrection of Osiris" ceremony, when the high priest would enter the tomb alone to commune with the god. Only the highest initiates were allowed to hear this frequency.',
    chakra: 'Soul Star (8th Chakra)',
    deity: 'Osiris, Isis',
    symbol: 'Divine gateway, Soul purpose',
    frequencyMeaning: '11:11 portal, divine alignment',
    soundPillars: ['Resurrection of Osiris ceremony', 'Divine gateway opening', 'Soul purpose activation']
  },
  {
    hz: '144 Hz',
    name: 'Heart Healing',
    color: 'from-rose-600 to-pink-600',
    effect: 'Heart healing, compassion, emotional balance',
    healing: 'Heals heart wounds, opens compassion, balances emotions. This frequency is associated with the heart chakra and emotional healing.',
    egyptianUse: 'Used in love rituals and emotional healing ceremonies. Priests chanted 144 Hz in temples dedicated to Hathor, the goddess of love, to heal broken hearts and restore emotional balance.',
    chakra: 'Heart (Anahata)',
    deity: 'Hathor',
    symbol: 'Love, Compassion',
    frequencyMeaning: 'Heart activation, emotional healing',
    soundPillars: ['Love rituals', 'Emotional balance ceremonies', 'Heart chakra healing']
  },
  {
    hz: '256 Hz',
    name: 'OM',
    color: 'from-sky-600 to-blue-600',
    effect: 'Universal OM, cosmic vibration',
    healing: 'Aligns with the cosmic sound of creation, balances all chakras, creates inner peace. This frequency is the universal OM frequency, the sound of creation.',
    egyptianUse: 'Used in creation ceremonies and sun temple rituals. The 256 Hz frequency was chanted at dawn to greet the rising sun, aligning the vibration of the temple with the cosmic OM of creation.',
    chakra: 'All Chakras',
    deity: 'Atum',
    symbol: 'Cosmic creation, Sacred OM',
    frequencyMeaning: 'Universal creation frequency',
    soundPillars: ['Sun temple dawn rituals', 'Creation ceremonies', 'Chakra balancing']
  },
  {
    hz: '512 Hz',
    name: 'Harmony',
    color: 'from-sky-500 to-indigo-500',
    effect: 'Harmony, balance, integration',
    healing: 'Brings harmony to the body, mind, and spirit. This frequency integrates all aspects of the self, creating wholeness.',
    egyptianUse: 'Used in temple healing chambers and harmonization rituals. Priests chanted 512 Hz to harmonize the energy fields of patients before and after healing ceremonies.',
    chakra: 'All Chakras',
    deity: 'Maat',
    symbol: 'Sacred harmony, Divine balance',
    frequencyMeaning: 'Harmonic balance, integration',
    soundPillars: ['Healing chamber preparation', 'Energy field harmonization', 'Body-mind-spirit integration']
  }
]

const templeAcoustics = [
  {
    name: 'Great Pyramid King\'s Chamber',
    description: 'Resonates at 114 Hz, altering brain waves to theta state',
    purpose: 'Deep meditation, spiritual visions, altered consciousness',
    detail: 'The granite walls of the King\'s Chamber create a resonance chamber that vibrates at 114 Hz when chanted in. This frequency shifts brain waves from beta (awake) to theta (deep meditation), inducing visions and out-of-body experiences. The sarcophagus in the chamber was likely used for initiations, not burial.'
  },
  {
    name: 'Hypostyle Hall (Karnak)',
    description: '134 columns designed as acoustic resonators',
    purpose: 'Sound amplification, divine presence manifestation',
    detail: 'The 134 massive columns in Karnak\'s Hypostyle Hall were carved with specific dimensions to resonate at particular frequencies. Priests chanting in the hall created standing waves that amplified the sound, creating the sensation of the gods speaking.'
  },
  {
    name: 'Abu Simbel Great Temple',
    description: 'Chambers resonate during solar alignment',
    purpose: 'Cosmic harmony, solar deity activation',
    detail: 'Twice yearly (Feb 22 and Oct 22), the rising sun illuminates the inner sanctuary. During these events, the chamber\'s acoustics shift, amplifying the priests\' chants and creating the sensation of the sun god Ra speaking.'
  },
  {
    name: 'Temple of Hathor (Dendera)',
    description: 'Crystal sound healing chambers',
    purpose: 'Light body awakening, Hathor\'s healing',
    detail: 'The crypts beneath the Temple of Hathor were designed for sound healing using crystal bowls and sistra. The unique acoustics and crystalline structure of the stone amplified healing frequencies, believed to awaken the "light body."'
  },
  {
    name: 'Temple of Edfu',
    description: 'Sound resonators built into walls',
    purpose: 'Divine communication, sacred chanting',
    detail: 'The walls of the Temple of Horus at Edfu contain hollow chambers designed as acoustic resonators. Priests chanting the "Hymn to Horus" from specific positions created amplified sound that appeared to come from the divine statue itself.'
  }
]

export default function SoundFrequenciesPage() {
  const [selectedFreq, setSelectedFreq] = useState<Frequency>(frequencies[6]) // Default to 528 Hz

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Waves size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Acoustics</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Sound Frequencies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The healing power of sound, vibration, and sacred acoustics used by ancient Egyptian priests
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Music size={16} />
          <span>16 Sacred Frequencies • Temple Acoustics • Sound Healing • 1111 Hz Gateway</span>
        </div>
      </motion.div>

      {/* Solfeggio Frequencies Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Music size={24} />
          Sacred Healing Frequencies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-6">
          {frequencies.map((freq) => (
            <button
              key={freq.hz}
              onClick={() => setSelectedFreq(freq)}
              className={`p-2 rounded-lg text-center transition-all ${
                selectedFreq.hz === freq.hz
                  ? `bg-gradient-to-r ${freq.color} text-white shadow-lg scale-105`
                  : 'bg-white/50 hover:bg-white/80 text-gray-700'
              }`}
            >
              <div className="font-bold text-sm">{freq.hz}</div>
              <div className="text-[10px]">{freq.name}</div>
            </button>
          ))}
        </div>

        {/* Selected Frequency Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFreq.hz}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`egyptian-card bg-gradient-to-r ${selectedFreq.color}/10`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${selectedFreq.color} text-white`}>
                    <Volume2 size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-gold">{selectedFreq.hz} - {selectedFreq.name}</h3>
                </div>
                <p className="text-gray-700 mb-3">{selectedFreq.effect}</p>
                <div className="space-y-2 text-sm">
                  <div><span className="font-semibold text-gold">Chakra:</span> {selectedFreq.chakra}</div>
                  <div><span className="font-semibold text-gold">Deity:</span> {selectedFreq.deity}</div>
                  <div><span className="font-semibold text-gold">Symbol:</span> {selectedFreq.symbol}</div>
                  <div><span className="font-semibold text-gold">Resonance Meaning:</span> {selectedFreq.frequencyMeaning}</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-egyptian-blue mb-2 flex items-center gap-1">
                  <Heart size={16} className="text-gold" />
                  Healing Properties
                </h4>
                <p className="text-gray-700 text-sm mb-4">{selectedFreq.healing}</p>
                <h4 className="font-semibold text-egyptian-blue mb-2 flex items-center gap-1">
                  <Sun size={16} className="text-gold" />
                  Ancient Egyptian Use
                </h4>
                <p className="text-gray-700 text-sm">{selectedFreq.egyptianUse}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {selectedFreq.soundPillars.map((pillar, i) => (
                    <span key={i} className="text-xs bg-gold/10 text-gold-dark px-2 py-0.5 rounded">
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Temple Acoustics Section */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <GitBranch size={24} />
          Temple Acoustics & Sound Healing
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {templeAcoustics.map((temple, index) => (
            <motion.div
              key={temple.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-gold/20 rounded-lg">
                  <Waves size={20} className="text-gold" />
                </div>
                <h3 className="text-xl font-bold text-gold">{temple.name}</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Resonance:</span> {temple.description}</p>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Purpose:</span> {temple.purpose}</p>
              <p className="text-xs text-gray-600 mt-2">{temple.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Frequency Quick Reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gold/10 rounded-lg p-6 border border-gold/30"
      >
        <h3 className="text-xl font-bold text-gold mb-3 text-center">Frequency Quick Reference</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-sm">
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">111 Hz</span><p className="text-xs text-gray-600">Intuition</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">144 Hz</span><p className="text-xs text-gray-600">Heart</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">174 Hz</span><p className="text-xs text-gray-600">Pain</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">256 Hz</span><p className="text-xs text-gray-600">OM</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">285 Hz</span><p className="text-xs text-gray-600">Heal</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">396 Hz</span><p className="text-xs text-gray-600">Free</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">417 Hz</span><p className="text-xs text-gray-600">Clear</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">432 Hz</span><p className="text-xs text-gray-600">Nature</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">512 Hz</span><p className="text-xs text-gray-600">Balance</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">528 Hz</span><p className="text-xs text-gray-600">Miracle</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">639 Hz</span><p className="text-xs text-gray-600">Heart</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">741 Hz</span><p className="text-xs text-gray-600">Voice</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">777 Hz</span><p className="text-xs text-gray-600">Spirit</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">852 Hz</span><p className="text-xs text-gray-600">Awake</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">888 Hz</span><p className="text-xs text-gray-600">Wealth</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">963 Hz</span><p className="text-xs text-gray-600">Divine</p></div>
          <div className="bg-white/30 rounded p-2"><span className="font-bold text-egyptian-blue">1111 Hz</span><p className="text-xs text-gray-600">Gateway</p></div>
        </div>
      </motion.div>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Headphones size={20} className="text-gold" />
          <span className="font-semibold">The Science of Sound Healing</span>
        </div>
        <p className="text-gray-700 text-sm">
          💡 Modern research confirms that specific frequencies can alter brain wave states, reduce stress, and promote healing. The ancient Egyptians understood this thousands of years ago, designing their temples as acoustic instruments and using sound as medicine. The 1111 Hz frequency, known as the "Divine Gateway," is associated with spiritual awakening and soul purpose activation. Today, sound healing is used in music therapy, meditation, and stress reduction programs worldwide.
        </p>
      </motion.div>
    </div>
  )
}