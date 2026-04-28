'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sword, Shield, Crosshair, Ship, Zap, Flame, 
  Crown, Users, Globe, ChevronLeft, ChevronRight,
  Castle, Mountain, Droplet, Wind, Target, BookOpen,
  ArrowUpDown, Car, Anchor, Skull, AlertOctagon
} from 'lucide-react'

interface Battle {
  id: string
  name: string
  year: string
  location: string
  combatants: string
  outcome: string
  description: string
  imageIcon: any
  tactics: string[]
  keyFigures: string[]
  historicalSignificance: string
}

interface Weapon {
  id: string
  name: string
  type: string
  civilization: string
  period: string
  description: string
  imageIcon: any
  features: string[]
  use: string
}

interface MilitaryUnit {
  id: string
  name: string
  civilization: string
  period: string
  description: string
  training: string
  equipment: string[]
  tactics: string[]
  legacy: string
}

const battles: Battle[] = [
  {
    id: 'kadesh',
    name: 'Battle of Kadesh',
    year: '1274 BCE',
    location: 'Orontes River, Syria',
    combatants: 'Egyptian Empire vs Hittite Empire',
    outcome: 'Stalemate / First recorded peace treaty',
    description: `The Battle of Kadesh was the largest chariot battle in history, involving over 5,000 chariots. Ramesses II of Egypt fought Muwatalli II of the Hittites in a battle that ended in a stalemate, leading to the world's first recorded peace treaty.`,
    imageIcon: Shield,
    tactics: [
      'Hittite ambush of Egyptian Ra division',
      'Egyptian chariot counter-attack',
      'Hittite use of terrain (hiding behind city)',
      'Ramesses\' personal leadership rallying troops'
    ],
    keyFigures: ['Ramesses II (Egypt)', 'Muwatalli II (Hittite)', 'Hattusili III (Hittite commander)'],
    historicalSignificance: 'First recorded peace treaty; earliest detailed battle description; example of Hittite-Egyptian rivalry'
  },
  {
    id: 'marathon',
    name: 'Battle of Marathon',
    year: '490 BCE',
    location: 'Marathon plain, Greece',
    combatants: 'Athens (9,000) + Plataea (1,000) vs Persia (25,000+)',
    outcome: 'Greek victory',
    description: `The Athenians launched the first recorded "double envelopment," charging the Persian lines at a run. They broke through the weakened Persian center, then turned to flank the wings, routing the Persian army.`,
    imageIcon: Target,
    tactics: [
      'Double envelopment (pincer movement)',
      'Running charge in full armor (1.5 km)',
      'Strong flanks, weak center',
      'Using terrain to limit Persian cavalry'
    ],
    keyFigures: ['Miltiades (Athenian general)', 'Datis (Persian commander)', 'Pheidippides (runner)'],
    historicalSignificance: 'Proved Greek hoplites could defeat Persian army; origin of marathon race'
  },
  {
    id: 'thermopylae',
    name: 'Battle of Thermopylae',
    year: '480 BCE',
    location: 'Thermopylae pass, Greece',
    combatants: 'Greek city-states (7,000) vs Persian Empire (150,000+)',
    outcome: 'Persian victory',
    description: `King Leonidas of Sparta led 300 Spartans and Greek allies in a legendary last stand against Xerxes' massive Persian army. They held the narrow pass for three days until a local traitor revealed a mountain path that outflanked them.`,
    imageIcon: Castle,
    tactics: [
      'Phalanx formation in narrow pass',
      'Use of terrain to negate Persian numbers',
      'Feigned retreat to draw Persians in',
      'Final stand on Kolonos Hill'
    ],
    keyFigures: ['Leonidas (Spartan king)', 'Xerxes I (Persian king)', 'Ephialtes (traitor)', 'Demophilus (Thespian leader)'],
    historicalSignificance: 'Symbol of heroic last stand; inspired Greek unity; delayed Persian advance'
  },
  {
    id: 'salamis',
    name: 'Battle of Salamis',
    year: '480 BCE',
    location: 'Straits of Salamis, Greece',
    combatants: 'Greek city-states (380 ships) vs Persian Empire (1,200 ships)',
    outcome: 'Greek victory',
    description: `Themistocles lured the Persian fleet into the narrow straits of Salamis, where their numerical advantage was useless. Greek triremes rammed and sank over 200 Persian ships, turning the tide of the Persian War.`,
    imageIcon: Ship,
    tactics: [
      'Feigned retreat to lure Persians into straits',
      'Trireme ramming tactics',
      'Use of enclosed waters to limit Persian mobility',
      'Dekeleia (pincer movement) of Greek fleet'
    ],
    keyFigures: ['Themistocles (Athenian commander)', 'Xerxes I (Persian king)', 'Artemisia (Carian queen)'],
    historicalSignificance: 'Decisive naval battle that saved Greece; end of Persian threat to Europe'
  },
  {
    id: 'cannae',
    name: 'Battle of Cannae',
    year: '216 BCE',
    location: 'Cannae, Italy',
    combatants: 'Carthage (50,000) vs Roman Republic (86,000)',
    outcome: 'Carthaginian victory',
    description: `Hannibal's masterpiece - the double envelopment. He placed his weakest troops in the center, which retreated, drawing the Romans into a trap. African veterans then closed from the wings, surrounding and annihilating the Roman army.`,
    imageIcon: Shield,
    tactics: [
      'Double envelopment (pincer movement)',
      'Crescent formation (center weak, wings strong)',
      'Feigned retreat to draw Romans in',
      'Use of cavalry to charge rear'
    ],
    keyFigures: ['Hannibal Barca (Carthaginian general)', 'Varro (Roman consul)', 'Paullus (Roman consul)'],
    historicalSignificance: 'Classic example of double envelopment; studied by Napoleon and Rommel'
  },
  {
    id: 'zama',
    name: 'Battle of Zama',
    year: '202 BCE',
    location: 'North Africa (near Carthage)',
    combatants: 'Roman Republic vs Carthage',
    outcome: 'Roman victory',
    description: `Scipio Africanus defeated Hannibal using tactics he learned from Hannibal himself. He left gaps in his lines for Carthaginian war elephants to pass through harmlessly, then used his cavalry to charge the Carthaginian rear.`,
    imageIcon: Crown,
    tactics: [
      'Gaps in lines for elephants to pass',
      'Use of cornu trumpets to frighten elephants',
      'Cavalry flanking maneuver',
      'Deliberate withdrawal then counter-attack'
    ],
    keyFigures: ['Scipio Africanus (Roman general)', 'Hannibal Barca (Carthaginian general)', 'Massinissa (Numidian king)'],
    historicalSignificance: 'End of Second Punic War; established Rome as Mediterranean superpower'
  }
]

const weapons: Weapon[] = [
  {
    id: 'chariot',
    name: 'Chariot',
    type: 'Vehicle',
    civilization: 'Egyptian, Hittite, Mycenaean',
    period: 'c. 1700-500 BCE',
    description: `The chariot revolutionized ancient warfare, serving as a mobile platform for archers and a shock weapon. Egyptian chariots were lightweight, with two crew members (driver and archer). Hittite chariots were heavier, with three crew members.`,
    imageIcon: Car,
    features: [
      'Spoked wooden wheels (lighter and faster)',
      'Composite bow for rapid fire',
      'Leather and bronze armor protection',
      'Two-man crew (driver, archer/spearman)'
    ],
    use: 'Fast attack, archery platform, pursuit of fleeing enemies, communication'
  },
  {
    id: 'composite-bow',
    name: 'Composite Bow',
    type: 'Ranged Weapon',
    civilization: 'Egyptian, Assyrian, Persian',
    period: 'c. 1700 BCE onward',
    description: `The composite bow was made from layers of wood, horn, and sinew, giving it greater power and range than wooden bows. It became the primary weapon of chariot archers and horse archers.`,
    imageIcon: Crosshair,
    features: [
      'Range up to 350 meters',
      'Penetrate bronze armor',
      'Recurved shape for power',
      'Horn belly (compression), sinew back (tension)'
    ],
    use: 'Chariot archery, foot archery, siege defense'
  },
  {
    id: 'greek-phalanx',
    name: 'Greek Phalanx',
    type: 'Formation',
    civilization: 'Greek',
    period: 'c. 700-168 BCE',
    description: `The phalanx was a rectangular formation of hoplites armed with long spears (doru) and large shields (aspis). Soldiers formed rows 8-16 deep, with spears projecting forward, creating a wall of spear points.`,
    imageIcon: Users,
    features: [
      'Doru spear (2.5-3 meters long)',
      'Aspis shield (1 meter diameter, 8 kg)',
      'Xiphos short sword (secondary weapon)',
      'Heavy bronze armor (helmet, greaves, cuirass)'
    ],
    use: 'Heavy infantry shock formation, line battle'
  },
  {
    id: 'roman-legion',
    name: 'Roman Legion',
    type: 'Formation',
    civilization: 'Roman',
    period: 'c. 300 BCE - 400 CE',
    description: `The Roman legion was the most effective military unit of the ancient world. The manipular formation (triplex acies) allowed tactical flexibility, with lines of hastati, principes, and triarii.`,
    imageIcon: Shield,
    features: [
      'Gladius short sword (ideal for stabbing)',
      'Pilum throwing spear (bent on impact)',
      'Scutum curved rectangular shield',
      'Lorica segmentata segmented armor'
    ],
    use: 'Heavy infantry, offensive and defensive operations, siege warfare'
  },
  {
    id: 'siege-engine',
    name: 'Siege Engines',
    type: 'Siege Weapon',
    civilization: 'Assyrian, Greek, Roman',
    period: 'c. 900 BCE - 400 CE',
    description: `Ancient siege weapons included battering rams, siege towers, catapults, ballistas, and trebuchets. The Assyrians perfected siege warfare, while Greeks and Romans added torsion-powered artillery.`,
    imageIcon: Zap,
    features: [
      'Battering ram (bronze head, wheeled chassis)',
      'Siege tower (scaffolding for height)',
      'Ballista (large crossbow, torsion power)',
      'Onager (stone-throwing catapult)'
    ],
    use: 'City siege, wall breaching, defensive warfare'
  }
]

const militaryUnits: MilitaryUnit[] = [
  {
    id: 'marines',
    name: 'Egyptian Marines',
    civilization: 'Egyptian',
    period: 'c. 1500-1150 BCE',
    description: `Egypt's elite marine force, the "Egyptian Marines," were specialized troops stationed at key forts. They served as both naval infantry and expeditionary forces, crucial for campaigns into Nubia and the Levant.`,
    training: 'Combat training in archery, hand-to-hand, ship operations, and swimming',
    equipment: ['Composite bow', 'Khopesh sword', 'Axe', 'Leather armor', 'Round shield'],
    tactics: ['Amphibious assaults', 'Ship-to-ship combat', 'River patrol', 'Fort defense'],
    legacy: 'Pioneered marine warfare; influenced Greek and Roman naval forces'
  },
  {
    id: 'spartans',
    name: 'Spartan Hoplites',
    civilization: 'Greek (Spartan)',
    period: 'c. 650-371 BCE',
    description: `Spartan hoplites were the most feared soldiers in Greece, trained from age 7 in the agoge system. They fought in the phalanx formation and were renowned for their discipline, courage, and refusal to retreat.`,
    training: 'Agoge (state-sponsored training from age 7-30), endurance, weapon skills, formation drill',
    equipment: ['Doru spear (3m)', 'Aspis shield', 'Xiphos sword', 'Bronze helmet', 'Red cloak'],
    tactics: ['Phalanx formation', 'Refusal of flanks', 'Feigned retreat', 'Night operations'],
    legacy: 'Legendary warrior culture; inspired elite military units throughout history'
  },
  {
    id: 'immortals',
    name: 'Persian Immortals',
    civilization: 'Persian (Achaemenid)',
    period: 'c. 550-330 BCE',
    description: `The Persian Immortals were an elite heavy infantry unit of 10,000 soldiers, so named because their numbers were always kept at exactly 10,000. They served as the king's personal bodyguard and shock troops.`,
    training: 'Extensive weapons training, formation drill, loyalty to king, physical conditioning',
    equipment: ['Spear with silver apple counterweight', 'Bow and arrows', 'Dagger', 'Scale armor', 'Wicker shield'],
    tactics: ['Phalanx-like formation', 'Archery volleys', 'Flanking maneuvers', 'King\'s bodyguard'],
    legacy: 'Inspired elite guard units; model for "sparabara" formation'
  },
  {
    id: 'cataphracts',
    name: 'Cataphracts',
    civilization: 'Persian, Parthian, Sarmatian',
    period: 'c. 200 BCE - 600 CE',
    description: `Cataphracts were heavily armored cavalry that served as the shock troops of eastern armies. Both horse and rider were covered in scale armor, making them virtually immune to arrows and light weapons.`,
    training: 'Horsemanship from childhood, lance training, formation drill, endurance',
    equipment: ['Lance (4-meter kontos)', 'Scale armor (horse and rider)', 'Mace', 'Sword', 'Bow', 'Helmet with face guard'],
    tactics: ['Shock charge', 'Parthian shot (retreat and shoot)', 'Hammer and anvil'],
    legacy: 'Predecessor of medieval knights; influenced Byzantine and European heavy cavalry'
  }
]

export default function WarfareWeaponsPage() {
  const [activeBattle, setActiveBattle] = useState(battles[0])
  const battleIndex = battles.findIndex(b => b.id === activeBattle.id)

  const nextBattle = () => {
    if (battleIndex < battles.length - 1) {
      setActiveBattle(battles[battleIndex + 1])
    }
  }

  const prevBattle = () => {
    if (battleIndex > 0) {
      setActiveBattle(battles[battleIndex - 1])
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
          <Sword size={24} />
          <span className="text-sm uppercase tracking-wider">Military History</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Warfare & Weapons</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore ancient military technology, battle tactics, and legendary warriors from around the world
        </p>
      </motion.div>

      {/* Ancient Battles Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Crosshair size={24} className="text-gold" />
            Legendary Battles
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevBattle}
              disabled={battleIndex === 0}
              className={`p-2 rounded-full transition-all ${
                battleIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextBattle}
              disabled={battleIndex === battles.length - 1}
              className={`p-2 rounded-full transition-all ${
                battleIndex < battles.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeBattle.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="egyptian-card bg-gradient-to-br from-red-900/5 to-orange-900/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-red-600/20 text-red-600">
                <activeBattle.imageIcon size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-egyptian-blue">{activeBattle.name}</h3>
                <p className="text-sm text-gold">{activeBattle.year} • {activeBattle.location}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-3 leading-relaxed">{activeBattle.description}</p>
                <div className="mb-3">
                  <span className="font-semibold text-gold">Combatants:</span>
                  <p className="text-sm text-gray-700">{activeBattle.combatants}</p>
                </div>
                <div className="mb-3">
                  <span className="font-semibold text-gold">Outcome:</span>
                  <p className="text-sm text-gray-700">{activeBattle.outcome}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2">Key Tactics</h4>
                <ul className="space-y-1 mb-3">
                  {activeBattle.tactics.map((tactic) => (
                    <li key={tactic} className="flex items-start gap-2 text-sm">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-gray-700">{tactic}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <h4 className="font-semibold text-gold mb-2">Key Figures</h4>
                  <div className="flex flex-wrap gap-1">
                    {activeBattle.keyFigures.map((figure) => (
                      <span key={figure} className="text-xs bg-white/50 px-2 py-1 rounded">
                        {figure}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gold/20">
              <p className="text-sm text-gray-600 italic">
                <span className="font-semibold text-gold">Historical Significance:</span> {activeBattle.historicalSignificance}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Weapons and Technology Grid */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Zap size={24} className="text-gold" />
          Weapons & Technology
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weapons.map((weapon, index) => {
            const Icon = weapon.imageIcon
            return (
              <motion.div
                key={weapon.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="egyptian-card"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-egyptian-blue">{weapon.name}</h3>
                </div>
                <p className="text-xs text-gold mb-2">{weapon.civilization} • {weapon.period}</p>
                <p className="text-sm text-gray-700 mb-2">{weapon.description}</p>
                <div className="mt-2">
                  <p className="text-sm text-gray-600"><span className="font-semibold">Use:</span> {weapon.use}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Elite Military Units */}
      <div>
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <Crown size={24} className="text-gold" />
          Elite Military Units
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {militaryUnits.map((unit, index) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="egyptian-card"
            >
              <h3 className="text-xl font-bold text-gold mb-1">{unit.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{unit.civilization} • {unit.period}</p>
              <p className="text-sm text-gray-700 mb-3">{unit.description}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="font-semibold text-gold text-xs">Training</span>
                  <p className="text-xs text-gray-600 mt-1">{unit.training}</p>
                </div>
                <div>
                  <span className="font-semibold text-gold text-xs">Equipment</span>
                  <ul className="text-xs text-gray-600 mt-1 list-disc list-inside">
                    {unit.equipment.slice(0, 3).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-gold/20">
                <span className="font-semibold text-gold text-xs">Tactics:</span>
                <p className="text-xs text-gray-600 mt-1">{unit.tactics.join(', ')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Battle Tactics Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card overflow-x-auto"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <AlertOctagon size={24} className="text-gold" />
          Battle Tactics Comparison
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold/30">
              <th className="text-left py-2 px-2 text-gold">Battle</th>
              <th className="text-left py-2 px-2 text-gold">Tactical Innovation</th>
              <th className="text-left py-2 px-2 text-gold">Decisive Factor</th>
              <th className="text-left py-2 px-2 text-gold">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {battles.map((battle) => (
              <tr key={battle.id} className="border-b border-gold/20 hover:bg-white/20 transition-colors">
                <td className="py-2 px-2 font-semibold text-egyptian-blue">{battle.name}</td>
                <td className="py-2 px-2 text-gray-600">{battle.tactics[0]}</td>
                <td className="py-2 px-2 text-gray-600">{battle.keyFigures[0]}</td>
                <td className="py-2 px-2 text-gray-600">{battle.outcome}</td>
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
        <span className="text-gold font-semibold">⚔️ 6 Legendary Battles</span>
        <span className="mx-2">•</span>
        <span>🏹 5 Weapons & Technologies</span>
        <span className="mx-2">•</span>
        <span>👑 4 Elite Military Units</span>
        <span className="mx-2">•</span>
        <span>🌍 Global Coverage</span>
      </motion.div>
    </div>
  )
}