'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Feather, BookOpen, User, Ship, Shield, Star, Scroll, Sun, Moon, Eye, Heart, Crown, Hand, Sparkles } from 'lucide-react'

const sections = [
  {
    id: 'egyptian-deities',
    title: 'Egyptian Deities',
    icon: <Eye size={24} />,
    color: 'from-amber-600 to-orange-600',
    content: {
      overview: `The ancient Egyptian pantheon included over 1,500 gods and goddesses, each governing different aspects of life, death, and the natural world. These deities were not distant beings but active participants in daily life, accessible through prayer, offerings, and temple rituals.`,
      majorDeities: [
        { name: 'Ra', role: 'God of the Sun, King of Gods', symbol: 'Sun disk, falcon', description: 'The supreme creator god who sailed across the sky each day in his solar barque.' },
        { name: 'Osiris', role: 'God of the Afterlife, Resurrection', symbol: 'Crook and flail, Atef crown', description: 'Lord of the underworld who was murdered by Set and resurrected by Isis.' },
        { name: 'Isis', role: 'Goddess of Magic, Motherhood', symbol: 'Throne, knot, cow horns', description: 'The divine mother and master healer who used magic to resurrect Osiris.' },
        { name: 'Horus', role: 'God of the Sky, Kingship', symbol: 'Falcon, Eye of Horus', description: 'The falcon-headed god who avenged his father Osiris and represented divine kingship.' },
        { name: 'Anubis', role: 'God of Embalming, Tombs', symbol: 'Jackal, embalming tools', description: 'Guide of souls who presided over mummification and the Weighing of the Heart.' },
        { name: 'Thoth', role: 'God of Wisdom, Writing', symbol: 'Ibis, baboon, palette', description: 'Divine scribe who invented writing and recorded the deeds of the dead.' },
        { name: 'Hathor', role: 'Goddess of Love, Music, Joy', symbol: 'Cow horns, sistrum, mirror', description: 'The beloved goddess of feminine love, beauty, and celebration.' },
        { name: 'Ptah', role: 'God of Craftsmen, Creation', symbol: 'Djed pillar, was scepter', description: 'The creator god who spoke the world into existence through words of power.' }
      ]
    }
  },
  {
    id: 'resurrection-osiris',
    title: 'The Resurrection of Osiris',
    icon: <Sun size={24} />,
    color: 'from-emerald-600 to-teal-600',
    content: {
      overview: `The myth of Osiris is the most important religious story in ancient Egypt, explaining the origin of death, resurrection, and the afterlife. This story was reenacted annually in temple rituals and provided hope for eternal life to all Egyptians.`,
      story: [
        {
          title: 'The Wise King',
          text: `Osiris was a wise and benevolent king who brought civilization to Egypt. He taught agriculture, law, and religion, making Egypt prosperous. His brother Set, god of chaos and storms, grew jealous of Osiris's power and popularity.`
        },
        {
          title: 'The Murder',
          text: `Set tricked Osiris into entering a beautifully crafted chest, then sealed it and threw it into the Nile. Osiris drowned. Set claimed the throne, while Isis, Osiris's devoted wife, searched desperately for her husband's body.`
        },
        {
          title: 'The Search',
          text: `Isis, with the help of her sister Nephthys and the god Anubis, searched Egypt until she found the chest. She hid it, but Set discovered it and dismembered Osiris's body into 14 pieces, scattering them across Egypt.`
        },
        {
          title: 'The Resurrection',
          text: `Isis gathered the pieces of Osiris's body (except his phallus), and with Anubis, performed the first mummification. Isis transformed into a kite and, using her powerful magic, resurrected Osiris long enough to conceive their son, Horus.`
        },
        {
          title: 'The Afterlife',
          text: `Osiris became ruler of the Duat (underworld), judging the souls of the dead. The resurrection of Osiris symbolized the annual flooding of the Nile and the promise of eternal life for all who lived according to Ma'at.`
        }
      ]
    }
  },
  {
    id: 'shipwrecked-sailor',
    title: 'The Shipwrecked Sailor',
    icon: <Ship size={24} />,
    color: 'from-blue-600 to-cyan-600',
    content: {
      overview: `"The Tale of the Shipwrecked Sailor" is an ancient Egyptian story from the Middle Kingdom (c. 2000 BCE). It is one of the earliest surviving adventure tales in world literature.`,
      story: [
        {
          title: 'The Expedition',
          text: `A sailor returns from a failed expedition to the mines of the pharaoh. He tells his skeptical master (a high official) a story about a previous voyage that ended in shipwreck to prove that unexpected things can happen, even miracles.`
        },
        {
          title: 'The Shipwreck',
          text: `During a voyage to Nubia, a terrible storm sank the sailor's ship, killing all his companions. Washing ashore alone on a deserted island, he faced certain death.`
        },
        {
          title: 'The Serpent God',
          text: `On the island, the sailor encountered a massive serpent, covered in gold and lapis lazuli. The serpent revealed that he was the Lord of Punt, a god of the legendary land of incense.`
        },
        {
          title: 'The Prophecy',
          text: `The serpent told the sailor that he had been there for 400 years and would soon be rescued. The serpent prophesied that an Egyptian ship would arrive in four months, and the sailor would return home to Egypt.`
        },
        {
          title: 'The Return',
          text: `When a ship arrived as predicted, the serpent gave the sailor precious gifts—incense, myrrh, ivory, and exotic animals—to present to the pharaoh. The sailor returned home safely, his faith in divine providence restored.`
        }
      ],
      themes: [`Human helplessness before nature's power`, `Divine intervention and prophecy`, `The rewards of faith and patience`, `Egypt's connection to the legendary land of Punt`]
    }
  },
  {
    id: 'sinuhe',
    title: 'The Adventures of Sinuhe',
    icon: <User size={24} />,
    color: 'from-purple-600 to-pink-600',
    content: {
      overview: `"The Story of Sinuhe" is considered the masterpiece of ancient Egyptian literature. Written during the 12th Dynasty (c. 1875 BCE), it tells the tale of an official who flees Egypt and eventually returns, exploring themes of exile, identity, and redemption.`,
      story: [
        {
          title: 'The Flight',
          text: `Sinuhe, a court official of pharaoh Amenemhat I, overhears news of the pharaoh's assassination. Fearing political upheaval, he flees Egypt, leaving behind his family, status, and security.`
        },
        {
          title: 'Exile in Canaan',
          text: `Sinuhe travels through the Eastern Desert into Canaan and Syria. He is welcomed by a local chieftain who gives him land, a daughter in marriage, and command of a tribe. Sinuhe prospers, becoming a powerful leader.`
        },
        {
          title: 'The Duel',
          text: `A champion of a rival tribe challenges Sinuhe to single combat. Despite his age and being away from Egypt, Sinuhe defeats his opponent, winning fame and respect throughout Syria.`
        },
        {
          title: 'The Invitation',
          text: `Years later, Sinuhe receives a letter from pharaoh Senusret I, inviting him to return to Egypt. The pharaoh promises pardon and restoration of his former status.`
        },
        {
          title: 'The Return',
          text: `Sinuhe returns to Egypt, where he is welcomed by the pharaoh, given a proper burial, and granted an elaborate tomb. The story ends with his death in Egypt—the ultimate blessing for an Egyptian.`
        }
      ],
      themes: [`Exile and displacement`, `The longing for one's homeland`, `Egyptian identity and belonging`, `Mercy, forgiveness, and reconciliation`]
    }
  },
  {
    id: 'memphis-triad',
    title: 'The Memphis Triad',
    icon: <Crown size={24} />,
    color: 'from-yellow-600 to-amber-600',
    content: {
      overview: `The Memphite Triad was the divine family worshipped at Memphis, the ancient capital of Egypt. This theological system centered on the god Ptah, his consort Sekhmet, and their son Nefertum.`,
      deities: [
        { name: 'Ptah', role: 'Creator God, Patron of Craftsmen', symbol: 'Djed pillar, was scepter, skullcap', description: `Ptah was the supreme creator god of Memphis. Unlike other creation myths involving physical acts, Ptah created the world through thought and speech. He thought of the world in his heart and spoke it into existence—the first concept of divine creation through logos (the Word).`, attribution: 'Temples: Memphis, Karnak' },
        { name: 'Sekhmet', role: 'Goddess of War, Pestilence, and Healing', symbol: 'Lioness, sun disk, ankh', description: `Sekhmet was Ptah's powerful consort, depicted as a lioness or woman with a lion head. She represented the destructive power of the sun, but also had the ability to heal. Her name means "the Powerful One."`, attribution: 'Temples: Memphis, Karnak, Thebes' },
        { name: 'Nefertum', role: 'God of Perfume, Lotus Blossoms, Healing', symbol: 'Lotus flower, lion, boy with lotus', description: `Nefertum was the son of Ptah and Sekhmet, representing beauty, fragrance, and healing. He emerged from the primordial lotus at the beginning of creation. His name means "Perfect Being."`, attribution: 'Temples: Memphis, Bubastis' }
      ],
      significance: `The Memphis Triad represented the cycle of creation, destruction, and renewal. Ptah creates, Sekhmet destroys (or protects), and Nefertum brings healing and beauty. This theological system influenced later Jewish and Christian concepts of divine creation through the Word.`
    }
  },
  {
    id: 'exodus-ten-commandments',
    title: 'The Exodus and Ten Commandments',
    icon: <ScrollText size={24} />,
    color: 'from-indigo-600 to-blue-600',
    content: {
      overview: `The Exodus is the foundational story of the Hebrew Bible, describing the liberation of the Israelites from slavery in Egypt and their journey to Mount Sinai, where they received the Ten Commandments—the moral and religious laws that formed the basis of Judaism and influenced Western civilization.`,
      story: [
        {
          title: 'The Oppression',
          text: `The Israelites were enslaved in Egypt after a new pharaoh "who did not know Joseph" came to power. Fearing their growing numbers, Pharaoh ordered the murder of all Hebrew male infants.`
        },
        {
          title: 'The Birth of Moses',
          text: `Moses was born during this oppression, hidden for three months, then placed in a basket on the Nile. He was discovered and adopted by Pharaoh's daughter, raised as an Egyptian prince.`
        },
        {
          title: 'The Burning Bush',
          text: `After fleeing Egypt for killing an Egyptian taskmaster, Moses encountered God in a burning bush on Mount Horeb. God revealed his name (YHWH - "I Am Who I Am") and commanded Moses to lead the Israelites out of Egypt.`
        },
        {
          title: 'The Ten Plagues',
          text: `When Pharaoh refused to release the Israelites, God brought ten plagues upon Egypt: water turned to blood, frogs, lice, flies, livestock disease, boils, hail, locusts, darkness, and death of the firstborn.`
        },
        {
          title: 'The Exodus',
          text: `After the final plague, Pharaoh relented. The Israelites left Egypt, guided by a pillar of cloud by day and fire by night. Pharaoh changed his mind and pursued them with his army.`
        },
        {
          title: 'The Parting of the Red Sea',
          text: `Trapped between the sea and the approaching Egyptian army, Moses stretched out his hand, and God parted the waters. The Israelites crossed on dry land, but when the Egyptians followed, the waters returned, drowning them.`
        },
        {
          title: 'Mount Sinai & The Ten Commandments',
          text: `Three months after leaving Egypt, the Israelites camped at Mount Sinai. Moses ascended the mountain, where God revealed the Ten Commandments—moral laws written on two stone tablets.`
        }
      ],
      tenCommandments: [
        "1. I am the Lord your God. You shall have no other gods before me.",
        "2. You shall not make for yourself any idol.",
        "3. You shall not misuse the name of the Lord your God.",
        "4. Remember the Sabbath day, to keep it holy.",
        "5. Honor your father and your mother.",
        "6. You shall not murder.",
        "7. You shall not commit adultery.",
        "8. You shall not steal.",
        "9. You shall not give false testimony.",
        "10. You shall not covet anything that belongs to your neighbor."
      ],
      significance: `The Exodus became the defining event of Jewish identity—a slave people liberated by divine intervention. The Ten Commandments formed the moral foundation of Judaism, Christianity, and Islam. Archaeological evidence for the Exodus remains debated, but its cultural impact on Western civilization is undeniable.`
    }
  }
]

export default function ReligionMythologyPage() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <div className="flex items-center justify-center gap-2 text-gold">
          <Feather size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Traditions</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Religion & Mythology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Exploring the sacred stories, divine beings, and spiritual beliefs of the ancient world
        </p>
      </motion.div>

      {/* Section Navigation */}
      <div className="flex flex-wrap justify-center gap-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              activeSection.id === section.id
                ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                : 'bg-white/50 hover:bg-white/80 text-gray-700'
            }`}
          >
            {section.icon}
            <span className="hidden sm:inline">{section.title}</span>
          </button>
        ))}
      </div>

      {/* Section Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`egyptian-card bg-gradient-to-br ${activeSection.color}/10`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${activeSection.color} text-white`}>
              {activeSection.icon}
            </div>
            <h2 className="text-2xl font-bold text-egyptian-blue">{activeSection.title}</h2>
          </div>

          {/* Egyptian Deities Section */}
          {activeSection.id === 'egyptian-deities' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {activeSection.content.majorDeities.map((deity) => (
                  <div key={deity.name} className="bg-white/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Eye size={18} className="text-gold" />
                      <h3 className="font-bold text-egyptian-blue">{deity.name}</h3>
                    </div>
                    <p className="text-xs text-gold mb-1">{deity.role}</p>
                    <p className="text-sm text-gray-700">{deity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resurrection of Osiris Section */}
          {activeSection.id === 'resurrection-osiris' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="space-y-4">
                {activeSection.content.story.map((part) => (
                  <div key={part.title} className="bg-white/40 rounded-lg p-4">
                    <h3 className="font-bold text-egyptian-blue mb-2">{part.title}</h3>
                    <p className="text-gray-700">{part.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Shipwrecked Sailor Section */}
          {activeSection.id === 'shipwrecked-sailor' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="space-y-4">
                {activeSection.content.story.map((part) => (
                  <div key={part.title} className="bg-white/40 rounded-lg p-4">
                    <h3 className="font-bold text-egyptian-blue mb-2">{part.title}</h3>
                    <p className="text-gray-700">{part.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <h3 className="font-bold text-gold mb-2">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {activeSection.content.themes.map((theme) => (
                    <span key={theme} className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-700">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sinuhe Section */}
          {activeSection.id === 'sinuhe' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="space-y-4">
                {activeSection.content.story.map((part) => (
                  <div key={part.title} className="bg-white/40 rounded-lg p-4">
                    <h3 className="font-bold text-egyptian-blue mb-2">{part.title}</h3>
                    <p className="text-gray-700">{part.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <h3 className="font-bold text-gold mb-2">Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {activeSection.content.themes.map((theme) => (
                    <span key={theme} className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-700">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Memphis Triad Section */}
          {activeSection.id === 'memphis-triad' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {activeSection.content.deities.map((deity) => (
                  <div key={deity.name} className="bg-white/40 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Crown size={18} className="text-gold" />
                      <h3 className="font-bold text-egyptian-blue">{deity.name}</h3>
                    </div>
                    <p className="text-xs text-gold mb-1">{deity.role}</p>
                    <p className="text-sm text-gray-700 mb-2">{deity.description}</p>
                    <p className="text-xs text-gray-500">{deity.attribution}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <p className="text-sm text-gray-700 italic">{activeSection.content.significance}</p>
              </div>
            </div>
          )}

          {/* Exodus Section */}
          {activeSection.id === 'exodus-ten-commandments' && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">{activeSection.content.overview}</p>
              <div className="space-y-3">
                {activeSection.content.story.map((part) => (
                  <div key={part.title} className="bg-white/40 rounded-lg p-3">
                    <h3 className="font-bold text-egyptian-blue text-sm mb-1">{part.title}</h3>
                    <p className="text-gray-700 text-sm">{part.text}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gold/20 rounded-lg p-4">
                <h3 className="font-bold text-gold mb-2 flex items-center gap-2">
                  <Scroll size={16} />
                  The Ten Commandments
                </h3>
                <div className="grid md:grid-cols-2 gap-1">
                  {activeSection.content.tenCommandments.map((cmd) => (
                    <p key={cmd} className="text-xs text-gray-700">{cmd}</p>
                  ))}
                </div>
              </div>
              <div className="bg-gold/10 rounded-lg p-4">
                <p className="text-sm text-gray-700 italic">{activeSection.content.significance}</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}