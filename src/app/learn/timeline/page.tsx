'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, ChevronLeft, ChevronRight, Pyramid, Building2, 
  Landmark, Crown, Sword, BookOpen, Sun, Moon, Star, 
  Globe, Users, Heart, Zap, Shield, Flag
} from 'lucide-react'

interface Era {
  id: string
  name: string
  period: string
  color: string
  icon: any
  description: string
  content: string
  keyEvents: string[]
  keyFigures: string[]
  sites: string[]
  civilizations: string[]
  achievements: string[]
}

const eras: Era[] = [
  {
    id: 'prehistoric',
    name: 'Prehistoric Era',
    period: 'c. 40,000 - 3500 BCE',
    color: 'from-stone-600 to-amber-700',
    icon: Shield,
    description: 'The Dawn of Human Civilization',
    content: `The Prehistoric era marks the beginning of human history, from the first cave paintings to the rise of agriculture and the first settled communities. During this period, humans transitioned from nomadic hunter-gatherers to settled farmers, developing the foundations of civilization.

Key developments include the domestication of plants and animals (wheat, barley, sheep, goats, cattle), the invention of pottery for storage and cooking, the construction of the first permanent settlements (Jericho, Çatalhöyük), and the creation of megalithic structures (Stonehenge, Göbekli Tepe).

The invention of writing at the end of this period (Sumerian cuneiform, c. 3400 BCE) marks the transition from prehistory to recorded history.`,
    keyEvents: [
      'c. 40,000 BCE: First cave paintings (Chauvet, Lascaux)',
      'c. 10,000 BCE: Agricultural Revolution begins',
      'c. 8,000 BCE: Jericho settlement (first walled city)',
      'c. 6,000 BCE: Bronze working begins',
      'c. 3,500 BCE: Invention of the wheel (Mesopotamia)',
      'c. 3,400 BCE: First writing (Sumerian cuneiform)'
    ],
    keyFigures: [
      'First farmers (unknown)',
      'First potters (unknown)',
      'Early toolmakers'
    ],
    sites: [
      'Göbekli Tepe (Turkey, c. 9500 BCE)',
      'Jericho (Palestine, c. 8000 BCE)',
      'Çatalhöyük (Turkey, c. 7500 BCE)',
      'Stonehenge (England, c. 3000 BCE)'
    ],
    civilizations: ['Hunter-gatherers', 'Early farmers', 'Megalith builders'],
    achievements: [
      'Domestication of plants and animals',
      'Permanent settlements',
      'Pottery and ceramics',
      'Megalithic architecture',
      'Weaving and textiles',
      'First religious structures'
    ]
  },
  {
    id: 'sumerian',
    name: 'Sumerian & Akkadian',
    period: 'c. 3500 - 2000 BCE',
    color: 'from-amber-600 to-yellow-600',
    icon: Crown,
    description: 'The First Civilization',
    content: `The Sumerians established the world's first true civilization in southern Mesopotamia (modern Iraq) around 3500 BCE. They invented writing (cuneiform), built the first cities (Uruk, Ur), and created the first legal codes, schools, and literature.

The Sumerians developed advanced mathematics (base-60 system, which gave us 60-minute hours and 360-degree circles), astronomy (mapping the stars, predicting eclipses), and engineering (irrigation canals, ziggurats). The Akkadians, under Sargon the Great (c. 2334 BCE), created the world's first empire, uniting Mesopotamia under one ruler.

Key innovations include the wheel, the plow, the sailboat, and the potter's wheel—inventions that transformed human civilization. The Epic of Gilgamesh, the oldest surviving work of literature, comes from this period.`,
    keyEvents: [
      'c. 3500 BCE: First Sumerian cities (Uruk, Ur)',
      'c. 3400 BCE: Invention of cuneiform writing',
      'c. 3200 BCE: Invention of the wheel',
      'c. 2334 BCE: Sargon creates Akkadian Empire',
      'c. 2100 BCE: Ur III Dynasty (Sumerian renaissance)'
    ],
    keyFigures: [
      'Gilgamesh (legendary king of Uruk)',
      'Sargon of Akkad (first empire builder)',
      'Enheduanna (first named author)',
      'Ur-Nammu (law code writer)'
    ],
    sites: [
      'Uruk (largest Sumerian city)',
      'Ur (Royal Cemetery, Ziggurat)',
      'Eridu (earliest Sumerian city)',
      'Akkad (first imperial capital, location unknown)'
    ],
    civilizations: ['Sumerian', 'Akkadian'],
    achievements: [
      'Cuneiform writing',
      'First cities (urban revolution)',
      'First empire (Akkadian)',
      'Base-60 mathematics',
      'Epic of Gilgamesh',
      'Ziggurat architecture'
    ]
  },
  {
    id: 'egypt-old',
    name: 'Old Kingdom Egypt',
    period: 'c. 2686 - 2181 BCE',
    color: 'from-amber-600 to-orange-600',
    icon: Pyramid,
    description: 'The Age of the Pyramids',
    content: `The Old Kingdom (Dynasties 3-6) was Egypt's first golden age, known as the "Age of the Pyramids." Pharaohs were considered living gods, ruling from the capital of Memphis. This period saw the construction of the first pyramids, culminating in the Great Pyramid of Giza (c. 2560 BCE), one of the Seven Wonders of the Ancient World.

The concept of divine kingship became fully established during this era. Pharaoh Khufu (Cheops) built the Great Pyramid, his son Khafre built the second pyramid and the Sphinx, and Menkaure built the third. The Pyramid Texts, the oldest religious writings in the world, appeared at the end of this period.

The Old Kingdom was also a time of artistic perfection, with the development of the canon of proportions for human figures that remained standard for 3,000 years. The period ended with decentralization and famine during the First Intermediate Period.`,
    keyEvents: [
      'c. 2686 BCE: Beginning of 3rd Dynasty',
      'c. 2670 BCE: Step Pyramid of Djoser built',
      'c. 2560 BCE: Great Pyramid of Khufu completed',
      'c. 2500 BCE: Great Sphinx carved',
      'c. 2181 BCE: Old Kingdom collapses'
    ],
    keyFigures: [
      'Djoser (builder of Step Pyramid)',
      'Imhotep (architect, later deified)',
      'Khufu (builder of Great Pyramid)',
      'Khafre (builder of second pyramid, Sphinx)'
    ],
    sites: [
      'Step Pyramid of Djoser (Saqqara)',
      'Great Pyramid of Giza',
      'Great Sphinx',
      'Pyramids of Abusir'
    ],
    civilizations: ['Egyptian'],
    achievements: [
      'First pyramids (step to true)',
      'Great Pyramid (world\'s tallest structure for 3,800 years)',
      'Pyramid Texts (oldest religious writings)',
      'Canon of proportions in art',
      'Centralized bureaucracy'
    ]
  },
  {
    id: 'egypt-middle',
    name: 'Middle Kingdom Egypt',
    period: 'c. 2055 - 1650 BCE',
    color: 'from-teal-600 to-green-600',
    icon: Building2,
    description: 'The Golden Age of Literature',
    content: `The Middle Kingdom (Dynasties 11-13) is considered Egypt's "Classical Age," when the arts flourished and literature reached new heights. Pharaoh Mentuhotep II reunified Egypt after the First Intermediate Period, establishing the capital at Thebes.

This period saw the expansion of Egypt into Nubia, securing trade routes and gold mines. Pharaohs adopted a more accessible image as "shepherds of the people" rather than distant gods. The Coffin Texts democratized the afterlife, making funerary spells available to commoners.

Literature flourished, producing classics like "The Story of Sinuhe," "The Eloquent Peasant," and "The Shipwrecked Sailor." Egyptian control extended south to the Second Cataract of the Nile, with fortresses built to secure the new border.`,
    keyEvents: [
      'c. 2055 BCE: Mentuhotep II reunifies Egypt',
      'c. 1985 BCE: Amenemhat I founds 12th Dynasty',
      'c. 1900 BCE: Conquest of Nubia',
      'c. 1800 BCE: Coffin Texts appear',
      'c. 1650 BCE: Hyksos invasion begins'
    ],
    keyFigures: [
      'Mentuhotep II (reunifier)',
      'Amenemhat I (founder of 12th Dynasty)',
      'Senusret III (great conqueror)',
      'Amenemhat III (builder of Labyrinth)'
    ],
    sites: [
      'Temple of Mentuhotep II (Deir el-Bahari)',
      'Pyramid of Senusret III (Dahshur)',
      'Labyrinth of Amenemhat III (Hawara)',
      'Buhen Fortress (Nubia)'
    ],
    civilizations: ['Egyptian', 'Nubian'],
    achievements: [
      'Classical Egyptian literature',
      'Conquest of Nubia',
      'Coffin Texts (democratized afterlife)',
      'Faience production',
      'Irrigation improvements'
    ]
  },
  {
    id: 'egypt-new',
    name: 'New Kingdom Egypt',
    period: 'c. 1550 - 1069 BCE',
    color: 'from-purple-600 to-indigo-600',
    icon: Crown,
    description: 'Egypt\'s Imperial Age',
    content: `The New Kingdom (Dynasties 18-20) was Egypt's most powerful and prosperous era, often called the "Egyptian Empire." Pharaohs expelled the Hyksos and expanded Egypt's borders to their greatest extent, from Syria to Nubia.

This period produced Egypt's most famous pharaohs: Hatshepsut (female pharaoh who built Deir el-Bahari), Thutmose III (Napoleon of Egypt), Akhenaten (monotheistic "heretic king"), Tutankhamun (boy king whose tomb was found intact), and Ramesses II (the Great, builder of Abu Simbel).

The Valley of the Kings became the royal burial ground. The Book of the Dead guided souls through the afterlife. Egypt fought the Battle of Kadesh (1274 BCE) against the Hittites, the world's first recorded peace treaty. The Bronze Age Collapse (c. 1177 BCE) ended this golden age.`,
    keyEvents: [
      'c. 1550 BCE: Ahmose expels Hyksos',
      'c. 1479 BCE: Hatshepsut becomes pharaoh',
      'c. 1457 BCE: Battle of Megiddo (Thutmose III)',
      'c. 1350 BCE: Akhenaten\'s Amarna Revolution',
      'c. 1274 BCE: Battle of Kadesh',
      'c. 1258 BCE: First peace treaty (Egypt-Hittite)'
    ],
    keyFigures: [
      'Hatshepsut (female pharaoh)',
      'Thutmose III (warrior pharaoh)',
      'Akhenaten (monotheistic reformer)',
      'Tutankhamun (boy king)',
      'Ramesses II (the Great)',
      'Nefertiti (Akhenaten\'s queen)'
    ],
    sites: [
      'Valley of the Kings (royal tombs)',
      'Temple of Hatshepsut (Deir el-Bahari)',
      'Karnak Temple (largest religious complex)',
      'Luxor Temple (Opet Festival)',
      'Abu Simbel (Ramesses II)'
    ],
    civilizations: ['Egyptian', 'Hittite', 'Nubian', 'Canaanite'],
    achievements: [
      'Largest empire in Egyptian history',
      'Valley of the Kings tombs',
      'Book of the Dead',
      'Battle of Kadesh (largest chariot battle)',
      'First recorded peace treaty',
      'Temples at Abu Simbel, Luxor, Karnak'
    ]
  },
  {
    id: 'mesopotamia',
    name: 'Mesopotamian Empires',
    period: 'c. 2000 - 539 BCE',
    color: 'from-yellow-600 to-amber-600',
    icon: Building2,
    description: 'Babylonian, Assyrian & Chaldean Empires',
    content: `After the fall of Sumer, Mesopotamia saw a succession of powerful empires. The Old Babylonian Empire under Hammurabi (c. 1792-1750 BCE) created the world's most famous law code ("eye for an eye"). The Assyrian Empire (c. 911-609 BCE) became history's first true military machine, with professional armies, siege engines, and mass deportations.

The Neo-Babylonian (Chaldean) Empire under Nebuchadnezzar II (c. 605-562 BCE) rebuilt Babylon into the world's greatest city, constructing the Ishtar Gate, the Hanging Gardens (one of the Seven Wonders), and the Etemenanki ziggurat (the Tower of Babel).

The Assyrians created the world's first libraries (Ashurbanipal's library at Nineveh), preserving the Epic of Gilgamesh and thousands of other texts. The Babylonians excelled in astronomy (creating the zodiac, predicting eclipses) and mathematics (Pythagorean theorem, quadratic equations).`,
    keyEvents: [
      'c. 1792 BCE: Hammurabi becomes king of Babylon',
      'c. 1754 BCE: Code of Hammurabi issued',
      'c. 911 BCE: Neo-Assyrian Empire begins',
      'c. 612 BCE: Fall of Nineveh',
      'c. 605 BCE: Nebuchadnezzar II reigns',
      'c. 539 BCE: Babylon falls to Persia'
    ],
    keyFigures: [
      'Hammurabi (lawgiver)',
      'Sargon II (Assyrian conqueror)',
      'Ashurbanipal (library builder)',
      'Nebuchadnezzar II (Babylon\'s greatest king)',
      'Belshazzar (last Babylonian king)'
    ],
    sites: [
      'Babylon (Ishtar Gate, Hanging Gardens)',
      'Nineveh (Library of Ashurbanipal)',
      'Nimrud (Assyrian capital)',
      'Dur-Sharrukin (Sargon II\'s capital)'
    ],
    civilizations: ['Babylonian', 'Assyrian', 'Chaldean', 'Mede'],
    achievements: [
      'Code of Hammurabi',
      'Library of Ashurbanipal (oldest library)',
      'Hanging Gardens of Babylon',
      'Ishtar Gate',
      'Babylonian astronomy and mathematics'
    ]
  },
  {
    id: 'persian',
    name: 'Persian Empire',
    period: 'c. 550 - 330 BCE',
    color: 'from-purple-700 to-indigo-800',
    icon: Crown,
    description: 'The World\'s First Superpower',
    content: `The Achaemenid Persian Empire, founded by Cyrus the Great (c. 550 BCE), became the largest empire the world had ever seen, stretching from India to Greece. Cyrus established a revolutionary model of imperial administration, respecting local religions and customs ("Cyrus Cylinder," the first charter of human rights).

Darius I (c. 522-486 BCE) organized the empire into 20 provinces (satrapies), built the Royal Road (2,500 km connecting Susa to Sardis), and constructed the ceremonial capital of Persepolis. He standardized coinage, weights, measures, and created a courier system that inspired the Roman post.

The Persians fought the Greco-Persian Wars (499-449 BCE), including Marathon, Thermopylae, and Salamis. Xerxes I (c. 486-465 BCE) invaded Greece but was defeated. The empire was eventually conquered by Alexander the Great (330 BCE).`,
    keyEvents: [
      'c. 550 BCE: Cyrus the Great founds empire',
      'c. 539 BCE: Cyrus conquers Babylon',
      'c. 522 BCE: Darius I becomes king',
      'c. 490 BCE: Battle of Marathon',
      'c. 480 BCE: Battles of Thermopylae, Salamis',
      'c. 330 BCE: Alexander conquers Persia'
    ],
    keyFigures: [
      'Cyrus the Great (empire founder)',
      'Darius I (great organizer)',
      'Xerxes I (invader of Greece)',
      'Artaxerxes II (longest-reigning king)',
      'Darius III (last king, defeated by Alexander)'
    ],
    sites: [
      'Persepolis (ceremonial capital)',
      'Pasargadae (tomb of Cyrus)',
      'Naqsh-e Rostam (royal tombs)',
      'Susa (administrative capital)',
      'Ecbatana (summer capital)'
    ],
    civilizations: ['Persian', 'Median', 'Elamite', 'Babylonian', 'Egyptian (as satrapy)'],
    achievements: [
      'Largest empire to date (7.5 million km²)',
      'Royal Road (2,500 km)',
      'Standardized coinage and weights',
      'Satrapy administrative system',
      "Cyrus Cylinder (human rights charter)",
      'Persepolis architecture'
    ]
  },
  {
    id: 'minoan-mycenaean',
    name: 'Minoan & Mycenaean',
    period: 'c. 2700 - 1100 BCE',
    color: 'from-teal-600 to-cyan-600',
    icon: 'Palaces',
    description: 'The First European Civilizations',
    content: `The Minoan civilization (c. 2700-1450 BCE) on Crete was Europe's first advanced civilization, named after the legendary King Minos. They built magnificent palaces (Knossos, Phaistos, Malia, Zakros) with advanced plumbing, frescoes, and labyrinthine layouts that may have inspired the Minotaur myth. Minoan script (Linear A) remains undeciphered.

The Mycenaean civilization (c. 1600-1100 BCE) on mainland Greece was a warrior culture remembered in Homer's epics. They built massive citadels (Mycenae, Tiryns) with Cyclopean walls and tholos tombs, including the Treasury of Atreus. Mycenaean Linear B script (deciphered as early Greek) records the first written Greek.

The eruption of Thera (Santorini, c. 1600 BCE) devastated Minoan civilization. The Mycenaeans conquered Crete and adopted Minoan culture. Both civilizations fell during the Bronze Age Collapse (c. 1177 BCE), leading to the Greek Dark Ages.`,
    keyEvents: [
      'c. 2700 BCE: Minoan civilization begins',
      'c. 1900 BCE: First Minoan palaces built',
      'c. 1600 BCE: Mycenaean civilization emerges',
      'c. 1600 BCE: Thera eruption',
      'c. 1450 BCE: Mycenaeans conquer Crete',
      'c. 1180 BCE: Bronze Age Collapse'
    ],
    keyFigures: [
      'Minos (legendary king of Crete)',
      'Agamemnon (legendary king of Mycenae)',
      'Nestor (king of Pylos in Homer)',
      'Theseus (legendary hero, Minotaur slayer)'
    ],
    sites: [
      'Knossos (largest Minoan palace)',
      'Phaistos (second palace, Phaistos Disc)',
      'Mycenae (Lion Gate, Treasury of Atreus)',
      'Tiryns (Cyclopean walls)',
      'Pylos (Palace of Nestor, Linear B archive)'
    ],
    civilizations: ['Minoan', 'Mycenaean'],
    achievements: [
      'First European civilization',
      'Advanced palace architecture (flush toilets, light wells)',
      'Linear A and Linear B writing',
      'Cyclopean walls',
      'Tholos (beehive) tombs',
      "Homeric epics (oral tradition)"
    ]
  },
  {
    id: 'classical-greece',
    name: 'Classical Greece',
    period: 'c. 800 - 146 BCE',
    color: 'from-cyan-600 to-blue-600',
    icon: Building2,
    description: 'Birthplace of Western Civilization',
    content: `The Greek Dark Ages ended around 800 BCE, leading to the rise of city-states (poleis), including Athens (democracy), Sparta (military oligarchy), Corinth (trade), and Thebes (military). Greek civilization produced democracy, philosophy (Socrates, Plato, Aristotle), theater (Aeschylus, Sophocles, Euripides, Aristophanes), history (Herodotus, Thucydides), and the Olympic Games (776 BCE).

The Persian Wars (499-449 BCE) saw Greece unite against the Persian Empire, winning famous battles at Marathon (490 BCE), Thermopylae (480 BCE), and Salamis (480 BCE). The Peloponnesian War (431-404 BCE) between Athens and Sparta devastated Greece, leading to Macedonian conquest.

Philip II of Macedon conquered Greece (338 BCE). His son, Alexander the Great (336-323 BCE), conquered the Persian Empire, reaching India. Alexander's conquests spread Greek culture across the known world (Hellenistic period).`,
    keyEvents: [
      '776 BCE: First Olympic Games',
      '508 BCE: Athenian democracy established',
      '490 BCE: Battle of Marathon',
      '480 BCE: Battles of Thermopylae, Salamis',
      '431-404 BCE: Peloponnesian War',
      '338 BCE: Philip II conquers Greece',
      '334-323 BCE: Alexander\'s conquests'
    ],
    keyFigures: [
      'Socrates, Plato, Aristotle (philosophers)',
      'Pericles (Athenian statesman)',
      'Leonidas (Spartan king)',
      'Alexander the Great (conqueror)',
      'Sophocles, Euripides (playwrights)'
    ],
    sites: [
      'Acropolis of Athens (Parthenon)',
      'Delphi (oracle of Apollo)',
      'Olympia (Olympic Games)',
      'Sparta (military city-state)',
      'Thebes (city of Oedipus)'
    ],
    civilizations: ['Greek', 'Macedonian'],
    achievements: [
      'Athenian democracy',
      'Western philosophy',
      'Greek theater (tragedy, comedy)',
      'Olympic Games',
      'Parthenon and Classical architecture',
      'Hellenistic culture fusion'
    ]
  },
  {
    id: 'roman',
    name: 'Roman Republic & Empire',
    period: 'c. 753 BCE - 476 CE',
    color: 'from-red-600 to-orange-600',
    icon: 'Castle',
    description: 'From City-State to World Empire',
    content: `Rome was founded, according to legend, in 753 BCE. The Roman Republic (509-27 BCE) established a mixed constitution (consuls, Senate, assemblies) that inspired modern democracies. Rome conquered Italy, then the Mediterranean, defeating Carthage in the Punic Wars (264-146 BCE).

The Roman Empire (27 BCE - 476 CE) began with Augustus, the first emperor. The Empire reached its greatest extent under Trajan (117 CE), covering 5 million km². Rome built roads (80,000 km), aqueducts, baths, amphitheaters (Colosseum), and spread Roman law and Latin across Europe.

Christianity emerged in Roman Judea, spread despite persecution, and became the state religion under Constantine (313 CE). The Empire split into Eastern and Western halves. The Western Empire collapsed in 476 CE, while the Eastern (Byzantine) Empire continued for another 1,000 years.`,
    keyEvents: [
      '753 BCE: Legendary founding of Rome',
      '509 BCE: Roman Republic established',
      '264-146 BCE: Punic Wars (Carthage destroyed)',
      '44 BCE: Julius Caesar assassinated',
      '27 BCE: Augustus becomes first emperor',
      '117 CE: Empire reaches maximum extent',
      '313 CE: Edict of Milan (Christianity legalized)',
      '476 CE: Fall of Western Roman Empire'
    ],
    keyFigures: [
      'Julius Caesar (dictator, reformed Rome)',
      'Augustus (first emperor)',
      'Trajan (greatest extent of empire)',
      'Constantine (Christianity legalized)',
      'Marcus Aurelius (philosopher emperor)'
    ],
    sites: [
      'Roman Forum (political center)',
      'Colosseum (amphitheater)',
      'Pantheon (temple to all gods)',
      'Hadrian\'s Wall (Britain)',
      'Pont du Gard (aqueduct, France)'
    ],
    civilizations: ['Roman', 'Etruscan', 'Carthaginian', 'Byzantine'],
    achievements: [
      'Roman law (foundation of Western law)',
      'Roman roads and aqueducts',
      'Concrete architecture (Pantheon, Colosseum)',
      'Spread of Christianity',
      'Latin language (base of Romance languages)',
      'Roman peace (Pax Romana)'
    ]
  },
  {
    id: 'ancient-india',
    name: 'Ancient India',
    period: 'c. 3300 BCE - 550 CE',
    color: 'from-orange-600 to-red-600',
    icon: Star,
    description: 'Indus Valley to Gupta Empire',
    content: `The Indus Valley Civilization (c. 3300-1300 BCE) was one of the world's earliest urban cultures, with planned cities (Mohenjo-Daro, Harappa), advanced drainage systems, standardized weights, and undeciphered script. It traded with Mesopotamia and Egypt.

The Vedic Period (c. 1500-500 BCE) saw the composition of the Vedas, the oldest scriptures of Hinduism, and the development of the caste system. The Mahajanapadas (16 great kingdoms) emerged, including Magadha.

The Mauryan Empire (322-185 BCE), founded by Chandragupta, was India's first great empire. Ashoka (268-232 BCE) converted to Buddhism after the bloody Kalinga War, spreading Buddhism across Asia via his edicts and missionaries.

The Gupta Empire (c. 320-550 CE) was India's "Golden Age," producing the decimal system, zero, advanced mathematics (Aryabhata), literature (Kalidasa), and the Ajanta and Ellora cave temples.`,
    keyEvents: [
      'c. 3300 BCE: Indus Valley Civilization begins',
      'c. 1500 BCE: Vedic Period begins',
      'c. 600 BCE: Mahajanapadas emerge',
      '322 BCE: Mauryan Empire founded',
      '268 BCE: Ashoka becomes emperor',
      'c. 320 CE: Gupta Empire begins'
    ],
    keyFigures: [
      'Chandragupta Maurya (empire founder)',
      'Ashoka (Buddhist emperor)',
      'Chanakya (political strategist)',
      'Kalidasa (poet, playwright)',
      'Aryabhata (mathematician, astronomer)'
    ],
    sites: [
      'Mohenjo-Daro (Indus city)',
      'Pataliputra (Mauryan capital)',
      'Sanchi (Ashoka\'s stupa)',
      'Ajanta Caves (Buddhist art)',
      'Ellora Caves (Hindu, Buddhist, Jain art)'
    ],
    civilizations: ['Indus Valley', 'Vedic', 'Mauryan', 'Gupta'],
    achievements: [
      'Decimal system and zero',
      'Chess (Chaturanga)',
      'Ayurveda medicine',
      'Yoga and meditation',
      'Ajanta and Ellora cave art',
      'Spread of Buddhism across Asia'
    ]
  },
  {
    id: 'ancient-china',
    name: 'Ancient China',
    period: 'c. 2070 BCE - 220 CE',
    color: 'from-red-700 to-gold-600',
    icon: Crown,
    description: 'Xia, Shang, Zhou, Qin, Han',
    content: `Ancient China began with the legendary Xia Dynasty (c. 2070-1600 BCE). The Shang Dynasty (c. 1600-1046 BCE) left the first written records (oracle bones) and created magnificent bronze vessels. The Zhou Dynasty (c. 1046-256 BCE) introduced the Mandate of Heaven.

The Hundred Schools of Thought (6th-3rd centuries BCE) produced Confucianism (Confucius), Daoism (Laozi), Legalism (Han Feizi), and Mohism (Mozi). These philosophies shaped Chinese civilization for millennia.

The Qin Dynasty (221-206 BCE) unified China under Qin Shi Huang, the first emperor, who built the Great Wall (linking existing walls), standardized writing, coins, and measures, and created the Terracotta Army for his tomb.

The Han Dynasty (206 BCE - 220 CE) is considered China's golden age, establishing the Silk Road, developing paper, the seismograph, and the wheelbarrow, and creating the civil service exam system based on Confucian texts.`,
    keyEvents: [
      'c. 1600 BCE: Shang Dynasty begins',
      'c. 1046 BCE: Zhou Dynasty begins',
      'c. 551 BCE: Confucius born',
      '221 BCE: Qin unification',
      '206 BCE: Han Dynasty begins',
      '105 CE: Paper invented (Cai Lun)'
    ],
    keyFigures: [
      'Confucius (philosopher)',
      'Laozi (Daoist founder)',
      'Qin Shi Huang (first emperor)',
      'Emperor Wu of Han (Han golden age)',
      'Sima Qian (Grand Historian)'
    ],
    sites: [
      'Yinxu (Shang capital, oracle bones)',
      'Terracotta Army (Qin Shi Huang\'s tomb)',
      "Great Wall of China (Ming Dynasty section)",
      'Mawangdui (Han Dynasty tombs)',
      'Silk Road trading posts'
    ],
    civilizations: ['Xia', 'Shang', 'Zhou', 'Qin', 'Han'],
    achievements: [
      'Great Wall of China',
      'Terracotta Army',
      'Paper, printing, gunpowder (later)',
      'Silk Road trade network',
      'Civil service exams',
      'Confucianism and Daoism'
    ]
  },
  {
    id: 'mesoamerica',
    name: 'Mesoamerica',
    period: 'c. 1200 BCE - 1500 CE',
    color: 'from-green-700 to-teal-600',
    icon: Pyramid,
    description: 'Olmec, Maya, Teotihuacan, Aztec',
    content: `The Olmecs (c. 1200-400 BCE), Mesoamerica's "mother culture," created colossal stone heads and developed the Mesoamerican ballgame, calendar, and writing systems. Teotihuacan (c. 100 BCE - 550 CE) became Mesoamerica's largest city (200,000 people), with the Pyramid of the Sun (third largest pyramid in the world).

The Maya civilization (c. 2000 BCE - 1500 CE) developed the most advanced writing system in the Americas, a complex calendar, and built magnificent cities (Tikal, Palenque, Copán, Chichen Itza). They excelled in mathematics (concept of zero), astronomy (accurate Venus cycle), and art.

The Aztecs (c. 1300-1521 CE) built their capital Tenochtitlan on Lake Texcoco (modern Mexico City), creating an empire through conquest and tribute. They practiced human sacrifice on a massive scale to appease the gods and maintain cosmic order.`,
    keyEvents: [
      'c. 1200 BCE: Olmec civilization begins',
      'c. 100 CE: Teotihuacan reaches peak',
      'c. 250 CE: Maya Classic period begins',
      'c. 1325 CE: Tenochtitlan founded',
      '1428 CE: Aztec Triple Alliance formed',
      '1519-1521 CE: Spanish conquest of Aztecs'
    ],
    keyFigures: [
      'Pakal the Great (Maya king of Palenque)',
      'Smoking Frog (Teotihuacan ruler)',
      'Itzcoatl (Aztec empire builder)',
      'Montezuma II (Aztec emperor at conquest)',
      'Kukulkan (feathered serpent deity)'
    ],
    sites: [
      'Teotihuacan (Pyramids of Sun and Moon)',
      'Tikal (largest Maya city)',
      'Chichen Itza (El Castillo, serpent of light)',
      'Palenque (Temple of Inscriptions, Pakal\'s tomb)',
      'Tenochtitlan (Aztec capital, modern Mexico City)'
    ],
    civilizations: ['Olmec', 'Maya', 'Teotihuacan', 'Zapotec', 'Aztec'],
    achievements: [
      'Maya calendar and writing',
      'Concept of zero in mathematics',
      'Pyramids of Teotihuacan',
      'Chocolate (cacao) cultivation',
      'Advanced astronomy',
      'Mesoamerican ballgame'
    ]
  },
  {
    id: 'andes',
    name: 'Andean Civilizations',
    period: 'c. 3000 BCE - 1572 CE',
    color: 'from-terracotta-600 to-orange-600',
    icon: 'Mountain',
    description: 'Chavín, Nazca, Moche, Inca',
    content: `The Norte Chico civilization (c. 3000-1800 BCE) built pyramids in Peru contemporary with ancient Egypt. The Chavín culture (c. 900-200 BCE) became the first pan-Andean religious movement. The Nazca (c. 100 BCE - 800 CE) created the Nazca Lines, giant geoglyphs visible only from the air.

The Moche (c. 100-700 CE) built the largest adobe pyramid in the Americas (Huaca del Sol) and created realistic portrait pottery. The Wari and Tiwanaku (c. 500-1000 CE) established extensive trade networks.

The Inca Empire (c. 1200-1572 CE) grew from a small kingdom to the largest empire in pre-Columbian America (2 million km², 12 million people). They built Machu Picchu, a 40,000 km road system (Qhapaq Ñan), used quipus (knotted strings) for record-keeping, and practiced terrace agriculture.`,
    keyEvents: [
      'c. 3000 BCE: Norte Chico pyramids built',
      'c. 900 BCE: Chavín culture begins',
      'c. 100 BCE: Nazca Lines created',
      'c. 1200 CE: Inca Empire begins',
      'c. 1450 CE: Machu Picchu built',
      '1532 CE: Spanish conquest of Inca begins'
    ],
    keyFigures: [
      'Pachacuti (Inca empire builder)',
      'Huayna Capac (last Inca emperor before conquest)',
      'Atahualpa (last emperor, killed by Spanish)',
      'Viracocha (creator god)',
      'Manco Capac (legendary first Inca)'
    ],
    sites: [
      'Machu Picchu (Inca citadel)',
      'Nazca Lines (geoglyphs)',
      'Chan Chan (largest adobe city)',
      'Cusco (Inca capital)',
      'Tiwanaku (pre-Inca religious center)',
      'Sacsayhuaman (Inca fortress)'
    ],
    civilizations: ['Norte Chico', 'Chavín', 'Nazca', 'Moche', 'Wari', 'Tiwanaku', 'Inca'],
    achievements: [
      'Machu Picchu architecture',
      'Qhapaq Ñan (40,000 km road system)',
      'Terrace agriculture',
      'Quipu record-keeping',
      'Nazca Lines',
      'Inca stone masonry'
    ]
  }
]

// Helper function for missing icon component
const Palaces = Building2

export default function TimelinePage() {
  const [activeEra, setActiveEra] = useState(eras[3]) // Start with Old Kingdom
  const activeIndex = eras.findIndex(e => e.id === activeEra.id)
  const IconComponent = activeEra.icon

  const nextEra = () => {
    if (activeIndex < eras.length - 1) {
      setActiveEra(eras[activeIndex + 1])
    }
  }

  const prevEra = () => {
    if (activeIndex > 0) {
      setActiveEra(eras[activeIndex - 1])
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
          <Calendar size={24} />
          <span className="text-sm uppercase tracking-wider">Journey Through Time</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">Interactive Timeline</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore 15,000 years of ancient world history, from prehistoric times to the fall of great empires
        </p>
      </motion.div>

      {/* Era Selector - Horizontal Scrollable */}
      <div className="relative">
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-thin scrollbar-thumb-gold/30 scrollbar-track-transparent">
          {eras.map((era, index) => (
            <button
              key={era.id}
              onClick={() => setActiveEra(era)}
              className={`px-4 py-3 rounded-lg text-left transition-all flex-shrink-0 min-w-[140px] ${
                activeEra.id === era.id
                  ? `bg-gradient-to-r ${era.color} text-white shadow-lg scale-105`
                  : 'bg-white/50 hover:bg-white/80 text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <era.icon size={16} />
                <span className="font-semibold text-sm">{era.name}</span>
              </div>
              <div className="text-xs opacity-90">{era.period}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Timeline Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEra.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`egyptian-card bg-gradient-to-br ${activeEra.color}/10`}
        >
          {/* Era Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-full bg-gradient-to-r ${activeEra.color} text-white`}>
                <IconComponent size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-egyptian-blue">{activeEra.name}</h2>
                <div className="flex items-center gap-2 text-gold text-sm mt-1">
                  <Calendar size={14} />
                  <span>{activeEra.period}</span>
                </div>
              </div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-gold">{activeEra.description}</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevEra}
              disabled={activeIndex === 0}
              className={`p-2 rounded-full transition-all ${
                activeIndex > 0
                  ? 'hover:bg-gold/20 text-gold'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-sm text-gray-500">
              {activeIndex + 1} of {eras.length}
              <span className="hidden sm:inline ml-2">• {activeEra.period}</span>
            </div>
            <button
              onClick={nextEra}
              disabled={activeIndex === eras.length - 1}
              className={`p-2 rounded-full transition-all ${
                activeIndex < eras.length - 1
                  ? 'hover:bg-gold/20 text-gold'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Main Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
                <Sun size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Overview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{activeEra.content}</p>
              
              <div className="flex items-center gap-2 border-b border-gold/30 pb-2 mt-4">
                <Zap size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Key Events</h3>
              </div>
              <ul className="space-y-2">
                {activeEra.keyEvents.map((event) => (
                  <li key={event} className="flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className="text-gray-700 text-sm">{event}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 border-b border-gold/30 pb-2 mt-4">
                <Crown size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Key Figures</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeEra.keyFigures.map((figure) => (
                  <span key={figure} className="px-3 py-1 bg-gold/20 rounded-full text-sm">
                    {figure}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 border-b border-gold/30 pb-2 mt-4">
                <Globe size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Major Sites</h3>
              </div>
              <ul className="space-y-1">
                {activeEra.sites.map((site) => (
                  <li key={site} className="text-sm text-gray-700">📍 {site}</li>
                ))}
              </ul>
            </div>

            {/* Right Column - Achievements & Civilizations */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-gold/30 pb-2">
                <Star size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Great Achievements</h3>
              </div>
              <ul className="space-y-2">
                {activeEra.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2">
                    <span className="text-gold mt-1">✦</span>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 border-b border-gold/30 pb-2 mt-4">
                <Users size={18} className="text-gold" />
                <h3 className="font-semibold text-gold">Civilizations</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeEra.civilizations.map((civ) => (
                  <span key={civ} className="px-3 py-1 bg-egyptian-blue/20 rounded-full text-sm">
                    {civ}
                  </span>
                ))}
              </div>

              {/* Timeline Visual */}
              <div className="mt-6 pt-4 border-t border-gold/20">
                <div className="relative py-4">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 -translate-y-1/2" />
                  <div className="flex justify-between relative">
                    {eras.map((era, idx) => (
                      <button
                        key={era.id}
                        onClick={() => setActiveEra(era)}
                        className={`relative z-10 flex flex-col items-center gap-1 transition-all ${
                          activeEra.id === era.id ? 'scale-110' : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gold ${activeEra.id === era.id ? 'ring-2 ring-gold/30' : ''}`} />
                        <span className="text-[10px] text-gray-600 whitespace-nowrap hidden md:block">
                          {era.name.split(' ')[0]}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Timeline Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center p-4 bg-gold/10 rounded-lg border border-gold/30"
      >
        <div className="flex items-center justify-center gap-2">
          <Flag size={16} className="text-gold" />
          <span className="text-sm text-gray-600">
            <span className="font-semibold text-gold">14 Eras</span> • 
            <span className="ml-1">12,000+ Years of History</span> •
            <span className="ml-1">20+ Civilizations Covered</span>
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Click any era above to explore its history, achievements, and key sites
        </p>
      </motion.div>
    </div>
  )
}