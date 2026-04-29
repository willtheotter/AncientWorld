export interface Location {
  id: string
  name: string
  description: string
  longDescription: string
  imageRegenerated: string
  imageCurrent: string
  scene: string
  visualHighlights: string[]
  deity?: string
  type: 'temple' | 'tomb' | 'monument' | 'city' | 'palace'
  youtubeUrl?: string
}

export interface Site {
  id: string
  name: string
  coordinates: [number, number]
  region: string
  locations: Location[]
}

// ========== SECTION 1: EGYPTIAN SITES (1-35) ==========
export const egyptianSites: Record<string, Site> = {
  // 1. Alexandria - Library of Alexandria
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
        longDescription: `Founded by Ptolemy I Soter around 300 BCE, the Library of Alexandria was the largest and most significant library of the ancient world. Part of a larger research institution called the Musaeum of Alexandria (dedicated to the Muses), it was the first known institution to bring together scholars from across the Hellenistic world.

The library's collection grew to an estimated 400,000 to 700,000 scrolls, representing the greatest concentration of human knowledge in antiquity. Scholars such as Euclid (geometry), Eratosthenes (calculated Earth's circumference), Archimedes (engineering), and Galen (medicine) studied and worked here. The library declined gradually, suffering damage from Roman conflicts (48 BCE), the Palmyrene invasion (270 CE), and later decrees against pagan learning. The modern Bibliotheca Alexandrina (opened 2002) stands near the ancient site.`,
        imageRegenerated: '/images/sites/library-alexandria-regenerated.jpg',
        imageCurrent: '/images/sites/library-alexandria-current.jpg',
        scene: 'The Library of Alexandria',
        visualHighlights: ['Great Hall of scrolls organized by subject', 'Sunlight through high clerestory windows', 'Scholars from across Hellenistic world', 'Polished marble and reflective pools', 'Underground storage for duplicate scrolls'],
        deity: 'Thoth',
        type: 'city',
        youtubeUrl: 'https://youtu.be/GQBRqVn0Qpw'
      }
    ]
  },

  // 2. Bubastis - Temple of Bastet
  bubastis: {
    id: 'bubastis',
    name: 'Bubastis',
    coordinates: [30.5667, 31.5167],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'temple-bastet',
        name: 'Temple of Bastet',
        description: 'Center of celebration for the cat goddess',
        longDescription: `The Temple of Bastet at Bubastis (modern Tell Basta) was described by Herodotus as one of the most beautiful in Egypt. The temple sat on an island approached by a canal from the Nile, giving an ethereal appearance as if floating on water.

The temple hosted the largest festival in Egypt, the "Bastet Festival," drawing over 700,000 pilgrims each year. Celebrants came on decorated barges, playing castanets and flutes, with women engaging in "aubades" (serenades at dawn) and men dancing and singing—Egypt's version of Carnival.

The sanctuary contained a massive statue of Bastet, a lioness-headed goddess who represented both the gentle protector of the home (as a cat) and the fierce defender of the pharaoh (as a lioness). The temple also housed a sacred cat cemetery with thousands of mummified cats.`,
        imageRegenerated: '/images/sites/temple-bastet-regenerated.jpg',
        imageCurrent: '/images/sites/temple-bastet-current.jpg',
        scene: 'The Festival City of Bastet',
        visualHighlights: ['Temple surrounded by canal water on three sides', 'Procession with cat-headed goddess statue', 'Pilgrim crowds celebrating with music and dance', 'Cat statues flanking the pylons', 'Sacred cat cemetery with thousands of mummies'],
        deity: 'Bastet',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/fIkCmQvjgZ0?si=9H4UABW5Qe3efjF3'
      }
    ]
  },

  // 3-4. Giza Plateau - Great Pyramid & Sphinx
  giza: {
    id: 'giza',
    name: 'Giza Plateau',
    coordinates: [29.9792, 31.1342],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'great-pyramid',
        name: 'Great Pyramid of Giza',
        description: 'The last surviving wonder of the ancient world',
        longDescription: `The Great Pyramid of Khufu (Cheops) was built around 2560 BCE as a tomb for Pharaoh Khufu of the Fourth Dynasty. It was the tallest man-made structure on Earth for over 3,800 years, rising 146.6 meters (481 feet) before losing its smooth limestone casing.

The pyramid contains an estimated 2.3 million blocks of limestone and granite, weighing an average of 2.5 to 15 tons each, with some granite blocks in the "King's Chamber" reaching 80 tons. The internal architecture includes the descending passage, lower chamber, Grand Gallery, and the King's and Queen's chambers. The "air shafts" align with stars in the constellation Orion, suggesting religious significance.`,
        imageRegenerated: '/images/sites/great-pyramid-regenerated.jpg',
        imageCurrent: '/images/sites/great-pyramid-current.jpg',
        scene: 'The Night of the Luminous Pyramid',
        visualHighlights: ['Polished Tura limestone reflecting moonlight', 'Electrum cap catching starlight at apex', 'Milky Way mirrored on pyramid faces', 'Flickering fires at ground-level settlements', 'Grand Gallery interior with corbelled ceiling'],
        deity: 'Ra',
        type: 'monument',
        youtubeUrl: 'https://youtu.be/n5pQUkxzlz4?si=e__8v1wDexWCAo-j'
      },
      {
        id: 'great-sphinx',
        name: 'Great Sphinx of Giza',
        description: 'Guardian of the pyramids with lion body and human head',
        longDescription: `The Great Sphinx is the largest monolith statue in the world, carved directly from the limestone bedrock of the Giza Plateau. It measures 73 meters (240 feet) long, 20 meters (66 feet) wide, and 20 meters high. The face is thought to represent Pharaoh Khafre, whose pyramid stands behind it.

The statue was originally brightly painted: traces of red pigment remain on the face, and the nemes headdress showed alternating stripes of blue and yellow. The body was painted red, a color associated with solar power and regeneration.

The "Dream Stele" between the Sphinx's paws records a dream of Pharaoh Thutmose IV, where the Sphinx promised him the throne if he cleared away the sand burying the statue—which he did and became pharaoh.`,
        imageRegenerated: '/images/sites/great-sphinx-regenerated.jpg',
        imageCurrent: '/images/sites/great-sphinx-current.jpg',
        scene: 'The Great Sphinx in Full Polychrome',
        visualHighlights: ['Warm reddish face tones with carved features', 'Blue and gold nemes headdress alternating bands', 'Pyramids of Khafre and Menkaure in background', 'Bold polychrome restoration showing original colors', 'Dream Stele between the paws with hieroglyphs'],
        deity: 'Horus',
        type: 'monument',
        youtubeUrl: 'https://youtu.be/Rqyby56IHus?si=VppKsVHwkwDtVcTF'
      }
    ]
  },

  // 5-7. Memphis Region
  memphis: {
    id: 'memphis',
    name: 'Memphis',
    coordinates: [29.8447, 31.2509],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'temple-ptah',
        name: 'Temple of Ptah',
        description: 'Great temple of the creator god Ptah',
        longDescription: `The Temple of Ptah at Memphis was the religious center of Egypt's ancient capital. Ptah was the creator god who fashioned the world through thought and speech—"the Lord of Truth, Father of the gods." Unlike other Egyptian creation myths involving physical acts, Ptah created by divine utterance, inspiring later Judeo-Christian concepts of "in the beginning was the Word."

The temple housed a massive statue of Ptah, described by Herodotus as a "colossos of Ptah, very great and remarkable." The temple's high priests, called "Greatest of the Directors of Craftsmen," were among Egypt's most powerful officials.`,
        imageRegenerated: '/images/sites/temple-ptah-regenerated.jpg',
        imageCurrent: '/images/sites/temple-ptah-current.jpg',
        scene: 'The Creator God\'s Sanctuary',
        visualHighlights: ['Massive statue of Ptah in his shrine', 'Creator god theology depicted in reliefs', 'Scenes of Ptah creating through speech', 'Pilgrims bringing offerings', 'Colonnaded courtyards with columns'],
        deity: 'Ptah',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/SYbnhkiwqLk?si=ENXcddmkE8osRdt0'
      },
      {
        id: 'serapeum',
        name: 'Serapeum of Memphis',
        description: 'Underground galleries of the sacred Apis bulls',
        longDescription: `The Serapeum of Memphis was the burial place of the Apis bulls, living manifestations of the god Ptah. Each bull was selected by specific markings and lived in the temple precinct as a god before being mummified and buried with great ceremony.

The Serapeum's underground galleries stretch for hundreds of meters, containing 24 massive granite sarcophagi weighing up to 70 tons each. The chambers were carved from solid limestone, with some sarcophagi 4 meters long, 3 meters high, and 2.5 meters wide.

The Greek historian Strabo (64 BCE - 24 CE) visited the site and described the path of sphinxes leading to the sanctuary, which remained a pilgrimage site into Roman times.`,
        imageRegenerated: '/images/sites/serapeum-regenerated.jpg',
        imageCurrent: '/images/sites/serapeum-current.jpg',
        scene: 'The Tomb of the Apis Bulls',
        visualHighlights: ['Massive granite sarcophagi weighing 70 tons', 'Underground galleries with torch-lit chambers', 'Apis bull burials with gold funerary masks', 'Ptah manifestations in the bull form', 'Sphinx-lined processional way above ground'],
        deity: 'Ptah',
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/nfv3vRrfp2E?si=TFC0aICcwZiMN-NH'
      },
      {
        id: 'step-pyramid',
        name: 'Step Pyramid of Djoser',
        description: 'The earliest monumental stone structure in history',
        longDescription: `The Step Pyramid of Djoser, designed by the architect Imhotep (later deified as a god of medicine), marked the transition from mastaba tombs to true pyramids. It was Egypt's first massive stone structure, built for Pharaoh Djoser of the Third Dynasty around 2670 BCE.

The pyramid originally rose 62 meters (203 feet) in six stepped tiers, representing a staircase for the pharaoh to ascend to the stars. The complex included the first stone columns in history, a mortuary temple, and a Heb-Sed court for the pharaoh's jubilee festival.

The underground chambers (3.5 km of tunnels) include a central burial chamber with a 3.5-ton granite plug, galleries containing over 40,000 stone vessels, and chambers lined with blue faience tiles—Egypt's first use of this material.`,
        imageRegenerated: '/images/sites/step-pyramid-regenerated.jpg',
        imageCurrent: '/images/sites/step-pyramid-current.jpg',
        scene: 'The First Pyramid',
        visualHighlights: ['Six-tiered limestone step structure', 'Casing of white Tura limestone (originally smooth)', 'Mortuary temple complex with engaged columns', 'Imhotep\'s architectural innovation in stone', 'Heb-Sed court with shrine facades'],
        type: 'monument',
        youtubeUrl: 'https://youtu.be/UqIWl6e6JIo?si=J264kvcdy-NqnHKQ'
      },
      {
        id: 'temple-sekhmet',
        name: 'Temple of Sekhmet',
        description: 'The lioness goddess of war and healing',
        longDescription: `The Temple of Sekhmet at Memphis was simultaneously the most feared and most beloved temple in Egypt. Sekhmet ("the Powerful One") was the lioness goddess of war, plague, pestilence, and desert storms—but also of healing, because the goddess who sent disease could also cure it.

The temple contained hundreds of life-size statues of Sekhmet, seated on thrones with a lioness head and sun disk, standing in rows as silent, watchful guardians. Most date to Amenhotep III, who erected 730 statues—one for each day of the year—to pacify the goddess during a plague.

Pilgrims came seeking cures, offering cool water, bread, and beer to Sekhmet's statues, sometimes directly pouring water over them and collecting the runoff as blessed medicine.`,
        imageRegenerated: '/images/sites/temple-sekhmet-regenerated.jpg',
        imageCurrent: '/images/sites/temple-sekhmet-current.jpg',
        scene: 'The Temple of the Powerful One',
        visualHighlights: ['Rows of lioness-headed Sekhmet statues in granite', 'Healing ritual chambers with stone basins', 'Offerings of bread, beer, and cool water', 'Plague apotropaic inscriptions on walls', 'Sun disk reflecting from the statues at dawn'],
        deity: 'Sekhmet',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/sQe_iZJfXAo?si=8AKcY-8YyvnoQqFL'
      }
    ]
  },

  // 8. Saqqara - Temple of Anubis
  saqqara: {
    id: 'saqqara',
    name: 'Saqqara Necropolis',
    coordinates: [29.871, 31.216],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'anubis-temple-saqqara',
        name: 'Temple of Anubis at Saqqara',
        description: 'Sacred center of embalming and mummification',
        longDescription: `The Temple of Anubis at Saqqara stands near the Step Pyramid of Djoser, dedicated to the jackal god of embalming, mummification, and the afterlife. This temple served as the primary center for the cult of Anubis, who protected tombs and guided souls through the underworld.

The temple features a long processional causeway lined with jackal statues, their bodies carved from black granite to symbolize the fertile soil of the Nile and the color of mummified flesh. Underground catacombs contain thousands of mummified dogs and jackals—ancient Egyptians offered these animal mummies to Anubis, believing they would carry their prayers to the god.

Within the sanctuary, priests wearing jackal-headed masks performed the Opening of the Mouth ceremony, using ritual adzes and other instruments to "open" the senses of the deceased.`,
        imageRegenerated: '/images/sites/anubis-temple-saqqara-regenerated.jpg',
        imageCurrent: '/images/sites/anubis-temple-saqqara-current.jpg',
        scene: 'The House of the Jackal God',
        visualHighlights: ['Jackal statues lining the limestone causeway', 'Underground dog mummy galleries with stacked burials', 'Priests in jackal masks performing embalming rituals', 'Embalming tables with natron salts and linen', 'Torchlit sanctuary with gold-inlaid Anubis statue'],
        deity: 'Anubis',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/hQi9urf9ry8?si=A66_ioAw_cGG5rQH'
      }
    ]
  },

  // 9-10. Heliopolis - City of the Sun
  heliopolis: {
    id: 'heliopolis',
    name: 'Heliopolis',
    coordinates: [30.129, 31.29],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'temple-ra',
        name: 'Temple of Ra at Heliopolis',
        description: 'The sun god\'s sacred precinct',
        longDescription: `Heliopolis (Egyptian "Iunu," meaning "City of Pillars") was the theological center of ancient Egypt, where the Heliopolitan Creation myth placed the first sunrise on the primordial mound. Here, the sun god Ra was worshipped as the creator of the universe, emerging from the chaos of Nun each morning.

The temple complex featured multiple obelisks representing petrified rays of sunlight—the most famous being the Obelisk of Senusret I (c. 1950 BCE), which still stands today at 20.7 meters tall. The temple's open-air design allowed the sun's rays to reach every corner, with no roof blocking the light.

The temple's school, the "Per Ankh" (House of Life), trained priests who served throughout Egypt, spreading Heliopolitan theology.`,
        imageRegenerated: '/images/sites/temple-ra-regenerated.jpg',
        imageCurrent: '/images/sites/temple-ra-current.jpg',
        scene: 'The City of the Sun',
        visualHighlights: ['Multiple obelisks marking the sanctuary', 'Open-air sun altar with priests in white linen', 'Priests reciting the Litany of Ra at dawn', 'Solar barque chapel for the sun god\'s journey', 'Sacred Benben stone—the cult\'s oldest meteorite'],
        deity: 'Ra',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/fmY181wyY_k?si=VTbP-m-6nO7vZ50A'
      },
      {
        id: 'temple-atum',
        name: 'Temple of Atum',
        description: 'Creator god of the Heliopolitan Ennead',
        longDescription: `Adjacent to Ra's sanctuary stood the Temple of Atum, dedicated to the evening sun—the solar god at sunset, ready to journey through the underworld. Atum was the creator god who emerged from the primordial waters of chaos, creating himself before creating the first divine couple.

Atum was depicted as a complete man wearing the double crown of Upper and Lower Egypt, reflecting his role as the "Lord of Both Lands." His temple contained the Benben Stone—a sacred meteorite shaped like a miniature obelisk or pyramidion—which was the oldest cult object in Heliopolis.

The temple's walls showed Atum creating the world through masturbation (a uniquely Heliopolitan myth), spitting out Shu and Tefnut. Alexander the Great visited the temple after conquering Egypt in 332 BCE.`,
        imageRegenerated: '/images/sites/temple-atum-regenerated.jpg',
        imageCurrent: '/images/sites/temple-atum-current.jpg',
        scene: 'The Evening Sun\'s Sanctuary',
        visualHighlights: ['Atum statue with double crown of Egypt', 'Benben stone shrine in the inner sanctum', 'Ennead relief showing the nine creator gods', 'Evening solar barque shrine for night journey', 'Alexander the Great making offerings to Atum'],
        deity: 'Atum',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/fp5LnXwFXIo?si=eFx2tXDipqDE9V04'
      }
    ]
  },

  // 11-16. Karnak Temple Complex (6 locations)
  karnak: {
    id: 'karnak',
    name: 'Karnak Temple',
    coordinates: [25.719, 32.657],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'karnak-hypostyle',
        name: 'Great Hypostyle Hall',
        description: 'Forest of 134 colossal painted columns',
        longDescription: `The Great Hypostyle Hall at Karnak is one of the most awe-inspiring spaces ever built, covering 5,000 square meters—large enough to fit Notre Dame Cathedral inside. The hall contains 134 massive papyrus-shaped columns arranged in 16 rows, the central 12 columns rising 24 meters (79 feet) with capitals wide enough to hold 100 standing men.

Originally covered in painted reliefs, the columns depict scenes of the pharaoh making offerings to the gods—Seti I carved the northern half, Ramesses II the southern half. The ceiling above, painted a rich blue with golden five-pointed stars, evoked the night sky, transforming the hall into a symbolic recreation of the cosmos.`,
        imageRegenerated: '/images/sites/karnak-hypostyle-regenerated.jpg',
        imageCurrent: '/images/sites/karnak-hypostyle-current.jpg',
        scene: 'The Hypostyle Hall at Karnak',
        visualHighlights: ['134 massive columns taller than 6-story building', 'Beams of sunlight through clerestory windows', 'Blue ceiling with 5-pointed golden stars', 'Incense-filled shafts of light', 'Reliefs of Seti I and Ramesses II'],
        deity: 'Amun-Ra',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/AHkpS7vbkTk?si=jb6OJix3tqeRbcvU'
      },
      {
        id: 'karnak-sacred-lake',
        name: 'Sacred Lake at Karnak',
        description: 'Ritual purification waters for priests',
        longDescription: `The Sacred Lake at Karnak is a rectangular man-made body of water measuring 80 by 120 meters (260 by 394 feet), dug between 945-712 BCE and fed by underground channels from the Nile. Its waters were used by priests for ritual washing before entering the temple—they were required to bathe four times daily (dawn, noon, sunset, midnight) and twice more for special ceremonies.

The lake's edges were lined with stone steps leading down to the water, where priests descended for their ablutions. Excavations found numerous ostraca (pottery fragments) recording the water level, showing officials monitored the lake carefully.

The perfect reflection of the temple columns and pylons in the still water created a visual metaphor for the earthly temple mirroring the heavenly temple of the gods.`,
        imageRegenerated: '/images/sites/karnak-sacred-lake-regenerated.jpg',
        imageCurrent: '/images/sites/karnak-sacred-lake-current.jpg',
        scene: 'The Waters of Purification',
        visualHighlights: ['Perfect reflection of the temple in still water', 'Temple columns mirrored in the lake', 'Ritual washing area with stone steps', 'Sacred geese and tilapia fish', 'Stone platform for the divine barque'],
        deity: 'Amun-Ra',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/oGEfWjWHhQU?si=lztjAcRO88YGLRhA'
      },
      {
        id: 'temple-khonsu',
        name: 'Temple of Khonsu',
        description: 'Sanctuary of the moon god and healer',
        longDescription: `The Temple of Khonsu at Karnak is a beautifully preserved Late New Kingdom temple (c. 1186-1069 BCE) dedicated to the moon god, son of Amun and Mut. Khonsu ("the Wanderer") was associated with healing, exorcism, and time measurement—the lunar cycle marking months and festivals.

The temple features a hypostyle hall with 8 columns carved in high relief, leading to a barque sanctuary where the moon god's divine boat was kept. The roof is decorated with astronomical scenes depicting Khonsu sailing across the night sky.

The temple was also a medical center where patients sought healing dreams through incubation—they slept in special chambers on the roof, hoping the god would visit their dreams and diagnose their illness.`,
        imageRegenerated: '/images/sites/temple-khonsu-regenerated.jpg',
        imageCurrent: '/images/sites/temple-khonsu-current.jpg',
        scene: 'The Moon God\'s Sanctuary',
        visualHighlights: ['Hypostyle hall with astronomical ceiling', 'Barque sanctuary for Khonsu\'s divine boat', 'Healing dream incubation chambers on roof', 'Oracle consultation scenes in relief', 'Lunar cycle reliefs showing moon phases'],
        deity: 'Khonsu',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/rv6zv9JsmQg?si=WWGhJajfQJcwlxD'
      },
      {
        id: 'red-chapel',
        name: 'Red Chapel of Hatshepsut',
        description: 'Alabaster barque shrine of Amun-Ra',
        longDescription: `The Red Chapel (Chapelle Rouge) was Hatshepsut's magnificent barque shrine, built of red quartzite and black diorite—the only building where Egypt's most powerful female pharaoh dared to name herself as the "son of Amun" in the sanctuary of the god himself.

The chapel's reliefs include the famous Punt Expedition scenes, showing Egyptian ships arriving in the Land of Punt, exchanging goods for myrrh, frankincense, ebony, ivory, gold, and exotic animals. The reliefs depict the Puntite ruler and his obese wife, giving scholars their only visual evidence of this legendary kingdom.

The chapel was dismantled during the Amarna Period and used as filler in later constructions, which preserved its blocks.`,
        imageRegenerated: '/images/sites/red-chapel-regenerated.jpg',
        imageCurrent: '/images/sites/red-chapel-current.jpg',
        scene: 'Hatshepsut\'s Alabaster Barque Shrine',
        visualHighlights: ['Red quartzite walls with bright Punt reliefs', 'Black diorite door frames', 'Opet Festival procession scenes in high relief', 'Hatshepsut named as "son of Amun"', 'Egyptian-Puntite contact scenes with exotic animals'],
        deity: 'Amun-Ra',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/PXt6x1Iosds?si=GMQzJse0FW-kxSKB'
      },
      {
        id: 'temple-ptah-karnak',
        name: 'Temple of Ptah at Karnak',
        description: 'Northern precinct dedicated to the creator god',
        longDescription: `The Temple of Ptah at Karnak lies in the northern precinct, surrounded by massive mudbrick walls that separate it from the main Amun complex. This small but elegant temple features a peristyle court with 12 columns inscribed by the 25th Dynasty Kushite pharaohs—the Black Pharaohs who conquered Egypt and ruled as the 25th Dynasty.

The temple was built by Thutmose III (1479-1425 BCE), expanded by the Ptolemies, and restored by the Roman emperor Tiberius. The sanctuary contains a naos (shrine) with images of Ptah, his lioness consort Sekhmet, and their son Nefertum, the divine triad of Memphis.

The Kushite pharaohs particularly honored Ptah, seeing continuity between their warrior god Apedemak and the Memphite creator deity.`,
        imageRegenerated: '/images/sites/temple-ptah-karnak-regenerated.jpg',
        imageCurrent: '/images/sites/temple-ptah-karnak-current.jpg',
        scene: 'The Creator God of Memphis',
        visualHighlights: ['Peristyle court with Kushite pharaoh reliefs', 'Naos shrine with divine triad', 'Massive mudbrick enclosure walls', 'Roman restoration inscriptions by Tiberius', 'Thutmose III foundation blocks with original paint'],
        deity: 'Ptah',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/sQe_iZJfXAo?si=NP6KH9A00CBYhtwP'
      },
      {
        id: 'mut-karnak',
        name: 'Temple of Mut',
        description: 'Sanctuary of the vulture goddess',
        longDescription: `The Temple of Mut lies south of Karnak proper, connected by an avenue of sphinxes. The precinct is surrounded by a horseshoe-shaped sacred lake shaped like the hieroglyph "shemu" (the symbol of Mut). The temple was dedicated to Mut ("Mother"), the vulture goddess, consort of Amun-Ra and mother of Khonsu, completing the Theban triad.

The temple featured 600 black granite statues of Sekhmet (Mut's lioness aspect), many now in the Cairo Museum. These seated statues, carved during the reign of Amenhotep III, show the lioness goddess with a sun disk and are inscribed with her epithet "She who Mauls"—intended to pacify the goddess's destructive power.

The precinct also included the Chapel of Osiris-Djebekh and the Punt Hall with reliefs of Hatshepsut's Punt Expedition.`,
        imageRegenerated: '/images/sites/mut-karnak-regenerated.jpg',
        imageCurrent: '/images/sites/mut-karnak-current.jpg',
        scene: 'The Vulture Goddess of Thebes',
        visualHighlights: ['600 black granite Sekhmet statues standing in rows', 'Horseshoe-shaped sacred lake', 'Punt Hall with Hatshepsut expedition reliefs', 'God\'s Wife of Amun residential palace', 'Chapel of Osiris-Djebekh with funerary reliefs'],
        deity: 'Mut',
        type: 'temple',
        youtubeUrl: 'https://youtu.be/oHqa8VlYUvw?si=l_F-TMJ1HwtbzQhq'
      }
    ]
  },

  // 17. Luxor Temple
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
        longDescription: `Luxor Temple was not a temple to a god but to the "divine ka" (royal spirit) of the pharaoh, making it unique among Egyptian temples. Built primarily by Amenhotep III (1390-1352 BCE) and Ramesses II (1279-1213 BCE), the temple was the focus of the Opet Festival, when the cult statues traveled from Karnak Temple to Luxor, a journey of 2.7 kilometers.

The festival transformed the city into a vibrant, kinetic environment. Priests carried the sacred barques of the gods on their shoulders, their surfaces adorned with gold and precious stones. Musicians filled the air with rhythmic sounds of sistra (rattles), drums, and harps, while incense created thick, aromatic clouds that diffused the light.

The king walked ahead of the barques, symbolically renewing his divine authority by reuniting with Amun in the inner sanctum.`,
        imageRegenerated: '/images/sites/luxor-temple-regenerated.jpg',
        imageCurrent: '/images/sites/luxor-temple-current.jpg',
        scene: 'The Festival of Opet Procession',
        visualHighlights: ['Golden barques carried by priests', 'Musicians with sistra, drums, and harps', 'Dense incense clouds diffusing sunlight', 'Festival crowds of pilgrims celebrating', 'Pharaoh walking ahead of the divine barques'],
        deity: 'Amun-Ra',
        type: 'temple'
      }
    ]
  },

  // 19. Temple of Thoth at Hermopolis
  hermopolis: {
    id: 'hermopolis',
    name: 'Hermopolis Magna',
    coordinates: [27.775, 30.804],
    region: 'Egypt - Middle Egypt',
    locations: [
      {
        id: 'temple-thoth',
        name: 'Temple of Thoth at Hermopolis',
        description: 'Sacred center of wisdom and writing',
        longDescription: `Hermopolis (Egyptian "Khemenu," meaning "Eight-Town") was the cult center of Thoth, the god of writing, wisdom, medicine, and magic. The city's name in Greek combined "Hermes" (the Greek equivalent of Thoth) with "polis" (city).

The temple featured a massive hypostyle hall with columns decorated with reliefs of Thoth as both ibis—his sacred bird, associated with wisdom and the moon—and baboon (the cynocephalus ape), shown alternately holding the wedjat eye and the scribe's palette.

The temple library contained thousands of papyrus scrolls on magic, medicine, astronomy, and sacred rituals. The site's famous "Baboon Gallery" contains millions of mummified ibises and baboons offered to Thoth.`,
        imageRegenerated: '/images/sites/hermopolis-thoth-regenerated.jpg',
        imageCurrent: '/images/sites/hermopolis-thoth-current.jpg',
        scene: 'The House of the Ibis God',
        visualHighlights: ['Ibis-headed Thoth statues with scribe\'s palette', 'Baboon reliefs on column capitals', 'Temple library with papyrus scroll archives', 'Imhotep healing chapel for medical consultations', 'Ogdoad creation reliefs with eight primordial gods'],
        deity: 'Thoth',
        type: 'temple'
      }
    ]
  },

  // 20. Temple of Neith at Sais
  sais: {
    id: 'sais',
    name: 'Sais',
    coordinates: [30.964, 30.772],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'temple-neith',
        name: 'Temple of Neith',
        description: 'Sanctuary of the great mother goddess',
        longDescription: `Sais was the cult center of Neith, the great mother goddess of weaving, wisdom, warfare, and the cosmos. Her temple was one of the largest in the Delta, admired by Greek historians including Herodotus and Plato (who was said to have visited).

The temple featured a massive enclosure wall with fortified gates, a sacred lake where nightly ceremonies were held, and the "Tomb of Osiris"—a symbolic burial mound that attracted pilgrims from across Egypt.

Neith was identified with Athena by the Greeks, and Sais attracted Greek visitors seeking wisdom. The temple's famous inscription "I am all that has been, and is, and shall be, and no mortal has ever lifted my veil" inspired later Neoplatonic philosophy.`,
        imageRegenerated: '/images/sites/sais-regenerated.jpg',
        imageCurrent: '/images/sites/sais-current.jpg',
        scene: 'The Veiled Goddess of Sais',
        visualHighlights: ['Massive temple enclosure walls with fortified gates', 'Sacred lake with nightly torchlit ceremonies', 'Neith cult statue covered in her woven veil', 'Osiris tomb mound with pilgrim offerings', 'Greek philosophers visiting the library'],
        deity: 'Neith',
        type: 'temple'
      }
    ]
  },

  // 21. Temple of Horus at Behbeit
  behbeit: {
    id: 'behbeit',
    name: 'Behbeit el-Hagar',
    coordinates: [31.029, 31.29],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'temple-horus-behbeit',
        name: 'Temple of Horus',
        description: 'Falcon god sanctuary in the Delta',
        longDescription: `The Temple of Horus at Behbeit el-Hagar was the Delta counterpart to Edfu, built in the Late Period (380-343 BCE) but never completed. The site is now a field of scattered granite blocks, weighing up to 20 tons each, but the reliefs that remain are among the finest from Ptolemaic Egypt.

The temple was dedicated to Horus as the heir of Osiris, reforging the fragmented mythology of the Delta after the Assyrian invasions. The surviving reliefs show the king offering to Horus and Hathor, and the famous "Horus on the Crocodiles" healing stelae—used for water poured over them, then drunk by patients seeking cures for poisoning.

This temple continued the tradition of the "Horus of Behbeit" as a protector of Egypt, whose cult persisted until the 4th century CE.`,
        imageRegenerated: '/images/sites/behbeit-regenerated.jpg',
        imageCurrent: '/images/sites/behbeit-current.jpg',
        scene: 'The Granite Fragments of Horus',
        visualHighlights: ['Massive granite blocks with fine Late Period reliefs', 'Horus falcon with spread wings', 'Healing "Horus on the Crocodiles" stelae', 'King offering scenes to Horus and Hathor', 'Unfinished column drums scattered across the site'],
        deity: 'Horus',
        type: 'temple'
      }
    ]
  },

  // 22-23. Dendera Temple Complex
  dendera: {
    id: 'dendera',
    name: 'Dendera Temple',
    coordinates: [26.142, 32.67],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'temple-hathor',
        name: 'Temple of Hathor',
        description: 'The Golden House with astronomical ceilings',
        longDescription: `The Temple of Hathor at Dendera is one of the best-preserved temples in Egypt, dating primarily to the Ptolemaic period (305-30 BCE). The temple's name "Iunet" or "Tantere" gave modern "Dendera," and its Hathor-headed columns are among the most recognizable images of Egyptian architecture.

The temple's hypostyle hall features 24 columns with Hathor's face carved on each capital, originally painted with vibrant colors creating a forest of the goddess. The ceiling of the outer hypostyle hall depicts the famous Dendera Zodiac, one of the only complete celestial maps from ancient Egypt.

The sanctuary's walls contain the "Lamp Relief," often misinterpreted as showing an electric light bulb but actually depicting a sacred snake emerging from a lotus flower, symbolizing creation.`,
        imageRegenerated: '/images/sites/dendera-regenerated.jpg',
        imageCurrent: '/images/sites/dendera-current.jpg',
        scene: 'The Golden House of Hathor',
        visualHighlights: ['Hathor-headed columns with sistrum crowns', 'Painted astronomical ceiling (Dendera Zodiac)', 'Crypts with hidden treasure reliefs', 'Nilometer for measuring Nile flood levels', 'Lamp relief showing snake creation'],
        deity: 'Hathor',
        type: 'temple'
      },
      {
        id: 'dendera-sanatorium',
        name: 'Sanatorium of Dendera',
        description: 'Healing center dedicated to Hathor',
        longDescription: `The Sanatorium of Dendera was a unique medical center where pilgrims sought cures from Hathor through incubation dreams. Patients slept in specially designed chambers within the temple precinct, hoping the goddess would visit their dreams and diagnose their illness.

The sanatorium featured bath basins where water was poured over statues inscribed with healing texts, then collected by patients for drinking or washing. A "hydration" chapel held naophorous statues where priests recited prayers while pouring water over the sacred effigies, charging the water with divine power.

The practice of incubation healing continued here until the 4th century CE, even as Christianity spread through Egypt.`,
        imageRegenerated: '/images/sites/dendera-healing-regenerated.jpg',
        imageCurrent: '/images/sites/dendera-healing-current.jpg',
        scene: 'The Temple as Healing Center',
        visualHighlights: ['Incubation sleep platforms with headrests', 'Water basins for collecting blessed liquid', 'Healing statue niche with naophorous statues', 'Priest-doctors with papyrus prescriptions', 'Thoth and Hathor double sanctuary'],
        deity: 'Hathor',
        type: 'temple'
      }
    ]
  },

  // 24. Temple of Montu at Medamud
  medamud: {
    id: 'medamud',
    name: 'Medamud',
    coordinates: [25.75, 32.68],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'temple-montu',
        name: 'Temple of Montu',
        description: 'Falcon war god sanctuary',
        longDescription: `Medamud, just 5 kilometers northeast of Karnak, was dedicated to Montu, the falcon-headed war god. Montu ("Nomad") was the patron god of Thebes before Amun's rise to prominence, and his cult remained strong among military officials.

The temple dates to the Middle Kingdom (c. 2000 BCE) but was rebuilt in the Late and Ptolemaic periods. Unlike the open temples of other gods, Medamud's sanctuary was designed with a "Burial Chamber" containing unique reliefs of Montu as a bull—his fierce animal form representing the raw power of rampage.

The site's hypostyle hall features columns painted in vivid colors—a rare survival of original paint on temple columns. Medamud was connected to Karnak by an avenue of sphinxes.`,
        imageRegenerated: '/images/sites/medamud-regenerated.jpg',
        imageCurrent: '/images/sites/medamud-current.jpg',
        scene: 'The Falcon War God\'s Sanctuary',
        visualHighlights: ['Montu as a bull in burial chamber reliefs', 'Painted hypostyle column capitals with original colors', 'Birth House scenes with nursing goddesses', 'Sphinx avenue approaching from Karnak', 'Burial chamber with star-decorated ceiling'],
        deity: 'Montu',
        type: 'temple'
      }
    ]
  },

  // 25-26. Abu Simbel
  abuSimbel: {
    id: 'abu-simbel',
    name: 'Abu Simbel',
    coordinates: [22.3365, 31.6255],
    region: 'Egypt - Far South',
    locations: [
      {
        id: 'abu-simbel-temple',
        name: 'Great Temple of Ramses II',
        description: 'Solar alignment illuminating the sanctuary',
        longDescription: `The Great Temple of Abu Simbel was carved from a sandstone cliff during the reign of Ramses II (c. 1264 BCE), its four colossal seated statues of the pharaoh (each 20 meters tall) dominating the Nile facade.

Twice each year—on February 22 and October 22—the rising sun penetrates the temple's 60-meter-long entrance corridor, sending a narrow beam of light deep into the sanctuary. The beam illuminates the statues of Ra-Horakhty, Ramses II, and Amun-Ra, while Ptah remains in shadow. These dates are believed to correspond to Ramses's coronation and his birthday.

When the Aswan High Dam threatened to submerge the site in the 1960s, the entire temple was cut into 1,036 blocks and reassembled 65 meters higher, preserving the solar alignment.`,
        imageRegenerated: '/images/sites/abu-simbel-regenerated.jpg',
        imageCurrent: '/images/sites/abu-simbel-current.jpg',
        scene: 'The Miracle of the Sun',
        visualHighlights: ['Sun beam penetrating the 60-meter temple depth', 'Activating pigments and gold of statues', 'Illuminated statues of Ramses II and gods', 'Ptah remaining in deliberate shadow', 'Colossal facade statues each 20 meters tall'],
        deity: 'Ra',
        type: 'temple'
      },
      {
        id: 'nefertari-temple',
        name: 'Temple of Hathor at Abu Simbel',
        description: 'Dedicated to Ramses II\'s beloved queen',
        longDescription: `The Small Temple of Abu Simbel stands 100 meters northeast of the Great Temple, dedicated to Hathor and Queen Nefertari, Ramses II's favorite wife. Six colossal statues adorn the facade—four of Ramses and two of Nefertari, all 10 meters tall—the only temple in Egypt where the queen's statues equal the pharaoh's in size.

The interior features Hathor-headed columns with the goddess's cow ears, a hypostyle hall with scenes of Ramses making offerings to Hathor, and a sanctuary with a statue of the goddess emerging from the cliff.

Nefertari is shown in reliefs without a separate divine consort, treated as a goddess in her own right, wearing the vulture headdress of a queen and the cow-horn crown of Hathor.`,
        imageRegenerated: '/images/sites/nefertari-temple-regenerated.jpg',
        imageCurrent: '/images/sites/nefertari-temple-current.jpg',
        scene: 'The Queen\'s Sanctuary',
        visualHighlights: ['Six colossal statues with Nefertari equal to Ramses', 'Hathor-headed columns with cow ears', 'Queen Nefertari as goddess in reliefs', 'Healing chapel for Hathor\'s devotees', 'Sun alignment on the sanctuary'],
        deity: 'Hathor',
        type: 'temple'
      }
    ]
  },

  // 27. Temple of Horus at Edfu
  edfu: {
    id: 'edfu',
    name: 'Temple of Edfu',
    coordinates: [24.9788, 32.8787],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'temple-horus',
        name: 'Temple of Horus',
        description: 'The falcon god of kingship and sky',
        longDescription: `The Temple of Horus at Edfu is the best-preserved temple in Egypt, buried under 12 meters of desert sand until its discovery in the 1860s. The temple was built over 180 years (237-57 BCE) during the Ptolemaic period.

The 36-meter-high pylon features reliefs of Ptolemy XII smiting his enemies before Horus. The Court of Offerings has 32 columns surrounding a central altar where the sacred barque rested during festivals. The Hypostyle Hall has 18 columns with floral capitals, followed by the Hall of Offerings and the Sanctuary of Horus.

The temple walls preserve the "Dramatic Text of Edfu" (temple foundation description) and the "Triumph of Horus" (the falcon god's defeat of Set). The "Construction Texts" describe the temple's orientation, measurements, and rituals—a complete architectural manual.`,
        imageRegenerated: '/images/sites/edfu-regenerated.jpg',
        imageCurrent: '/images/sites/edfu-current.jpg',
        scene: 'The Falcon God\'s House',
        visualHighlights: ['Massive falcon statues flanking the pylon', 'Dramatic reliefs of Horus spearing Seth (hippopotamus)', 'Towering 36-meter pylon with victory reliefs', 'Solar ritual spaces on the roof', 'Nilometer for measuring annual flood'],
        deity: 'Horus',
        type: 'temple'
      }
    ]
  },

  // 28. Temple of Kom Ombo
  komOmbo: {
    id: 'kom-ombo',
    name: 'Temple of Kom Ombo',
    coordinates: [24.451, 32.928],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'temple-sobek',
        name: 'Temple of Kom Ombo',
        description: 'The double temple of Sobek and Horus',
        longDescription: `The Temple of Kom Ombo is unique in Egyptian architecture—a double temple perfectly symmetrical along its main axis. The southern half is dedicated to Sobek, the crocodile god of the Nile's fertility and danger; the northern half to Horus the Elder (Haroeris), the falcon-headed sky god.

Built during the Ptolemaic period (180-47 BCE), the temple features twin sanctuaries, twin halls, and twin entrances. The walls preserve reliefs of surgical instruments—forceps, scalpels, saws, and dental tools—suggesting the temple was also a medical center associated with crocodile cult healing.

The temple complex includes a nilometer, a birthing house (mammisi), and a chapel containing crocodile mummies displayed in the adjacent Crocodile Museum.`,
        imageRegenerated: '/images/sites/kom-ombo-regenerated.jpg',
        imageCurrent: '/images/sites/kom-ombo-current.jpg',
        scene: 'The Symmetrical Sanctuary',
        visualHighlights: ['Symmetrical dual temple with mirrored architecture', 'Crocodile mummies in cult chapel', 'Medical instruments relief showing surgical tools', 'Twin sanctuaries sharing a common wall', 'Nilometer measuring the Nile flood'],
        deity: 'Sobek',
        type: 'temple'
      }
    ]
  },

  // 29. Temple of Philae (Isis)
  philae: {
    id: 'philae',
    name: 'Temple of Philae',
    coordinates: [24.025, 32.884],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'temple-isis',
        name: 'Temple of Isis',
        description: 'The last sanctuary of ancient Egyptian religion',
        longDescription: `The Temple of Isis at Philae was one of the last places where ancient Egyptian religion survived into the Roman era, finally closing in the 6th century CE by order of Emperor Justinian. The temple glows at sunrise and sunset, reflecting in the Nile—symbolizing Isis as both a nurturing mother goddess and a cosmic force of magic and healing.

The temple was dismantled and moved to the nearby island of Agilkia in the 1960s, reassembled block by block to save it from the rising waters of the Aswan High Dam. Its columns are among the most elegant in Egypt, with scenes of the goddess nursing Horus, a theme adopted by Christian iconography of Mary and Jesus.

The complex includes the Temple of Hathor (with columns carved with Bes), the Kiosk of Trajan, and the Gate of Hadrian. The last known hieroglyphic inscription, dated to 394 CE, was carved at Philae.`,
        imageRegenerated: '/images/sites/philae-isis-regenerated.jpg',
        imageCurrent: '/images/sites/philae-isis-current.jpg',
        scene: 'The Island of Isis',
        visualHighlights: ['Island temple setting with water reflections', 'Sunrise and sunset turning the sandstone pink', 'Kiosk of Trajan with 14 columns', 'Last hieroglyphic inscription from 394 CE', 'Nursing scene of Isis and Horus'],
        deity: 'Isis',
        type: 'temple'
      }
    ]
  },
// 30. Abydos - Temple of Seti I
abydos: {
  id: 'abydos',
  name: 'Abydos',
  coordinates: [26.185, 31.919],
  region: 'Egypt - Upper Egypt',
  locations: [
    {
      id: 'temple-seti',
      name: 'Temple of Seti I',
      description: 'Famous for the Abydos King List of 76 pharaohs',
      longDescription: `The Temple of Seti I (1294-1279 BCE) is Abydos' crown jewel, renowned for its stunning, well-preserved reliefs and its inclusion of the Abydos King List—a chronological wall recording 76 pharaohs from Menes (c. 3100 BCE) through the early dynasties to Seti I himself, omitting the Amarna Period rulers. This king list is essential for reconstructing Egyptian chronology.

Behind the temple lies the Osireion, a profound subterranean monument intended as a symbolic tomb for Osiris, featuring massive granite pillars and a central platform surrounded by water—symbolizing the primordial mound emerging from chaos.`,
      imageRegenerated: '/images/sites/temple-seti-regenerated.jpg',
      imageCurrent: '/images/sites/temple-seti-current.jpg',
      scene: 'The Cult of Osiris',
      visualHighlights: ['Deeply carved reliefs with fine detail', 'Abydos King List of 76 pharaohs', 'Osireion underground water temple', 'Pilgrim offering stelae in sanctuary', 'Osiris cult statues in multiple chapels'],
      deity: 'Osiris',
      type: 'temple',
      youtubeUrl: 'https://youtu.be/tGXQRGTFduM?si=HcoAR6zedu39ZGHp'
    },
    {
      id: 'osireion',
      name: 'Osireion',
      description: 'Subterranean symbolic tomb of Osiris',
      longDescription: `The Osireion is a unique, profound subterranean monument located directly behind the Temple of Seti I, intended as a symbolic tomb for Osiris. Built by Seti I and completed by his son Ramesses II, this enigmatic structure features massive granite pillars and a central platform surrounded by water channels—representing the primordial mound of creation emerging from the endless sea of chaos.

Unlike traditional Egyptian temples, the Osireion was designed as a cenotaph (false tomb) to connect the pharaoh directly with Osiris, god of the afterlife. The underground chamber's austere, megalithic architecture resembles a valley temple of the Old Kingdom pyramid complexes, intentionally archaic in style. Early archaeologists found that the structure had been deliberately flooded, creating an eerie reflection of the granite supports in the dark water.`,
      imageRegenerated: '/images/sites/osireion-regenerated.jpg',
      imageCurrent: '/images/sites/osireion-current.jpg',
      scene: 'The Primordial Mound',
      visualHighlights: ['Massive granite pillars in subterranean chamber', 'Water channels surrounding central platform', 'Archaic valley-temple style architecture', 'Eerie reflections in dark water', 'Central sarcophagus-shaped platform'],
      deity: 'Osiris',
      type: 'tomb',
      youtubeUrl: 'https://youtu.be/dKW7c8yDLnM?si=SREGSCQshgglgcXj'
    },
    {
      id: 'umm-el-qab',
      name: 'Umm el-Qa\'ab',
      description: 'Royal cemetery of Egypt\'s first pharaohs',
      longDescription: `Umm el-Qa'ab, meaning "Mother of Pots" in Arabic, is the sacred royal cemetery where predynastic and early dynastic kings of the 1st and 2nd dynasties were buried. This desolate desert site contains the tombs of Egypt's first pharaohs, including Narmer (who unified Upper and Lower Egypt), Aha, Djer, Den, and Qa'a—the earliest known royal burials in Egyptian history.

The name "Mother of Pots" derives from the thousands of broken offering jars left by centuries of pilgrims who came to venerate these earliest kings. The tombs are modest mudbrick chambers compared to later pyramids, but their importance is immense: inscriptions from Umm el-Qa'ab represent some of the earliest hieroglyphic writing. Later Egyptians believed this was the actual burial place of Osiris himself, making Abydos the most holy site in Egypt for thousands of years.`,
      imageRegenerated: '/images/sites/umm-el-qab-regenerated.jpg',
      imageCurrent: '/images/sites/umm-el-qab-current.jpg',
      scene: 'The First Pharaohs',
      visualHighlights: ['Royal tombs of Narmer and early dynastic kings', 'Thousands of broken offering jars', 'Early hieroglyphic inscriptions', 'Mudbrick chamber architecture', 'Pilgrim devotional landscape'],
      deity: 'Osiris',
      type: 'tomb',
      youtubeUrl: 'https://youtu.be/H5n9mICwA5Q?si=mSgNl1RceMF--DL9'
    },
    {
      id: 'temple-ramesses',
      name: 'Temple of Ramesses II',
      description: 'Smaller temple of the great pharaoh',
      longDescription: `The Temple of Ramesses II is a smaller, partially destroyed temple located near the temple of his father, Seti I. While less intricately decorated and more ruined than the adjacent monument, this temple still preserves striking reliefs showing Ramesses II making offerings to Osiris, Isis, and Horus.

The first hypostyle hall features pillars with engaged Osiride statues of Ramesses—a signature motif of his reign. Though many blocks were re-used in later periods, the temple's sanctuary retains a triad of chapels for Osiris, Isis, and Horus. Recent excavations have uncovered evidence of a rare symbolic "Tomb of Osiris" burial chamber beneath the temple floor, connecting Ramesses II to the same Osirian mysteries his father honored.`,
      imageRegenerated: '/images/sites/temple-ramesses-regenerated.jpg',
      imageCurrent: '/images/sites/temple-ramesses-current.jpg',
      scene: 'A Son Completing His Father’s Work',
      visualHighlights: ['Osiride pillars of Ramesses II', 'Reliefs of Ramesses before Osiris', 'Triple sanctuary chapels', 'Symbolic Tomb of Osiris beneath', 'Lesser scale but elegant proportions'],
      deity: 'Osiris',
      type: 'temple',
      youtubeUrl: 'https://youtu.be/Y7PJdGe2800?si=tYnyKh6uxLcZkQ1F'
    }
  ]
},

  // 31-35. Valley of the Kings (5 locations)
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
        longDescription: `The Valley of the Kings served as the royal necropolis for Egypt's New Kingdom pharaohs (c. 1539-1075 BCE), containing 63 tombs cut deep into the limestone hills of Thebes. The valley's name in ancient Egyptian was "The Great and Majestic Necropolis of the Millions of Years of the Pharaoh."

The tombs are not decorated on the outside but contain elaborate burial chambers carved into the rock. The walls are covered with scenes from the Book of the Dead, the Book of Gates, and the Amduat (what is in the underworld).

Modern techniques (ground-penetrating radar, infrared imaging) continue to identify potential new tombs. Recent scans in 2022 suggested possible empty spaces near Tutankhamun's tomb.`,
        imageRegenerated: '/images/sites/valley-kings-regenerated.jpg',
        imageCurrent: '/images/sites/valley-kings-current.jpg',
        scene: 'The Royal Necropolis',
        visualHighlights: ['Subterranean tombs carved into limestone hills', 'Flickering torchlight illuminating golden goods', 'Gold burial masks and amulets', 'Solemn ceremonial atmosphere', 'Books of the Dead covering the walls'],
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/hOSWxNqnPeU?si=IwTOkz3lc5kjs9i4'
      },
      {
        id: 'tutankhamun-tomb',
        name: 'Tomb of Tutankhamun (KV62)',
        description: 'The most intact royal tomb ever found',
        longDescription: `Discovered by Howard Carter on November 4, 1922, the tomb of Tutankhamun is the only royal tomb in the valley found largely intact. The tomb contained over 5,000 objects, including the famous golden death mask, sarcophagus of solid gold, nested coffins, furniture, chariots, jewelry, weapons, and food.

The four small rooms (antechamber, annex, burial chamber, treasury) were packed with objects stacked to the ceiling. The burial chamber's gold-covered wooden shrine took Carter ten weeks to dismantle.

The boy king ruled for only nine years (c. 1332-1323 BCE), dying around age 18, apparently from a combination of malaria and a broken leg that became infected.`,
        imageRegenerated: '/images/sites/tutankhamun-tomb-regenerated.jpg',
        imageCurrent: '/images/sites/tutankhamun-tomb-current.jpg',
        scene: 'The Boy King\'s Treasure',
        visualHighlights: ['Golden death mask with lapis lazuli', 'Canopic chest with alabaster jars', 'Painted burial chamber with Tutankhamun', 'Treasure stacked to the ceiling', 'Solid gold sarcophagus weighing 110 kilograms'],
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/5d8SlwGDXXE?si=UsLjDOoktkIZJCV9'
      },
      {
        id: 'nefertari-tomb',
        name: 'Tomb of Nefertari (QV66)',
        description: 'The Prism Chamber of vivid paintings',
        longDescription: `The Tomb of Nefertari, wife of Ramesses II, is considered the finest tomb in the Valley of the Queens (QV), with vividly painted walls depicting the queen's journey through the underworld. Every surface is covered with pristine colored reliefs, their pigments retaining full saturation after 3,200 years.

The "Prism Chamber" effect comes from polished white limestone walls covered in paint without any bare stone visible. Gold details shimmer when light hits them, while the ceiling is painted with a dark star-filled sky.

The tomb was closed for extensive restoration from 1986-1992, removing salt, fungi, and bacteria, and now allows limited visitors with special permission.`,
        imageRegenerated: '/images/sites/nefertari-tomb-regenerated.jpg',
        imageCurrent: '/images/sites/nefertari-tomb-current.jpg',
        scene: 'The Queen\'s Immortal Art',
        visualHighlights: ['Pristine colored paintings covering all walls', 'Gold details shimmering under light', 'Star-filled celestial ceiling', 'Queen in transparent linen robes', 'Immersive journey through the underworld'],
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/1_3IXJLfH2I?si=HPU0ts9EVz_3ufgw'
      },
      {
        id: 'seti-tomb',
        name: 'Tomb of Seti I (KV17)',
        description: 'The longest and most decorated tomb in the valley',
        longDescription: `The Tomb of Seti I (KV17) is the longest and most elaborately decorated...`,
        imageRegenerated: '/images/sites/seti-tomb-regenerated.jpg',
        imageCurrent: '/images/sites/seti-tomb-current.jpg',
        scene: 'The Longest Corridor to Eternity',
        visualHighlights: ['137-meter descending corridor', 'Raised relief carving', 'Alabaster translucent sarcophagus', 'Unfinished chambers', 'Astronomical ceiling'],
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/z_OF4tWF8-c?si=a1w3fz1y23OQB1ii'
      },
      {
        id: 'ramses-tomb',
        name: 'Tomb of Ramses VI (KV9)',
        description: 'Tomb with extensive astronomical scenes',
        longDescription: `The Tomb of Ramses VI (KV9) is famous for its well-preserved astronomical ceiling, depicting the Book of the Day and Book of the Night. The tomb was originally started for Ramses V but finished for Ramses VI, and both pharaohs may have been buried here.

The ceiling's double image of Nut (sky goddess) swallowing and giving birth to the sun disk represents the solar cycle. The tomb's decorations include scenes of the sun god's journey through the underworld in his solar barque.

The tomb was used as a shelter for Christian hermits in late antiquity, who left Coptic graffiti on the walls. It has been open to visitors since Roman times, with Greek and Latin inscriptions recording early tourists.`,
        imageRegenerated: '/images/sites/ramses-tomb-regenerated.jpg',
        imageCurrent: '/images/sites/ramses-tomb-current.jpg',
        scene: 'The Celestial Ceiling',
        visualHighlights: ['Double image of Nut swallowing/ birthing the sun', 'Solar barque scenes of sun god\'s journey', 'Book of Night and Book of Day texts', 'Christian Coptic graffiti', 'Greek and Roman tourist inscriptions'],
        type: 'tomb',
        youtubeUrl: 'https://youtu.be/RhSZcxxooBI?si=ThefQok2d9umI0Dv'
      }
    ]
  }
}

// ========== ADDITIONAL EGYPTIAN SITES (36-40) ==========
export const additionalEgyptianSites: Record<string, Site> = {
  // 36. Faiyum Oasis - Agricultural Heartland
  fayum: {
    id: 'fayum',
    name: 'Faiyum Oasis',
    coordinates: [29.3084, 30.8428],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'malachite-gardens',
        name: 'Faiyum Oasis',
        description: 'Lush agricultural heartland of ancient Egypt',
        longDescription: `The Faiyum Oasis has been inhabited since at least the Neolithic period (c. 5000 BCE), with the ancient Egyptians developing a sophisticated irrigation system to control water from the Nile through the Bahr Yussef canal—a waterway that still functions today. The oasis became the agricultural heartland of Egypt during the Middle Kingdom (c. 2000 BCE), when pharaohs of the 12th Dynasty built pyramids and temples here, including the famous Labyrinth (described by Herodotus as "beyond description") that contained the funerary complex of Amenemhat III.

The "Malachite Gardens" refers to the intense green of the cultivated fields—irrigated by a network of canals—set against the golden-yellow desert cliffs. The oasis produces dates, figs, grapes, olives, and roses (used for perfumes). The area was also a center for fishing (Lake Qarun, once called Lake Moeris, teeming with tilapia) and hunting (waterfowl, crocodiles, hippos), as shown in tomb paintings of officials who served here.

Today, the oasis is known for its waterwheels (over 200 wooden wheels, some dating to the Ptolemaic period), which raise water from canals to higher fields—a continuous technology spanning over 2,000 years. The site also contains the Hawara Pyramid (Amenemhat III) and the necropolis of Lahun (Senusret II), with the famous "Lahun Papyri" documenting daily life.`,
        imageRegenerated: '/images/sites/malachite-gardens-regenerated.jpg',
        imageCurrent: '/images/sites/malachite-gardens-current.jpg',
        scene: 'The Oasis Gardens',
        visualHighlights: ['Vibrant green cultivated fields against golden desert cliffs', 'Bahr Yussef canal distributing Nile water', 'Wooden waterwheels (200+ still in use)', 'Lake Qarun fishing and hunting scenes in tombs', 'Agricultural abundance (dates, figs, olives, roses)'],
        type: 'city',
        youtubeUrl: 'https://youtu.be/mGPIgnVeutk?si=ldesXFSJUJ1pxOOk'
      }
    ]
  },

  // 37. Amarna - Capital of the Heretic King
  amarna: {
    id: 'amarna',
    name: 'Amarna (Akhetaten)',
    coordinates: [27.645, 30.904],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'crimson-amarna',
        name: 'City of Akhetaten',
        description: 'The experimental capital of Akhenaten\'s sun worship',
        longDescription: `Amarna (modern Tell el-Amarna) was founded by Pharaoh Akhenaten (Amenhotep IV) in 1346 BCE as his new capital, dedicated to the sun disk Aten. The city was built on virgin land in middle Egypt, deliberately avoiding the old gods of Thebes and Memphis. Akhenaten's religious revolution suppressed the worship of Amun and other traditional gods, promoting Aten as the sole deity—one of the earliest attempts at monotheism in history.

The city was called Akhetaten ("Horizon of the Aten"), and its boundaries were marked by 14 boundary stelae carved into the cliffs, recording Akhenaten's founding declaration. The city was abandoned shortly after Akhenaten's death (c. 1336 BCE), when his son Tutankhamun restored the old gods and moved the capital back to Thebes. This short occupation (only 15 years) preserved the city as a time capsule of 14th-century BCE life.

Excavations have revealed residential neighborhoods (Workmen's Village with planned housing, North Suburb for elites), palaces (North Palace, Great Palace with the "Window of Appearance" where Akhenaten and Nefertiti appeared to reward officials), temples (Great Temple of Aten, the most open-air temple in Egypt, with thousands of offering tables), and rock-cut tombs of nobles. The site is the only ancient Egyptian city preserved as a planned settlement, allowing archaeologists to study daily life, social organization, and the distinctive Amarna art style with its elongated figures, intimate family scenes (Akhenaten playing with his daughters, kissing Nefertiti), and realistic depictions of royal life.`,
        imageRegenerated: '/images/sites/crimson-amarna-regenerated.jpg',
        imageCurrent: '/images/sites/crimson-amarna-current.jpg',
        scene: 'The Sun City of Akhenaten',
        visualHighlights: ['Open-air Aten temples with thousands of offering tables', 'Sun altars with no roofs or enclosed spaces (direct sunlight worship)', 'Royal tomb with reliefs of Akhenaten mourning his daughter Meketaten', 'Amarna art style with elongated figures and realistic family scenes', 'Boundary stelae with founding declaration in hieroglyphs'],
        deity: 'Aten',
        type: 'city',
        youtubeUrl: 'https://youtu.be/UZhHbrtVZnY?si=tJno5WiJ-rpWxxkP'
      }
    ]
  },

  // 38. Tanis - The Silver Pharaoh's Treasure
  tanis: {
    id: 'tanis',
    name: 'Tanis (San el-Hagar)',
    coordinates: [30.976, 31.878],
    region: 'Egypt - Delta',
    locations: [
      {
        id: 'tanis-royal-tombs',
        name: 'Royal Necropolis of Tanis',
        description: 'Treasure-filled tombs of the 21st-22nd Dynasty kings',
        longDescription: `Tanis (Biblical Zoan) was the capital of Egypt during the 21st-22nd Dynasties (c. 1075-712 BCE), ruling during a period of division when the High Priests of Amun controlled Upper Egypt from Thebes. The site was completely overlooked by archaeologists until 1939-1944, when French archaeologist Pierre Montet discovered intact royal tombs—the only pharaonic burials besides Tutankhamun found with their treasures intact.

The tombs of Psusennes I ('The Silver Pharaoh'), Amenemope, Shoshenq II, and others contained a silver coffin (the only silver royal coffin ever found, weighing 400 kg), a gold funerary mask (second only to Tutankhamun's in beauty), gold and lapis lazuli jewelry, hundreds of ushabti figures, and canopic jars of alabaster. The treasure was moved to Cairo for safekeeping just before WWII and then overlooked for decades due to the war's chaos and the fame of Tutankhamun's discovery.

The temple precinct includes the Great Temple of Amun (with reused Old Kingdom blocks, some from Giza?), walls inscribed by Ramesses II (who built extensively here), and a sacred lake. Tanis's remote location—now surrounded by agricultural fields, not heavily touristed—preserved its mystery, including persistent pop-culture myths connecting it to Raiders of the Lost Ark (though the Ark never was here, the site was used as a filming location for the movie's map room).`,
        imageRegenerated: '/images/sites/tanis-royal-tombs-regenerated.jpg',
        imageCurrent: '/images/sites/tanis-royal-tombs-current.jpg',
        scene: 'The Silver Pharaoh\'s Treasure',
        visualHighlights: ['Silver coffin of Psusennes I (unique royal silver burial)', 'Gold funerary mask with lapis lazuli inlay', 'Intact royal burial chambers with stacked treasures', 'Lapis lazuli and gold jewelry collection', 'Reused Old Kingdom temple blocks with earlier inscriptions'],
        deity: 'Amun',
        type: 'city',
        youtubeUrl: 'https://youtu.be/GQsiDLqKb5Y?si=NrWwm6cnJUtOkgGa'
      }
    ]
  },

  // 39. Dahshur - The Experimental Pyramids
  dahshur: {
    id: 'dahshur',
    name: 'Dahshur Royal Pyramids',
    coordinates: [29.807, 31.209],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'bent-pyramid',
        name: 'Bent Pyramid of Sneferu',
        description: 'The experimental pyramid that changed angle mid-construction',
        longDescription: `The Bent Pyramid of Pharaoh Sneferu (c. 2600 BCE) is unique in Egyptian architecture—its lower half rises at a steep 54-degree angle, then abruptly changes to a shallower 43-degree angle halfway up. This unusual shape records an engineering crisis: the builders realized the base foundation was failing (cracks appearing in the outer casing stones, the internal chambers showing stress), and they reduced the angle to prevent collapse, leaving the pyramid permanently "bent."

The pyramid's original polished limestone casing remains partially intact—unique among pyramids where the casing is preserved from top to bottom on the lower courses. Two entrances (one on the north, one on the west—an unusual orientation suggesting ritual change) lead to interior chambers, one with a magnificent corbelled ceiling similar to the Great Pyramid's Grand Gallery, and a secondary "hidden" pyramid nearby (possibly for the queen, which still has its satellite enclosure wall).

The pyramid complex includes a small satellite pyramid (for the Ka, the pharaoh's double) and a rubble-filled chamber. The Bent Pyramid was Sneferu's second pyramid (after Meidum's collapse) as he experimented toward the true pyramid form achieved later at Dahshur's Red Pyramid. The site's remote location and preserved casing make it one of the most visually striking pyramids today.`,
        imageRegenerated: '/images/sites/bent-pyramid-regenerated.jpg',
        imageCurrent: '/images/sites/bent-pyramid-current.jpg',
        scene: 'The Pyramid That Changed Shape',
        visualHighlights: ['Lower steep 54-degree angle', 'Upper shallower 43-degree angle', 'Preserved limestone casing partially intact (unique)', 'Two entrances (north and west) with descending passages', 'Corbelled interior ceiling reminiscent of the Grand Gallery'],
        type: 'monument',
        youtubeUrl: 'https://youtu.be/LZ0sSIIaXRU?si=H1qAI5ZuliMdpZMW'
      },
      {
        id: 'red-pyramid',
        name: 'Red Pyramid of Sneferu',
        description: 'Egypt\'s first successful true pyramid',
        longDescription: `The Red Pyramid of Sneferu, named for the pinkish hue of its limestone core (the original white casing has been stripped for medieval Cairo buildings), was Egypt's first successful true pyramid (the third built by Sneferu, after Meidum's collapse and the Bent Pyramid's correction). Rising 105 meters (344 feet), it was the second tallest pyramid in Egypt at completion (after Khufu's Great Pyramid), built at a constant 43-degree angle with no structural changes.

The pyramid's interior comprises three chambers, with the highest having a corbelled ceiling 15 meters high. Entrance is through a 62-meter sloping passage on the north side (descending at 27 degrees). Unlike the Bent Pyramid, the Red Pyramid's interior is relatively simple (no interior decoration, just bare stone), but it served as the prototype for all later smooth-sided pyramids, including the Great Pyramid of Giza. The pyramid's burial chamber originally contained Sneferu's sarcophagus (now broken), though whether he was actually buried here is debated—he may have been buried at all three of his pyramids or only one.

The pyramid was opened to the public only in the 2010s, and visitors can now descend the 62-meter passage into the cool, empty chambers—a rare experience of experiencing a pyramid as a tomb space (uncluttered by tourist infrastructure). The pyramid's location in the desert, away from Giza's crowds, makes it a more contemplative site.`,
        imageRegenerated: '/images/sites/red-pyramid-regenerated.jpg',
        imageCurrent: '/images/sites/red-pyramid-current.jpg',
        scene: 'The First True Pyramid',
        visualHighlights: ['Constant 43-degree slope (engineering success)', 'Pink-hued limestone core giving its name', '62-meter descending entrance passage', 'Corbelled interior chamber ceiling 15m high', 'Model for all later smooth-sided pyramids'],
        type: 'monument',
        youtubeUrl: 'https://youtu.be/2I_Syq0ULVo?si=wKh6B5bDDlAmmGe5'
      }
    ]
  },

  // 40. Meidum - The Collapsed Pyramid
  meidum: {
    id: 'meidum',
    name: 'Meidum Pyramid',
    coordinates: [29.388, 31.157],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'meidum-pyramid',
        name: 'Pyramid of Huni / Sneferu',
        description: 'The mysterious collapsed tower pyramid',
        longDescription: `The Meidum Pyramid is one of Egypt's most puzzling and dramatic structures—originally a seven or eight-tiered step pyramid (like Djoser's), it was later encased in a smooth outer shell to create a true pyramid. At some point, the outer casing collapsed catastrophically, leaving a three-tiered central tower rising from a massive rubble strewn around the base like scree.

The pyramid was begun by Pharaoh Huni (last king of the 3rd Dynasty, c. 2630 BCE) and finished by his son Sneferu (first king of the 4th Dynasty), making it a transitional pyramid between the Step Pyramid of Djoser and the true pyramids of Dahshur and Giza. The collapse may have happened during construction (when the angle was too steep for the foundation)\ or due to later stone-robbing destabilizing the structure\ leading Sneferu to abandon it and build the Bent Pyramid (learning from this failure) and then the Red Pyramid (perfecting the design).

The complex includes a mortuary temple (with fragments of fine reliefs showing Sneferu in Heb-Sed robes), a causeway (partially excavated), a valley temple (still buried), and a satellite pyramid (for the Ka). Mastaba tombs of royal family members (including Nefermaat, son of Sneferu, and his wife Ateth), surround the pyramid in neat rows, with preserved reliefs including the famous "Geese of Meidum" (now in the Egyptian Museum), showing remarkable naturalism for the Old Kingdom.

The site's remote location and "tower" appearance inspired the nickname "False Pyramid" among local Bedouin. The collapse debris has never been cleared, so the pyramid remains as a record of ancient engineering failure—a valuable lesson in pyramid construction history.`,
        imageRegenerated: '/images/sites/meidum-pyramid-regenerated.jpg',
        imageCurrent: '/images/sites/meidum-pyramid-current.jpg',
        scene: 'The Tower of Collapse',
        visualHighlights: ['Three-tiered central tower rising from rubble mound', 'Collapsed outer casing blocks strewn around base', 'Transitional pyramid design (step pyramid → true pyramid)', 'Mastaba tombs with "Geese of Meidum" relief', 'Remote desert location with dramatic views'],
        type: 'monument',
        youtubeUrl: 'https://youtu.be/UTUse_2ae0A?si=qv0yrqBWku6Jowmu'
      }
    ]
  }
}

// ========== SECTION 3: NUBIA & KUSH (40-50) ==========
export const nubianSites: Record<string, Site> = {
  // 40. Kerma - The Earliest Nubian Kingdom
  kerma: {
    id: 'kerma',
    name: 'Kerma',
    coordinates: [19.6, 30.4167],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'western-deffufa',
        name: 'The Western Deffufa',
        description: 'Massive mudbrick temple of the Kerma kingdom',
        longDescription: `The Western Deffufa dominates the ancient city of Kerma, an 18-meter-high mudbrick temple that served as the religious and political center of the earliest kingdom in sub-Saharan Africa (c. 2500-1500 BCE). Unlike Egyptian stone temples, the Deffufa is built entirely of sun-dried mudbrick, yet its scale rivals contemporary Egyptian monuments. The interior contains ritual spaces, offering tables, and evidence of elaborate ceremonies. Below ground lie elaborate burial chambers with hundreds of human sacrifices—retainers buried with their rulers to serve them in the afterlife. Kerma was Egypt's great rival during the Middle Kingdom, controlling gold mines and trade routes before being conquered by Thutmose III.`,
        imageRegenerated: '/images/sites/kerma-deffufa-regenerated.jpg',
        imageCurrent: '/images/sites/kerma-deffufa-current.jpg',
        scene: 'The Western Deffufa of Kerma',
        visualHighlights: ['Massive mudbrick temple rising 18 meters', 'ritual offering tables and chambers', 'Subterranean royal burial chambers', 'Evidence of human sacrifices (hundreds)', 'Egyptian rival civilization control of gold mines'],
        type: 'temple'
      },
      {
        id: 'kerma-royal-tombs',
        name: 'Kerma Royal Cemeteries',
        description: 'Massive tumuli with hundreds of sacrifices',
        longDescription: `The royal tombs at Kerma are among the largest burial mounds ever built in Africa, with diameters exceeding 90 meters. These tumuli contained the remains of Kerma's kings, surrounded by hundreds of sacrificed retainers intended to serve their ruler in the afterlife. The tombs held incredible wealth—gold, ivory, Egyptian imports (scarabs, amulets, alabaster vessels), and exotic animals. The largest tomb contained over 400 human sacrifices, demonstrating the absolute power of Kerma's kings. This practice of human sacrifice in royal burials continued in Kush for centuries, with archaeological evidence found throughout Nubia.`,
        imageRegenerated: '/images/sites/kerma-tombs-regenerated.jpg',
        imageCurrent: '/images/sites/kerma-tombs-current.jpg',
        scene: 'The Burial Mounds of Kerma\'s Kings',
        visualHighlights: ['90-meter diameter royal tumuli', '400+ human sacrifice burials', 'Gold, ivory, and Egyptian imports', 'Exotic animal remains', 'Hierarchical burial layout'],
        type: 'tomb'
      }
    ]
  },

  // 41. Napata - The First Kushite Capital
  napata: {
    id: 'napata',
    name: 'Napata',
    coordinates: [18.55, 31.8333],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'napata-city',
        name: 'Napata',
        description: 'Political-religious center of Kushite pharaohs',
        longDescription: `Napata was the southern capital of the Kingdom of Kush, where the Black Pharaohs of the 25th Dynasty originated. Located at the holy mountain of Jebel Barkal, Napata blended Egyptian and Kushite traditions into a unique hybrid culture. The city featured multiple temples dedicated to Amun (including the Great Temple of Amun and Temple of Mut), royal palaces (including the Palace of Taharqa), and burial grounds with pyramidal tombs (el-Kurru and Nuri). It was from Napata that the Kushite king Piye led his campaign to conquer Egypt, reuniting the Nile Valley under native rule. Though later sacked by the Assyrians (c. 660 BCE), Napata remained a religious center for centuries, with pilgrims traveling to the oracle of Amun at Jebel Barkal—which chose kings, legitimized military campaigns, and guided Kushite state policy for over 1,000 years.`,
        imageRegenerated: '/images/sites/napata-regenerated.jpg',
        imageCurrent: '/images/sites/napata-current.jpg',
        scene: 'The Kushite Capital of Napata',
        visualHighlights: ['Temples of Amun with Egyptian-Kushite hybrid architecture', 'Palace complexes of the 25th Dynasty pharaohs', 'Royal burial pyramids at el-Kurru and Nuri', 'Oracle of Amun at Jebel Barkal', 'Piye\'s victory stela recording conquest of Egypt'],
        deity: 'Amun',
        type: 'city'
      }
    ]
  },

  // 42. Jebel Barkal - The Sacred Mountain
  jebelBarkal: {
    id: 'jebel-barkal',
    name: 'Jebel Barkal',
    coordinates: [18.5333, 31.8333],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'jebel-barkal-mountain',
        name: 'Jebel Barkal',
        description: 'Sacred mountain of Amun and Kushite kingship',
        longDescription: `A dramatic sandstone formation rises from the desert—the sacred mountain of Jebel Barkal, rising 98 meters above the plain. The Kushites believed this was where the god Amun resided, making it the religious heart of the Kingdom of Kush. The mountain's distinctive pinnacle resembles a uraeus (cobra), reinforcing its divine significance. At its base lie the ruins of multiple temples, including the Great Temple of Amun (founded by Thutmose III), Temple of Mut, and Temple of Taharqa. For over a thousand years, every Kushite king traveled here to be crowned and to receive Amun's blessing. The mountain was considered the source of kingship itself—where Amun declared who would rule. The site also contains royal burial pyramids from both Napatan and Meroitic periods.`,
        imageRegenerated: '/images/sites/jebel-barkal-regenerated.jpg',
        imageCurrent: '/images/sites/jebel-barkal-current.jpg',
        scene: 'The Sacred Mountain of Amun',
        visualHighlights: ['Dramatic sandstone pinnacle 98 meters high', 'Uraeus-shaped peak (cobra symbol of kingship)', 'Great Temple of Amun at the base', 'Kushite royal burial pyramids', 'Coronation site of every Kushite king'],
        deity: 'Amun',
        type: 'temple'
      }
    ]
  },

  // 43. El-Kurru - Pyramids of the 25th Dynasty
  elKurru: {
    id: 'el-kurru',
    name: 'El-Kurru',
    coordinates: [18.425, 31.833],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'el-kurru-pyramids',
        name: 'El-Kurru Pyramids',
        description: 'Burial place of the first 25th Dynasty pharaohs',
        longDescription: `El-Kurru was the royal cemetery of the early Napatan period, containing the tombs of the first Kushite kings who would later conquer Egypt. The site includes 14 pyramids (smaller and steeper than Egyptian examples) and underground burial chambers decorated with reliefs showing Egyptian influence. The most famous tomb is that of King Piye (c. 747-716 BCE), who conquered Egypt—his chamber is decorated with scenes of the king before Osiris. Other tombs include those of Kashta (Piye's father), Shabaka, and other 25th Dynasty rulers. The tombs also contained horse burials—horses were buried standing, fully bridled, near their owners—reflecting the Kushite military elite's dependence on cavalry. The site was used from the 9th to 7th centuries BCE before being replaced by Nuri.`,
        imageRegenerated: '/images/sites/el-kurru-regenerated.jpg',
        imageCurrent: '/images/sites/el-kurru-current.jpg',
        scene: 'The First Kushite Royal Cemetery',
        visualHighlights: ['14 steep-sided pyramids', 'Underground burial chambers with Egyptian-style reliefs', 'Tomb of Piye with Osiris scenes', 'Horse burials (standing, fully bridled)', 'Kushite military elite cavalry culture'],
        type: 'tomb'
      }
    ]
  },

  // 44. Nuri - Pyramids of the Napatan Kings
  nuri: {
    id: 'nuri',
    name: 'Nuri',
    coordinates: [18.467, 31.917],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'nuri-pyramids',
        name: 'Pyramids of Nuri',
        description: 'Burial place of Taharqa and later Napatan kings',
        longDescription: `Nuri was the royal cemetery of the Napatan period (7th-4th centuries BCE), replacing El-Kurru. The site contains over 80 pyramids—more than any other site in Sudan—including the pyramid of Taharqa (c. 690-664 BCE), the most powerful Kushite pharaoh who fought the Assyrians and moved his capital back to Napata. Taharqa's pyramid is the largest at Nuri (20 meters square at base, estimated 50 meters tall). Other tombs include those of Tantamani, Atlanersa, Senkamanisken, and other kings, as well as queens and princes. The pyramids are built of red sandstone with offering chapels decorated in relief. Several tombs contained alabaster and gold funerary objects, including shabtis, amulets, and jewelry now in the Boston Museum of Fine Arts. The site's remote location preserved it from extensive looting.`,
        imageRegenerated: '/images/sites/nuri-regenerated.jpg',
        imageCurrent: '/images/sites/nuri-current.jpg',
        scene: 'The Royal Pyramids of Nuri',
        visualHighlights: ['80+ red sandstone pyramids', 'Taharqa\'s pyramid (largest, c. 50 meters)', 'Offering chapels with relief decoration', 'Alabaster and gold funerary objects', 'Remote desert setting'],
        deity: 'Amun',
        type: 'tomb'
      }
    ]
  },

  // 45. Meroë - The Southern Capital
  meroePyramids: {
    id: 'meroe-pyramids',
    name: 'Meroë',
    coordinates: [16.9381, 33.7489],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'meroe-city',
        name: 'City of Meroë',
        description: 'Southern capital of the Kushite kingdom',
        longDescription: `Meroë became the capital of the Kingdom of Kush around 300 BCE, when the royal court moved south from Napata. The city controlled trade routes between the Red Sea, central Africa, and the Nile, exporting gold, ivory, iron, ebony, and exotic animals (elephants, giraffes, leopards). The city's wealth came also from ironworking—the slag heaps around Meroë are among the largest in Africa, indicating massive production of iron tools and weapons. Meroë featured a royal palace complex (the "Royal City"), temples dedicated to Amun and Apedemak (a lion-headed war god unique to Kush), and a treasury. The city also had a "steam bath" (a unique structure interpreted as a ritual bathing complex with Egyptian and Greek influences). The site declined after an Aksumite invasion in the 4th century CE, but its Meroitic language (still undeciphered) and unique alphabet survive on stelae.`,
        imageRegenerated: '/images/sites/meroe-city-regenerated.jpg',
        imageCurrent: '/images/sites/meroe-city-current.jpg',
        scene: 'The Iron Capital of Kush',
        visualHighlights: ['Royal palace complex (Royal City)', 'Temples to Amun and lion-headed Apedemak', 'Massive ironworking slag heaps', 'Steam bath ritual bathing complex', 'Meroitic undeciphered language stelae'],
        deity: 'Apedemak',
        type: 'city'
      },
      {
        id: 'meroe-necropolis',
        name: 'Pyramids of Meroë',
        description: 'Steep, narrow pyramids unique to Kushite architecture',
        longDescription: `Unlike the smooth-sided pyramids of Egypt, the Meroë pyramids are steep, narrow, and distinctly Kushite. Over 200 pyramids stand in the desert, their red sandstone glowing in the setting sun. These pyramids served as tombs for Kushite royalty (kings, queens, and high officials) from 300 BCE to 350 CE. The burial chambers are underground, accessed by a staircase, with the pyramids built above ground as 'mastaba' platforms. Many pyramids have chapels with reliefs showing the deceased making offerings to gods (Apedemak, Isis, Bes). The decoration includes Kushite elements: the royal figure sits on a lion throne, wears an elephant-skin robe, and holds a spear—images not found in Egypt. The pyramids are smaller than Egyptian examples (peak 30 meters, average 6-8 meters).`,
        imageRegenerated: '/images/sites/meroe-pyramids-regenerated.jpg',
        imageCurrent: '/images/sites/meroe-pyramids-current.jpg',
        scene: 'The Royal Necropolis of Meroë',
        visualHighlights: ['Over 200 steep, narrow pyramids', 'Red sandstone construction glowing in sunset', 'Chapels with Kushite-specific reliefs (lion throne, elephant robe)', 'Underground burial chambers', 'Meroitic period (300 BCE - 350 CE)'],
        type: 'tomb'
      }
    ]
  },

  // 46. Musawwarat es-Sufra - The Lion Temple
  musawwarat: {
    id: 'musawwarat',
    name: 'Musawwarat es-Sufra',
    coordinates: [16.4167, 33.3167],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'lion-temple',
        name: 'Lion Temple of Musawwarat',
        description: 'Unique temple dedicated to the lion god Apedemak',
        longDescription: `Musawwarat es-Sufra is one of the most unusual temple complexes in the Nile Valley, featuring the "Great Enclosure"—90,000 square meters of walls, courtyards, ramps, and columns with no exact parallel in Egyptian or Kushite architecture. The site's main structure is the Lion Temple, built by King Arnekhamani (c. 235-218 BCE), dedicated to Apedemak, the lion-headed war god unique to Kush. The temple's reliefs show the king in combat with enemies, the god ensuring victory, and—most famously—Apedemak emerging from a lotus flower with a cobra-headed snake body (a syncretic image combining Egyptian lotus imagery with Kushite lion god). The site lies in the "Island of Meroë" between the Atbara and Nile rivers, near the traditional elephant-training grounds. The complex may have served religious and agricultural purposes (rainwater collection basins) as well as hosting large gatherings (capable of holding thousands).`,
        imageRegenerated: '/images/sites/musawwarat-regenerated.jpg',
        imageCurrent: '/images/sites/musawwarat-current.jpg',
        scene: 'The Lion God\'s Sanctuary',
        visualHighlights: ['Great Enclosure (90,000 square meters of walls)', 'Lion Temple with Apedemak reliefs', 'Apedemak emerging from lotus with snake body', 'Elephant-training basins and ramps', 'Unique Kushite architecture (no Egyptian parallel)'],
        deity: 'Apedemak',
        type: 'temple'
      }
    ]
  },

  // 47. Naqa - Apedemak Temple with Elephants
  naqa: {
    id: 'naqa',
    name: 'Naqa',
    coordinates: [16.267, 33.267],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'naqa-temples',
        name: 'Naqa Temples',
        description: 'Kushite-Egyptian syncretic temple complex',
        longDescription: `Naqa is a temple complex built during the Meroitic period (1st century BCE - 1st century CE), showing a fascinating blend of Egyptian, Hellenistic, and Kushite art. The Temple of Amun (started by Queen Shanakdakhete, completed by King Natakamani and Queen Amanitore) is Egyptian in plan but with Meroitic elements—the king's costume shows both Egyptian and Kushite regalia. The nearby Lion Temple of Apedemak has reliefs showing the king supported by the lion god, as well as scenes of musicians, prisoners, and—most unusually—a line of elephants. The relief of Queen Amanitore (c. 1-20 CE) shows her in the "smiting scene" (traditionally reserved for male kings), grasping enemies' hair to execute them. The site includes a kiosk (small open-pavilion) with Hathor-headed columns. A Roman-style statue of Augustus was found here (de-faced by Kushites, the head now in the British Museum).`,
        imageRegenerated: '/images/sites/naqa-regenerated.jpg',
        imageCurrent: '/images/sites/naqa-current.jpg',
        scene: 'The Kushite-Egyptian Temple Complex',
        visualHighlights: ['Temple of Amun with Egyptian-Meroitic hybrid plan', 'Lion Temple of Apedemak with elephant reliefs', 'Queen Amanitore in "Smiting Scene" (women as military leader)', 'Hathor-headed kiosk columns', 'Defaced Roman statue of Augustus'],
        deity: 'Apedemak',
        type: 'temple'
      }
    ]
  },

  // 48. Wad ban Naqa - Queen Amanitore's Palace
  wadBanNaqa: {
    id: 'wad-ban-naqa',
    name: 'Wad ban Naqa',
    coordinates: [16.517, 33.7],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'queen-palace',
        name: 'Wad ban Naqa',
        description: 'Palace city of Queen Amanitore',
        longDescription: `Wad ban Naqa was a royal city associated with Queen Amanitore (c. 1-20 CE), one of the most powerful Kushite queens. The site features a palace complex (including a throne room), a temple to Apedemak, and a Roman-style kiosk (pavilion). The palace of Amanitore is built of sandstone with Greek-style columns, showing Hellenistic influence reaching the Kushite court. The nearby Lion Temple reliefs show the queen wearing the "African" headcloth and heavy jewelry, accompanied by the king. The site was connected to Meroë by a processional way and functioned as a royal residence (palace, housing for officials, workshops for craftsmen). The name "Wad ban Naqa" means "sons of Naqa" in Arabic, referring to nearby sandstone hills.`,
        imageRegenerated: '/images/sites/wad-ban-naqa-regenerated.jpg',
        imageCurrent: '/images/sites/wad-ban-naqa-current.jpg',
        scene: 'The Palace of Queen Amanitore',
        visualHighlights: ['Sandstone palace with Greek-style columns', 'Throne room of Queen Amanitore', 'Lion Temple with queen\'s reliefs', 'Roman-style kiosk (pavilion)', 'Connected to Meroë by processional way'],
        deity: 'Apedemak',
        type: 'palace'
      }
    ]
  },

  // 49. Dangeil - Temple of Amun with Taharqa Inscription
  dangeil: {
    id: 'dangeil',
    name: 'Dangeil',
    coordinates: [17.183, 33.967],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'dangeil-temple',
        name: 'Temple of Amun at Dangeil',
        description: 'Well-preserved Kushite temple',
        longDescription: `Dangeil is an active archaeological site (excavated 2000-present) revealing a temple of Amun built during the Napatan period (c. 7th century BCE) and used through the Meroitic period (1st-3rd century CE). The temple is unique for its well-preserved painted reliefs—rare in Sudan—showing the king and queen (including Queen Amanitore) offering to Amun, Mut, and Khonsu. The site also contains a 'pedestal' for a processional barque (divine boat) and a "crypt" for storing temple treasures. The most significant find is the "Dangeil Inscription" mentioning King Taharqa and the goddess Mut, confirming the site's identification. The temple was surrounded by a mudbrick enclosure wall and included a “kiosk” (pavilion) for royal ceremonies. The site also has a cemetery of pyramid tombs (probably high officials, not royal).`,
        imageRegenerated: '/images/sites/dangeil-regenerated.jpg',
        imageCurrent: '/images/sites/dangeil-current.jpg',
        scene: 'The Painted Temple of Amun',
        visualHighlights: ['Well-preserved painted reliefs (rare in Sudan)', 'Pedestal for processional barque of Amun', 'Crypt for temple treasures', 'Dangeil Inscription mentioning Taharqa', 'Kiosk for royal ceremonies'],
        deity: 'Amun',
        type: 'temple'
      }
    ]
  },

  // 50. Meroitic Water Wells - Hydraulic Engineering
  meroiticWells: {
    id: 'meroitic-wells',
    name: 'Meroitic Hydraulic System',
    coordinates: [16.5, 33.0],
    region: 'Nubia / Kush (Sudan)',
    locations: [
      {
        id: 'meroitic-reservoirs',
        name: 'Meroitic Water Wells',
        description: 'Advanced water management in the semi-desert',
        longDescription: `The Meroitic kingdom developed advanced hydraulic engineering to thrive in the semi-desert environment between the Nile, Atbara, and Rahad rivers. The site includes hafirs (artificial water reservoirs), which are man-made basins (up to 100 meters square, 5 meters deep) lined with plaster to retain rainwater. The largest hafirs could hold millions of gallons of water, supporting a population of thousands. The system includes connecting channels to divert floodwaters into fields, terraced agriculture on the river banks, and qanat-like underground channels. This engineering allowed Meroë to prosper without direct Nile water, in an area receiving only 50-100mm of rain annually. The technology may have been influenced by contact with the Persian qanat system through Indian Ocean trade. The reservoirs also served for livestock (cattle, the measure of Kushite wealth) and for ritual use (some hafirs located near temples).`,
        imageRegenerated: '/images/sites/meroitic-wells-regenerated.jpg',
        imageCurrent: '/images/sites/meroitic-wells-current.jpg',
        scene: 'The Water Engineers of Kush',
        visualHighlights: ['Hafirs (artificial reservoirs) up to 100 meters square', 'Plaster-lined basins for rainwater storage', 'Connecting channels for floodwater distribution', 'Terraced agriculture on river banks', 'Supporting cattle and ritual use near temples'],
        type: 'monument'
      }
    ]
  }
};
// ========== SECTION 4: LAND OF PUNT & RED SEA TRADE (51-60) ==========
export const puntSites: Record<string, Site> = {
  // 51. Wadi Gawasis - Egyptian Expedition Port
  wadiGawasis: {
    id: 'wadi-gawasis',
    name: 'Wadi Gawasis (Mersa Gawasis)',
    coordinates: [26.53, 33.97],
    region: 'Red Sea Coast (Egypt)',
    locations: [
      {
        id: 'wadi-gawasis-port',
        name: 'Wadi Gawasis',
        description: 'Egyptian expedition port used to reach Punt',
        longDescription: `Wadi Gawasis was Egypt's gateway to the Red Sea and the Land of Punt, used during the Middle Kingdom (c. 2000-1700 BCE) and again in the New Kingdom (c. 1490 BCE). The site sits on a now-dry branch of the Nile that once connected to the Red Sea, allowing ships to sail directly from the Nile to the Indian Ocean. Excavations have revealed perfectly preserved ship timbers (cedar and acacia wood, some 20 meters long), anchors (stone and wood), cargo boxes (inscribed with expedition details), rigging, and expedition inscriptions—including the earliest known ship remains from anywhere in the world (c. 1850 BCE). The timbers were recycled from older constructions, some dated by tree rings to the 12th Dynasty. 

The site includes "cave" storage galleries in the coral rock (Man's Cave and Woman's Cave), where ships were stored between expeditions, along with offerings to the gods for safe return. A stela of Amenemhat III (c. 1850 BCE) records that "ships returned from Punt loaded with the marvels of the Land of the God." This was where Hatshepsut's famous expedition to Punt departed (c. 1490 BCE), recounted in reliefs at Deir el-Bahari. The expedition brought back 31 myrrh trees (still living in Egypt), electrum, gold, ivory, ebony, animal skins, exotic animals (baboons, giraffes, leopards), and the Puntite ruler and his family shown in the reliefs.`,
        imageRegenerated: '/images/sites/wadi-gawasis-regenerated.jpg',
        imageCurrent: '/images/sites/wadi-gawasis-current.jpg',
        scene: 'Egypt\'s Ancient Red Sea Port',
        visualHighlights: ['Perfectly preserved ship timbers (oldest in world, c. 1850 BCE)', 'Cave storage galleries in coral rock (Man\'s Cave and Woman\'s Cave)', 'Expedition inscriptions mentioning Punt (Amenemhat III, Hatshepsut)', 'Nile-Red Sea connection (now dry branch, visible as wadi)', 'Hatshepsut\'s Punt expedition departure point with myrrh trees'],
        type: 'city'
      }
    ]
  },

  // 52. Punt Reliefs at Deir el-Bahari - Visual Evidence
  puntReliefs: {
    id: 'punt-reliefs',
    name: 'Deir el-Bahari Punt Reliefs',
    coordinates: [25.738, 32.606],
    region: 'Egypt (Thebes)',
    locations: [
      {
        id: 'hatshepsut-punt-reliefs',
        name: 'Hatshepsut\'s Punt Expedition Reliefs',
        description: 'The most detailed visual record of Punt',
        longDescription: `The Punt reliefs at Hatshepsut's temple at Deir el-Bahari (c. 1470 BCE) are the most detailed visual record of ancient Egypt's trade with the Land of Punt. The reliefs show Egyptian ships arriving in Punt, the Puntite ruler (Parahu) and his obese wife (Ati), the distinctive "beehive" houses on stilts, Egyptian soldiers carrying weapons, and the loading of goods—incense trees, gold, ivory, ebony, animal skins, and exotic animals (baboons, giraffes, leopards). The reliefs also show the Puntite chief offering gifts to the Egyptian ambassador.

The text identifies Punt as "God's Land" and describes the expedition's success: "Never was brought the like of this to any king who has been since the beginning of the earth." The reliefs were a political statement by Hatshepsut, legitimizing her rule by reviving trade contacts. They provide scholars with their only contemporary Egyptian depiction of Puntite society—the clothing, the houses, the landscape (steep mountains descending to the sea, with incense trees in terraces), the animals, and the physical appearance of its people.

The reliefs have been studied to identify the location of Punt: the beehive houses resemble modern Eritrean architecture; the incense trees (Boswellia species) grow in Eritrea, Ethiopia, and Somalia; the baboons (Papio hamadryas) are native to Ethiopia and Eritrea.`,
        imageRegenerated: '/images/sites/punt-reliefs-regenerated.jpg',
        imageCurrent: '/images/sites/punt-reliefs-current.jpg',
        scene: 'Hatshepsut\'s Punt Expedition Reliefs',
        visualHighlights: ['Egyptian ships arriving in Punt with sails furled', 'Puntite ruler Parahu and his obese wife Ati', '"Beehive" houses on stilts', 'Frankincense trees being loaded onto ships', 'Exotic animals (baboons, giraffes, leopards)'],
        type: 'monument'
      }
    ]
  },

  // 53. Adulis - Aksumite Port (Eritrea)
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
        longDescription: `Adulis was the greatest port on the Red Sea during antiquity, serving as the gateway for trade between the Mediterranean, Africa, and India from the 1st to 7th centuries CE. The "Periplus of the Erythraean Sea" (c. 50 CE), a Greek navigational guide, describes Adulis as a "lawful port" where goods from the interior—ivory (from elephant tusks), tortoiseshell (from hawksbill turtles), rhinoceros horn (for medicinal use), frankincense and myrrh (from Boswellia and Commiphora trees), slaves (captured in the interior)—were exchanged for Mediterranean products (cloth, glass, wine, olive oil, silverware). The port also connected to the Indian Ocean trade, receiving Indian pepper, gems, and textiles.

The site features extensive ruins—warehouses (for storing goods), temples (dedicated to Zeus, Serapis, and a native deity), a Christian church (6th century, later a mosque), and a massive necropolis with tombs spanning centuries (containing gold jewelry, glassware, and imported pottery). A Greek inscription (the "Monumentum Adulitanum") describes the monument of an Aksumite king (possibly Zoskales) who campaigned in Arabia and Nubia, demonstrating Adulis's role as a launch point for military expeditions. The port was destroyed during the Islamic expansion (7th century CE) and abandoned.`,
        imageRegenerated: '/images/sites/adulis-regenerated.jpg',
        imageCurrent: '/images/sites/adulis-current.jpg',
        scene: 'The Great Red Sea Port',
        visualHighlights: ['Warehouse ruins for storing trade goods (ivory, frankincense)', 'Temple foundations (Zeus, Serapis, native deity)', 'Massive necropolis with tombs spanning centuries', 'Ancient harbor works (docks, breakwaters)', 'Greek inscription (Monumentum Adulitanum) on stone'],
        type: 'city'
      }
    ]
  },

  // 54. Eritrean Highlands - Punt Heartland Candidate
  eritreaHighlands: {
    id: 'eritrea-highlands',
    name: 'Eritrean Highlands',
    coordinates: [15.3333, 38.9167],
    region: 'Horn of Africa (Eritrea)',
    locations: [
      {
        id: 'eritrea-punt',
        name: 'The Eritrean Coast and Highlands',
        description: 'Core region of the legendary Land of Punt',
        longDescription: `The rugged coastline and highlands of Eritrea, with their natural harbors and access to the incense-growing highlands, match the descriptions of Punt in Egyptian texts more closely than any other region. Many scholars consider this the most likely location of Punt—the land where Egyptians obtained myrrh, frankincense, gold, ivory, and exotic animals like baboons and giraffes. The terrain—steep mountains (the Eritrean Highlands, rising to 3,000 meters) descending to the Red Sea—matches Hatshepsut's relief depictions of the Punt landscape, including the distinctive "beehive" houses raised on stilts (still found in the region).

Ancient port sites along this coast, including Adulis (see above), Matara (a pre-Aksumite urban center with inscriptions), and Qohaito (a highland settlement with rock art), show trade connections with Egypt during the Punt expedition era (c. 2000-1150 BCE). Modern archaeological surveys have identified potential Puntite settlements with local pottery (distinctive red polished ware) matching the vessels depicted in Egyptian reliefs. The region continues to produce frankincense and myrrh, allowing us to experience the very scents that made Punt legendary. The highlands are also home to the Hamadryas baboon, the species depicted in Egyptian art as sacred to Thoth, identified with Punt.`,
        imageRegenerated: '/images/sites/eritrea-highlands-regenerated.jpg',
        imageCurrent: '/images/sites/eritrea-highlands-current.jpg',
        scene: 'The Frankincense Coast of Punt',
        visualHighlights: ['Red Sea coastline with steep mountains descending', 'Incense-growing highlands (frankincense trees being tapped)', 'Natural harbor bays for ancient ships (Adulis, Matara)', '"Beehive" house reconstructions on stilts', 'Hamadryas baboons (linked to Punt in Egyptian art)'],
        type: 'city'
      }
    ]
  },

  // 55. Somali Coast - Eastern Punt Extension
  somaliaCoast: {
    id: 'somalia-coast',
    name: 'Somali Coast',
    coordinates: [10, 49],
    region: 'Horn of Africa (Somalia)',
    locations: [
      {
        id: 'somalia-punt',
        name: 'The Somali Coast',
        description: 'Eastern extension of the Punt trade network',
        longDescription: `The Horn of Africa's Somali coast, with its frankincense and myrrh production, represents the eastern extension of the Punt trade network. The distinctive long-horned cattle depicted in Hatshepsut's reliefs match species still found in Somalia (the “Sanga” breed, with horns up to 2 meters long), suggesting the region was part of Punt or closely linked to it.

Ancient trading ports along this coast, including Opone (modern Hafun) with its artificial harbor island connected by a causeway, Heis (with stone ruins and ancient wells), and Xaafuun (with Ptolemaic and Roman artifacts), connected Africa to Arabia, Persia, and India. Somali merchants traded incense, spices, exotic animals, and aromatic woods, participating in the Indian Ocean trade network that later included Chinese and Southeast Asian goods.

The frankincense and myrrh trees of northern Somalia still produce the highest quality resins on the market, harvested in the same traditional way depicted in Egyptian tombs—using a metal scraper to make incisions in the bark, collecting the dried resin as "tears." The region's ancient cairns (stone burial monuments), rock art (showing cattle with distinctive horns and human figures with Egyptian-style jewelry), and settlement ruins await systematic archaeological investigation, offering potential for future discoveries about Punt.`,
        imageRegenerated: '/images/sites/somalia-coast-regenerated.jpg',
        imageCurrent: '/images/sites/somalia-coast-current.jpg',
        scene: 'The Incense Lands of Punt',
        visualHighlights: ['Frankincense trees being tapped with metal scrapers', 'Long-horned cattle (Sanga breed) in rock art', 'Ancient harbor ruins at Opone (Hafun, artificial island)', 'Terraced mountains for incense cultivation', 'Traditional incense harvesting methods (collecting "tears")'],
        type: 'city'
      }
    ]
  },

  // 56. Opone - Ancient Somali Port
  opone: {
    id: 'opone',
    name: 'Opone (Hafun)',
    coordinates: [10.43, 51.28],
    region: 'Horn of Africa (Somalia)',
    locations: [
      {
        id: 'opone-port',
        name: 'Ancient Opone',
        description: 'Trading port for incense and exotic goods',
        longDescription: `Located on the Somali coast at modern Hafun, Opone was a major trading port for incense, aromatic gums, and exotic animals, active from at least the 1st century CE, possibly earlier. The site includes an artificial island connected to the mainland by a causeway, creating a protected harbor that ancient geographers described as "the place of the cinnamon and myrrh traders."

Greek and Roman texts (Periplus of the Erythraean Sea, Ptolemy's Geography) describe Opone as a source of the highest quality frankincense and myrrh—the same goods sought by Egyptian Punt expeditions. Archaeological finds include Egyptian (Ptolemaic amphorae), Greco-Roman (terra sigillata pottery), and Indian (red polished ware) pottery, confirming long-distance trade networks reaching India and Southeast Asia.

The surrounding region produces the highest quality frankincense (Boswellia carterii), still harvested in traditional ways by local communities. The port's location on the Horn of Africa made it a crucial link between Mediterranean traders and the Indian Ocean routes, participating in the monsoon-driven trade network that connected three continents for over a millennium. The site was abandoned around the 5th century CE, possibly due to the decline of the Aksumite state.`,
        imageRegenerated: '/images/sites/opone-regenerated.jpg',
        imageCurrent: '/images/sites/opone-current.jpg',
        scene: 'The Spice Port of Opone',
        visualHighlights: ['Artificial harbor island connected by causeway', 'Frankincense and myrrh storage jars (amphorae)', 'Causeway engineering with protective breakwaters', 'Coastal trade routes to Arabia, Persia, India', 'Egyptian, Greco-Roman, and Indian pottery finds'],
        type: 'city'
      }
    ]
  },

  // 57. Matara - Pre-Aksumite Urban Center
  matara: {
    id: 'matara',
    name: 'Matara (Qohaito)',
    coordinates: [14.6667, 39.4167],
    region: 'Horn of Africa (Eritrea)',
    locations: [
      {
        id: 'matara-ruins',
        name: 'Matara',
        description: 'Pre-Aksumite urban center with ties to Punt',
        longDescription: `Matara was a major urban center of the pre-Aksumite and Aksumite periods (c. 500 BCE - 600 CE), strategically located on trade routes connecting the Red Sea coast (Adulis) to the Ethiopian highlands (Aksum). The site may be the "Puntite" settlement described in Egyptian texts. Excavations have revealed residential quarters (stone houses with courtyards), elite buildings (a palace or temple structure with monumental steps), and a monumental stone platform (possibly a temple base or throne).

The site contains important inscriptions in South Arabian script (Sabaic), including references to the kings of D'mt (the pre-Aksumite kingdom) and to the god Almaqah—evidence of cultural contacts between Africa and Arabia. Artifacts found here include imported Roman glass, Mediterranean amphorae (for wine and oil), and Indian beads (etched carnelian), demonstrating long-distance trade connecting Africa, Europe, and Asia.

The architecture includes distinctive "Sabaean" elements (stone construction with recessed doorways, "South Arabian" style figural carvings), suggesting the influence of South Arabian (Yemeni) culture on the Horn of Africa before the rise of Aksum. The site remained occupied through the Aksumite period and into the medieval era, with later Christian churches carved into the hillside.`,
        imageRegenerated: '/images/sites/matara-regenerated.jpg',
        imageCurrent: '/images/sites/matara-current.jpg',
        scene: 'The Pre-Aksumite City of Matara',
        visualHighlights: ['Monumental stone platform (temple or throne)', 'South Arabian inscriptions in Sabaic script', 'Imported Roman glass and Mediterranean amphorae', 'Stone houses with courtyards', 'Christian churches carved into hillside (later period)'],
        type: 'city'
      }
    ]
  },

  // 58. Yeha - Temple of Almaqah
  yeha: {
    id: 'yeha',
    name: 'Yeha',
    coordinates: [14.2833, 39.0167],
    region: 'Horn of Africa (Ethiopia)',
    locations: [
      {
        id: 'yeha-temple',
        name: 'Temple of Almaqah at Yeha',
        description: 'Massive stone temple with South Arabian influences',
        longDescription: `The Temple of Almaqah at Yeha is the largest and best-preserved pre-Aksumite structure in Ethiopia, dating to the 8th-5th centuries BCE. The massive stone structure shows strong South Arabian (Sabaic) architectural influence, with precisely cut blocks (orthostats) fitted without mortar, using a system of interlocking joints. The temple was dedicated to Almaqah, the moon god of the Sabean (South Arabian) pantheon, known as "Ilmuqah" in Sabaic inscriptions.

The site was a major religious center of the D'mt kingdom (c. 800-400 BCE), a pre-Aksumite state that controlled the incense trade routes. The temple's imposing 13-meter-high walls, with their distinctive stepped recesses, demonstrate sophisticated engineering and cultural connections between the Horn of Africa and Arabia during the first millennium BCE. The temple remained a religious center for centuries, later incorporated into Ethiopian Orthodox tradition (a 6th-century CE church was built within the precinct).

The site also includes a later monastery (Debre Damo style, 6th century CE) and a museum displaying D'mt artifacts (gold and silver jewelry, stone sculptures, South Arabian inscriptions). The name "Yeha" means "to come out" in Ge'ez, referring to the spring at the site's base. The temple's remote location, in the highlands of northern Ethiopia, preserves it as a monument to early African-Arabian cultural contact.`,
        imageRegenerated: '/images/sites/yeha-regenerated.jpg',
        imageCurrent: '/images/sites/yeha-current.jpg',
        scene: 'The Moon Temple of Almaqah',
        visualHighlights: ['Massive precisely-cut stone blocks without mortar', 'Stepped recessed walls (South Arabian style)', '13-meter-high standing walls', 'D\'mt kingdom religious center (8th-5th centuries BCE)', 'Later Ethiopian Orthodox church within precinct'],
        deity: 'Almaqah',
        type: 'temple'
      }
    ]
  },

  // 59. Red Sea Trade Route - Maritime Superhighway
  redSeaRoute: {
    id: 'red-sea-route',
    name: 'The Red Sea Trade Route',
    coordinates: [22, 38],
    region: 'Red Sea',
    locations: [
      {
        id: 'red-sea-trade',
        name: 'The Red Sea Trade Route',
        description: 'Highway of ancient maritime commerce',
        longDescription: `The Red Sea was the superhighway of the ancient world, connecting Egypt to the riches of Africa, Arabia, and India for over 3,000 years. Egyptian, Phoenician, Greek, Roman, Aksumite, and Persian ships all sailed these waters, carrying gold, incense, spices, ivory, and exotic animals. The sea's monsoon wind patterns determined sailing seasons—southbound voyages used summer winds (the southwest monsoon, June-July), while return trips waited for winter (the northeast monsoon, October-November). Skilled pilots navigated treacherous reefs and shallows (there are over 1,000 islands in the Red Sea) using landmarks and early charts drawn on papyrus.

The Red Sea trade network progressed through several phases: the "Punt trade" (Egyptian Middle Kingdom, c. 2000-1700 BCE), the "Incense trade" (Assyrian and Persian periods, c. 700-300 BCE), the "Spice trade" (Ptolemaic and Roman periods, c. 300 BCE - 400 CE), and the "Silk and spice trade" (Byzantine and Aksumite periods, c. 400-700 CE). The sea's importance continued through the medieval period, when its ports transferred goods between the Mediterranean, Africa, and Asia for the Islamic empires.

Controlling the Red Sea meant controlling world trade. Whoever held its ports—Egypt (Ptolemaic and Roman periods), Aksum (4th-6th centuries CE), or Persia (6th-7th centuries CE)—dominated the exchange between Rome and India, the two poles of the ancient global economy. The Red Sea's strategic importance is reflected in the location of its ports—on both the African and Arabian shores—and in the rivalry between powers to control the Bab el-Mandeb (Gate of Tears) at the sea's southern entrance.`,
        imageRegenerated: '/images/sites/red-sea-route-regenerated.jpg',
        imageCurrent: '/images/sites/red-sea-route-current.jpg',
        scene: 'The Ancient Maritime Highway',
        visualHighlights: ['Turquoise coral waters with ancient ship routes', 'Coastal trading ports on both African and Arabian shores', 'Monsoon wind patterns determining sailing seasons', 'Egyptian, Greek, Roman, and Aksumite ships', 'Navigational charts drawn on papyrus'],
        type: 'city'
      }
    ]
  },

  // 60. Punt as a Concept - The Lost Land
  puntLostLand: {
    id: 'punt-lost-land',
    name: 'The Land of Punt',
    coordinates: [10, 45],
    region: 'Horn of Africa (Speculative)',
    locations: [
      {
        id: 'punt-mystery',
        name: 'The Land of Punt',
        description: 'The legendary lost land of incense',
        longDescription: `The Land of Punt remains one of the great mysteries of Egyptology—a legendary land mentioned in Egyptian texts for over 1,500 years (c. 2500-1150 BCE) but never precisely located. Egyptian sources describe Punt as "God's Land," a place of incense, gold, ivory, ebony, and exotic animals, reached by ship on the Red Sea. The Egyptians traded with Punt during the Old Kingdom (the Palermo Stone records ships to Punt), the Middle Kingdom (the Tale of the Shipwrecked Sailor describes a voyage to Punt), and the New Kingdom (Hatshepsut's expedition, Ramesses III's mention of Punt goods).

Scholarly candidates for Punt's location include: (1) the Eritrean coast and highlands (the most widely accepted, matching the beehive houses, incense species, and baboons), (2) the Somali coast (matching the long-horned cattle and incense trade), (3) the Yemeni coast (in Arabia, matching the incense species), and (4) the Dhofar region of Oman (matching the frankincense trees). Archaeological evidence remains inconclusive, no site in Africa or Arabia has produced an inscription identifying itself as "Punt."

Punt is remembered in Egyptian texts as a kind of "golden age" of trade, before the disruptions of the Late Bronze Age collapse (c. 1150 BCE). The legendary status of Punt—its wealth, its mystery, its goods—may have contributed to the Greek legend of the Hesperides (the garden of golden apples) and the biblical land of Sheba (the source of frankincense and myrrh). The search for Punt continues, with satellite imagery, environmental studies (identifying ancient climate patterns favorable to incense production), and archaeological surveys in Ethiopia, Eritrea, and Somalia offering hope for future discoveries.`,
        imageRegenerated: '/images/sites/punt-mystery-regenerated.jpg',
        imageCurrent: '/images/sites/punt-mystery-current.jpg',
        scene: 'The Legendary Land of Incense',
        visualHighlights: ['Papyrus map of Punt (conceptual, based on Egyptian texts)', 'Beehive houses (Eritrean style) as depicted at Deir el-Bahari', 'Frankincense trees in terraced mountains', 'Baboons (Hamadryas) native to Punt region', 'Egyptian ships arriving at a speculative Punt landscape'],
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 5: PHOENICIANS (61-70) ==========
export const phoenicianSites: Record<string, Site> = {
  // 61. Tyre - The Island City
  phoenicianTyre: {
    id: 'phoenician-tyre',
    name: 'Tyre',
    coordinates: [33.2667, 35.2],
    region: 'Phoenicia (Lebanon)',
    locations: [
      {
        id: 'tyre-island',
        name: 'The Island City of Tyre',
        description: 'Greatest of the Phoenician trading cities',
        longDescription: `Tyre was the greatest of the Phoenician cities, built on an island fortress just off the coast. Its twin harbors made Tyre the wealthiest city in the ancient world, famous for purple dye. The temple of Melqart, Tyre's patron god, was admired for its gold and emerald pillars. Alexander the Great famously built a causeway to capture the city after a 7-month siege.`,
        imageRegenerated: '/images/sites/tyre-regenerated.jpg',
        imageCurrent: '/images/sites/tyre-current.jpg',
        scene: 'The Island Fortress of Tyre',
        visualHighlights: ['Double harbor system', 'Murex shell dye works', 'Temple of Melqart', 'Alexander\'s causeway'],
        deity: 'Melqart',
        type: 'city'
      },
      {
        id: 'tyre-al-bass',
        name: 'Al-Bass Necropolis',
        description: 'Extensive burial ground with monumental funerary architecture',
        longDescription: `The Al-Bass Necropolis contains hundreds of stone sarcophagi and funerary monuments. The site includes a monumental triumphal arch, an aqueduct, and the longest ancient road of columns ever discovered—a 400-meter processional way.`,
        imageRegenerated: '/images/sites/tyre-necropolis-regenerated.jpg',
        imageCurrent: '/images/sites/tyre-necropolis-current.jpg',
        scene: 'The City of the Dead',
        visualHighlights: ['400-meter colonnaded processional way', 'Stone sarcophagi', 'Roman triumphal arch', 'Funerary banquet scenes'],
        type: 'tomb'
      }
    ]
  },

  // 62. Sidon - Glassmaking Capital
  phoenicianSidon: {
    id: 'phoenician-sidon',
    name: 'Sidon',
    coordinates: [33.56, 35.375],
    region: 'Phoenicia (Lebanon)',
    locations: [
      {
        id: 'sidon-city',
        name: 'Sidon',
        description: 'Center of glassmaking and purple dye',
        longDescription: `Sidon was one of the oldest and wealthiest Phoenician cities, famous for glass production, purple dye, and skilled sailors. Glassblowing was perfected here around 50 BCE. The royal necropolis yielded the famous Alexander Sarcophagus.`,
        imageRegenerated: '/images/sites/sidon-regenerated.jpg',
        imageCurrent: '/images/sites/sidon-current.jpg',
        scene: 'The Glassmaking Capital',
        visualHighlights: ['Glassblowing workshops', 'Purple dye production', 'Multi-level harbor', 'Alexander Sarcophagus'],
        deity: 'Eshmun',
        type: 'city'
      }
    ]
  },

  // 63. Byblos - Egypt's Gateway
  phoenicianByblos: {
    id: 'phoenician-byblos',
    name: 'Byblos',
    coordinates: [34.12, 35.647],
    region: 'Phoenicia (Lebanon)',
    locations: [
      {
        id: 'byblos-port',
        name: 'Byblos',
        description: 'Key link between Egypt and the Levant',
        longDescription: `Byblos was the most ancient Phoenician city, with continuous habitation since 5000 BCE. It was Egypt's primary trade partner, importing cedar wood in exchange for Egyptian gold and papyrus. The Greek word for book (biblion) derives from Byblos.`,
        imageRegenerated: '/images/sites/byblos-regenerated.jpg',
        imageCurrent: '/images/sites/byblos-current.jpg',
        scene: 'Egypt\'s Gateway to the Levant',
        visualHighlights: ['Cedar wood trade', 'Egyptian-style temple', 'Royal necropolis', 'Ancient harbor'],
        deity: 'Baalat Gebal',
        type: 'city'
      }
    ]
  },

  // 64. Carthage - Rome's Rival
  phoenicianCarthage: {
    id: 'phoenician-carthage',
    name: 'Carthage',
    coordinates: [36.8528, 10.3236],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'carthage-city',
        name: 'Carthage',
        description: 'Phoenicia\'s greatest colony and Rome\'s rival',
        longDescription: `Carthage was the greatest Phoenician colony, founded by Tyre in 814 BCE. It grew into a Mediterranean empire that rivaled Rome. The city featured massive harbors—a circular military harbor for 220 warships and a rectangular commercial harbor. Rome destroyed Carthage in 146 BCE.`,
        imageRegenerated: '/images/sites/carthage-regenerated.jpg',
        imageCurrent: '/images/sites/carthage-current.jpg',
        scene: 'The Queen of the Mediterranean',
        visualHighlights: ['Circular military harbor', 'Commercial harbor', 'Tophet sacred precinct', 'Byrsa citadel'],
        deity: 'Tanit',
        type: 'city'
      },
      {
        id: 'carthage-tophet',
        name: 'The Tophet of Carthage',
        description: 'Sacred precinct of child burials',
        longDescription: `The Tophet of Carthage is a unique sacred precinct containing thousands of funerary urns with the cremated remains of infants and animals, dedicated to the gods Baal Hammon and Tanit. Over 6,000 stelae cover the site.`,
        imageRegenerated: '/images/sites/carthage-tophet-regenerated.jpg',
        imageCurrent: '/images/sites/carthage-tophet-current.jpg',
        scene: 'The Sacred Precinct of Tanit',
        visualHighlights: ['Thousands of funerary urns', 'Tanit symbol stelae', 'Baal Hammon inscriptions', 'Punic ritual vessels'],
        deity: 'Tanit',
        type: 'tomb'
      }
    ]
  },

  // 65. Motya - Sicilian Outpost
  phoenicianMotya: {
    id: 'phoenician-motya',
    name: 'Motya',
    coordinates: [37.85, 12.4667],
    region: 'Sicily (Italy)',
    locations: [
      {
        id: 'motya-island',
        name: 'Motya Island Colony',
        description: 'Phoenician island trading colony in Sicily',
        longDescription: `Motya was a wealthy Phoenician colony on an island off western Sicily, serving as a waystation between Carthage, Italy, and the Greek world. The site was destroyed by Syracuse in 397 BCE, preserving a moment of sudden abandonment.`,
        imageRegenerated: '/images/sites/motya-regenerated.jpg',
        imageCurrent: '/images/sites/motya-current.jpg',
        scene: 'The Sicilian Trading Post',
        visualHighlights: ['Island fortress', 'Causeway connection', 'Tophet sanctuary', 'Acropolis walls'],
        type: 'city'
      }
    ]
  },

  // 66. Kition - Cypriot Phoenician Hub
  phoenicianKition: {
    id: 'phoenician-kition',
    name: 'Kition (Larnaca)',
    coordinates: [34.92, 33.63],
    region: 'Cyprus',
    locations: [
      {
        id: 'kition-temples',
        name: 'Temple of Astarte at Kition',
        description: 'Major Phoenician religious center in Cyprus',
        longDescription: `Kition was a major Phoenician city-kingdom on Cyprus, established in the 9th century BCE. The city featured a large temple dedicated to Astarte (the Phoenician equivalent of Ishtar/Aphrodite) and controlled the copper trade from Cyprus.`,
        imageRegenerated: '/images/sites/kition-regenerated.jpg',
        imageCurrent: '/images/sites/kition-current.jpg',
        scene: 'The Cypriot Phoenician Hub',
        visualHighlights: ['Monumental temple entrance with sphinxes', 'Astarte cult statue', 'Massive defensive walls', 'Copper trade warehouses'],
        deity: 'Astarte',
        type: 'temple'
      }
    ]
  },

  // 67. Utica - Oldest Phoenician Colony in Africa
  phoenicianUtica: {
    id: 'phoenician-utica',
    name: 'Utica',
    coordinates: [37.0667, 10.05],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'utica-city',
        name: 'Utica',
        description: 'One of the oldest Phoenician settlements in North Africa',
        longDescription: `Utica was founded as a Phoenician colony around 1100 BCE, predating even Carthage. Its location at the mouth of the Medjerda River gave it control over trade with the African interior. Unlike Carthage, Utica survived Roman destruction and became the capital of Rome's African province.`,
        imageRegenerated: '/images/sites/utica-regenerated.jpg',
        imageCurrent: '/images/sites/utica-current.jpg',
        scene: 'The Oldest Phoenician Colony',
        visualHighlights: ['1100 BCE foundation', 'Purple dye workshops', 'Phoenician houses', 'Roman-era forum', 'Maison des Masques mosaics'],
        type: 'city'
      }
    ]
  },

  // 68. Tharros - Sardinian Phoenician Port
  phoenicianTharros: {
    id: 'phoenician-tharros',
    name: 'Tharros',
    coordinates: [39.87, 8.44],
    region: 'Sardinia (Italy)',
    locations: [
      {
        id: 'tharros-city',
        name: 'Tharros',
        description: 'Phoenician-Punic port on the Gulf of Oristano',
        longDescription: `Tharros was a Phoenician colony established on the Gulf of Oristano in western Sardinia in the 8th century BCE. The site includes a Tophet sanctuary, a necropolis with hypogeum tombs, and later Roman structures including baths with mosaic floors.`,
        imageRegenerated: '/images/sites/tharros-regenerated.jpg',
        imageCurrent: '/images/sites/tharros-current.jpg',
        scene: 'The Sardinian Phoenician Port',
        visualHighlights: ['Tophet sanctuary with stelae', 'Hypogeum tombs carved into rock', 'Phoenician harbor with breakwaters', 'Roman aqueduct and baths'],
        deity: 'Eshmun',
        type: 'city'
      }
    ]
  },

  // 69. Amrit - Sanctuary of Melqart
  phoenicianAmrit: {
    id: 'phoenician-amrit',
    name: 'Amrit (Marathus)',
    coordinates: [34.84, 35.91],
    region: 'Phoenicia (Syria)',
    locations: [
      {
        id: 'amrit-temple',
        name: 'Amrit',
        description: 'Phoenician sanctuary with unique rock-cut architecture',
        longDescription: `Amrit was a Phoenician city with a unique sanctuary dedicated to Melqart and Eshmun. The site's main structure is the "Ma'abed," a hypaethral (roofless) sanctuary built of massive limestone blocks, surrounded by a sacred enclosure.`,
        imageRegenerated: '/images/sites/amrit-regenerated.jpg',
        imageCurrent: '/images/sites/amrit-current.jpg',
        scene: 'The Sanctuary of Melqart',
        visualHighlights: ['Ma\'abed hypaethral sanctuary', 'Central sacred pool', 'Colonnade of standing columns', 'Funerary tower (Tomb of Amrit)'],
        deity: 'Melqart',
        type: 'temple'
      }
    ]
  },

  // 70. Sarepta - Industrial Center
  phoenicianSarepta: {
    id: 'phoenician-sarepta',
    name: 'Sarepta',
    coordinates: [33.45, 35.3],
    region: 'Phoenicia (Lebanon)',
    locations: [
      {
        id: 'sarepta-workshops',
        name: 'Sarepta',
        description: 'Industrial center for Phoenician crafts',
        longDescription: `Sarepta (modern Sarafand) was a major industrial center for Phoenician crafts, not a major urban capital like Tyre or Sidon. Excavations revealed workshops for purple dye, metalworking, pottery, and olive oil production. Sarepta is uniquely important as the only Phoenician city excavated in its entirety (James Pritchard, 1969-1974).`,
        imageRegenerated: '/images/sites/sarepta-regenerated.jpg',
        imageCurrent: '/images/sites/sarepta-current.jpg',
        scene: 'The Industrial Heart of Phoenicia',
        visualHighlights: [
          'Purple dye production facilities with crushed murex shells',
          'Metalworking workshops with bronze and iron artifacts',
          'Pottery kilns with mass-produced amphorae',
          'Phoenician sanctuary inscriptions on stone',
          'Olive oil presses and storage jars'
        ],
        deity: 'Tanit',
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 6: BABYLONIANS (71-80) ==========
export const babylonianSites: Record<string, Site> = {
  // 71. Babylon - The Great Capital
  babylon: {
    id: 'babylon',
    name: 'Babylon',
    coordinates: [32.5416, 44.4146],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'babylon-city',
        name: 'The City of Babylon',
        description: 'Imperial capital and cultural center of Mesopotamia',
        longDescription: `Babylon was the greatest city of ancient Mesopotamia, its name evoking images of grandeur, decadence, and power. The city sprawled across both banks of the Euphrates River, protected by massive double walls wide enough for chariot racing (the outer wall, Imgur-Enlil, measured 8 km long with 120 towers). Under Nebuchadnezzar II (604-562 BCE), Babylon reached its peak, with the Etemenanki ziggurat (the Tower of Babel), the Ishtar Gate, and the legendary Hanging Gardens—one of the Seven Wonders of the Ancient World.

The city was divided into 10 districts, with the royal palace (the "Hanging Gardens" possibly located here) and the sacred precinct of Marduk (Esagila) dominating the center. The Akitu (New Year) festival was the most important religious event, when the king's right to rule was ritually renewed and the statue of Marduk was paraded through the city along the Processional Way.

Babylon fell to the Persian emperor Cyrus the Great in 539 BCE, who treated the city and its god respectfully, earning Babylonian loyalty. Alexander the Great planned to make Babylon his eastern capital but died in the palace of Nebuchadnezzar in 323 BCE.`,
        imageRegenerated: '/images/sites/babylon-regenerated.jpg',
        imageCurrent: '/images/sites/babylon-current.jpg',
        scene: 'The Glorious City of Babylon',
        visualHighlights: ['Massive double walls wide enough for chariots', 'Euphrates River bridges with drawbridges', 'Ishtar Gate processional way with glazed bricks', 'Etemenanki ziggurat (Tower of Babel)', 'Hanging Gardens terraced with exotic plants'],
        deity: 'Marduk',
        type: 'city'
      }
    ]
  },

  // 72. Ishtar Gate - The Blue Gateway
  ishtarGate: {
    id: 'ishtar-gate',
    name: 'Ishtar Gate',
    coordinates: [32.543, 44.418],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'ishtar-gate-structure',
        name: 'The Ishtar Gate',
        description: 'Iconic blue-glazed ceremonial gate of Babylon',
        longDescription: `The Ishtar Gate was Babylon's most magnificent structure, a blue-glazed brick archway decorated with over 120 molded lions (symbols of Ishtar), dragons (sirrush, the sacred animal of Marduk, with a snake head, lion body, and scorpion tail), and aurochs (symbols of the weather god Adad) in alternating rows. The gate's glazed bricks shimmer in the sun, their cobalt blue lapis lazuli color symbolizing divine presence.

The gate was originally 14 meters high, with a vaulted ceiling and double doors of cedar. The Processional Way, leading through the gate for half a mile, was used for the New Year's (Akitu) festival when the statue of Marduk was paraded from Ezida (Nabu's temple) to the Akitu temple outside the city.

Nebuchadnezzar II inscribed his name on every brick, demonstrating his role as Babylon's greatest builder and his devotion to Marduk. The reconstructed gate in Berlin's Pergamon Museum (since 1930) allows visitors to experience the overwhelming impact of approaching this monument.`,
        imageRegenerated: '/images/sites/ishtar-gate-regenerated.jpg',
        imageCurrent: '/images/sites/ishtar-gate-current.jpg',
        scene: 'The Gate of the Goddess Ishtar',
        visualHighlights: ['Blue-glazed brickwork with iridescent shine', 'Lion processional reliefs with yellow manes', 'Dragon (sirrush) figures with snake heads', 'Inscribed bricks of Nebuchadnezzar', 'Processional Way with stone pavement and inscriptions'],
        deity: 'Ishtar',
        type: 'monument'
      }
    ]
  },

  // 73. Etemenanki - The Tower of Babel
  etemenanki: {
    id: 'etemenanki',
    name: 'Etemenanki',
    coordinates: [32.536, 44.421],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'etemenanki-ziggurat',
        name: 'Etemenanki',
        description: 'Massive stepped tower linked to the Tower of Babel',
        longDescription: `Etemenanki ("House of the Foundation of Heaven and Earth") was the great ziggurat of Babylon, a seven-tiered tower rising 91 meters (300 feet) above the city. Its steps were painted in different colors—white, black, red, blue, orange, silver, and gold—each representing a planetary deity and a celestial level.

The shrine of Marduk at the summit was accessible only to priests, who entered a chamber containing a golden couch and table for the god. The ziggurat's square base (91 x 91 meters) covered an area the size of a football field, and its three massive staircases (each 60 steps) converged at a gate at the first level.

The structure's name and description likely inspired the biblical Tower of Babel story (Genesis 11). When Alexander the Great conquered Babylon, he ordered the ziggurat restored, but his death halted the project (323 BCE). Much of the ruined ziggurat's bricks were later used for building in Baghdad (10th-12th centuries CE), but its foundations remain, and the Nebuchadnezzar inscription describing his building work has been found.`,
        imageRegenerated: '/images/sites/etemenanki-regenerated.jpg',
        imageCurrent: '/images/sites/etemenanki-current.jpg',
        scene: 'The House of Heaven and Earth',
        visualHighlights: ['Seven colored tiers (white, black, red, blue, orange, silver, gold)', 'Summit temple of Marduk with golden furnishings', 'Three converging staircases with 60 steps each', 'Cella with golden couch and table for the god', 'Inscribed foundation cylinders of Nebuchadnezzar'],
        deity: 'Marduk',
        type: 'temple'
      }
    ]
  },

  // 74. Borsippa - Temple of Nabu
  borsippa: {
    id: 'borsippa',
    name: 'Borsippa',
    coordinates: [32.3915, 44.3417],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'borsippa-ziggurat',
        name: 'The Ziggurat of Borsippa',
        description: 'Religious center of the god Nabu',
        longDescription: `Borsippa was Babylon's sister city, famous for its massive ziggurat dedicated to the god Nabu (son of Marduk). The ziggurat's ruins still rise dramatically from the plain (52 meters), its core visible after outer casing was stripped—the best-preserved ziggurat in Iraq.

Nabu was god of writing, wisdom, and scribes, making Borsippa a center for scribal training and literary production. Clay tablets found here include literary texts (including a version of the Epic of Gilgamesh), astronomical observations (including detailed planetary records), medical prescriptions, and administrative records of the temple economy.

The ziggurat's distinctive shape demonstrates Mesopotamian construction techniques at their peak. The site was believed to be where Nabu wrote humanity's destinies on the Tablet of Destinies each New Year, determining fates for the coming year. The ziggurat was restored by Nebuchadnezzar II, who inscribed his name on its bricks.`,
        imageRegenerated: '/images/sites/borsippa-regenerated.jpg',
        imageCurrent: '/images/sites/borsippa-current.jpg',
        scene: 'The Temple of Nabu the Scribe',
        visualHighlights: ['Standing ziggurat ruins 52 meters high', 'Nabu temple complex with scribal school', 'Clay tablet library with astronomical records', 'Babylonian religious center with planetary deities', 'Inscribed cylinder of Nebuchadnezzar'],
        deity: 'Nabu',
        type: 'temple'
      }
    ]
  },

  // 75. Sippar - City of Shamash
  sippar: {
    id: 'sippar',
    name: 'Sippar',
    coordinates: [33.058, 44.252],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'sippar-temple',
        name: 'Sippar',
        description: 'City dedicated to the sun god Shamash',
        longDescription: `Sippar was the center of sun god Shamash worship in Babylonia, with occupation stretching back to the 4th millennium BCE. The Ebabbara temple ("Shining House") housed the most important cult statue of Shamash, consulted for oracles and legal decisions as god of justice.

The temple library contained thousands of clay tablets, including the famous sun god tablet (c. 860 BCE) showing Shamash on his throne receiving worship from a king (Nabu-apla-iddina). Sippar was also where the Nabonidus Cylinder was found, describing the last Babylonian king's restoration of temples and his archaeological excavations—the earliest known archaeological activity in history.

As god of justice, Shamash's city attracted those seeking legal judgments. The temple archive preserved property records and contracts spanning millennia, including marriage contracts, real estate transactions, commercial loans, and inheritance disputes—a continuous archive from the Old Babylonian to Neo-Babylonian periods (c. 2000-300 BCE).`,
        imageRegenerated: '/images/sites/sippar-regenerated.jpg',
        imageCurrent: '/images/sites/sippar-current.jpg',
        scene: 'The City of the Sun God',
        visualHighlights: ['Ebabbara temple with Shamash cult statue', 'Sun god tablet showing king before Shamash', 'Nabonidus excavation pits (earliest archaeology)', 'Tablet library with thousands of legal documents', 'Royal inscriptions on cylinder seals'],
        deity: 'Shamash',
        type: 'temple'
      }
    ]
  },

  // 76. Ur - The Ancient Sumerian City
  ur: {
    id: 'ur',
    name: 'Ur',
    coordinates: [30.962, 46.104],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'ur-city',
        name: 'The City of Ur',
        description: 'Ancient Sumerian city of Abraham',
        longDescription: `Ur was one of the most ancient and important cities of Mesopotamia, dating to 3800 BCE and occupied for over 4,000 years. The city's great ziggurat dedicated to the moon god Nanna (Sin) dominated the skyline, its three massive staircases (100 steps each) linking earth and heaven, still standing today after restoration by Saddam Hussein.

The Royal Cemetery of Ur (2600-2500 BCE) excavated by Leonard Woolley (1922-1934) yielded spectacular treasures—the gold helmet of Meskalamdug (with repoussé beading), the Standard of Ur (shell and lapis mosaic showing war and peace scenes), Queen Puabi's elaborate headdress (made of lapis lazuli, gold, and carnelian), elaborate lyres and harps with golden bull heads, and evidence of human sacrifice (retainers buried with their rulers, 74 bodies in the "Great Death Pit").

Abraham is traditionally associated with Ur (Genesis 11:31) before his journey to Canaan. The city was a major center of moon worship, with temples, administrative buildings, and residential quarters. Ur's harbor on the Euphrates connected it to Persian Gulf trade.`,
        imageRegenerated: '/images/sites/ur-regenerated.jpg',
        imageCurrent: '/images/sites/ur-current.jpg',
        scene: 'The Ancient City of Abraham',
        visualHighlights: ['Ziggurat of Nanna with three staircases', 'Royal Cemetery gold artifacts (helmet, jewelry)', 'Standard of Ur war and peace mosaic', 'Queen Puabi\'s headdress and jewelry', 'Great Death Pit with human sacrifices'],
        deity: 'Nanna',
        type: 'city'
      },
      {
        id: 'ur-temple',
        name: 'Temple of Nanna at Ur',
        description: 'Moon god sanctuary at the ziggurat base',
        longDescription: `The temple precinct at the base of the ziggurat contained Nanna's main sanctuary, where rituals were performed on behalf of the city. The temple complex included the Giparu (residence of the high priestess, often a princess), the É-dub-lal-mah (administrative building with large archive), and housing for priests and temple workers.

Excavators found numerous clay tablets recording temple offerings, personnel lists, and economic transactions, providing a detailed picture of temple economy. The temple owned land, managed herds, employed craftsmen, and distributed food, functioning as the city's economic center.

The temple's association with Abraham, whose father Terah was according to tradition a priest at the moon temple, connects Ur to biblical history. The moon god Nanna was known as Sin in Akkadian, and his cult influenced later Arabian moon worship reflected in pre-Islamic symbols.`,
        imageRegenerated: '/images/sites/ur-temple-regenerated.jpg',
        imageCurrent: '/images/sites/ur-temple-current.jpg',
        scene: 'The Moon God\'s Sanctuary',
        visualHighlights: ['Nanna temple cella with cult statue base', 'Priests in ritual white robes', 'Offering tables with bread and oil', 'Clay tablet archives of temple accounts', 'Moon crescent symbols carved on walls'],
        deity: 'Nanna',
        type: 'temple'
      }
    ]
  },

  // 77. Nineveh - Capital of Assyria
  nineveh: {
    id: 'nineveh',
    name: 'Nineveh',
    coordinates: [36.359, 43.152],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'nineveh-palace',
        name: 'Palace of Sennacherib',
        description: 'Assyrian capital with the Library of Ashurbanipal',
        longDescription: `Nineveh was the capital of the Neo-Assyrian Empire under Sennacherib (705-681 BCE), who made it "a city of 80 kilometers circumference" (actually 12 km). The city's walls had 15 gates, and the palace ("the Palace Without Rival") covered 500 x 250 meters with 80 rooms, decorated with alabaster reliefs of lion hunts and military campaigns.

The Library of Ashurbanipal (7th century BCE) contained over 30,000 clay tablets in multiple languages—including the Epic of Gilgamesh (Tablet 11 contains the flood story), astronomical texts (planetary observations), medical texts (surgical procedures), and lexical lists (dictionaries for scribal training). The library is the largest surviving cuneiform archive.

The city was destroyed in 612 BCE by a coalition of Babylonians, Medes, and Scythians. The prophet Nahum's oracle "Woe to the bloody city" (Nahum 3:1) describes its fall. The site's mounds (Kuyunjik and Nebi Yunus) are being excavated, but recent destruction by ISIS (2014-2017) damaged the gates and walls.`,
        imageRegenerated: '/images/sites/nineveh-regenerated.jpg',
        imageCurrent: '/images/sites/nineveh-current.jpg',
        scene: 'The Assyrian Capital',
        visualHighlights: ['Palace of Sennacherib with 80 rooms',
        'Library of Ashurbanipal clay tablets (Gilgamesh epic)',
        'Lion hunt reliefs in alabaster',
        '15 city gates with lamassu guardian statues',
        'Aqueduct at Jerwan (earliest known)'],
        deity: 'Ashur',
        type: 'city'
      }
    ]
  },

  // 78. Nimrud - Assyrian Military Capital
  nimrud: {
    id: 'nimrud',
    name: 'Nimrud (Kalhu)',
    coordinates: [36.098, 43.329],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'nimrud-palace',
        name: 'Palace of Ashurnasirpal II',
        description: 'Assyrian military capital with Northwest Palace reliefs',
        longDescription: `Nimrud (biblical Calah) was the Assyrian capital under Ashurnasirpal II (883-859 BCE), who built the Northwest Palace (200 x 130 meters) decorated with over 2,000 alabaster wall reliefs showing military campaigns, hunting scenes, and the king with his attendants (the "Standard Inscription" repeated on every slab). The palace's entrance was flanked by lamassu (winged bulls with human heads).

The site also included the ziqqurat (60 meters high), the Temple of Ninurta (god of war and agriculture), and the "Fort Shalmaneser" (a military arsenal storing chariots, weapons, and tribute). The Nimrud Ivories (over 1,000 carved ivory objects) were found in the palace, showing Phoenician, Syrian, and Egyptian influence—evidence of Assyria's far-reaching trade.

The city was destroyed in 612 BCE along with Nineveh. The site was heavily looted after the 2003 Iraq War, and ISIS destroyed the ziqqurat and palace in 2015, but some reliefs were rescued.`,
        imageRegenerated: '/images/sites/nimrud-regenerated.jpg',
        imageCurrent: '/images/sites/nimrud-current.jpg',
        scene: 'The Assyrian Military Arsenal',
        visualHighlights: ['Northwest Palace with 2,000 alabaster reliefs', 'Lamassu winged bulls at palace gates', 'Ziqqurat of Nimrud (60 meters high)', 'Nimrud Ivories (carved ivory objects)', 'Fort Shalmaneser military arsenal'],
        deity: 'Ninurta',
        type: 'city'
      }
    ]
  },

  // 79. Dur-Sharrukin - Sargon II's Capital
  durSharrukin: {
    id: 'dur-sharrukin',
    name: 'Dur-Sharrukin (Khorsabad)',
    coordinates: [36.509, 43.229],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'sargon-palace',
        name: 'Palace of Sargon II',
        description: 'The perfectly planned Assyrian capital',
        longDescription: `Dur-Sharrukin ("Fortress of Sargon") was built by Sargon II (721-705 BCE) as a new capital, constructed in 10 years on a virgin site (1.75 square kilometers). The city was perfectly planned—a square oriented to the cardinal points, with walls 24 meters thick, seven gates each guarded by lamassu, and a palace that covered 10 hectares (200 rooms).

The palace's facade was decorated with glazed brick reliefs showing the king and his court, lions, and sacred trees, now in the Louvre Museum (the first Assyrian palace excavated systematically, 1843-1844). The site was abandoned after Sargon's death (in battle, 705 BCE), preserving its plan as a snapshot of Assyrian urban design.

The palace reliefs show Sargon receiving tribute from Egypt (probably "Greek" Cyprus), the earliest depiction of Egyptians in Assyrian art. The city's abandonment also preserved the unfinished state—with workmen's tools and brick stamps still at the site.`,
        imageRegenerated: '/images/sites/dur-sharrukin-regenerated.jpg',
        imageCurrent: '/images/sites/dur-sharrukin-current.jpg',
        scene: 'The Perfectly Planned Capital',
        visualHighlights: ['Square city plan oriented to cardinal points', 'Glazed brick reliefs of king and lions', 'Palace of 10 hectares (200 rooms)', 'Lamassu at seven city gates', 'Unfinished state with workmen\'s tools'],
        deity: 'Ashur',
        type: 'city'
      }
    ]
  },

  // 80. Eridu - The First City
  eridu: {
    id: 'eridu',
    name: 'Eridu',
    coordinates: [30.815, 45.995],
    region: 'Mesopotamia (Iraq)',
    locations: [
      {
        id: 'eridu-temple',
        name: 'Temple of Enki at Eridu',
        description: 'The earliest known city in southern Mesopotamia',
        longDescription: `Eridu (Tell Abu Shahrain) is the earliest known city in southern Mesopotamia, founded c. 5400 BCE and continuously occupied for over 3,000 years. The Sumerian King List begins: "After kingship descended from heaven, the kingship was in Eridu." The city was the cult center of Enki (Ea), god of wisdom, water, and creation.

The temple complex ("House of the Aquifer") consists of 18 layers (Levels I-XVIII), with the earliest shrine (Level XVIII) a simple 3 x 4 meter room with an offering table and fish bones—showing continuity of Enki's cult for millennia. The later temples (Levels VI-XVI) were built on the same plan, each enlarging the previous, establishing the tradition of temple towers.

Eridu declined when the Euphrates shifted course (c. 2000 BCE), but its tradition as the "first city" influenced Mesopotamian thought. The site also includes a ziqqurat (Ur III period, c. 2000 BCE) and a cemetery with tombs containing Ubaid pottery (the distinctive greenish-black painted ware associated with the earliest urban period).`,
        imageRegenerated: '/images/sites/eridu-regenerated.jpg',
        imageCurrent: '/images/sites/eridu-current.jpg',
        scene: 'The First City of Sumer',
        visualHighlights: ['18 levels of temple construction (c. 5400-2000 BCE)', 'Enki temple "House of the Aquifer"', 'Offering tables with fish bones', 'Ziqqurat of Eridu (Ur III period)', 'Ubaid painted pottery in cemetery'],
        deity: 'Enki',
        type: 'temple'
      }
    ]
  }
};
// ========== SECTION 7: HEBREWS/ISRAELITES (81-90) ==========
export const hebrewSites: Record<string, Site> = {
  // 81. Jerusalem - City of David
  jerusalem: {
    id: 'jerusalem',
    name: 'Jerusalem',
    coordinates: [31.7683, 35.2137],
    region: 'Judah/Canaan (Israel)',
    locations: [
      {
        id: 'jerusalem-city',
        name: 'Jerusalem',
        description: 'Capital of the United Kingdom of Israel',
        longDescription: `Jerusalem was the capital of the united Kingdom of Israel under King David (c. 1000 BCE) and later the capital of the southern Kingdom of Judah. The City of David, the oldest settled area, features the Gihon Spring—Jerusalem's water source for millennia, protected by massive Canaanite towers (the "Spring Tower"). David captured the city from the Jebusites (2 Samuel 5:6-10) and made it his capital, bringing the Ark of the Covenant here.

The city was destroyed by Babylon in 586 BCE (2 Kings 25), rebuilt by returning exiles under Nehemiah (c. 445 BCE), and later expanded by Herod the Great. Jerusalem is mentioned over 800 times in the Bible, and the Psalms describe it as "the city of our God" (Psalm 48:1). The city's walls were rebuilt in the 16th century CE by Suleiman the Magnificent, creating the Old City we see today.`,
        imageRegenerated: '/images/sites/jerusalem-regenerated.jpg',
        imageCurrent: '/images/sites/jerusalem-current.jpg',
        scene: 'The Golden City on the Hill',
        visualHighlights: ['City of David ridge with stepped stone structure', 'Temple Mount platform (Herodian expansion)', 'Gihon Spring fortifications and tunnels', 'Valley of Hinnom (Gehenna)', 'Defensive walls with towers and gates'],
        deity: 'Yahweh',
        type: 'city'
      },
      {
        id: 'western-wall',
        name: 'The Western Wall (Kotel)',
        description: 'Last remnant of the Second Temple complex',
        longDescription: `The Western Wall (HaKotel HaMa'aravi) is the last remaining retaining wall of the Second Temple platform, built by Herod the Great (c. 19 BCE). While not part of the Temple itself (the Temple was destroyed by Romans in 70 CE), it is Judaism's holiest prayer site. The massive stones, some weighing over 500 tons (the "Western Stone"), demonstrate Herod's engineering ambition. The lower courses are Herodian with their distinctive margins (carved borders), while upper courses date to later periods (Umayyad, Mamluk, Ottoman). For centuries, Jews prayed at this wall, mourning the Temple's destruction—giving it the name "Wailing Wall" (Kotel HaMa'aravi). The wall's stones are worn smooth by countless hands touching them in prayer, and crevices between stones hold thousands of prayer notes. The Western Wall Plaza was created after the 1967 Six-Day War.`,
        imageRegenerated: '/images/sites/western-wall-regenerated.jpg',
        imageCurrent: '/images/sites/western-wall-current.jpg',
        scene: 'The Last Remnant of the Temple',
        visualHighlights: ['Massive Herodian stone courses with margins', 'Worn smooth stone surface from centuries of touch', 'Prayer notes in stone crevices', 'Traditional prayer sections (men and women)', 'Underground Western Wall tunnels'],
        deity: 'Yahweh',
        type: 'temple'
      }
    ]
  },

  // 82. Temple Mount - Solomon's Temple
  templeMount: {
    id: 'temple-mount',
    name: 'Temple Mount (Har HaBayit)',
    coordinates: [31.777, 35.235],
    region: 'Judah/Canaan (Israel)',
    locations: [
      {
        id: 'solomons-temple',
        name: 'Solomon\'s Temple (First Temple)',
        description: 'The holiest site in ancient Israel',
        longDescription: `The First Temple, built by King Solomon around 957 BCE (1 Kings 5-6), was the center of Israelite worship, housing the Ark of the Covenant. The temple was a magnificent structure of cedar (from Lebanon), gold, and stone, built with the help of Phoenician craftsmen sent by King Hiram of Tyre. The temple's layout followed a three-part plan: the Ulam (porch), the Hekhal (main hall), and the Holy of Holies (Debir), which contained the Ark and could only be entered once yearly by the High Priest on Yom Kippur (Leviticus 16). Two bronze pillars named Jachin ("He will establish") and Boaz ("In strength") flanked the entrance (1 Kings 7:21). The Molten Sea, a large bronze basin supported by twelve oxen, held water for ritual purification (1 Kings 7:23-26). Bronze and gold furnishings, including the Menorah (seven-branched lampstand) and Table of Showbread (12 loaves), completed the temple's sacred equipment. The temple was destroyed by Nebuchadnezzar II in 586 BCE (2 Kings 25:8-21).`,
        imageRegenerated: '/images/sites/temple-mount-regenerated.jpg',
        imageCurrent: '/images/sites/temple-mount-current.jpg',
        scene: 'The First Temple of Solomon',
        visualHighlights: ['Two bronze pillars Jachin and Boaz at entrance', 'Holy of Holies with Ark of the Covenant and cherubim', 'Molten Sea on twelve oxen for purification', 'Golden Menorah (seven-branched lampstand)', 'Cedar paneling with gold overlay'],
        deity: 'Yahweh',
        type: 'temple'
      },
      {
        id: 'second-temple',
        name: 'Herod\'s Temple (Second Temple)',
        description: 'Massive temple complex built by Herod the Great',
        longDescription: `Herod the Great expanded the Second Temple into a vast complex covering 144,000 square meters (36 acres), with the Temple building itself rising 50 meters (1 Kings 6:2 had dimensions for Solomon's Temple, Herod's was larger). The project employed 10,000 workers and trained 1,000 priests as masons and carpenters. The complex included multiple courtyards with increasing restrictions: Court of the Gentiles (open to all), Court of Women (Jewish women, containing the "Treasury" where Jesus observed the widow's mite, Mark 12:41-44), Court of Israelites (Jewish men), and Court of Priests (priests only). The Holy of Holies remained empty, the Ark having been lost (probably during the Babylonian destruction). The temple was the center of Jewish pilgrimage for the three festivals (Passover, Shavuot, Sukkot), with thousands of pilgrims ascending to Jerusalem. The Roman general Titus destroyed the temple in 70 CE during the Great Jewish Revolt, an event still mourned on Tisha B'Av.`,
        imageRegenerated: '/images/sites/second-temple-regenerated.jpg',
        imageCurrent: '/images/sites/second-temple-current.jpg',
        scene: 'Herod\'s Great Temple',
        visualHighlights: ['Massive retaining walls with huge stones ("Western Stone" 500 tons)', 'Multiple courtyard levels with increasing restrictions', 'Royal Stoa (basilica) on southern side', 'Pilgrim traffic entering through Hulda Gates (double and triple)', 'Roman siege works ending destruction in 70 CE'],
        deity: 'Yahweh',
        type: 'temple'
      }
    ]
  },

  // 83. City of David - Ancient Jerusalem
  cityDavid: {
    id: 'city-david',
    name: 'City of David (Ir David)',
    coordinates: [31.773, 35.236],
    region: 'Judah/Canaan (Israel)',
    locations: [
      {
        id: 'david-kingdom',
        name: 'City of David',
        description: 'Original settlement core of Jerusalem',
        longDescription: `The City of David is the original hilltop settlement that became Jerusalem, a narrow ridge south of the Temple Mount protected by steep valleys (the Tyropoeon Valley to the west, Kidron Valley to the east). King David captured the city from the Jebusites (2 Samuel 5:6-10) and made it his capital, building a palace and bringing the Ark of the Covenant here. The Gihon Spring, at the base of the hill, provided Jerusalem's water through a system of tunnels. Hezekiah's Tunnel (2 Kings 20:20, 2 Chronicles 32:30), carved through solid rock in the late 8th century BCE, rerouted the spring's water inside the walls to protect it from Assyrian siege (the tunnel is 533 meters long, with a 0.06% gradient, still carrying water today). The Stepped Stone Structure, a massive 20-meter-high retaining wall, supported David's palace complex. The Large Stone Structure above it, discovered in 2005, may be the remains of David's palace, with pottery dating to the 10th century BCE. The "Warren's Shaft" (a vertical shaft accessing the spring) was the city's original water system, used by David's soldiers to capture the city.`,
        imageRegenerated: '/images/sites/city-david-regenerated.jpg',
        imageCurrent: '/images/sites/city-david-current.jpg',
        scene: 'David\'s Capital City',
        visualHighlights: ['Stepped Stone Structure supporting palace', 'Area G (House of Ahiel) with four-room Israelite house', 'Gihon Spring fortifications (Spring Tower)', 'Hezekiah\'s Tunnel with water flowing', 'Pool of Siloam steps (John 9: Jesus heals blind man)'],
        type: 'city'
      }
    ]
  },

  // 84. Hebron - City of the Patriarchs
  hebron: {
    id: 'hebron',
    name: 'Hebron (Hevron)',
    coordinates: [31.525, 35.095],
    region: 'Judah/Canaan (West Bank)',
    locations: [
      {
        id: 'hebron-cave',
        name: 'Cave of Machpelah',
        description: 'Tomb of the Patriarchs and Matriarchs',
        longDescription: `Hebron is one of the most ancient cities in the Near East (Numbers 13:22 says it was built seven years before Zoan in Egypt, c. 1700 BCE), traditionally associated with Abraham, Isaac, and Jacob. The Cave of Machpelah (Genesis 23), where Abraham purchased a burial plot from Ephron the Hittite for 400 shekels of silver, is the traditional tomb of the patriarchs and matriarchs—Abraham and Sarah, Isaac and Rebekah, Jacob and Leah. The massive Herodian structure built over the cave (the "Herodian enclosure," similar to the Temple Mount enclosure, c. 20 BCE) still stands, with cenotaphs (memorial tombs) in the interior and the actual burial cave below, inaccessible. Abraham lived in Hebron after separating from Lot (Genesis 13:18), receiving divine promises regarding his descendants (Genesis 15). Later, David was crowned king of Judah at Hebron before capturing Jerusalem (2 Samuel 2:1-4), ruling from Hebron for seven and a half years. The site is now the Ibrahimi Mosque (the "Mosque of Abraham"), sacred to both Jews and Muslims.`,
        imageRegenerated: '/images/sites/hebron-regenerated.jpg',
        imageCurrent: '/images/sites/hebron-current.jpg',
        scene: 'The City of the Patriarchs',
        visualHighlights: ['Herodian enclosure walls over the cave (similar to Temple Mount)', 'Cenotaphs of the patriarchs and matriarchs', 'Medieval Mamluk mosque conversion (Ibrahimi Mosque)', 'Abraham\'s traditional oak tree at Mamre (Genesis 18)', 'Ancient city walls of Jebusite Hebron'],
        type: 'city'
      }
    ]
  },

  // 85. Mount Sinai - The Giving of the Law
  mountSinai: {
    id: 'mount-sinai',
    name: 'Mount Sinai (Har Sinai, Jebel Musa)',
    coordinates: [28.539, 33.973],
    region: 'Sinai Peninsula (Egypt)',
    locations: [
      {
        id: 'sinai-mountain',
        name: 'Mount Sinai',
        description: 'Where Moses received the Ten Commandments',
        longDescription: `Mount Sinai (Har Sinai, Jebel Musa, "Mountain of Moses") is traditionally identified with the mountain where Moses received the Ten Commandments (Exodus 19-20). The mountain rises dramatically from the surrounding desert (2,285 meters), its red granite peak visible from miles away. According to tradition, the Israelites camped here for nearly a year after the Exodus (Exodus 19:1), receiving the law and building the Tabernacle—the portable sanctuary that accompanied them through the wilderness. The mountain's remote location, harsh environment, and striking appearance make it a fitting site for divine revelation. The "Burning Bush" (Exodus 3) is traditionally located in the courtyard of Saint Catherine's Monastery, believed to be the descendant of the original bush. The monastery, founded by Emperor Justinian (527-565 CE), contains one of the world's oldest continuously operating libraries, with manuscripts including the Codex Sinaiticus (4th century Greek Bible, now in the British Museum). The 3,750 "Steps of Repentance" (penitential stairway to the summit) were carved by a monk. Elijah also visited Mount Horeb (another name for Sinai, 1 Kings 19:8).`,
        imageRegenerated: '/images/sites/mount-sinai-regenerated.jpg',
        imageCurrent: '/images/sites/mount-sinai-current.jpg',
        scene: 'The Mountain of Divine Revelation',
        visualHighlights: ['Red granite peak with 3,750 Steps of Repentance', 'Greek Orthodox chapel at summit (Chapel of the Holy Trinity)', 'Saint Catherine\'s Monastery fortress walls', 'Burning Bush chapel (traditional location)', 'Ancient manuscript library (Codex Sinaiticus)'],
        deity: 'Yahweh',
        type: 'monument'
      }
    ]
  },

  // 86. Lachish - Fortress of Judah
  lachish: {
    id: 'lachish',
    name: 'Lachish (Tel Lachish)',
    coordinates: [31.565, 34.848],
    region: 'Judah/Canaan (Israel)',
    locations: [
      {
        id: 'lachish-fortress',
        name: 'Lachish',
        description: 'Second most important city in Judah',
        longDescription: `Lachish was the second most important city in Judah after Jerusalem (Joshua 10:3), guarding the approaches to the capital through the Shephelah (lowland). The city's massive fortifications, including a double wall and siege ramp, testify to its strategic importance. The Assyrian siege of 701 BCE is documented both in the Bible (2 Kings 18-19, Isaiah 36-37) and in the famous Lachish Reliefs from Nineveh (now in the British Museum), showing the siege ramp, battering rams, and captives being deported. The siege ramp at Lachish is the only surviving Assyrian siege ramp in the Levant. The Lachish Letters (ostraca found in the guardroom, 18 letters) record the final days before Nebuchadnezzar's destruction in 588 BCE (Jeremiah 34:7). They contain desperate messages: "We are watching for the signals of Lachish... for we cannot see Azekah" (Letter 4)—Azekah had already fallen (Jeremiah 34:7). These letters provide a chilling eyewitness account of Jerusalem's final fall (2 Kings 25). The site also includes a "Solar Shrine" (Iron Age II cult center) with horses and chariots, perhaps related to the reforms of Josiah (2 Kings 23).`,
        imageRegenerated: '/images/sites/lachish-regenerated.jpg',
        imageCurrent: '/images/sites/lachish-current.jpg',
        scene: 'The Fortress of Judah',
        visualHighlights: [
          'Assyrian siege ramp still visible on city south side',
          'Palace-fort residency with eight-chambered gate',
          'Lachish Letters ostraca (18 letters in museum)',
          'Double defensive walls with gates',
          'Solar shrine with horse figurines (possible Josiah reforms)'
        ],
        type: 'city'
      }
    ]
  },

  // 87. Beersheba - Abraham's Well
  beersheba: {
    id: 'beersheba',
    name: 'Beersheba',
    coordinates: [31.244, 34.841],
    region: 'Judah/Canaan (Israel)',
    locations: [
      {
        id: 'abraham-well',
        name: 'Well of Abraham',
        description: 'Where Abraham made a covenant with Abimelech',
        longDescription: `Beersheba ("Well of the Oath" or "Well of the Seven") is where Abraham made a covenant with Abimelech, king of the Philistines, giving the city its name (Genesis 21:22-34). Abraham dug a well here (still visible) and planted a tamarisk tree. Isaac also dug wells here, but Philistines stopped them up (Genesis 26). The city marked the southern boundary of Israel: "from Dan to Beersheba" (Judges 20:1, 1 Samuel 3:20). The site (Tel Be'er Sheva) contains a well 69 meters deep, possibly the original well of Abraham (though the current well is from later periods). The excavated Israelite city (Iron Age II, 8th century BCE) has a casemate wall, a four-room house, a "horned altar" (possible cultic reform evidence), and a water system drawing from the well. The city was destroyed by Sennacherib (701 BCE, 2 Kings 18) and rebuilt later.`,
        imageRegenerated: '/images/sites/beersheba-regenerated.jpg',
        imageCurrent: '/images/sites/beersheba-current.jpg',
        scene: 'The Well of the Oath',
        visualHighlights: ['Deep well (69 meters, possibly Abraham\'s)', 'Four-room Israelite house (Iron Age II)', 'Horned altar with possible reform evidence', 'Casemate wall defensive system', 'Water system channeling well water'],
        type: 'city'
      }
    ]
  },

  // 88. Jericho - The First City Conquered
  jericho: {
    id: 'jericho',
    name: 'Jericho (Tell es-Sultan)',
    coordinates: [31.872, 35.444],
    region: 'Canaan (West Bank)',
    locations: [
      {
        id: 'jericho-walls',
        name: 'Walls of Jericho',
        description: 'Where the Israelites conquered after crossing the Jordan',
        longDescription: `Jericho is one of the oldest continuously inhabited cities in the world (settled c. 9000 BCE), famous for the biblical account of its conquest (Joshua 6). Joshua marched around the city for seven days, priests blowing trumpets, and on the seventh day the walls fell. The site (Tell es-Sultan) has multiple destruction layers, including the famous "Wall of Jericho" (Neolithic, c. 8000 BCE, 3.6 meters high with a tower 8 meters tall, the oldest known protective wall). The Late Bronze Age city (c. 1550-1200 BCE) appears to have been destroyed by fire, but the date of Joshua's conquest is debated (early date c. 1400 BCE, late date c. 1200 BCE). The site also contains Rahab's house (the prostitute who hid the spies, Joshua 2), traditionally located at the edge of the tell. Jericho was cursed by Joshua (Joshua 6:26), and later rebuilt by Hiel of Bethel (1 Kings 16:34).`,
        imageRegenerated: '/images/sites/jericho-regenerated.jpg',
        imageCurrent: '/images/sites/jericho-current.jpg',
        scene: 'The City of the Trumpets',
        visualHighlights: ['Neolithic stone tower (8 meters tall, oldest known)', 'Neolithic wall (3.6 meters high, oldest protective wall)', 'Destruction layer with burnt bricks (Bronze Age)', 'Spring of Elisha (miracle at 2 Kings 2:19-22)', 'Mount of Temptation overlooking the site'],
        type: 'city'
      }
    ]
  },

  // 89. Bethel - Jacob's Ladder
  bethel: {
    id: 'bethel',
    name: 'Bethel (Beitin)',
    coordinates: [31.925, 35.238],
    region: 'Canaan (West Bank)',
    locations: [
      {
        id: 'jacobs-ladder',
        name: 'Bethel',
        description: 'Where Jacob dreamed of the ladder to heaven',
        longDescription: `Bethel ("House of God") was a major Israelite sanctuary and the place where Jacob dreamed of a ladder reaching to heaven (Genesis 28:10-22). Jacob set up a stone pillar and anointed it with oil, calling the place Bethel, renaming it from Luz. Abraham also built an altar here (Genesis 12:8, 13:3). The Ark of the Covenant was kept at Bethel for a time (Judges 20:26-28). Jeroboam I (the first king of the northern Kingdom of Israel) made Bethel one of the two centers of golden calf worship (1 Kings 12:25-33), leading to repeated condemnation by prophets (Amos 7:10-13). The site (modern Beitin) contains remains of a Middle Bronze Age temple (c. 1700 BCE, perhaps the "Luz" of Genesis 28), and later Iron Age buildings associated with Jeroboam. Bethel was destroyed by Josiah, king of Judah, who desecrated the altar (2 Kings 23:4, 15-16).`,
        imageRegenerated: '/images/sites/bethel-regenerated.jpg',
        imageCurrent: '/images/sites/bethel-current.jpg',
        scene: 'The House of God',
        visualHighlights: ['Middle Bronze Age temple (c. 1700 BCE, possible "Luz")', 'Iron Age altar platform (Jeroboam\'s golden calf site)', 'Jacob\'s stone pillar (commemorative marker)', 'Nearby olive trees representing the dream', 'View overlooking the Hill Country of Ephraim'],
        deity: 'Yahweh',
        type: 'temple'
      }
    ]
  },

  // 90. Shechem - Covenant Renewal
  shechem: {
    id: 'shechem',
    name: 'Shechem (Tell Balata)',
    coordinates: [32.213, 35.285],
    region: 'Canaan (West Bank)',
    locations: [
      {
        id: 'shechem-covenant',
        name: 'Shechem',
        description: 'Where Abraham first received the covenant promise',
        longDescription: `Shechem was the first place Abraham came after entering Canaan, where God promised the land to his descendants (Genesis 12:6-7). Abraham built an altar here. Later, Jacob bought land here (Genesis 33:18-20, "Jacob purchased a parcel of land for 100 qesitahs"). Joseph was buried at Shechem (Joshua 24:32), his tomb still marked at the site. Joshua gathered the tribes at Shechem for a covenant renewal ceremony (Joshua 24), setting up a stone under the oak tree as a witness. The city was a Levitical city (Joshua 21:21) and a city of refuge. Shechem is mentioned in the story of Abimelech (son of Gideon, Judges 9), who ruled from Shechem and destroyed it. The site (Tell Balata) has Bronze and Iron Age remains, including a massive fortification (Middle Bronze Age, c. 1800 BCE), a temple (the "Tower Temple" with cult standing stones, perhaps the temple of El-Berith, Judges 9:46), and a gateway. The modern city of Nablus (from the Latin Neapolis, "New City") is nearby.`,
        imageRegenerated: '/images/sites/shechem-regenerated.jpg',
        imageCurrent: '/images/sites/shechem-current.jpg',
        scene: 'The Covenant Renewal Site',
        visualHighlights: ['Massive Middle Bronze Age fortifications', '"Tower Temple" with standing stones (Azebat Shechem)', 'Gateway with cultic niche (possible judges\' gate)', 'Abraham\'s altar site (traditional)', 'Oak of Moreh (where Abraham built an altar)'],
        deity: 'Yahweh',
        type: 'city'
      }
    ]
  }
};

// ========== SECTION 8: HITTITES & CONFLICT ZONE (91-100) ==========
export const invaderSites: Record<string, Site> = {
  // 91. Hattusa - Hittite Capital
  hattusa: {
    id: 'hattusa',
    name: 'Hattusa',
    coordinates: [40.017, 34.615],
    region: 'Anatolia (Turkey)',
    locations: [
      {
        id: 'hattusa-capital',
        name: 'Hattusa',
        description: 'Massive fortified Hittite capital',
        longDescription: `Hattusa was the imposing capital of the Hittite Empire, set in rugged Anatolian terrain with massive stone walls and gates. The city's fortifications—6 km of walls with towers and posterns—made it impregnable, with gates decorated with sculpted lions, sphinxes, and warrior gods. The Great Temple, dedicated to the Storm God and Sun Goddess, covered 14,000 square meters. The royal archives contained thousands of clay tablets in cuneiform (Hittite, Akkadian, Hurrian, Luwian), including the peace treaty with Egypt (the Treaty of Kadesh, 1259 BCE), the earliest known parity treaty still surviving. The city was mysteriously abandoned around 1200 BCE during the Bronze Age collapse.`,
        imageRegenerated: '/images/sites/hattusa-regenerated.jpg',
        imageCurrent: '/images/sites/hattusa-current.jpg',
        scene: 'The Hittite Citadel',
        visualHighlights: ['6 km defensive walls with towers', 'Lion Gate with guardian lion figures', 'Sphinx Gate with paired sphinxes', 'Yerkapi postern gate and rampart', 'Royal tablet archives with clay letter'],
        type: 'city'
      },
      {
        id: 'yazilikaya',
        name: 'Yazilikaya Sanctuary',
        description: 'Open-air rock sanctuary with Hittite deities',
        longDescription: `Yazilikaya ("Inscribed Rock") is an open-air rock sanctuary located a short distance from Hattusa's walls, used for New Year's ceremonies and royal funerary rites. The site features two natural rock chambers (A and B) with reliefs of over 90 Hittite deities carved into the rock walls. Chamber A shows a procession of gods approaching the central scene of the Storm God (Tarhunt) and Sun Goddess of Arinna (Hebat) meeting. Chamber B, more hidden, was likely a mortuary shrine for kings. The reliefs include warrior gods in pointed helmets and curved swords. The rock chambers were illuminated by torchlight during ceremonies, the flickering flames bringing the carved gods to life.`,
        imageRegenerated: '/images/sites/yazilikaya-regenerated.jpg',
        imageCurrent: '/images/sites/yazilikaya-current.jpg',
        scene: 'The Rock Sanctuary of the Gods',
        visualHighlights: ['Natural rock chambers with 90 deity reliefs', 'Procession of Hittite gods and goddesses', 'Tarhunt the Storm God and Hebat meeting', 'Torchlight ceremony reconstruction', 'Royal funerary chamber with sword god'],
        deity: 'Tarhunt',
        type: 'temple'
      }
    ]
  },

  // 92. Battle of Kadesh - The Greatest Chariot Battle
  kadesh: {
    id: 'kadesh',
    name: 'Kadesh',
    coordinates: [34.55, 36.5],
    region: 'Levant (Syria)',
    locations: [
      {
        id: 'kadesh-battlefield',
        name: 'Battle of Kadesh',
        description: 'The greatest chariot battle in ancient history',
        longDescription: `The Battle of Kadesh (1274 BCE) was the largest chariot battle ever fought, with over 5,000 chariots clashing on the plains of the Orontes River. Ramesses II's Egyptian forces (20,000 men, 2,000 chariots) faced the Hittite king Muwatalli II (40,000 men, 3,000 chariots). Ramesses marched his army in four divisions (Amun, Ra, Ptah, Seth) but fell into a Hittite ambush, with the Ra division destroyed and the Amun division surrounded. Ramesses personally rallied his troops, fighting his way out in a scene depicted on temple walls at Karnak, Luxor, Abydos, and Abu Simbel with the "Poem of Pentaur" and "Bulletin" inscriptions. The battle ended in a stalemate, with both sides claiming victory. Fifteen years later (1259 BCE), the world's first recorded peace treaty was signed. A clay tablet copy is in the Istanbul Archaeology Museum, a silver replica hung in the UN.`,
        imageRegenerated: '/images/sites/kadesh-regenerated.jpg',
        imageCurrent: '/images/sites/kadesh-current.jpg',
        scene: 'The Chariot Battle of the Ages',
        visualHighlights: ['Orontes River crossing point with fords', 'Tell Kadesh fortress ruins', 'Egyptian camp location (surrounded)', 'Hittite ambush positions (behind the tell)', 'Peace treaty tablet replica (world\'s first)'],
        type: 'city'
      }
    ]
  },

  // 93. Battle of Megiddo - Thutmose III's Surprise Attack
  battleMegiddo: {
    id: 'battle-megiddo',
    name: 'Battle of Megiddo',
    coordinates: [32.585, 35.185],
    region: 'Levant (Israel)',
    locations: [
      {
        id: 'megiddo-battle-1457',
        name: 'Battle of Megiddo (1457 BCE)',
        description: 'Thutmose III\'s surprise attack through the Aruna Pass',
        longDescription: `The Battle of Megiddo (1457 BCE) was fought between Egyptian forces under Thutmose III and a Canaanite coalition led by the king of Kadesh. Thutmose faced a choice of three routes through the Carmel range: the northern route (safe but long), the southern route (safe but long), or the Aruna Pass (direct but extremely narrow). His generals advised against the Aruna route, but Thutmose personally led the army through the pass, emerging behind the Canaanite camp. The surprise attack was complete—the Canaanites fled to Megiddo, and the Egyptians paused to loot, allowing the Canaanites to escape into the city. The seven-month siege that followed ended with Megiddo's capture. Thutmose's journal records: "They captured the horses of the rulers of Megiddo, and the leaders prostrated themselves on their bellies." The battle is the first clearly recorded in history.`,
        imageRegenerated: '/images/sites/battle-megiddo-regenerated.jpg',
        imageCurrent: '/images/sites/battle-megiddo-current.jpg',
        scene: 'Thutmose III\'s Surprise Attack',
        visualHighlights: ['Aruna Pass narrow gorge showing approach', 'Canaanite camp location (surprised)', 'Egyptian chariots emerging from pass', 'Siege of Megiddo (seven months)', 'Thutmose\'s journal inscription at Karnak'],
        type: 'city'
      }
    ]
  },

  // 94. Battle of the Delta - Ramesses III vs Sea Peoples
  battleDelta: {
    id: 'battle-delta',
    name: 'Battle of the Delta',
    coordinates: [30.9, 31.3],
    region: 'Nile Delta (Egypt)',
    locations: [
      {
        id: 'sea-peoples-battle',
        name: 'Battle of the Delta (1175 BCE)',
        description: 'Ramesses III defeats the Sea Peoples invasion',
        longDescription: `The Battle of the Delta (c. 1175 BCE) was fought between Egyptian forces under Ramesses III and the Sea Peoples—a confederation of maritime raiders including the Peleset (Philistines), Tjeker, Shekelesh, Denyen, and Weshesh. The Sea Peoples had already destroyed the Hittite Empire and sacked Ugarit, Alalakh, and other coastal cities. Ramesses set a trap: he let the Sea Peoples' fleet enter the Nile mouths, then turned the tide (literally—the current reversed at ebb) and attacked with archers from the shore and ships in the river. The Medinet Habu reliefs show a chaotic naval battle with Egyptian ships armed with grappling hooks and archers. Ramesses reported: "Those who entered the river-mouths were caught by the current and surrounded. They were dragged away, overwhelmed, and their ships capsized." The Sea Peoples were defeated and settled in Canaan, becoming the Philistines of the Bible.`,
        imageRegenerated: '/images/sites/battle-delta-regenerated.jpg',
        imageCurrent: '/images/sites/battle-delta-current.jpg',
        scene: 'Ramesses III vs the Sea Peoples',
        visualHighlights: ['Sea Peoples ships entering Nile mouths', 'Egyptian archers on shore and ships', 'Grappling hooks overturning enemy vessels', 'Medinet Habu reliefs of the battle', 'Captured Sea Peoples with distinctive feathered helmets'],
        type: 'city'
      }
    ]
  },

  // 95. Troy - Trojan War
  troy: {
    id: 'troy',
    name: 'Troy (Hisarlik)',
    coordinates: [39.957, 26.238],
    region: 'Anatolia (Turkey)',
    locations: [
      {
        id: 'trojan-war',
        name: 'Troy',
        description: 'Site of the legendary Trojan War',
        longDescription: `Troy (Hisarlik) was the setting for the Trojan War, immortalized in Homer's Iliad (c. 8th century BCE). The site has 9 major layers (Troy I-IX), with Troy VIIa (c. 1200 BCE) the most likely candidate for Homer's Troy, showing destruction by fire, arrowheads, and human remains. The city's walls (5 meters thick) had gates (Priam's Gate) and towers. Heinrich Schliemann excavated in 1870-1890, finding "Priam's Treasure" (gold jewelry, vessels, weapons) at Troy II (c. 2500 BCE, too early for Homer). Later excavations by Wilhelm Dörpfeld (1893) and Carl Blegen (1932-1938) established the stratigraphy. The city controlled the Dardanelles strait (Hellespont), connecting the Aegean to the Black Sea. The Trojan War is dated by Greek tradition to 1194-1184 BCE, matching the Bronze Age collapse period. The site is a UNESCO World Heritage site.`,
        imageRegenerated: '/images/sites/troy-regenerated.jpg',
        imageCurrent: '/images/sites/troy-current.jpg',
        scene: 'The City of the Trojan War',
        visualHighlights: ['Troy VIIa destruction layer with fire and arrowheads', 'Walls of Troy with towers and gates', 'Schliemann\'s trench (1870 excavation)', 'Priam\'s Treasure gold vessels and jewelry', 'View of the Troad plain to the Aegean'],
        deity: 'Athena',
        type: 'city'
      }
    ]
  },

  // 96. Thermopylae - 300 Spartans
  thermopylae: {
    id: 'thermopylae',
    name: 'Battle of Thermopylae',
    coordinates: [38.797, 22.536],
    region: 'Greece',
    locations: [
      {
        id: 'pass-thermopylae',
        name: 'Thermopylae',
        description: 'Where 300 Spartans held off the Persian army',
        longDescription: `The Battle of Thermopylae (480 BCE) was fought between the Greek city-states (led by King Leonidas of Sparta, 7,000 troops including 300 Spartans) and the Persian Empire (Xerxes I, estimated 150,000 troops). The Greek force held the "Hot Gates"—a narrow pass (15 meters wide) between mountains and sea. The Phocian Wall (a stone barricade) was defended for three days. On the second day, a local Greek (Ephialtes) betrayed the path behind the Greek lines (the "Anopaia Path"). Leonidas dismissed the main army but stayed with 300 Spartans, 700 Thespians, and 400 Thebans (who surrendered). The final stand was on a small hill (the "Kolonos Hill"), where the Greeks fought with swords, then stones, then hands and teeth. The Persians finally killed them all with arrows. The battle became the archetypal "last stand" in Western history. The epitaph reads: "Go, traveler, and tell the Spartans that here, obedient to their laws, we lie."`,
        imageRegenerated: '/images/sites/thermopylae-regenerated.jpg',
        imageCurrent: '/images/sites/thermopylae-current.jpg',
        scene: 'The Last Stand of the 300',
        visualHighlights: ['Narrow pass (15 meters wide) between mountains and sea', 'Phocian Wall stone barricade', 'Anopaia Path (betrayal route)', 'Kolonos Hill (final stand location)', 'Leonidas monument and epitaph'],
        type: 'monument'
      }
    ]
  },

  // 97. Marathon - The Athenian Victory
  marathon: {
    id: 'marathon',
    name: 'Battle of Marathon',
    coordinates: [38.125, 23.978],
    region: 'Greece',
    locations: [
      {
        id: 'marathon-plain',
        name: 'Marathon Plain',
        description: 'Where the Athenians defeated the Persians',
        longDescription: `The Battle of Marathon (490 BCE) was fought between an Athenian army (9,000 hoplites, plus 1,000 Plataeans) and a Persian force (25,000 infantry, 1,000 cavalry) under Datis and Artaphernes. The Athenians charged the Persian lines, covering 1.5 kilometers in full armor—a distance no army had run before. The Persian cavalry was absent (at sea), and the hoplites broke through the Persian center, then turned and flanked the wings. The Persians fled to their ships, losing 6,400 men; the Athenians lost 192. The runner Pheidippides (the "original marathoner") ran from Athens to Sparta (225 km) before the battle, then after the battle ran from Marathon to Athens (42 km) to announce "We have won" before dropping dead. The battle proved that the Persian army could be defeated, setting the stage for the Greek victories at Salamis and Plataea.`,
        imageRegenerated: '/images/sites/marathon-regenerated.jpg',
        imageCurrent: '/images/sites/marathon-current.jpg',
        scene: 'The Athenian Charge',
        visualHighlights: ['Marathon plain (1.5 km charging distance)', 'Persian camp location (near the beach)', 'Athenian phalanx formation running', 'Battle of Marathon mound (burial tomb)', 'Persian fleet beached at the Cynosura peninsula'],
        type: 'monument'
      }
    ]
  },

  // 98. Salamis - The Naval Battle
  salamis: {
    id: 'salamis',
    name: 'Battle of Salamis',
    coordinates: [37.95, 23.566],
    region: 'Greece',
    locations: [
      {
        id: 'salamis-strait',
        name: 'Strait of Salamis',
        description: 'The decisive naval battle that saved Greece',
        longDescription: `The Battle of Salamis (480 BCE) was fought in the narrow straits between Athens and Salamis Island, where the Greek fleet (380 ships, mostly Athenian and Spartan) under Themistocles defeated the larger Persian fleet (1,200 ships) under Xerxes I. Themistocles lured the Persians into the straits, where their numerical advantage was useless in the confined space. The Persian ships became entangled, and the heavier Greek triremes rammed them, sinking about 200 Persian ships and losing about 40 Greek vessels. Xerxes watched from a throne on Mount Aigaleos, seeing his fleet destroyed. The battle turned the tide of the Persian War; Xerxes retreated, leaving his general Mardonius with 40,000 troops, who were defeated at Plataea (479 BCE). The Greek victory preserved Athenian democracy and Western civilization.`,
        imageRegenerated: '/images/sites/salamis-regenerated.jpg',
        imageCurrent: '/images/sites/salamis-current.jpg',
        scene: 'The Decisive Naval Battle',
        visualHighlights: ['Narrow straits between Salamis and Attica', 'Greek triremes ramming Persian ships', 'Xerxes on Mount Aigaleos throne', 'Greek hoplites with oars and grappling hooks', 'Themistocles\' command post on Salamis'],
        type: 'city'
      }
    ]
  },

  // 99. Cannae - Hannibal's Masterpiece
  cannae: {
    id: 'cannae',
    name: 'Battle of Cannae',
    coordinates: [41.3, 16.15],
    region: 'Italy',
    locations: [
      {
        id: 'cannae-field',
        name: 'Battle of Cannae (216 BCE)',
        description: 'Hannibal\'s double envelopment of the Roman army',
        longDescription: `The Battle of Cannae (216 BCE) was the masterpiece of Hannibal Barca, the Carthaginian general. Hannibal's army (50,000 troops, few survivors) faced a Roman army of 86,000 men—the largest Roman army ever assembled. Hannibal arranged his army in a crescent formation, with weaker troops in the center and African veterans on the wings. The Romans pressed into the center, and the wings closed around them in a "double envelopment"—the first recorded in history. The result was catastrophic: 50,000 Romans killed (including 80 senators, 3/4 of their Senate), 20,000 captured; Hannibal lost only 8,000 men. The battle became a textbook example of military strategy, studied by Napoleon, Schlieffen, and Rommel. The site is near the Aufidus River (modern Ofanto). The famous phrase "Cannae of the spirit" still describes any devastating defeat.`,
        imageRegenerated: '/images/sites/cannae-regenerated.jpg',
        imageCurrent: '/images/sites/cannae-current.jpg',
        scene: 'Hannibal\'s Double Envelopment',
        visualHighlights: ['Aufidus River valley with flat plain', 'Crescent formation of Carthaginian army', 'Roman infantry pressing into the center', 'African spearmen closing from the wings', 'Roman bodies described by Livy (cattle slaughter)'],
        type: 'city'
      }
    ]
  },

  // 100. Zama - The End of the Punic Wars
  zama: {
    id: 'zama',
    name: 'Battle of Zama',
    coordinates: [36.1, 9.5],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'zama-battlefield',
        name: 'Battle of Zama (202 BCE)',
        description: 'Scipio Africanus defeats Hannibal',
        longDescription: `The Battle of Zama (202 BCE) was the final battle of the Second Punic War, where the Roman general Scipio Africanus defeated Hannibal in North Africa. Scipio had studied Hannibal's tactics and developed a counter: his legionaries left gaps in their lines for the Carthaginian war elephants to pass through harmlessly (using cornu trumpet blasts to frighten them). The elephants turned back into the Carthaginian cavalry, disrupting their own lines. Scipio's cavalry (returning after chasing the Carthaginian horse) charged the rear, completing a double envelopment similar to Cannae. Hannibal escaped, but Carthage surrendered, ending the war. Scipio earned his agnomen "Africanus." The battle site is uncertain (near modern Mateur or El Kef). Livy's description includes the scene of the two generals meeting before the battle. The victory established Rome as the dominant Mediterranean power.`,
        imageRegenerated: '/images/sites/zama-regenerated.jpg',
        imageCurrent: '/images/sites/zama-current.jpg',
        scene: 'The End of the Punic Wars',
        visualHighlights: ['Open plain for cavalry maneuver', 'Roman gaps for elephants', 'Scipio and Hannibal meeting before battle', 'Cavalry returning to complete envelopment', 'Carthaginian camp with besieged walls'],
        type: 'city'
      }
    ]
  }
};

// ========== SECTION 9: GREEK & AEGEAN (101-110) ==========
export const greekSites: Record<string, Site> = {
  // 101. Acropolis of Athens - Sanctuary of Athena
  acropolisAthens: {
    id: 'acropolis-athens',
    name: 'Acropolis of Athens',
    coordinates: [37.9715, 23.7257],
    region: 'Greece',
    locations: [
      {
        id: 'acropolis-hill',
        name: 'The Acropolis',
        description: 'Iconic sanctuary of Athena',
        longDescription: `The Acropolis rises dramatically 157 meters above Athens, its flat limestone summit transformed into the greatest sanctuary of ancient Greece. The Propylaea gateway (designed by Mnesicles), Temple of Athena Nike (with its famous parapet of Victory adjusting her sandal), Erechtheion (with its Caryatid maidens supporting the porch), and Parthenon (designed by Iktinos and Kallikrates) form a unified architectural ensemble of breathtaking beauty. Pericles' building program (447-432 BCE) created the Acropolis as a symbol of Athenian power, wealth, and devotion to Athena, funded from the Delian League treasury. The site had been a fortress since Mycenaean times (1600-1100 BCE), with traces of the Mycenaean palace walls (the "Pelasgian Wall") still visible near the Propylaea. The Parthenon was converted into a Christian church (6th century CE), a Catholic cathedral (1204), and a mosque (1460)—surviving until 1687, when Venetian shelling of the Ottoman gunpowder magazine inside it caused an explosion that blew out the cella walls.`,
        imageRegenerated: '/images/sites/acropolis-regenerated.jpg',
        imageCurrent: '/images/sites/acropolis-current.jpg',
        scene: 'The Sacred Rock of Athens',
        visualHighlights: ['Parthenon with Doric columns and optical refinements', 'Propylaea marble gateway with painted ceilings', 'Erechtheion Caryatid maidens (six figures)', 'Temple of Athena Nike with parapet reliefs', 'Theater of Dionysus at south slope'],
        deity: 'Athena',
        type: 'temple'
      },
      {
        id: 'parthenon-interior',
        name: 'The Parthenon Interior',
        description: 'Temple of Athena containing her massive gold and ivory statue',
        longDescription: `The Parthenon's interior was divided into two rooms. The eastern room (the cella, 29.8 meters long) contained the statue of Athena Parthenos ("Athena the Virgin"), 12 meters tall, covered in 1,000 kilograms of gold and ivory (chryselephantine). The gold could be removed in emergencies—Athens needed it to fund wars. The statue's face, hands, and feet were ivory, the robe and weapons gold. Athena held Nike (Victory) in her extended right hand, resting her left arm on a shield (with Amazonomachy relief in repoussé). The statue's base showed the birth of Pandora and the contest between Athena and Poseidon. The western room (the "Parthenon" proper, 13.9 meters long) held the Treasury of the Delian League, containing the alliance's tribute paid by over 300 member states. The Parthenon's sculptural program (painted in bright colors, not white marble as now seen) depicted mythological battles—the birth of Athena (east pediment), contest between Athena and Poseidon (west pediment), Gigantomachy (metopes east), Amazonomachy (metopes west), Centauromachy (metopes south), and scenes from the Trojan War (metopes north). The Ionic frieze (the Parthenon Frieze, 160 meters long, now mostly in the British Museum) showed the Panathenaic procession.`,
        imageRegenerated: '/images/sites/parthenon-interior-regenerated.jpg',
        imageCurrent: '/images/sites/parthenon-interior-current.jpg',
        scene: 'The Temple of Athena Parthenos',
        visualHighlights: ['Chryselephantine statue of Athena (12 meters tall)', 'Gold and ivory materials glinting in torchlight', 'Nike figure in Athena\'s extended right hand', 'Amazonomachy shield relief with fighting figures', 'Cella with reflecting light from open doors'],
        deity: 'Athena',
        type: 'temple'
      }
    ]
  },

  // 102. Olympia - Sanctuary of Zeus
  olympiaSanctuary: {
    id: 'olympia-sanctuary',
    name: 'Olympia',
    coordinates: [37.638, 21.63],
    region: 'Greece',
    locations: [
      {
        id: 'temple-zeus-olympia',
        name: 'Temple of Zeus',
        description: 'Home of the gold and ivory Zeus statue',
        longDescription: `The Temple of Zeus at Olympia (470-456 BCE, architect Libon of Elis) contained one of the Seven Wonders of the Ancient World—the gold and ivory (chryselephantine) statue of Zeus by Pheidias, 12 meters tall, visible kneeling to the temple ceiling. Zeus sat on a throne of cedar, ebony, and ivory, holding Victory (Nike) in his right hand (a statue, 2 meters tall), a scepter with an eagle in his left. The statue's robe was gold glass, the throne decorated with figures of Greek gods and heroes. The temple's pediments depicted the chariot race of Pelops and Oinomaos (east pediment) and the Centauromachy (west pediment)—battles between Lapiths and Centaurs (with Apollo as the central figure). The metopes (12 of them) depicted the Labors of Herakles (including the Nemean Lion, Lernaean Hydra, Ceryneian Hind, Erymanthian Boar, Augean Stables, Stymphalian Birds, Cretan Bull, Mares of Diomedes, Belt of Hippolyta, Cattle of Geryon, Apples of Hesperides, Cerberus).`,
        imageRegenerated: '/images/sites/zeus-olympia-regenerated.jpg',
        imageCurrent: '/images/sites/zeus-olympia-current.jpg',
        scene: 'The Statue of Zeus at Olympia',
        visualHighlights: ['Gold and ivory Zeus statue (12 meters tall)', 'Pheidias\' workshop remains with tools and mold fragments', 'East pediment chariot race of Pelops', 'West pediment Centauromachy battle', 'Olympic flame altar with eternal flame'],
        deity: 'Zeus',
        type: 'temple'
      },
      {
        id: 'temple-hera-olympia',
        name: 'Temple of Hera',
        description: 'Oldest temple at Olympia',
        longDescription: `The Temple of Hera (Heraion, 600 BCE) is the oldest temple at Olympia, originally shared with Zeus (his statue stood beside Hera's). The temple was built of local limestone, with some original wooden columns preserved as historical artifacts—one remained in the 2nd century CE when Pausanias visited. The Olympic flame is still lit here using a parabolic mirror, before the torch relay to the host city. Inside the cella, the Hermes of Praxiteles (4th century BCE, found in 1877) was discovered, showing Hermes holding the infant Dionysus. The temple's peristyle was originally 6 x 16 columns (Doric order), with the columns at the ends having smaller spacing (the "corner contraction" optical refinement).`,
        imageRegenerated: '/images/sites/hera-olympia-regenerated.jpg',
        imageCurrent: '/images/sites/hera-olympia-current.jpg',
        scene: 'The Queen of the Gods',
        visualHighlights: ['Olympic flame lighting ceremony with parabolic mirror', 'Original wooden column preserved (historical artifact)', 'Hermes of Praxiteles statue find spot', 'Doric columns with varied ages of replacement', 'Pre-Zeus cult remains (Mycenaean period)'],
        deity: 'Hera',
        type: 'temple'
      }
    ]
  },

  // 103. Delphi - Sanctuary of Apollo
  delphiSanctuary: {
    id: 'delphi-sanctuary',
    name: 'Delphi',
    coordinates: [38.482, 22.501],
    region: 'Greece',
    locations: [
      {
        id: 'oracle-delphi',
        name: 'Sanctuary of Apollo',
        description: 'Site of the Delphic Oracle',
        longDescription: `Delphi, perched on Mount Parnassus slopes (700 meters elevation) overlooking the Gulf of Corinth, was the most sacred site in ancient Greece—the omphalos (navel) of the world, marked by a stone. Here the Pythia, Apollo's priestess, sat on the tripod over a fissure (a chasm emitting ethylene gas, producing trance states), inhaled vapors, and uttered prophecies, consulted by kings and commoners. The site features the Temple of Apollo (with inscriptions "Know Thyself" (gnothi seauton) and "Nothing in Excess" (meden agan)), theater (35 rows seating 5,000), stadium (above the theater, hosting musical competitions and athletic games, the Pythian Games), and treasury buildings (Athenian Treasury, Siphnian Treasury, Theban Treasury, Boeotian Treasury) from competing city-states to display their wealth and devotion. The Sacred Way, zigzagging up the hill, was lined with over 20 treasuries, monuments, and statues—victory dedications for battles including Marathon and Plataea. The Sibyl rock (a projecting rock) is where the first priestesses sat before the temple was built. No Greek colony was founded, no war declared, without consulting Delphi's oracle, which shaped Greek civilization for over a millennium.`,
        imageRegenerated: '/images/sites/delphi-regenerated.jpg',
        imageCurrent: '/images/sites/delphi-current.jpg',
        scene: 'The Oracle of Apollo',
        visualHighlights: ['Temple of Apollo with tripod and adyton (inner chamber)', 'Omphalos stone marking Earth\'s center (carved with a net pattern)', 'Sacred Way with treasury buildings and monuments', 'Mountain amphitheater (theater of Delphi)', 'Stadium athletic track at highest point (215 meters above temple)'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  },

  // 104. Cape Sounion - Temple of Poseidon
  capeSounion: {
    id: 'cape-sounion',
    name: 'Cape Sounion',
    coordinates: [37.65, 24.026],
    region: 'Greece',
    locations: [
      {
        id: 'temple-poseidon',
        name: 'Temple of Poseidon',
        description: 'Poseidon\'s sanctuary overlooking the Aegean',
        longDescription: `The Temple of Poseidon at Cape Sounion stands on a 60-meter cliff overlooking the Aegean Sea. Built in 444 BCE (Pericles' building program), visible by sailors approaching Athens from the sea, it replaced an Archaic temple destroyed by the Persians (480 BCE). The temple's 15 standing columns (of the original 36, Doric order, 6 x 13 columns) frame stunning sunsets—the "sounion" sunset famous in Greek literature (Lord Byron visited in 1810, carving his name on one column). Poseidon was the god of earthquakes and the sea—appropriate for this cliff, vulnerable to both (visible cracks from earthquake damage). The temple was a landmark for ships entering Athens (visible 40 km from sea) and a place where sailors prayed before voyages, leaving dedications (inscriptions on stone). The temple's frieze (partially preserved) depicted the Gigantomachy (battle of gods vs giants) and the Centauromachy. The site also includes a smaller temple of Athena (Archaic period, on the hill above).`,
        imageRegenerated: '/images/sites/sounion-regenerated.jpg',
        imageCurrent: '/images/sites/sounion-current.jpg',
        scene: 'The Temple by the Aegean',
        visualHighlights: ['Sunset over the Aegean through Doric columns', 'Lord Byron\'s carved signature on column (name and date)', 'Ship passage dedication inscriptions (sailors\' prayers)', 'Cliff-edge location (60 meters above sea)', 'Aegean blue sea backdrop (view to Kea, Kythnos islands)'],
        deity: 'Poseidon',
        type: 'temple'
      }
    ]
  },

  // 105. Ephesus - Temple of Artemis
  ephesusArtemis: {
    id: 'ephesus-artemis',
    name: 'Ephesus',
    coordinates: [37.939, 27.341],
    region: 'Asia Minor (Turkey)',
    locations: [
      {
        id: 'temple-artemis',
        name: 'Temple of Artemis (Artemision)',
        description: 'One of the Seven Wonders',
        longDescription: `The Temple of Artemis at Ephesus was one of the Seven Wonders of the Ancient World, the largest Greek temple ever built (110 by 55 meters, 127 columns, each 18 meters tall, including 36 with carved reliefs). Only one column remains standing (reconstructed from fragments in the 1970s, reassembled on the original foundations). The original temple was built by Croesus of Lydia (c. 550 BCE), burned by Herostratus (356 BCE, the same night Alexander the Great was born), then rebuilt on a larger scale, and finally destroyed by Goths (263 CE) and Christian iconoclasts (5th-6th century CE). The temple housed the statue of Artemis of Ephesus—a unique image of the goddess covered with multiple breast-like protrusions (interpreted as bull testicles or multiple breasts symbolizing fertility), wearing a crown covered with animals and zodiac signs, and standing on a pillar decorated with reliefs—very different from the Classical Greek Artemis as huntress (the statue is in the Ephesus Museum, Selçuk). The temple served as a marketplace, a bank (deposits accepted, loans made), and a sanctuary for those seeking asylum (a zone of immunity around the temple). The apostle Paul's preaching against idol worship caused a riot here, recorded in Acts 19 (the silversmiths of Artemis, led by Demetrius, shouting "Great is Artemis of the Ephesians!" for two hours). The site is now a marshy field (the temple was built on swampy ground to survive earthquakes).`,
        imageRegenerated: '/images/sites/ephesus-regenerated.jpg',
        imageCurrent: '/images/sites/ephesus-current.jpg',
        scene: 'The Great Temple of Artemis',
        visualHighlights: ['One standing reconstructed column (14 meters, 1970s)', 'Many-breasted cult statue of Artemis (Ephesus Museum)', 'Roman-period altar relief with Greek gods', 'Ionic column drums scattered in field', 'Acts of the Apostles crowds (dramatic reading site)'],
        deity: 'Artemis',
        type: 'temple'
      }
    ]
  },

  // 106. Paphos - Sanctuary of Aphrodite
  paphosAphrodite: {
    id: 'paphos-aphrodite',
    name: 'Paphos',
    coordinates: [34.757, 32.412],
    region: 'Cyprus',
    locations: [
      {
        id: 'temple-aphrodite',
        name: 'Sanctuary of Aphrodite',
        description: 'Birthplace of the goddess of love',
        longDescription: `Paphos was the legendary birthplace of Aphrodite (Venus), emerging from sea foam (Hesiod's Theogony: Aphrodite born from Ouranos' severed genitals, dropped into the sea, carried to Cyprus on a scallop shell). The sanctuary operated from 1200 BCE to the 4th century CE, one of the longest continuously running cults in the Mediterranean. The goddess was worshipped in a unique form—a conical black stone (baetyl, a meteorite or natural stone) representing the goddess, decorated with clothing and jewelry (the "Aphrodite of Paphos" depicted on coins). The sanctuary included both Greek and Cypriot architectural elements, with a monumental propylon (entrance gate, Roman period), courtyards (with votive displays), and the temple of Aphrodite Paphia (Kourotrophos, nurse of children). Pilgrims left terra cotta figurines of the goddess (nude in Cypriot tradition, clothed in Greek style), limestone altars (with carved votives), and inscriptions on stone (dedications in Greek and Phoenician). The temple's sacred doves and incense (frankincense, myrrh) attracted visitors from across the Mediterranean, including the Roman emperor Titus (who visited before his Jewish War, 69 CE). The sanctuary was closed by Emperor Theodosius I (4th century CE) as part of anti-pagan legislation.`,
        imageRegenerated: '/images/sites/paphos-regenerated.jpg',
        imageCurrent: '/images/sites/paphos-current.jpg',
        scene: 'The Birthplace of Love',
        visualHighlights: ['Conical black stone cult statue (baetyl) in cella', 'Phoenician-style temple architecture (Syrian influences)', 'Pilgrim offerings gallery (terra cotta figurines)', 'Sacred grove with doves (Dove Court)', 'Petra tou Romiou (Aphrodite\'s Rock, offshore)'],
        deity: 'Aphrodite',
        type: 'temple'
      }
    ]
  },

  // 107. Knossos - Palace of Minos
  knossosPalace: {
    id: 'knossos-palace',
    name: 'Knossos',
    coordinates: [35.298, 25.163],
    region: 'Crete',
    locations: [
      {
        id: 'knossos-palace',
        name: 'Palace of Knossos',
        description: 'Labyrinthine palace of King Minos',
        longDescription: `Knossos, the legendary palace of King Minos (identified by Minos Kalokairinos in 1878, excavated by Arthur Evans from 1900-1935), is Europe's oldest city—a sprawling maze of rooms, corridors, staircases, light wells, and storage magazines, covering 22,000 square meters with 1,300 rooms. The myth of the Minotaur in its labyrinth (constructed by Daedalus for King Minos to contain the half-man, half-bull monster) may recall the palace's complex layout. The Throne Room, with its alabaster seat (the "throne of Minos") flanked by griffin frescoes (seated on a bench for the "guardians"), suggests Minoan kingship and ritual practices (the room may have been a shrine, not a throne room). The "Temple Repositories" contained ivory figurines of snake goddesses (an a tripartite goddess with upraised arms, snakes coiled around her body). Vivid frescoes—Dolphins (Queen's Megaron, in the "House of the Frescoes"), Bull Leapers (Toreador Fresco, showing acrobats vaulting over bulls, perhaps ritual athletic performance), Prince of Lilies (a walking figure with a crown of lilies and peacock feathers), Cupbearer (a figure carrying a rhyton, a conical cup)—preserve Minoan art at its height. The Linear A tablets (undeciphered, representing the Minoan language) and later Linear B tablets (deciphered by Michael Ventris in 1952 as early Greek) document Minoan and Mycenaean administration. The palace's advanced architecture (flush toilets in Queen's Suite, light wells for illumination, earthquake-proof timber-reinforced construction (the "walls of timber") rivals modern buildings. Knossos was destroyed around 1450 BCE, perhaps by the eruption at Thera (Santorini), remembered in the Atlantis legend (Plato's account mentions Athenian defeat of Atlanteans, possibly reflecting Minoan collapse).`,
        imageRegenerated: '/images/sites/knossos-regenerated.jpg',
        imageCurrent: '/images/sites/knossos-current.jpg',
        scene: 'The Palace of the Minotaur',
        visualHighlights: ['Throne Room with griffin fresco (Minoan "throne")', 'Queen\'s Megaron with dolphin fresco (restored)', 'Bull Leaper fresco (Toreador Fresco) showing acrobats', 'Light well architecture (multi-story building)', 'Evans\' partial concrete "reconstructions" (controversial)'],
        type: 'palace'
      }
    ]
  },

  // 108. Akrotiri - Minoan Pompeii
  akrotiriCity: {
    id: 'akrotiri-city',
    name: 'Akrotiri',
    coordinates: [36.35, 25.4],
    region: 'Santorini',
    locations: [
      {
        id: 'akrotiri-city',
        name: 'Akrotiri',
        description: 'Minoan city preserved in volcanic ash',
        longDescription: `Akrotiri was a prosperous Minoan city on the island of Thera (Santorini), buried under volcanic ash around 1600 BCE (the eruption of Thera, one of the largest in human history, Volcanic Explosivity Index 7). Like Pompeii, the ash preserved multi-story buildings (some three stories high), stunning frescoes, and everyday objects in remarkable detail—including carbonized furniture (beds, chairs, tables), food remains (olives, figs, barley, grape seeds), and storage jars (pithoi) with their contents preserved. The eruption generated a tsunami (estimated 35 meters high) affecting coastal Crete, contributing to the decline of Minoan civilization. The destruction may have inspired Plato's Atlantis legend (Timaeus and Critias: "in a single day and night of misfortune... the island of Atlantis disappeared into the depths of the sea"). No human remains have been found—the inhabitants apparently received warning and evacuated, carrying valuables. The city had advanced plumbing (clay pipes, flush toilets, drainage systems with terra cotta pipes, 2,000 years before Rome), heated rooms, and elaborate art—the frescoes include the Fisherman (a young man holding a seine full of fish, Boxers (two boys boxing with girdles, their fists wrapped), Antelopes (with spotted coats running), Miniature Fresco (naval expedition across the Aegean, showing ships, dolphins, and a coastal town with siege equipment), and the Spring Fresco (lilies and swallows in a landscape). Akrotiri's Greek name is unknown (ancient Thera? the site was originally named for a nearby village). The site was discovered in 1967 by Spyridon Marinatos (who died at the site from a fall in 1974).`,
        imageRegenerated: '/images/sites/akrotiri-regenerated.jpg',
        imageCurrent: '/images/sites/akrotiri-current.jpg',
        scene: 'The Minoan Pompeii',
        visualHighlights: ['Multi-story buildings preserved in ash (three stories visible)', 'Frescoes of monkeys and fishermen (Boxers Fresco)', 'Plumbing and drainage systems (clay pipes)', 'Volcanic ash layer (60 meters deep)', 'Boxers Fresco with bruised fists'],
        type: 'city'
      }
    ]
  },

  // 109. Mycenae - The Ring of Agamemnon
  mycenaeCitadel: {
    id: 'mycenae-citadel',
    name: 'Mycenae',
    coordinates: [37.7308, 22.7562],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'lion-gate',
        name: 'Lion Gate of Mycenae',
        description: 'Iconic entrance to the citadel of Agamemnon',
        longDescription: `The Lion Gate is the main entrance to the citadel of Mycenae (c. 1250 BCE), the most powerful city of Late Bronze Age Greece (1600-1100 BCE). The gate features two massive lions (their heads missing, originally turned toward the viewer in a heraldic pose) flanking a column, carved in high relief on a single limestone slab (the "Lion Gate Relief")—the oldest surviving monumental sculpture in Europe. The gate's "relieving triangle" (a triangular space above the lintel, open to lighten the weight on the lintel) was filled with the limestone relief. The lions guarded the citadel, symbolizing the power of the Mycenaean kings (the "wanax," who Homer called "golden Mycenae"). Within the walls lies Grave Circle A (inside the citadel, originally outside but later enclosed by the walls), where Heinrich Schliemann discovered five gold death masks (including the "Mask of Agamemnon," c. 1550 BCE, now in the National Archaeological Museum, Athens) and other gold treasures in 1876 (over 14 kilos of gold objects, rings, signets, diadems, cups, buttons—the "Mycenae Treasure"). The site also includes the Treasury of Atreus (tholos tomb, largest in Greece) and Grave Circle B (outside the walls, containing 14 gold masks).`,
        imageRegenerated: '/images/sites/mycenae-lion-gate-regenerated.jpg',
        imageCurrent: '/images/sites/mycenae-lion-gate-current.jpg',
        scene: 'The Gateway of Heroes',
        visualHighlights: ['Lion relief sculpture on limestone slab (2 meters high)', 'Cyclopean stone walls (limestone blocks, some 12 tons)', 'Grave Circle A gold masks (Mask of Agamemnon)', 'Treasury of Atreus beehive tomb (13 meters high)', 'Palace megaron with hearth (central torchlight)'],
        deity: 'Athena',
        type: 'city'
      },
      {
        id: 'treasury-of-atreus',
        name: 'Treasury of Atreus (Tomb of Agamemnon)',
        description: 'Largest and best-preserved tholos tomb',
        longDescription: `The Treasury of Atreus (also called the Tomb of Agamemnon) is the largest tholos (beehive) tomb in Greece, built around 1250 BCE. The tomb's dome rises 13.5 meters with a diameter of 14.5 meters, made of 33 courses of stone, each projecting slightly inward (corbelled vaulting). The vault was covered with earth to form a tumulus (burial mound). The entrance features a relieving triangle (2.5 meters high) and massive lintel beam weighing 120 tons—one of the largest stone blocks ever moved by ancient builders (the beam was moved using rollers and levers, then lifted into place by levers and ramps). The dromos (entrance passage) is 36 meters long, 6 meters wide, with walls of ashlar masonry and a relieving triangle above the lintel. The tomb was likely built for a Mycenaean king (possibly Atreus or Agamemnon) and was still visible to Pausanias in the 2nd century CE. The name "Treasury of Atreus" reflects the belief that the tomb contained Atreus's treasure, though Pausanias reports that the tomb actually held Atreus's children (Thyestes' sons, murdered by Atreus). The tomb's interior is decorated with bronze rosettes (originally affixed to the walls) and carved geometric patterns.`,
        imageRegenerated: '/images/sites/treasury-of-atreus-regenerated.jpg',
        imageCurrent: '/images/sites/treasury-of-atreus-current.jpg',
        scene: 'The Beehive Tomb of Kings',
        visualHighlights: ['120-ton lintel beam (largest in ancient world)', '13.5-meter high dome (54 feet)', 'Tholos corbelled architecture (33 stone courses)', 'Dromos entrance passage (36 meters long)', 'Geometric decorative bronze nail holes'],
        type: 'tomb'
      }
    ]
  },

  // 110. Thebes (Greece) - Mycenaean Center
  thebesGreece: {
    id: 'thebes-greece',
    name: 'Thebes (Thiva)',
    coordinates: [38.322, 23.317],
    region: 'Greece',
    locations: [
      {
        id: 'cadmea',
        name: 'Thebes (Cadmea)',
        description: 'Mycenaean palace of Oedipus and the Seven Against Thebes',
        longDescription: `Thebes (Thiva) was a major Mycenaean center (c. 1600-1100 BCE), rival to Mycenae and Pylos. The city's acropolis was called the Cadmea (named for Cadmus, legendary founder, who sowed the dragon's teeth). Thebes is famous in Greek mythology for Oedipus (who solved the Sphinx's riddle, unknowingly married his mother Jocasta), the Seven Against Thebes (the war between Eteocles and Polynices, brothers of Antigone), and the Bacchae (Dionysus's punishment of King Pentheus). The Mycenaean palace (c. 1300 BCE) was "the palace of Oedipus" (identified by modern archaeology with the older Greek tradition). Excavations (1906-1907, 1963-1964, 1990s) uncovered Linear B tablets (over 500, the largest archive in Greece outside Pylos), clay sealings (impressions of trade goods), wall paintings (fragments of frescoes), and a massive fortification wall (Cyclopean masonry). The site also contains the "Treasury of the Minyae" (a tholos tomb, 7.5 meters high, with a relieving triangle). Thebes was destroyed by the Epigonoi (the descendants of the Seven, fighting for their fathers) and later by Alexander the Great (335 BCE, who razed the city, sparing the house of the poet Pindar).`,
        imageRegenerated: '/images/sites/thebes-regenerated.jpg',
        imageCurrent: '/images/sites/thebes-current.jpg',
        scene: 'The Mycenaean Palace of Oedipus',
        visualHighlights: ['Cadmea acropolis with palace foundations', 'Linear B tablet archive (500 tablets)', 'Treasury of the Minyae tholos tomb', 'Cyclopean fortification walls', 'Palace of Cadmus (traditional location)'],
        deity: 'Dionysus',
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 10: CENTRAL AFRICA (101-110) ==========
export const centralAfricaSites: Record<string, Site> = {
  // 101. Bantu Expansion - The Great Migration
  bantuExpansion: {
    id: 'bantu-expansion',
    name: 'Bantu Expansion Route',
    coordinates: [4.0, 18.0],
    region: 'Central Africa (Congo Basin)',
    locations: [
      {
        id: 'bantu-migration',
        name: 'Bantu Migration Routes',
        description: 'Spread of people, crops, and ironworking across Africa',
        longDescription: `The Bantu expansion (3000 BCE - 500 CE) was one of the great migrations in human history, spreading Bantu-speaking peoples from their homeland in the Nigeria-Cameroon borderlands across two-thirds of sub-Saharan Africa. The expansion followed two main routes: a western route through the Congo rainforest to the Great Lakes and eastern Africa, and an eastern route through the savanna to the Great Lakes and southern Africa.

Bantu farmers brought yams, oil palms, and bananas (a Southeast Asian crop that reached Africa via Madagascar, allowing settlement of the rainforest), their ironworking technology transforming agriculture and warfare, and their languages shaping the continent's linguistic landscape. The expansion created new societies, political structures, and cultural traditions across vast regions—from the Congo rainforest to the Great Lakes, and from the Swahili coast to the Limpopo River.

The "Bantu expansion" is documented by linguistic evidence (the Bantu language family includes over 500 languages), archaeological evidence (distinctive pottery styles, iron slag, charcoal), and genetic evidence (Y-chromosome markers). The expansion was not a single movement but a series of gradual migrations over 4,000 years.`,
        imageRegenerated: '/images/sites/bantu-expansion-regenerated.jpg',
        imageCurrent: '/images/sites/bantu-expansion-current.jpg',
        scene: 'The Great Bantu Migration',
        visualHighlights: ['Migration route arrows (Nigeria-Cameroon to southern Africa)', 'Ironworking spread (furnace and tools)', 'Agricultural revolution (yams, oil palms, bananas)', 'Linguistic transformation (Bantu language map)', 'Cultural adaptation to rainforest and savanna'],
        type: 'city'
      }
    ]
  },

  // 102. Early Bantu Village - Life on the Frontier
  bantuVillage: {
    id: 'bantu-village',
    name: 'Early Bantu Village',
    coordinates: [-1.0, 28.0],
    region: 'Great Lakes (Congo/Rwanda)',
    locations: [
      {
        id: 'bantu-settlement',
        name: 'Early Bantu Village',
        description: 'Thatched homes, farming, and livestock',
        longDescription: `Early Bantu villages were the foundation of the expansion, small settlements of extended families (clans, lineages) practicing slash-and-burn agriculture (shifting cultivation, moving every few years as soil fertility declined), ironworking, and animal husbandry (cattle, sheep, goats). Houses were typically circular with timber frames (saplings bent and tied), mud-and-wattle walls (cross-hatched branches covered with clay), and thatched roofs (grass or palm fronds). Villages also included granaries (raised structures on stilts to store grain, protect from rodents and pests), animal pens (enclosures of stakes), iron-smelting furnaces (clay shaft furnaces with bellows), and communal meeting spaces (shaded areas under trees). These villages left markers—ceramic shards (distinctive pottery styles: "Urewe" ware in the Great Lakes region, "Kwale" ware in eastern Africa), iron slag (waste from smelting), and charcoal (from forest clearance)—that archaeologists use to trace the expansion.`,
        imageRegenerated: '/images/sites/bantu-village-regenerated.jpg',
        imageCurrent: '/images/sites/bantu-village-current.jpg',
        scene: 'Homestead on the Frontier',
        visualHighlights: ['Thatched circular houses (mud-and-wattle)', 'Raised granaries on stilts', 'Ironworking furnaces (clay shaft with bellows)', 'Agricultural fields (yams, oil palms, bananas)', 'Communal meeting spaces (shaded areas)'],
        type: 'city'
      }
    ]
  },

  // 103. Ironworking Village - The Blacksmith's Art
  ironworkingVillage: {
    id: 'ironworking-village',
    name: 'Ironworking Village',
    coordinates: [-2.0, 23.0],
    region: 'Central Africa (Congo Basin)',
    locations: [
      {
        id: 'iron-smelting-village',
        name: 'Ironworking Village Scene',
        description: 'Blacksmith forging tools and weapons',
        longDescription: `Ironworking was the transformative technology accompanying the Bantu expansion. Blacksmiths held special status (often as ritual specialists, believed to control supernatural forces), producing iron tools (hoes, axes, knives) that revolutionized agriculture (clearing forest, breaking ground, harvesting) and weapons (spears, arrows, swords) for hunting and warfare. The iron smelting process was highly ritualized, with ceremonies to ensure the furnace's success (including blood sacrifices, sexual prohibitions, and special songs). Clay furnaces (shaft furnaces 1-2 meters high, made of clay and dung), bellows made of animal skins (goat hide, with wooden nozzles), and charcoal fuel produced temperatures high enough (1,200-1,500°C) to extract iron from ore (haematite, magnetite, laterite). The resulting iron blooms (spongy masses of metallic iron) were then forged into tools using stone hammers (later iron hammers) and wooden tongs. Ironworking communities had significant advantages over stone-using neighbors (the Khoisan, pygmy groups), enabling more efficient farming, forest clearance, and military capability—accelerating the pace of Bantu expansion. The art of the blacksmith is still surrounded by ritual in many African societies.`,
        imageRegenerated: '/images/sites/ironworking-regenerated.jpg',
        imageCurrent: '/images/sites/ironworking-current.jpg',
        scene: 'The Blacksmith\'s Fire',
        visualHighlights: ['Clay shaft furnace (1-2 meters tall)', 'Animal skin bellows (goat hide)', 'Forging hammers and anvils (stone and iron)', 'Finished tools and weapons (hoes, axes, spears)', 'Ritual ceremony scenes (offerings before smelting)'],
        type: 'city'
      }
    ]
  },

  // 104. Great Lakes Region - Ntusi Earthworks
  ntusi: {
    id: 'ntusi',
    name: 'Ntusi',
    coordinates: [-0.85, 31.65],
    region: 'Great Lakes (Uganda)',
    locations: [
      {
        id: 'ntusi-settlement',
        name: 'Ntusi Earthworks',
        description: 'Bigo-style earthworks of the Great Lakes',
        longDescription: `Ntusi (10th-14th century CE) was a major settlement in the Great Lakes region, featuring large artificial earthworks—raised platforms (Ntusi meaning "raised structure") and shallow valleys that may have been cattle enclosures (bomas). The site's size (300 hectares) suggests a population of thousands, with evidence of craft specialization (pottery, ironworking, ivory carving). Artifacts include terra cotta figurines of cattle (with distinctive long horns), humans (with elaborate hairstyles), and possibly banana cultivation (banana seeds). The site is associated with the Bachwezi, legendary founders of the Kitara Empire (the "Chwezi" dynasty, remembered in oral traditions as demigods). The earthworks may have served ritual, defensive, and administrative purposes in a society based on cattle (wealth measured in cattle) and bananas (a staple crop). The site is part of the "Bigo earthworks" tradition (named for Bigo Bya Mugenyi), with Ntusi the largest.`,
        imageRegenerated: '/images/sites/ntusi-regenerated.jpg',
        imageCurrent: '/images/sites/ntusi-current.jpg',
        scene: 'The Earthworks of the Bachwezi',
        visualHighlights: ['Artificial raised platforms (Ntusi meaning "raised")', 'Cattle figurines (terra cotta with long horns)', 'Valley enclosures (possible cattle bomas)', 'Bigo earthwork style (ditches and banks)', 'Ritual center remains (pottery and iron slag)'],
        type: 'city'
      }
    ]
  },

  // 105. Bigo Bya Mugenyi - The Fort of the Stranger
  bigoByaMugenyi: {
    id: 'bigo-bya-mugenyi',
    name: 'Bigo Bya Mugenyi',
    coordinates: [-0.7167, 31.5333],
    region: 'Great Lakes (Uganda)',
    locations: [
      {
        id: 'bigo-earthworks',
        name: 'Bigo Bya Mugenyi',
        description: 'Massive earthwork ditch system',
        longDescription: `Bigo Bya Mugenyi ("Fort of the Stranger") is the largest of the Bigo earthworks in the Great Lakes region, consisting of a 6.5-kilometer ditch and bank system enclosing 10 square kilometers. The site dates to the 14th-16th centuries CE, based on radiocarbon dating of charcoal from the ditch fills. The ditch system may have served as cattle enclosures (capable of holding up to 2,000 head), defensive works (walls for protection), ritual boundaries (separating sacred from profane), or symbols of royal power (displaying the king's ability to mobilize labor). The scale implies a high degree of social organization (centralized state, professional army, tribute system). Oral traditions associate Bigo with the Bachwezi dynasty of the Kitara Empire (the "Chwezi" kings, including Ndahura, Mulindwa, and Wamara). The site's design suggests a hierarchical society with a king (the "Mukama") controlling cattle wealth, military defense, and ritual authority. The name "Bigo" means "ditch" in Runyankore, referring to the earthwork's ditch-and-bank style.`,
        imageRegenerated: '/images/sites/bigo-regenerated.jpg',
        imageCurrent: '/images/sites/bigo-current.jpg',
        scene: 'The Fort of the Stranger',
        visualHighlights: ['6.5 km ditch and bank system (earthworks)', 'Royal cattle enclosures (bomas)', 'Bachwezi dynasty legends (Kitara Empire)', 'Defensive earthwork walls (cyclopean)', 'Ritual "son" stone sites (believed to move)'],
        type: 'monument'
      }
    ]
  },

  // 106. Great Lakes Settlement - Lakeside Communities
  greatLakes: {
    id: 'great-lakes',
    name: 'Great Lakes Settlement',
    coordinates: [-2.0, 29.0],
    region: 'Great Lakes (Rwanda/Burundi)',
    locations: [
      {
        id: 'great-lakes-community',
        name: 'Great Lakes Settlement',
        description: 'Fishing, farming, and early community life',
        longDescription: `The Great Lakes region of East Africa—with its fertile volcanic soils (rich in potassium, phosphorus), abundant rainfall (1,000-1,500mm per year), and rich fisheries—supported some of the densest Bantu populations. By 500 CE, hierarchical societies emerged (with cattle-owning elites and farming commoners), precursors to kingdoms like Rwanda, Burundi, and Buganda (the "Interlacustrine Kingdoms"). Great Lakes settlements were often located near lakeshores (Lake Victoria, Lake Tanganyika, Lake Kivu, Lake Edward, Lake Albert), combining fishing (tilapia, Nile perch, lungfish), agriculture (particularly bananas, a Southeast Asian crop that reached Africa via Madagascar, allowing continuous harvest and population growth), and cattle keeping (the long-horned Ankole cattle, symbols of wealth). The staple bananas (plantains) allowed continuous harvest (unlike grains, which required seasonal storage), supporting population growth and specialization (artisans, soldiers, priests). Elite burials with iron tools (spears, axes), jewelry (copper, bronze, gold), and in later periods, imported glass beads (trade with the Swahili coast), document the emergence of social hierarchy. The region's dense population (estimates of 50-100 people per square kilometer) made the Great Lakes a secondary center of Bantu expansion east (to the coast) and south (to the Zambezi).`,
        imageRegenerated: '/images/sites/great-lakes-regenerated.jpg',
        imageCurrent: '/images/sites/great-lakes-current.jpg',
        scene: 'The Lakeside Kingdoms',
        visualHighlights: ['Lakeshore settlements (Lake Victoria, Tanganyika)', 'Banana cultivation (plantains, continuous harvest)', 'Fishing communities (tilapia, Nile perch)', 'Emerging social hierarchy (elite burials with beads)', 'Cattle wealth (long-horned Ankole cattle)'],
        type: 'city'
      }
    ]
  },

  // 107. Congo Rainforest Trade - Forest Paths
  congoTrade: {
    id: 'congo-trade',
    name: 'Congo Rainforest Trade Route',
    coordinates: [0.0, 22.0],
    region: 'Central Africa (Congo Basin)',
    locations: [
      {
        id: 'congo-forest-trails',
        name: 'Congo Rainforest Trade Path',
        description: 'Dense forest trade routes with caravans',
        longDescription: `The Congo rainforest, despite its challenging environment (dense vegetation, high humidity, disease-carrying insects, and tse tse flies), had trade networks connecting communities across hundreds of kilometers. Forest paths, often along river routes (the Congo River and its tributaries, navigable for thousands of kilometers), were used by traders carrying goods—bark cloth (from Ficus trees, used for clothing and bedding), medicines (from medicinal plants, including the Iboga shrub for rituals), ivory (from forest elephants), and wild game products (smoked meat, hides, feathers, claws). The Bantu expansion into the rainforest required adaptation of farming, ironworking, and social organization to the forest environment. Bantu populations remained relatively sparse in the deep forest until the development of the banana as a staple—a Southeast Asian crop that thrived in forest clearings. These trade routes connected the rainforest to the savanna, exchanging forest products (ivory, cola nuts, medicinal bark) for savanna grains (millet, sorghum), metals (copper from Katanga, iron from the Great Lakes), and later, coastal goods (glass beads, cloth from the Swahili coast).`,
        imageRegenerated: '/images/sites/congo-trade-regenerated.jpg',
        imageCurrent: '/images/sites/congo-trade-current.jpg',
        scene: 'Paths Through the Rainforest',
        visualHighlights: ['Forest trail caravans (porters with head loads)', 'Footbridge crossings (logs over small streams)', 'River route trade (dugout canoes)', 'Forest-savanna exchange (ivory, cola, medicines)', 'Rainforest Bantu adaptations (clearings, bananas)'],
        type: 'city'
      }
    ]
  },

  // 108. Luba Kingdom - Mulopwe Traditions
  lubaKingdom: {
    id: 'luba-kingdom',
    name: 'Luba Kingdom (Katanga)',
    coordinates: [-5.5, 26.5],
    region: 'Central Africa (DR Congo)',
    locations: [
      {
        id: 'luba-capital',
        name: 'Luba Kingdom',
        description: 'Centralized state of the Upemba Depression',
        longDescription: `The Luba Kingdom (c. 1500-1900 CE) emerged in the Upemba Depression (Katanga province) of the southeastern Congo, controlling trade in copper, salt, and palm oil. The kingdom was founded by King Kongolo ("Mwindo" epic cycle), who united local chiefdoms into a centralized state with a divine king (the "Mulopwe"), who ruled through provincial governors (the "Fumu"). The capital, at the Lake Boya site, featured a royal palace (clay and wood), a burial ground for kings (the "Tomb of the Mulopwe"), and blacksmithing workshops (the king's power associated with ironworking). Luba art is famous for its "bow stands" (mpoko) depicting female figures, "memory boards" (lukasa) used for oral history recitation, and "royal staffs" (lukasa) with traditional rulers' names. The Luba kingdom influenced neighboring states (Lunda, Kuba, Chokwe) and is remembered through oral traditions (the "Epic of Mwindo," one of the longest and most detailed African oral epics).`,
        imageRegenerated: '/images/sites/luba-regenerated.jpg',
        imageCurrent: '/images/sites/luba-current.jpg',
        scene: 'The Kingdom of the Mulopwe',
        visualHighlights: ['Royal palace at Lake Boya (clay and wood)', 'Blacksmithing workshops (ironworking)', 'Lukasa memory boards (oral history)', 'Burial ground of the Mulopwe', 'Mwindo epic oral tradition'],
        deity: 'Vidye (Supreme God)',
        type: 'city'
      }
    ]
  },

  // 109. Kuba Kingdom - Textile Artistry
  kubaKingdom: {
    id: 'kuba-kingdom',
    name: 'Kuba Kingdom (Kasai)',
    coordinates: [-4.5, 20.5],
    region: 'Central Africa (DR Congo)',
    locations: [
      {
        id: 'kuba-capital',
        name: 'Kuba Kingdom',
        description: 'Political center of the Bushoong people',
        longDescription: `The Kuba Kingdom (c. 1600-1900 CE) was a federation of 18 ethnic groups in the Kasai region, centered at the capital of Nsheng. The kingdom was famous for its textile art (raffia cloth), with the king (the "Nyim") wearing a "shaan" (ceremonial belt) and "bmwana" (leopard skin) as emblems of authority. Kuba weaving produced the "mbal" cloth (highly decorated with geometric patterns), used for royal robes and ritual regalia. The kingdom also produced masks (the "ngady amwaash" mask representing the founding mother, the "mboom" mask representing the founding father), carved wooden cups (for palm wine), and the "itoon" (royal thrones with carved figures). The Kuba maintained elaborate oral traditions (the "Epic of Woot," the founding hero) and a courtly art style that influenced neighboring peoples (Luba, Lunda, Chokwe).`,
        imageRegenerated: '/images/sites/kuba-regenerated.jpg',
        imageCurrent: '/images/sites/kuba-current.jpg',
        scene: 'The Raffia Kingdom',
        visualHighlights: ['Raffia cloth production (mbal textiles)', 'Ngady amwaash mask (founding mother)', 'Mboom mask (founding father)', 'Royal thrones (itoon with carved figures)', 'Epic of Woot oral tradition'],
        type: 'city'
      }
    ]
  },

  // 110. Kongo Kingdom - Manikongo Dynasty
  kongoKingdom: {
    id: 'kongo-kingdom',
    name: 'Kingdom of Kongo (Mbanza Kongo)',
    coordinates: [-6.0, 15.0],
    region: 'Central Africa (Angola/DR Congo)',
    locations: [
      {
        id: 'mbanza-kongo',
        name: 'Mbanza Kongo',
        description: 'Capital of the Kongo Kingdom',
        longDescription: `Mbanza Kongo (São Salvador) was the capital of the Kingdom of Kongo (c. 1390-1914), one of the largest and most centralized states in West-Central Africa. The city was built on a plateau overlooking the surrounding forests, with a royal palace (the "King's House"), a cathedral (the "Church of Our Lady of the Rosary") built by Portuguese masons (1495), and a circular "administrative section" (the "Manga") where the king's council met. The kingdom controlled the copper trade (from the Mindouli mines), ivory trade (from forest elephants), and slave trade (with the Portuguese, initially as prisoners of war, then as a commercial enterprise). The king (the "Manikongo") ruled through appointed governors (the "Mani" of each province). The kingdom converted to Christianity under King Nzinga a Nkuwu (João I, 1491) and King Afonso I (1506-1543), who established a Christian court, sent his sons to study in Lisbon, and corresponded with Portuguese kings (his letters describe the slave trade's disruptions). The city's cathedral (the "Nkulumbimbi," believed to have been built by angels) was rebuilt in the 20th century.`,
        imageRegenerated: '/images/sites/kongo-regenerated.jpg',
        imageCurrent: '/images/sites/kongo-current.jpg',
        scene: 'The Manikongo\'s Capital',
        visualHighlights: ['Royal palace (King\'s House, Mbanza Kongo)', 'Cathedral of Nkulumbimbi (with angel legend)', 'Administrative section (Manga)', 'Copper and ivory trade', 'Portuguese-era church (Church of Our Lady)'],
        deity: 'Nzambi Mpungu (Supreme God)',
        type: 'city'
      }
    ]
  }
};

// ========== SECTION 11: SOUTHERN AFRICA (111-120) ==========
export const southernAfricaSites: Record<string, Site> = {
  // 111. Great Zimbabwe - The Stone City
  greatZimbabwe: {
    id: 'great-zimbabwe',
    name: 'Great Zimbabwe',
    coordinates: [-20.2667, 30.9333],
    region: 'Southern Africa (Zimbabwe)',
    locations: [
      {
        id: 'great-zimbabwe-ruins',
        name: 'Great Zimbabwe',
        description: 'Massive stone enclosure of the Shona kingdom',
        longDescription: `Great Zimbabwe (11th-15th century CE) was the capital of the Shona kingdom, the largest stone structure in sub-Saharan Africa. The city's massive granite walls (11 meters high, 5 meters thick) were built without mortar, using a technique of dry-stone walling where stones were precisely shaped to fit. The Great Enclosure, with its 9-meter-high conical tower (solid stone, no opening), was likely a royal palace or ritual center, possibly for the "Mwari" cult (Shona supreme deity). The Hill Complex (the Acropolis) served as the royal residence, with evidence of iron smelting (slag heaps), gold working (gold wire and beads), and trade goods from China (celadon porcelain), Persia (faience earthenware), and India (glass beads). Great Zimbabwe controlled the gold trade (from the Mazoe River, the source of gold for Swahili coast merchants) between the interior and the Swahili coast (Sofala, Kilwa), exporting gold, ivory, and copper in exchange for glass beads, cloth, and pottery. The city's name ("House of Stone" in Shona) gave its name to the modern nation of Zimbabwe (1980). The site was looted extensively after its discovery by Europeans (Karl Mauch, 1871, who took the famous "Zimbabwe Birds" soapstone carvings).`,
        imageRegenerated: '/images/sites/great-zimbabwe-regenerated.jpg',
        imageCurrent: '/images/sites/great-zimbabwe-current.jpg',
        scene: 'The Great Enclosure of Zimbabwe',
        visualHighlights: ['11-meter granite walls (dry-stone construction)', 'Conical tower (solid stone, 9 meters)', 'Hill complex acropolis (royal residence)', 'Chinese celadon porcelain and Persian faience', 'Gold trade route control (Swahili coast)'],
        type: 'city'
      },
      {
        id: 'great-zimbabwe-hill',
        name: 'Great Zimbabwe Hill Complex',
        description: 'Acropolis of the Shona kings',
        longDescription: `The Hill Complex is the oldest part of Great Zimbabwe (11th-13th century), built on a steep granite hill (precipitous, with narrow passages for defense). The complex includes the "Western Enclosure" (with a soapstone bird carved on a monolith), the "Eastern Enclosure" (with a "altar" of soapstone monoliths), and the "Royal Residence" (with a "daga" platform for sleeping). The Hill Complex was the ceremonial and religious center of Great Zimbabwe, where the king (the "Mambo") lived, carried out rituals, and received tribute. The Hill top commands a view of the entire valley, visible for kilometers. The "Great Zimbabwe Birds" (soapstone carvings of birds on monoliths, 8 found) were probably placed on such monoliths in the Hill Complex.`,
        imageRegenerated: '/images/sites/great-zimbabwe-hill-regenerated.jpg',
        imageCurrent: '/images/sites/great-zimbabwe-hill-current.jpg',
        scene: 'The Hill of the Kings',
        visualHighlights: ['Steep granite hill (precipitous defenses)', 'Soapstone Zimbabwe birds (8 found)', 'Western Enclosure with bird monoliths', 'Royal daga platform', 'Valley view (panorama of whole site)'],
        type: 'city'
      }
    ]
  },

  // 112. Mapungubwe - The Golden Rhino
  mapungubwe: {
    id: 'mapungubwe',
    name: 'Mapungubwe',
    coordinates: [-22.2, 29.4],
    region: 'Southern Africa (South Africa/Zimbabwe border)',
    locations: [
      {
        id: 'mapungubwe-hill',
        name: 'Mapungubwe Hill',
        description: 'Sacred hilltop settlement',
        longDescription: `Mapungubwe (1075-1220 CE) was the first class-based social system in southern Africa, predating Great Zimbabwe. The kingdom controlled the gold-ivory trade route to the Indian Ocean (via the Limpopo River and Swahili coast). The site features a hilltop where royalty lived, separated from commoners below (the "Maphungubwe" hill, sandstone, collapsed to form a natural fortress). Excavations uncovered the famous Golden Rhino (a gold foil-covered wooden figurine, c. 1220-1290 CE, found in Grave 10), a gold sceptre (a staff with gold binding), gold bangles (worn on the arm), gold wire, gold beads, and other gold objects buried with elite figures (the "Mapungubwe Treasure"). Mapungubwe's social hierarchy, with kings separated from ordinary people, established patterns followed by later Zimbabwe states. The site's climate shift (drought, the "Mapungubwe desiccation," c. 1300 CE) led to the rise of Great Zimbabwe.`,
        imageRegenerated: '/images/sites/mapungubwe-regenerated.jpg',
        imageCurrent: '/images/sites/mapungubwe-current.jpg',
        scene: 'The Hill of the Golden Rhino',
        visualHighlights: ['Golden Rhino figurine (gold foil on wood)', 'Royal hilltop enclosure (cliff fortress)', 'Gold burial goods (scepters, bowls, bracelets)', 'Ivory trade evidence (ivory armlets)', 'Social hierarchy layers (royalty vs commoners)'],
        type: 'city'
      },
      {
        id: 'mapungubwe-southern',
        name: 'Mapungubwe Southern Terrace',
        description: 'Commoner settlement below the hill',
        longDescription: `The Southern Terrace of Mapungubwe is the residential area for commoners (ironworkers, potters, farmers), separated from the hilltop by a stone wall (the "Great Wall of Mapungubwe," 3 meters high). The area contains remains of iron-smelting furnaces (for producing iron tools and weapons), pottery kilns (producing the distinctive "Mapungubwe ware" with incised and stamped decorations), storage pits (for storing grain), and midden deposits (with bones of cattle, sheep, goats, and wild game). The terrace was connected to the hilltop by a narrow passage (controlled access). The area also includes the "Royal Cemetery" (elite burials outside the hilltop but near the wall) and the "Southern Entrance" (where visitors entered the town).`,
        imageRegenerated: '/images/sites/mapungubwe-south-regenerated.jpg',
        imageCurrent: '/images/sites/mapungubwe-south-current.jpg',
        scene: 'The Commoner Town',
        visualHighlights: ['Great Wall of Mapungubwe (3 meters high)', 'Iron-smelting furnaces (clay shafts)', 'Pottery kilns (Mapungubwe ware)', 'Storage pits for grain (millet, sorghum)', 'Cattle bones (wealth markers)'],
        type: 'city'
      }
    ]
  },

  // 113. Thulamela - Late Zimbabwe Tradition
  thulamela: {
    id: 'thulamela',
    name: 'Thulamela',
    coordinates: [-22.43, 30.33],
    region: 'Southern Africa (South Africa)',
    locations: [
      {
        id: 'thulamela-ruins',
        name: 'Thulamela',
        description: 'Stone-walled settlement in Kruger National Park',
        longDescription: `Thulamela (13th-17th century CE) was a stone-walled settlement in the northern Kruger National Park, part of the Zimbabwe tradition's southern extension (in Venda-speaking area). The site features a royal area on the hilltop (the "Khami-type" walls, decorated with herringbone patterns), surrounded by walls and terraces (creating a stepped appearance). Excavations uncovered elite burials (Grave 1, a male with gold and glass bead ornaments; Grave 2, a female with 250 gold beads), with gold bangles (beaten gold), gold beads (threaded on a string), glass beads (trade beads from the Swahili coast, including "Kanassa" beads from India), and Chinese celadon porcelain (the "Kruger National Park bowl," c. 1400 CE). The name Thulamela means "to give birth" in Venda, and the site is still considered sacred by local communities. The settlement's location on a high hill provided defense (steep slopes), controlling access to gold-bearing rivers to the west (the Luvuvhu River, where gold was panned). Thulamela was abandoned before European contact (c. 1650) but rediscovered in 1991 (by the Kruger National Park archaeologists).`,
        imageRegenerated: '/images/sites/thulamela-regenerated.jpg',
        imageCurrent: '/images/sites/thulamela-current.jpg',
        scene: 'The Hill That Gives Birth',
        visualHighlights: ['Stone-walled hilltop enclosure (Khami-style)', 'Gold bead and bangle finds (Grave 2, 250 beads)', 'Glass trade beads from India (Kanassa beads)', 'Royal burial remains (male and female elites)', 'Defensive terraces (stepped walls)'],
        type: 'city'
      }
    ]
  },

  // 114. Khami - Successor to Great Zimbabwe
  khami: {
    id: 'khami',
    name: 'Khami Ruins',
    coordinates: [-20.15, 28.43],
    region: 'Southern Africa (Zimbabwe)',
    locations: [
      {
        id: 'khami-ruins',
        name: 'Khami',
        description: 'Second capital of the Zimbabwe tradition',
        longDescription: `Khami (1450-1650 CE) became the capital of the Torwa state after Great Zimbabwe's decline (due to over-exploitation of resources, gold depletion). The site features distinctive terraced platforms (the "Khami-type" platforms, stepped with stone walls), and decorative stonework (daga, a clay plaster, with chevron and herringbone patterns—"Khami-style" decoration). The hill complex, with its royal residence (the "Hill Ruins," a stone-walled enclosure), is separated from the lower town by a gully (the "Pass"). The site includes a Cross-Platform (a stone platform shaped like a cross, possibly for ritual), Portuguese trading goods (including an iron spoon, glass beads, and a "Portuguese" cannon?), indicating continued contact with Swahili coast ports (Mozambique). Khami was eventually abandoned after Nguni invasions from the south (the "Mfecane," c. 1820-1830). The site's architecture shows the evolution of Zimbabwe-style stone building (from Great Zimbabwe's massive walls to Khami's terraces and patterns), leading toward later Mutapa state structures.`,
        imageRegenerated: '/images/sites/khami-regenerated.jpg',
        imageCurrent: '/images/sites/khami-current.jpg',
        scene: 'The Terraced Capital',
        visualHighlights: ['Terraced stone platforms (stepped architecture)', 'Chevron and herringbone wall patterns (Khami-style)', 'Portuguese trade goods (iron spoon, glass beads)', 'Royal hill complex (Hill Ruins)', 'Cross platforms (ritual areas for Mwari cult)'],
        type: 'city'
      }
    ]
  },

  // 115. Bumbusi - Zimbabwean Platform
  bumbusi: {
    id: 'bumbusi',
    name: 'Bumbusi',
    coordinates: [-18.85, 27.0],
    region: 'Southern Africa (Zimbabwe)',
    locations: [
      {
        id: 'bumbusi-ruins',
        name: 'Bumbusi National Monument',
        description: 'Stone platform and walls on the Zambezi',
        longDescription: `Bumbusi (12th-18th century CE) is a stone-walled settlement on the Zambezi River, in the Hwange National Park. The site features a "platform" (a raised stone terrace), stone walls (some 6 meters high), and a "daga" (clay) floor. The site was a trading post for the Swahili coast, with finds of glass beads and Chinese porcelain (the "Bumbusi bowl," c. 15th century). The site's name means "the meeting place" in Nambya (the local Bantu language). The site is less known but well-preserved, with a distinctive "enclosure" (an oval stone-walled area, for cattle) and "raised platform" (maybe a throne).`,
        imageRegenerated: '/images/sites/bumbusi-regenerated.jpg',
        imageCurrent: '/images/sites/bumbusi-current.jpg',
        scene: 'The Meeting Place on the Zambezi',
        visualHighlights: ['Stone platform (raised terrace)', 'Stone walls (6 meters high)', 'Daga clay floors (with finger impressions)', 'Glass bead finds (Indian Ocean trade)', 'Platform as likely throne'],
        type: 'city'
      }
    ]
  },

  // 116. Mutapa Empire - Mwenemutapa Throne
  mutapa: {
    id: 'mutapa',
    name: 'Mutapa Empire',
    coordinates: [-17.0, 31.0],
    region: 'Southern Africa (Zimbabwe/Mozambique)',
    locations: [
      {
        id: 'mutapa-capital',
        name: 'Mutapa Empire',
        description: 'Gold-trading empire of the Mwenemutapa',
        longDescription: `The Mutapa Empire (c. 1450-1760) was the successor state to Great Zimbabwe, controlling the gold trade from the Mazoe River to the Swahili coast (Sofala, Mozambique). The capital was called the "Mwenemutapa" ("Lord of the Conquered Land"), and the king's palace (the "Zimba" or "Royal Enclosure") was a wooden structure with ivory inlays, decorated with gold. The empire's prosperity came from gold mining (panning the Mazoe, Panhame, and other rivers), ivory trade (from elephants in the Zambezi valley), and the slave trade (with Portuguese traders from the 16th century). The Mutapa Empire, unlike Great Zimbabwe, did not build in stone but in wood, so fewer remains survive, but oral traditions (the "Monomotapa" chronicles recorded by Portuguese) describe the capital's grandeur: "The king sits on a throne of ivory, with his feet on gold, surrounded by his court."`,
        imageRegenerated: '/images/sites/mutapa-regenerated.jpg',
        imageCurrent: '/images/sites/mutapa-current.jpg',
        scene: 'The Lord of the Conquered Land',
        visualHighlights: ['Wooden palace (Zimba) with ivory inlay', 'Gold trading', 'Ivory from Zambezi elephants', 'Portuguese trading post (feira)', 'Mwenemutapa throne (ivory)'],
        type: 'city'
      }
    ]
  },

  // 117. Rozwi Empire - Ivory and Slaves
  rozwi: {
    id: 'rozwi',
    name: 'Rozwi Empire',
    coordinates: [-20.0, 30.0],
    region: 'Southern Africa (Zimbabwe)',
    locations: [
      {
        id: 'rozwi-capital',
        name: 'Rozwi Empire',
        description: 'Successor state to the Mutapa',
        longDescription: `The Rozwi Empire (c. 1660-1860) was the successor to the Mutapa, established by the Rozwi (or Rozvi) people of the Njanja clan. The capital was at Danangombe (Dhlo Dhlo), a stone-walled settlement with Khami-style architecture (terraced platforms, herringbone patterns). The empire controlled the ivory trade (musendo trade), gold trade (from the Mazoe and Panhame rivers), and the slave trade (exported to Portuguese Mozambique). The Rozwi kings, on their "ivory throne" (actually a stool with ivory legs), were called "Changamire," meaning "the great king." The Rozwi Empire fell due to Nguni invasions (the "Mfecane," c. 1820s) and later military conflict with the Ndebele (who settled in the area, establishing Matabeleland).`,
        imageRegenerated: '/images/sites/rozwi-regenerated.jpg',
        imageCurrent: '/images/sites/rozwi-current.jpg',
        scene: 'The Changamire\'s Domain',
        visualHighlights: ['Danangombe capital (Dhlo Dhlo)', 'Khami-style architecture (terraces)', 'Ivory throne (Changamire)', 'Nguni invasion battle scene', 'Portuguese trade goods'],
        type: 'city'
      }
    ]
  },

  // 118. Ndebele Kingdom - Matabeleland
  ndebele: {
    id: 'ndebele',
    name: 'Ndebele Kingdom',
    coordinates: [-20.0, 28.0],
    region: 'Southern Africa (Zimbabwe)',
    locations: [
      {
        id: 'ndebele-capital',
        name: 'Ndebele Kingdom (Matabeleland)',
        description: 'Military state of the Mfecane period',
        longDescription: `The Ndebele Kingdom (c. 1820s-1890s) was a military state established by Mzilikazi, a former general of Shaka (the Zulu king). The Ndebele (also called "Matabele") fled the Mfecane (the "Great Displacement") wars in southern Africa, crossing the Limpopo River into present-day Zimbabwe (c. 1838) and settling in the area called "Matabeleland" (the western region). The capital was Bulawayo (meaning "place of slaughter" or "kraal of the regiment"), a military kraal with regimented housing (the "ibutho" age regiments). The kingdom was organized in a military system, with a standing army (the "amabutho"), a regimental age-grade system, and the "induna" (a chief). The Ndebele raided neighboring Shona and Rozwi peoples for cattle, women, and tribute. The kingdom was defeated by the British South Africa Company (1893), leading to the establishment of Rhodesia.`,
        imageRegenerated: '/images/sites/ndebele-regenerated.jpg',
        imageCurrent: '/images/sites/ndebele-current.jpg',
        scene: 'The Military Kingdom of the Ndebele',
        visualHighlights: ['Kraal (amabutho) military barracks', 'Regimental housing (ibutho)', 'Induna council meeting (chiefs)', 'The flight of Mzilikazi (escape from Shaka)', 'British South Africa Company war (1893)'],
        type: 'city'
      }
    ]
  },

  // 119. Twyfelfontein - Rock Art
  twyfelfontein: {
    id: 'twyfelfontein',
    name: 'Twyfelfontein (Ui-ǁAis)',
    coordinates: [-20.6, 14.5],
    region: 'Southern Africa (Namibia)',
    locations: [
      {
        id: 'twyfelfontein-art',
        name: 'Twyfelfontein Rock Art',
        description: 'One of Africa\'s largest concentrations of rock engravings',
        longDescription: `Twyfelfontein (Ui-ǁAis, "the water source") has over 2,500 rock engravings (petroglyphs) and rock paintings (pictographs), carved by the San people (Hunter-gatherers, ancestors of the Bushmen) over a period of 2,000 years (c. 1000 BCE - 1000 CE). The engravings depict animals (giraffes, rhinos, zebras, ostriches, elephant, lions, antelopes, wildebeest, aardvark), human figures (hunters with bows and arrows, dancers, shamans), and geometric patterns (circles, wavy lines, hand prints). The site also includes "cupules" (cup-shaped depressions). The engravings were made by pecking (using a hard stone to peck holes in the rock surface), then grinding (rubbing the holes to smooth them). The site is located in the Huab River valley, a semi-desert environment, and the rock surface is red sandstone (easy to carve). Twyfelfontein was declared a UNESCO World Heritage site in 2007, recognized as the largest and best-preserved rock art concentration in Africa.`,
        imageRegenerated: '/images/sites/twyfelfontein-regenerated.jpg',
        imageCurrent: '/images/sites/twyfelfontein-current.jpg',
        scene: 'The Stone Archive of the San',
        visualHighlights: ['2,500+ rock engravings (giraffes, rhinos, zebras)', 'Human figures with bows and arrows (hunters)', 'Shaman figures with raised arms (healing)', 'Cupules (cup-shaped depressions)', 'Red sandstone in Huab River valley'],
        type: 'monument'
      }
    ]
  },

  // 120. Tsodilo Hills - The Mountain of the Gods
  tsodilo: {
    id: 'tsodilo',
    name: 'Tsodilo Hills',
    coordinates: [-18.75, 21.75],
    region: 'Southern Africa (Botswana)',
    locations: [
      {
        id: 'tsodilo-art',
        name: 'Tsodilo Hills Rock Art',
        description: 'Over 4,000 rock paintings in the "Louvre of the Desert"',
        longDescription: `Tsodilo Hills (the "Mountain of the Gods" in Hambukushu tradition) contains over 4,000 rock paintings (pictographs) on the Male Hill, Female Hill, Child Hill, and North Hill (the hills forming a human figure). The site has been declared a UNESCO World Heritage site (2001), called the "Louvre of the Desert" for its dense concentration of art. The paintings depict animals (zebra, kudu, eland, elephant, rhino, giraffe, wildebeest, crocodile, fish), humans (hunters, dancers, and the "White Lady" figure, a woman with elaborate hairstyle and white body paint, not a European), and geometric patterns (circles, zigzags, wavy lines, grids). The site was used by the San people as a ritual center for over 100,000 years, with evidence of human activity from the Middle Stone Age. The "White Lady" panel (one of the most famous) is actually a San shaman, not a European woman, as originally misinterpreted. The hills are sacred to the local Hambukushu people, who believe they are the "home of the gods" and offer prayers at the sites.`,
        imageRegenerated: '/images/sites/tsodilo-regenerated.jpg',
        imageCurrent: '/images/sites/tsodilo-current.jpg',
        scene: 'The Louvre of the Desert',
        visualHighlights: ['Over 4,000 rock paintings (4 hills)', 'Male Hill (largest, with White Lady panel)', 'Female Hill (with geometric patterns)', 'Child Hill (the smallest)', 'Hambukushu offerings at sacred sites'],
        type: 'monument'
      }
    ]
  }
};
// ========== SECTION 12: NORTH AFRICA (Beyond Egypt) - 121-130 ==========
export const northAfricaSites: Record<string, Site> = {
  // 121. Garamantes - Saharan Kingdom
  garama: {
    id: 'garamantes-garama',
    name: 'Garama (Germa)',
    coordinates: [25.45, 13.1],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'garama-capital',
        name: 'Garama',
        description: 'Capital of the Garamantes civilization in the Sahara',
        longDescription: `Garama was the capital of the Garamantes civilization, a Saharan kingdom that flourished from 500 BCE to 700 CE in the Wadi al-Ajal. The city supported a population of 4,000-8,000 people in one of Earth's most arid environments. The Garamantes built an extensive network of underground channels (foggaras) that tapped fossil water, allowing agriculture in the heart of the Sahara—grapes, figs, dates, wheat, and barley. At Garama, archaeologists have found monumental stone architecture (including a palace and temple), cemeteries (with over 50,000 tombs), and evidence of craft production (pottery, glass, iron, bronze). The kingdom controlled trans-Saharan trade routes (the "Garama Road"), exporting salt (from the Sahara), slaves (from the south), and possibly gold (from the Niger River) to Rome. The Garamantes were described by Roman authors (Pliny, Ptolemy) as a warlike people with chariots. The kingdom declined after the Arab conquest (7th century CE), but Garama's foggaras remained in use until the 20th century.`,
        imageRegenerated: '/images/sites/garama-regenerated.jpg',
        imageCurrent: '/images/sites/garama-current.jpg',
        scene: 'The Saharan Capital of the Garamantes',
        visualHighlights: ['Monumental stone buildings (palace and temple)', 'Foggara-irrigated fields (underground channels)', 'Trans-Saharan trade center (salt, slaves, gold)', 'Desert adaptation (fossil water extraction)', 'Roman-era artifacts (glass, pottery, coins)'],
        type: 'city'
      },
      {
        id: 'garama-foggaras',
        name: 'Foggara Irrigation System',
        description: 'Underground channels tapping fossil water',
        longDescription: `The foggaras of the Garamantes are an engineering marvel, an underground channel system (qanat technology, originally from Persia) that taps fossil water aquifers beneath the Sahara. The system consists of a mother well (accessing the water table), a sloping tunnel (channeling water by gravity), and ventilation shafts (vertical shafts every 10-50 meters for access and cleaning). Over 750 foggaras, totaling thousands of kilometers, have been identified in the Wadi al-Ajal alone, representing an estimated 10 million man-days of labor. The foggaras supported intensive agriculture in an area receiving less than 50mm of rain per year, allowing the Garamantes to cultivate grapes (for wine), olives (for oil), figs, dates, wheat, and barley. The foggaras also supplied water to Garama's population and industry (ironworking, pottery). The system was maintained by slave labor, and the rights to water were controlled by the king.`,
        imageRegenerated: '/images/sites/garama-foggaras-regenerated.jpg',
        imageCurrent: '/images/sites/garama-foggaras-current.jpg',
        scene: 'The Underground Water of the Sahara',
        visualHighlights: ['Foggara tunnel (underground channel)', 'Ventilation shafts (access points)', 'Mother well (tapping fossil water)', 'Irrigated fields (date palms, grapes, figs)', 'Slave labor scenes (maintenance)'],
        type: 'monument'
      }
    ]
  },

  // 122. Tassili n'Ajjer - The Green Sahara Gallery
  tassili: {
    id: 'tassili-najjer',
    name: 'Tassili n\'Ajjer',
    coordinates: [25.5, 9.0],
    region: 'North Africa (Algeria)',
    locations: [
      {
        id: 'tassili-rock-art',
        name: 'Tassili n\'Ajjer Rock Art',
        description: 'Prehistoric art showing climate and cultural change',
        longDescription: `Tassili n'Ajjer (Plateau of the Chasms) contains one of the most important collections of prehistoric rock art in the world, with over 15,000 engravings and paintings spanning from 10,000 BCE to the Christian era. The art documents the dramatic climatic transformation of the Sahara from a green savanna with lakes, rivers, and abundant wildlife to the desert we know today. Early images (10,000-8000 BCE) show elephants, giraffes, rhinos, hippos, and crocodiles; later scenes (8000-4000 BCE) depict domesticated cattle, sheep, goats, and dogs; still later scenes (4000-2000 BCE) show horses, chariots, and human figures with weapons; the latest scenes (2000 BCE- 1 CE) depict camels, the "ship of the desert." The paintings also depict human activities—hunting (with bows and arrows), dancing (masks and costumes), warfare (spears and shields), and ritual (the "Round Head" figures, possibly shamans with mushroom-shaped heads). The "Round Head" (6000-4000 BCE) and "Bovidian" (4000-2000 BCE) styles are masterpieces of prehistoric art, with naturalistic figures, perspective, and composition. The site is named for the "Finger of Tassili" (rock pillar) and the "Heart of Tassili" (rock formation).`,
        imageRegenerated: '/images/sites/tassili-regenerated.jpg',
        imageCurrent: '/images/sites/tassili-current.jpg',
        scene: 'The Green Sahara Gallery',
        visualHighlights: ['15,000+ rock paintings and engravings', 'Elephant and giraffe images (Green Sahara)', 'Climate change documentation (savanna to desert)', 'Prehistoric cultural evolution (hunter to herder to charioteer)', 'Dramatic sandstone formations (Finger of Tassili)'],
        type: 'monument'
      },
      {
        id: 'tassili-round-head',
        name: 'Round Head Paintings',
        description: 'Shamanistic art of the early Holocene',
        longDescription: `The "Round Head" paintings (5-8 meters high, c. 6000-4000 BCE) are the oldest and most mysterious art at Tassili. The figures have bulbous, rounded heads (often without facial features), no mouths, and elongated, thin bodies, with arms and legs in dynamic poses. The figures are often interpreted as shamans (spiritual leaders) in trance, with their mushroom-shaped heads representing altered states of consciousness. The paintings include the "Great Round Head" (a 6-meter-high figure with raised arms), the "Swimming Round Head" (a figure floating upside down), and the "Round Head with Plumes" (a figure wearing a feathered headdress). The paintings are found in rock shelters (the "Cave of the Swimmers") often near water sources (ancient lakes).`,
        imageRegenerated: '/images/sites/tassili-round-head-regenerated.jpg',
        imageCurrent: '/images/sites/tassili-round-head-current.jpg',
        scene: 'The Shamanistic Art of the Sahara',
        visualHighlights: ['Round Head figures (bulbous, mushroom-like heads)', 'Great Round Head (6 meters high)', 'Swimming Round Head (floating figure)', 'Shamanistic trance scenes (altered consciousness)', 'Mushroom-shaped heads (ritual context)'],
        type: 'monument'
      }
    ]
  },

  // 123. Carthage - Phoenician Empire
  carthageDetailed: {
    id: 'carthage-detailed',
    name: 'Carthage',
    coordinates: [36.8528, 10.3236],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'carthage-ports',
        name: 'The Ports of Carthage (Cothon)',
        description: 'Circular naval base and commercial harbor',
        longDescription: `The Cothon (artificial harbor) of Carthage was the most impressive naval base of the ancient world. The circular inner harbor (325 meters in diameter) once housed up to 220 warships in ship-sheds arranged around a central island with the admiral's headquarters (the "Admiral's Island"). Each ship-shed had a ramp for pulling ships out of the water for repair. The outer rectangular commercial harbor (456 x 350 meters) handled merchant vessels, with docks and warehouses (the "Emporium") for goods from across the Mediterranean (tin from Britain, silver from Spain, gold from West Africa, ivory from Central Africa). The harbors were connected by a canal (the "Terminal Canal"). The harbor's sophisticated design was later copied by Rome (Portus, Trajan's harbor) and Constantinople (the Harbor of Theodosius). When Polybius described the harbor in 146 BCE, he marveled at its sophistication—ships could be pulled from the water, repaired, and relaunched without entering the main harbor, making Carthage's navy always ready for action. The harbors were filled in after the Roman destruction (the "Third Punic War") and later used for housing.`,
        imageRegenerated: '/images/sites/carthage-ports-regenerated.jpg',
        imageCurrent: '/images/sites/carthage-ports-current.jpg',
        scene: 'The Naval Arsenal of Carthage',
        visualHighlights: ['325-meter circular harbor (220 ship-sheds)', 'Admiral\'s island headquarters (central)', 'Commercial harbor (456 x 350 meters)', 'Double harbor design (military + commercial)', 'Phoenician-Punic engineering (Polybius marvel)'],
        deity: 'Tanit',
        type: 'city'
      },
      {
        id: 'carthage-tophet',
        name: 'Tophet of Carthage',
        description: 'Sacred ritual burial ground',
        longDescription: `The Tophet of Carthage is a unique sacred precinct containing thousands of funerary urns with the cremated remains of infants and animals (an estimated 20,000 urns, some containing bones of lambs, calves, birds). This ritual site, dedicated to the gods Baal Hammon (the chief god) and Tanit (the consort), was used from the 8th to the 2nd centuries BCE. The site's purpose remains debated—some scholars interpret it as evidence of child sacrifice (condemned by Greek and Roman writers, Diodorus Siculus and Plutarch), while others see it as a burial ground for stillborn infants and young children (c. 5% of burials show signs of pathological conditions). Regardless, the Tophet represents a distinctive Phoenician-Punic religious practice found across Carthage's colonies (also at Motya, Tharros, Nora, Sulcis). The stelae covering the site (over 6,000) bear symbols of the goddess Tanit (a triangle with a circle and horizontal bar) and inscriptions dedicating the offerings ("MLK" sacrifice, the "molk" sacrifice) to the gods, providing invaluable evidence of Carthaginian religion, language, and social structure—including the roles of aristocratic families in maintaining the sanctuary, as their names appear on the stelae as donors. The Tophet was excavated by French archaeologists (1920s) and German archaeologists (1980s).`,
        imageRegenerated: '/images/sites/carthage-tophet-regenerated.jpg',
        imageCurrent: '/images/sites/carthage-tophet-current.jpg',
        scene: 'The Sacred Precinct of Tanit',
        visualHighlights: ['Thousands of funerary urns (cremated remains)', 'Tanit symbol stelae (triangle-circle-horizontal bar)', 'Baal Hammon inscriptions in Punic ("MLK")', 'Phoenician religious iconography (lunar symbols)', 'Punic ritual vessels (for offerings)'],
        deity: 'Tanit',
        type: 'tomb'
      },
      {
        id: 'carthage-byrsa',
        name: 'Byrsa Hill',
        description: 'Citadel and heart of Carthage',
        longDescription: `Byrsa Hill (the "citadel" of Carthage) was the political and religious center of the city, named for the legend of Queen Dido (Elissa) who was allowed to occupy as much land as a bull's hide (byrsa) could cover. The hill (58 meters high) was fortified with a massive wall (the "Byrsa Wall," 5 kilometers long) and contained the city's acropolis, with a temple to Eshmun (the healing god), a temple to Tanit (the "Sanctuary of Tanit"), and the "Temple of Apollo" (actually the temple of Baal Hammon). After the Roman conquest (146 BCE), the hill was flattened (the top was removed to level the site), and the "Roman Byrsa" was built, with a forum (the "Forum of Carthage"), basilica (the "Basilica of the Byrsa"), and monumental arches. The area is now the Carthage National Museum, with Punic and Roman artifacts.`,
        imageRegenerated: '/images/sites/carthage-byrsa-regenerated.jpg',
        imageCurrent: '/images/sites/carthage-byrsa-current.jpg',
        scene: 'The Citadel of Queen Dido',
        visualHighlights: ['Byrsa Wall (5 kilometers, massive fortification)', 'Temple of Eshmun (healing god)', 'Sanctuary of Tanit (acropolis)', 'Roman forum (flattened summit)', 'Carthage National Museum (Punic artifacts)'],
        type: 'city'
      }
    ]
  },

  // 124. Utica - Oldest Phoenician Colony
  uticaNorthAfrica: {
    id: 'utica-north-africa',
    name: 'Utica',
    coordinates: [37.0667, 10.05],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'utica-city',
        name: 'Utica',
        description: 'One of the oldest Phoenician settlements in North Africa',
        longDescription: `Utica was founded as a Phoenician colony around 1100 BCE, predating even Carthage. Its location at the mouth of the Medjerda River (the Bagradas River in antiquity) gave it control over trade with the African interior and access to the rich metal deposits of the Atlas Mountains (copper, lead, silver). The city's name means "old town" in Phoenician ('Atiqa, "the old one"), reflecting its antiquity. Excavations have uncovered Phoenician houses (courtyard-style with cisterns), industrial quarters (including purple dye production facilities with murex shells, and pottery kilns producing the distinctive "Utica ware" with geometric painted patterns), and a vast necropolis spanning centuries (with both cremation and inhumation burials). Unlike Carthage, which Rome destroyed in 146 BCE, Utica survived (it had surrendered to Rome before the final battle) and became the capital of Rome's African province until the 1st century CE, when the capital moved to Carthage (under Augustus). The city's later Roman phases include imposing public buildings (the "Maison des Masques" with polychrome mosaic of theatrical masks, comedy and tragedy), baths (the "Thermes of Utica" with hypocaust heating and mosaic floors), and a forum (with inscriptions to Roman emperors), preserving layers of North African history from Phoenician through Roman times. Utica declined after the Medjerda River silted up its harbor (the river shifted course, leaving the site 12 km inland today), and it was abandoned in the 7th century CE.`,
        imageRegenerated: '/images/sites/utica-regenerated.jpg',
        imageCurrent: '/images/sites/utica-current.jpg',
        scene: 'The Oldest Phoenician Colony',
        visualHighlights: ['1100 BCE foundation (oldest in North Africa)', 'Purple dye workshops with crushed murex shells', 'Pottery kilns producing "Utica ware"', 'Phoenician courtyard houses with cisterns', 'Maison des Masques polychrome mosaic'],
        type: 'city'
      }
    ]
  },

  // 125. Volubilis - Roman Frontier Outpost
  volubilis: {
    id: 'volubilis',
    name: 'Volubilis',
    coordinates: [34.07, -5.55],
    region: 'North Africa (Morocco)',
    locations: [
      {
        id: 'volubilis-ruins',
        name: 'Volubilis',
        description: 'Berber-Roman city on the edge of the Sahara',
        longDescription: `Volubilis was the administrative center of the Roman province of Mauretania Tingitana, standing at the southwestern edge of the Roman Empire (the "Roman Frontier"). The city controlled the fertile lands of the Saïs plain (growing wheat, olives, grapes) and the trade routes to the Atlas Mountains (copper, lead, silver, timber). The site features remarkably well-preserved Roman public buildings—basilica (law court), capitol (temple to Jupiter, Juno, Minerva), triumphal arch (the "Arch of Caracalla," 217 CE, dedicated to the emperor and his mother Julia Domna), and baths (the "Thermes de Volubilis" with hypocaust heating)—as well as luxurious private houses with exquisite mosaics depicting mythological scenes (the "House of Orpheus" with Orpheus playing his lyre to animals, the "House of the Amazons" with Amazon warrior scenes, the "House of the Labours of Hercules" with Hercules' 12 labors) and daily life (domestic scenes, hunting scenes). After the Roman withdrawal (285 CE, due to the Crisis of the Third Century), the city continued to be inhabited by Berber populations, with later Islamic-era buildings added (a mosque, houses). The city's Latin inscriptions and Christian remains (a baptistery, basilica) show the persistence of Roman culture beyond imperial control. Volubilis is a UNESCO World Heritage site.`,
        imageRegenerated: '/images/sites/volubilis-regenerated.jpg',
        imageCurrent: '/images/sites/volubilis-current.jpg',
        scene: 'The Roman Frontier Outpost',
        visualHighlights: ['Triumphal arch of Caracalla (217 CE)', 'Basilica and capitol ruins (Roman civic center)', 'House of Orpheus with animal mosaic', 'Working olive presses (oil production)', 'Berber-Roman architecture (mixed styles)'],
        type: 'city'
      },
      {
        id: 'volubilis-mosaics',
        name: 'Mosaics of Volubilis',
        description: 'Exquisite Roman floor mosaics',
        longDescription: `The mosaics of Volubilis are among the finest preserved in North Africa, rivaling those of Carthage and Lepcis Magna. The "House of Orpheus" (2nd century CE) has a mosaic of Orpheus charming animals (lions, leopards, elephants, snakes, birds) with his lyre—the largest mosaic at Volubilis (12 meters wide). The "House of the Labours of Hercules" (2nd century CE) has 12 panels depicting the hero's labors (Nemean Lion, Lernaean Hydra, Ceryneian Hind, Erymanthian Boar, Augean Stables, Stymphalian Birds, Cretan Bull, Mares of Diomedes, Belt of Hippolyta, Cattle of Geryon, Apples of Hesperides, Cerberus). The "House of the Amazons" (2nd century CE) has a mosaic of Amazon warriors (Penthesilea, Hippolyta) in combat. The mosaics are made of colored tesserae (tiny cubes of stone, glass, ceramic), set in cement.`,
        imageRegenerated: '/images/sites/volubilis-mosaics-regenerated.jpg',
        imageCurrent: '/images/sites/volubilis-mosaics-current.jpg',
        scene: 'The Mosaics of Volubilis',
        visualHighlights: ['Orpheus mosaic (12 meters wide, charming animals)', 'Labours of Hercules mosaic (12 panels)', 'Amazon mosaic (warrior women in combat)', 'Colored tesserae (stone, glass, ceramic)', 'Roman floor mosaic technique (opus tessellatum)'],
        type: 'monument'
      }
    ]
  },

  // 126. Sabratha - Roman Theater by the Sea
  sabratha: {
    id: 'sabratha',
    name: 'Sabratha',
    coordinates: [32.8, 12.48],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'sabratha-theater',
        name: 'Theater of Sabratha',
        description: 'Phoenician-Roman port with stunning theater',
        longDescription: `Sabratha was a Phoenician trading post (originally a port for the Garamantes, c. 500 BCE) that became a major Roman city, capital of the province of Tripolitania (with Oea and Leptis Magna). Its most spectacular monument is the theater (2nd-3rd century CE), with three stories of columns (Corinthian, Ionic, Doric orders) still standing against the Mediterranean sky, restored by Italian archaeologists in the 1930s. The theater (seating 5,000) has a stage (50 meters wide, 8 meters deep) and a scaenae frons (three-story stage building) with marble columns (imported from Italy and Greece), elaborate decoration (statues, friezes), and a wooden roof (originally covered the stage). The city's prosperity came from the olive oil trade (the "Tripolitanian olive oil" exported to Rome), with hundreds of olive presses found within the city walls (the "torcularia," stone presses with screw mechanisms). The site also includes a forum (the "Forum of Sabratha"), temples to Liber Pater (the god of wine), Serapis (the Egyptian god, popular in Roman Africa), and Isis (the Egyptian goddess), a Christian basilica (6th century CE, with Byzantine mosaics), and a museum housing Punic and Roman mosaics (the "Sabratha Museum"). The theater still hosts performances today (the "Sabratha Festival").`,
        imageRegenerated: '/images/sites/sabratha-regenerated.jpg',
        imageCurrent: '/images/sites/sabratha-current.jpg',
        scene: 'The Theater by the Mediterranean',
        visualHighlights: ['Three-story theater columns (Corinthian, Ionic, Doric)', 'Mediterranean sea views from the stage', 'Punic-Roman architecture (Phoenician origins)', 'Olive oil production facilities (hundreds of presses)', 'Temple of Isis (Egyptian cult in Roman Africa)'],
        type: 'city'
      }
    ]
  },

  // 127. Leptis Magna - The Grandeur of Roman Africa
  leptisMagna: {
    id: 'leptis-magna',
    name: 'Leptis Magna',
    coordinates: [32.638, 14.291],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'leptis-arch-septimius',
        name: 'Arch of Septimius Severus',
        description: 'Triumphal arch of the Roman African emperor',
        longDescription: `Leptis Magna was the birthplace of the Roman emperor Septimius Severus (193-211 CE), who rebuilt the city in his honor. The Arch of Septimius Severus (203 CE, a quadrifrons arch, with four passages) stands at the intersection of the city's main streets, decorated with reliefs of the emperor and his family (his wife Julia Domna, his sons Caracalla and Geta) and scenes from his campaigns. The arch was made of Libyan marble (the "Marmor Lybicum," a yellow-veined white marble) and was originally topped by a bronze chariot group (the emperor in a quadriga). The reliefs show barbarian captives (Parthians, Arabs) and scenes of Roman victory.`,
        imageRegenerated: '/images/sites/leptis-arch-regenerated.jpg',
        imageCurrent: '/images/sites/leptis-arch-current.jpg',
        scene: 'The African Emperor Arch',
        visualHighlights: [
          'Quadrifrons arch (four passages)',
          'Libyan marble (yellow-veined white)',
          'Reliefs of the Septimius Severus family',
          'Bronze chariot group (originally on top)',
          'Barbarian captives on relief panels'
        ],
        type: 'monument'
      },
      {
        id: 'leptis-hadrianic-baths',
        name: 'Hadrianic Baths of Leptis',
        description: 'Massive Roman thermal complex',
        longDescription: `The Hadrianic Baths (built 126-127 CE) are one of the largest thermal complexes in Roman Africa, covering 4 hectares (10 acres). The baths included a caldarium (hot room), tepidarium (warm room), frigidarium (cold room), natatio (swimming pool), palaestra (exercise yard), and gardens. The frigidarium (18 meters high) had mosaic floors with marine motifs (the "Neptune mosaic" with sea creatures) and marble walls. The baths were supplied by an aqueduct (from the Wadi Lebda, 12 km away) that brought fresh water to the city. The complex also included shops (tabernae) and a library. The baths were still in use in the 5th century CE.`,
        imageRegenerated: '/images/sites/leptis-baths-regenerated.jpg',
        imageCurrent: '/images/sites/leptis-baths-current.jpg',
        scene: 'The Imperial Baths of Leptis',
        visualHighlights: [
          'Caldarium (hot room with hypocaust)',
          'Frigidarium (cold bath, 18 meters high)',
          'Neptune mosaic (marine motifs)',
          'Aqueduct from Wadi Lebda (12 km)',
          'Palaestra (exercise yard with columns)'
        ],
        type: 'monument'
      },
      {
        id: 'leptis-severan-forum',
        name: 'Severan Forum and Basilica',
        description: 'Monumental civic center of Leptis',
        longDescription: `The Severan Forum (built 203 CE) was the new civic center commissioned by Septimius Severus, expanded from the older forum. The forum was surrounded by porticoes (colonnades) with red granite columns from Egypt (the "Mons Claudianus" quarry) and marble from Greece. The Basilica (the law court) was 100 meters long, with apses at each end (for the magistrates), and a nave 30 meters high with a wooden roof. The basilica columns were of red Egyptian granite, and the walls were faced with marble. The forum also included a curia (senate house) and a triumphal arch (the earlier Arch of Tiberius).`,
        imageRegenerated: '/images/sites/leptis-forum-regenerated.jpg',
        imageCurrent: '/images/sites/leptis-forum-current.jpg',
        scene: 'The Severan Civic Center',
        visualHighlights: [
          'Colonnaded porticoes (red granite columns)',
          'Basilica with apses (law court)',
          'Red Egyptian granite columns',
          'Curia (senate house)',
          'Arch of Tiberius (triumphal arch)'
        ],
        type: 'city'
      }
    ]
  },
  // 128. Dougga - Best-Preserved Roman Town
  dougga: {
    id: 'dougga',
    name: 'Dougga (Thugga)',
    coordinates: [36.423, 9.22],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'dougga-capitol',
        name: 'Capitol of Dougga',
        description: 'Best-preserved Roman temple in Africa',
        longDescription: `Dougga (Thugga) is the best-preserved Roman town in North Africa, with buildings from the 2nd-3rd century CE. The Capitol (temple to Jupiter, Juno, Minerva, built 166-167 CE) is the best-preserved Roman temple in Africa, with 6 Corinthian columns (8 meters high) still standing with their architrave and pediment. The pediment has a relief of the emperor Antoninus Pius and his family (possibly a ritual scene). The temple was built on a podium 4.5 meters high, accessed by a staircase (15 steps). The interior (cella) had a statue of Jupiter (now lost). The theater (2nd century CE, seating 3,500) is still used for performances. The site also includes extensive Roman houses with mosaic floors (the "House of the Mosaic of the Labours of Hercules," the "House of the Trifolium," the "House of the Months"), a triumphal arch (the "Arch of Septimius Severus"), baths (the "Baths of Licinius," the "Baths of the Cyclopses"), a market (the "Macellum" with shops), and a forum. Dougga was originally a Numidian (Berber) settlement before Romanization.`,
        imageRegenerated: '/images/sites/dougga-capitol-regenerated.jpg',
        imageCurrent: '/images/sites/dougga-capitol-current.jpg',
        scene: 'The Best-Preserved Roman Temple in Africa',
        visualHighlights: ['Capitol with 6 Corinthian columns (8 meters high)', 'Pediment relief of Antoninus Pius', 'Theater seating 3,500 (still in use)', 'House of the Labours of Hercules mosaic', 'Numidian-Berber origins (pre-Roman)'],
        type: 'temple'
      }
    ]
  },

  // 129. Bulla Regia - Underground Houses
  bullaRegia: {
    id: 'bulla-regia',
    name: 'Bulla Regia',
    coordinates: [36.558, 8.757],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'bulla-underground',
        name: 'Underground Houses of Bulla Regia',
        description: 'Unique subterranean Roman villas',
        longDescription: `Bulla Regia is famous for its unique "underground houses"—Roman villas built partly below ground (the "courtyard" is above ground, rooms are underground). The houses were built underground to escape summer heat (the rooms remain cool year-round) and to protect against earthquakes (the bedrock provides stability). The "House of the Hunt" (3rd century CE) has a green marble floor (cipollino marble) and mosaics of hunting scenes (leopards, lions, antelopes). The "House of the Amphitrite" (3rd century CE) has a mosaic of the sea goddess (Amphitrite) in a chariot pulled by sea horses, with fish and sea monsters (the "Sea Horse Mosaic"). The "House of the Fisherman" (3rd century CE) has a mosaic of fishermen with nets, dolphins, and octopuses. The site was originally a Numidian (Berber) capital before Romanization.`,
        imageRegenerated: '/images/sites/bulla-regergenerated.jpg',
        imageCurrent: '/images/sites/bulla-regia-current.jpg',
        scene: 'The Underground Villas of Bulla Regia',
        visualHighlights: ['Underground houses (partly subterranean)', 'House of the Hunt with leopard mosaic', 'House of Amphitrite with sea horse mosaic', 'House of the Fisherman (fishing scene)', 'Numidian-Berber origins (pre-Roman)'],
        type: 'city'
      }
    ]
  },

  // 130. Lepcis Magna - Circus
  lepcisCircus: {
    id: 'lepcis-circus',
    name: 'Circus of Lepcis Magna',
    coordinates: [32.641, 14.293],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'lepcis-circus',
        name: 'Circus of Lepcis Magna',
        description: 'Roman chariot racing stadium',
        longDescription: `The Circus of Lepcis Magna (2nd century CE) was a Roman stadium for chariot racing (ludi circenses), 245 meters long and 55 meters wide, seating 20,000-25,000 spectators. The circus had a central barrier (spina) with turning posts (metae) at each end, and starting gates (carceres) for the chariots (12 chariots, each drawn by 4 horses). The spina was decorated with obelisks (one obelisk, the "Obelisk of Lepcis," 14 meters high, was brought from Heliopolis and still stands), fountains, and statues of the gods. The circus was used for chariot races, gladiatorial fights, and wild beast hunts (venationes). The site is now partly covered by modern housing, but the outline is visible.`,
        imageRegenerated: '/images/sites/lepcis-circus-regenerated.jpg',
        imageCurrent: '/images/sites/lepcis-circus-current.jpg',
        scene: 'The Chariot Racing Stadium',
        visualHighlights: ['Circus 245 meters long (chariot track)', 'Spina with turning posts (metae)', 'Obelisk of Lepcis (14 meters high)', 'Carceres (starting gates for 12 chariots)', 'Seating for 20,000-25,000 spectators'],
        type: 'monument'
      }
    ]
  }
};
// ========== SECTION 13: WEST AFRICA (131-140) ==========
export const westAfricaSites: Record<string, Site> = {
  // 131. Dhar Tichitt - Stone Settlements of Mauritania
  dharTichitt: {
    id: 'dhar-tichitt',
    name: 'Dhar Tichitt',
    coordinates: [18.5, -9.0],
    region: 'West Africa (Mauritania)',
    locations: [
      {
        id: 'dhar-tichitt-settlement',
        name: 'Dhar Tichitt Stone Settlements',
        description: 'Earliest stone-built villages in West Africa',
        longDescription: `Dhar Tichitt contains the earliest known substantial stone settlements in West Africa, dating to 2000-500 BCE. The site features hundreds of stone-walled villages, agricultural terraces, and ritual structures spread across the cliff line of the Sahara's southern edge (the "Dhar Tichitt escarpment," 200 km long, 50 km wide). The settlements are organized into neighborhoods with specialized stone architecture—granaries (raised storage structures), storerooms (for surplus grain), livestock pens (circular enclosures for cattle, sheep, goats), and defensive walls (against raiders and sand encroachment). The inhabitants cultivated millet (pearl millet, Pennisetum glaucum, originally domesticated in the Sahel) and maintained herds of cattle, goats, and sheep. Dhar Tichitt represents an adaptation to Saharan drying (the "Neolithic Subpluvial" ended c. 2500 BCE), as previously mobile groups became sedentary, developing complex social organization to manage resources and maintain these stone-built settlements. This culture is ancestral to the Soninke people, who later formed the Ghana Empire (c. 300 CE). The site is a UNESCO World Heritage site ( Tentative List).`,
        imageRegenerated: '/images/sites/dhar-tichitt-regenerated.jpg',
        imageCurrent: '/images/sites/dhar-tichitt-current.jpg',
        scene: 'Stone Walls of the Southern Sahara',
        visualHighlights: ['Hundreds of stone-walled villages (200 km escarpment)', 'Millet cultivation evidence (pearl millet domestication)', 'Defensive architecture (walls against raiders)', 'Pre-Saharan adaptation (Neolithic Subpluvial end)', 'Ancestral Soninke culture (pre-Ghana Empire)'],
        type: 'city'
      }
    ]
  },

  // 132. Nok Culture - Terracotta Sculptures
  nokTerracotta: {
    id: 'nok-terracotta',
    name: 'Nok Culture',
    coordinates: [9.5, 8.0],
    region: 'West Africa (Nigeria)',
    locations: [
      {
        id: 'nok-workshop',
        name: 'Nok Terracotta Workshop',
        description: 'Artisans producing expressive sculptures',
        longDescription: `The Nok culture (1500 BCE - 1 CE) produced some of the earliest and most sophisticated terracotta sculpture in sub-Saharan Africa, named for the village of Nok in Nigeria where the first sculpture was found (tin mining in 1928). Their naturalistic figures—with elaborate hairstyles (braided or crested), jewelry (necklaces, bracelets, anklets), and expressive faces (triangular and pierced eyes, open mouths)—represent a distinct artistic tradition. These sculptures were likely used in religious and healing rituals, depicting ancestors, deities, and important individuals (the "Nok portrait heads"). The combination of iron technology (the earliest known iron smelting in West Africa, c. 800 BCE) and advanced ceramic production (high-fired terracotta, evidence of kilns) suggests a complex, stratified society with craft specialists (full-time sculptors, blacksmiths). The artistic style of the Nok, with its triangular and pierced eyes (holes through the pupils) and elaborate headdresses (crested, braided), influenced later West African sculptural traditions, including those of Ife (c. 1100-1400 CE) and Benin (c. 1300-1897 CE). Nok figures are found across an area of over 500 square kilometers (the "Nok culture area"), indicating a widespread culture linked through trade and shared beliefs.`,
        imageRegenerated: '/images/sites/nok-terracotta-regenerated.jpg',
        imageCurrent: '/images/sites/nok-terracotta-current.jpg',
        scene: 'The Sculptors of Ancient Nigeria',
        visualHighlights: ['Naturalistic terracotta figures (Nok portrait heads)', 'Elaborate hairstyles and jewelry (crested, braided)', 'Iron technology evidence (earliest in West Africa)', 'Religious/ritual function (ancestor worship)', 'Distinctive triangular eyes (pierced pupils)'],
        type: 'city'
      },
      {
        id: 'nok-iron',
        name: 'Nok Iron Smelting Site',
        description: 'Early metallurgy in action',
        longDescription: `The Nok culture was among the earliest in sub-Saharan Africa to smelt iron, developing the technology independently or through local innovation by 800 BCE (dated by radiocarbon of charcoal). Excavated smelting furnaces reveal sophisticated technology—clay shaft furnaces (1-2 meters high) designed to achieve high temperatures (1,200-1,500°C), with bellows (animal hide) to control airflow. Slag heaps (waste from smelting), tuyeres (ceramic blow-pipe tips, 20-30 cm long), and iron implements (hoes, axes, spears, arrows, knives, bangles) document the full production process. Iron production gave the Nok significant economic and military advantages, enabling more effective farming tools (clearing forests for agriculture) and weapons. The technology spread to other West African cultures, transforming agriculture and enabling population growth, leading to the formation of later states like Ghana, Mali, and Songhai. The Nok iron-working tradition is contemporary with early iron smelting in the Lake Chad region (Gajiganna culture, c. 800 BCE), suggesting multiple centers of innovation.`,
        imageRegenerated: '/images/sites/nok-iron-regenerated.jpg',
        imageCurrent: '/images/sites/nok-iron-current.jpg',
        scene: 'The Birth of African Ironworking',
        visualHighlights: ['Shaft furnaces (1-2 meters high, clay)', 'Bellows technology (animal hide)', 'Slag heaps and tuyeres (ceramic blow-pipes)', 'Tool and weapon production (hoes, axes, spears)', 'Early West African metallurgy (c. 800 BCE)'],
        type: 'city'
      }
    ]
  },

  // 133. Kintampo Complex - Early Farmers of Ghana
  kintampo: {
    id: 'kintampo',
    name: 'Kintampo Complex',
    coordinates: [8.0, -1.5],
    region: 'West Africa (Ghana)',
    locations: [
      {
        id: 'kintampo-sites',
        name: 'Kintampo Settlement',
        description: 'Earliest farming communities in Ghana',
        longDescription: `The Kintampo Complex (c. 2500-1400 BCE) represents the earliest evidence of settled farming communities in the forest-fringe zone of modern Ghana (the "Kintampo culture," named for the modern town near the excavation sites). Sites include stone-constructed houses (irregular blocks of local stone, possibly with thatched roofs), grinding stones for cereal processing (pearl millet, Pennisetum glaucum), and distinctive "Kintampo cigar-shaped" pottery (cylindrical vessels with roulette decoration). The Kintampo people cultivated cowpeas (Vigna unguiculata), pearl millet, and oil palm (Elaeis guineensis), while also hunting wild game (duiker, monkey, bush pig) and maintaining livestock—likely sheep and goats (based on bone remains). They produced polished stone axes (for clearing forest), quartz microliths (small stone blades for hunting), and terracotta figurines of animals (cattle, goats, dogs) and humans (female figures with elaborate hairstyles). The complex had trade connections reaching the Sahara, exchanging forest products (kola nuts, gold, ivory, wild animal skins) for Saharan salt and perhaps copper and glass beads (from the Nile Valley or the Mediterranean). Kintampo sites lie along routes that later became major trade corridors in the Ghana and Mali empires.`,
        imageRegenerated: '/images/sites/kintampo-regenerated.jpg',
        imageCurrent: '/images/sites/kintampo-current.jpg',
        scene: 'The Forest Farmers of Ghana',
        visualHighlights: ['Stone house foundations (irregular blocks)', 'Polished stone axes (forest clearance)', 'Distinctive pottery tradition (cigar-shaped)', 'Forest-Sahara trade link (kola, gold, ivory)', 'Earliest settled farming in region (c. 2500 BCE)'],
        type: 'city'
      }
    ]
  },

  // 134. Jenne-Jeno - Earliest City in Sub-Saharan Africa
  jenneJeno: {
    id: 'jenne-jeno',
    name: 'Jenne-Jeno',
    coordinates: [13.9, -4.55],
    region: 'West Africa (Mali)',
    locations: [
      {
        id: 'jenne-jeno-city',
        name: 'Jenne-Jeno',
        description: 'The earliest known city in sub-Saharan Africa',
        longDescription: `Jenne-Jeno (250 BCE - 1400 CE) is the oldest known city in sub-Saharan Africa, predating the trans-Saharan trade (the "Jenne-Jeno Urban Complex," discovered by Roderick and Susan McIntosh in 1977). Built on the inland Niger Delta floodplain (the "Macina" region, a vast seasonally flooded area), the city covered 33 hectares at its peak (c. 800 CE), with an estimated population of 20,000-30,000 inhabitants. The city had no defensive walls or monumental palaces—its wealth came from trade in iron (locally smelted from laterite ore), rice (cultivated in the floodplain), fish (from the Niger River), and pottery (mass-produced for trade), not conquest. The city's unique "tell" (mound) formed from centuries of mudbrick construction, rising 7 meters above the surrounding plain. Jenne-Jeno controlled access to gold from the south (the Bambuk and Bure goldfields), salt from the Sahara (Taghaza, Taoudenni), and copper from the north (the Azelik mines, Niger). The city's iron industry was particularly important, producing tools and weapons traded across West Africa as far as the Ghana Empire (to the west) and the Sao civilization (to the east). The site declined after 1400 CE, replaced by the nearby city of Djenné (3 km away), famous for its Great Mosque (14th-15th century, rebuilt 1907).`,
        imageRegenerated: '/images/sites/jenne-jeno-regenerated.jpg',
        imageCurrent: '/images/sites/jenne-jeno-current.jpg',
        scene: 'The Ancient City of the Niger Delta',
        visualHighlights: ['Mudbrick tell rising from floodplain (7 meters high)', 'Ironworking furnaces (laterite ore)', 'Pottery production zones (mass-produced)', 'Trade access to gold and salt (Bambuk, Taghaza)', 'Early urbanism without walls (defenseless city)'],
        type: 'city'
      }
    ]
  },

  // 135. Timbuktu - City of 333 Saints
  timbuktu: {
    id: 'timbuktu',
    name: 'Timbuktu',
    coordinates: [16.77, -3.01],
    region: 'West Africa (Mali)',
    locations: [
      {
        id: 'timbuktu-manuscripts',
        name: 'Timbuktu',
        description: 'Legendary center of Islamic learning and trade',
        longDescription: `Timbuktu was the legendary "City of 333 Saints," a center of Islamic scholarship and trans-Saharan trade from the 13th to 17th centuries CE. The city's universities—Sankore (the "University of Sankore," founded 14th century), Djinguereber (built 1327, by the Andalusian architect Abu Ishaq al-Saheli), Sidi Yahya (built 1440, named for a local saint)—were among the most prestigious in the Islamic world, attracting scholars from Cairo, Baghdad, and Fez. The city's libraries contained hundreds of thousands of manuscripts on law (Maliki jurisprudence), medicine (Avicenna, al-Razi), astronomy (Ptolemy, al-Battani), mathematics (algebra, geometry), and literature (poetry, Sufi mysticism)—many still preserved today (the "Timbuktu Manuscripts," 20,000-30,000 surviving). Timbuktu controlled the gold-salt trade, with merchants bringing gold from the south (Bambuk, Bure, and later the Akan goldfields) and salt from the Sahara (Taghaza, Taoudenni). The city's mudbrick architecture, including the Great Mosque of Djinguereber (with its distinctive Sudano-Sahelian style, turrets, and pinnacles), showcases the distinctive Sudano-Sahelian style with its turrets and pinnacles, designed to allow workers to climb for repairs. Timbuktu's fame as a place of mystery and learning captured the European imagination during the Age of Discovery, inspiring many expeditions to reach its fabled gates (the "African Timbuktu"). The site is a UNESCO World Heritage site (since 1988, endangered status since 2012).`,
        imageRegenerated: '/images/sites/timbuktu-regenerated.jpg',
        imageCurrent: '/images/sites/timbuktu-current.jpg',
        scene: 'The City of 333 Saints',
        visualHighlights: ['Sankore University (14th century)', 'Sacred manuscripts library (Timbuktu Manuscripts)', 'Mudbrick mosque architecture (Sudano-Sahelian)', 'Trans-Saharan camel caravans (salt, gold)', 'Gold and salt trade routes (Bambuk, Taghaza)'],
        type: 'city'
      }
    ]
  },

  // 136. Gao - Capital of the Songhai Empire
  gao: {
    id: 'gao',
    name: 'Gao',
    coordinates: [16.27, -0.05],
    region: 'West Africa (Mali)',
    locations: [
      {
        id: 'gao-saney',
        name: 'Gao',
        description: 'Capital of the Songhai Empire',
        longDescription: `Gao (Kaw Kaw) was the capital of the Songhai Empire, the largest empire in West African history (15th-16th centuries CE). The city controlled the Niger River trade route, serving as a hub for gold (from the Akan goldfields, via the Mossi states), slaves (from raids in the south), salt (from the Sahara), and textiles (locally produced cotton cloth). The tomb of Askia the Great (built 1495, a 17-meter-high pyramidal mudbrick structure) marks the conversion of the Songhai Empire to Islam under the Askia dynasty (the "Askia dynasty," 1493-1591). The city also contains extensive palace and mosque ruins from the 15th-16th centuries (the "Gao-Saney quarter," with the "House of the Askia" and "Mosque of the Askia"). Gao's strategic location on the Niger Bend (the "Niger River Bend") allowed it to control both river and desert trade routes. The city's wealth from the gold and salt trade funded a professional army that conquered Timbuktu (1468) and Jenne (1473), creating an empire that extended from the Atlantic coast (Senegal) to the borders of Bornu (Nigeria), dominating West Africa until the Moroccan invasion of 1591 (the "Moroccan invasion," with firearms).`,
        imageRegenerated: '/images/sites/gao-regenerated.jpg',
        imageCurrent: '/images/sites/gao-current.jpg',
        scene: 'The Seat of the Songhai Emperors',
        visualHighlights: ['Askia pyramidal tomb (17 meters high)', 'Niger River trade port (gold, salt, slaves)', 'Songhai palace ruins (Gao-Saney quarter)', 'Mudbrick mosque foundations (Askia mosque)', 'Gold and salt warehouses (Akan goldfields)'],
        type: 'city'
      }
    ]
  },

  // 137. Ile-Ife - Sacred City of the Yoruba
  ileIfe: {
    id: 'ile-ife',
    name: 'Ile-Ife',
    coordinates: [7.5, 4.55],
    region: 'West Africa (Nigeria)',
    locations: [
      {
        id: 'ife-sculptures',
        name: 'Ile-Ife',
        description: 'Sacred city of the Yoruba people',
        longDescription: `Ile-Ife is the spiritual homeland of the Yoruba people, believed to be the place where the gods (the "Orisha") descended to create the earth (the "Ile-Ife," meaning "land of expansion" or "land of dispersal"). The city's artistic tradition produced some of Africa's most naturalistic and refined bronze, brass, and terracotta sculptures (11th-15th centuries CE), discovered at the Obalufon Grove, Ita Yemoo, and Wunmonije Compound (the "Ife bronze heads"). The "Bronze Head" (the "Ife Bronze Head," 11th-12th century) and "Obalufon II mask" (a brass mask, 12th-13th century) show remarkable technical skill (lost-wax casting, filigree, gold inlay), comparable to Renaissance Italian art (Donatello, Verrocchio). These sculptures depicted the divine kings (Ooni) of Ife, their faces scarified with royal patterns (the "kekere" lines), crowned with elaborate beadwork (coral beads, glass beads), and adorned with royal regalia (the "ade" crown). Ile-Ife's art influenced the later Benin Kingdom (13th-19th century), which adopted Ife casting techniques for their own royal sculptures (the "Benin bronzes"). The city remains the center of Yoruba religion (the "Orisa" cult), with annual festivals celebrating the creation of the world (the "Olojo Festival") and the founding of the city's monarchy (the "Ogun Festival").`,
        imageRegenerated: '/images/sites/ile-ife-regenerated.jpg',
        imageCurrent: '/images/sites/ile-ife-current.jpg',
        scene: 'The Cradle of the Yoruba',
        visualHighlights: ['Naturalistic bronze heads (Ife Bronze Head)', 'Terracotta royal figures (Obalufon Grove)', 'Obalufon II brass mask (lost-wax casting)', 'Sacred grove (Opa Oranmiyan, ancestral staff)', 'Ife glass bead production (coral bead regalia)'],
        type: 'city'
      }
    ]
  },

  // 138. Benin City - Bronzes of the Oba
  beninCity: {
    id: 'benin-city',
    name: 'Benin City (Ile-Ibinu)',
    coordinates: [6.317, 5.614],
    region: 'West Africa (Nigeria)',
    locations: [
      {
        id: 'benin-bronzes',
        name: 'Benin City',
        description: 'Capital of the Benin Kingdom, famous for its bronzes',
        longDescription: `Benin City (Ile-Ibinu, "House of Agony") was the capital of the Benin Kingdom (13th-19th century CE), one of the most powerful states in West Africa. The city was surrounded by massive walls (the "Benin Walls," 16,000 kilometers long, 15 meters high), the largest man-made earthworks in history (according to the Guinness Book of Records, 1994). The city's palace (the "Oba's Palace," built 13th century) was decorated with bronze plaques (the "Benin Bronzes"), ivory carvings (the "Benin ivories"), and coral beads (royal regalia). The bronzes (c. 3000 known objects) were made by the "Igbesanmwan" (the bronze-caster guild) using the lost-wax technique, depicting the Oba (king), Portuguese traders (arriving c. 1485), animals (leopards, elephants), and scenes from court life (the "Whiteamoor" motif). The kingdom controlled the trade in pepper (the "Benin pepper," Piper guineense), ivory (from the forest elephants), and slaves (exported to the Portuguese and Dutch). The city was sacked by the British in 1897 (the "Benin Punitive Expedition"), and the bronzes were looted, now scattered in museums worldwide (the "Benin Bronzes," 500 in the British Museum). The Oba's palace still stands (rebuilt after the 1897 destruction).`,
        imageRegenerated: '/images/sites/benin-city-regenerated.jpg',
        imageCurrent: '/images/sites/benin-city-current.jpg',
        scene: 'The Bronze Capital of the Oba',
        visualHighlights: ['Benin Bronzes (lost-wax cast plaques)', 'Oba\'s palace (Ile-Ibinu, 13th century)', 'Benin Walls (16,000 km earthworks)', 'Ivory carvings (Benin ivories, Portuguese traders)', 'British Punitive Expedition of 1897 (sacking)'],
        type: 'city'
      }
    ]
  },

  // 139. Djenné - Great Mosque of the Niger
  djenne: {
    id: 'djenne',
    name: 'Djenné',
    coordinates: [13.9, -4.55],
    region: 'West Africa (Mali)',
    locations: [
      {
        id: 'great-mosque',
        name: 'Great Mosque of Djenné',
        description: 'Largest mudbrick building in the world',
        longDescription: `The Great Mosque of Djenné is the largest mudbrick building in the world (the "Sudano-Sahelian architecture"), a masterpiece of Sahelian architecture (the "Fren"). The mosque was built in 1907 (on the site of earlier mosques, 13th-14th centuries) using sun-dried mudbrick (adobe) and palm wood beams. The mosque has three minarets (the "central minaret" is 16 meters high), 99 pillars (the number of names of Allah), and a large prayer hall (50 x 50 meters) that can hold 3,000 worshippers. The mosque is rebuilt annually (the "Crepissage" festival, held in April) with a new layer of mud. Djenné was a major trading city (on the Niger River, between Timbuktu and Jenne-Jeno), controlling the gold-salt trade. The city's other mosques (the "Mosque of Djenné," the "Mosque of the Moors") and buildings (the "Djenné Museum," for Sahelian architecture) reflect the city's importance. The Great Mosque is a UNESCO World Heritage site (since 1988).`,
        imageRegenerated: '/images/sites/djenne-regenerated.jpg',
        imageCurrent: '/images/sites/djenne-current.jpg',
        scene: 'The Great Mosque of Djenné',
        visualHighlights: ['Largest mudbrick building (adobe, 1907)', 'Three minarets (central 16 meters high)', '99 pillars (names of Allah)', 'Crepissage festival (annual mud replastering)', 'Sudano-Sahelian architecture (wooden toron)'],
        type: 'temple'
      }
    ]
  },

  // 140. Oyo-Ile - Capital of the Oyo Empire
  oyoIle: {
    id: 'oyo-ile',
    name: 'Oyo-Ile (Old Oyo)',
    coordinates: [8.977, 3.151],
    region: 'West Africa (Nigeria)',
    locations: [
      {
        id: 'oyo-empire',
        name: 'Oyo-Ile',
        description: 'Capital of the Oyo Empire (Old Oyo)',
        longDescription: `Oyo-Ile (Old Oyo, "Katunga" to Europeans) was the capital of the Oyo Empire (14th-18th century CE), one of the largest states in West Africa. The city was a royal capital, with the palace of the Alafin (the "Oba Oyo," the king) covering 10 hectares ( the "Afin Oyo" palace). The city was surrounded by a 6 km earthen wall (the "Epa" wall, 10 meters high) and a moat (the "Odò Oya" moat). The city had a market (the "Oja Oba" market, where slaves, ivory, and cloth were traded), a shrine (the "Ojubo Oyo" to the god Sango), and a tomb (the "Ile Oba" tomb for the Alafin). The empire controlled the trade in shea butter, cotton cloth, and slaves (exported to the coast via the Oyo corridor). Oyo was destroyed by the Fulani (c. 1830s), and the capital moved to the new Oyo (Ago d'Oyo, 40 km south).`,
        imageRegenerated: '/images/sites/oyo-ile-regenerated.jpg',
        imageCurrent: '/images/sites/oyo-ile-current.jpg',
        scene: 'The Empire of the Alafin',
        visualHighlights: ['Alafin palace (Afin Oyo, 10 hectares)', 'Oja Oba market (slaves, ivory, shea butter)', 'Epa earthen wall (6 km, 10 meters high)', 'Shrine of Sango (god of thunder)', 'Fulani invasion (c. 1830, collapse)'],
        type: 'city'
      }
    ]
  }
};

// ========== SECTION 14: MYCENAEAN GREEK (141-150) ==========
export const mycenaeanSites: Record<string, Site> = {
  // 141. Mycenae - The Golden Citadel
  mycenae: {
    id: 'mycenae-citadel',
    name: 'Mycenae',
    coordinates: [37.7308, 22.7562],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'lion-gate',
        name: 'Lion Gate of Mycenae',
        description: 'Iconic entrance to the citadel of Agamemnon',
        longDescription: `The Lion Gate is the main entrance to the citadel of Mycenae, the most powerful city of Late Bronze Age Greece (1600-1100 BCE). The gate features two massive lions (their heads missing, originally turned toward the viewer in a heraldic pose) flanking a column, carved in high relief on a single limestone slab (the "Lion Gate Relief," 3 meters high, 3 meters wide)—the oldest surviving monumental sculpture in Europe. The gate's "relieving triangle" (a triangular space above the lintel, open to lighten the weight on the lintel) was filled with the limestone relief. The lions (originally with heads of metal, now lost) guarded the citadel, symbolizing the power of the Mycenaean kings (the "wanax," who Homer called "golden Mycenae" in the Iliad). Within the walls lies Grave Circle A (inside the citadel, originally outside but later enclosed by the walls, c. 1250 BCE), where Heinrich Schliemann discovered five gold death masks (including the "Mask of Agamemnon," c. 1550 BCE, now in the National Archaeological Museum, Athens) and other gold treasures in 1876 (over 14 kilos of gold objects, rings, signets, diadems, cups, buttons—the "Mycenae Treasure"). The site also includes the Treasury of Atreus (tholos tomb, largest in Greece) and Grave Circle B (outside the walls, containing 14 gold masks, found 1950s).`,
        imageRegenerated: '/images/sites/lion-gate-regenerated.jpg',
        imageCurrent: '/images/sites/lion-gate-current.jpg',
        scene: 'The Gateway of Heroes',
        visualHighlights: ['Lion relief sculpture on limestone slab (3 meters)', 'Cyclopean stone walls (limestone blocks, some 12 tons)', 'Grave Circle A gold masks (Mask of Agamemnon)', 'Treasury of Atreus beehive tomb (13 meters high)', 'Palace megaron with central hearth (torchlight)'],
        type: 'monument'
      },
      {
        id: 'treasury-of-atreus',
        name: 'Treasury of Atreus (Tomb of Agamemnon)',
        description: 'Largest and best-preserved tholos tomb in Greece',
        longDescription: `The Treasury of Atreus (also called the Tomb of Agamemnon) is the largest tholos (beehive) tomb in Greece, built around 1250 BCE. The tomb's dome rises 13.5 meters with a diameter of 14.5 meters, made of 33 courses of stone, each projecting slightly inward (corbelled vaulting). The vault was covered with earth to form a tumulus (burial mound, 30 meters wide). The entrance features a relieving triangle (2.5 meters high) and massive lintel beam weighing 120 tons—one of the largest stone blocks ever moved by ancient builders (the beam was moved using rollers and levers, then lifted into place by levers and ramps). The dromos (entrance passage) is 36 meters long, 6 meters wide, with walls of ashlar masonry and a relieving triangle above the lintel. The tomb's interior was decorated with bronze rosettes (originally affixed to the walls, their holes still visible) and carved geometric patterns. The tomb was likely built for a Mycenaean king (possibly Atreus or Agamemnon) and was still visible to Pausanias in the 2nd century CE. The name "Treasury of Atreus" reflects the belief that the tomb contained Atreus's treasure, though Pausanias reports that the tomb actually held Atreus's children (Thyestes' sons, murdered by Atreus).`,
        imageRegenerated: '/images/sites/treasury-of-atreus-regenerated.jpg',
        imageCurrent: '/images/sites/treasury-of-atreus-current.jpg',
        scene: 'The Beehive Tomb of Kings',
        visualHighlights: ['120-ton lintel beam (largest in ancient world)', '13.5-meter high dome (54 feet, 33 courses)', 'Tholos corbelled architecture (corbelled vaulting)', 'Dromos entrance passage (36 meters long)', 'Geometric decorative bronze nail holes (rosettes)'],
        type: 'tomb'
      },
      {
        id: 'grave-circle-a',
        name: 'Grave Circle A',
        description: 'Royal burial ground with gold masks',
        longDescription: `Grave Circle A is a royal burial ground inside the citadel walls (c. 1250 BCE, the circle was originally outside the walls, later enclosed). The circle contains six shaft graves (depth 1.5-3 meters, width 2-4 meters, cut into bedrock), dating to c. 1600-1500 BCE (Late Helladic I). The graves contained 19 bodies (9 male, 8 female, 2 children) with rich grave goods—gold death masks (5 found), gold cups (the "Nestor's Cup," a rhyton with dove handles), gold rings (signets with religious scenes), gold diadems (ornaments for the forehead), gold buttons (with spiral designs), gold chest plates, bronze swords (with gold hilts), silver vessels, and alabaster jars. The "Mask of Agamemnon" (Grave IV, c. 1550 BCE) is a gold funeral mask (repoussé, with beard, trimmed beard, mustache, and eyebrows) found over the face of one of the bodies, misnamed by Schliemann after Agamemnon (the Trojan War hero, who lived 400 years later). The circle was excavated by Heinrich Schliemann in 1876, who found the treasure and announced "I have gazed upon the face of Agamemnon."`,
        imageRegenerated: '/images/sites/grave-circle-a-regenerated.jpg',
        imageCurrent: '/images/sites/grave-circle-a-current.jpg',
        scene: 'The Grave Circle of the Gold Masks',
        visualHighlights: ['Six shaft graves (cut into bedrock)', 'Gold death masks (Mask of Agamemnon)', 'Gold cups and rings (Nestor\'s Cup)', 'Bronze swords with gold hilts', 'Schliemann\'s 1876 excavation trench'],
        type: 'tomb'
      }
    ]
  },

  // 142. Tiryns - The Cyclopean Fortress
  tiryns: {
    id: 'tiryns-fortress',
    name: 'Tiryns',
    coordinates: [37.598, 22.799],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'tiryns-walls',
        name: 'Cyclopean Walls of Tiryns',
        description: 'Massive fortifications of the Bronze Age citadel',
        longDescription: `Tiryns, legendary birthplace of Heracles (Hercules), features the most impressive cyclopean walls in Greece (the "Cyclopean Walls," so named because later Greeks believed only the Cyclopes could have moved such massive stones). The walls are 7 meters thick and 10 meters high (originally 12 meters), made of limestone blocks weighing up to 13 tons, with some blocks 2 meters long, 1 meter high, and 1 meter deep, set without mortar. The citadel features the Upper Citadel (with palace megaron, hearth, and throne, floor paintings of octopuses and dolphins), Lower Citadel (with workshops and storage, 14 magazine rooms), and the famous "Galleries" (vaulted corridors within the walls, 5 meters wide, for storage and defense, with 9 galleries). A hidden underground passage (the "Secret Passage," 15 meters long, 2 meters wide, descending 7 meters) led to a water source (a spring 50 meters away) during sieges. The citadel was surrounded by a lower town (30 hectares) with houses and workshops. Tiryns was a major Mycenaean center, controlling the Argive plain (the "Argolid"), and was near the sea (the Gulf of Argolis, coast 1 km away). Homer called it "mighty walled Tiryns" in the Iliad (Book 2, verse 559). The site also contains a "megaron" (palace hall) with a central hearth and throne (the "megaron of Tiryns," similar to Mycenae and Pylos).`,
        imageRegenerated: '/images/sites/tiryns-regenerated.jpg',
        imageCurrent: '/images/sites/tiryns-current.jpg',
        scene: 'The Cyclopean Fortress',
        visualHighlights: [
          '7-meter thick cyclopean walls (limestone blocks 13 tons)',
          '"Galleries" vaulted corridors (9 galleries)',
          'Upper Citadel palace megaron (hearth, throne)',
          'Underground water passage (Secret Passage to spring)',
          'Heracles birthplace tradition (legendary)'
        ],
        type: 'monument'
      }
    ]
  },

  // 143. Pylos - Palace of Nestor
  pylos: {
    id: 'pylos-palace',
    name: 'Pylos (Palace of Nestor)',
    coordinates: [36.965, 21.656],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'palace-nestor',
        name: 'Palace of Nestor',
        description: 'Best-preserved Mycenaean palace with Linear B archive',
        longDescription: `The Palace of Nestor at Pylos is the best-preserved Mycenaean palace in Greece (the "Palace of Nestor," named for the Homeric hero, King Nestor, who led 90 ships to Troy, Iliad, Book 2). The site includes the main building (with megaron, throne room, storerooms, and workshops), the "Pantheon" (shrine complex, Building 8), and extensive agricultural facilities (oil presses, grain storage). The palace was built c. 1300 BCE and destroyed by fire c. 1180 BCE (the "Bronze Age collapse"). The palace's storerooms contained thousands of wine jars (pithoi, storage jars 1.5 meters high), and the archives preserved over 1,000 Linear B tablets (clay tablets baked in the fire, preserving them), deciphered by Michael Ventris in 1952 as early Greek (the "Mycenaean Greek" dialect). The tablets record palace administration (the "wanax," king; the "lawagetas," general; the "telestai," landowners), military preparations (troop levels, chariot inventories), industrial production (oil, wool, bronze, linen), and offerings to gods (including Poseidon ("Poteidaon"), Zeus ("Diwios"), Hera ("Era"), Hermes, Athena). The tablets mention the kingdom's organization (the "Pylos state," with 2 provinces, 7 districts, 15 towns, and 80 villages), land ownership (private land, communal land), and livestock (sheep, goats, cattle, pigs). The site is identified as Nestor's palace from Homer's Iliad ("sandy Pylos"). The bathtub found here (a clay bathtub, 1.2 meters long, 0.6 meters wide, with a clay plug) is sometimes called "Nestor's bathtub" (Odyssey, Book 3, line 464, where Nestor bathes Telemachus). The palace was destroyed by fire around 1180 BCE, preserving the clay tablets.`,
        imageRegenerated: '/images/sites/pylos-regenerated.jpg',
        imageCurrent: '/images/sites/pylos-current.jpg',
        scene: 'The Palace of Wise Nestor',
        visualHighlights: ['Megaron with central hearth (circular, 4 meters diameter)', 'Throne room with painted floor (octopuses, dolphins)', 'Linear B archive tablets (1,000 tablets, deciphered)', 'Bathtub (Nestor\'s bath, Odyssey reference)', 'Storerooms with pithoi (wine jars, 1.5 meters high)'],
        deity: 'Poseidon',
        type: 'palace'
      }
    ]
  },

  // 144. Orchomenos - Treasury of Minyas
  orchomenos: {
    id: 'orchomenos',
    name: 'Orchomenos',
    coordinates: [38.487, 22.979],
    region: 'Greece (Boeotia)',
    locations: [
      {
        id: 'treasury-minyas',
        name: 'Treasury of Minyas',
        description: 'Second largest tholos tomb in Greece',
        longDescription: `The Treasury of Minyas (c. 1250 BCE) is the second largest tholos tomb in Greece (after the Treasury of Atreus at Mycenae). The tomb's dome (originally 14 meters high, now collapsed) had a diameter of 14 meters, with a dromos 30 meters long. The tomb was built for the royal family of Orchomenos, the "Minyae," a powerful kingdom in the Bronze Age. The tholos was constructed of 29 courses of stone (originally 34), with a relieving triangle above the lintel (1.5 meters high). The tomb was looted in antiquity, but fragments of gold, ivory, and bronze remain. Orchomenos was a major Mycenaean center, controlling Lake Copais (drained by canals, 9 km of tunnels, 2,000 hectares of farmland). The site also includes a Mycenaean palace (the "Palace of Orchomenos," with frescoes of griffins and lions), a "megaron" with a central hearth, and a later Byzantine church (the "Church of the Dormition," 9th century CE).`,
        imageRegenerated: '/images/sites/orchomenos-regenerated.jpg',
        imageCurrent: '/images/sites/orchomenos-current.jpg',
        scene: 'The Treasury of Minyas',
        visualHighlights: ['Second largest tholos tomb (14 meters diameter)', 'Dromos entrance passage (30 meters long)', 'Relieving triangle above lintel (1.5 meters high)', 'Lake Copais drainage system (9 km tunnels)', 'Palace frescoes of griffins and lions'],
        type: 'tomb'
      }
    ]
  },

  // 145. Gla - Cyclopean Fortress of Lake Copais
  gla: {
    id: 'gla',
    name: 'Gla (Kastro)',
    coordinates: [38.49, 23.18],
    region: 'Greece (Boeotia)',
    locations: [
      {
        id: 'gla-fortress',
        name: 'Gla Cyclopean Fortress',
        description: 'Largest Cyclopean fortress in the Mycenaean world',
        longDescription: `Gla (Kastro, "Castle") is the largest Cyclopean fortress in the Mycenaean world, covering 50 acres (twice Mycenae's size). The fortress was built on a limestone hill in Lake Copais, controlling the drainage system of the lake (the "Copais Lake," a 2,000-hectare basin drained by Mycenaean canals, 9 km long, with tunnels 1.5 km long). The outer wall is 2.5-3 meters thick, 5 meters high, made of large limestone blocks (cyclopean masonry), with four gates (north, south, east, west). The interior contains a Mycenaean palace (the "Palace of Gla," with a megaron, 8 x 12 meters, with a central hearth), storerooms (with pithoi for grain), and a small temple (the "Temple of Gla," 10 x 20 meters). The fortress was built to protect the Copaic basin and its agricultural surplus, which fed the Mycenaean states. The fortress was abandoned c. 1200 BCE (the Bronze Age collapse).`,
        imageRegenerated: '/images/sites/gla-regenerated.jpg',
        imageCurrent: '/images/sites/gla-current.jpg',
        scene: 'The Cyclopean Fortress of Lake Copais',
        visualHighlights: ['Largest Cyclopean fortress (50 acres)', 'Outer wall 5 meters high (cyclopean masonry)', 'Four gates (north, south, east, west)', 'Palace megaron (8 x 12 meters, central hearth)', 'Lake Copais drainage system (Mycenaean canals)'],
        type: 'monument'
      }
    ]
  },

  // 146. Midea - Unfinished Cyclopean Gate
  midea: {
    id: 'midea',
    name: 'Midea',
    coordinates: [37.64, 22.84],
    region: 'Greece (Argolis)',
    locations: [
      {
        id: 'midea-gate',
        name: 'Midea Acropolis',
        description: 'Unfinished Cyclopean gate and temple',
        longDescription: `Midea (named for the mythical Medea, who fled here) is a Mycenaean acropolis with an unfinished Cyclopean gate (the "East Gate," 3 meters wide, 4 meters high, with a relieving triangle, but the walls are incomplete, suggesting construction stopped suddenly). The acropolis is on a hill (1 km south of the modern village of Midea), with fortification walls 300 meters long, enclosing 2.5 hectares. The interior contains a Mycenaean palace (the "Palace of Midea," 15 x 20 meters) and a temple (the "Temple of Midea," 10 x 12 meters, with a cult statue base). The site also includes a tholos tomb (the "Tholos of Midea," 6.5 meters diameter, collapsed) and a cemetery (with chamber tombs). Midea was destroyed c. 1200 BCE (the Bronze Age collapse), but the acropolis was reoccupied in the 4th century BCE by a small settlement.`,
        imageRegenerated: '/images/sites/midea-regenerated.jpg',
        imageCurrent: '/images/sites/midea-current.jpg',
        scene: 'The Unfinished Gate of Midea',
        visualHighlights: ['Unfinished Cyclopean gate (East Gate, 3 meters wide)', 'Relieving triangle above gate', 'Palace megaron (15 x 20 meters)', 'Temple with cult statue base', 'Tholos tomb (6.5 meters diameter)'],
        type: 'city'
      }
    ]
  },

  // 147. Menelaion - Shrine of Helen and Menelaus
  menelaion: {
    id: 'menelaion',
    name: 'Menelaion (Therápni)',
    coordinates: [37.073, 22.43],
    region: 'Greece (Laconia)',
    locations: [
      {
        id: 'menelaion-shrine',
        name: 'Menelaion',
        description: 'Shrine of Helen and Menelaus',
        longDescription: `The Menelaion (the "Shrine of Helen and Menelaus") is a Mycenaean palace (c. 1400 BCE) later converted into a hero shrine for Menelaus and Helen (the "Helen of Troy"). The site was abandoned after the Mycenaean period (c. 1100 BCE) but reoccupied in the Archaic period (c. 700 BCE) as a cult site. The shrine (the "Menelaion," 8th-5th centuries BCE) had a temple (10 x 25 meters, Doric, with a statue of Helen and Menelaus), a stoa (colonnade for visitors), and a theater (the "Theater of the Menelaion," seating 500). The site was a major pilgrimage center for the cult of Helen and Menelaus, as described by Pausanias (2nd century CE). The Mycenaean palace (the "Palace of the Menelaion") was built on a hill overlooking the Eurotas valley and the city of Sparta (5 km south).`,
        imageRegenerated: '/images/sites/menelaion-regenerated.jpg',
        imageCurrent: '/images/sites/menelaion-current.jpg',
        scene: 'The Shrine of Helen and Menelaus',
        visualHighlights: ['Mycenaean palace (c. 1400 BCE)', 'Hero shrine to Helen and Menelaus (Archaic temple)', 'Theater of the Menelaion (seating 500)', 'Eurotas valley view (Sparta 5 km south)', 'Pausanias pilgrimage description'],
        type: 'temple'
      }
    ]
  },

  // 148. Iklaina - Linear B Archive
  iklaina: {
    id: 'iklaina',
    name: 'Iklaina',
    coordinates: [36.99, 21.71],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'iklaina-tablets',
        name: 'Iklaina Acropolis',
        description: 'Second-largest Linear B archive in Greece',
        longDescription: `Iklaina is a Mycenaean acropolis with the second-largest Linear B archive in Greece (after Pylos), with over 300 tablets found (1999-2002 excavations). The site was a regional administrative center in the Pylos state (the "Pylos state," 2 provinces, 7 districts, 80 towns). The tablets record land ownership (divisions of land), tax assessments, military equipment (chariots, armor), and religious offerings (to Poseidon, Potnia). The archive was destroyed by fire c. 1180 BCE, preserving the tablets. The acropolis (1.5 hectares) has a palace (15 x 20 meters), a temple (10 x 12 meters), a workshop area, and a fortification wall (2.5 meters thick). Iklaina was a primary center in the Pylos state, controlling the southwestern Peloponnese.`,
        imageRegenerated: '/images/sites/iklaina-regenerated.jpg',
        imageCurrent: '/images/sites/iklaina-current.jpg',
        scene: 'The Linear B Archive of Iklaina',
        visualHighlights: ['Second-largest Linear B archive (300 tablets)', 'Palace megaron (15 x 20 meters)', 'Temple with cult statue base', 'Pylos state administrative center', 'Tablets on land ownership, tax, military'],
        type: 'city'
      }
    ]
  },

  // 149. Amyklai - Throne of Apollo
  amyklai: {
    id: 'amyklai',
    name: 'Amyklai',
    coordinates: [37.04, 22.46],
    region: 'Greece (Laconia)',
    locations: [
      {
        id: 'throne-apollo',
        name: 'Amyklaion (Throne of Apollo)',
        description: 'Sanctuary of Apollo with a monumental throne',
        longDescription: `Amyklai (the "Amyklaion") was a sanctuary of Apollo with a monumental throne (the "Throne of Apollo," built c. 550 BCE), described by Pausanias as a 20-meter-high wooden structure decorated with gold, ivory, and reliefs of mythological scenes (the "Throne of Bathycles"). The throne was built as a cenotaph for Hyacinthus, the young lover of Apollo (the "Hyacinthia" festival, a Spartan festival). The sanctuary was a major religious center in Laconia, 5 km south of Sparta. The site also includes a Mycenaean palace (c. 1400 BCE) and a Roman bath (2nd century CE).`,
        imageRegenerated: '/images/sites/amyklai-regenerated.jpg',
        imageCurrent: '/images/sites/amyklai-current.jpg',
        scene: 'The Throne of Apollo',
        visualHighlights: ['Monumental throne of Apollo (20 meters high)', 'Wooden structure with gold and ivory', 'Hyacinthia festival (cenotaph of Hyacinthus)', 'Mycenaean palace (c. 1400 BCE)', 'Roman bath (2nd century CE)'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  },

  // 150. Koryphasion - Mycenaean Port of Pylos
  koryphasion: {
    id: 'koryphasion',
    name: 'Koryphasion (Pylos)',
    coordinates: [36.96, 21.67],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'pylos-ports',
        name: 'Koryphasion Naval Base',
        description: 'Mycenaean port and fortifications',
        longDescription: `Koryphasion (the "Naval Base of Pylos") was the Mycenaean port of Pylos, 5 km south of the Palace of Nestor. The site includes a fortified acropolis (the "Koryphasion Hill," 100 meters high, with the "Fortifications of Koryphasion," 2.5 km of walls), a harbor (the "Port of Pylos," protected from winds by the Sphacteria Island), and a town (the "Lower Town" of Pylos). The acropolis was fortified by the Athenians in the 5th century BCE (the "Battle of Pylos," 425 BCE, where the Athenians captured Spartan hoplites). The Mycenaean settlement was a major naval base for the Pylos state, controlling the Messenian Gulf and Ionian Sea. The Linear B tablets at Pylos mention the navy ("na-wa-ja"), ships, and sailors ("na-u-do-mo"), and Koryphasion was the likely base.`,
        imageRegenerated: '/images/sites/koryphasion-regenerated.jpg',
        imageCurrent: '/images/sites/koryphasion-current.jpg',
        scene: 'The Mycenaean Naval Base',
        visualHighlights: ['Koryphasion Hill (100 meters high)', 'Fortifications (2.5 km of walls)', 'Port of Pylos (protected harbor)', 'Battle of Pylos (425 BCE, Athenian victory)', 'Linear B references to navy ("na-wa-ja")'],
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 15: MINOAN (CRETE) (151-160) ==========
export const minoanSites: Record<string, Site> = {
  // 151. Knossos - Palace of Minos
  knossos: {
    id: 'knossos-palace',
    name: 'Knossos',
    coordinates: [35.298, 25.163],
    region: 'Crete',
    locations: [
      {
        id: 'knossos-central-court',
        name: 'Palace of Knossos',
        description: 'Largest Minoan palace, center of the Minotaur myth',
        longDescription: `Knossos is the largest Minoan palace (22,000 square meters, 1,300 rooms), built around 1900 BCE and rebuilt after an earthquake in 1700 BCE. The palace was the political, religious, and economic center of Minoan civilization, with a central court (50 x 25 meters) for ceremonies, a throne room (with the "Throne of Minos," alabaster seat flanked by griffin frescoes), royal apartments (the "Queen's Megaron" with dolphin fresco), storage magazines (with giant pithoi for oil and grain), and workshops (for pottery, stone carving, metalworking). The palace's complex layout—with multiple levels, light wells, and corridors—likely inspired the myth of the Labyrinth (the "House of the Double Axe," "labrys") and the Minotaur (half-man, half-bull creature). The palace was destroyed around 1450 BCE (by the Thera eruption?). The site was excavated by Sir Arthur Evans (1900-1935), who partially reconstructed the palace using concrete (the "Evans reconstruction," controversial but tourist-friendly).`,
        imageRegenerated: '/images/sites/knossos-regenerated.jpg',
        imageCurrent: '/images/sites/knossos-current.jpg',
        scene: 'The Palace of the Minotaur',
        visualHighlights: ['Central court (50 x 25 meters, ceremonies)', 'Throne Room with griffin fresco (alabaster throne)', 'Queen\'s Megaron with dolphin fresco', 'Light well architecture (multi-story reconstruction)', 'Linear B tablets (earliest Greek)'],
        type: 'palace'
      },
      {
        id: 'knossos-throne-room',
        name: 'Throne Room of Knossos',
        description: 'Seat of the Minoan king',
        longDescription: `The Throne Room of Knossos (c. 1400 BCE) is the oldest throne room in Europe. The room contains an alabaster throne (1.5 meters high, with a curved back, on a stone base), flanked by benches for the elders (the "council of elders"). The throne was found in situ, with a gypsum basin opposite for ritual purification. The room was decorated with frescoes of griffins (mythical creatures with lion bodies, bird heads) in a heraldic pose, suggesting a religious function (the "griffins" as guardians of the throne, symbolizing divine authority). The room was originally on the upper floor, with a light well for illumination. The throne may have been used by the "wanax" (king) or the "priest-king" of Knossos.`,
        imageRegenerated: '/images/sites/knossos-throne-regenerated.jpg',
        imageCurrent: '/images/sites/knossos-throne-current.jpg',
        scene: 'The Throne of Minos',
        visualHighlights: ['Alabaster throne (1.5 meters high, oldest in Europe)', 'Benches for council of elders', 'Griffin frescoes (guardians of the throne)', 'Gypsum basin for ritual purification', 'Light well from upper floor'],
        type: 'palace'
      },
      {
        id: 'knossos-linear-b',
        name: 'Linear B Archive',
        description: 'Clay tablet archive of Mycenaean Knossos',
        longDescription: `The Linear B Archive at Knossos (c. 1400 BCE, after the Mycenaean conquest) contained over 5,000 clay tablets (the "Knossos tablets"), the largest Linear B archive in the Mycenaean world (more than Pylos, Thebes, Iklaina). The tablets were found in the "Room of the Chariot Tablets" (East Wing) and the "Archive Room" (West Wing), baked by the fire that destroyed the palace. The tablets record administrative documents—land ownership (sheep, cattle, grain), military equipment (chariots, armor, swords), industrial production (oil, wool, bronze, linen), and religious offerings (to Zeus, Poseidon, Athena, Hermes). The tablets also give the names of the Mycenaean kings of Knossos (e.g., "We-we-si-jo" as a personal name, "Dauros" as a place name). The archive was used to date the palace's destruction (c. 1375 BCE or 1450 BCE, debated).`,
        imageRegenerated: '/images/sites/knossos-tablets-regenerated.jpg',
        imageCurrent: '/images/sites/knossos-tablets-current.jpg',
        scene: 'The Linear B Archive',
        visualHighlights: ['5,000+ clay tablets (largest Linear B archive)', 'Room of the Chariot Tablets (East Wing)', 'Military equipment records (chariots, armor)', 'Industrial production records (oil, wool)', 'Mycenaean kings of Knossos'],
        type: 'palace'
      }
    ]
  },

  // 152. Phaistos - Palace of the Disc
  phaistos: {
    id: 'phaistos-palace',
    name: 'Phaistos',
    coordinates: [35.052, 24.815],
    region: 'Crete',
    locations: [
      {
        id: 'palace-phaistos',
        name: 'Palace of Phaistos',
        description: 'Second largest Minoan palace, home of the Phaistos Disc',
        longDescription: `The Palace of Phaistos is the second largest Minoan palace (after Knossos, 12,000 square meters), located on a hill (100 meters high) overlooking the Messara Plain (the "Grain Basket" of Crete). The palace was built around 1900 BCE (first palace, destroyed by earthquake c. 1700 BCE) and rebuilt (second palace, 1700-1400 BCE), with a central court (40 x 20 meters), theater area (for ceremonies), storage magazines (with giant pithoi for grain, oil, wine), and royal apartments with light wells (for illumination). The palace's layout is similar to Knossos, with a "Minoan hall" (polythyron, a room with multiple doors). The palace's most famous find is the Phaistos Disc (c. 1700 BCE, found in 1908 by Luigi Pernier), a clay disk (16 cm diameter, 2 cm thick) stamped with 242 symbols in a spiral pattern (6 cm long) on both sides (61 symbols on side A, 61 on side B?). The symbols (45 distinct signs) remain undeciphered, representing one of archaeology's greatest mysteries (the "Phaistos Disc," possibly a prayer, a calendar, or a game). The palace was destroyed around 1400 BCE (by fire, perhaps the Thera eruption), preserving the disc. The site also includes the "Hagia Triada villa" (a summer palace, 2 km west), with exquisite frescoes (the "Harvester Vase" with men returning from harvest).`,
        imageRegenerated: '/images/sites/phaistos-regenerated.jpg',
        imageCurrent: '/images/sites/phaistos-current.jpg',
        scene: 'The Palace of the Mysterious Disc',
        visualHighlights: ['Central court (40 x 20 meters, ceremonies)', 'Phaistos Disc (undeciphered symbols, 45 signs)', 'Theater area for rituals (south of court)', 'Royal apartments with light wells', 'Storage magazines with giant pithoi (1.5 meters high)'],
        type: 'palace'
      },
      {
        id: 'hagia-triada',
        name: 'Hagia Triada (Holy Trinity)',
        description: 'Summer palace of the Phaistos rulers',
        longDescription: `Hagia Triada (the "Holy Trinity," a 19th-century monastery) was a Minoan summer palace or villa (2 km west of Phaistos, on a hill overlooking the Messara Plain). The site (c. 1600-1400 BCE) has a smaller palace (1,200 square meters) with a central court (20 x 15 meters), royal apartments (with frescoes), and a shrine (the "Shrine of hagia Triada," with snake goddess figurines). The site is famous for its frescoes—the "Harvester Vase" (a steatite vase, 15 cm high, with relief of men returning from harvest, singing), the "Boxer Fresco" (two boxers with gloves), and the "Peacocks Fresco" (peacocks in a garden). The site also contains a "Linear A archive" (clay tablets in undeciphered Minoan), a cemetery ("tholos tombs" with gold jewelry), and a "mycenaean megaron" (a later building).`,
        imageRegenerated: '/images/sites/hagia-triada-regenerated.jpg',
        imageCurrent: '/images/sites/hagia-triada-current.jpg',
        scene: 'The Summer Palace of Phaistos',
        visualHighlights: ['Summer palace (1,200 square meters, central court)', 'Harvester Vase (steatite, harvest relief)', 'Boxer Fresco (Minoan boxing)', 'Linear A archive (undeciphered)', 'Snake goddess figurines (shrine)'],
        type: 'palace'
      }
    ]
  },

  // 153. Malia - Palace of the Bee Pendant
  malia: {
    id: 'malia-palace',
    name: 'Malia',
    coordinates: [35.283, 25.467],
    region: 'Crete',
    locations: [
      {
        id: 'palace-malia',
        name: 'Palace of Malia',
        description: 'Third major Minoan palace with the gold bee pendant',
        longDescription: `The Palace of Malia is the third largest Minoan palace (after Knossos and Phaistos, 7,000 square meters), located on the north coast of Crete (the "Malia" archaeological site, 30 km east of Heraklion). The palace was built around 1900 BCE (first palace) and rebuilt after an earthquake c. 1700 BCE (second palace), with a central court (40 x 20 meters), storage magazines (with giant pithoi), workshops (for pottery, stone carving, metalworking), and a famous "hypostyle crypt" (pillar room, 10 x 10 meters, with a central pillar, 3 meters high, and a ceremonial basin, the "lustral basin." The palace's most famous artifact is the "Malia Pendant" (c. 1800 BCE), a gold pendant (4.5 cm high, 3 cm wide) showing two bees (or wasps) depositing honey in a comb, with filigree and granulation, a masterpiece of Minoan goldworking (found in the "Hypostyle Crypt," 1930). The site also includes a "quartier Mu" (Mu Quarter, a residential area with a seal engraver's workshop, a luxurious house with a "Minoan hall," and a "magazine" with 50 pithoi). Malia controlled the fertile plain (the "Malia Plain") and had access to the Aegean Sea (the "Malia Harbor," 1 km north), serving as a trading port with the Cyclades and the Greek mainland. The palace was destroyed around 1450 BCE, possibly by the Thera eruption's effects (tsunami, ash, climate change).`,
        imageRegenerated: '/images/sites/malia-regenerated.jpg',
        imageCurrent: '/images/sites/malia-current.jpg',
        scene: 'The Palace of the Gold Bee Pendant',
        visualHighlights: ['Malia Pendant (gold bees depositing honey)', 'Hypostyle crypt with pillar (3 meters high)', 'Quartier Mu (seal engraver\'s workshop)', 'Giant pithos storage jars (1.5 meters high)', 'Kernos stone (offering table, 1 meter wide)'],
        type: 'palace'
      }
    ]
  },

  // 154. Zakros - Eastern Trading Hub
  zakros: {
    id: 'zakros-palace',
    name: 'Zakros (Kato Zakros)',
    coordinates: [35.098, 26.261],
    region: 'Crete',
    locations: [
      {
        id: 'palace-zakros',
        name: 'Palace of Zakros',
        description: 'Eastern Minoan palace connected to Egyptian trade',
        longDescription: `The Palace of Zakros (also called Kato Zakros, "Lower Zakros") is the fourth Minoan palace (after Knossos, Phaistos, Malia), located on the east coast of Crete (the "Zakros Bay," a natural harbor). The palace was built around 1600 BCE (Neopalatial period) and served as a trading hub with Egypt, Syria, and Cyprus (the "Eastern Trade Route"), as shown by imported ivory (from Egypt), Egyptian stone vessels (alabaster, obsidian), Syrian cylinder seals (with figures of animals and gods), and Canaanite jars (for wine). The palace features a central court (25 x 15 meters), royal apartments (with light wells), storage magazines (with many intact pithoi, 40 found in situ), and a unique "shrine" with rock-crystal ritual vessels (the "Rock Crystal Vessel," 10 cm high, carved from a single crystal). The palace also had an elaborate drainage system (clay pipes) and light wells similar to Knossos. Zakros was destroyed around 1450 BCE (by fire), along with the other Minoan palaces, but the palace's remote location (30 km from the nearest road until the 20th century) preserved many artifacts found in situ (the "Zakros Treasure," 100 stone vessels, 200 pottery vases, bronze tools). The site also includes a "town" (residential area) and a "cemetery" (with "tholos tombs").`,
        imageRegenerated: '/images/sites/zakros-regenerated.jpg',
        imageCurrent: '/images/sites/zakros-current.jpg',
        scene: 'The Eastern Trading Hub of Minoan Crete',
        visualHighlights: ['Egyptian stone vessel imports (alabaster, obsidian)', 'Rock crystal ritual vessels (10 cm high)', 'Shrine with cult objects (snake goddess)', 'Intact pithos storage jars (40 found in situ)', 'Syrian cylinder seals (animals, gods)'],
        type: 'palace'
      }
    ]
  },

  // 155. Gournia - The Pompei of Minoan Crete
  gournia: {
    id: 'gournia',
    name: 'Gournia',
    coordinates: [35.113, 25.792],
    region: 'Crete',
    locations: [
      {
        id: 'gournia-town',
        name: 'Gournia',
        description: "Best-preserved Minoan town, the 'Pompeii of Minoan Crete'",
        longDescription: `Gournia is the best-preserved Minoan town (the "Pompeii of Minoan Crete"), excavated in 1901-1904 by Harriet Boyd-Hawes (the first American woman to direct an excavation). The town (c. 1600-1450 BCE) was built on a hill overlooking the Mirabello Bay, with streets, houses (60 houses preserved), a palace (the "Palace of Gournia," 1,500 square meters), a shrine (the "Shrine of Gournia," with snake goddess figurines), and a cemetery (the "Gournia Cemetery," with chamber tombs). The houses had ground-floor rooms for workshops and storage, and upper floors for living. The town had a central drainage system (clay pipes). The palace had a central court (20 x 10 meters), a "Minoan hall" (with a light well), and a shrine. The town was destroyed around 1450 BCE (by fire). The "Gournia Treasure" includes bronze tools (saws, knives, chisels, adzes), stone vessels (vases, bowls, lamps), pottery (the "Gournia stirrup jars"), and Linear A tablets (undeciphered).`,
        imageRegenerated: '/images/sites/gournia-regenerated.jpg',
        imageCurrent: '/images/sites/gournia-current.jpg',
        scene: 'The Pompeii of Minoan Crete',
        visualHighlights: ['Best-preserved Minoan town (60 houses)', 'Streets with paved alleys', 'Palace of Gournia (central court, shrine)', 'Bronze tools (saws, knives, chisels)', 'Linear A tablets (undeciphered)'],
        type: 'city'
      }
    ]
  },

  // 156. Kommos - Harbor of Phaistos
  kommos: {
    id: 'kommos',
    name: 'Kommos',
    coordinates: [35.0, 24.75],
    region: 'Crete',
    locations: [
      {
        id: 'kommos-harbor',
        name: 'Kommos',
        description: 'Minoan harbor town for Phaistos',
        longDescription: `Kommos was the harbor town of Phaistos (on the Libyan Sea, 3 km south), serving as the port for the Messara Plain. The site (c. 2000-1200 BCE) has a Minoan town (with houses, workshops, storage rooms), a "ship-sheds" building (a long building, 40 x 6 meters, with 6 bays for storing ships, c. 1200 BCE), and a "sanctuary" (with a bench shrine). Kommos was a trading hub with Egypt, the Near East, and Cyprus, as shown by imported pottery (Canaanite jars, Egyptian stone vessels, Cypriot pottery), and a "bronze hoard" (with 100 bronze objects). The site also includes a "Mycenaean megaron" (a small, 10 x 10 meter megaron with a central hearth, from the Mycenaean period, c. 1200 BCE). The site was destroyed by fire c. 1200 BCE.`,
        imageRegenerated: '/images/sites/kommos-regenerated.jpg',
        imageCurrent: '/images/sites/kommos-current.jpg',
        scene: 'The Harbor of Phaistos',
        visualHighlights: ['Ship-sheds building (40 x 6 meters, 6 bays)', 'Minoan town (houses, workshops)', 'Imported pottery (Canaanite, Egyptian, Cypriot)', 'Bronze hoard (100 bronze objects)', 'Mycenaean megaron (central hearth)'],
        type: 'city'
      }
    ]
  },

  // 157. Kato Zakros - Palace Quarter
  katoZakros: {
    id: 'kato-zakros',
    name: 'Kato Zakros',
    coordinates: [35.098, 26.261],
    region: 'Crete',
    locations: [
      {
        id: 'kato-zakros-town',
        name: 'Kato Zakros Town',
        description: 'Minoan town outside the palace',
        longDescription: `The town of Kato Zakros (east of the palace) was the residential area for craftsmen, merchants, and officials. The town (c. 1600-1450 BCE) had paved streets, houses (40 houses preserved), workshops (for pottery, stone carving, metalworking), and a shrine (the "Shrine of Zakros," with a stone offering table). The town's houses were two stories (ground floor for work, upper floor for living), with a central courtyard. The town had a sewage system (clay pipes under the streets). The town was destroyed by fire around 1450 BCE. The "Zakros Treasure" was found here, including bronze tools (saws, chisels, knives, adzes), stone vases (vases, bowls, lamps), pottery (the "Zakros stirrup jars"), and a "hoard" of bronze vessels (20 bronze bowls, 3 bronze tripods).`,
        imageRegenerated: '/images/sites/kato-zakros-regenerated.jpg',
        imageCurrent: '/images/sites/kato-zakros-current.jpg',
        scene: 'The Town of the Eastern Harbor',
        visualHighlights: ['Residential town (40 houses)', 'Paved streets with sewage pipes', 'Shrine with stone offering table', 'Bronze tool hoard (saws, chisels, knives)', 'Zakros Treasure (stone vases, bronze vessels)'],
        type: 'city'
      }
    ]
  },

  // 158. Palekastro - Minoan Settlement
  palekastro: {
    id: 'palekastro',
    name: 'Palekastro (Roussolakkos)',
    coordinates: [35.2, 26.25],
    region: 'Crete',
    locations: [
      {
        id: 'palekastro-town',
        name: 'Palekastro',
        description: 'Minoan town with a sanctuary',
        longDescription: `Palekastro (Roussolakkos, "Red Pit") is a Minoan town on the east coast of Crete (2 km north of Kato Zakros), with a sanctuary (the "Sanctuary of Palekastro," c. 1500 BCE, with a stone bench, horned altars, and a clay statue of a "kouros" (a young god, the "Palekastro Kouros," 50 cm high, with a gold necklace). The town (c. 1600-1200 BCE) has paved streets, houses (with frescoes of dolphins, fish), a "palace" (a smaller building, 1,000 square meters), and a "megaron" (a Mycenaean building). The site also includes a "Linear A archive" (tablets with undeciphered Minoan), a "pottery kiln" (for mass production), and a "bronze hoard" (10 bronze vessels).`,
        imageRegenerated: '/images/sites/palekastro-regenerated.jpg',
        imageCurrent: '/images/sites/palekastro-current.jpg',
        scene: 'The Minoan Town of Palekastro',
        visualHighlights: ['Sanctuary with horned altars', 'Palekastro Kouros (young god statue)', 'Frescoes of dolphins and fish', 'Linear A archive (undeciphered)', 'Pottery kiln for mass production'],
        type: 'city'
      }
    ]
  },

  // 159. Archanes - Cemetery of Knossos
  archanes: {
    id: 'archanes',
    name: 'Archanes (Phourni)',
    coordinates: [35.24, 25.16],
    region: 'Crete',
    locations: [
      {
        id: 'archanes-cemetery',
        name: 'Archanes (Phourni)',
        description: 'Royal cemetery of the Knossos rulers',
        longDescription: `Archanes (Phourni, "the ovens"), 5 km south of Knossos, was a Minoan town and the royal cemetery for the Knossos palace. The cemetery (c. 2400-1200 BCE) contains 28 tombs (tholos tombs (round beehive tombs), chamber tombs (cut into rock), and a temple tomb (a building with a burial chamber). The most famous tomb is the "Tholos A" (an 8-meter-high tholos, 10 meters diameter), with 11 burials and 200 grave goods (gold jewelry, bronze weapons, stone vessels). The site also includes a "Minoan villa" (the "Villa of Archanes," with 20 rooms, a central court, a Minoan hall, and a shrine with snake goddess figurines). The town had a palace (the "Palace of Archanes," 5,000 square meters), with a central court, a Minoan hall, and a shrine.`,
        imageRegenerated: '/images/sites/archanes-regenerated.jpg',
        imageCurrent: '/images/sites/archanes-current.jpg',
        scene: 'The Royal Cemetery of Knossos',
        visualHighlights: ['Tholos A tomb (8 meters high, 11 burials)', 'Gold jewelry (rings, necklaces, bracelets)', 'Bronze weapons (swords, daggers, spears)', 'Villa of Archanes (20 rooms, shrine)', 'Snake goddess figurines (shrine)'],
        type: 'tomb'
      }
    ]
  },

  // 160. Mochlos - Coastal Trading Town
  mochlos: {
    id: 'mochlos',
    name: 'Mochlos',
    coordinates: [35.19, 25.88],
    region: 'Crete',
    locations: [
      {
        id: 'mochlos-town',
        name: 'Mochlos',
        description: 'Minoan coastal trading center',
        longDescription: `Mochlos (an island in the Bronze Age, now connected to the coast by a sand bar) was a Minoan coastal trading center (c. 3000-1450 BCE) on the north coast of Crete (5 km east of Gournia). The site has a Minoan town (on the island) with houses, workshops, storage rooms, and a cemetery (on the mainland). The "Mochlos Treasure" (found in 1908, 1976) includes gold jewelry (pendants, beads, earrings, diadems), silver vessels (cups, bowls), stone vases (from Egypt), and pottery (the "Mochlos stirrup jars"). The town was destroyed around 1450 BCE (by fire).`,
        imageRegenerated: '/images/sites/mochlos-regenerated.jpg',
        imageCurrent: '/images/sites/mochlos-current.jpg',
        scene: 'The Coastal Trading Town',
        visualHighlights: ['Island settlement (Bronze Age island)', 'Mochlos Treasure (gold jewelry, silver vessels)', 'Egyptian stone vases (alabaster)', 'Cemetery on the mainland', 'Stirrup jars for oil export'],
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 16: PERSIAN EMPIRE (ACHAEMENID) (171-180) ==========
export const persianSites: Record<string, Site> = {
  // 171. Persepolis - Ceremonial Capital
  persepolis: {
    id: 'persepolis-complex',
    name: 'Persepolis (Parsa)',
    coordinates: [29.935, 52.891],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'persepolis-apadana',
        name: 'Apadana Palace of Persepolis',
        description: 'Grand audience hall of the Achaemenid kings',
        longDescription: `The Apadana Palace (c. 518-465 BCE) was the grand audience hall of Persepolis, built by Darius I (522-486 BCE) and completed by Xerxes I (486-465 BCE). The palace (100 x 100 meters) had 72 columns (20 meters high, 1.5 meters diameter), arranged in 6 rows of 12, with a central hall (60 x 60 meters) and three porticoes. The columns were made of limestone and marble, with capitals in the shape of animals (bulls, lions, eagles). The roof was made of cedar wood, brought from Lebanon. The palace was destroyed by fire in 330 BCE (Alexander the Great), but 13 columns still stand (reconstructed 1970s). The Apadana reliefs (east and north stairways) depict 23 delegations from subject nations bringing gifts to the Persian king (c. 300 figures, 3 meters high), the most detailed representation of Achaemenid imperial ideology, showing Medes (horses), Elamites (lion cubs), Babylonians (bulls), Egyptians (cloths), Scythians (horses), Indians (donkeys), Arabs (camel), Libyans (horses), Ethiopians (ivory), Thracians (silver), Greeks (cloth), and others.`,
        imageRegenerated: '/images/sites/persepolis-apadana-regenerated.jpg',
        imageCurrent: '/images/sites/persepolis-apadana-current.jpg',
        scene: 'The Apadana of Persepolis',
        visualHighlights: [
          '72 columns (20 meters high, 13 standing)',
          'Column capitals with bulls and lions',
          'Apadana reliefs (23 delegations)',
          'Stairway of Nations (3 meters high)',
          'Cedar roof from Lebanon (reconstructed)'
        ],
        deity: 'Ahura Mazda',
        type: 'palace'
      },
      {
        id: 'persepolis-throne-hall',
        name: 'Throne Hall (Hundred Columns Hall)',
        description: 'Hall of the Persian king throne',
        longDescription: `The Throne Hall (c. 470-465 BCE), also called the Hundred Columns Hall, was the second largest building at Persepolis (70 x 70 meters), with 100 columns (11 meters high, 1.5 meters diameter) arranged in 10 rows of 10, and a roof of cedar. The hall was used for the King throne (the "Throne of Darius"), with a throne platform (10 x 10 meters, 2 steps). The hall doorways (8 doors, each 5 meters high) were decorated with reliefs of the king fighting monsters (lion, bull, dragon), as symbols of royal power. The hall was also used for receiving tribute and holding banquets (the "Hall of Banquets"). The reliefs depict the king (Darius or Xerxes) on the throne, with the crown prince (standing behind), offering incense to the god Ahura Mazda.`,
        imageRegenerated: '/images/sites/persepolis-throne-regenerated.jpg',
        imageCurrent: '/images/sites/persepolis-throne-current.jpg',
        scene: 'The Hundred Columns Hall',
        visualHighlights: [
          '100 columns (11 meters high, 10 x 10 rows)',
          'King fighting monsters (lion, bull, dragon) reliefs',
          'Throne platform (10 x 10 meters, 2 steps)',
          'Cedar wood roof (reconstructed)',
          'Double-bull column capitals'
        ],
        type: 'palace'
      },
      {
        id: 'persepolis-treasury',
        name: 'Treasury of Persepolis',
        description: 'Storage for tribute and royal wealth',
        longDescription: `The Treasury of Persepolis (c. 515-450 BCE) was a storage building (100 x 50 meters) for tribute, booty, and gifts received by the Persian kings. The treasury contained gold and silver vessels (dinnerware), jewelry (necklaces, bracelets, earrings), weapons (daggers, swords, arrowheads), textiles (blankets, rugs, curtains), and food supplies (grain, oil, wine, beer). The treasury was divided into 100 rooms, each guarded by the "Persian guards" (reliefs of soldiers). The treasury was looted and burned by Alexander the Great (330 BCE), and the building foundations and reliefs remain. The "Treasury Reliefs" depict the king (Darius) with the crown prince (Xerxes) giving audience to a Mede official (the "Treasury Relief"), and the "Seal of Darius" (a cylinder seal with the king hunting lions).`,
        imageRegenerated: '/images/sites/persepolis-treasury-regenerated.jpg',
        imageCurrent: '/images/sites/persepolis-treasury-current.jpg',
        scene: 'The Treasury of Persepolis',
        visualHighlights: [
          '100 storage rooms (50 x 100 meters)',
          'Gold and silver vessels (dinnerware)',
          'Persian guards reliefs (soldiers)',
          'Treasury Relief (Darius and Xerxes)',
          'Seal of Darius (lion hunting)'
        ],
        type: 'palace'
      }
    ]
  },

  // 172. Pasargadae - First Persian Capital
  pasargadae: {
    id: 'pasargadae-capital',
    name: 'Pasargadae',
    coordinates: [30.201, 53.179],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'tomb-cyrus',
        name: 'Tomb of Cyrus the Great',
        description: 'Resting place of the founder of the Persian Empire',
        longDescription: `The Tomb of Cyrus the Great (c. 530 BCE) is the most important monument at Pasargadae, the first capital of the Achaemenid Empire. The tomb is a simple gabled stone chamber (3.2 meters high, 2 meters wide, 2 meters long) on a six-stepped platform (11 meters high, 13 meters wide), made of white limestone. The tomb was described by Greek sources (Arrian, Plutarch, Strabo) as bearing the inscription: "O man, whoever you are, I am Cyrus, who founded the Persian Empire. Do not begrudge me this earth." The tomb is located in a garden (the "Paradise" of Pasargadae), surrounded by a wall (10 meters square). The tomb was opened by Alexander the Great (324 BCE) who found the body still intact, and ordered its restoration. The tomb was looted in the Islamic period (7th-14th century CE), and the inscription has not survived.`,
        imageRegenerated: '/images/sites/cyrus-tomb-regenerated.jpg',
        imageCurrent: '/images/sites/cyrus-tomb-current.jpg',
        scene: 'The Tomb of Cyrus the Great',
        visualHighlights: [
          'Stepped tomb of Cyrus (6 steps, 11 meters high)',
          'Gabled stone chamber (3.2 meters high)',
          'White limestone construction',
          'Garden enclosure (Paradise of Pasargadae)',
          'Alexander\'s visit (324 BCE)'
        ],
        type: 'tomb'
      },
      {
        id: 'pasargadae-palace',
        name: 'Palace of Cyrus the Great',
        description: 'Royal residence of the Persian founder',
        longDescription: `The Palace of Cyrus the Great (c. 540 BCE) is the main building at Pasargadae, a columned hall (30 x 30 meters) with 24 columns (8 columns in 3 rows), made of white limestone. The palace was the royal residence of Cyrus before he founded Persepolis. The palace had a central hall (15 x 15 meters) with a hearth (fire altar), a portico (8 columns), and side rooms (for storage). The palace is the earliest known example of the "Apadana" style (hypostyle hall). The palace's columns (now only bases remain) had capitals in the shape of bulls (the "Bull Capital of Pasargadae"), now in the National Museum of Iran. The palace was surrounded by a garden (the "Paradise") with pools and pavilions.`,
        imageRegenerated: '/images/sites/pasargadae-palace-regenerated.jpg',
        imageCurrent: '/images/sites/pasargadae-palace-current.jpg',
        scene: 'The Palace of Cyrus',
        visualHighlights: [
          'Columned hall (30 x 30 meters, 24 columns)',
          'Central hearth (fire altar, 2 meters diameter)',
          'Bull capitals (earliest Persian column capitals)',
          'Garden paradise (pools, pavilions)',
          'Earliest Apadana style (hypostyle)'
        ],
        type: 'palace'
      },
      {
        id: 'pasargadae-gatehouse',
        name: 'Gatehouse of Pasargadae',
        description: 'Entrance to the royal precinct',
        longDescription: `The Gatehouse of Pasargadae (c. 540 BCE) is a monumental doorway (15 meters high, 10 meters wide) with a winged figure relief (the "Winged Man of Pasargadae," an early version of the Faravahar symbol), 4 meters high, carved in relief. The gatehouse was the entrance to the royal precinct of Pasargadae, leading to the palace complex. The building had two columns (flanking the doorway) and a roof of cedar. The winged figure wears an Egyptian-style crown (the "hemhem" crown, with three uraei) and has a long beard, symbolizing royal power (the "khvarenah" of the king). The figure is identified as Cyrus himself (or possibly the god Ahura Mazda).`,
        imageRegenerated: '/images/sites/pasargadae-gate-regenerated.jpg',
        imageCurrent: '/images/sites/pasargadae-gate-current.jpg',
        scene: 'The Gatehouse of Cyrus',
        visualHighlights: [
          'Monumental doorway (15 meters high)',
          'Winged figure relief (4 meters high, Faravahar)',
          'Egyptian-style crown (hemhem crown)',
          'Cedar roof (reconstructed)',
          'Two columns framing the entrance'
        ],
        type: 'monument'
      }
    ]
  },

  // 173. Naqsh-e Rostam - Royal Tombs
  naqshRostam: {
    id: 'naqsh-e-rostam',
    name: 'Naqsh-e Rostam',
    coordinates: [29.989, 52.873],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'achaemenid-tombs',
        name: 'Achaemenid Royal Tombs',
        description: 'Rock-cut tombs of four great kings',
        longDescription: `Naqsh-e Rostam is a necropolis carved into a cliff face (the "Cliff of Naqsh-e Rostam," 50 meters high) northwest of Persepolis, containing the rock-cut tombs of four Achaemenid kings (probably Darius I (522-486 BCE), Xerxes I (486-465 BCE), Artaxerxes I (465-424 BCE), and Darius II (423-404 BCE). Each tomb facade is carved in the form of a cross (the "Persian cross," 30 meters high, 20 meters wide), with a relief of the king standing on a throne held by 30 figures (4 tiers of 7-8 figures) representing the subject nations (the "Throne Bearers" relief). The king stands before a fire altar (the "fire altar" of the Zoroastrian religion), worshipping Ahura Mazda. The inscriptions (the "DNa" inscription on Darius I's tomb) say: "King Darius says: By the grace of Ahura Mazda, I am king... Persia is a good land."`,
        imageRegenerated: '/images/sites/naqsh-e-rostam-tombs-regenerated.jpg',
        imageCurrent: '/images/sites/naqsh-e-rostam-tombs-current.jpg',
        scene: 'The Cliff Tombs of the Achaemenid Kings',
        visualHighlights: [
          'Four royal rock-cut tombs (cross-shaped facades)',
          'Throne Bearers reliefs (30 figures)',
          'Fire altar (Zoroastrian religion)',
          'King worshipping Ahura Mazda',
          'DNa inscription (Darius I)'
        ],
        type: 'tomb'
      },
      {
        id: 'sasanian-reliefs',
        name: 'Sasanian Reliefs',
        description: 'Victory reliefs of the Sasanian kings',
        longDescription: `Below the Achaemenid tombs at Naqsh-e Rostam are seven Sasanian reliefs (c. 3rd-4th century CE), carved during the Sasanian Empire (224-651 CE). The reliefs show the investiture of Ardashir I (224-241 CE), the founder of the Sasanian Empire, receiving the crown from Ahura Mazda (the god of Zoroastrianism, 3 meters high). Shapur I (241-272 CE) appears in three reliefs: the "Victory of Shapur I" over the Roman emperors (Valerian kneeling before Shapur), the "Triumph of Shapur I" (Shapur on horseback with Roman captives), and the "Donation of Shapur I" (Shapur receiving the crown from Ahura Mazda). Bahram II (274-293 CE) appears in the "Investiture of Bahram II." The reliefs are made of limestone, carved in high relief (3 meters high, 2-5 meters wide). The site also includes the "Ka'ba-ye Zartosht" (Zoroaster's Cube), a square tower (8 meters high) built in the 5th century BCE, possibly used for fire altars or as a tomb.`,
        imageRegenerated: '/images/sites/naqsh-e-rostam-sasanian-regenerated.jpg',
        imageCurrent: '/images/sites/naqsh-e-rostam-sasanian-current.jpg',
        scene: 'The Sasanian Reliefs',
        visualHighlights: [
          'Ardashir I investiture (Ahura Mazda)',
          'Shapur I victory (Valerian kneeling)',
          'Sasanian reliefs (7 reliefs)',
          'Ka\'ba-ye Zartosht tower (8 meters high)',
          'High relief limestone carvings (3 meters high)'
        ],
        type: 'monument'
      }
    ]
  },

  // 174. Susa - Administrative Capital
  susa: {
    id: 'susa',
    name: 'Susa (Shush)',
    coordinates: [32.191, 48.247],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'susa-palace',
        name: 'Palace of Darius at Susa',
        description: 'Great palace of the Achaemenid kings',
        longDescription: `The Palace of Darius I (c. 521-486 BCE) at Susa was the administrative center of the Achaemenid Empire, one of three capitals (with Persepolis and Babylon). The palace was built on a terrace (20 hectares), with a central apadana (hall, 50 x 50 meters, 36 columns), a throne room (the "Hall of Columns," 40 x 40 meters), a residential palace (the "Palace of Darius," 100 x 75 meters), and a harem (the "Harem of Xerxes," 50 x 50 meters). The palace was decorated with glazed brick reliefs (the "Archers of Susa"), depicting the Persian royal guard (10,000 troops). The site also includes the "Apadana of Susa" (an audience hall, similar to Persepolis), and the "Tomb of Daniel" (a traditional site for the Jewish prophet). The palace was damaged by fire under Artaxerxes I (5th century BCE) and rebuilt by Artaxerxes II (4th century BCE).`,
        imageRegenerated: '/images/sites/susa-palace-regenerated.jpg',
        imageCurrent: '/images/sites/susa-palace-current.jpg',
        scene: 'The Palace of Darius at Susa',
        visualHighlights: [
          'Glazed brick reliefs (Archers of Susa)',
          'Central apadana (50 x 50 meters, 36 columns)',
          'Hall of Columns (40 x 40 meters)',
          'Harem of Xerxes (50 x 50 meters)',
          'Tomb of Daniel (traditional site)'
        ],
        type: 'palace'
      }
    ]
  },

  // 175. Ecbatana - Summer Capital
  ecbatana: {
    id: 'ecbatana',
    name: 'Ecbatana (Hagmatana)',
    coordinates: [34.8, 48.517],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'ecbatana-palace',
        name: 'Ecbatana',
        description: 'Summer capital of the Achaemenid kings',
        longDescription: `Ecbatana (Hagmatana, "Place of Assembly") was the summer capital of the Achaemenid kings (with Persepolis, Susa, Babylon), in the Zagros Mountains (1,800 meters elevation). The city was famous for its seven walls (the "Walls of Ecbatana," described by Herodotus), each wall coated with a different colored plaster (white, black, scarlet, blue, orange, silver, gold), representing the seven planets. The palace of the king (the "Palace of Ecbatana") had a columned hall (50 x 50 meters) with 100 columns, and a treasury. The city was the capital of the Medes (the "Median Empire," 700-550 BCE) before the Persian conquest. The site is now buried under the modern city of Hamadan, but the "Stone Lion" (an Achaemenid relief) remains.`,
        imageRegenerated: '/images/sites/ecbatana-regenerated.jpg',
        imageCurrent: '/images/sites/ecbatana-current.jpg',
        scene: 'The Summer Capital of Persia',
        visualHighlights: [
          'Seven walls (colored plaster, seven planets)',
          'Palace of Ecbatana (100 columns)',
          'Median capital (pre-Persian)',
          'Zagros Mountains setting (1,800 meters)',
          'Stone Lion relief (Achaemenid)'
        ],
        type: 'city'
      }
    ]
  },

  // 176. Behistun Inscription - Royal Proclamation
  behistun: {
    id: 'behistun',
    name: 'Behistun Inscription (Bisotun)',
    coordinates: [34.388, 47.432],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'behistun-inscription',
        name: 'Behistun Inscription',
        description: 'Trilingual inscription of Darius the Great',
        longDescription: `The Behistun Inscription (c. 520 BCE) is a 15-meter-high relief carved into a cliff face (the "Cliff of Behistun"), with a trilingual inscription (Old Persian, Elamite, Babylonian) by Darius the Great (522-486 BCE). The inscription is 40 meters long, 15 meters high, with 1,200 lines of text. The relief shows Darius (2 meters high) with his bow, standing before nine rebels (the "Kings of the Nations," with their hands bound), and the god Ahura Mazda (the "Faravahar" symbol) floating above. The inscription tells the story of Darius's rise to power (after the death of Cambyses II, the rebellion of Gaumata the Magus, and 19 battles in one year). The inscription was the key to deciphering cuneiform (by Henry Rawlinson, 1835-1845, who copied the text by climbing the cliff with a ladder).`,
        imageRegenerated: '/images/sites/behistun-regenerated.jpg',
        imageCurrent: '/images/sites/behistun-current.jpg',
        scene: 'The Inscription of Darius the Great',
        visualHighlights: [
          '15-meter high relief (cliff face)',
          'Trilingual inscription (Old Persian, Elamite, Babylonian)',
          'Darius with bow (2 meters high)',
          'Nine kings with hands bound',
          'Ahura Mazda floating above'
        ],
        type: 'monument'
      }
    ]
  },

  // 177. Naqsh-e Rajab - Sasanian Reliefs
  naqshRajab: {
    id: 'naqsh-rajab',
    name: 'Naqsh-e Rajab',
    coordinates: [29.98, 52.88],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'sasanian-reliefs-rajab',
        name: 'Naqsh-e Rajab',
        description: 'Sasanian rock reliefs',
        longDescription: `Naqsh-e Rajab is a rock-cut relief site (2 km south of Persepolis), with four Sasanian reliefs (c. 3rd-4th century CE). The reliefs show the investiture of Ardashir I (224-241 CE), the founder of the Sasanian Empire, receiving the crown from Ahura Mazda (the god of Zoroastrianism). Shapur I (241-272 CE) appears in a relief on horseback, with a dead Roman emperor (Valerian) under his feet, and another Roman emperor (Philip the Arab) kneeling before him. Bahram II (274-293 CE) appears in a relief with his court. The reliefs are carved in high relief (2-5 meters high, 3-10 meters wide), in a shallow cave.`,
        imageRegenerated: '/images/sites/naqsh-rajab-regenerated.jpg',
        imageCurrent: '/images/sites/naqsh-rajab-current.jpg',
        scene: 'The Sasanian Reliefs of Naqsh-e Rajab',
        visualHighlights: [
          'Four Sasanian reliefs',
          'Ardashir I investiture (Ahura Mazda)',
          'Shapur I with Valerian (dead)',
          'Bahram II with his court',
          'Shallow cave setting'
        ],
        type: 'monument'
      }
    ]
  },

  // 178. Takht-e Soleyman - Zoroastrian Temple
  takhtSoleyman: {
    id: 'takht-soleyman',
    name: 'Takht-e Soleyman',
    coordinates: [36.603, 47.235],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'zoroastrian-fire-temple',
        name: 'Takht-e Soleyman (Throne of Solomon)',
        description: 'Great Zoroastrian temple complex',
        longDescription: `Takht-e Soleyman (Throne of Solomon, named after the biblical king) is a Zoroastrian temple complex (c. 4th-7th century CE) built around a lake (60 meters wide, 50 meters deep, spring-fed). The site was a major religious center of the Sasanian Empire, with a fire temple (an "Atash Kadeh," a fire altar) for the Zoroastrian religion. The complex includes the "Anahita Temple" (dedicated to the goddess of water), the "Khosrow's Palace" (a royal palace), and the "Mausoleum of Shapur II" (a tomb for the Sasanian king). The site was visited by the Mongol emperor Hulagu Khan (13th century). The lake is considered the "Purgatory" of Zoroastrian mythology, where the souls of the dead are purified.`,
        imageRegenerated: '/images/sites/takht-soleyman-regenerated.jpg',
        imageCurrent: '/images/sites/takht-soleyman-current.jpg',
        scene: 'The Throne of Solomon',
        visualHighlights: [
          'Fire temple (Atash Kadeh, Zoroastrian)',
          'Spring-fed lake (60 meters wide)',
          'Anahita Temple (water goddess)',
          'Khosrow\'s Palace (Sasanian)',
          'Mongol visit (Hulagu Khan)'
        ],
        deity: 'Ahura Mazda',
        type: 'temple'
      }
    ]
  },

  // 179. Susa Apadana - Relief of the King
  susaApadana: {
    id: 'susa-apadana',
    name: 'Susa Apadana',
    coordinates: [32.192, 48.245],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'susa-apadana-relief',
        name: 'Apadana of Susa',
        description: 'Audience hall of the Persian kings at Susa',
        longDescription: `The Apadana of Susa (c. 521-486 BCE) was the grand audience hall of the palace complex at Susa, built by Darius I. The hall (50 x 50 meters, 36 columns, 12 rows of 3) was decorated with glazed brick reliefs (the "Glazed Bricks of Susa"), depicting Persian guards (the "Archers of Susa," 10,000 troops), lions (symbols of the king), and winged disks (the "Faravahar" symbol of Ahura Mazda). The hall was supported by wooden columns (cedar from Lebanon). The glazed bricks are now in the Louvre Museum (the "Susa Bricks," 2,000 fragments). The hall was destroyed by fire under Artaxerxes I (5th century BCE) and rebuilt by Artaxerxes II (4th century BCE). The "Apadana of Susa" is the best-preserved example of Achaemenid glazed brickwork.`,
        imageRegenerated: '/images/sites/susa-apadana-regenerated.jpg',
        imageCurrent: '/images/sites/susa-apadana-current.jpg',
        scene: 'The Glazed Brick Apadana',
        visualHighlights: [
          'Glazed brick reliefs (Archers of Susa)',
          '36 columns (12 x 3 rows)',
          'Lion reliefs (king symbol)',
          'Winged disk (Ahura Mazda)',
          'Susa Bricks (Louvre Museum)'
        ],
        type: 'palace'
      }
    ]
  },

  // 180. Qasr-e Shirin - Palace of Khosrow II
  qasrShirin: {
    id: 'qasr-shirin',
    name: 'Qasr-e Shirin',
    coordinates: [34.517, 45.583],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'palace-khosrow',
        name: 'Palace of Khosrow II',
        description: 'Sasanian palace with Anahita temple',
        longDescription: `Qasr-e Shirin (the "Palace of the Bride") is a Sasanian palace (c. 6th-7th century CE) built by Khosrow II (590-628 CE), the last great Sasanian king. The palace (200 x 100 meters) had a central court (50 x 50 meters), a throne room (the "Iwan of Khosrow," 30 meters high, 25 meters wide), and a fire temple (the "Fire Temple of Khosrow"). The palace was built on a cliff, overlooking the plain. The site also includes the "Anahita Temple" (a rock-cut temple dedicated to the goddess of water) and the "Mausoleum of Shirin" (a tomb for Khosrow's queen). The palace was destroyed by the Arab invasion (7th century CE). The site's reliefs (the "Rock Relief of Khosrow") show the king hunting (with sword and bow).`,
        imageRegenerated: '/images/sites/qasr-shirin-regenerated.jpg',
        imageCurrent: '/images/sites/qasr-shirin-current.jpg',
        scene: 'The Palace of Khosrow II',
        visualHighlights: [
          'Central court (50 x 50 meters)',
          'Iwan of Khosrow (30 meters high)',
          'Fire Temple of Khosrow (Zoroastrian)',
          'Anahita Temple (water goddess)',
          'Rock Relief of Khosrow (king hunting)'
        ],
        deity: 'Anahita',
        type: 'palace'
      }
    ]
  }
};

// ========== SECTION 17: ETRUSCAN CIVILIZATION (181-190) ==========
export const etruscanSites: Record<string, Site> = {
  // 181. Tarquinia - Painted Tombs
  tarquinia: {
    id: 'tarquinia-tombs',
    name: 'Tarquinia (Corneto)',
    coordinates: [42.255, 11.757],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'monterozzi-necropolis',
        name: 'Monterozzi Necropolis',
        description: 'Famous painted tombs of Etruscan aristocracy',
        longDescription: `The Monterozzi Necropolis at Tarquinia (UNESCO World Heritage site, 2004) contains over 6,000 rock-cut tombs, many decorated with frescoes depicting Etruscan life - banquets (the "Tomb of the Leopards," c. 480 BCE, with reclining couples, musicians, dancers, serving boys), dancers (the "Tomb of the Dancers," c. 500 BCE, with women dancing to aulos music), musicians (the "Tomb of the Trumpets," c. 500 BCE, with a trumpeter), athletes (the "Tomb of the Athletes," c. 500 BCE, with discus throwers, wrestlers), and scenes of the afterlife (the "Tomb of the Bulls," c. 560 BCE, with a scene of the Trojan War, Achilles killing Troilus). The Tomb of Hunting and Fishing (c. 510 BCE) shows the deceased in nature (hunting birds, fishing, with dolphins). Tarquinia was one of the 12 cities of the Etruscan League (the "Dodecapolis," or "Twelve Cities"), the most powerful Etruscan city. The site includes the "Tumulus of the King" (a large mound tomb, 50 meters diameter), the "Tomb of the Augurs" (with haruspicy scenes, a haruspex reading a sheep's liver), and the "Tomb of the Bulls" (the earliest Etruscan painting, 560 BCE, with a scene of the Trojan War). The Etruscans influenced early Rome (the Tarquin dynasty ruled Rome, 616-509 BCE). The tomb paintings provide the only surviving evidence of Etruscan art and social life, showing women participating in banquets reclining with men - equality unusual in Mediterranean cultures.`,
        imageRegenerated: '/images/sites/tarquinia-regenerated.jpg',
        imageCurrent: '/images/sites/tarquinia-current.jpg',
        scene: 'The Frescoed Tombs of the Etruscan Elite',
        visualHighlights: ['Tomb of the Leopards banquet fresco (reclining couples)', 'Tomb of Hunting and Fishing landscapes (birds, fish)', '6,000 painted chamber tombs (rock-cut)', 'Tumulus mound tombs (50 meters diameter)', 'Etruscan language inscriptions (Lemnos Stele)'],
        type: 'tomb'
      }
    ]
  },

  // 182. Cerveteri - City of the Dead
  cerveteri: {
    id: 'cerveteri-necropolis',
    name: 'Cerveteri (Caere)',
    coordinates: [41.999, 12.109],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'necropolis-banditaccia',
        name: 'Necropolis of Banditaccia',
        description: 'City of the dead with tumulus and chamber tombs',
        longDescription: `The Banditaccia Necropolis at Cerveteri (UNESCO World Heritage site, 2004) is the largest ancient necropolis in the Mediterranean (400 hectares), containing thousands of tumulus (mound) tombs (1,000+ tombs excavated, 500 visible) arranged along a "streets of the dead" grid pattern (the "Via degli Inferi," "Street of the Dead") matching the living city's plan. The tombs date from the 7th to 3rd centuries BCE. Key tombs include the "Tomb of the Reliefs" (Tomb of the Reliefs, 4th century BCE), carved to imitate a house with reliefs of pillows, weapons, utensils (cooking pots, cups, jugs), and even pets (a dog, a small horse). The "Tomb of the Greek Vases" (Tomb of the Greek Vases, 6th century BCE) contains imported Attic pottery (black-figure vases, 40 vases). The "Tomb of the Five Chairs" (Tomb of the Five Chairs, 7th century BCE) has stone chairs placed for ancestor cult rituals. Cerveteri (Roman Caere) was a major trading port (the "Caerite" harbor, Pyrgi, 13 km south), controlling the iron trade with Elba (the "iron mines of Elba," 10 km west), the silver trade with Sardinia (the "silver mines of Iglesias"), and the copper trade with Cyprus. The city was Rome's ally (the "Caerite Treaty," 509 BCE, granting Roman citizenship to Caere) but declined after the 3rd century BCE (the "Caerite War," 273 BCE).`,
        imageRegenerated: '/images/sites/cerveteri-regenerated.jpg',
        imageCurrent: '/images/sites/cerveteri-current.jpg',
        scene: 'The City of the Dead',
        visualHighlights: ['Tomb of the Reliefs house-like interior (pillows, weapons)', '"Streets of the dead" urban planning (grid layout)', 'Tumulus mound tombs (c. 50 meters diameter)', 'Tomb of the Greek Vases imports (Attic pottery)', 'Ancestor cult chairs (Tomb of the Five Chairs)'],
        type: 'tomb'
      }
    ]
  },

  // 183. Veii - Temple of Apollo
  veii: {
    id: 'veii-sanctuary',
    name: 'Veii (Veio)',
    coordinates: [42.007, 12.401],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'sanctuary-apollo',
        name: 'Sanctuary of Apollo at Veii (Portonaccio)',
        description: 'Temple of Apollo with famous terracotta statue',
        longDescription: `The Sanctuary of Apollo (Portonaccio Sanctuary, c. 510-500 BCE) at Veii features the "Apollo of Veii" - a life-size painted terracotta statue of Apollo (Etruscan Aplu, 1.8 meters high) by the sculptor Vulca (the only Etruscan artist known by name, also made the cult statue of Jupiter for the Roman Capitoline Temple). The statue was found in 1916 in fragments and reassembled (now in the National Etruscan Museum of Villa Giulia, Rome). The temple's architectural terracottas (the 4th century BCE) included scenes from the "Labors of Herakles" (Hercules) and the dispute between Apollo and Herakles over the Ceryneian Hind (the "Apollo and Herakles" group). The temple plan (three-cella, 18 x 35 meters) influenced later Roman temple design. Veii was the richest Etruscan city (c. 800-400 BCE), Rome's greatest rival until its destruction by Camillus in 396 BCE (the "Siege of Veii," 10-year siege, with the "Battle of Veii"). The temple's cult statue (the "Apollo of Veii") was carried to Rome (as a trophy), and the city's territory was distributed to Roman citizens (the "Ager Veientanus," 396 BCE), marking the first Roman territorial expansion (the "Roman-Etruscan Wars").`,
        imageRegenerated: '/images/sites/veii-regenerated.jpg',
        imageCurrent: '/images/sites/veii-current.jpg',
        scene: 'The Great Etruscan Temple of Apollo',
        visualHighlights: ['Apollo of Veii terracotta statue (1.8 meters high)', 'Herakles labors reliefs (Apollo and Herakles)', 'Three-cella temple plan (18 x 35 meters)', 'Terracotta antefixes (roof decorations)', 'Veii-Portonaccio sanctuary layout (temple, altar, pool)'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  },

  // 184. Populonia - Etruscan Ironworking
  populonia: {
    id: 'populonia',
    name: 'Populonia (Pupluna)',
    coordinates: [42.99, 10.51],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'populonia-necropolis',
        name: 'Populonia',
        description: 'Etruscan ironworking center',
        longDescription: `Populonia (Pupluna, "City of the God Fufluns") was the only Etruscan city on the coast (the "Etruscan Coast," on the Gulf of Baratti), and a major ironworking center (the "Iron Mines of Elba," 10 km west). The city's necropolis (the "Necropolis of Populonia," 7th-3rd centuries BCE) contains tombs of the "Mound of the Bronze" (a tumulus tomb with bronze armor and weapons), the "Mound of the Silver" (a tumulus tomb with silver jewelry), and the "Mound of the Gold" (a tumulus tomb with gold diadems). The city also has a "acropolis" (the "Acropolis of Populonia," with the "Temple of Fufluns," the Etruscan god of wine). The city's ironworking slag (the "Iron Slag of Baratti," 10 meters high, 200 meters long) is visible on the beach. The city was destroyed by the Romans in the 1st century BCE, but its "Ironworks" (the "Forge of Populonia") continued into the Middle Ages.`,
        imageRegenerated: '/images/sites/populonia-regenerated.jpg',
        imageCurrent: '/images/sites/populonia-current.jpg',
        scene: 'The Ironworking City of the Etruscans',
        visualHighlights: ['Iron slag on beach (10 meters high, 200 meters long)', 'Mound of the Bronze (bronze armor, weapons)', 'Mound of the Gold (gold diadems)', 'Temple of Fufluns (Etruscan wine god)', 'Acropolis of Populonia (city walls, towers)'],
        type: 'city'
      }
    ]
  },

  // 185. Vulci - Tumuli of the Etruscan Princes
  vulci: {
    id: 'vulci',
    name: 'Vulci',
    coordinates: [42.45, 11.58],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'vulci-tombs',
        name: 'Vulci',
        description: 'Wealthy Etruscan city with painted tombs',
        longDescription: `Vulci (Velch, "City of the God Voltumna") was one of the 12 cities of the Etruscan League, a wealthy trading center on the Fiora River (the "River of Vulci"), controlling the trade in silver (from Sardinia), copper (from Cyprus), and tin (from Britain). The city's necropolis (the "Necropolis of Vulci," 7th-3rd centuries BCE) contains the "Tomb of the Charontes" (Tomb of the Chariots, with a chariot burial, 2-wheeled war chariot), the "Tomb of the Silver Hands" (Tomb of the Silver Hands, with a silver jewelry hoard, 3 kilograms of silver), and the "Tomb of the Sun" (Tomb of the Sun, with a gold diadem shaped like the sun). The "François Tomb" (Tomb of François, 4th century BCE) has frescoes of Etruscan history (the "Etruscan Liberation," with scenes of the Etruscan hero Mastarna). The site also has a "bridge" (the "Ponte della Badia," a Roman bridge, 1st century BCE).`,
        imageRegenerated: '/images/sites/vulci-regenerated.jpg',
        imageCurrent: '/images/sites/vulci-current.jpg',
        scene: 'The Wealthy City of the Etruscan Princes',
        visualHighlights: ['Tomb of the Charontes (chariot burial)', 'Tomb of the Silver Hands (3 kg silver hoard)', 'François Tomb (Etruscan history paintings)', 'Ponte della Badia (Roman bridge, 1st century BCE)', 'River of Vulci (trade route)'],
        type: 'city'
      }
    ]
  },

  // 186. Orvieto - Etruscan Temple of Belvedere
  orvieto: {
    id: 'orvieto',
    name: 'Orvieto (Volsinii)',
    coordinates: [42.717, 12.1],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'orvieto-temple',
        name: 'Orvieto',
        description: 'Etruscan temple of the god Tinia',
        longDescription: `Orvieto (Volsinii, "City of the God Voltumna") was the political and religious center of the Etruscan League, the meeting place of the 12 cities at the "Fanum Voltumnae" (Sanctuary of Voltumna). The city's "Belvedere Temple" (Temple of Belvedere, 5th century BCE, 20 x 30 meters) was dedicated to Tinia (the Etruscan Jupiter), with a terracotta statue of the "Apollo of Orvieto" (2 meters high). The temple's "altar" (the "Altar of Belvedere," 3 x 3 meters) was found with a "deposit" of a chariot (the "Chariot of Belvedere," 6th century BCE, bronze, 2 meters high). The city also has a "necropolis" (the "Necropolis of Crocifisso del Tufo," 6th-3rd centuries BCE) with "chamber tombs" (rock-cut tombs, 100 tombs) and "cinerary urns" (terracotta urns with inscriptions). Orvieto was destroyed by the Romans in 264 BCE (the "Bellum Volsiniensem"), but the "medieval city" (Orvieto Cathedral, 13th century CE) is built on the Etruscan site.`,
        imageRegenerated: '/images/sites/orvieto-regenerated.jpg',
        imageCurrent: '/images/sites/orvieto-current.jpg',
        scene: 'The Religious Capital of the Etruscans',
        visualHighlights: ['Belvedere Temple (20 x 30 meters, temple of Tinia)', 'Apollo of Orvieto terracotta statue (2 meters high)', 'Altar of Belvedere (3 x 3 meters)', 'Chariot of Belvedere (6th century BCE, bronze)', 'Necropolis of Crocifisso del Tufo (100 chamber tombs)'],
        deity: 'Tinia',
        type: 'temple'
      }
    ]
  },

  // 187. Chiusi - Etruscan Canopic Jars
  chiusi: {
    id: 'chiusi',
    name: 'Chiusi (Clevsin)',
    coordinates: [43.017, 11.95],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'chiusi-necropolis',
        name: 'Chiusi',
        description: 'Etruscan center for canopic jars',
        longDescription: `Chiusi (Clevsin, "The City of the Mountain") was an Etruscan city in the Valdichiana (the "Chiana Valley"), famous for its canopic jars (funerary urns, 7th-5th centuries BCE) with a human head (the head of the deceased) on the lid. The city's necropolis (the "Necropolis of Chiusi," 7th-3rd centuries BCE) contains the "Tomb of the Monkey" (Tomb of the Monkey, 6th century BCE, with a monkey on a rope), the "Tomb of the Bulls" (Tomb of the Bulls, 5th century BCE, with a bull's head), and the "Tomb of the Lion" (Tomb of the Lion, 6th century BCE). The "Clusium Museum" (Museo Etrusco di Chiusi) houses the "Canopic Jar of the Chiusi" (a terracotta urn with a female head, 6th century BCE) and the "Sarcophagus of the Chiusi" (terracotta sarcophagus, 4th century BCE). Chiusi was conquered by the Romans in 295 BCE.`,
        imageRegenerated: '/images/sites/chiusi-regenerated.jpg',
        imageCurrent: '/images/sites/chiusi-current.jpg',
        scene: 'The City of the Canopic Jars',
        visualHighlights: ['Canopic jar (human head on lid)', 'Tomb of the Monkey (monkey on a rope)', 'Tomb of the Bulls (bull\'s head relief)', 'Clusium Museum (Etruscan artifacts)', 'Terracotta sarcophagus (4th century BCE)'],
        type: 'city'
      }
    ]
  },

  // 188. Perugia - Etruscan Arch and Hypogeum
  perugia: {
    id: 'perugia',
    name: 'Perugia (Perusia)',
    coordinates: [43.117, 12.383],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'perugia-hypogeum',
        name: 'Perugia',
        description: 'Etruscan city with monumental gate',
        longDescription: `Perugia (Perusia, "The City of the Men"), was a major Etruscan city in Umbria, known for the "Etruscan Arch" (Arco Etrusco, 3rd century BCE, 10 meters high), a monumental city gate with a frieze of horses (the "Perugia Horses"). The city's "Hypogeum of the Volumnii" (Hypogeum of the Volumnii, 3rd century BCE) is an Etruscan chamber tomb (cut into tufa, 5 rooms) with 10 terracotta urns (the "Volumnii Urns," inscribed with family names). The site also has the "Well of the Etruscans" ( Pozzo Etrusco, 3rd century BCE, 15 meters deep) and the "Etruscan Wall" (the "Murus Etruscus," 3 km long, 4 meters high). Perugia was conquered by the Romans in 310 BCE.`,
        imageRegenerated: '/images/sites/perugia-regenerated.jpg',
        imageCurrent: '/images/sites/perugia-current.jpg',
        scene: 'The Etruscan City of the Volumnii',
        visualHighlights: ['Etruscan Arch (10 meters high, Perugia Horses frieze)', 'Hypogeum of the Volumnii (chamber tomb, 5 rooms)', 'Volumnii Urns (10 terracotta urns)', 'Well of the Etruscans (15 meters deep)', 'Etruscan Wall (3 km long, 4 meters high)'],
        type: 'city'
      }
    ]
  },

  // 189. Vetulonia - Etruscan Gold
  vetulonia: {
    id: 'vetulonia',
    name: 'Vetulonia',
    coordinates: [42.85, 10.98],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'vetulonia-tombs',
        name: 'Vetulonia',
        description: 'Early Etruscan city with rich gold jewelry',
        longDescription: `Vetulonia (Vetluna, "The City of the Wise Men") was an early Etruscan city (9th-6th centuries BCE) in the Maremma (the "Maremma of Vetulonia"), famous for its rich gold jewelry. The city's necropolis (the "Necropolis of Vetulonia," 9th-6th centuries BCE) contains the "Tomb of the Golden Jewelry" (Tomb of the Golden Jewelry, 7th century BCE, with a gold diadem, gold earrings, gold necklaces, gold bracelets), the "Tomb of the Silver Hands" (Tomb of the Silver Hands, 7th century BCE, with a silver hand, 10 cm long), and the "Tomb of the Bronze Chariot" (Tomb of the Bronze Chariot, 7th century BCE). The "Vetulonia Museum" (Museo Archeologico di Vetulonia) houses the "Gold Jewelry of Vetulonia" (the "Vetulonia Treasure," 1,000 gold objects). Vetulonia declined after the 6th century BCE.`,
        imageRegenerated: '/images/sites/vetulonia-regenerated.jpg',
        imageCurrent: '/images/sites/vetulonia-current.jpg',
        scene: 'The Early Etruscan Goldworking Center',
        visualHighlights: ['Tomb of the Golden Jewelry (gold diadem, earrings, necklaces)', 'Vetulonia Treasure (1,000 gold objects)', 'Tomb of the Silver Hands (silver hand, 10 cm long)', 'Tomb of the Bronze Chariot (7th century BCE)', 'Necropolis of Vetulonia (early Etruscan)'],
        type: 'city'
      }
    ]
  },

  // 190. Pyrgi - Etruscan Harbor
  pyrgi: {
    id: 'pyrgi',
    name: 'Pyrgi (Santa Severa)',
    coordinates: [42.02, 11.97],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'pyrgi-harbor',
        name: 'Pyrgi',
        description: 'Etruscan harbor with golden tablets',
        longDescription: `Pyrgi (the "Harbor of Caere") was the port city of Cerveteri (Caere), 13 km west, on the Tyrrhenian Sea. The site is famous for the "Pyrgi Tablets" (the Pyrgi Gold Tablets, c. 500 BCE), three gold tablets (two in Etruscan, one in Phoenician) with a dedication to the goddess Uni (the Etruscan Juno) by King Thefarie Velianas (the king of Caere). The tablets are the longest Etruscan text (16 lines) and provide the key to the Etruscan language. The site also has a "temple" (the "Temple of Pyrgi," 4th century BCE, 20 x 30 meters, with a terracotta statue of the "Juno of Pyrgi"), a "harbor" (the "Port of Pyrgi," with a breakwater, 100 meters long), and a "medieval castle" (the "Castle of Santa Severa," 14th century CE). The golden tablets are now in the Vatican Museum (Museo Gregoriano Etrusco).`,
        imageRegenerated: '/images/sites/pyrgi-regenerated.jpg',
        imageCurrent: '/images/sites/pyrgi-current.jpg',
        scene: 'The Harbor of the Etruscan Kings',
        visualHighlights: ['Pyrgi Gold Tablets (3 gold tablets, Etruscan-Phoenician)', 'Temple of Pyrgi (20 x 30 meters, terracotta statue)', 'Port of Pyrgi (breakwater, 100 meters long)', 'King Thefarie Velianas dedication (Etruscan king)', 'Castle of Santa Severa (14th century CE)'],
        deity: 'Uni',
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 18: ANCIENT INDIA (191-200) ==========
export const indiaSites: Record<string, Site> = {
  // 191. Mohenjo-Daro - Indus Valley Metropolis
  mohenjoDaro: {
    id: 'mohenjo-daro',
    name: 'Mohenjo-Daro',
    coordinates: [27.329, 68.136],
    region: 'Indus Valley (Pakistan)',
    locations: [
      {
        id: 'mohenjo-daro-ruins',
        name: 'Mohenjo-Daro',
        description: 'Largest city of the Indus Valley Civilization',
        longDescription: `Mohenjo-Daro (Mound of the Dead, c. 2600-1900 BCE) was the largest city of the Indus Valley Civilization (the "Harappan Civilization"), covering 300 hectares with an estimated population of 40,000 people. The city had a grid plan (the "Grid Plan of Mohenjo-Daro," 12-meter-wide streets), a drainage system (the "Great Drain," 2 meters deep, 1 meter wide, with clay pipes), a public bath (the "Great Bath," 12 x 7 meters, 2.4 meters deep, with a brick pool, waterproofed with gypsum), and a granary (the "Great Granary," 50 x 25 meters, with wooden grain bins). The city's "acropolis" (the "Citadel of Mohenjo-Daro," 12 meters high) contained the "Great Hall" (the "Great Hall of Mohenjo-Daro," 25 x 20 meters) and the "College" (the "College of Mohenjo-Daro," a building with 3 rooms). The city's artifacts include the "Dancing Girl" (a bronze statue of a nude girl, 10 cm high, 4,500 years old), the "Priest-King" (a stone statue of a bearded man, 17 cm high), and the "Pashupati Seal" (a seal with a figure seated in a yogic posture, surrounded by animals, the "Proto-Shiva"). Mohenjo-Daro was abandoned c. 1900 BCE (possibly due to the Indus River changing course).`,
        imageRegenerated: '/images/sites/mohenjo-daro-regenerated.jpg',
        imageCurrent: '/images/sites/mohenjo-daro-current.jpg',
        scene: 'The Great City of the Indus Valley',
        visualHighlights: ['Great Bath (12 x 7 meters, brick pool)', 'Grid plan (12-meter-wide streets, clay pipes)', 'Dancing Girl bronze statue (10 cm high)', 'Priest-King stone statue (17 cm high)', 'Great Granary (50 x 25 meters, wooden bins)'],
        type: 'city'
      }
    ]
  },

  // 192. Harappa - Type Site of the Indus Civilization
  harappa: {
    id: 'harappa',
    name: 'Harappa',
    coordinates: [30.629, 72.865],
    region: 'Indus Valley (Pakistan)',
    locations: [
      {
        id: 'harappa-ruins',
        name: 'Harappa',
        description: 'Type site of the Indus Valley Civilization',
        longDescription: `Harappa (c. 2600-1900 BCE) is the type site of the Indus Valley Civilization (the "Harappan Civilization"), discovered by Charles Masson in 1826 and excavated by Alexander Cunningham (1853, 1875) and John Marshall (1920s). The city (150 hectares) had a grid plan (the "Harappa Grid Plan"), a drainage system (the "Harappa Drains"), and a granary (the "Harappa Granary," 25 x 20 meters). The city's artifacts include the "Harappa Seals" (over 1,000 seals with Indus script, undeciphered), the "Harappa Statuettes" (terracotta figurines of mothers, "Mother Goddess" figurines), and the "Harappa Beads" (carnelian beads, 2 mm diameter). The city's cemetery (the "Cemetery H," 1900-1300 BCE) contains "spectacle urns" (urns with painted eyes, the "Harappa Urns"). Harappa was abandoned c. 1900 BCE.`,
        imageRegenerated: '/images/sites/harappa-regenerated.jpg',
        imageCurrent: '/images/sites/harappa-current.jpg',
        scene: 'The Type Site of the Indus Civilization',
        visualHighlights: ['Harappa Seals (1,000 seals, undeciphered script)', 'Harappa Granary (25 x 20 meters)', 'Cemetery H (spectacle urns, 1900 BCE)', 'Mother Goddess terracotta figurines', 'Carnelian beads (2 mm diameter)'],
        type: 'city'
      }
    ]
  },

  // 193. Dholavira - Harappan Water Management
  dholavira: {
    id: 'dholavira',
    name: 'Dholavira',
    coordinates: [23.886, 70.217],
    region: 'Indus Valley (India)',
    locations: [
      {
        id: 'dholavira-ruins',
        name: 'Dholavira',
        description: 'Harappan city with advanced water management',
        longDescription: `Dholavira (c. 2650-1450 BCE) is a Harappan city on the Khadir Bet island in the Rann of Kutch (the "Great Rann of Kutch"), with advanced water management (the "Dholavira Water System," 16 reservoirs, 7 steps, 1,000 meters of channels), a stadium (the "Dholavira Stadium," 283 x 47 meters, 2 meters high, 4 entrances), and a signboard (the "Dholavira Signboard," 3 meters long, 1 meter high, with 10 Indus script signs). The city (100 hectares) had a grid plan (the "Dholavira Grid"), a citadel (the "Dholavira Citadel," 12 meters high), a middle town (the "Dholavira Middle Town"), and a lower town (the "Dholavira Lower Town"). The city's artifacts include the "Dholavira Beads" (carnelian, steatite, lapis lazuli), the "Dholavira Seals" (50 seals, undeciphered script), and the "Dholavira Pottery" (black-on-red ware, geometric designs). Dholavira was abandoned c. 1450 BCE (possibly due to a drought).`,
        imageRegenerated: '/images/sites/dholavira-regenerated.jpg',
        imageCurrent: '/images/sites/dholavira-current.jpg',
        scene: 'The Harappan Water Engineers',
        visualHighlights: ['16 reservoirs (water storage, rainwater harvesting)', 'Dholavira Stadium (283 x 47 meters)', 'Dholavira Signboard (3-meter inscription, 10 signs)', 'Citadel (12 meters high)', 'Black-on-red pottery (geometric designs)'],
        type: 'city'
      }
    ]
  },

  // 194. Lothal - Harappan Dockyard
  lothal: {
    id: 'lothal',
    name: 'Lothal',
    coordinates: [22.521, 72.25],
    region: 'Indus Valley (India)',
    locations: [
      {
        id: 'lothal-dockyard',
        name: 'Lothal',
        description: 'Harappan port city with the world\'s earliest dockyard',
        longDescription: `Lothal (c. 2400-1900 BCE) is a Harappan port city on the Gulf of Khambhat (the "Lothal Dockyard"), with the world's earliest known dockyard (the "Lothal Dock," 214 x 36 meters, 4.5 meters deep, with a lock gate, spillway, and 2.5-meter-high wall). The dockyard was connected to the Sabarmati River by a 10-meter-wide, 1.5-meter-deep channel. The city (7 hectares) had a grid plan (the "Lothal Grid"), a warehouse (the "Lothal Warehouse," 8 x 10 meters), and a bazaar (the "Lothal Bazaar," 120 meters long). The city's artifacts include the "Lothal Seals" (150 seals, undeciphered script), the "Lothal Beads" (carnelian beads, 1 mm diameter), the "Lothal Ivory" (ivory dice, ivory figures), and the "Lothal Pottery" (black-on-red ware, animal motifs). Lothal was abandoned c. 1900 BCE (due to a flood).`,
        imageRegenerated: '/images/sites/lothal-regenerated.jpg',
        imageCurrent: '/images/sites/lothal-current.jpg',
        scene: 'The World\'s Earliest Dockyard',
        visualHighlights: ['Lothal Dock (214 x 36 meters, lock gate)', 'Warehouse (8 x 10 meters)', 'Bazaar (120 meters long)', 'Ivory dice (gaming pieces)', 'Black-on-red pottery (animal motifs)'],
        type: 'city'
      }
    ]
  },

  // 195. Pataliputra - Capital of the Mauryan Empire
  pataliputra: {
    id: 'pataliputra',
    name: 'Pataliputra (Patna)',
    coordinates: [25.6, 85.12],
    region: 'Northern India (Bihar)',
    locations: [
      {
        id: 'pataliputra-ruins',
        name: 'Pataliputra',
        description: 'Capital of the Mauryan and Gupta empires',
        longDescription: `Pataliputra (the "City of Flowers," modern Patna) was the capital of the Mauryan Empire (c. 322-185 BCE) and the Gupta Empire (c. 320-550 CE), founded by Ajatashatru (5th century BCE) and expanded by Chandragupta Maurya (321 BCE). The city (25 km long, 4 km wide) had a wooden palisade (the "Pataliputra Wall," 5 meters high, 1 meter thick), a moat (the "Pataliputra Moat," 200 meters wide, 15 meters deep), and 64 gates (the "Pataliputra Gates"). The city's palace (the "Pataliputra Palace") had 80 pillars (the "Pataliputra Pillars," 10 meters high), a throne (the "Pataliputra Throne," black polished stone), and a garden (the "Pataliputra Garden"). The city's "Mauryan Hall" (the "Pataliputra Hall," 80 x 80 meters) had 80 pillars. The city's artifacts include the "Pataliputra Capital" (a stone capital, 1.5 meters high, 1 meter wide, with a lotus motif), the "Pataliputra Seal" (a terracotta seal, with the Mauryan symbol, the "Chakra"), and the "Pataliputra Coins" (silver coins, with the Mauryan symbol). Pataliputra declined after the Gupta Empire (c. 550 CE).`,
        imageRegenerated: '/images/sites/pataliputra-regenerated.jpg',
        imageCurrent: '/images/sites/pataliputra-current.jpg',
        scene: 'The Imperial Capital of the Mauryans',
        visualHighlights: ['Wooden palisade (5 meters high, 1 meter thick)', 'Pataliputra Palace (80 pillars, 10 meters high)', 'Pataliputra Capital (stone capital, lotus motif)', 'Pataliputra Seal (Mauryan chakra symbol)', 'Silver coins (Mauryan symbol)'],
        type: 'city'
      }
    ]
  },

  // 196. Sanchi - Buddhist Stupa
  sanchi: {
    id: 'sanchi',
    name: 'Sanchi Stupa',
    coordinates: [23.479, 77.739],
    region: 'Northern India (Madhya Pradesh)',
    locations: [
      {
        id: 'sanchi-stupa',
        name: 'Sanchi Stupa',
        description: 'The best-preserved Buddhist stupa in India',
        longDescription: `Sanchi Stupa (the "Great Stupa," c. 3rd century BCE - 1st century CE) is the best-preserved Buddhist stupa in India, built by Emperor Ashoka (the "Ashoka Stupa," 3rd century BCE) and enlarged by the Shunga dynasty (2nd century BCE) and the Satavahana dynasty (1st century BCE - 1st century CE). The stupa (36 meters diameter, 16 meters high) has a stone railing (the "Sanchi Railing," 3 meters high, 2.5 meters wide, with 1,000 pillars), four gateways (the "Sanchi Toranas," 10 meters high, 5 meters wide), and a "yasti" (a stone pillar, 6 meters high, on top). The gateways have reliefs (the "Sanchi Reliefs," 2,000 square meters) depicting scenes from the Buddha's life (the "Birth of Buddha," the "Great Departure," the "Enlightenment," the "First Sermon," the "Parinirvana"), Jataka tales (the "Vessantara Jataka," the "Sibi Jataka"), and the Ashoka pillars (the "Sanchi Ashoka Pillar," 15 meters high, with the "Four Lions" capital). Sanchi was abandoned after the 12th century CE and rediscovered in 1818.`,
        imageRegenerated: '/images/sites/sanchi-regenerated.jpg',
        imageCurrent: '/images/sites/sanchi-current.jpg',
        scene: 'The Great Stupa of Sanchi',
        visualHighlights: ['Great Stupa (36 meters diameter, 16 meters high)', 'Sanchi Toranas (4 gateways, 10 meters high, reliefs)', 'Sanchi Ashoka Pillar (15 meters high, Four Lions)', 'Sanchi Reliefs (2,000 square meters, Buddha life)', 'Stone railing (1,000 pillars)'],
        deity: 'Buddha',
        type: 'temple'
      }
    ]
  },

  // 197. Bodh Gaya - Buddha's Enlightenment
  bodhGaya: {
    id: 'bodh-gaya',
    name: 'Bodh Gaya',
    coordinates: [24.695, 84.991],
    region: 'Northern India (Bihar)',
    locations: [
      {
        id: 'mahabodhi-temple',
        name: 'Mahabodhi Temple',
        description: 'Where Buddha attained enlightenment',
        longDescription: `Bodh Gaya is the holiest site in Buddhism (the "Bodh Gaya Temple," 2nd century CE), where Siddhartha Gautama (the "Buddha") attained enlightenment under the Bodhi tree (the "Bodhi Tree," Ficus religiosa, 5th century BCE). The Mahabodhi Temple (the "Mahabodhi Temple," 50 meters high, 30 meters wide) has a pyramidal tower (the "Mahabodhi Tower"), a golden Buddha statue (the "Buddha Statue," 1.5 meters high, sitting in "bhumisparsha mudra," earth-touching gesture), and a stone railing (the "Bodh Gaya Railing," 5 meters high, 2.5 meters wide, with 1,000 pillars). The Bodhi tree (the "Bodhi Tree," a descendant of the original, 3rd century BCE) is surrounded by a stone platform (the "Vajrasana," the "Diamond Throne," 2.5 x 2.5 meters, 1 meter high). The site also has a lotus pond (the "Lotus Pond," 20 x 20 meters), a stupa (the "Animesha Stupa," where Buddha stood gazing at the Bodhi tree), and a museum (the "Bodh Gaya Museum," with Buddhist sculptures). The site was abandoned after the 12th century CE and restored in the 19th century.`,
        imageRegenerated: '/images/sites/bodh-gaya-regenerated.jpg',
        imageCurrent: '/images/sites/bodh-gaya-current.jpg',
        scene: 'The Site of the Buddha\'s Enlightenment',
        visualHighlights: ['Mahabodhi Temple (50 meters high, pyramidal tower)', 'Bodhi Tree (descendant of original, Ficus religiosa)', 'Vajrasana (Diamond Throne, 2.5 x 2.5 meters)', 'Golden Buddha statue (1.5 meters high, earth-touching)', 'Stone railing (1,000 pillars)'],
        deity: 'Buddha',
        type: 'temple'
      }
    ]
  },

  // 198. Ajanta Caves - Buddhist Rock-Cut Temples
  ajanta: {
    id: 'ajanta-caves',
    name: 'Ajanta Caves',
    coordinates: [20.552, 75.703],
    region: 'Western India (Maharashtra)',
    locations: [
      {
        id: 'ajanta-caves',
        name: 'Ajanta Caves',
        description: 'Buddhist rock-cut caves with exquisite paintings',
        longDescription: `The Ajanta Caves (c. 2nd century BCE - 6th century CE) are 30 rock-cut Buddhist caves (the "Ajanta Caves," 30 caves, 2 km long) in the Waghora River gorge, famous for their paintings (the "Ajanta Paintings," 1,000 square meters) and sculptures (the "Ajanta Sculptures," 1,500 figures). The caves are divided into Chaityas (prayer halls, 4 caves) and Viharas (monasteries, 26 caves). Cave 1 has the "Bodhisattva Padmapani" (a painting of a Bodhisattva, 2 meters high, 1 meter wide) and the "Bodhisattva Vajrapani" (a painting of a Bodhisattva, 2 meters high). Cave 2 has the "Lotus Ceiling" (a painted ceiling, 10 x 10 meters, 200 lotus flowers). Cave 9 has a Chaitya (a prayer hall, 12 x 8 meters, with a stupa, 5 meters high, 2 meters wide). Cave 10 has the "Jataka Tales" (paintings of the Buddha's previous lives, 100 square meters). The caves were abandoned after the 6th century CE and rediscovered in 1819.`,
        imageRegenerated: '/images/sites/ajanta-regenerated.jpg',
        imageCurrent: '/images/sites/ajanta-current.jpg',
        scene: 'The Rock-Cut Buddhist Temples of Ajanta',
        visualHighlights: ['30 rock-cut caves (2 km long, Chaitya, Vihara)', 'Ajanta Paintings (1,000 square meters, frescoes)', 'Bodhisattva Padmapani (2 meters high painting)', 'Cave 2 Lotus Ceiling (200 lotus flowers)', 'Cave 9 Chaitya (prayer hall, stupa, 5 meters high)'],
        type: 'temple'
      }
    ]
  },

  // 199. Ellora Caves - Hindu, Buddhist, Jain Temples
  ellora: {
    id: 'ellora-caves',
    name: 'Ellora Caves',
    coordinates: [20.025, 75.166],
    region: 'Western India (Maharashtra)',
    locations: [
      {
        id: 'kailasa-temple',
        name: 'Kailasa Temple (Ellora Cave 16)',
        description: 'The largest monolithic rock-cut temple in the world',
        longDescription: `The Kailasa Temple (Ellora Cave 16, c. 8th century CE) is the largest monolithic rock-cut temple in the world (the "Kailasa Temple," 80 meters long, 40 meters wide, 30 meters high), carved from a single piece of basalt (2 million tons of rock). The temple was built by the Rashtrakuta king Krishna I (c. 757-783 CE) as a model of Mount Kailash (the mountain abode of Shiva). The temple has a courtyard (the "Kailasa Courtyard," 80 x 40 meters), a Nandi mandapa (a shrine to the bull Nandi, 10 x 10 meters), a shikhara (a tower, 30 meters high), 16 pillars (the "Kailasa Pillars"), and 1,000 reliefs (the "Kailasa Reliefs," 1,000 square meters). The reliefs depict scenes from the Ramayana (the "Battle of Lanka," 5 meters high), the Mahabharata (the "Kurukshetra War," 5 meters high), and the Bhagavata Purana (the "Dance of Shiva," 1 meter high), and statues of Hindu gods (Shiva, Vishnu, Brahma, Parvati, Lakshmi, Saraswati). The temple is part of the Ellora Caves (34 caves), which include Buddhist caves (Caves 1-12), Hindu caves (Caves 13-29), and Jain caves (Caves 30-34).`,
        imageRegenerated: '/images/sites/ellora-regenerated.jpg',
        imageCurrent: '/images/sites/ellora-current.jpg',
        scene: 'The Monolithic Temple of Kailasa',
        visualHighlights: ['Kailasa Temple (80 x 40 meters, 30 meters high, monolithic)', 'Nandi mandapa (bull shrine, 10 x 10 meters)', 'Shikhara tower (30 meters high)', 'Battle of Lanka relief (5 meters high)', '1,000 reliefs (Ramayana, Mahabharata, Purana)'],
        deity: 'Shiva',
        type: 'temple'
      }
    ]
  },

  // 200. Nalanda - Ancient Buddhist University
  nalanda: {
    id: 'nalanda',
    name: 'Nalanda University',
    coordinates: [25.136, 85.443],
    region: 'Northern India (Bihar)',
    locations: [
      {
        id: 'nalanda-ruins',
        name: 'Nalanda',
        description: 'The oldest university in the world',
        longDescription: `Nalanda University (c. 5th-12th century CE) was the oldest university in the world (the "Nalanda University," UNESCO World Heritage site, 2016), founded by the Gupta Empire (c. 5th century CE) and patronized by the Pala Empire (c. 8th-12th century CE). The university had 10,000 students (the "Nalanda Students," from China, Korea, Japan, Tibet, Sri Lanka, Southeast Asia) and 2,000 teachers (the "Nalanda Teachers," including the famous Buddhist scholar Nagarjuna, Aryadeva, Dharmapala, Shantarakshita, Padmasambhava). The university had 3 libraries (the "Ratnasagara," the "Ocean of Gems," 9-story building; the "Ratnodadhi," the "Sea of Gems," 7-story building; and the "Ratnaranjaka," the "Gem-studded," 5-story building), 10 temples (the "Nalanda Temples," 10 temples), and 1,000 classrooms (the "Nalanda Classrooms," 1,000 rooms). The university's curriculum included Buddhist studies (the "Mahayana" and "Vajrayana" texts), Hindu studies (the "Vedas," the "Upanishads," the "Puranas"), logic (the "Nalanda Logic"), grammar (the "Nalanda Grammar"), medicine (the "Nalanda Medicine," the "Ayurveda"), and astronomy (the "Nalanda Astronomy"). The university was destroyed by the Turkic invader Bakhtiyar Khalji in 1193 CE (the "Nalanda Massacre," 10,000 Buddhist monks burned alive).`,
        imageRegenerated: '/images/sites/nalanda-regenerated.jpg',
        imageCurrent: '/images/sites/nalanda-current.jpg',
        scene: 'The Oldest University in the World',
        visualHighlights: ['3 libraries (9-story, 7-story, 5-story)', '10,000 students (2,000 teachers)', 'Nalanda Temples (10 temples)', '1,000 classrooms (1,000 rooms)', 'Nalanda Massacre (1193 CE, 10,000 monks)'],
        type: 'city'
      }
    ]
  }
};
// ========== SECTION 19: ANCIENT CHINA (201-210) ==========
export const chinaSites: Record<string, Site> = {
  // 201. Yinxu - Last Capital of the Shang Dynasty
  yinxu: {
    id: 'yinxu',
    name: 'Yinxu (Anyang)',
    coordinates: [36.116, 114.316],
    region: 'Northern China (Henan)',
    locations: [
      {
        id: 'yin-xu-ruins',
        name: 'Yinxu',
        description: 'Last capital of the Shang Dynasty, site of oracle bones',
        longDescription: `Yinxu (c. 1300-1046 BCE) was the last capital of the Shang Dynasty (the "Shang capital," 255 years, 12 kings), located near the modern city of Anyang. The site (30 square kilometers) contains the "Royal Palace" (the "Shang Palace," 10,000 square meters, with 50 foundation platforms), the "Royal Cemetery" (the "Shang Tombs," 10 royal tombs, 1,000 burial pits, 2,000 human sacrifices, 10,000 bronze vessels), and the "Oracle Bone Pit" (the "Shang Oracle Bone Pit," 10,000 oracle bones, 2,000 inscriptions). The oracle bones (the "Shang Oracle Bones," 3,000 inscriptions, 1,000 characters) are the earliest evidence of Chinese writing (the "Shang script," ancestor of modern Chinese characters). The "Tomb of Lady Fu Hao" (the "Fu Hao Tomb," c. 1200 BCE) is the only Shang royal tomb found intact (1,600 objects, 200 bronze vessels, 600 jade objects, 200 bone objects, 700 shell objects). Yinxu is a UNESCO World Heritage site (2006).`,
        imageRegenerated: '/images/sites/yinxu-regenerated.jpg',
        imageCurrent: '/images/sites/yinxu-current.jpg',
        scene: 'The Last Capital of the Shang Dynasty',
        visualHighlights: ['Royal Palace (50 foundation platforms, 10,000 sq m)', 'Royal Cemetery (10 royal tombs, 2,000 human sacrifices)', 'Oracle Bone Pit (10,000 oracle bones, 3,000 inscriptions)', 'Tomb of Lady Fu Hao (intact, 1,600 objects)', 'Shang bronze vessels (200 bronze vessels)'],
        type: 'city'
      }
    ]
  },

  // 202. Terracotta Army - Tomb of Qin Shi Huang
  terracottaArmy: {
    id: 'terracotta-army',
    name: 'Terracotta Army (Xi\'an)',
    coordinates: [34.385, 109.273],
    region: 'Northern China (Shaanxi)',
    locations: [
      {
        id: 'qin-shi-huang-mausoleum',
        name: 'Mausoleum of Qin Shi Huang',
        description: 'Tomb of the first emperor of China',
        longDescription: `The Mausoleum of Qin Shi Huang (c. 246-208 BCE) is the tomb of the first emperor of China (the "First Emperor," Qin Shi Huang, 259-210 BCE), located near the modern city of Xi'an. The tomb (the "Qin Mausoleum," 375 x 405 meters, 50 meters high) is surrounded by the Terracotta Army (the "Terracotta Warriors," 8,000 life-size clay soldiers, 600 horses, 130 chariots, 40,000 bronze weapons), discovered in 1974 by farmers digging a well. The terracotta army is arranged in battle formation: "Pit 1" (6,000 warriors, 11 corridors, 230 meters long, 62 meters wide), "Pit 2" (1,300 warriors, cavalry, chariots, archers, 40 meters wide, 60 meters long), "Pit 3" (68 warriors, the "command post," 20 meters wide, 30 meters long), and "Pit 4" (empty pit, 70 meters wide, 100 meters long). The tomb itself has not been excavated (due to the description by Sima Qian of "rivers of mercury" and "crossbows set to fire automatically"), but mercury levels in the soil are 100 times higher than normal. The site is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/terracotta-army-regenerated.jpg',
        imageCurrent: '/images/sites/terracotta-army-current.jpg',
        scene: 'The Terracotta Army of the First Emperor',
        visualHighlights: ['8,000 life-size terracotta warriors (Pit 1: 6,000)', 'Pit 2 (1,300 warriors, cavalry, chariots, archers)', 'Pit 3 (68 warriors, command post)', '40,000 bronze weapons (swords, spears, crossbows)', 'Mercury levels (100x normal, unexcavated tomb)'],
        type: 'tomb'
      }
    ]
  },

  // 203. Great Wall of China - Ming Dynasty
  greatWall: {
    id: 'great-wall',
    name: 'Great Wall of China',
    coordinates: [40.431, 116.57],
    region: 'Northern China (Beijing)',
    locations: [
      {
        id: 'mutianyu-great-wall',
        name: 'Great Wall of China (Mutianyu)',
        description: 'Ming Dynasty fortification system',
        longDescription: `The Great Wall of China (the "Great Wall," 21,196 km long) is a series of fortifications built by the Ming Dynasty (1368-1644 CE) to protect against Mongol invasions, using an earlier Qin Dynasty wall (the "First Wall," 221-206 BCE, 5,000 km long) and Han Dynasty wall (the "Han Wall," 206 BCE-220 CE, 10,000 km long). The Mutianyu section (the "Mutianyu Great Wall," 2.5 km long, 20 watchtowers, 10 meters high, 5 meters wide) is the best-preserved section near Beijing (70 km north). The wall has watchtowers (the "Mutianyu Watchtowers," 20 towers, 15 meters high), battlements (the "Mutianyu Battlements," 2 meters high, 1 meter wide, with 2,000 crenels), and a "gate" (the "Mutianyu Gate," 5 meters wide, 4 meters high, with a "drawbridge"). The wall was built from stone (the "Mutianyu Stone," granite, 1,000 kg per block), brick (the "Mutianyu Brick," 10 million bricks), and earth (the "Mutianyu Earth," 1,000 cubic meters). The site is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/great-wall-regenerated.jpg',
        imageCurrent: '/images/sites/great-wall-current.jpg',
        scene: 'The Great Wall of the Ming Dynasty',
        visualHighlights: ['21,196 km long (Mutianyu section 2.5 km)', '20 watchtowers (15 meters high, 3 kilometers apart)', 'Granite blocks (1,000 kg per block)', '10 million bricks (Mutianyu section)', 'Drawbridge gate (5 meters wide, 4 meters high)'],
        type: 'monument'
      }
    ]
  },

  // 204. Forbidden City - Ming and Qing Palaces
  forbiddenCity: {
    id: 'forbidden-city',
    name: 'Forbidden City (Beijing)',
    coordinates: [39.916, 116.397],
    region: 'Northern China (Beijing)',
    locations: [
      {
        id: 'forbidden-city-palace',
        name: 'Forbidden City',
        description: 'Chinese imperial palace for 500 years',
        longDescription: `The Forbidden City (the "Forbidden City," 720,000 square meters, 980 buildings, 9,999 rooms) was the Chinese imperial palace for 500 years (1420-1912 CE), built by the Ming Dynasty (the "Ming Palace," 1420-1644 CE) and used by the Qing Dynasty (the "Qing Palace," 1644-1912 CE). The palace has a "south gate" (the "Meridian Gate," 40 meters high, 5 arches, 2,500 square meters), a "north gate" (the "Gate of Divine Might," 30 meters high, 3 arches, 1,500 square meters), a "east gate" (the "East Glorious Gate," 20 meters high, 1 arch, 1,000 square meters), and a "west gate" (the "West Glorious Gate," 20 meters high, 1 arch, 1,000 square meters). The palace has the "Hall of Supreme Harmony" (the "Hall of Supreme Harmony," 35 meters high, 2,377 square meters, 72 pillars, the "dragon throne"), the "Hall of Central Harmony" (the "Hall of Central Harmony," 20 meters high, 500 square meters, for preparation), and the "Hall of Preserving Harmony" (the "Hall of Preserving Harmony," 25 meters high, 1,200 square meters, for banquets). The "Imperial Garden" (the "Imperial Garden," 12,000 square meters, 100 trees, 30 pavilions, 20 rockeries) is behind the palace. The Forbidden City is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/forbidden-city-regenerated.jpg',
        imageCurrent: '/images/sites/forbidden-city-current.jpg',
        scene: 'The Imperial Palace of the Ming and Qing',
        visualHighlights: ['980 buildings (720,000 square meters, 9,999 rooms)', 'Hall of Supreme Harmony (35 meters high, dragon throne)', 'Meridian Gate (40 meters high, 5 arches)', 'Imperial Garden (12,000 square meters, 100 trees)', '72 pillars (Hall of Supreme Harmony)'],
        type: 'palace'
      }
    ]
  },

  // 205. Longmen Grottoes - Buddhist Rock-Cut Caves
  longmenGrottoes: {
    id: 'longmen-grottoes',
    name: 'Longmen Grottoes (Luoyang)',
    coordinates: [34.55, 112.47],
    region: 'Northern China (Henan)',
    locations: [
      {
        id: 'longmen-caves',
        name: 'Longmen Grottoes',
        description: 'Buddhist rock-cut caves with over 100,000 statues',
        longDescription: `The Longmen Grottoes (493-1127 CE) are a series of Buddhist rock-cut caves (the "Longmen Caves," 2,345 caves, 1,300 niches, 110,000 statues, 2,800 inscriptions) on the Yi River (the "Yi River Caves," 1 km long, 200 meters high, 100 meters wide). The caves were carved during the Northern Wei Dynasty (493-534 CE, the "Northern Wei Caves"), the Tang Dynasty (618-907 CE, the "Tang Caves"), and the Song Dynasty (960-1127 CE, the "Song Caves"). The "Fengxian Temple" (the "Fengxian Temple," Tang Dynasty, 672-675 CE) has the "Vairocana Buddha" (the "Vairocana Buddha," 17 meters high, 8 meters wide, 5 meters deep, with a 1.5-meter-high halo) and 9 other large statues (the "Fengxian Temple Group," 9 statues: Vairocana Buddha, 2 bodhisattvas, 2 disciples, 2 heavenly kings, 2 guardian warriors). The "Binyang Cave" (the "Binyang Cave," Northern Wei, 500-523 CE) has the "Binyang Buddha" (the "Binyang Buddha," 8 meters high, 3 meters wide) and 1,000 small buddhas (the "1000 Buddha frieze"). The site is a UNESCO World Heritage site (2000).`,
        imageRegenerated: '/images/sites/longmen-regenerated.jpg',
        imageCurrent: '/images/sites/longmen-current.jpg',
        scene: 'The Buddhist Caves of Longmen',
        visualHighlights: ['2,345 caves (110,000 statues, 1 km long)', 'Vairocana Buddha (17 meters high, Fengxian Temple)', 'Fengxian Temple Group (9 statues, Vairocana, bodhisattvas)', 'Binyang Cave (Binyang Buddha, 8 meters high)', 'Yi River setting (1 km long, 200 meters high)'],
        deity: 'Buddha',
        type: 'temple'
      }
    ]
  },

  // 206. Mogao Caves - Thousand Buddha Grottoes
  mogaoCaves: {
    id: 'mogao-caves',
    name: 'Mogao Caves (Dunhuang)',
    coordinates: [40.041, 94.803],
    region: 'Western China (Gansu)',
    locations: [
      {
        id: 'mogao-grottoes',
        name: 'Mogao Caves',
        description: 'Largest Buddhist cave temple complex',
        longDescription: `The Mogao Caves (366-1368 CE) are a series of Buddhist rock-cut caves (the "Mogao Caves," 735 caves, 500,000 square meters of frescoes, 2,000 statues, 50,000 manuscripts) on the Silk Road (the "Silk Road Caves," 25 km southeast of Dunhuang, in the Hexi Corridor). The caves were funded by donors (the "Mogao Donors," monks, merchants, officials, generals) and carved from the "Mingsha Mountain" (the "Mingsha Mountain," "Echoing Sand Mountain"). The "Library Cave" (Cave 17, c. 1000 CE) contained 50,000 manuscripts (the "Dunhuang Manuscripts," Buddhist texts, Daoist texts, Nestorian Christian texts, Manichaean texts, in 10 languages, including Chinese, Tibetan, Sanskrit, Uyghur, Sogdian, Hebrew), discovered by a Daoist monk (Wang Yuanlu) in 1900, and then looted by Aurel Stein (1907), Paul Pelliot (1908), and others (the "Dunhuang manuscripts," now in London, Paris, Beijing, St. Petersburg, Kyoto). The "Cave 45" (the "Cave 45, c. 700 CE) has the "Seven-Buddha Wall" (the "Seven Buddhas," 2 meters high, 1 meter wide, 7 buddhas, 500 smaller buddhas). The site is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/mogao-regenerated.jpg',
        imageCurrent: '/images/sites/mogao-current.jpg',
        scene: 'The Thousand Buddha Caves of Dunhuang',
        visualHighlights: ['735 caves (500,000 square meters of frescoes)', 'Library Cave (Cave 17, 50,000 manuscripts)', 'Seven-Buddha Wall (Cave 45, 7 buddhas, 500 buddhas)', 'Mingsha Mountain (Echoing Sand Mountain)', 'Silk Road location (Hexi Corridor)'],
        deity: 'Buddha',
        type: 'temple'
      }
    ]
  },

  // 207. Chengdu Plain - Sanxingdui Civilization
  sanxingdui: {
    id: 'sanxingdui',
    name: 'Sanxingdui (Guanghan)',
    coordinates: [31.0, 104.2],
    region: 'Southern China (Sichuan)',
    locations: [
      {
        id: 'sanxingdui-ruins',
        name: 'Sanxingdui',
        description: 'Mysterious Bronze Age civilization',
        longDescription: `Sanxingdui (c. 1600-1100 BCE) is a Bronze Age civilization (the "Sanxingdui Culture," 12 square kilometers) in the Chengdu Plain, discovered in 1929 but not recognized until 1986. The site's "Sacrifice Pits" (the "Sanxingdui Pits," Pit 1, Pit 2, c. 1200 BCE) contained 1,000 artifacts (the "Sanxingdui Treasure," 600 bronze objects, 300 jade objects, 100 gold objects, 50 ivory objects, 1,000 cowrie shells). The bronze objects include the "Bronze Masks" (the "Sanxingdui Masks," 1 meter high, 1 meter wide, with protruding eyes, 10 cm long, 5 cm wide, 2 cm thick), the "Bronze Standing Figure" (the "Sanxingdui Standing Figure," 2.6 meters high, 2 meters wide, 1 meter deep, with a 1-meter-high head, 1-meter-wide body), and the "Bronze Sun Tree" (the "Sanxingdui Sun Tree," 4 meters high, 3 meters wide, 1 meter deep, with 9 branches, 12 birds, 27 fruit). The jade objects include the "Jade Zhang" (the "Sanxingdui Zhang," 1 meter high, 0.5 meters wide, a ritual blade), the "Jade Yue" (the "Sanxingdui Yue," 0.5 meters high, 0.3 meters wide, an axe), and the "Jade Cong" (the "Sanxingdui Cong," 0.3 meters high, 0.3 meters wide, a tube). Sanxingdui is not part of any known historical Chinese dynasty (the "Shang Dynasty" was in the Yellow River Valley, 1,000 km away).`,
        imageRegenerated: '/images/sites/sanxingdui-regenerated.jpg',
        imageCurrent: '/images/sites/sanxingdui-current.jpg',
        scene: 'The Mysterious Bronze Masks of Sanxingdui',
        visualHighlights: ['Bronze Masks (1 meter high, protruding eyes 10 cm long)', 'Bronze Standing Figure (2.6 meters high, bronze statue)', 'Bronze Sun Tree (4 meters high, 9 branches, 12 birds)', 'Sacrifice Pits (Pit 1, Pit 2, 1,000 artifacts)', 'Jade Zhang (1 meter high, ritual blade)'],
        type: 'city'
      }
    ]
  },

  // 208. Leshan Giant Buddha - Largest Stone Buddha
  leshan: {
    id: 'leshan-buddha',
    name: 'Leshan Giant Buddha',
    coordinates: [29.544, 103.769],
    region: 'Southern China (Sichuan)',
    locations: [
      {
        id: 'leshan-giant-buddha',
        name: 'Leshan Giant Buddha',
        description: 'Largest stone Buddha in the world',
        longDescription: `The Leshan Giant Buddha (713-803 CE) is the largest stone Buddha in the world (the "Leshan Buddha," 71 meters high, 8 meters wide, 10 meters deep, 2 meters eye length, 5 meters nose length, 6 meters ear length, 8 meters foot length, 2,000 pounds of gold leaf), carved from a cliff face (the "Leshan Cliff," 500 meters long, 200 meters high) at the confluence of three rivers (the Min River, the Qingyi River, and the Dadu River). The Buddha was built to calm the dangerous waters (the "Leshan Rapids," where boats often capsized). The Buddha has a "drainage system" (the "Leshan Drains," 2 meters deep, 1 meter wide, 1,000 meters long, 20 drainage holes) to prevent erosion. The site has a "temple" (the "Lingyun Temple," 500 meters west, 10 buildings, 1,000 statues), a "stairway" (the "Leshan Stairway," 1,000 steps, 1 meter wide, 2 meters high, 500 meters long), and a "museum" (the "Leshan Museum," 1,000 objects). The site is a UNESCO World Heritage site (1996).`,
        imageRegenerated: '/images/sites/leshan-regenerated.jpg',
        imageCurrent: '/images/sites/leshan-current.jpg',
        scene: 'The Giant Stone Buddha of Leshan',
        visualHighlights: ['71 meters high (largest stone Buddha)', 'Drainage system (2 meters deep, 1,000 meters long)', 'Lingyun Temple (10 buildings, 1,000 statues)', 'Three river confluence (Min, Qingyi, Dadu rivers)', 'Leshan Stairway (1,000 steps)'],
        deity: 'Buddha',
        type: 'monument'
      }
    ]
  },

  // 209. Shaolin Temple - Birthplace of Zen Buddhism
  shaolin: {
    id: 'shaolin-temple',
    name: 'Shaolin Temple (Songshan)',
    coordinates: [34.508, 112.935],
    region: 'Northern China (Henan)',
    locations: [
      {
        id: 'shaolin-temple',
        name: 'Shaolin Temple',
        description: 'Birthplace of Zen Buddhism and Shaolin Kung Fu',
        longDescription: `Shaolin Temple (the "Shaolin Temple," 495- present CE) is the birthplace of Zen Buddhism (Chan Buddhism) and Shaolin Kung Fu, located on Mount Song (the "Songshan Mountain," 1,500 meters high), one of the Five Sacred Mountains of Taoism (the "Five Mountains," c. 1500 BCE). The temple was built by Emperor Xiaowen of the Northern Wei Dynasty (c. 495 CE) for the Indian monk Buddhabhadra (the "Buddhabhadra Temple," 495-500 CE). The Indian monk Bodhidharma (the "Bodhidharma," c. 527 CE, the "First Patriarch of Zen") meditated in a cave (the "Bodhidharma Cave," 2 x 2 meters, 2 meters high) for nine years (the "Nine Years of Wall-Gazing"). The "Forest of Pagodas" (the "Shaolin Pagoda Forest," 791-1800 CE) contains 241 pagodas (the "Shaolin Pagodas," 2-15 meters high, brick and stone, with 2,000 inscriptions). The temple has a "Hall of the Heavenly Kings" (the "Heavenly Kings Hall," 1644-1912 CE, with statues of the Four Heavenly Kings), a "Hall of the Great Hero" (the "Great Hero Hall," 1644-1912 CE, with statues of the Three Saints), and a "Abbot's Room" (the "Abbot's Room," 1644-1912 CE). The temple was destroyed in 1928 (the "Shaolin Fire," by the warlord Shi Yousan, burning 1,000 monks, 500 buildings), but rebuilt in 1982-2000. The site is a UNESCO World Heritage site (2010).`,
        imageRegenerated: '/images/sites/shaolin-regenerated.jpg',
        imageCurrent: '/images/sites/shaolin-current.jpg',
        scene: 'The Birthplace of Zen and Kung Fu',
        visualHighlights: ['241 pagodas (Pagoda Forest, 791-1800 CE)', 'Bodhidharma Cave (Nine Years of Wall-Gazing)', 'Hall of the Great Hero (Three Saints statues)', 'Shaolin Kung Fu training ground (warriors, weapons)', 'Mount Song setting (1,500 meters high)'],
        type: 'temple'
      }
    ]
  },

  // 210. Summer Palace - Imperial Garden
  summerPalace: {
    id: 'summer-palace',
    name: 'Summer Palace (Beijing)',
    coordinates: [39.997, 116.268],
    region: 'Northern China (Beijing)',
    locations: [
      {
        id: 'yiheyuan',
        name: 'Summer Palace (Yiheyuan)',
        description: 'Imperial garden of the Qing Dynasty',
        longDescription: `The Summer Palace (Yiheyuan, the "Garden of Harmonious Unity," c. 1750-1900 CE) is an imperial garden of the Qing Dynasty (the "Qing Garden," 300 hectares, 3,000 buildings, 1,000 pavilions, 100 courtyards) in Beijing, built by Emperor Qianlong (c. 1750) and rebuilt by Empress Dowager Cixi (c. 1888). The palace has a "Long Corridor" (the "Long Corridor," 728 meters long, 273 sections, 8,000 paintings), a"Marble Boat" (the "Marble Boat," 30 meters long, 10 meters high, 5 meters wide, a pavilion on a stone boat), and a "Tower of Buddhist Incense" (the "Tower of Buddhist Incense," 41 meters high, 4 meters wide, 3 meters deep, an octagonal tower). The palace's "Kunming Lake" (the "Kunming Lake," 220 hectares, 1.5 meters deep, 2,000 lotus flowers) was modeled on West Lake (Hangzhou). The "Hall of Benevolence and Longevity" (the "Hall of Benevolence and Longevity," 30 meters high, 20 meters wide, 10 meters deep) was the throne room. The site is a UNESCO World Heritage site (1998).`,
        imageRegenerated: '/images/sites/summer-palace-regenerated.jpg',
        imageCurrent: '/images/sites/summer-palace-current.jpg',
        scene: 'The Imperial Garden of the Qing Dynasty',
        visualHighlights: ['Long Corridor (728 meters long, 8,000 paintings)', 'Marble Boat (30 meters long, pavilion on stone boat)', 'Kunming Lake (220 hectares, 2,000 lotus flowers)', 'Tower of Buddhist Incense (41 meters high, octagonal)', 'Hall of Benevolence and Longevity (throne room)'],
        type: 'palace'
      }
    ]
  }
};

// ========== SECTION 20: ANCIENT AMERICAS (211-222) ==========
export const americasSites: Record<string, Site> = {
  // 211. Caral-Supe - Oldest Civilization in the Americas
  caral: {
    id: 'caral',
    name: 'Caral-Supe (Peru)',
    coordinates: [-10.892, -77.52],
    region: 'South America (Peru)',
    locations: [
      {
        id: 'caral-pyramids',
        name: 'Sacred City of Caral',
        description: 'Oldest known civilization in the Americas',
        longDescription: `Caral-Supe (c. 2600-2000 BCE) is the oldest known civilization in the Americas (the "Caral Civilization," 5000 years old, contemporary with Egypt's Old Kingdom), with 6 pyramids (the "Caral Pyramids," 10-30 meters high, 50-150 meters wide, 100-300 meters long), 2 sunken plazas (the "Caral Plazas," 30-50 meters diameter, 2-5 meters deep), and 1 amphitheater (the "Caral Amphitheater," 30 meters diameter, 2 meters high). The "Mayor Pyramid" (the "Piramide Mayor," 30 meters high, 150 meters wide, 300 meters long) is the largest pyramid at Caral. The city (600 hectares, 3,000 people) had no defensive walls (the "Caral Walls," suggesting a peaceful society) and no pottery (the "Caral Pottery," replaced by gourds, 5000-year-old gourds). The site's artifacts include "quipus" (the "Caral Quipus," 20 quipus, knotted strings for record-keeping, 5000 years old, the oldest in the Americas), "flutes" (the "Caral Flutes," 32 flutes, made of pelican and condor bones, 5000 years old), and "cornets" (the "Caral Cornets," 38 cornets, made of llama and deer bones, 5000 years old). The site is a UNESCO World Heritage site (2009).`,
        imageRegenerated: '/images/sites/caral-regenerated.jpg',
        imageCurrent: '/images/sites/caral-current.jpg',
        scene: 'The Oldest City in the Americas',
        visualHighlights: ['6 pyramids (Mayor Pyramid 30 meters high)', 'Caral Quipus (knotted strings, 5,000 years old)', 'Sunken plazas (2 plazas, 30-50 meters diameter)', 'Amphitheater (30 meters diameter)', '32 flutes (pelican and condor bones)'],
        type: 'city'
      }
    ]
  },

  // 212. Chavín de Huántar - Religious Center of the Andes
  chavin: {
    id: 'chavin',
    name: 'Chavín de Huántar (Peru)',
    coordinates: [-9.593, -77.178],
    region: 'South America (Peru)',
    locations: [
      {
        id: 'chavin-temple',
        name: 'Temple of Chavín de Huántar',
        description: 'Religious and political center of the Chavín culture',
        longDescription: `Chavín de Huántar (c. 1200-400 BCE) was the religious and political center of the Chavín culture (the "Chavín Horizon," the first pan-Andean religion), located at the confluence of two rivers (the Huacheksa and Mosna Rivers). The site's "Old Temple" (the "Old Temple," c. 900-500 BCE) has a "U-shaped" layout (the "Chavín U," 50 meters wide, 100 meters long, with a central sunken court), a "Lanzón" (the "Lanzón Monolith," 4.5 meters high, 1 meter wide, a granite carving of a fanged deity with snakes for hair), and a "gallery" (the "Chavín Galleries," 500 meters of tunnels, 5 meters high, 2 meters wide, with ventilation shafts). The "New Temple" (the "New Temple," c. 500-200 BCE) has the "Raimondi Stela" (the "Raimondi Stela," 2 meters high, 1 meter wide, a granite carving of the Staff God, holding a staff in each hand), and the "Tello Obelisk" (the "Tello Obelisk," 3 meters high, 1 meter wide, a granite carving of a crocodile deity). The site's "Black and White Portal" (the "Black and White Portal," 3 meters high, 2 meters wide, with alternating black and white stone) marks the entrance to the main temple. The site is a UNESCO World Heritage site (1985).`,
        imageRegenerated: '/images/sites/chavin-regenerated.jpg',
        imageCurrent: '/images/sites/chavin-current.jpg',
        scene: 'The Religious Center of the Chavín',
        visualHighlights: ['Lanzón Monolith (4.5 meters high, fanged deity)', 'Chavín Galleries (500 meters of tunnels)', 'Raimondi Stela (2 meters high, Staff God)', 'Tello Obelisk (3 meters high, crocodile deity)', 'Black and White Portal (alternating stone)'],
        deity: 'Staff God',
        type: 'temple'
      }
    ]
  },

  // 213. Teotihuacan - City of the Gods
  teotihuacan: {
    id: 'teotihuacan',
    name: 'Teotihuacan (Mexico)',
    coordinates: [19.692, -98.843],
    region: 'North America (Mexico)',
    locations: [
      {
        id: 'pyramid-of-sun',
        name: 'Pyramid of the Sun',
        description: 'Third largest pyramid in the world',
        longDescription: `Teotihuacan (c. 100 BCE - 550 CE) was the largest city in the pre-Columbian Americas (the "Teotihuacan City," 20 square kilometers, 100,000 people), known as the "City of the Gods" (the "Teotihuacan," "Place where gods were created"). The "Pyramid of the Sun" (the "Piramide del Sol," c. 200 CE, 65 meters high, 225 meters wide, 225 meters long, 1 million cubic meters of stone) is the third largest pyramid in the world (after the Great Pyramid of Giza and the Pyramid of Khafre). The "Pyramid of the Moon" (the "Piramide de la Luna," c. 200 CE, 45 meters high, 150 meters wide, 150 meters long) is at the north end of the "Avenue of the Dead" (the "Calzada de los Muertos," 4 kilometers long, 40 meters wide). The "Temple of Quetzalcoatl" (the "Templo de Quetzalcoatl," c. 200 CE, 20 meters high, 50 meters wide, 50 meters long) has 200 carved stone heads of the feathered serpent (the "Quetzalcoatl heads," 1 meter high, 1 meter wide). The site also has 2,000 apartment complexes (the "Teotihuacan Apartments," 2,000 compounds, 100 rooms each), 500 workshops (the "Teotihuacan Workshops," for obsidian, pottery, jewelry), and 100 plazas (the "Teotihuacan Plazas"). The site is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/teotihuacan-regenerated.jpg',
        imageCurrent: '/images/sites/teotihuacan-current.jpg',
        scene: 'The City of the Gods',
        visualHighlights: ['Pyramid of the Sun (65 meters high, 3rd largest pyramid)', 'Pyramid of the Moon (45 meters high)', 'Avenue of the Dead (4 kilometers long, 40 meters wide)', 'Temple of Quetzalcoatl (200 carved serpent heads)', '2,000 apartment complexes (100 rooms each)'],
        deity: 'Quetzalcoatl',
        type: 'temple'
      }
    ]
  },

  // 214. Tikal - Maya Superpower
  tikal: {
    id: 'tikal',
    name: 'Tikal (Guatemala)',
    coordinates: [17.222, -89.624],
    region: 'North America (Guatemala)',
    locations: [
      {
        id: 'tikal-pyramids',
        name: 'Tikal National Park',
        description: 'One of the largest Maya cities',
        longDescription: `Tikal (c. 600 BCE - 900 CE) was one of the largest Maya cities (the "Maya Tikal," 16 square kilometers, 4,000 structures, 90,000 people), the capital of a powerful Maya kingdom. The site has 6 large pyramids (the "Tikal Pyramids," 40-70 meters high, 50-100 meters wide), 10 temples (the "Tikal Temples," 30-60 meters high), 3,000 structures (the "Tikal Structures," including palaces, ball courts, causeways, plazas, reservoirs). "Temple I" (the "Temple of the Great Jaguar," c. 732 CE, 47 meters high, 6 meters wide, 10 meters deep) is the tomb of Jasaw Chan K'awiil I (the "Tikal King," 682-734 CE), with a 3-meter-high, 2-meter-wide, 1-meter-deep stone sarcophagus, jade jewelry, and 100 pottery vessels. "Temple II" (the "Temple of the Masks," c. 700 CE, 38 meters high, 5 meters wide, 8 meters deep) has a 2-meter-high, 1-meter-wide, 1-meter-deep stucco mask of the sun god. "Temple IV" (the "Temple of the Two-Headed Serpent," c. 741 CE, 70 meters high, 10 meters wide, 15 meters deep) is the tallest Maya pyramid (the "Tikal IV," c. 70 meters high, with a 1-meter-high, 1-meter-wide, 1-meter-deep roof comb). The "Lost World" (the "Mundo Perdido," c. 600 BCE, 30 meters high, 50 meters wide) has a 10-meter-high, 5-meter-wide, 5-meter-deep E-Group astronomical complex (the "E-Group," 3 temples aligned to the sun). The site is a UNESCO World Heritage site (1979).`,
        imageRegenerated: '/images/sites/tikal-regenerated.jpg',
        imageCurrent: '/images/sites/tikal-current.jpg',
        scene: 'The Great Maya City of Tikal',
        visualHighlights: ['Temple I (47 meters high, Tomb of Jasaw Chan K\'awiil)', 'Temple IV (70 meters high, tallest Maya pyramid)', 'Tikal Pyramids (6 large pyramids, 40-70 meters)', 'Lost World (E-Group astronomical complex)', '4,000 structures (16 square kilometers)'],
        deity: 'Itzamna',
        type: 'temple'
      }
    ]
  },

  // 215. Chichen Itza - Maya-Toltec Metropolis
  chichenItza: {
    id: 'chichen-itza',
    name: 'Chichen Itza (Mexico)',
    coordinates: [20.684, -88.567],
    region: 'North America (Mexico)',
    locations: [
      {
        id: 'el-castillo',
        name: 'El Castillo (Temple of Kukulkan)',
        description: 'Pyramid showing the serpent of light',
        longDescription: `Chichen Itza (c. 600-1200 CE) was a major Maya city (the "Maya Chichen Itza," 10 square kilometers, 1,000 structures, 35,000 people), influenced by the Toltec culture (the "Maya-Toltec Chichen Itza," c. 900-1200 CE). "El Castillo" (the "Temple of Kukulkan," c. 1000 CE, 30 meters high, 55 meters wide, 55 meters long) is a step pyramid (9 levels, 365 steps, 91 steps per side, 1 step at the top), with the "serpent of light" phenomenon (the "Kukulkan Serpent," during the equinox, the shadow of a serpent descends the north staircase, 7 triangles of light, 4 hours long). The "Great Ball Court" (the "Gran Juego de Pelota," 168 meters long, 70 meters wide) is the largest ball court in Mesoamerica (the "Chichen Itza Ball Court," c. 900-1000 CE, with a 8-meter-high, 4-meter-wide, 1-meter-deep ring, 5 meters above ground). The "Temple of the Warriors" (the "Templo de los Guerreros," c. 1000 CE, 20 meters high, 50 meters wide, 50 meters long) has 1,000 columns (the "Thousand Columns," 5 meters high, 1 meter wide, with reliefs of warriors). The "Cenote of Sacrifice" (the "Cenote Sagrado," 60 meters diameter, 20 meters deep) contains 50,000 artifacts (the "Chichen Itza Cenote," jade, gold, copper, pottery, textiles, wood, bark paper, 200 human skeletons). The site is a UNESCO World Heritage site (1988) and one of the New 7 Wonders of the World (2007).`,
        imageRegenerated: '/images/sites/chichen-itza-regenerated.jpg',
        imageCurrent: '/images/sites/chichen-itza-current.jpg',
        scene: 'The Maya-Toltec Metropolis of Chichen Itza',
        visualHighlights: ['El Castillo (30 meters high, 365 steps, serpent of light)', 'Great Ball Court (168 meters long, largest ball court)', 'Temple of the Warriors (Thousand Columns, 1,000 columns)', 'Cenote of Sacrifice (60 meters diameter, 50,000 artifacts)', 'Equinox serpent shadow (7 triangles of light)'],
        deity: 'Kukulkan',
        type: 'temple'
      }
    ]
  },

  // 216. Machu Picchu - Inca Citadel
  machuPicchu: {
    id: 'machu-picchu',
    name: 'Machu Picchu (Peru)',
    coordinates: [-13.163, -72.545],
    region: 'South America (Peru)',
    locations: [
      {
        id: 'inca-citadel',
        name: 'Machu Picchu',
        description: 'Lost city of the Incas',
        longDescription: `Machu Picchu (c. 1450-1572 CE) was an Inca citadel (the "Inca Machu Picchu," 5 square kilometers, 200 structures, 750 people) built for the Inca emperor Pachacuti (the "Pachacuti Inca," 1438-1472 CE). The site has 200 structures (the "Machu Picchu Structures," including temples, palaces, plazas, fountains, terraces, guardhouses, cemeteries, storage rooms). The "Intihuatana" (the "Intihuatana," "Hitching Post of the Sun," 2 meters high, 1 meter wide, 1 meter deep) is a stone pillar (the "Machu Picchu Intihuatana," used as a solar clock, aligned to the winter solstice). The "Temple of the Sun" (the "Torreon," 10 meters wide, 10 meters long, 5 meters high) has a 1-meter-wide, 1-meter-high, 0.5-meter-deep "window" (the "Solstice Window," aligned to the sun). The "Room of the Three Windows" (the "Templo de las Tres Ventanas," 10 meters wide, 10 meters long, 5 meters high) has 3 trapezoidal windows (the "Machu Picchu Windows," 1 meter high, 0.5 meters wide). The site also has 700 terraces (the "Machu Picchu Terraces," 5 kilometers of agricultural terraces, 1 meter high, 2 meters wide, 1,000 steps), 100 fountains (the "Machu Picchu Fountains," 1 meter high, 1 meter wide, 1 meter deep, 100 meters of canals), and 1,800 steps (the "Machu Picchu Stairs," 1,800 steps, 1 meter wide). The site is a UNESCO World Heritage site (1983) and one of the New 7 Wonders of the World (2007).`,
        imageRegenerated: '/images/sites/machu-picchu-regenerated.jpg',
        imageCurrent: '/images/sites/machu-picchu-current.jpg',
        scene: 'The Lost City of the Incas',
        visualHighlights: ['Intihuatana (2 meters high, solar clock, winter solstice)', 'Temple of the Sun (10 x 10 meters, solstice window)', 'Room of the Three Windows (3 trapezoidal windows)', '700 terraces (5 kilometers, agricultural)', '200 structures (5 square kilometers, 1,800 steps)'],
        type: 'city'
      }
    ]
  },

  // 217. Nazca Lines - Geoglyphs in the Desert
  nazca: {
    id: 'nazca-lines',
    name: 'Nazca Lines (Peru)',
    coordinates: [-14.739, -75.13],
    region: 'South America (Peru)',
    locations: [
      {
        id: 'nazca-geoglyphs',
        name: 'Nazca Geoglyphs',
        description: 'Mysterious desert drawings',
        longDescription: `The Nazca Lines (c. 500 BCE - 500 CE) are a series of geoglyphs (the "Nazca Geoglyphs," 500 square kilometers, 10,000 lines, 300 figures, 1,000 years) in the Nazca Desert (the "Nazca Desert," 500 square kilometers). The figures (the "Nazca Figures," 300 figures, 2,000 years old) include animals, plants, and geometric shapes. The "Hummingbird" (the "Nazca Hummingbird," 100 meters long, 50 meters wide, 1 meter deep), the "Spider" (the "Nazca Spider," 50 meters long, 30 meters wide, 1 meter deep), the "Monkey" (the "Nazca Monkey," 100 meters long, 50 meters wide, 1 meter deep), the "Condor" (the "Nazca Condor," 150 meters long, 80 meters wide, 1 meter deep), the "Whale" (the "Nazca Whale," 60 meters long, 20 meters wide, 1 meter deep), the "Lizard" (the "Nazca Lizard," 200 meters long, 100 meters wide, 1 meter deep, destroyed by the Pan-American Highway), the "Tree" (the "Nazca Tree," 50 meters high, 30 meters wide, 1 meter deep), and the "Hands" (the "Nazca Hands," 50 meters high, 30 meters wide, 1 meter deep, with 4 fingers on each hand). The "Astronaut" (the "Nazca Astronaut," 30 meters high, 20 meters wide, 1 meter deep, a humanoid figure with a round head) is the most famous figure. The site is a UNESCO World Heritage site (1994).`,
        imageRegenerated: '/images/sites/nazca-regenerated.jpg',
        imageCurrent: '/images/sites/nazca-current.jpg',
        scene: 'The Mysterious Geoglyphs of Nazca',
        visualHighlights: ['10,000 lines (500 square kilometers, 300 figures)', 'Hummingbird geoglyph (100 meters long)', 'Monkey geoglyph (100 meters long)', 'Condor geoglyph (150 meters long)', 'Astronaut geoglyph (30 meters high)'],
        type: 'monument'
      }
    ]
  },

  // 218. Palenque - Maya Art and Architecture
  palenque: {
    id: 'palenque',
    name: 'Palenque (Mexico)',
    coordinates: [17.483, -92.046],
    region: 'North America (Mexico)',
    locations: [
      {
        id: 'temple-of-inscriptions',
        name: 'Temple of the Inscriptions',
        description: 'Tomb of the Maya king Pakal',
        longDescription: `Palenque (c. 226 BCE - 799 CE) was a Maya city-state (the "Maya Palenque," 5 square kilometers, 1,000 structures, 10,000 people), famous for its art and architecture (the "Palenque Art," Maya sculpture, stucco reliefs, hieroglyphs). The "Temple of the Inscriptions" (the "Templo de las Inscripciones," c. 675 CE, 25 meters high, 60 meters wide, 40 meters long) is the pyramid tomb of K'inich Janaab' Pakal (the "Pakal the Great," 603-683 CE), discovered in 1952 by Alberto Ruz Lhuillier. The tomb (the "Pakal Tomb," 10 meters deep, 5 meters wide, 5 meters long) contains a 2-meter-high, 2-meter-wide, 1-meter-deep sarcophagus (the "Pakal Sarcophagus," with a 3-meter-long, 2-meter-wide, 1-meter-deep lid, weighing 15 tons, carved with the "Tree of Life" and Pakal falling into the underworld). The "Palace" (the "El Palacio," c. 500-700 CE, 100 meters long, 80 meters wide, 20 meters high) has a 20-meter-high tower (the "Palenque Tower," 4 levels, 20 meters high, 5 meters wide, 5 meters deep), 100 rooms (the "Palenque Rooms," 100 rooms, 500 square meters, 1,000 square meters), and 10 courtyards (the "Palenque Courtyards," 10 courtyards, 100 square meters each). The site is a UNESCO World Heritage site (1987).`,
        imageRegenerated: '/images/sites/palenque-regenerated.jpg',
        imageCurrent: '/images/sites/palenque-current.jpg',
        scene: 'The Tomb of Pakal the Great',
        visualHighlights: ['Temple of the Inscriptions (25 meters high, tomb of Pakal)', 'Pakal Sarcophagus (15-ton lid, Tree of Life carving)', 'Palace of Palenque (100 rooms, 10 courtyards)', 'Palenque Tower (4 levels, 20 meters high)', 'Maya sculpture (stucco reliefs, hieroglyphs)'],
        deity: 'Pakal',
        type: 'temple'
      }
    ]
  },

  // 219. Cuzco - Inca Capital
  cuzco: {
    id: 'cuzco',
    name: 'Cuzco (Peru)',
    coordinates: [-13.525, -71.972],
    region: 'South America (Peru)',
    locations: [
      {
        id: 'qorikancha',
        name: 'Qorikancha (Temple of the Sun)',
        description: 'Inca temple with golden garden',
        longDescription: `Cuzco (c. 1200-1572 CE) was the capital of the Inca Empire (the "Inca Cuzco," "Navel of the World"), founded by Manco Capac (the "First Inca," c. 1200 CE). The "Qorikancha" (the "Temple of the Sun," c. 1450 CE, 50 meters long, 50 meters wide, 10 meters high) was the most important temple in the Inca Empire (the "Inca Qorikancha," "Golden Temple"), covered in 700 gold sheets (the "Gold Sheets," 2 meters high, 1 meter wide, 1 cm thick, weighing 2 kg each), with a 10-meter-high, 5-meter-wide, 5-meter-deep golden garden (the "Golden Garden," with 100 life-size gold statues, 10 llamas, 50 corn plants, 20 women, 10 men), melted down by the Spanish in 1533 (50 tons of gold, 100 tons of silver). The "Sacsayhuaman" (the "Sacsayhuaman Fortress," c. 1450-1500 CE, 1,000 meters long, 100 meters wide, 20 meters high) is a 1-kilometer-long fortress (the "Sacsayhuaman Walls," 100 meters high, 20 meters wide, 3 meters thick, 5,000 stones, 100-500 tons each), built with 500,000 workers (the "Inca Workers," 50,000 men, 450,000 support workers). The fortress has 3 platforms (the "Sacsayhuaman Platforms," 1,000 meters long, 100 meters wide, 20 meters high), 10 towers (the "Sacsayhuaman Towers," 10 meters high, 5 meters wide, 5 meters deep), and 100 rooms (the "Sacsayhuaman Rooms," 100 rooms, 1,000 square meters). The "Intihuatana" (the "Intihuatana," "Hitching Post of the Sun," 2 meters high, 1 meter wide, 1 meter deep) is a stone pillar used as a solar clock. The site is a UNESCO World Heritage site (1983).`,
        imageRegenerated: '/images/sites/cuzco-regenerated.jpg',
        imageCurrent: '/images/sites/cuzco-current.jpg',
        scene: 'The Inca Capital of Cuzco',
        visualHighlights: ['Qorikancha (Temple of the Sun, 700 gold sheets)', 'Golden Garden (100 life-size gold statues, 10 llamas)', 'Sacsayhuaman Fortress (1,000 meters long, 500,000 workers)', 'Sacsayhuaman Walls (5,000 stones, 100-500 tons each)', 'Intihuatana (solar clock, 2 meters high)'],
        deity: 'Inti',
        type: 'city'
      }
    ]
  },

  // 220. Copán - Maya Sculpture
  copan: {
    id: 'copan',
    name: 'Copán (Honduras)',
    coordinates: [14.838, -89.157],
    region: 'North America (Honduras)',
    locations: [
      {
        id: 'hieroglyphic-stairway',
        name: 'Hieroglyphic Stairway of Copán',
        description: 'Longest Maya hieroglyphic text',
        longDescription: `Copán (c. 400-800 CE) was a Maya city-state (the "Maya Copán," 5 square kilometers, 2,000 structures, 15,000 people), famous for its sculpture (the "Copán Sculpture," 1,000 stelae, 100 altars, 10,000 glyphs). The "Hieroglyphic Stairway" (the "Escalinata Jeroglífica," c. 710-750 CE, 20 meters long, 10 meters high, 1 meter wide, 63 steps, 2,200 glyphs) is the longest Maya hieroglyphic text (the "Copán Stairway," 2,200 glyphs, 5,000 years of Maya history). The "Altar Q" (the "Altar Q," c. 776 CE, 1 meter high, 1 meter wide, 1 meter deep) has 16 seated figures (the "Copán Kings," 16 kings, 400 years of Maya kings), including the founder K'inich Yax K'uk' Mo' (the "Quetzal Macaw," 426-437 CE) and the last king Yax Pasaj Chan Yopat (the "First Dawn," 763-810 CE). The "Acropolis" (the "Copán Acropolis," 100 meters long, 50 meters wide, 30 meters high) has 100 buildings (the "Copán Buildings," 100 buildings, 10,000 square meters). The "Ball Court" (the "Copán Ball Court," 50 meters long, 20 meters wide) has 20-meter-high walls (the "Copán Ball Court Walls," 20 meters high, 5 meters wide, 1 meter deep). The site is a UNESCO World Heritage site (1980).`,
        imageRegenerated: '/images/sites/copan-regenerated.jpg',
        imageCurrent: '/images/sites/copan-current.jpg',
        scene: 'The Maya Sculpture of Copán',
        visualHighlights: ['Hieroglyphic Stairway (2,200 glyphs, 63 steps)', 'Altar Q (16 seated figures, 16 Copán kings)', 'Acropolis (100 buildings, 30 meters high)', 'Ball Court (50 meters long, 20-meter-high walls)', '1,000 stelae (Copán sculpture, 10,000 glyphs)'],
        type: 'city'
      }
    ]
  },

  // 221. Uxmal - Puuc Architecture
  uxmal: {
    id: 'uxmal',
    name: 'Uxmal (Mexico)',
    coordinates: [20.359, -89.771],
    region: 'North America (Mexico)',
    locations: [
      {
        id: 'pyramid-of-magician',
        name: 'Pyramid of the Magician (Uxmal)',
        description: 'Maya pyramid with rounded corners',
        longDescription: `Uxmal (c. 600-1000 CE) was a Maya city (the "Maya Uxmal," 5 square kilometers, 2,000 structures, 20,000 people), famous for its Puuc architecture (the "Puuc Style," smooth lower walls, mosaic upper friezes, 1,000 buildings). The "Pyramid of the Magician" (the "Pirámide del Adivino," c. 800-1000 CE, 35 meters high, 50 meters wide, 50 meters long) is a unique pyramid with rounded corners, elliptical base, and 5 levels (the "Uxmal Pyramid," 5 levels, 35 meters high, 3 meters high per level, 100 steps). The "Governor's Palace" (the "Palacio del Gobernador," c. 900-1000 CE, 100 meters long, 20 meters wide, 10 meters high) has 100-meter-long facade (the "Uxmal Facade," 100 meters long, 10 meters high, 5 meters deep, with 10,000 stone mosaics). The "Nunnery Quadrangle" (the "Cuadrángle de las Monjas," c. 800-900 CE, 50 meters long, 50 meters wide, 10 meters high) has 100 rooms (the "Uxmal Rooms," 100 rooms, 1,000 square meters), 10 courtyards (the "Uxmal Courtyards," 10 courtyards, 100 square meters each), and 1,000 stone mosaics (the "Uxmal Mosaics," 1,000 stone mosaics, geometric patterns, Chac masks). The site is a UNESCO World Heritage site (1996).`,
        imageRegenerated: '/images/sites/uxmal-regenerated.jpg',
        imageCurrent: '/images/sites/uxmal-current.jpg',
        scene: 'The Puuc Architecture of Uxmal',
        visualHighlights: ['Pyramid of the Magician (35 meters high, rounded corners)', 'Governor\'s Palace (100-meter-long facade, 10,000 mosaics)', 'Nunnery Quadrangle (100 rooms, 4 sides)', 'Puuc architecture (smooth lower walls, mosaic friezes)', 'Chac masks (rain god, 1,000 stone mosaics)'],
        deity: 'Chaac',
        type: 'temple'
      }
    ]
  },

  // 222. Tiwanaku - Pre-Inca Empire
  tiwanaku: {
    id: 'tiwanaku',
    name: 'Tiwanaku (Bolivia)',
    coordinates: [-16.562, -68.674],
    region: 'South America (Bolivia)',
    locations: [
      {
        id: 'gate-of-sun',
        name: 'Gate of the Sun',
        description: 'Monolithic gateway of the Tiwanaku Empire',
        longDescription: `Tiwanaku (c. 200-1000 CE) was the capital of the Tiwanaku Empire (the "Tiwanaku Empire," 10 square kilometers, 100,000 people, 500,000 in the empire), a pre-Inca civilization (the "Pre-Inca Tiwanaku," 800-1000 CE). The "Gate of the Sun" (the "Puerta del Sol," c. 500-600 CE, 3 meters high, 4 meters wide, 1 meter deep, 10 tons) is a monolithic gateway carved from a single block of stone (andesite, 10 tons, 3 meters high, 4 meters wide). The gate has 50 carved figures (the "Tiwanaku Figures," 50 carved figures, including the "Staff God" (the "Sun God," 1 meter high, 0.5 meters wide, holding 2 staffs), 30 "angel" figures (the "Tiwanaku Angels," 0.5 meters high, 0.3 meters wide), and 10 "condor" figures (the "Tiwanaku Condors," 0.5 meters high, 0.3 meters wide). The "Akapana" (the "Akapana Pyramid," c. 500-700 CE, 15 meters high, 200 meters long, 200 meters wide) is a 15-meter-high pyramid (the "Tiwanaku Akapana," 15 meters high, 200 meters wide, 200 meters long, 1 million cubic meters of stone). The "Kalasasaya" (the "Kalasasaya Temple," c. 500-700 CE, 100 meters long, 100 meters wide, 10 meters high) has 10-meter-high walls (the "Kalasasaya Walls," 100 meters long, 100 meters wide, 10 meters high), a 2-meter-high, 1-meter-wide, 1-meter-deep sunken court (the "Kalasasaya Sunken Court," 1 meter deep, 100 square meters), and 1,000 stone monoliths (the "Kalasasaya Monoliths," 1,000 monoliths, 2-4 meters high). The site is a UNESCO World Heritage site (2000).`,
        imageRegenerated: '/images/sites/tiwanaku-regenerated.jpg',
        imageCurrent: '/images/sites/tiwanaku-current.jpg',
        scene: 'The Pre-Inca Empire of Tiwanaku',
        visualHighlights: ['Gate of the Sun (3 meters high, 10 tons, 50 carved figures)', 'Staff God (Sun God, 1 meter high, 2 staffs)', 'Akapana Pyramid (15 meters high, 1 million cubic meters)', 'Kalasasaya Temple (100 x 100 meters, sunken court)', 'Ponce Monolith (4 meters high, stone monolith)'],
        deity: 'Viracocha',
        type: 'temple'
      }
    ]
  }
};

// ========== UPDATE THE COMBINED EXPORT ==========
export const sites: Record<string, Site> = {
  ...egyptianSites,
  ...additionalEgyptianSites,
  ...nubianSites,
  ...puntSites,
  ...phoenicianSites,
  ...babylonianSites,
  ...hebrewSites,
  ...invaderSites,
  ...greekSites,
  ...centralAfricaSites,
  ...southernAfricaSites,
  ...northAfricaSites,
  ...westAfricaSites,
  ...mycenaeanSites,
  ...minoanSites,
  ...persianSites,
  ...etruscanSites,
  ...indiaSites,
  ...chinaSites,
  ...americasSites
}

// ========== FEATURED SITES (for homepage quick links) ==========
export const featuredSites = [
  // Egyptian Civilization
  { id: 'great-pyramid', name: 'Great Pyramid', icon: 'PYR', siteId: 'giza', civilization: 'Egyptian' },
  { id: 'karnak-hypostyle', name: 'Temple of Karnak', icon: 'TMP', siteId: 'karnak', civilization: 'Egyptian' },
  { id: 'abu-simbel-temple', name: 'Abu Simbel', icon: 'SUN', siteId: 'abuSimbel', civilization: 'Egyptian' },
  { id: 'temple-hathor', name: 'Temple of Hathor', icon: 'COW', siteId: 'dendera', civilization: 'Egyptian' },
  { id: 'temple-isis', name: 'Temple of Isis', icon: 'WNG', siteId: 'philae', civilization: 'Egyptian' },
  
  // Nubian/Kushite Civilization
  { id: 'meroe-pyramids', name: 'Meroë Pyramids', icon: 'PYR', siteId: 'meroe-pyramids', civilization: 'Nubian' },
  { id: 'jebel-barkal-mountain', name: 'Jebel Barkal', icon: 'MTN', siteId: 'jebel-barkal', civilization: 'Nubian' },
  
  // Red Sea / Punt Trade World
  { id: 'aksum-city', name: 'Kingdom of Aksum', icon: 'STL', siteId: 'aksum', civilization: 'Aksumite' },
  
  // Phoenician Civilization
  { id: 'tyre-island', name: 'Tyre', icon: 'PRP', siteId: 'tyre', civilization: 'Phoenician' },
  { id: 'carthage-city', name: 'Carthage', icon: 'HBR', siteId: 'carthage', civilization: 'Phoenician' },
  
  // Babylonian/Mesopotamian Civilization
  { id: 'babylon-city', name: 'Babylon', icon: 'GTE', siteId: 'babylon', civilization: 'Babylonian' },
  { id: 'ishtar-gate-structure', name: 'Ishtar Gate', icon: 'GTE', siteId: 'ishtar-gate', civilization: 'Babylonian' },
  
  // Hebrew/Israelite Civilization
  { id: 'jerusalem-city', name: 'Jerusalem', icon: 'STR', siteId: 'jerusalem', civilization: 'Israelite' },
  { id: 'solomons-temple', name: 'Solomon\'s Temple', icon: 'TMP', siteId: 'temple-mount', civilization: 'Israelite' },
  
  // Hittite/Anatolian Civilization
  { id: 'hattusa-capital', name: 'Hattusa', icon: 'WLL', siteId: 'hattusa', civilization: 'Hittite' },
  
  // Greek/Aegean Civilization
  { id: 'acropolis-hill', name: 'Acropolis', icon: 'PRT', siteId: 'acropolis', civilization: 'Greek' },
  { id: 'temple-zeus-olympia', name: 'Temple of Zeus', icon: 'BLT', siteId: 'olympia', civilization: 'Greek' },
  { id: 'oracle-delphi', name: 'Delphi', icon: 'ORC', siteId: 'delphi', civilization: 'Greek' },
  { id: 'temple-poseidon', name: 'Temple of Poseidon', icon: 'SEA', siteId: 'sounion', civilization: 'Greek' },
  { id: 'temple-artemis', name: 'Temple of Artemis', icon: 'BOW', siteId: 'ephesus', civilization: 'Greek' },
  
  // Mycenaean Greek Civilization
  { id: 'lion-gate', name: 'Lion Gate', icon: 'LIO', siteId: 'mycenae', civilization: 'Mycenaean' },
  { id: 'palace-nestor', name: 'Palace of Nestor', icon: 'PLC', siteId: 'pylos', civilization: 'Mycenaean' },
  
  // Minoan Civilization
  { id: 'palace-phaistos', name: 'Phaistos Disc', icon: 'DSC', siteId: 'phaistos', civilization: 'Minoan' },
  { id: 'palace-malia', name: 'Malia', icon: 'BEE', siteId: 'malia', civilization: 'Minoan' },
  
  // Persian Civilization
  { id: 'persepolis-complex', name: 'Persepolis', icon: 'PLC', siteId: 'persepolis', civilization: 'Persian' },
  { id: 'tomb-cyrus', name: 'Tomb of Cyrus', icon: 'TMB', siteId: 'pasargadae', civilization: 'Persian' },
  
  // Etruscan Civilization
  { id: 'monterozzi-necropolis', name: 'Tarquinia Tombs', icon: 'ART', siteId: 'tarquinia', civilization: 'Etruscan' },
  { id: 'necropolis-banditaccia', name: 'Cerveteri', icon: 'URN', siteId: 'cerveteri', civilization: 'Etruscan' },
  
  // Indian Civilization
  { id: 'mohenjo-daro', name: 'Mohenjo-Daro', icon: 'BTH', siteId: 'mohenjo-daro', civilization: 'Indian' },
  { id: 'mahabodhi-temple', name: 'Bodh Gaya', icon: 'BDH', siteId: 'bodh-gaya', civilization: 'Indian' },
  { id: 'kailasa-temple', name: 'Kailasa Temple', icon: 'SIV', siteId: 'ellora', civilization: 'Indian' },
  
  // Chinese Civilization
  { id: 'great-wall', name: 'Great Wall', icon: 'WLL', siteId: 'great-wall', civilization: 'Chinese' },
  { id: 'forbidden-city', name: 'Forbidden City', icon: 'PLC', siteId: 'forbidden-city', civilization: 'Chinese' },
  { id: 'terracotta-army', name: 'Terracotta Army', icon: 'WAR', siteId: 'terracotta-army', civilization: 'Chinese' },
  
  // Americas Civilizations
  { id: 'teotihuacan', name: 'Teotihuacan', icon: 'SUN', siteId: 'teotihuacan', civilization: 'Mesoamerican' },
  { id: 'chichen-itza', name: 'Chichen Itza', icon: 'SER', siteId: 'chichen-itza', civilization: 'Maya' },
  { id: 'machu-picchu', name: 'Machu Picchu', icon: 'INC', siteId: 'machu-picchu', civilization: 'Inca' },
  { id: 'nazca-lines', name: 'Nazca Lines', icon: 'GEO', siteId: 'nazca-lines', civilization: 'Nazca' },
  
  // West African Civilizations
  { id: 'timbuktu-manuscripts', name: 'Timbuktu', icon: 'LIB', siteId: 'timbuktu', civilization: 'West African' },
  { id: 'ile-ife', name: 'Ile-Ife', icon: 'CRN', siteId: 'ile-ife', civilization: 'Yoruba' },
  { id: 'dhar-tichitt-settlement', name: 'Dhar Tichitt', icon: 'STN', siteId: 'dhar-tichitt', civilization: 'West African' },
  
  // Southern African Civilization
  { id: 'great-zimbabwe-ruins', name: 'Great Zimbabwe', icon: 'STN', siteId: 'great-zimbabwe', civilization: 'Southern African' },
  
  // North African Civilizations
  { id: 'tassili-rock-art', name: 'Tassili n\'Ajjer', icon: 'ART', siteId: 'tassili-najjer', civilization: 'North African' },
  { id: 'garama-capital', name: 'Garama', icon: 'DSR', siteId: 'garama', civilization: 'North African' }
]

// ========== CIVILIZATION COLORS ==========
export const civilizationColors = {
  Egyptian: 'from-amber-600 to-orange-600',
  Nubian: 'from-emerald-600 to-teal-600',
  Aksumite: 'from-blue-600 to-cyan-600',
  Phoenician: 'from-purple-600 to-pink-600',
  Babylonian: 'from-yellow-600 to-amber-600',
  Israelite: 'from-indigo-600 to-blue-600',
  Hittite: 'from-red-600 to-orange-600',
  Greek: 'from-cyan-600 to-blue-600',
  Mycenaean: 'from-amber-700 to-brown-600',
  Minoan: 'from-teal-600 to-green-600',
  Persian: 'from-purple-700 to-indigo-700',
  Etruscan: 'from-orange-700 to-red-700',
  Indian: 'from-saffron-600 to-orange-600',
  Chinese: 'from-red-700 to-gold-600',
  Mesoamerican: 'from-green-700 to-teal-600',
  Maya: 'from-jade-600 to-green-600',
  Inca: 'from-terracotta-600 to-orange-600',
  Nazca: 'from-desert-600 to-sand-600',
  WestAfrican: 'from-orange-600 to-yellow-600',
  NorthAfrican: 'from-amber-700 to-brown-600',
  SouthernAfrican: 'from-green-600 to-emerald-600',
  Yoruba: 'from-gold-600 to-amber-600'
}

// ========== HELPER FUNCTIONS ==========
// Helper function to get civilization from region
export function getCivilizationFromRegion(region: string): string {
  if (region.includes('Egypt')) return 'Egyptian'
  if (region.includes('Nubia') || region.includes('Kush')) return 'Nubian'
  if (region.includes('Ethiopia') || region.includes('Aksum')) return 'Aksumite'
  if (region.includes('Phoenicia') || region.includes('Carthage') || region.includes('North Africa')) return 'Phoenician'
  if (region.includes('Mesopotamia') || region.includes('Babylon') || region.includes('Iraq')) return 'Babylonian'
  if (region.includes('Judah') || region.includes('Israel') || region.includes('Canaan') || region.includes('Sinai')) return 'Israelite'
  if (region.includes('Anatolia') || region.includes('Hittite') || region.includes('Turkey')) return 'Hittite'
  if (region.includes('Greece') || region.includes('Crete') || region.includes('Santorini') || region.includes('Cyprus') || region.includes('Asia Minor')) return 'Greek'
  if (region.includes('Minoan')) return 'Minoan'
  if (region.includes('Mycenaean') || region.includes('Peloponnese')) return 'Mycenaean'
  if (region.includes('Persia') || region.includes('Iran')) return 'Persian'
  if (region.includes('Etruria') || region.includes('Italy')) return 'Etruscan'
  if (region.includes('Indus') || region.includes('India') || region.includes('Pakistan')) return 'Indian'
  if (region.includes('China')) return 'Chinese'
  if (region.includes('Mexico') || region.includes('Guatemala') || region.includes('Honduras')) return 'Mesoamerican'
  if (region.includes('Peru') || region.includes('Bolivia')) return 'Inca'
  if (region.includes('West Africa')) return 'WestAfrican'
  if (region.includes('Southern Africa')) return 'SouthernAfrican'
  if (region.includes('North Africa') && !region.includes('Egypt')) return 'NorthAfrican'
  return 'Ancient'
}

// Helper function to get featured sites by civilization
export function getFeaturedSitesByCivilization(civilization: string) {
  return featuredSites.filter(site => site.civilization === civilization)
}

// Helper function to get site count by civilization
export function getSiteCountByCivilization(): Record<string, number> {
  const counts: Record<string, number> = {}
  
  Object.values(sites).forEach(site => {
    const civ = getCivilizationFromRegion(site.region)
    counts[civ] = (counts[civ] || 0) + site.locations.length
  })
  
  return counts
}

// Total site count helper
export function getTotalSiteCount(): number {
  return Object.values(sites).reduce((total, site) => total + site.locations.length, 0)
}

// ========== SITE IDS BY TYPE FOR FILTERING ==========
export const siteIdsByType = {
  temples: Object.values(sites).flatMap(site => 
    site.locations.filter(loc => loc.type === 'temple').map(loc => loc.id)
  ),
  tombs: Object.values(sites).flatMap(site => 
    site.locations.filter(loc => loc.type === 'tomb').map(loc => loc.id)
  ),
  monuments: Object.values(sites).flatMap(site => 
    site.locations.filter(loc => loc.type === 'monument').map(loc => loc.id)
  ),
  cities: Object.values(sites).flatMap(site => 
    site.locations.filter(loc => loc.type === 'city').map(loc => loc.id)
  ),
  palaces: Object.values(sites).flatMap(site => 
    site.locations.filter(loc => loc.type === 'palace').map(loc => loc.id)
  )
}

// ========== SITE IDS BY DEITY FOR FILTERING ==========
export const siteIdsByDeity: Record<string, string[]> = {
  // Egyptian Deities
  Ra: ['great-pyramid', 'abu-simbel-temple', 'temple-ra'],
  'Amun-Ra': ['karnak-hypostyle', 'luxor-temple', 'red-chapel'],
  Osiris: ['temple-seti'],
  Isis: ['temple-isis'],
  Horus: ['great-sphinx', 'temple-horus', 'temple-horus-behbeit'],
  Anubis: ['anubis-temple-saqqara', 'shrine-anubis-valley', 'cynopolis-city'],
  Thoth: ['library-alexandria', 'temple-thoth', 'baboon-gallery'],
  Ptah: ['temple-ptah', 'serapeum', 'temple-ptah-karnak'],
  Hathor: ['nefertari-temple', 'temple-hathor', 'dendera-sanatorium'],
  Sobek: ['temple-sobek'],
  Bastet: ['temple-bastet'],
  Sekhmet: ['temple-sekhmet'],
  Khonsu: ['temple-khonsu'],
  Mut: ['mut-temple'],
  Montu: ['temple-montu'],
  Aten: ['crimson-amarna'],
  Neith: ['temple-neith'],
  Wadjet: ['temple-wadjet'],
  Nekhbet: ['temple-nekhbet'],
  Min: ['temple-min'],
  Sopdu: ['temple-sopdu'],
  Atum: ['temple-atum'],
  
  // Greek Deities
  Zeus: ['temple-zeus-olympia', 'temple-zeus-athens'],
  Hera: ['temple-hera-olympia'],
  Athena: ['acropolis-hill', 'parthenon-interior'],
  Apollo: ['oracle-delphi', 'temple-apollo-bassae'],
  Poseidon: ['temple-poseidon'],
  Demeter: ['telesterion'],
  Hephaestus: ['temple-hephaestus'],
  Dionysus: ['theatre-dionysus'],
  Artemis: ['temple-artemis'],
  Aphrodite: ['temple-aphrodite'],
  Ares: ['temple-ares'],
  Hermes: ['hermes-statue-olympia'],
  Leto: ['temple-letous'],
  
  // Hebrew/Israelite
  Yahweh: ['solomons-temple', 'second-temple', 'western-wall'],
  
  // Babylonian
  Marduk: ['babylon-city', 'etemenanki'],
  Ishtar: ['ishtar-gate-structure'],
  Nabu: ['borsippa-ziggurat'],
  Shamash: ['sippar-temple'],
  Nanna: ['ur-city', 'ur-temple'],
  
  // Phoenician
  Tanit: ['carthage-city', 'carthage-tophet', 'sarepta-workshops'],
  Melqart: ['tyre-island', 'tyre-temple'],
  Baalat: ['byblos-port'],
  Eshmun: ['sidon-city'],
  
  // Persian
  'Ahura Mazda': ['persepolis-apadana', 'takht-soleyman'],
  Anahita: ['qasr-shirin'],
  
  // Indian
  Shiva: ['kailasa-temple'],
  Buddha: ['mahabodhi-temple', 'longmen-grottoes', 'mogao-caves'],
  
  // Maya
  Kukulkan: ['chichen-itza'],
  Itzamna: ['tikal'],
  Chaac: ['uxmal'],
  
  // Inca
  Inti: ['cuzco'],
  Viracocha: ['tiwanaku']
}