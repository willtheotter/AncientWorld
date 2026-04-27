'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Eye, Sun, Moon, Crown, Shield, BookOpen, Star, 
  Heart, Zap, Feather, Droplet, Flame, Leaf, 
  Users, Globe, Compass, ChevronLeft, ChevronRight,
  Bird, Fish, Mountain, Wind, Flower, TreePine,
  Scroll, Sword, Castle, Anchor, Cloud, Target, 
  Sparkles, Battery, Volume2, Circle, Square
} from 'lucide-react'

interface Deity {
  name: string
  title: string
  description: string
  symbols: string[]
  worship: string
  myths: string
  icon: any
  color: string
  temples: string[]
}

interface Pantheon {
  id: string
  name: string
  region: string
  description: string
  deities: Deity[]
  creationMyth: string
  afterlifeBelief: string
  sacredTexts: string[]
  keySymbols: string[]
  color: string
  icon: any
}

// ========== EGYPTIAN PANTHEON (15 Deities) ==========
const egyptianDeities: Deity[] = [
  {
    name: 'Ra',
    title: 'God of the Sun, King of the Gods',
    description: `Ra was the supreme creator god who sailed across the sky in his solar barque each day and through the underworld each night. He was often merged with other gods to become Amun-Ra and Ra-Horakhty. Pharaohs called themselves "Sons of Ra."`,
    symbols: ['Sun disk', 'Falcon', 'Scarab beetle', 'Solar barque', 'Benben stone'],
    worship: `Heliopolis was Ra's cult center, with the Temple of Ra at Heliopolis being one of the most important in Egypt. Priests recited the Litany of Ra at dawn, noon, and sunset.`,
    myths: `Ra created himself from the primordial waters of Nun. He created Shu and Tefnut, who produced Geb and Nut. Each day, Ra sailed across the sky, and at night battled the serpent Apophis in the underworld.`,
    icon: Sun,
    color: 'from-amber-600 to-orange-600',
    temples: ['Heliopolis', 'Karnak (as Amun-Ra)', 'Abu Simbel']
  },
  {
    name: 'Amun',
    title: 'King of the Gods, The Hidden One',
    description: `Amun was the patron deity of Thebes who rose to become the king of the Egyptian pantheon. His name means "The Hidden One," reflecting his mysterious nature. He was merged with Ra to become Amun-Ra.`,
    symbols: ['Two tall plumes', 'Ram-headed sphinxes', 'Ankh', 'Scepter'],
    worship: `The Temple of Amun at Karnak is the largest religious complex ever built. The Opet Festival celebrated Amun's annual visit to Luxor Temple.`,
    myths: `Amun was worshipped as the creator god who existed before all things. As Amun-Ra, he was the visible and invisible sun. He was the father of the pharaoh.`,
    icon: Crown,
    color: 'from-indigo-600 to-purple-600',
    temples: ['Karnak', 'Luxor Temple', 'Siwa Oasis']
  },
  {
    name: 'Osiris',
    title: 'God of the Afterlife, Death, and Resurrection',
    description: `Osiris was the wise king who brought civilization to Egypt before being murdered by his jealous brother Set. He became the ruler of the underworld.`,
    symbols: ['Crook and flail', 'Atef crown', 'Djed pillar', 'Green skin', 'Mummy wrappings'],
    worship: `Abydos was the center of Osiris worship. Annual festivals reenacted his death and resurrection, incorporating passion plays.`,
    myths: `Set tricked Osiris into a chest and threw it into the Nile. Isis retrieved the body, but Set dismembered it. Isis gathered the pieces and, with Anubis, performed the first mummification.`,
    icon: Scroll,
    color: 'from-emerald-600 to-green-600',
    temples: ['Abydos', 'Philae', 'Busiris']
  },
  {
    name: 'Isis',
    title: 'Goddess of Magic, Motherhood, and Healing',
    description: `Isis was the devoted wife of Osiris and mother of Horus. She was the greatest magician and healer in the Egyptian pantheon. Her cult spread throughout the Roman Empire.`,
    symbols: ['Throne headdress', 'Knot of Isis (tyet)', 'Cow horns with sun disk', 'Scorpion', 'Vulture wings'],
    worship: `The Temple of Isis at Philae was the last active Egyptian temple, closing in the 6th century CE. Her mysteries were celebrated throughout the Greco-Roman world.`,
    myths: `Isis used her magic to resurrect Osiris long enough to conceive Horus. She protected her son from Set's attacks, hiding in the Nile marshes.`,
    icon: Heart,
    color: 'from-red-500 to-pink-600',
    temples: ['Philae', 'Giza', 'Pompeii', 'Dendera']
  },
  {
    name: 'Horus',
    title: 'God of the Sky, Kingship, and Protection',
    description: `Horus was the falcon-headed son of Osiris and Isis who avenged his father's murder. Every pharaoh was considered the living embodiment of Horus on earth.`,
    symbols: ['Falcon', 'Eye of Horus (Wedjat)', 'Double crown', 'Scepter'],
    worship: `The Temple of Horus at Edfu is the best-preserved temple in Egypt, with dramatic reliefs depicting Horus defeating Set.`,
    myths: `Horus fought a series of battles against Set, losing his left eye (which was restored by Thoth). The gods eventually declared Horus the rightful king of Egypt.`,
    icon: Bird,
    color: 'from-cyan-600 to-blue-600',
    temples: ['Edfu', 'Kom Ombo', 'Behbeit el-Hagar']
  },
  {
    name: 'Anubis',
    title: 'God of Embalming, Tombs, and the Dead',
    description: `Anubis was the jackal-headed god who presided over mummification and guided souls through the underworld. He weighed the hearts of the dead against the feather of Ma'at.`,
    symbols: ['Jackal', 'Embalming tools', 'Black coloring', 'Imiut fetish', 'Flail'],
    worship: `The Temple of Anubis at Saqqara was the center of his cult. Underground catacombs contain thousands of mummified dogs and jackals.`,
    myths: `Anubis helped Isis gather the pieces of Osiris's body and performed the first mummification. In the Hall of Ma'at, Anubis weighed the deceased's heart against a feather.`,
    icon: Shield,
    color: 'from-gray-700 to-gray-900',
    temples: ['Saqqara', 'Cynopolis', 'Valley of the Kings']
  },
  {
    name: 'Thoth',
    title: 'God of Wisdom, Writing, and Knowledge',
    description: `Thoth was the divine scribe who invented writing, language, and mathematics. He recorded the deeds of the dead and maintained the cosmic order.`,
    symbols: ['Ibis', 'Baboon', 'Writing palette', 'Reed pen', 'Moon disk'],
    worship: `Hermopolis was Thoth's cult center, with the "House of the Silver Aten" temple library containing thousands of papyrus scrolls.`,
    myths: `Thoth was self-created at the beginning of time. He healed Horus's eye, helped Isis resurrect Osiris, and recorded the judgment of souls.`,
    icon: BookOpen,
    color: 'from-indigo-500 to-purple-600',
    temples: ['Hermopolis', 'Karnak', 'Tuna el-Gebel']
  },
  {
    name: 'Ptah',
    title: 'God of Craftsmen, Creation, and Artisans',
    description: `Ptah was the creator god of Memphis who created the world through thought and speech. He was the patron of craftsmen, architects, and artists.`,
    symbols: ['Djed pillar', 'Was scepter', 'Ankh', 'Skullcap', 'Mummified form'],
    worship: `The Temple of Ptah at Memphis was the most important temple in Egypt's ancient capital. The Apis bulls were manifestations of Ptah.`,
    myths: `Ptah created the world by thinking of it in his heart and speaking it aloud—the first concept of divine creation through the Word.`,
    icon: Castle,
    color: 'from-teal-600 to-cyan-600',
    temples: ['Memphis', 'Karnak', 'Thebes']
  },
  {
    name: 'Hathor',
    title: 'Goddess of Love, Beauty, Music, and Joy',
    description: `Hathor was the beloved goddess of love, music, dance, and joy. She was the divine mother of the pharaoh and welcomed the dead into the afterlife.`,
    symbols: ['Cow horns with sun disk', 'Sistrum', 'Mirror', 'Menat necklace', 'Sycamore tree'],
    worship: `The Temple of Hathor at Dendera is one of the best-preserved temples, with Hathor-headed columns and the famous Dendera Zodiac.`,
    myths: `As the "Eye of Ra," she destroyed humanity until Ra tricked her into drinking beer dyed red, transforming her back into the gentle Hathor.`,
    icon: Volume2,
    color: 'from-pink-500 to-rose-600',
    temples: ['Dendera', 'Abu Simbel', 'Philae', 'Deir el-Bahari']
  },
  {
    name: 'Sekhmet',
    title: 'Goddess of War, Pestilence, and Healing',
    description: `Sekhmet ("the Powerful One") was the lioness-headed goddess of war, plague, and pestilence—but also of healing, for the goddess who sent disease could also cure it.`,
    symbols: ['Lioness head', 'Sun disk', 'Ankh', 'Papyrus scepter', 'Blood-red clothing'],
    worship: `The Temple of Sekhmet at Memphis contained hundreds of life-size statues of the goddess. Pilgrims offered cool water, bread, and beer to pacify her.`,
    myths: `As the "Eye of Ra," Sekhmet was sent to destroy humanity. She slaughtered so many that Ra had to stop her by tricking her into drinking beer dyed red.`,
    icon: Flame,
    color: 'from-red-700 to-orange-700',
    temples: ['Memphis', 'Karnak', 'Thebes']
  },
  {
    name: 'Bastet',
    title: 'Goddess of Home, Fertility, and Protection',
    description: `Bastet was the cat-headed goddess of home, fertility, and protection. She was the gentle counterpart to the lioness Sekhmet.`,
    symbols: ['Cat', 'Lioness', 'Sistrum', 'Aegis', 'Kitten'],
    worship: `The Temple of Bastet at Bubastis hosted the largest festival in Egypt, drawing over 700,000 pilgrims who celebrated with music, dance, and wine.`,
    myths: `Bastet was the daughter of Ra and the protector of the pharaoh. As a cat, she protected homes from vermin and evil spirits.`,
    icon: Heart,
    color: 'from-orange-500 to-amber-600',
    temples: ['Bubastis', 'Saqqara', 'Thebes']
  },
  {
    name: 'Sobek',
    title: 'God of the Nile, Crocodiles, and Fertility',
    description: `Sobek was the crocodile god of the Nile's fertility and danger. He was both feared and revered, with crocodiles kept in temple pools.`,
    symbols: ['Crocodile', 'Nile', 'Ankh', 'Scepter', 'Offering table'],
    worship: `The Temple of Kom Ombo is a unique double temple dedicated to Sobek and Horus. Crocodile mummies have been found at Kom Ombo.`,
    myths: `Sobek represented the raw, untamed power of nature. He emerged from the primordial waters at the beginning of creation.`,
    icon: Fish,
    color: 'from-emerald-600 to-teal-600',
    temples: ['Kom Ombo', 'Crocodilopolis', 'Thebes']
  },
  {
    name: 'Ma\'at',
    title: 'Goddess of Truth, Justice, and Cosmic Order',
    description: `Ma'at was the goddess of truth, justice, balance, and cosmic order. She was the principle that governed the universe.`,
    symbols: ['Feather', 'Scepter', 'Ankh', 'Scale', 'Seated goddess'],
    worship: `Ma'at had no formal temples—her presence was invoked in every Egyptian temple, where pharaohs offered a figurine of Ma'at to the gods.`,
    myths: `At creation, Ma'at emerged from the primordial waters, establishing order over chaos. In the Hall of Ma'at, the deceased's heart was weighed against her feather.`,
    icon: Feather,
    color: 'from-white to-gray-200',
    temples: ['Deir el-Medina', 'Karnak', 'Thebes']
  },
  {
    name: 'Geb',
    title: 'God of the Earth',
    description: `Geb was the earth god, father of Osiris, Isis, Set, and Nephthys. He was often depicted lying beneath the arched body of Nut, the sky goddess.`,
    symbols: ['Goose', 'Green skin', 'Reclining figure', 'Plants growing from body', 'Scepter'],
    worship: `Geb was worshipped throughout Egypt, especially at Heliopolis as part of the Ennead. His laughter was believed to cause earthquakes.`,
    myths: `Geb and Nut were inseparable in the primordial chaos, so Shu separated them. Geb's grief at the separation was said to cause earthquakes.`,
    icon: Mountain,
    color: 'from-emerald-700 to-green-800',
    temples: ['Heliopolis', 'Thebes']
  },
  {
    name: 'Nut',
    title: 'Goddess of the Sky',
    description: `Nut was the sky goddess, mother of Osiris, Isis, Set, and Nephthys. She was depicted as a woman arched over the earth, her body studded with stars.`,
    symbols: ['Star-filled body', 'Sycamore tree', 'Water pot', 'Ladder'],
    worship: `Nut was worshipped throughout Egypt, with her image painted on the inside of sarcophagus lids to protect and nurture the deceased.`,
    myths: `Nut swallowed the sun each evening and gave birth to it each morning. She provided a ladder for the dead to ascend to the stars.`,
    icon: Moon,
    color: 'from-blue-800 to-indigo-900',
    temples: ['Heliopolis', 'Dendera', 'Deir el-Bahari']
  }
]

// ========== GREEK PANTHEON (12 Deities) ==========
const greekDeities: Deity[] = [
  {
    name: 'Zeus',
    title: 'King of the Gods, God of the Sky and Thunder',
    description: `Zeus was the ruler of Mount Olympus and the king of the gods. He controlled the sky, thunder, and lightning. He was the father of many gods and heroes.`,
    symbols: ['Thunderbolt', 'Eagle', 'Bull', 'Oak tree', 'Scepter'],
    worship: `Olympia was the center of Zeus worship, hosting the Olympic Games. The Temple of Zeus contained the gold and ivory Statue of Zeus, one of the Seven Wonders.`,
    myths: `Zeus overthrew his father Cronus and the Titans. He drew lots with his brothers Poseidon and Hades to divide the universe, receiving the sky.`,
    icon: Crown,
    color: 'from-blue-600 to-indigo-700',
    temples: ['Olympia', 'Athens (Olympian Zeus)', 'Dodona']
  },
  {
    name: 'Hera',
    title: 'Queen of the Gods, Goddess of Marriage and Family',
    description: `Hera was the wife and sister of Zeus, the queen of the gods. She presided over marriage, women, and family.`,
    symbols: ['Peacock', 'Cow', 'Diadem', 'Pomegranate', 'Scepter'],
    worship: `The Temple of Hera at Olympia is the oldest temple at the sanctuary, where the Olympic flame is still lit.`,
    myths: `Hera was known for her jealous rage against Zeus's lovers and their children. She persecuted Heracles, Dionysus, and Leto.`,
    icon: Heart,
    color: 'from-pink-600 to-rose-700',
    temples: ['Olympia', 'Argos', 'Samos']
  },
  {
    name: 'Athena',
    title: 'Goddess of Wisdom, War, and Crafts',
    description: `Athena was born from Zeus's head fully grown and armored. She was the patron goddess of Athens, wisdom, strategic warfare, and crafts.`,
    symbols: ['Owl', 'Aegis shield', 'Olive tree', 'Helmet', 'Spear'],
    worship: `The Parthenon on the Acropolis of Athens was her greatest temple, housing the gold and ivory statue of Athena Parthenos.`,
    myths: `Athena competed with Poseidon for Athens, offering the olive tree. She helped Perseus, Odysseus, and Heracles on their quests.`,
    icon: Shield,
    color: 'from-cyan-600 to-blue-700',
    temples: ['Acropolis of Athens', 'Sparta', 'Lindos']
  },
  {
    name: 'Apollo',
    title: 'God of the Sun, Music, Prophecy, and Healing',
    description: `Apollo was the son of Zeus and Leto, twin brother of Artemis. He was the god of music, archery, prophecy, healing, and the sun.`,
    symbols: ['Lyre', 'Laurel wreath', 'Sun chariot', 'Bow and arrows', 'Python'],
    worship: `Delphi was the most important oracle of Apollo, where the Pythia delivered prophecies. The Pythian Games honored Apollo.`,
    myths: `Apollo killed the serpent Python to establish his oracle at Delphi. He loved the nymph Daphne, who was turned into a laurel tree.`,
    icon: Volume2,
    color: 'from-yellow-600 to-amber-600',
    temples: ['Delphi', 'Delos', 'Cape Sounion']
  },
  {
    name: 'Artemis',
    title: 'Goddess of the Hunt, Wilderness, and Childbirth',
    description: `Artemis was the daughter of Zeus and Leto, twin sister of Apollo. She was the goddess of the hunt, wilderness, animals, and childbirth.`,
    symbols: ['Bow and arrows', 'Deer', 'Crescent moon', 'Cypress tree', 'Hounds'],
    worship: `The Temple of Artemis at Ephesus was one of the Seven Wonders of the Ancient World, the largest Greek temple ever built.`,
    myths: `Artemis protected her mother Leto from the serpent Python. She transformed the hunter Actaeon into a stag for seeing her naked.`,
    icon: Target,
    color: 'from-emerald-600 to-teal-600',
    temples: ['Ephesus', 'Brauron', 'Delos']
  },
  {
    name: 'Ares',
    title: 'God of War, Courage, and Bloodshed',
    description: `Ares was the son of Zeus and Hera, the god of war, courage, and bloodshed. He represented the brutal, violent aspects of battle.`,
    symbols: ['Spear', 'Helmet', 'Shield', 'Chariot', 'Vulture'],
    worship: `Ares was worshipped primarily in northern Greece and Thrace. The Areopagus (hill of Ares) in Athens was named for him.`,
    myths: `Ares was captured by the giants Otus and Ephialtes and imprisoned in a bronze jar for 13 months. He was wounded by Diomedes during the Trojan War.`,
    icon: Sword,
    color: 'from-red-600 to-red-800',
    temples: ['Athens (Areopagus)', 'Sparta', 'Thrace']
  },
  {
    name: 'Aphrodite',
    title: 'Goddess of Love, Beauty, and Desire',
    description: `Aphrodite was the goddess of love, beauty, pleasure, and procreation. She was born from the sea foam after Cronus castrated Uranus.`,
    symbols: ['Dove', 'Rose', 'Myrtle', 'Scallop shell', 'Mirror', 'Girdle'],
    worship: `Paphos in Cyprus was the center of Aphrodite's worship, believed to be her birthplace. The Temple of Aphrodite at Knidos was famous for its statue.`,
    myths: `Aphrodite was married to Hephaestus but had affairs with Ares, Anchises, and Adonis. Her golden girdle made anyone desire her.`,
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    temples: ['Paphos', 'Knidos', 'Corinth']
  },
  {
    name: 'Hermes',
    title: 'Messenger of the Gods, God of Travelers and Thieves',
    description: `Hermes was the son of Zeus and Maia, the messenger of the gods. He was the god of travelers, shepherds, thieves, commerce, and athletics.`,
    symbols: ['Caduceus', 'Winged sandals', 'Winged helmet', 'Tortoise', 'Lyre'],
    worship: `Hermes was worshipped at gymnasiums and at boundaries (herms). The Panhellenic Games of Olympia were held in his honor.`,
    myths: `As an infant, Hermes stole Apollo's cattle and invented the lyre from a tortoise shell. He guided souls to the underworld as a psychopomp.`,
    icon: Compass,
    color: 'from-amber-600 to-orange-600',
    temples: ['Olympia', 'Mount Cyllene', 'Athens']
  },
  {
    name: 'Poseidon',
    title: 'God of the Sea, Earthquakes, and Horses',
    description: `Poseidon was the brother of Zeus and Hades, the god of the sea, earthquakes, and horses. He was a powerful but temperamental deity.`,
    symbols: ['Trident', 'Horse', 'Dolphin', 'Bull', 'Chariot'],
    worship: `The Temple of Poseidon at Cape Sounion stands on a 60-meter cliff. The Isthmian Games were held in his honor near Corinth.`,
    myths: `Poseidon competed with Athena for Athens, offering a saltwater spring. He created horses from sea foam and fathered the hero Theseus.`,
    icon: Droplet,
    color: 'from-blue-600 to-cyan-700',
    temples: ['Cape Sounion', 'Corinth', 'Delphi']
  },
  {
    name: 'Demeter',
    title: 'Goddess of Agriculture, Grain, and Fertility',
    description: `Demeter was the sister of Zeus, the goddess of agriculture, grain, and fertility. Her grief over her daughter Persephone's abduction caused the seasons.`,
    symbols: ['Sheaf of wheat', 'Cornucopia', 'Torch', 'Poppy', 'Scepter'],
    worship: `The Eleusinian Mysteries were the most secret rites in ancient Greece, promising initiates a blessed afterlife. Eleusis was Demeter's cult center.`,
    myths: `When Hades abducted Persephone, Demeter searched for her and caused the earth to become barren. Zeus arranged for Persephone to return for half the year.`,
    icon: Leaf,
    color: 'from-green-600 to-emerald-700',
    temples: ['Eleusis', 'Samos', 'Sicily']
  },
  {
    name: 'Hades',
    title: 'God of the Underworld and the Dead',
    description: `Hades was the brother of Zeus and Poseidon, the god of the underworld and the dead. He was a stern but just ruler, not evil.`,
    symbols: ['Bident', 'Helmet of invisibility', 'Cerberus', 'Scepter', 'Pluton'],
    worship: `Hades was worshipped at Eleusis as part of the Mysteries. His name was often avoided, and he was called "Plouton" (the Rich One).`,
    myths: `Hades abducted Persephone, making her his queen. Heracles borrowed Hades's helmet of invisibility. Hades was tricked by Sisyphus.`,
    icon: Shield,
    color: 'from-gray-800 to-gray-900',
    temples: ['Eleusis', 'Epirus', 'Sicily']
  }
]

// ========== HINDU PANTHEON (10 Deities) ==========
const hinduDeities: Deity[] = [
  {
    name: 'Brahma',
    title: 'The Creator, God of Creation',
    description: `Brahma is the creator god in the Hindu Trimurti (trinity). He created the universe and all living beings. He is less commonly worshipped than Vishnu and Shiva.`,
    symbols: ['Four heads', 'Lotus flower', 'Vedas', 'Swan', 'Rosary beads', 'Water pot'],
    worship: `The Brahma Temple at Pushkar is one of the few temples dedicated to Brahma. The festival of Kartik Purnima honors him.`,
    myths: `Brahma was born from a golden egg (Hiranyagarbha) floating in the primordial ocean. He created the universe from his mind and body.`,
    icon: Star,
    color: 'from-red-600 to-orange-600',
    temples: ['Pushkar', 'Thailand', 'Bali']
  },
  {
    name: 'Vishnu',
    title: 'The Preserver, God of Protection',
    description: `Vishnu is the preserver god in the Hindu Trimurti. He maintains cosmic order (dharma) and descends to earth in various avatars (incarnations) when needed.`,
    symbols: ['Discus (Sudarshana)', 'Conch shell', 'Mace', 'Lotus', 'Serpent Shesha', 'Blue skin'],
    worship: `Vishnu is one of the most widely worshipped gods in Hinduism. The Vaishnava tradition focuses on his worship. The festival of Diwali honors his avatar Rama.`,
    myths: `Vishnu descends as avatars including Rama, Krishna, Narasimha (half-man half-lion), Vamana (dwarf), and Matsya (fish).`,
    icon: Shield,
    color: 'from-blue-600 to-indigo-700',
    temples: ['Tirupati', 'Srirangam', 'Badrinath']
  },
  {
    name: 'Shiva',
    title: 'The Destroyer, God of Transformation',
    description: `Shiva is the destroyer god in the Hindu Trimurti. He destroys the universe to enable its recreation. He is also the lord of yoga, meditation, and the arts.`,
    symbols: ['Third eye', 'Trident (Trishula)', 'Crescent moon', 'Ganges river', 'Drum (Damaru)', 'Serpent', 'Ash-covered body'],
    worship: `Shiva is one of the most popular gods in Hinduism. The festival of Maha Shivaratri honors him. The lingam is a symbol of Shiva.`,
    myths: `Shiva drank the poison from the churning of the ocean, turning his throat blue (Nilakantha). He defeated the demon Tripurasura.`,
    icon: Zap,
    color: 'from-purple-600 to-pink-600',
    temples: ['Varanasi (Kashi Vishwanath)', 'Somnath', 'Rameswaram']
  },
  {
    name: 'Devi (Goddess)',
    title: 'The Great Goddess, Supreme Mother',
    description: `Devi is the supreme goddess in Shaktism, the mother of the universe. She encompasses all other goddesses including Durga, Kali, Lakshmi, and Saraswati.`,
    symbols: ['Lion', 'Trident', 'Sword', 'Lotus', 'Discus', 'Bow and arrow', 'Conch shell', 'Mace'],
    worship: `The festival of Navratri (nine nights) honors the goddess. Durga Puja in Bengal is a major celebration of the goddess.`,
    myths: `The goddess as Durga defeated the buffalo demon Mahishasura. As Kali she destroyed the demon Raktabija. As Lakshmi she brings wealth and prosperity.`,
    icon: Crown,
    color: 'from-red-600 to-pink-700',
    temples: ['Vaishno Devi', 'Kamakhya', 'Meenakshi Amman']
  },
  {
    name: 'Ganesha',
    title: 'God of Wisdom, Beginnings, and Remover of Obstacles',
    description: `Ganesha is the elephant-headed son of Shiva and Parvati. He is the remover of obstacles and the god of wisdom, learning, and new beginnings.`,
    symbols: ['Elephant head', 'One tusk', 'Modak (sweet)', 'Axe', 'Noose', 'Trunk holding a lotus', 'Mouse vehicle'],
    worship: `Ganesha is invoked at the beginning of any new undertaking—business, travel, marriage, or writing. The festival of Ganesh Chaturthi honors him.`,
    myths: `Parvati created Ganesha from clay and breathed life into him. When Shiva tried to enter, Ganesha blocked him, so Shiva cut off his head. Shiva replaced it with an elephant's head.`,
    icon: Star,
    color: 'from-orange-600 to-yellow-600',
    temples: ['Mumbai (Siddhivinayak)', 'Pune (Dagadusheth)', 'Ujjain']
  },
  {
    name: 'Krishna',
    title: 'The Supreme Personality of Godhead',
    description: `Krishna is the eighth avatar of Vishnu and one of the most popular Hindu deities. He is the god of compassion, tenderness, and love.`,
    symbols: ['Flute', 'Peacock feather', 'Yellow silk cloth', 'Butter', 'Blue skin', 'Cow', 'Wheel'],
    worship: `Krishna Janmashtami celebrates his birth. The Hare Krishna movement (ISKCON) focuses on devotion to Krishna. The Bhagavad Gita is his discourse to Arjuna.`,
    myths: `As a child, Krishna lifted Govardhan Hill to protect villagers from Indra's rain. He danced with the gopis (milkmaids) and played his flute.`,
    icon: Volume2,
    color: 'from-blue-600 to-cyan-700',
    temples: ['Mathura', 'Vrindavan', 'Dwarka', 'Puri']
  },
  {
    name: 'Rama',
    title: 'The Ideal King and Man, Avatar of Vishnu',
    description: `Rama is the seventh avatar of Vishnu and the hero of the Ramayana. He is the ideal man, king, husband, and son.`,
    symbols: ['Bow and arrow', 'Blue skin', 'Crown', 'Sword', 'Chakra', 'Seated on a throne'],
    worship: `Diwali celebrates Rama's return to Ayodhya after defeating Ravana. Ram Navami honors his birth. The Ramayana is recited throughout India.`,
    myths: `Rama was exiled for 14 years. His wife Sita was abducted by Ravana. With Hanuman's help, Rama defeated Ravana and rescued Sita.`,
    icon: Target,
    color: 'from-blue-700 to-indigo-800',
    temples: ['Ayodhya', 'Rameswaram', 'Bhadrachalam']
  },
  {
    name: 'Lakshmi',
    title: 'Goddess of Wealth, Fortune, and Prosperity',
    description: `Lakshmi is the goddess of wealth, fortune, power, luxury, beauty, fertility, and auspiciousness. She is the consort of Vishnu.`,
    symbols: ['Gold coins', 'Lotus', 'Elephant', 'Pot of gold', 'Four arms', 'Red sari'],
    worship: `The festival of Diwali is dedicated to Lakshmi. Friday is considered an auspicious day for her worship.`,
    myths: `Lakshmi emerged from the churning of the ocean of milk (Samudra Manthan). She chose Vishnu as her eternal consort.`,
    icon: Sparkles,
    color: 'from-yellow-500 to-amber-600',
    temples: ['Kolhapur (Mahalakshmi)', 'Mumbai', 'Kolkata']
  },
  {
    name: 'Saraswati',
    title: 'Goddess of Knowledge, Music, Art, and Learning',
    description: `Saraswati is the goddess of knowledge, music, art, wisdom, and learning. She is the consort of Brahma.`,
    symbols: ['Veena (musical instrument)', 'Swan', 'Peacock', 'White sari', 'Book', 'Rosary', 'Water pot'],
    worship: `The festival of Vasant Panchami is dedicated to Saraswati. Students and artists pray to her for success.`,
    myths: `Saraswati emerged from Brahma's mind. She invented the Sanskrit language and the Devanagari script.`,
    icon: BookOpen,
    color: 'from-white to-gray-100',
    temples: ['Kumbakonam', 'Ujjain', 'Mysore']
  },
  {
    name: 'Hanuman',
    title: 'God of Strength, Devotion, and Courage',
    description: `Hanuman is the monkey god who helped Rama defeat Ravana. He represents strength, devotion, courage, and selfless service.`,
    symbols: ['Monkey face', 'Mace (Gada)', 'Mountain (carrying herbs)', 'Flying through the air', 'Orange-red color', 'Tail'],
    worship: `Hanuman is worshipped on Tuesdays and Saturdays. The Hanuman Chalisa (40 verses) is recited for protection and courage.`,
    myths: `Hanuman flew to Lanka, burned it with his tail, and carried the mountain of healing herbs to save Lakshmana.`,
    icon: Zap,
    color: 'from-orange-600 to-red-600',
    temples: ['Hampi', 'New Delhi', 'All over India']
  }
]

// ========== CHINESE PANTHEON (10 Deities) ==========
const chineseDeities: Deity[] = [
  {
    name: 'Yu Huang',
    title: 'The Jade Emperor, Supreme Ruler of Heaven',
    description: `The Jade Emperor is the supreme deity in traditional Chinese religion. He rules over all gods, humans, and creatures.`,
    symbols: ['Imperial crown', 'Dragon throne', 'Scepter', 'Pearl', 'Jade tablet', 'Gold robes'],
    worship: `The Jade Emperor's birthday is celebrated on the ninth day of the first lunar month.`,
    myths: `The Jade Emperor began as a mortal prince who cultivated virtue and immortality. After countless trials, he became the ruler of heaven.`,
    icon: Crown,
    color: 'from-yellow-600 to-amber-700',
    temples: ['Tainan (Taiwan)', 'Beijing (Baiyun Temple)', 'Hong Kong']
  },
  {
    name: 'Guanyin',
    title: 'Goddess of Mercy and Compassion',
    description: `Guanyin is the bodhisattva of compassion and mercy. She hears the cries of all beings and offers help to those in need.`,
    symbols: ['Lotus flower', 'Vase of pure water', 'Willow branch', 'White robes', 'Pearl', 'Dragon'],
    worship: `Guanyin's birthday is celebrated on the 19th day of the second lunar month.`,
    myths: `Guanyin was a Chinese princess who refused to marry and became a Buddhist nun. She cut off her arms and eyes to save her father, then miraculously grew a thousand arms and eyes.`,
    icon: Heart,
    color: 'from-white to-blue-100',
    temples: ['Putuoshan (China)', 'Hong Kong (Chi Lin Nunnery)', 'Mount Jiuhua']
  },
  {
    name: 'Guan Yu',
    title: 'God of War, Wealth, and Loyalty',
    description: `Guan Yu was a historical general during the Three Kingdoms period who was deified after death. He is the god of war, loyalty, righteousness, and wealth.`,
    symbols: ['Green dragon crescent blade', 'Red face', 'Long beard', 'Black robes', 'Seated on a throne'],
    worship: `Guan Yu is worshipped by police officers, soldiers, triad members, and businessmen.`,
    myths: `Guan Yu was captured by enemy forces after refusing to defect. He chose death over betrayal, becoming a symbol of loyalty.`,
    icon: Sword,
    color: 'from-red-700 to-red-800',
    temples: ['Yuci (Shanxi)', 'Beijing (Guan Yu Temple)', 'Hong Kong']
  },
  {
    name: 'Caishen',
    title: 'God of Wealth and Prosperity',
    description: `Caishen is the god of wealth, prosperity, and good fortune. He is invoked during the Lunar New Year to bring financial success.`,
    symbols: ['Gold ingots', 'Red robes', 'Jade ruyi (scepter)', 'Gold coins', 'Treasure bowl', 'Bat (symbol of fortune)'],
    worship: `Caishen is honored on the fifth day of the Lunar New Year. Firecrackers are set off to welcome him into homes and businesses.`,
    myths: `Caishen is sometimes identified with the historical figure Zhao Gongming, a general who served the last emperor of the Shang Dynasty.`,
    icon: Sparkles,
    color: 'from-yellow-500 to-amber-600',
    temples: ['All over China, especially during New Year']
  },
  {
    name: 'Mazu',
    title: 'Goddess of the Sea, Protector of Sailors',
    description: `Mazu is the goddess of the sea who protects sailors, fishermen, and travelers. She is one of the most popular deities in coastal China and Taiwan.`,
    symbols: ['Red robes', 'Crown', 'Pearl', 'Dragon boat', 'Lantern (guiding ships)', 'Long white hair'],
    worship: `Mazu's birthday is celebrated on the 23rd day of the third lunar month.`,
    myths: `Mazu was a young woman named Lin Moniang who could predict the weather and walk on water. She died trying to save her father at sea, then became a goddess.`,
    icon: Anchor,
    color: 'from-blue-500 to-cyan-600',
    temples: ['Meizhou Island (original temple)', 'Tainan', 'Hong Kong (Tin Hau Temple)']
  },
  {
    name: 'Sun Wukong',
    title: 'The Monkey King, Victorious Fighting Buddha',
    description: `Sun Wukong is the Monkey King, a trickster figure from the classic novel "Journey to the West." He is the god of protectors and tricksters.`,
    symbols: ['Staff (Ruyi Jingu Bang)', 'Golden headband', 'Monkey face', 'Cloud (Somersault Cloud)', 'Peaches of immortality'],
    worship: `Sun Wukong is worshipped as a protector deity, especially in southern China.`,
    myths: `Sun Wukong was born from a stone egg. He learned 72 transformations, fought the armies of heaven, and was imprisoned under a mountain for 500 years.`,
    icon: Zap,
    color: 'from-yellow-600 to-orange-600',
    temples: ['Fuzhou (Monkey King Temple)', 'Taiwan', 'Hong Kong']
  },
  {
    name: 'Nezha',
    title: 'God of Protection and Youth',
    description: `Nezha is a protection deity and a young warrior god. He is known for his rebellious youth and his battles with dragons and demons.`,
    symbols: ['Fire-tipped spear', 'Wind and fire wheels', 'Red armillary sash', 'Golden rings (Qiankun Circle)', 'Lotus flower (rebirth)'],
    worship: `Nezha is worshipped as a protector of children and a guardian deity.`,
    myths: `Nezha was born from a lotus after his original body was destroyed. He fought and killed the son of the Dragon King.`,
    icon: Flame,
    color: 'from-red-500 to-orange-600',
    temples: ['Beijing (Nezha Temple)', 'Taipei', 'Hong Kong']
  },
  {
    name: 'Yama',
    title: 'King of the Underworld, Judge of the Dead',
    description: `Yama is the king of the underworld (Di Yu) and the judge of the dead. He presides over the judgment of souls and assigns punishments.`,
    symbols: ['Judge\'s tablet', 'Red and black robes', 'Scepter', 'Mirror of karma', 'Bull-headed and horse-faced attendants'],
    worship: `Yama is honored during the Ghost Festival (Hungry Ghost Festival) in the seventh lunar month.`,
    myths: `Yama was a mortal who became the lord of the dead after demonstrating fairness in judgment.`,
    icon: Shield,
    color: 'from-gray-800 to-gray-900',
    temples: ['Dazaosi (Chengdu)', 'Fengdu (Ghost City)', 'Hong Kong']
  },
  {
    name: 'Cheng Huang',
    title: 'God of Walls and Moats, City Guardian',
    description: `Cheng Huang is the city god who protects cities from harm and judges the souls of the dead within his jurisdiction.`,
    symbols: ['Judge\'s tablet', 'Black and red robes', 'Scepter', 'Scroll of records', 'Seal of office'],
    worship: `Each city had its own Cheng Huang temple. Offerings were made at death to ensure safe passage through the underworld.`,
    myths: `Cheng Huang is usually a local hero or official who was deified after death for protecting the city.`,
    icon: Castle,
    color: 'from-gray-700 to-gray-800',
    temples: ['Shanghai (Cheng Huang Miao)', 'Beijing', 'Xi\'an']
  },
  {
    name: 'Tudi Gong',
    title: 'God of the Soil and the Ground',
    description: `Tudi Gong is the earth god, a local deity who protects a specific village or piece of land. He is the most approachable and humble of the Chinese gods.`,
    symbols: ['White beard', 'Wooden staff', 'Gold coins', 'Seated on a rock', 'White robes', 'Humble appearance'],
    worship: `Small shrines to Tudi Gong are found in every village, at crossroads, and in homes.`,
    myths: `Tudi Gong was a virtuous old man who helped travelers and protected the land. He was deified after his death.`,
    icon: TreePine,
    color: 'from-green-600 to-emerald-700',
    temples: ['Every village and home in China']
  }
]

// ========== MESOAMERICAN PANTHEON (10 Deities) ==========
const mesoamericanDeities: Deity[] = [
  {
    name: 'Quetzalcoatl',
    title: 'Feathered Serpent, God of Wind, Knowledge, and Creation',
    description: `Quetzalcoatl was the feathered serpent god of wind, air, learning, and creation. He was one of the most important gods in Aztec and Mesoamerican religion.`,
    symbols: ['Feathered serpent', 'Wind jewel (ehecailacozcatl)', 'Conch shell', 'Pyramid', 'Morning star', 'Plumed serpent'],
    worship: `The Temple of Quetzalcoatl at Teotihuacan features 200 carved serpent heads. His worship was central to Aztec, Toltec, and Maya religion.`,
    myths: `Quetzalcoatl created humanity by sprinkling his own blood over ground bones. He discovered corn and gave it to humans.`,
    icon: Bird,
    color: 'from-green-600 to-teal-600',
    temples: ['Teotihuacan', 'Chichen Itza', 'Tula']
  },
  {
    name: 'Kukulkan',
    title: 'Feathered Serpent, Maya Creator God',
    description: `Kukulkan is the Maya feathered serpent god, equivalent to Quetzalcoatl. He was a creator god and the god of the four elements.`,
    symbols: ['Feathered serpent', 'Venus', 'Pyramid', 'Wind', 'Water', 'Sun'],
    worship: `The Temple of Kukulkan at Chichen Itza is aligned so that a serpent-shaped shadow descends the pyramid during the equinox.`,
    myths: `Kukulkan taught the Maya how to write, create calendars, and build cities. He was a culture hero who brought civilization.`,
    icon: Bird,
    color: 'from-green-700 to-emerald-700',
    temples: ['Chichen Itza', 'Mayapan', 'Uxmal']
  },
  {
    name: 'Tlaloc',
    title: 'God of Rain, Lightning, and Thunder',
    description: `Tlaloc was the Aztec god of rain, water, lightning, and thunder. He was responsible for both life-giving rain and destructive storms.`,
    symbols: ['Goggle eyes', 'Fangs', 'Lightning bolts', 'Water jars', 'Frogs', 'Blue and green colors'],
    worship: `Tlaloc was worshipped on Mount Tlaloc and at the Great Temple of Tenochtitlan. Child sacrifices were offered to appease him.`,
    myths: `Tlaloc ruled over Tlalocan, a paradise for those who died from drowning, lightning, or water-related diseases.`,
    icon: Droplet,
    color: 'from-blue-500 to-cyan-600',
    temples: ['Teotihuacan (Temple of Tlaloc)', 'Tenochtitlan', 'Tlaloc Mountain']
  },
  {
    name: 'Huitzilopochtli',
    title: 'God of War, Sun, and Human Sacrifice',
    description: `Huitzilopochtli was the Aztec god of war, the sun, and human sacrifice. He was the patron god of Tenochtitlan and the Aztec people.`,
    symbols: ['Hummingbird', 'Xiuhcoatl (fire serpent)', 'Shield and darts', 'Sun disk', 'Skeletal face', 'Blue coloring'],
    worship: `The Great Temple of Tenochtitlan was dedicated to Huitzilopochtli and Tlaloc. Thousands of human sacrifices were offered to him.`,
    myths: `Huitzilopochtli was born fully grown and armed, killing his sister Coyolxauhqui and his brothers, the Centzon Huitznahuas.`,
    icon: Crown,
    color: 'from-blue-600 to-indigo-700',
    temples: ['Tenochtitlan (Great Temple)', 'Tula', 'Malinalco']
  },
  {
    name: 'Tezcatlipoca',
    title: 'Smoking Mirror, God of Night, Sorcery, and Destiny',
    description: `Tezcatlipoca was the god of the night sky, sorcery, war, and destiny. He was a rival of Quetzalcoatl and a powerful, capricious deity.`,
    symbols: ['Obsidian mirror (smoking)', 'Missing foot', 'Jaguar', 'Skeletal face', 'Black color', 'Smoking head'],
    worship: `Tezcatlipoca was worshipped at the Great Temple of Tenochtitlan. A young man was sacrificed annually as his representative.`,
    myths: `Tezcatlipoca tricked Quetzalcoatl into drinking pulque, causing him to sin and leave Tula. He created the first sun, which was destroyed by jaguars.`,
    icon: Shield,
    color: 'from-gray-800 to-black',
    temples: ['Tenochtitlan', 'Tula', 'Malinalco']
  },
  {
    name: 'Chac',
    title: 'Maya God of Rain and Lightning',
    description: `Chac was the Maya god of rain, lightning, thunder, and agriculture. He was one of the most important Maya deities.`,
    symbols: ['Snake (lightning)', 'Eye on forehead', 'Fangs', 'Axe (lightning)', 'Water jars', 'Long nose'],
    worship: `Chac was worshipped at Chichen Itza, Uxmal, and other Maya cities. Human sacrifices were offered to him in cenotes (sacred wells).`,
    myths: `Chac opened the mountain of the first maize, discovering corn for humanity. He lives in caves and cenotes.`,
    icon: Droplet,
    color: 'from-blue-500 to-cyan-600',
    temples: ['Chichen Itza', 'Uxmal', 'Kabah']
  },
  {
    name: 'Itzamna',
    title: 'Maya Creator God, God of the Sky and Writing',
    description: `Itzamna was the Maya creator god, god of the sky, day, night, and writing. He was the supreme deity of the Maya pantheon.`,
    symbols: ['Old man with no teeth', 'Lizard', 'Bird', 'Sky serpent', 'Hieroglyphic book', 'Sun disk'],
    worship: `Itzamna was worshipped throughout the Maya world. He was the patron of scribes, priests, and healers.`,
    myths: `Itzamna taught the Maya how to write, create calendars, and perform medicine. He created the world with his wife Ix Chel.`,
    icon: BookOpen,
    color: 'from-yellow-600 to-amber-600',
    temples: ['Izamal', 'Mayapan', 'Chichen Itza']
  },
  {
    name: 'Ix Chel',
    title: 'Maya Goddess of the Moon, Fertility, and Medicine',
    description: `Ix Chel was the Maya goddess of the moon, fertility, childbirth, medicine, and weaving. She was the wife of Itzamna.`,
    symbols: ['Moon (crescent)', 'Rabbit (moon rabbit)', 'Jaguar ears', 'Snake headdress', 'Weaving tools', 'Water jar'],
    worship: `Ix Chel was worshipped at the Temple of the Moon in Chichen Itza and at Cozumel, a pilgrimage site for Maya women.`,
    myths: `Ix Chel was the mother of the Maya hero twins. She was associated with the moon rabbit.`,
    icon: Moon,
    color: 'from-white to-blue-100',
    temples: ['Cozumel', 'Chichen Itza', 'Tulum']
  },
  {
    name: 'Mictlantecuhtli',
    title: 'Aztec God of the Underworld and Death',
    description: `Mictlantecuhtli was the Aztec god of the underworld (Mictlan) and the dead. He ruled the lowest level of the underworld.`,
    symbols: ['Skeletal face', 'Skull mask', 'Bat', 'Spider', 'Owl', 'Flayed skin', 'Blood-spattered clothing'],
    worship: `Mictlantecuhtli was worshipped at the Great Temple of Tenochtitlan. Offerings of blood and fire were made to him during funerary rites.`,
    myths: `Quetzalcoatl traveled to Mictlan to retrieve the bones of humanity and create the current race of humans.`,
    icon: Shield,
    color: 'from-red-800 to-red-950',
    temples: ['Tenochtitlan', 'Templo Mayor Museum']
  }
]

// ========== COMBINE ALL PANTHEONS ==========
const pantheons: Pantheon[] = [
  {
    id: 'egyptian',
    name: 'Egyptian',
    region: 'Northeast Africa',
    description: 'The Egyptian pantheon included over 1,500 gods and goddesses, each governing different aspects of life, death, and the natural world. These deities were not distant beings but active participants in daily life, accessible through prayer, offerings, and temple rituals. Egyptian religion emphasized the afterlife, with elaborate funerary texts guiding souls through the underworld.',
    deities: egyptianDeities,
    creationMyth: 'The Heliopolitan Creation Myth begins with the primordial waters of Nun. From these waters emerged the Benben stone, and on it stood Atum (or Ra). Atum created Shu (air) and Tefnut (moisture), who produced Geb (earth) and Nut (sky). Geb and Nut produced Osiris, Isis, Set, and Nephthys—the first divine family.',
    afterlifeBelief: 'The soul had multiple components: the physical body (khat), the life force (ka), the personality (ba), the shadow (shut), and the name (ren). The Weighing of the Heart ceremony determined whether the soul was worthy of entering the Field of Reeds (paradise).',
    sacredTexts: ['Pyramid Texts (c. 2400 BCE)', 'Coffin Texts (c. 2100 BCE)', 'Book of the Dead (c. 1550 BCE)', 'Book of Gates', 'Amduat'],
    keySymbols: ['Ankh (life)', 'Djed pillar (stability)', 'Was scepter (power)', 'Scarab (rebirth)', 'Eye of Horus (protection)', 'Feather of Ma\'at (truth)'],
    color: 'from-amber-600 to-orange-600',
    icon: Sun
  },
  {
    id: 'greek',
    name: 'Greek',
    region: 'Southern Europe',
    description: 'Greek mythology is a collection of stories about gods, goddesses, heroes, and monsters that explained the world and human nature. The pantheon resided on Mount Olympus, with Zeus as the king of the gods. Greek myths influenced Roman mythology and Western culture.',
    deities: greekDeities,
    creationMyth: 'From Chaos emerged Gaia (Earth), Tartarus (Underworld), and Eros (Love). Gaia gave birth to Uranus (Sky). Their children included the Titans. Cronus overthrew Uranus, then Zeus overthrew Cronus, leading the Olympians to victory over the Titans in the Titanomachy.',
    afterlifeBelief: 'Souls were guided by Hermes to the underworld, ruled by Hades and Persephone. They crossed the rivers Styx and Acheron, paying Charon the ferryman. Souls were judged by Minos, Rhadamanthys, and Aeacus. The virtuous went to Elysium, the average to the Asphodel Meadows, and the wicked to Tartarus.',
    sacredTexts: ['Homer\'s Iliad and Odyssey (c. 8th century BCE)', 'Hesiod\'s Theogony (c. 700 BCE)', 'Homeric Hymns', 'Orphic Hymns', 'Ovid\'s Metamorphoses'],
    keySymbols: ['Thunderbolt (Zeus)', 'Trident (Poseidon)', 'Helmet (Hades)', 'Owl (Athena)', 'Lyre (Apollo)', 'Peacock (Hera)'],
    color: 'from-cyan-600 to-blue-600',
    icon: Star
  },
  {
    id: 'hindu',
    name: 'Hindu',
    region: 'South Asia',
    description: 'Hinduism is one of the world\'s oldest religions, with a vast pantheon of gods and goddesses representing different aspects of the divine. The Trimurti (Brahma, Vishnu, Shiva) represents creation, preservation, and destruction. Hindu mythology is recorded in the Vedas, Puranas, and epics.',
    deities: hinduDeities,
    creationMyth: 'From the primordial waters, a golden egg (Hiranyagarbha) emerged, from which Brahma created the universe. Vishnu slept on the cosmic serpent Shesha, and from his navel grew a lotus containing Brahma. The universe undergoes endless cycles of creation, preservation, and destruction.',
    afterlifeBelief: 'Souls are reincarnated based on karma (actions). The quality of one\'s next birth is determined by deeds in the current life. Liberation (moksha) ends the cycle of rebirth, allowing the soul to merge with the divine.',
    sacredTexts: ['Vedas (Rigveda, Samaveda, Yajurveda, Atharvaveda)', 'Upanishads', 'Bhagavad Gita', 'Ramayana', 'Mahabharata', 'Puranas'],
    keySymbols: ['Aum (Om)', 'Swastika (auspiciousness)', 'Lotus (purity)', 'Trishula (trident of Shiva)', 'Chakra (discus of Vishnu)', 'Lingam (Shiva)'],
    color: 'from-orange-600 to-red-600',
    icon: Star
  },
  {
    id: 'chinese',
    name: 'Chinese',
    region: 'East Asia',
    description: 'Chinese folk religion blends Taoism, Buddhism, Confucianism, and local traditions. The pantheon includes gods of heaven, earth, nature, home, and ancestors. The Jade Emperor rules over a celestial bureaucracy that mirrors the imperial court.',
    deities: chineseDeities,
    creationMyth: 'In the beginning, there was chaos. Pangu was born from a cosmic egg, and when he died, his body parts became the earth and sky. His breath became wind, his voice thunder, his eyes the sun and moon, and his blood rivers. Nüwa molded humans from yellow earth.',
    afterlifeBelief: 'Souls are judged by Yama, the King of the Underworld. Depending on their deeds, they may be reborn, ascend to heaven, or suffer punishments in the ten courts of Di Yu (hell). Ancestors are honored with offerings and prayers.',
    sacredTexts: ['Tao Te Ching (Daodejing)', 'I Ching (Book of Changes)', 'Zhuangzi', 'Journey to the West', 'Investiture of the Gods', 'Classic of Mountains and Seas'],
    keySymbols: ['Yin-Yang symbol', 'Dragon (imperial power)', 'Phoenix (harmony)', 'Bagua (eight trigrams)', 'Pi Xiu (wealth)', 'Ruyi scepter'],
    color: 'from-red-600 to-gold-600',
    icon: Crown
  },
  {
    id: 'mesoamerican',
    name: 'Mesoamerican',
    region: 'Central America',
    description: 'Mesoamerican religions include the Aztec, Maya, Olmec, and other cultures. Their pantheons feature gods of creation, rain, sun, war, maize, and death. Human sacrifice was practiced to maintain cosmic order.',
    deities: mesoamericanDeities,
    creationMyth: 'The gods created and destroyed four previous worlds (suns) before the current one (the Fifth Sun). Quetzalcoatl and Tezcatlipoca created the earth from the body of the earth monster Cipactli. Humans were created from Quetzalcoatl\'s blood and bones from the underworld.',
    afterlifeBelief: 'Souls journeyed through the underworld (Mictlan) for four years. Warriors who died in battle and women who died in childbirth became celestial bodies. Those who drowned went to Tlalocan, a paradise of flowers and water.',
    sacredTexts: ['Popol Vuh (Maya creation myth)', 'Chilam Balam (Maya prophetic texts)', 'Codex Mendoza', 'Florentine Codex', 'Codex Borgia'],
    keySymbols: ['Jaguar (power)', 'Eagle (sun)', 'Quetzal bird (preciousness)', 'Cacao (sacred drink)', 'Copal incense', 'Turquoise'],
    color: 'from-green-700 to-teal-600',
    icon: Bird
  }
]

export default function MythologyPage() {
  const [activePantheon, setActivePantheon] = useState<Pantheon>(pantheons[0])
  const [selectedDeity, setSelectedDeity] = useState<Deity>(pantheons[0].deities[0])
  const pantheonIndex = pantheons.findIndex(p => p.id === activePantheon.id)

  const nextPantheon = () => {
    if (pantheonIndex < pantheons.length - 1) {
      setActivePantheon(pantheons[pantheonIndex + 1])
      setSelectedDeity(pantheons[pantheonIndex + 1].deities[0])
    }
  }

  const prevPantheon = () => {
    if (pantheonIndex > 0) {
      setActivePantheon(pantheons[pantheonIndex - 1])
      setSelectedDeity(pantheons[pantheonIndex - 1].deities[0])
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
          <BookOpen size={24} />
          <span className="text-sm uppercase tracking-wider">Sacred Stories</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gold">World Mythology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore 57+ gods and goddesses from 5 ancient civilizations
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 flex-wrap">
          <span>📖 Egyptian (15)</span>
          <span>•</span>
          <span>🏛️ Greek (12)</span>
          <span>•</span>
          <span>🕉️ Hindu (10)</span>
          <span>•</span>
          <span>🐉 Chinese (10)</span>
          <span>•</span>
          <span>🪶 Mesoamerican (10)</span>
        </div>
      </motion.div>

      {/* Pantheon Selector */}
      <div className="flex justify-center gap-3 flex-wrap">
        {pantheons.map((pantheon) => (
          <button
            key={pantheon.id}
            onClick={() => {
              setActivePantheon(pantheon)
              setSelectedDeity(pantheon.deities[0])
            }}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activePantheon.id === pantheon.id
                ? `bg-gradient-to-r ${pantheon.color} text-white shadow-lg`
                : 'bg-white/50 hover:bg-white/80 text-gray-700'
            }`}
          >
            <span className="mr-2">{pantheon.name}</span>
            <span className="text-xs opacity-75">{pantheon.region.split(',')[0]}</span>
          </button>
        ))}
      </div>

      {/* Pantheon Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePantheon.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`egyptian-card bg-gradient-to-br ${activePantheon.color}/10`}
        >
          {/* Pantheon Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <activePantheon.icon size={28} className="text-gold" />
              <div>
                <h2 className="text-2xl font-bold text-egyptian-blue">{activePantheon.name} Pantheon</h2>
                <p className="text-sm text-gold">{activePantheon.region}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevPantheon}
                disabled={pantheonIndex === 0}
                className={`p-2 rounded-full transition-all ${
                  pantheonIndex > 0 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextPantheon}
                disabled={pantheonIndex === pantheons.length - 1}
                className={`p-2 rounded-full transition-all ${
                  pantheonIndex < pantheons.length - 1 ? 'hover:bg-gold/20' : 'opacity-30 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">{activePantheon.description}</p>

          {/* Deity Grid */}
          <h3 className="text-xl font-semibold text-gold mb-4 flex items-center gap-2">
            <Users size={20} />
            Major Deities ({activePantheon.deities.length})
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2 mb-6">
            {activePantheon.deities.map((deity) => {
              const DeityIcon = deity.icon
              return (
                <button
                  key={deity.name}
                  onClick={() => setSelectedDeity(deity)}
                  className={`p-2 rounded-lg text-center transition-all ${
                    selectedDeity.name === deity.name
                      ? `bg-gradient-to-r ${deity.color} text-white shadow-lg`
                      : 'bg-white/50 hover:bg-white/80 text-gray-700'
                  }`}
                >
                  <DeityIcon size={20} className="mx-auto mb-1" />
                  <div className="font-semibold text-xs truncate">{deity.name}</div>
                </button>
              )
            })}
          </div>

          {/* Selected Deity Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDeity.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`bg-gradient-to-r ${selectedDeity.color}/20 rounded-lg p-5`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-full bg-gradient-to-r ${selectedDeity.color} text-white`}>
                  <selectedDeity.icon size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-egyptian-blue">{selectedDeity.name}</h4>
                  <p className="text-sm text-gold">{selectedDeity.title}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{selectedDeity.description}</p>
                  <div className="mb-3">
                    <h5 className="font-semibold text-gold text-sm mb-1">Symbols</h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedDeity.symbols.map((symbol) => (
                        <span key={symbol} className="text-xs bg-white/50 px-2 py-0.5 rounded">
                          {symbol}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gold text-sm mb-1">Major Temples</h5>
                    <div className="flex flex-wrap gap-1">
                      {selectedDeity.temples.map((temple) => (
                        <span key={temple} className="text-xs bg-white/50 px-2 py-0.5 rounded">
                          {temple}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gold text-sm mb-1">Worship & Cult</h5>
                  <p className="text-gray-700 text-sm mb-3">{selectedDeity.worship}</p>
                  <h5 className="font-semibold text-gold text-sm mb-1">Myths & Legends</h5>
                  <p className="text-gray-700 text-sm">{selectedDeity.myths}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Creation & Afterlife Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-6 pt-4 border-t border-gold/30">
            <div>
              <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                <Sun size={16} />
                Creation Myth
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{activePantheon.creationMyth}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                <Moon size={16} />
                Afterlife Belief
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{activePantheon.afterlifeBelief}</p>
            </div>
          </div>

          {/* Sacred Texts & Symbols */}
          <div className="mt-4 pt-4 border-t border-gold/30">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                  <Scroll size={16} />
                  Sacred Texts
                </h4>
                <div className="flex flex-wrap gap-1">
                  {activePantheon.sacredTexts.map((text) => (
                    <span key={text} className="text-xs bg-white/50 px-2 py-0.5 rounded">
                      {text}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gold mb-2 flex items-center gap-2">
                  <Star size={16} />
                  Key Symbols
                </h4>
                <div className="flex flex-wrap gap-1">
                  {activePantheon.keySymbols.map((symbol) => (
                    <span key={symbol} className="text-xs bg-white/50 px-2 py-0.5 rounded">
                      {symbol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-4 bg-gold/10 rounded-lg border border-gold/30"
      >
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gold">📖 57+ Deities Across 5 Pantheons</span> • 
          <span className="ml-1">Egyptian (15)</span> •
          <span className="ml-1">Greek (12)</span> •
          <span className="ml-1">Hindu (10)</span> •
          <span className="ml-1">Chinese (10)</span> •
          <span className="ml-1">Mesoamerican (10)</span>
        </p>
      </motion.div>
    </div>
  )
}