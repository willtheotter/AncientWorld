export interface Location {
  id: string
  name: string
  description: string
  longDescription: string
  image: string
  scene: string
  visualHighlights: string[]
  deity?: string
  type: 'temple' | 'tomb' | 'monument' | 'city' | 'palace'
}

export interface Site {
  id: string
  name: string
  coordinates: [number, number]
  region: string
  locations: Location[]
}

// ========== I. EGYPTIAN SITES (1-30 - Existing from previous code) ==========
// These remain from your original Egyptian sites
export const egyptianSites: Record<string, Site> = {
  alexandria: {
    id: 'alexandria',
    name: 'Alexandria',
    coordinates: [31.2001, 29.9187],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'library-alexandria',
        name: 'Library of Alexandria',
        description: 'The great center of knowledge and scholarship',
        longDescription: `Large halls filled with scrolls and scholars create an atmosphere of intellectual activity. Sunlight enters through high openings, illuminating workspaces and reflecting off polished surfaces. The environment is open and orderly, emphasizing the pursuit of knowledge.`,
        image: '/images/sites/library.jpg',
        scene: 'The Library of Alexandria',
        visualHighlights: ['Great Hall of scrolls', 'Sunlight streaming through high windows', 'Scholars at work', 'Polished reflective surfaces'],
        type: 'city'
      }
    ]
  },
  
  giza: {
    id: 'giza',
    name: 'Giza Plateau',
    coordinates: [29.9792, 31.1342],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'great-pyramid',
        name: 'Great Pyramid of Giza',
        description: 'The luminous pyramid reflecting moonlight',
        longDescription: `In the stillness of a desert night, the pyramid rises as a perfect geometric form—its polished Tura limestone casing reflecting moonlight with a soft, almost ethereal glow. The apex, capped with electrum, catches even the faintest starlight.`,
        image: '/images/sites/pyramid.jpg',
        scene: 'The Night of the Luminous Pyramid',
        visualHighlights: ['Polished limestone reflecting moonlight', 'Electrum cap catching starlight', 'Milky Way mirrored on pyramid faces', 'Flickering fires at ground level'],
        type: 'monument'
      },
      {
        id: 'great-sphinx',
        name: 'Great Sphinx',
        description: 'The guardian in full polychrome',
        longDescription: `The Sphinx appears not as weathered stone, but as a vividly painted monument. Its face carries warm reddish tones, while the nemes headdress is rendered in alternating bands of blue and gold.`,
        image: '/images/sites/sphinx.jpg',
        scene: 'The Great Sphinx in Full Polychrome',
        visualHighlights: ['Warm reddish face tones', 'Blue and gold nemes headdress', 'Pyramids in background', 'Bold polychrome restoration'],
        type: 'monument'
      }
    ]
  },
  
  karnak: {
    id: 'karnak',
    name: 'Karnak Temple',
    coordinates: [25.719, 32.657],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'karnak-hypostyle',
        name: 'Hypostyle Hall',
        description: 'Forest of 134 colossal painted columns',
        longDescription: `The Hypostyle Hall presents a dense forest of colossal columns, each covered in painted reliefs and hieroglyphic inscriptions. The ceiling above, painted a rich blue with golden stars, evokes the night sky.`,
        image: '/images/sites/karnak.jpg',
        scene: 'The Hypostyle Hall at Karnak',
        visualHighlights: ['134 massive columns with painted reliefs', 'Beams of light through clerestory windows', 'Blue ceiling with golden stars', 'Incense-filled shafts of light'],
        deity: 'Amun-Ra',
        type: 'temple'
      }
    ]
  },
  
  luxor: {
    id: 'luxor',
    name: 'Luxor Temple',
    coordinates: [25.699, 32.639],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'luxor-temple',
        name: 'Luxor Temple',
        description: 'The Opet Festival Procession',
        longDescription: `The Opet Festival transforms the city into a vibrant, kinetic environment. Priests carry sacred barques containing the statues of the gods, their surfaces adorned with gold and precious materials.`,
        image: '/images/sites/luxor.jpg',
        scene: 'The Festival of Opet Procession',
        visualHighlights: ['Golden barques with divine statues', 'Rhythmic musicians and dancers', 'Aromatic incense clouds', 'Energetic festival crowds'],
        deity: 'Amun-Ra',
        type: 'temple'
      }
    ]
  },
  
  abuSimbel: {
    id: 'abu-simbel',
    name: 'Abu Simbel',
    coordinates: [22.3365, 31.6255],
    region: 'Egypt - Far South',
    locations: [
      {
        id: 'abu-simbel-temple',
        name: 'Temple of Ramses II',
        description: 'Solar alignment illuminating the sanctuary',
        longDescription: `At a precise moment during the year, the rising sun penetrates the temple's entrance, sending a narrow beam of light deep into the interior sanctuary, illuminating the seated statues of the gods.`,
        image: '/images/sites/abu-simbel.jpg',
        scene: 'The Solar Alignment at Abu Simbel',
        visualHighlights: ['Sun beam penetrating temple depths', 'Activating pigments and gold leaf', 'Illuminated statues of Ramses II', 'Ptah remaining in shadow'],
        deity: 'Ra',
        type: 'temple'
      }
    ]
  },
  
  valleyKings: {
    id: 'valley-kings',
    name: 'Valley of the Kings',
    coordinates: [25.746, 32.629],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'valley-kings',
        name: 'Valley of the Kings',
        description: 'Royal burial ground of the New Kingdom pharaohs',
        longDescription: `In a dimly lit chamber, priests perform ritual actions designed to restore the senses of the deceased. Torchlight flickers across gold surfaces, creating shifting reflections that animate the still form of the mummy.`,
        image: '/images/sites/valley-kings.jpg',
        scene: 'The Opening of the Mouth Ceremony',
        visualHighlights: ['Ritual tools and precise movements', 'Flickering torchlight', 'Gold surfaces reflecting light', 'Solemn ceremonial atmosphere'],
        type: 'tomb'
      }
    ]
  }
}

// ========== II. NUBIA & INNER AFRICA (31-36) ==========
export const nubianSites: Record<string, Site> = {
  jebelBarkal: {
    id: 'jebel-barkal',
    name: 'Jebel Barkal',
    coordinates: [18.5333, 31.8333],
    region: 'Nubia / Kush',
    locations: [
      {
        id: 'jebel-barkal-mountain',
        name: 'Jebel Barkal',
        description: 'Sacred mountain of Amun and Kushite kingship',
        longDescription: `A dramatic sandstone formation rises from the desert—the sacred mountain of Jebel Barkal. The Kushites believed this was where the god Amun resided, making it the religious heart of the Kingdom of Kush. At its base lie temple ruins, including the Great Temple of Amun. The mountain's distinctive pinnacle resembles a uraeus (cobra), reinforcing its divine significance.`,
        image: '/images/sites/jebel-barkal.jpg',
        scene: 'The Sacred Mountain of Amun',
        visualHighlights: ['Dramatic sandstone pinnacle', 'Temple of Amun ruins', 'Kushite royal burial ground', 'Uraeus-shaped peak'],
        deity: 'Amun',
        type: 'temple'
      }
    ]
  },
  
  meroePyramids: {
    id: 'meroe-pyramids',
    name: 'Meroë Pyramids',
    coordinates: [16.9381, 33.7489],
    region: 'Nubia / Kush',
    locations: [
      {
        id: 'meroe-necropolis',
        name: 'Pyramids of Meroë',
        description: 'Steep, narrow pyramids unique to Kushite architecture',
        longDescription: `Unlike the smooth-sided pyramids of Egypt, the Meroë pyramids are steep, narrow, and distinctly Kushite. Over 200 pyramids stand in the desert, their red sandstone glowing in the setting sun. These pyramids served as tombs for Kushite royalty. The steep angle and small base create a unique silhouette against the Nubian sky.`,
        image: '/images/sites/meroe-pyramids.jpg',
        scene: 'The Royal Necropolis of Meroë',
        visualHighlights: ['Over 200 steep pyramids', 'Red sandstone construction', 'Kushite royal burials', 'Unique architectural style'],
        type: 'tomb'
      }
    ]
  },
  
  kerma: {
    id: 'kerma',
    name: 'Kerma',
    coordinates: [19.6, 30.4167],
    region: 'Nubia / Kush',
    locations: [
      {
        id: 'western-deffufa',
        name: 'The Western Deffufa',
        description: 'Massive mudbrick temple of the Kerma kingdom',
        longDescription: `The massive mudbrick structure known as the Western Deffufa dominates the ancient city of Kerma. This 18-meter-high temple served as the religious and political center of the earliest kingdom in Nubia. Below ground lie elaborate burial chambers with hundreds of human sacrifices. Kerma was Egypt's great rival during the Middle Kingdom.`,
        image: '/images/sites/kerma.jpg',
        scene: 'The Western Deffufa of Kerma',
        visualHighlights: ['Massive mudbrick temple', '18 meters tall', 'Elaborate burial chambers', 'Egyptian rival civilization'],
        type: 'temple'
      }
    ]
  },
  
  napata: {
    id: 'napata',
    name: 'Napata',
    coordinates: [18.55, 31.8333],
    region: 'Nubia / Kush',
    locations: [
      {
        id: 'napata-city',
        name: 'Napata',
        description: 'Political-religious center of Kushite pharaohs',
        longDescription: `Napata was the southern capital of the Kingdom of Kush, where the Black Pharaohs of the 25th Dynasty originated. Located at the holy mountain of Jebel Barkal, Napata blended Egyptian and Kushite traditions. The city featured multiple temples dedicated to Amun, royal palaces, and burial grounds. It was from Napata that Piye led his campaign to conquer Egypt.`,
        image: '/images/sites/napata.jpg',
        scene: 'The Kushite Capital of Napata',
        visualHighlights: ['Temples of Amun', 'Kushite palace complexes', 'Royal burial pyramids', 'Hybrid Egyptian-Kushite architecture'],
        deity: 'Amun',
        type: 'city'
      }
    ]
  },
  
  aksum: {
    id: 'aksum',
    name: 'Aksum',
    coordinates: [14.1203, 38.7367],
    region: 'East Africa (Ethiopia)',
    locations: [
      {
        id: 'aksum-city',
        name: 'Kingdom of Aksum',
        description: 'Great trading empire of East Africa',
        longDescription: `Aksum was the capital of a powerful trading empire that controlled Red Sea trade routes between Rome and India. The city's wealth came from ivory, gold, frankincense, and myrrh—the same goods that made Punt legendary. The site features massive stone palaces, elaborate tombs, and the famous obelisks. Aksum adopted Christianity in the 4th century CE, becoming one of the first Christian kingdoms.`,
        image: '/images/sites/aksum.jpg',
        scene: 'The Obelisk City of Aksum',
        visualHighlights: ['Massive stone obelisks', 'Royal palace complexes', 'Ancient Christian churches', 'Ark of the Covenant tradition'],
        type: 'city'
      }
    ]
  },
  
  obelisksAxum: {
    id: 'obelisks-axum',
    name: 'Obelisks of Axum',
    coordinates: [14.1203, 38.7368],
    region: 'East Africa (Ethiopia)',
    locations: [
      {
        id: 'aksum-obelisks',
        name: 'The Great Obelisks of Aksum',
        description: 'Monolithic stone stelae marking royal tombs',
        longDescription: `The obelisks of Aksum are among the largest monolithic stones ever erected by ancient civilizations. The tallest standing obelisk rises 24 meters, carved with detailed windows and doors representing multi-story palaces. These stelae marked underground burial chambers of Aksumite royalty. The fallen Great Obelisk, 33 meters tall, would have been the largest obelisk ever attempted.`,
        image: '/images/sites/axum-obelisks.jpg',
        scene: 'The Stone Giants of Aksum',
        visualHighlights: ['24-meter carved obelisk', 'Palace-style stone architecture', 'Royal burial markers', 'Fallen Great Obelisk'],
        type: 'monument'
      }
    ]
  }
}

// ========== III. RED SEA & PUNT TRADE WORLD (37-42) ==========
export const puntSites: Record<string, Site> = {
  wadiGawasis: {
    id: 'wadi-gawasis',
    name: 'Wadi Gawasis',
    coordinates: [26.53, 33.97],
    region: 'Red Sea Coast',
    locations: [
      {
        id: 'wadi-gawasis-port',
        name: 'Wadi Gawasis',
        description: 'Egyptian expedition port used to reach Punt',
        longDescription: `Wadi Gawasis was Egypt's gateway to the Red Sea and the Land of Punt. From this ancient port, pharaohs launched expeditions for frankincense, myrrh, and exotic goods from Africa. Excavations have revealed perfectly preserved ship timbers, anchors, cargo boxes, and expedition inscriptions—including mentions of the legendary Punt trade. This was where Hatshepsut's famous expedition to Punt departed.`,
        image: '/images/sites/wadi-gawasis.jpg',
        scene: 'Egypt\'s Ancient Red Sea Port',
        visualHighlights: ['Ship timbers preservation', 'Cave storage galleries', 'Expedition inscriptions', 'Nile-Red Sea connection'],
        type: 'city'
      }
    ]
  },
  
  adulis: {
    id: 'adulis',
    name: 'Adulis',
    coordinates: [15.267, 39.667],
    region: 'Red Sea Coast (Eritrea)',
    locations: [
      {
        id: 'adulis-port',
        name: 'Port of Adulis',
        description: 'Major Red Sea trade hub of the ancient world',
        longDescription: `Adulis was the greatest port on the Red Sea during antiquity, serving as the gateway for trade between the Mediterranean, Africa, and India. Egyptian, Greek, Roman, and Aksumite merchants all used this harbor. The port controlled the trade in frankincense, myrrh, ivory, tortoiseshell, and African slaves. The site features extensive ruins—warehouses, temples, and a massive necropolis.`,
        image: '/images/sites/adulis.jpg',
        scene: 'The Great Red Sea Port',
        visualHighlights: ['Warehouse ruins', 'Temple foundations', 'Necropolis', 'Ancient harbor works'],
        type: 'city'
      }
    ]
  },
  
  opone: {
    id: 'opone',
    name: 'Opone',
    coordinates: [10.43, 51.28],
    region: 'Horn of Africa (Somalia)',
    locations: [
      {
        id: 'opone-port',
        name: 'Ancient Opone',
        description: 'Trading port for incense and exotic goods',
        longDescription: `Located on the Somali coast at modern Hafun, Opone was a major trading port for incense, aromatic gums, and exotic animals. The site includes an artificial island connected to the mainland by a causeway, creating a protected harbor. Greek and Roman texts describe Opone as a source of frankincense and myrrh—the same goods sought by Egyptian Punt expeditions.`,
        image: '/images/sites/opone.jpg',
        scene: 'The Spice Port of Opone',
        visualHighlights: ['Artificial harbor island', 'Frankincense storage', 'Causeway engineering', 'Coastal trade routes'],
        type: 'city'
      }
    ]
  },
  
  eritrea: {
    id: 'eritrea',
    name: 'Eritrea Coast',
    coordinates: [15.3333, 38.9167],
    region: 'Horn of Africa',
    locations: [
      {
        id: 'eritrea-punt',
        name: 'The Eritrean Coast',
        description: 'Core region of the legendary Land of Punt',
        longDescription: `The rugged coastline of Eritrea, with its natural harbors and access to the incense-growing highlands, matches the descriptions of Punt in Egyptian texts. Many scholars consider this the most likely location of Punt. The terrain—steep mountains descending to the Red Sea—matches Hatshepsut's relief depictions of the Punt landscape. Ancient port sites along this coast show trade connections with Egypt.`,
        image: '/images/sites/eritrea.jpg',
        scene: 'The Frankincense Coast of Punt',
        visualHighlights: ['Red Sea coastline', 'Incense-growing highlands', 'Natural harbor bays', '"Beehive" house reconstructions'],
        type: 'city'
      }
    ]
  },
  
  somalia: {
    id: 'somalia',
    name: 'Somalia',
    coordinates: [10, 49],
    region: 'Horn of Africa',
    locations: [
      {
        id: 'somalia-punt',
        name: 'The Somali Coast',
        description: 'Eastern extension of the Punt trade network',
        longDescription: `The Horn of Africa's Somali coast, with its frankincense and myrrh production, represents the eastern extension of the Punt trade network. The distinctive long-horned cattle depicted in Hatshepsut's reliefs match species still found in Somalia. Ancient trading ports along this coast connected Africa to Arabia, Persia, and India, trading incense, spices, and exotic animals.`,
        image: '/images/sites/somalia.jpg',
        scene: 'The Incense Lands of Punt',
        visualHighlights: ['Frankincense trees', 'Ancient harbor ruins', 'Long-horned cattle', 'Terraced mountains'],
        type: 'city'
      }
    ]
  },
  
  redSea: {
    id: 'red-sea',
    name: 'The Red Sea',
    coordinates: [22, 38],
    region: 'Red Sea',
    locations: [
      {
        id: 'red-sea-trade',
        name: 'The Red Sea Trade Route',
        description: 'Highway of ancient maritime commerce',
        longDescription: `The Red Sea was the superhighway of the ancient world, connecting Egypt to the riches of Africa, Arabia, and India. Egyptian, Phoenician, Greek, and Roman ships all sailed these waters, carrying gold, incense, spices, ivory, and exotic animals. The sea's unique coral reefs and clear waters create striking blue and turquoise colors. Controlling the Red Sea meant controlling world trade.`,
        image: '/images/sites/red-sea.jpg',
        scene: 'The Ancient Maritime Highway',
        visualHighlights: ['Turquoise coral waters', 'Ancient ship routes', 'Coastal trading ports', 'Monsoon wind patterns'],
        type: 'city'
      }
    ]
  }
}

// ========== IV. PHOENICIANS (43-48) ==========
export const phoenicianSites: Record<string, Site> = {
  tyre: {
    id: 'tyre',
    name: 'Tyre',
    coordinates: [33.2667, 35.2],
    region: 'Phoenicia',
    locations: [
      {
        id: 'tyre-island',
        name: 'The Island City of Tyre',
        description: 'Greatest of the Phoenician trading cities',
        longDescription: `Tyre was the greatest of the Phoenician cities, built on an island fortress just off the coast. Its twin harbors allowed ships to load and unload goods from across the Mediterranean, making Tyre the wealthiest city in the ancient world. The city was famous for its purple dye, derived from murex shells, which cost more than gold. Tyre's merchants established colonies across the Mediterranean, including Carthage.`,
        image: '/images/sites/tyre.jpg',
        scene: 'The Island Fortress of Tyre',
        visualHighlights: ['Double harbor system', 'Murex shell dye works', 'Temple of Melqart', 'Alexander\'s causeway'],
        deity: 'Melqart',
        type: 'city'
      }
    ]
  },
  
  sidon: {
    id: 'sidon',
    name: 'Sidon',
    coordinates: [33.56, 35.375],
    region: 'Phoenicia',
    locations: [
      {
        id: 'sidon-city',
        name: 'Sidon',
        description: 'Center of glassmaking and purple dye',
        longDescription: `Sidon was one of the oldest and wealthiest Phoenician cities, famous for its glass production, purple dye, and skilled sailors. Glassblowing was perfected here, revolutionizing ancient manufacturing and making glass vessels available to everyone. The city's harbor was a hub for trade with Egypt, Greece, and Mesopotamia. Sidonian merchants were renowned throughout the ancient world for their luxury goods.`,
        image: '/images/sites/sidon.jpg',
        scene: 'The Glassmaking Capital',
        visualHighlights: ['Glassblowing workshops', 'Purple dye production', 'Multi-level harbor', 'Phoenician temple'],
        type: 'city'
      }
    ]
  },
  
  byblos: {
    id: 'byblos',
    name: 'Byblos',
    coordinates: [34.12, 35.647],
    region: 'Phoenicia',
    locations: [
      {
        id: 'byblos-port',
        name: 'Byblos',
        description: 'Key link between Egypt and the Levant',
        longDescription: `Byblos was the most ancient Phoenician city, with continuous habitation since 5000 BCE. It was Egypt's primary trade partner in the Levant, importing cedar wood, oil, and wine in exchange for Egyptian gold and papyrus. The Egyptian word for papyrus gave Byblos its name, and the Greek word for book (biblion) derives from Byblos—evidence of this city's central role in the spread of writing.`,
        image: '/images/sites/byblos.jpg',
        scene: 'Egypt\'s Gateway to the Levant',
        visualHighlights: ['Cedar wood trade', 'Egyptian-style temple', 'Royal necropolis', 'Ancient harbor'],
        deity: 'Baalat',
        type: 'city'
      }
    ]
  },
  
  carthage: {
    id: 'carthage',
    name: 'Carthage',
    coordinates: [36.8528, 10.3236],
    region: 'North Africa',
    locations: [
      {
        id: 'carthage-city',
        name: 'Carthage',
        description: 'Phoenicia\'s greatest colony and Rome\'s rival',
        longDescription: `Carthage was the greatest Phoenician colony, founded by Tyre in 814 BCE. It grew from a trading post into a Mediterranean empire that rivaled Rome, controlling North Africa, Spain, and Mediterranean islands. The city featured massive harbors—a circular military harbor for 220 warships and a rectangular commercial harbor for merchant vessels. Hannibal led Carthaginian armies across the Alps to threaten Rome itself.`,
        image: '/images/sites/carthage.jpg',
        scene: 'The Queen of the Mediterranean',
        visualHighlights: ['Circular military harbor', 'Commercial harbor', 'Tophet sacred precinct', 'Byrsa citadel'],
        deity: 'Tanit',
        type: 'city'
      }
    ]
  },
  
  motya: {
    id: 'motya',
    name: 'Motya',
    coordinates: [37.85, 12.4667],
    region: 'Sicily',
    locations: [
      {
        id: 'motya-island',
        name: 'Motya Island Colony',
        description: 'Phoenician island trading colony in Sicily',
        longDescription: `Motya was a small but wealthy Phoenician colony on an island off western Sicily. Its protected harbor served as a waystation for trade between Carthage, Italy, and the Greek world. The city featured a walled acropolis, residential quarters with advanced drainage, and a unique sanctuary (the Tophet) for child burials—a distinctive Phoenician religious practice found throughout their colonies.`,
        image: '/images/sites/motya.jpg',
        scene: 'The Sicilian Trading Post',
        visualHighlights: ['Island fortress', 'Causeway connection', 'Tophet sanctuary', 'Acropolis walls'],
        type: 'city'
      }
    ]
  },
  
  sarepta: {
    id: 'sarepta',
    name: 'Sarepta',
    coordinates: [33.45, 35.3],
    region: 'Phoenicia',
    locations: [
      {
        id: 'sarepta-workshops',
        name: 'Sarepta',
        description: 'Industrial center for Phoenician crafts',
        longDescription: `Sarepta was a major industrial center for Phoenician crafts. Excavations revealed workshops for purple dye, metalworking, pottery, and olive oil production—the manufacturing backbone of Phoenician trade. The city's name appears frequently in Egyptian texts as a source of luxury goods. Unlike Tyre and Sidon, Sarepta was never heavily fortified, focusing instead on manufacturing and trade.`,
        image: '/images/sites/sarepta.jpg',
        scene: 'The Industrial Heart of Phoenicia',
        visualHighlights: ['Dye production facilities', 'Metalworking workshops', 'Pottery kilns', 'Phoenician sanctuary'],
        deity: 'Tanit',
        type: 'city'
      }
    ]
  }
}

// ========== V. BABYLONIANS (49-54) ==========
export const babylonianSites: Record<string, Site> = {
  babylon: {
    id: 'babylon',
    name: 'Babylon',
    coordinates: [32.5416, 44.4146],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'babylon-city',
        name: 'The City of Babylon',
        description: 'Imperial capital and cultural center of Mesopotamia',
        longDescription: `Babylon was the greatest city of ancient Mesopotamia, its name evoking images of grandeur, decadence, and power. The city sprawled across both banks of the Euphrates River, protected by massive double walls wide enough for chariot racing. Under Nebuchadnezzar II, Babylon reached its peak, with the Etemenanki ziggurat (Tower of Babel), the Ishtar Gate, and the legendary Hanging Gardens—one of the Seven Wonders.`,
        image: '/images/sites/babylon.jpg',
        scene: 'The Glorious City of Babylon',
        visualHighlights: ['Massive double walls', 'Euphrates River bridges', 'Ishtar Gate processional way', 'Etemenanki ziggurat'],
        deity: 'Marduk',
        type: 'city'
      }
    ]
  },
  
  ishtarGate: {
    id: 'ishtar-gate',
    name: 'Ishtar Gate',
    coordinates: [32.543, 44.418],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'ishtar-gate-structure',
        name: 'The Ishtar Gate',
        description: 'Iconic blue-glazed ceremonial gate of Babylon',
        longDescription: `The Ishtar Gate was Babylon's most magnificent structure, a blue-glazed brick archway decorated with over 120 molded lions, dragons (sirrush), and aurochs in alternating rows. The gate's glazed bricks shimmer in the sun, their cobalt blue color symbolizing divine presence. The Processional Way, leading through the gate, was used for the New Year's festival when the statue of Marduk was paraded through the city.`,
        image: '/images/sites/ishtar-gate.jpg',
        scene: 'The Gate of the Goddess Ishtar',
        visualHighlights: ['Blue-glazed brickwork', 'Lion processional reliefs', 'Dragon (sirrush) figures', 'Inscribed bricks of Nebuchadnezzar'],
        deity: 'Ishtar',
        type: 'monument'
      }
    ]
  },
  
  etemenanki: {
    id: 'etemenanki',
    name: 'Etemenanki',
    coordinates: [32.536, 44.421],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'etemenanki-ziggurat',
        name: 'Etemenanki',
        description: 'Massive stepped tower linked to the Tower of Babel',
        longDescription: `Etemenanki ("House of the Foundation of Heaven and Earth") was the great ziggurat of Babylon, a seven-tiered tower rising 91 meters above the city. Its steps were painted in different colors, each representing a planetary deity. The ziggurat contained the temple of Marduk at its summit, accessible only to priests. The structure's name and description likely inspired the biblical Tower of Babel story.`,
        image: '/images/sites/etemenanki.jpg',
        scene: 'The House of Heaven and Earth',
        visualHighlights: ['Seven colored tiers', 'Summit temple of Marduk', 'Spiral ascent ramp', 'Babylonian ziggurat architecture'],
        deity: 'Marduk',
        type: 'temple'
      }
    ]
  },
  
  borsippa: {
    id: 'borsippa',
    name: 'Borsippa',
    coordinates: [32.3915, 44.3417],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'borsippa-ziggurat',
        name: 'The Ziggurat of Borsippa',
        description: 'Religious center of the god Nabu',
        longDescription: `Borsippa was Babylon's sister city, famous for its massive ziggurat dedicated to the god Nabu (son of Marduk). The ziggurat's ruins still rise dramatically from the plain, its core visible after outer casing was stripped. Nabu was god of writing and wisdom, making Borsippa a center for scribal training and literary production. The site was believed to be where Nabu wrote humanity's destinies each New Year.`,
        image: '/images/sites/borsippa.jpg',
        scene: 'The Temple of Nabu the Scribe',
        visualHighlights: ['Standing ziggurat ruins', 'Nabu temple complex', 'Scribal school tablets', 'Babylonian religious center'],
        deity: 'Nabu',
        type: 'temple'
      }
    ]
  },
  
  sippar: {
    id: 'sippar',
    name: 'Sippar',
    coordinates: [33.058, 44.252],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'sippar-temple',
        name: 'Sippar',
        description: 'City dedicated to the sun god Shamash',
        longDescription: `Sippar was the center of sun god Shamash worship in Babylonia. The Ebabbara temple here housed the most important cult statue of Shamash, consulted for oracles and legal decisions as god of justice. The city's library contained thousands of clay tablets, including the famous sun god tablet showing Shamash on his throne. As god of justice, Shamash's city attracted those seeking legal judgments.`,
        image: '/images/sites/sippar.jpg',
        scene: 'The City of the Sun God',
        visualHighlights: ['Ebabbara temple', 'Shamash cult statue', 'Royal inscriptions', 'Legal document archive'],
        deity: 'Shamash',
        type: 'temple'
      }
    ]
  },
  
  ur: {
    id: 'ur',
    name: 'Ur',
    coordinates: [30.962, 46.104],
    region: 'Mesopotamia',
    locations: [
      {
        id: 'ur-city',
        name: 'The City of Ur',
        description: 'Ancient Sumerian city of Abraham',
        longDescription: `Ur was one of the most ancient and important cities of Mesopotamia, dating to 3800 BCE. The city's great ziggurat dedicated to the moon god Nanna dominated the skyline. The Royal Cemetery of Ur yielded spectacular treasures—gold helmets, the Standard of Ur showing war and peace, elaborate lyres, and evidence of human sacrifice. Abraham is traditionally associated with Ur before his journey to Canaan.`,
        image: '/images/sites/ur.jpg',
        scene: 'The Ancient City of Abraham',
        visualHighlights: ['Ziggurat of Nanna', 'Royal Cemetery treasures', 'Standard of Ur mosaic', 'Abraham\'s traditional birthplace'],
        deity: 'Nanna',
        type: 'city'
      }
    ]
  }
}

// ========== VI. HEBREWS (55-60) ==========
export const hebrewSites: Record<string, Site> = {
  jerusalem: {
    id: 'jerusalem',
    name: 'Jerusalem',
    coordinates: [31.7683, 35.2137],
    region: 'Judah/Canaan',
    locations: [
      {
        id: 'jerusalem-city',
        name: 'Jerusalem',
        description: 'Religious and political center of ancient Israel',
        longDescription: `Jerusalem was the capital of the united Kingdom of Israel and later Judah, built on a hilltop surrounded by valleys. The City of David, the oldest settled area, features the Gihon Spring—Jerusalem's water source for millennia. Kings David and Solomon made Jerusalem their capital, building palaces and the First Temple. The city was destroyed by Babylon in 586 BCE but rebuilt, becoming the spiritual center of Judaism.`,
        image: '/images/sites/jerusalem.jpg',
        scene: 'The Golden City on the Hill',
        visualHighlights: ['City of David', 'Temple Mount', 'Valley of Hinnom', 'Defensive walls'],
        type: 'city'
      }
    ]
  },
  
  templeMount: {
    id: 'temple-mount',
    name: 'Temple Mount',
    coordinates: [31.777, 35.235],
    region: 'Judah/Canaan',
    locations: [
      {
        id: 'solomons-temple',
        name: 'Solomon\'s Temple',
        description: 'Traditional site of Solomon\'s Temple',
        longDescription: `The Temple Mount was the holiest site in ancient Israel, where Solomon built the First Temple to house the Ark of the Covenant. The temple was a magnificent structure of cedar, gold, and stone. The Holy of Holies, containing the Ark, could only be entered once yearly by the High Priest. Bronze pillars named Jachin and Boaz flanked the entrance, while the Molten Sea held water for ritual purification.`,
        image: '/images/sites/temple-mount.jpg',
        scene: 'The First Temple of Solomon',
        visualHighlights: ['Holy of Holies', 'Bronze pillars Jachin and Boaz', 'Molten Sea', 'Ark of the Covenant'],
        deity: 'Yahweh',
        type: 'temple'
      }
    ]
  },
  
  cityDavid: {
    id: 'city-david',
    name: 'City of David',
    coordinates: [31.773, 35.236],
    region: 'Judah/Canaan',
    locations: [
      {
        id: 'david-kingdom',
        name: 'City of David',
        description: 'Earliest settlement core of Jerusalem',
        longDescription: `The City of David is the original hilltop settlement that became Jerusalem. King David captured the city from the Jebusites and made it his capital, building a palace and bringing the Ark of the Covenant here. The Gihon Spring, at the base of the hill, provided water through a system of tunnels, including Hezekiah's Tunnel carved during an Assyrian siege.`,
        image: '/images/sites/city-david.jpg',
        scene: 'David\'s Capital City',
        visualHighlights: ['Stepped Stone Structure', 'Gihon Spring tunnels', 'Ancient fortifications', 'Ophel administrative center'],
        type: 'city'
      }
    ]
  },
  
  hebron: {
    id: 'hebron',
    name: 'Hebron',
    coordinates: [31.525, 35.095],
    region: 'Judah/Canaan',
    locations: [
      {
        id: 'hebron-cave',
        name: 'Hebron',
        description: 'City of the Patriarchs',
        longDescription: `Hebron is one of the most ancient cities in the Near East, traditionally associated with Abraham, Isaac, and Jacob. The Cave of Machpelah, where Abraham purchased a burial plot, is the traditional tomb of the patriarchs and matriarchs. Abraham lived in Hebron after separating from Lot, receiving divine promises here. Later, David was crowned king of Judah at Hebron before capturing Jerusalem.`,
        image: '/images/sites/hebron.jpg',
        scene: 'The City of the Patriarchs',
        visualHighlights: ['Cave of Machpelah', 'Herodian enclosure', 'Ancient city walls', 'Traditional oak of Abraham'],
        type: 'city'
      }
    ]
  },
  
  mountSinai: {
    id: 'mount-sinai',
    name: 'Mount Sinai',
    coordinates: [28.539, 33.973],
    region: 'Sinai Peninsula',
    locations: [
      {
        id: 'sinai-mountain',
        name: 'Mount Sinai',
        description: 'Site of divine revelation tradition',
        longDescription: `Mount Sinai is traditionally identified with the mountain where Moses received the Ten Commandments. The mountain rises dramatically from the surrounding desert, its red granite peak visible from miles away. According to tradition, the Israelites camped here for nearly a year after the Exodus, receiving the law and building the Tabernacle. At the base stands Saint Catherine's Monastery, containing some of the world's oldest manuscripts.`,
        image: '/images/sites/mount-sinai.jpg',
        scene: 'The Mountain of Divine Revelation',
        visualHighlights: ['Red granite peak', 'Moses\' traditional ascent path', 'Saint Catherine\'s Monastery', 'Burning Bush tradition'],
        type: 'monument'
      }
    ]
  },
  
  lachish: {
    id: 'lachish',
    name: 'Lachish',
    coordinates: [31.565, 34.848],
    region: 'Judah/Canaan',
    locations: [
      {
        id: 'lachish-fortress',
        name: 'Lachish',
        description: 'Important military and administrative center',
        longDescription: `Lachish was the second most important city in Judah after Jerusalem, guarding the approaches to the capital. The city's massive fortifications, including a double wall and siege ramp, testify to its strategic importance. The Assyrians under Sennacherib besieged and captured Lachish in 701 BCE, an event depicted in dramatic reliefs on the walls of Nineveh. The Lachish Letters record the final days before Babylon's destruction.`,
        image: '/images/sites/lachish.jpg',
        scene: 'The Fortress of Judah',
        visualHighlights: ['Double defensive walls', 'Assyrian siege ramp', 'Palace-fort', 'Lachish Letters archive'],
        type: 'city'
      }
    ]
  }
}

// ========== VII. HYKSOS, HITTITES & CONFLICT ZONE (61-66) ==========
export const invaderSites: Record<string, Site> = {
  avaris: {
    id: 'avaris',
    name: 'Avaris',
    coordinates: [30.786, 31.821],
    region: 'Nile Delta',
    locations: [
      {
        id: 'avaris-hyksos',
        name: 'Avaris',
        description: 'Delta city and Hyksos stronghold',
        longDescription: `Avaris was the capital of the Hyksos, foreign rulers who dominated northern Egypt during the Second Intermediate Period. The city blended Egyptian and Canaanite cultures, with temples to Baal alongside Egyptian deities. Excavations revealed a massive fortress with thick walls, palaces decorated with Minoan-style frescoes, and multiple temples. The Hyksos introduced the horse and chariot to Egypt, revolutionizing warfare.`,
        image: '/images/sites/avaris.jpg',
        scene: 'The Hyksos Capital',
        visualHighlights: ['Fortress walls', 'Canaanite-style temples', 'Minoan frescoes', 'Chariot workshops'],
        type: 'city'
      }
    ]
  },
  
  hattusa: {
    id: 'hattusa',
    name: 'Hattusa',
    coordinates: [40.017, 34.615],
    region: 'Anatolia',
    locations: [
      {
        id: 'hattusa-capital',
        name: 'Hattusa',
        description: 'Massive fortified Hittite capital',
        longDescription: `Hattusa was the imposing capital of the Hittite Empire, set in rugged Anatolian terrain with massive stone walls and gates. The city's massive fortifications—6 km of walls with towers and gates—made it impregnable. The Great Temple, gateway complexes, and royal archives containing thousands of clay tablets (including the peace treaty with Egypt) define the site. The city was mysteriously abandoned around 1200 BCE during the Bronze Age collapse.`,
        image: '/images/sites/hattusa.jpg',
        scene: 'The Hittite Citadel',
        visualHighlights: ['6 km defensive walls', 'Sphinx Gate reliefs', 'Lion Gate guardians', 'Royal tablet archives'],
        type: 'city'
      }
    ]
  },
  
  kadesh: {
    id: 'kadesh',
    name: 'Kadesh',
    coordinates: [34.55, 36.5],
    region: 'Levant',
    locations: [
      {
        id: 'kadesh-battlefield',
        name: 'Battle of Kadesh',
        description: 'Site of major Egypt-Hittite battle',
        longDescription: `The city of Kadesh, on the Orontes River, was the site of the greatest chariot battle in ancient history (1274 BCE). The battle between Ramesses II and Hittite king Muwatalli II resulted in the world's first recorded peace treaty. The city's strategic location controlling trade routes made it a constant battleground between Egyptian and Hittite empires. Though neither side achieved clear victory, the peace treaty established relations between the two great powers.`,
        image: '/images/sites/kadesh-battle.jpg',
        scene: 'The Chariot Battle of the Ages',
        visualHighlights: ['Orontes River valley', 'Fortress ruins', 'Ancient battle memorials', 'Peace treaty tablet'],
        type: 'city'
      }
    ]
  },
  
  ugarit: {
    id: 'ugarit',
    name: 'Ugarit',
    coordinates: [35.6, 35.7833],
    region: 'Levant',
    locations: [
      {
        id: 'ugarit-port',
        name: 'Ugarit',
        description: 'Destroyed during Sea Peoples\' invasions',
        longDescription: `Ugarit was a wealthy Bronze Age port city destroyed during the Sea Peoples' invasions around 1190 BCE. The city never recovered, preserving its final moments like a Pompeii of ancient Syria. The palace archive contained clay tablets in multiple languages, including the earliest known alphabet. Royal letters mention invasion fleets approaching the coast—then silence. Excavations revealed burnt houses, collapsed roofs, and abandoned valuables.`,
        image: '/images/sites/ugarit.jpg',
        scene: 'The Day the Bronze Age Died',
        visualHighlights: ['Royal palace ruins', 'Alphabet tablets archive', 'Burnt destruction layer', 'Harbor fortifications'],
        type: 'city'
      }
    ]
  },
  
  megiddo: {
    id: 'megiddo',
    name: 'Megiddo',
    coordinates: [32.585, 35.185],
    region: 'Levant',
    locations: [
      {
        id: 'megiddo-battles',
        name: 'Megiddo',
        description: 'Strategic crossroads with multiple battles',
        longDescription: `Megiddo guards the Aruna Pass, the most important route between Egypt and Mesopotamia. The site has witnessed more battles than any other location on earth—from Thutmose III's surprise attack (1457 BCE) through Napoleon's campaigns. The tell contains 26 layers of civilization. Thutmose III's famous charge through the narrow pass caught the Canaanite coalition off guard, leading to Egypt's greatest victory.`,
        image: '/images/sites/megiddo.jpg',
        scene: 'The Battlefield of Empires',
        visualHighlights: ['Aruna Pass overlook', 'Solomonic gates', 'Water tunnel system', 'Chariot stables'],
        type: 'city'
      }
    ]
  },
  
  alalakh: {
    id: 'alalakh',
    name: 'Alalakh',
    coordinates: [36.237, 36.383],
    region: 'Levant',
    locations: [
      {
        id: 'alalakh-city',
        name: 'Alalakh',
        description: 'Important trade and political center',
        longDescription: `Alalakh was a prosperous city in the Amuq Valley, controlling trade between Mesopotamia, Anatolia, and the Mediterranean. Its palaces and temples document centuries of political change as the city shifted between Hittite and Egyptian spheres. Thousands of clay tablets found at the site record legal transactions, diplomatic correspondence, and economic data, providing a detailed picture of Bronze Age life.`,
        image: '/images/sites/alalakh.jpg',
        scene: 'The Merchant Prince\'s City',
        visualHighlights: ['Palace of Yarim-Lim', 'Trade contract tablets', 'Fortification walls', 'Temple precinct'],
        type: 'city'
      }
    ]
  }
}

// ========== VIII. AEGEAN & GREEK WORLD (67-72) ==========
export const greekSites: Record<string, Site> = {
  acropolis: {
    id: 'acropolis',
    name: 'Acropolis of Athens',
    coordinates: [37.9715, 23.7257],
    region: 'Greece',
    locations: [
      {
        id: 'acropolis-hill',
        name: 'The Acropolis',
        description: 'Iconic elevated complex overlooking Athens',
        longDescription: `The Acropolis rises dramatically above Athens, its flat limestone summit transformed into the greatest sanctuary of ancient Greece. The Propylaea gateway, Temple of Athena Nike, Erechtheion, and Parthenon form a unified architectural ensemble of breathtaking beauty. Pericles' building program in the 5th century BCE created the Acropolis as a symbol of Athenian power and devotion to Athena.`,
        image: '/images/sites/acropolis.jpg',
        scene: 'The Sacred Rock of Athens',
        visualHighlights: ['Parthenon silhouette', 'Propylaea gateway', 'Erechtheion maidens', 'Athena Promachos statue'],
        deity: 'Athena',
        type: 'temple'
      }
    ]
  },
  
  parthenon: {
    id: 'parthenon',
    name: 'Parthenon',
    coordinates: [37.9715, 23.7266],
    region: 'Greece',
    locations: [
      {
        id: 'parthenon-temple',
        name: 'The Parthenon',
        description: 'Masterpiece of classical Greek architecture',
        longDescription: `The Parthenon, temple to Athena Parthenos, is the supreme expression of Classical Greek architecture. Its optical refinements—curved steps, tilted columns, corner contraction—create an illusion of perfect symmetry. The statue of Athena Parthenos, 12 meters tall, stood in the inner cella, covered in gold and ivory. The Parthenon has survived as temple, church, mosque, and powder magazine—the most imitated building in Western history.`,
        image: '/images/sites/parthenon.jpg',
        scene: 'The Temple of Athena Parthenos',
        visualHighlights: ['Doric column perfection', 'Pediment sculptures', 'Metope reliefs', 'Athena Parthenos statue'],
        deity: 'Athena',
        type: 'temple'
      }
    ]
  },
  
  delphi: {
    id: 'delphi',
    name: 'Delphi',
    coordinates: [38.482, 22.501],
    region: 'Greece',
    locations: [
      {
        id: 'oracle-delphi',
        name: 'Delphi',
        description: 'Oracle site set dramatically in the mountains',
        longDescription: `Delphi, perched on Mount Parnassus slopes overlooking the Gulf of Corinth, was the most sacred site in ancient Greece—the navel of the world. Here the Pythia, Apollo's priestess, inhaled vapors and uttered prophecies consulted by kings and commoners. The site features the Temple of Apollo, theater, stadium, and treasury buildings. No Greek colony was founded, no war declared, without consulting Delphi's oracle.`,
        image: '/images/sites/delphi.jpg',
        scene: 'The Navel of the World',
        visualHighlights: ['Temple of Apollo', 'Omphalos stone', 'Sacred Way path', 'Mountain amphitheater'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  },
  
  olympia: {
    id: 'olympia',
    name: 'Olympia',
    coordinates: [37.638, 21.63],
    region: 'Greece',
    locations: [
      {
        id: 'olympia-sanctuary',
        name: 'Olympia',
        description: 'Birthplace of the Olympic Games',
        longDescription: `Olympia was the sanctuary of Zeus, hosting the Olympic Games every four years beginning in 776 BCE. Athletes from every Greek city-state competed in the spirit of sacred truce, honoring Zeus with their physical excellence. The Temple of Zeus contained one of the Seven Wonders—the gold and ivory statue of Zeus by Pheidias. The stadium, gymnasium, and palaestra form the earliest athletic complex in history.`,
        image: '/images/sites/olympia.jpg',
        scene: 'The Sacred Games of Zeus',
        visualHighlights: ['Temple of Zeus', 'Stadium starting line', 'Pheidias\' workshop', 'Altis sanctuary grove'],
        deity: 'Zeus',
        type: 'temple'
      }
    ]
  },
  
  knossos: {
    id: 'knossos',
    name: 'Knossos',
    coordinates: [35.298, 25.163],
    region: 'Crete',
    locations: [
      {
        id: 'knossos-palace',
        name: 'Palace of Knossos',
        description: 'Labyrinthine palace complex with vivid frescoes',
        longDescription: `Knossos, the legendary palace of King Minos, is Europe's oldest city—a sprawling maze of rooms, corridors, staircases, and light wells. The myth of the Minotaur in its labyrinth may recall the palace's complex layout. The Throne Room, with its alabaster seat flanked by griffins, suggests Minoan kingship. Vivid frescoes—Dolphins, Bull Leapers, Prince of Lilies—preserve Minoan art at its height.`,
        image: '/images/sites/knossos.jpg',
        scene: 'The Palace of the Minotaur',
        visualHighlights: ['Throne Room', 'Dolphin fresco', 'Light well architecture', 'Linear A tablets'],
        type: 'palace'
      }
    ]
  },
  
  akrotiri: {
    id: 'akrotiri',
    name: 'Akrotiri',
    coordinates: [36.35, 25.4],
    region: 'Santorini',
    locations: [
      {
        id: 'akrotiri-city',
        name: 'Akrotiri',
        description: 'Minoan Bronze Age city preserved in volcanic ash',
        longDescription: `Akrotiri was a prosperous Minoan city on the island of Thera (Santorini), buried under volcanic ash around 1600 BCE. Like Pompeii, the ash preserved multi-story buildings, stunning frescoes, and everyday objects in remarkable detail. The city had advanced plumbing, heated rooms, and elaborate art. The eruption that destroyed Akrotiri may have inspired the Atlantis legend and contributed to the decline of Minoan civilization.`,
        image: '/images/sites/akrotiri.jpg',
        scene: 'The Minoan Pompeii',
        visualHighlights: ['Multi-story buildings preserved', 'Frescoes of monkeys and fishermen', 'Advanced plumbing systems', 'Volcanic ash layer'],
        type: 'city'
      }
    ]
  }
}

// ========== COMBINED EXPORT ==========
export const sites: Record<string, Site> = {
  ...egyptianSites,
  ...nubianSites,
  ...puntSites,
  ...phoenicianSites,
  ...babylonianSites,
  ...hebrewSites,
  ...invaderSites,
  ...greekSites
}

// Featured sites for homepage quick links
export const featuredSites = [
  { id: 'great-pyramid', name: 'Great Pyramid', icon: '𓋹', siteId: 'giza' },
  { id: 'karnak-hypostyle', name: 'Karnak', icon: '𓊨', siteId: 'karnak' },
  { id: 'abu-simbel-temple', name: 'Abu Simbel', icon: '𓆣', siteId: 'abuSimbel' },
  { id: 'meroe-pyramids', name: 'Meroë Pyramids', icon: '𓋴', siteId: 'meroe-pyramids' },
  { id: 'tyre-island', name: 'Tyre', icon: '𓂀', siteId: 'tyre' },
  { id: 'babylon-city', name: 'Babylon', icon: '𓆊', siteId: 'babylon' },
  { id: 'jerusalem-city', name: 'Jerusalem', icon: '𓅃', siteId: 'jerusalem' },
  { id: 'acropolis-hill', name: 'Acropolis', icon: '𓁟', siteId: 'acropolis' }
]