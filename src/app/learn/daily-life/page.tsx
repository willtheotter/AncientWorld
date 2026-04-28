'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, Home, Utensils, Shirt, GraduationCap, 
  Music, Heart, Building2, Sun, Moon, Star,
  ChevronLeft, ChevronRight, Globe, User,
  Briefcase, ShoppingBag, Flower, Coffee, 
  Bed, Bath, Wifi, Tv, Car, Plane
} from 'lucide-react'

interface CivilizationDailyLife {
  id: string
  name: string
  region: string
  period: string
  icon: any
  color: string
  description: string
  housing: string
  food: string
  clothing: string
  education: string
  entertainment: string
  socialStructure: string
  religion: string
  funerary: string
}

const dailyLifeData: CivilizationDailyLife[] = [
  {
    id: 'egyptian',
    name: 'Ancient Egyptian',
    region: 'Northeast Africa',
    period: 'c. 3100-30 BCE',
    icon: Sun,
    color: 'from-amber-600 to-orange-600',
    description: `Ancient Egyptian daily life revolved around the Nile River, which provided water, food, transportation, and fertile soil. Society was hierarchical but offered opportunities for social mobility through education and skilled trades.`,
    housing: `Mudbrick houses with flat roofs used as living spaces. Wealthy homes had courtyards, gardens, pools, and multiple rooms with painted walls. Poor families lived in small one-room houses with thatched roofs. Furniture included wooden beds, stools, chests, and headrests.`,
    food: `Bread (dozens of varieties), beer (daily staple), onions, garlic, leeks, beans, lentils, dates, figs, grapes, pomegranates. Meat (beef, goat, lamb, poultry) and fish were eaten by wealthier Egyptians. Honey was primary sweetener. Meals eaten with fingers, seated on stools.`,
    clothing: `Linen garments (white for purity). Men wore kilts (shendyt), women wore fitted dresses (kalasiris). Both sexes wore wigs, makeup (kohl for eyes, malachite for eyelids), jewelry (gold, lapis lazuli, turquoise). Sandals made of leather or papyrus. Children wore no clothing until adolescence.`,
    education: `Scribes trained for 12+ years in temple schools. Boys of elite families learned reading, writing, mathematics, religion. Girls educated at home in domestic skills. Apprenticeships for crafts. Literacy rate estimated at 1-5% of population.`,
    entertainment: `Board games (Senet, Mehen, Hounds and Jackals). Music (harp, lute, flute, sistrum, drums). Dancing at festivals and banquets. Hunting (birds, hippos), fishing, swimming, wrestling, boxing. Storytelling and poetry. The Opet Festival celebrated with parades and feasting.`,
    socialStructure: `Pharaoh (divine king) → Vizier and high priests → Nobles and scribes → Craftsmen and merchants → Farmers and laborers → Slaves (prisoners of war). Women had significant rights: could own property, initiate divorce, serve as priests, and even rule as pharaoh.`,
    religion: `Daily household worship of household gods (Bes, Taweret). Offerings to ancestors. Participation in temple festivals. Personal piety expressed through prayers and offerings to personal gods. Egyptian religion centered on Ma'at (truth, balance, order).`,
    funerary: `Afterlife preparation through mummification (70 days for wealthy). Burial in tombs with grave goods (food, furniture, shabtis, Book of the Dead spells). Tombs decorated with scenes of daily life. Commoners buried in desert pits with simple goods.`
  },
  {
    id: 'greek',
    name: 'Ancient Greek',
    region: 'Southern Europe',
    period: 'c. 800-146 BCE',
    icon: Star,
    color: 'from-cyan-600 to-blue-600',
    description: `Greek daily life varied greatly between city-states, with Athens and Sparta representing opposite ends of the spectrum. The agora (marketplace) was the center of civic life. Men dominated public life while women managed households.`,
    housing: `Courtyard houses (andron for male entertaining, gynaikon for women's quarters). Walls of mudbrick on stone foundations, tiled roofs. Wealthy homes had mosaics, frescoes, multiple rooms. Poor lived in small two-room houses. Furniture included couches, tables, lamps, storage chests.`,
    food: `Grain (barley, wheat) made into bread or porridge. Olives and olive oil (ubiquitous). Wine diluted with water. Vegetables ( lentils, chickpeas, onions, garlic), fruits (figs, grapes, apples), fish, and occasionally meat (goat, lamb, pork) for the wealthy. Breakfast was light, main meal in evening.`,
    clothing: `Chiton (tunic) for men and women, himation (cloak) worn over. Spartans wore simple short tunics (exomis). Wool and linen fabrics. Wealthy wore dyed garments (purple from murex shells). Women wore jewelry (gold, silver, gemstones). Both sexes wore sandals or went barefoot.`,
    education: `Boys educated from age 7 (reading, writing, mathematics, music, athletics). Athenian education emphasized rhetoric and philosophy; Spartan education (agoge) emphasized military training. Girls educated at home in domestic skills. Wealthy Athenians studied with philosophers.`,
    entertainment: `Theater (tragedy and comedy competitions). Athletic competitions (Olympic Games, Pythian, Isthmian, Nemean). Symposiums (drinking parties for male elites). Music (aulos, lyre, kithara). Board games (petteia). Dancing, hunting, fishing. Storytelling of myths and Homeric epics.`,
    socialStructure: `Citizens (male landowners) → Metics (resident foreigners) → Slaves (prisoners of war, debtors). Sparta had helots (state-owned serfs). Women had limited rights (could not vote or own property). Athens practiced democracy for citizens; Sparta had military oligarchy.`,
    religion: `Household worship of Hestia (hearth goddess). Offerings to household gods. Participation in public festivals (Panathenaea, Dionysia). Consulting oracles (Delphi). Wearing of amulets (evil eye). Greek religion centered on Olympian gods with local variations.`,
    funerary: `Cremation or inhumation (burial). Coins placed in mouth for Charon's ferry across Styx. Grave goods (pottery, jewelry, weapons). Elaborate grave markers (kouros, kore statues). Commemorative feasts at graves. Cemetery outside city walls (laws prohibited burial within city).`
  },
  {
    id: 'roman',
    name: 'Ancient Roman',
    region: 'Mediterranean',
    period: 'c. 753 BCE - 476 CE',
    icon: Building2,
    color: 'from-red-600 to-orange-600',
    description: `Roman daily life centered around the city of Rome and the Roman family (familia). The paterfamilias (male head of household) had absolute authority. Bread and circuses (panem et circenses) kept the masses content.`,
    housing: `Insulae (apartment blocks) for plebeians, domus (single-family houses) for wealthy, villas for elite in countryside. Domus had atrium, peristyle garden, triclinium (dining room), cubicula (bedrooms), kitchen, bath. Insulae often collapsed or caught fire.`,
    food: `Grain (bread, porridge), olives (oil), wine, vegetables (cabbage, lentils, beans), fruits (grapes, figs, apples), cheese, eggs, fish, and meat (pork, goat, chicken) for wealthy. Breakfast (ientaculum), lunch (prandium), dinner (cena—main meal). Garum (fermented fish sauce) used as condiment.`,
    clothing: `Tunic for men and women; toga for Roman citizens (worn only for formal occasions). Stola for married women. Wool and linen fabrics. Wealthy wore silk and dyed garments (purple). Sandals and shoes (calcei). Jewelry (gold rings, brooches, necklaces).`,
    education: `Boys and some girls educated from age 7: reading, writing, arithmetic, rhetoric. Wealthy families hired tutors or sent sons to grammar schools. Higher education in rhetoric for political careers (study of Cicero, Virgil, Horace).`,

    entertainment: `Colosseum (gladiatorial games, animal hunts). Circus Maximus (chariot racing). Theaters (plays, mime). Public baths (thermae) for socializing, exercising, bathing. Board games (ludus latrunculorum). Gambling with dice. Festivals (Saturnalia, Lupercalia).`,
    socialStructure: `Patricians (aristocratic families) → Plebeians (common citizens) → Freedmen (former slaves) → Slaves (prisoners of war, debtors). Emperor at top (after 27 BCE). Women had limited rights but more freedom than Greek women; could own property and run businesses.`,
    religion: `Household worship of Lares and Penates (household gods). Public festivals and sacrifices. Emperor worship (imperial cult). Mystery cults (Mithras, Isis, Cybele). Augury (reading omens). Adoption of Christianity (state religion by 380 CE).`,
    funerary: `Cremation or inhumation (burial). Tombs built along roads (Via Appia). Funeral banquets and commemorative feasts. Elaborate grave goods. Catacombs used by Christians. Epitaphs (sometimes humorous or critical of the deceased).`
  },
  {
    id: 'chinese',
    name: 'Ancient Chinese',
    region: 'East Asia',
    period: 'c. 2070 BCE - 220 CE',
    icon: Home,
    color: 'from-red-700 to-gold-600',
    description: `Chinese daily life was shaped by Confucian values emphasizing filial piety, ancestor veneration, and social harmony. The family was the basic unit of society. Agriculture formed the economic foundation.`,
    housing: `Courtyard houses (siheyuan) with rooms arranged around a central courtyard. Wealthy homes had multiple courtyards, gardens, and elaborate decorations. Poor lived in simple one-room houses. Furniture included wooden beds, tables, chairs, cabinets, and kang (heated sleeping platform).`,
    food: `Rice in the south, wheat (noodles, steamed buns) in the north. Millet, soybeans, vegetables (cabbage, bok choy), tofu, fish, pork, chicken, and spices (ginger, star anise). Tea (earliest evidence c. 1000 BCE). Chopsticks used for eating.`,
    clothing: `Hanfu (robe) with crossed collar, belt, and long sleeves. Silk for wealthy, hemp for commoners. Colors indicated status (yellow for emperor, purple for high officials, green for lower ranks). Jade and gold jewelry. Elaborate hairstyles (men's topknot, women's buns).`,
    education: `Confucian classics (Four Books and Five Classics) required for civil service exams. Boys educated in village schools, wealthier families hired tutors. Exam system (keju) created meritocratic bureaucracy. Girls educated at home in domestic skills.`,
    entertainment: `Board games (Go, Liubo). Music (qin, pipa, drums). Acrobatics and martial arts. Festivals (Chinese New Year, Dragon Boat Festival). Kite flying. Storytelling and shadow puppetry. Poetry and calligraphy as elite pastimes.`,
    socialStructure: `Emperor → Nobles and officials (scholar-officials) → Peasants → Artisans → Merchants (lowest status due to not producing goods). Confucian hierarchy: ruler over subject, father over son, husband over wife, elder over younger.`,
    religion: `Ancestor veneration (offerings at household shrines). Daoism and Confucianism as philosophical systems. Buddhism introduced during Han Dynasty (1st century CE). Worship of nature spirits and local deities. The concept of Tian (Heaven) and the Mandate of Heaven.`,
    funerary: `Elaborate burials for wealthy (tombs with grave goods: pottery, bronze vessels, jade suits, food). Burning of paper money (spirit money) as offerings. Tomb figurines (mingqi) represent servants, animals, buildings. Filial piety required proper burial rites.`
  },
  {
    id: 'mesoamerican',
    name: 'Mesoamerican (Maya/Aztec)',
    region: 'Central America',
    period: 'c. 2000 BCE - 1500 CE',
    icon: Sun,
    color: 'from-green-700 to-teal-600',
    description: `Mesoamerican daily life revolved around agriculture (maize), religion (human sacrifice), and complex calendar systems. Society was highly stratified with powerful priestly and warrior classes.`,
    housing: `Thatched-roof houses with mudbrick or stone walls. Platforms elevated for elite residences. Multiple structures around central courtyard. Sweat bath houses for purification. Furniture minimal (reed mats for sleeping, low tables).`,
    food: `Maize (corn) as staple—made into tortillas, tamales, atole (corn drink). Beans, squash, chili peppers, tomatoes, avocados, cacao (chocolate, reserved for elite). Meat from hunting (deer, rabbit, turkey, iguana), fishing, and domesticated dogs (for special occasions).`,
    clothing: `Maya: cotton textiles dyed with vibrant colors (red, blue, green). Men wore loincloths and capes; women wore huipils (loose tunics). Elaborate headdresses, jewelry (jade, gold, feathers). Aztec: similar with richer ornamentation for nobility (gold, turquoise, quetzal feathers).`,
    education: `Maya: elite children trained in reading, writing (hieroglyphs), mathematics, astronomy, calendar. Aztec: calmecac (elite schools) for priests and nobles; telpochcalli (commoner schools) for military training. Girls educated in domestic skills.`,
    entertainment: `Mesoamerican ballgame (ulama) with rubber ball, played in stone courts. Music (drums, flutes, rattles, conch shells). Dance (elaborate ritual dances). Feasting and drinking (pulque, cacao). Board games (patolli). Drama and ritual reenactments.`,
    socialStructure: `King (halach uinic for Maya, tlatoani for Aztec) → Priests and nobles → Warriors and merchants → Artisans → Farmers → Slaves. Social mobility through military achievement (capturing prisoners for sacrifice).`,
    religion: `Polytheistic pantheon (Itzamna, Kukulkan/Quetzalcoatl, Tlaloc, Huitzilopochtli). Human sacrifice (heart extraction) to appease gods and maintain cosmic order. Bloodletting rituals (piercing tongue, ears, genitals). Calendar cycles (260-day sacred calendar, 365-day solar calendar).`,
    funerary: `Burial under house floors for commoners. Elaborate tombs for royalty with jade death masks, grave goods. Cremation for high-status individuals. Offerings of food, drink, and sacrificial victims. The Popol Vuh describes Maya underworld (Xibalba).`
  }
]

export default function DailyLifePage() {
  const [activeCivilization, setActiveCivilization] = useState(dailyLifeData[0])
  const civIndex = dailyLifeData.findIndex(c => c.id === activeCivilization.id)

  const nextCiv = () => {
    if (civIndex < dailyLifeData.length - 1) {
      setActiveCivilization(dailyLifeData[civIndex + 1])
    }
  }

  const prevCiv = () => {
    if (civIndex > 0) {
      setActiveCivilization(dailyLifeData[civIndex - 1])
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
          <Users size={24} />
          <span className="text-sm uppercase tracking-wider">Ordinary Lives</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Daily Life</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how ordinary people lived, worked, ate, dressed, and played in ancient civilizations
        </p>
      </motion.div>

      {/* Civilization Selector */}
      <div className="flex justify-center gap-3 flex-wrap">
        {dailyLifeData.map((civ) => (
          <button
            key={civ.id}
            onClick={() => setActiveCivilization(civ)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCivilization.id === civ.id
                ? `bg-gradient-to-r ${civ.color} text-white shadow-lg`
                : 'bg-white/50 hover:bg-white/80 text-gray-700'
            }`}
          >
            <div className="flex items-center gap-2">
              <civ.icon size={16} />
              <span>{civ.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Main Content Carousel */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-egyptian-blue flex items-center gap-2">
            <Globe size={24} className="text-gold" />
            {activeCivilization.name} Daily Life
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prevCiv}
              disabled={civIndex === 0}
              className={`p-2 rounded-full transition-all ${
                civIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextCiv}
              disabled={civIndex === dailyLifeData.length - 1}
              className={`p-2 rounded-full transition-all ${
                civIndex < dailyLifeData.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCivilization.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`egyptian-card bg-gradient-to-r ${activeCivilization.color}/10`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 rounded-full bg-gradient-to-r ${activeCivilization.color} text-white`}>
                <activeCivilization.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-egyptian-blue">{activeCivilization.name} Civilization</h3>
                <p className="text-sm text-gold">{activeCivilization.period} • {activeCivilization.region}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{activeCivilization.description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Home size={16} />
                    Housing
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.housing}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Utensils size={16} />
                    Food & Drink
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.food}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Shirt size={16} />
                    Clothing & Appearance
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.clothing}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <GraduationCap size={16} />
                    Education
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.education}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Music size={16} />
                    Entertainment & Recreation
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.entertainment}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Users size={16} />
                    Social Structure
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.socialStructure}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Building2 size={16} />
                    Religion & Beliefs
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.religion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                    <Star size={16} />
                    Funerary Customs
                  </h4>
                  <p className="text-sm text-gray-700">{activeCivilization.funerary}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Daily Life Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="egyptian-card overflow-x-auto"
      >
        <h2 className="text-2xl font-bold text-egyptian-blue mb-4 flex items-center gap-2">
          <User size={24} className="text-gold" />
          Civilizations Comparison
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gold/30">
              <th className="text-left py-2 px-2 text-gold">Civilization</th>
              <th className="text-left py-2 px-2 text-gold">Period</th>
              <th className="text-left py-2 px-2 text-gold">Housing</th>
              <th className="text-left py-2 px-2 text-gold">Staple Food</th>
              <th className="text-left py-2 px-2 text-gold">Social Mobility</th>
             </tr>
          </thead>
          <tbody>
            {dailyLifeData.map((civ) => (
              <tr key={civ.id} className="border-b border-gold/20 hover:bg-white/20 transition-colors">
                <td className="py-2 px-2 font-semibold text-egyptian-blue">{civ.name}</td>
                <td className="py-2 px-2 text-gray-600">{civ.period}</td>
                <td className="py-2 px-2 text-gray-600">
                  {civ.housing.split('.')[0].substring(0, 60)}...
                 </td>
                <td className="py-2 px-2 text-gray-600">
                  {civ.food.split('.')[0].substring(0, 50)}...
                 </td>
                <td className="py-2 px-2 text-gray-600">
                  {civ.socialStructure.split('.')[0].substring(0, 50)}...
                 </td>
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
        <span className="text-gold font-semibold">5 Ancient Civilizations</span>
        <span className="mx-2">•</span>
        <span>9 Aspects of Daily Life</span>
        <span className="mx-2">•</span>
        <span>Global Coverage</span>
      </motion.div>
    </div>
  )
}