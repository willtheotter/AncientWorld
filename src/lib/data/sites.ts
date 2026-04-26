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

// ========== SECTION 1: EGYPTIAN SITES (1-35) ==========
export const egyptianSites: Record<string, Site> = {
  // 1-2: Delta Region
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
        longDescription: `Large halls filled with scrolls and scholars create an atmosphere of intellectual activity. Sunlight enters through high openings, illuminating workspaces and reflecting off polished surfaces.`,
        image: '/images/sites/library.jpg',
        scene: 'The Library of Alexandria',
        visualHighlights: ['Great Hall of scrolls', 'Sunlight streaming through high windows', 'Scholars at work', 'Polished reflective surfaces'],
        deity: 'Thoth',
        type: 'city'
      }
    ]
  },
  
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
        longDescription: `The Temple of Bastet at Bubastis was one of the most beautiful in Egypt, described by Herodotus as surrounded by water on three sides. The temple hosted the largest festival in Egypt, drawing over 700,000 pilgrims who celebrated with music, dance, and wine.`,
        image: '/images/sites/bubastis.jpg',
        scene: 'The Festival City of Bastet',
        visualHighlights: ['Temple surrounded by canals', 'Procession with cat-headed goddess statue', 'Pilgrim crowds celebrating with music', 'Cat statues flanking pylons', 'Sacred cat cemetery'],
        deity: 'Bastet',
        type: 'temple'
      }
    ]
  },
  
  // 3-5: Giza Region
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
        longDescription: `In the stillness of a desert night, the pyramid rises as a perfect geometric form—its polished Tura limestone casing reflecting moonlight with a soft, almost ethereal glow.`,
        image: '/images/sites/pyramid.jpg',
        scene: 'The Night of the Luminous Pyramid',
        visualHighlights: ['Polished limestone reflecting moonlight', 'Electrum cap catching starlight', 'Milky Way mirrored on pyramid faces', 'Flickering fires at ground level'],
        deity: 'Ra',
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
        deity: 'Horus',
        type: 'monument'
      }
    ]
  },
  
  // 6-9: Memphis Region
  memphis: {
    id: 'memphis',
    name: 'Memphis',
    coordinates: [29.8447, 31.2509],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'temple-ptah',
        name: 'Temple of Ptah',
        description: 'Great temple of the creator god',
        longDescription: `The Temple of Ptah was the religious center of Memphis, dedicated to the god who created the universe through thought and speech. The temple complex housed a massive statue of Ptah and was a major pilgrimage site.`,
        image: '/images/sites/memphis-ptah.jpg',
        scene: 'The Creator God\'s Sanctuary',
        visualHighlights: ['Massive statue of Ptah', 'Creator god theology', 'Reliefs of divine creation', 'Pilgrimage destination'],
        deity: 'Ptah',
        type: 'temple'
      },
      {
        id: 'serapeum',
        name: 'Serapeum of Memphis',
        description: 'Underground galleries of sacred Apis bulls',
        longDescription: `The Serapeum housed the mummified remains of the sacred Apis bulls, manifestations of the god Ptah. Vast underground galleries contain massive granite sarcophagi weighing up to 70 tons.`,
        image: '/images/sites/serapeum.jpg',
        scene: 'The Tomb of the Apis Bulls',
        visualHighlights: ['Massive granite sarcophagi', 'Underground galleries', 'Apis bull burials', 'Ptah manifestations'],
        deity: 'Ptah',
        type: 'tomb'
      },
      {
        id: 'step-pyramid',
        name: 'Step Pyramid of Djoser',
        description: 'The earliest monumental stone architecture',
        longDescription: `The Step Pyramid, designed by Imhotep, marks the transition from mastaba tombs to true pyramids—Egypt's first massive stone structure.`,
        image: '/images/sites/step-pyramid.jpg',
        scene: 'The First Pyramid',
        visualHighlights: ['Six-tiered structure', 'Limestone casing', 'Mortuary temple complex', 'Imhotep\'s architectural innovation'],
        type: 'monument'
      }
    ]
  },
  
  // 10: Saqqara - Temple of Anubis
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
        longDescription: `The Temple of Anubis at Saqqara stands near the Step Pyramid, dedicated to the jackal god of embalming and the afterlife. Underground catacombs contain thousands of mummified dogs and jackals, offered by pilgrims seeking Anubis's protection.`,
        image: '/images/sites/anubis-temple.jpg',
        scene: 'The House of the Jackal God',
        visualHighlights: ['Jackal statues lining causeway', 'Underground dog mummy galleries', 'Priests in jackal masks', 'Embalming tables with natron salts', 'Torchlit sanctuary'],
        deity: 'Anubis',
        type: 'temple'
      }
    ]
  },
  
  // 11-12: Heliopolis
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
        longDescription: `Heliopolis was the center of sun worship, where Ra was worshipped as the creator of the universe. The temple complex featured multiple obelisks representing petrified rays of sunlight.`,
        image: '/images/sites/heliopolis.jpg',
        scene: 'The City of the Sun',
        visualHighlights: ['Multiple obelisks', 'Open-air sun altar', 'Priests reciting dawn hymns', 'Solar barque chapel', 'Sacred Benben stone'],
        deity: 'Ra',
        type: 'temple'
      },
      {
        id: 'temple-atum',
        name: 'Temple of Atum',
        description: 'Creator god of the Heliopolitan Ennead',
        longDescription: `Atum was the creator god of Heliopolis, the evening sun ready to journey through the underworld. The temple contained the "Benben Stone"—the sacred meteorite that was the cult's oldest object.`,
        image: '/images/sites/atum.jpg',
        scene: 'The Evening Sun\'s Sanctuary',
        visualHighlights: ['Atum statue with double crown', 'Benben stone shrine', 'Ennead relief with nine deities', 'Evening solar barque shrine'],
        deity: 'Atum',
        type: 'temple'
      }
    ]
  },
  
  // 13-18: Karnak Temple
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
        longDescription: `The Hypostyle Hall presents a dense forest of colossal columns, each covered in painted reliefs. The ceiling above, painted a rich blue with golden stars, evokes the night sky.`,
        image: '/images/sites/karnak.jpg',
        scene: 'The Hypostyle Hall at Karnak',
        visualHighlights: ['134 massive columns', 'Beams of light through clerestory windows', 'Blue ceiling with golden stars', 'Incense-filled shafts of light'],
        deity: 'Amun-Ra',
        type: 'temple'
      },
      {
        id: 'karnak-sacred-lake',
        name: 'Sacred Lake at Karnak',
        description: 'Ritual purification waters',
        longDescription: `The sacred lake was used by priests for ritual washing before ceremonies. The waters reflect the temple architecture.`,
        image: '/images/sites/sacred-lake.jpg',
        scene: 'The Waters of Purification',
        visualHighlights: ['Perfect architectural reflections', 'Temple mirroring', 'Ritual washing area', 'Sacred geese'],
        deity: 'Amun-Ra',
        type: 'temple'
      },
      {
        id: 'temple-khonsu',
        name: 'Temple of Khonsu',
        description: 'Sanctuary of the moon god',
        longDescription: `The Temple of Khonsu at Karnak is a well-preserved temple dedicated to the moon god, associated with healing, exorcism, and time measurement. The temple's astronomical ceiling depicts lunar cycles.`,
        image: '/images/sites/khonsu.jpg',
        scene: 'The Moon God\'s Sanctuary',
        visualHighlights: ['Hypostyle hall with astronomical ceiling', 'Barque sanctuary', 'Healing dream incubation chambers', 'Lunar cycle reliefs'],
        deity: 'Khonsu',
        type: 'temple'
      },
      {
        id: 'red-chapel',
        name: 'Red Chapel of Hatshepsut',
        description: 'Alabaster barque shrine of Amun-Ra',
        longDescription: `The Red Chapel was Hatshepsut's magnificent barque shrine, built of red quartzite and black diorite, decorated with reliefs including the famous Punt Expedition scenes.`,
        image: '/images/sites/red-chapel.jpg',
        scene: 'Hatshepsut\'s Alabaster Barque Shrine',
        visualHighlights: ['Red quartzite walls with Punt reliefs', 'Black diorite door frames', 'Opet Festival scenes', 'Egyptian-Punt contact scenes'],
        deity: 'Amun-Ra',
        type: 'temple'
      },
      {
        id: 'temple-ptah-karnak',
        name: 'Temple of Ptah at Karnak',
        description: 'Northern precinct dedicated to the creator god',
        longDescription: `The Temple of Ptah at Karnak lies in the northern precinct, featuring a peristyle court with columns inscribed by the 25th Dynasty Kushite pharaohs.`,
        image: '/images/sites/ptah-karnak.jpg',
        scene: 'The Creator God of Memphis',
        visualHighlights: ['Peristyle court with Kushite reliefs', 'Naos shrine with divine triad', 'Mudbrick enclosure walls'],
        deity: 'Ptah',
        type: 'temple'
      },
      {
        id: 'mut-karnak',
        name: 'Temple of Mut',
        description: 'Sanctuary of the vulture goddess',
        longDescription: `The Temple of Mut lies south of Karnak, surrounded by a horseshoe-shaped sacred lake. The temple featured 600 black granite statues of Sekhmet.`,
        image: '/images/sites/mut-temple.jpg',
        scene: 'The Vulture Goddess of Thebes',
        visualHighlights: ['600 Sekhmet statues', 'U-shaped sacred lake', 'Punt Hall reliefs', 'God\'s Wife palace'],
        deity: 'Mut',
        type: 'temple'
      }
    ]
  },
  
  // 19: Luxor Temple
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
        longDescription: `The Opet Festival transforms the city into a vibrant, kinetic environment. Priests carry sacred barques containing the statues of the gods, their surfaces adorned with gold.`,
        image: '/images/sites/luxor.jpg',
        scene: 'The Festival of Opet Procession',
        visualHighlights: ['Golden barques', 'Musicians and dancers', 'Incense clouds', 'Festival crowds'],
        deity: 'Amun-Ra',
        type: 'temple'
      }
    ]
  },
  
  // 20: Temple of Sekhmet
  memphisSekhmet: {
    id: 'sekhmet-temple',
    name: 'Temple of Sekhmet',
    coordinates: [29.8447, 31.253],
    region: 'Egypt - Memphis',
    locations: [
      {
        id: 'temple-sekhmet',
        name: 'Temple of Sekhmet',
        description: 'The lioness goddess of war and healing',
        longDescription: `The Temple of Sekhmet at Memphis contained hundreds of life-size statues of Sekhmet, seated on thrones with a lioness head and sun disk. Pilgrims came seeking cures from the goddess.`,
        image: '/images/sites/sekhmet.jpg',
        scene: 'The Temple of the Powerful One',
        visualHighlights: ['Rows of lioness-headed statues', 'Healing ritual chambers', 'Offerings of bread and beer', 'Plague inscriptions'],
        deity: 'Sekhmet',
        type: 'temple'
      }
    ]
  },
  
  // 21: Temple of Thoth at Hermopolis
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
        longDescription: `Hermopolis was the cult center of Thoth, the god of writing and wisdom. The temple library contained thousands of papyrus scrolls on magic, medicine, and astronomy.`,
        image: '/images/sites/hermopolis.jpg',
        scene: 'The House of the Ibis God',
        visualHighlights: ['Ibis-headed Thoth statues', 'Baboon reliefs', 'Temple library with papyrus archives', 'Ogdoad creation reliefs'],
        deity: 'Thoth',
        type: 'temple'
      }
    ]
  },
  
  // 22: Temple of Neith at Sais
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
        longDescription: `Sais was the cult center of Neith, the great mother goddess of weaving, wisdom, and warfare. The temple's inscription "I am all that has been, and is, and shall be" inspired later philosophy.`,
        image: '/images/sites/sais.jpg',
        scene: 'The Veiled Goddess of Sais',
        visualHighlights: ['Massive temple enclosure', 'Sacred lake with night ceremonies', 'Neith cult statue covered in veil', 'Osiris tomb mound'],
        deity: 'Neith',
        type: 'temple'
      }
    ]
  },
  
  // 23: Temple of Horus at Behbeit
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
        longDescription: `The Temple of Horus at Behbeit el-Hagar was the Delta counterpart to Edfu, featuring the famous "Horus on the Crocodiles" healing stelae.`,
        image: '/images/sites/behbeit.jpg',
        scene: 'The Granite Fragments of Horus',
        visualHighlights: ['Massive granite blocks', 'Horus falcon reliefs', 'Healing stelae', 'King offering scenes'],
        deity: 'Horus',
        type: 'temple'
      }
    ]
  },
  
  // 24: Shrine of Anubis
  shrineAnubis: {
    id: 'shrine-anubis',
    name: 'Shrine of Anubis',
    coordinates: [25.74, 32.61],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'shrine-anubis-valley',
        name: 'Shrine of Anubis',
        description: 'Guardian of the Necropolis',
        longDescription: `The Shrine of Anubis sits at the Valley of the Kings entrance, a small limestone chapel dedicated to the jackal god who guarded the royal tombs. A black jackal statue with electrum eyes sat inside.`,
        image: '/images/sites/anubis-shrine.jpg',
        scene: 'The Jackal Shrine at the Valley of the Kings',
        visualHighlights: ['Black jackal statue with electrum eyes', 'Torchlit sanctuary', 'Anubis weighing the heart reliefs', 'Pilgrim stelae'],
        deity: 'Anubis',
        type: 'tomb'
      }
    ]
  },
  
  // 25: Cynopolis
  cynopolis: {
    id: 'cynopolis',
    name: 'Cynopolis',
    coordinates: [28.55, 30.7167],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'cynopolis-city',
        name: 'Cynopolis (City of the Dog)',
        description: 'Center of Anubis worship in Upper Egypt',
        longDescription: `Cynopolis was the cult center of Anubis in Upper Egypt. The city's necropolis contained vast numbers of mummified dogs and jackals, offered by pilgrims seeking Anubis's protection.`,
        image: '/images/sites/cynopolis.jpg',
        scene: 'The City of the Jackal God',
        visualHighlights: ['Temple of Anubis with jackal colonnade', 'Stacked mummified dog galleries', 'Funerary stelae with jackal imagery'],
        deity: 'Anubis',
        type: 'city'
      }
    ]
  },
  
  // 26-27: Dendera
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
        longDescription: `Hathor-headed columns, painted in rich blues and greens, contrast with golden highlights. The interior ceilings display the famous Dendera Zodiac.`,
        image: '/images/sites/dendera.jpg',
        scene: 'The Golden House of Hathor',
        visualHighlights: ['Hathor-headed columns', 'Painted astronomical ceiling', 'Dendera Zodiac', 'Crypts with treasures'],
        deity: 'Hathor',
        type: 'temple'
      },
      {
        id: 'dendera-sanatorium',
        name: 'Sanatorium of Dendera',
        description: 'Healing center dedicated to Hathor',
        longDescription: `The Sanatorium of Dendera was a healing center where pilgrims sought cures through incubation dreams, sleeping in chambers within the temple precinct.`,
        image: '/images/sites/dendera-healing.jpg',
        scene: 'The Temple as Healing Center',
        visualHighlights: ['Incubation sleep platforms', 'Water basins for blessed liquid', 'Healing statue niche', 'Priest-doctors'],
        deity: 'Hathor',
        type: 'temple'
      }
    ]
  },
  
  // 28: Temple of Montu
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
        longDescription: `Medamud was dedicated to Montu, the falcon-headed war god. The temple features a unique "Burial Chamber" with reliefs of Montu as a bull—his animal form.`,
        image: '/images/sites/medamud.jpg',
        scene: 'The Falcon War God\'s Sanctuary',
        visualHighlights: ['Montu bull reliefs', 'Painted hypostyle columns', 'Birth House scenes', 'Sphinx avenue'],
        deity: 'Montu',
        type: 'temple'
      }
    ]
  },
  
  // 29-30: Abu Simbel
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
        longDescription: `At a precise moment each year, the rising sun penetrates the temple's entrance, illuminating the statues of the gods. Ptah remains in shadow.`,
        image: '/images/sites/abu-simbel.jpg',
        scene: 'The Miracle of the Sun',
        visualHighlights: ['Sun beam penetrating depths', 'Activating pigments and gold', 'Illuminated statues', 'Ptah in shadow'],
        deity: 'Ra',
        type: 'temple'
      },
      {
        id: 'nefertari-temple',
        name: 'Temple of Hathor at Abu Simbel',
        description: 'Dedicated to Ramses II\'s beloved queen',
        longDescription: `The smaller temple at Abu Simbel is dedicated to Hathor and Queen Nefertari, with six colossal statues adorning the facade.`,
        image: '/images/sites/nefertari-temple.jpg',
        scene: 'The Queen\'s Sanctuary',
        visualHighlights: ['Six colossal statues', 'Hathor-headed columns', 'Queen Nefertari imagery'],
        deity: 'Hathor',
        type: 'temple'
      }
    ]
  },
  
  // 31: Edfu
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
        longDescription: `Best-preserved temple in Egypt. Massive falcon statues flank the entrance, and dramatic reliefs depict Horus defeating Seth.`,
        image: '/images/sites/edfu.jpg',
        scene: 'The Falcon God\'s House',
        visualHighlights: ['Massive falcon statues', 'Dramatic Horus vs Seth reliefs', 'Towering pylons', 'Solar ritual spaces'],
        deity: 'Horus',
        type: 'temple'
      }
    ]
  },
  
  // 32: Kom Ombo
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
        longDescription: `A double temple perfectly symmetrical—half dedicated to Sobek (crocodile god), half to Horus the Elder. The site contains crocodile mummies.`,
        image: '/images/sites/kom-ombo.jpg',
        scene: 'The Symmetrical Sanctuary',
        visualHighlights: ['Symmetrical dual temple', 'Crocodile mummies', 'Medical instruments relief', 'Mirrored sanctuaries'],
        deity: 'Sobek',
        type: 'temple'
      }
    ]
  },
  
  // 33: Philae
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
        longDescription: `Philae was one of the last places where Egyptian religion survived into the Roman era, glowing at sunrise and sunset, reflecting in the Nile—symbolizing Isis as a nurturing and cosmic force.`,
        image: '/images/sites/philae.jpg',
        scene: 'The Island of Isis',
        visualHighlights: ['Island temple setting', 'Sunrise and sunset reflections', 'Kiosk of Trajan', 'Last hieroglyphic inscriptions'],
        deity: 'Isis',
        type: 'temple'
      }
    ]
  },
  
  // 34: Abydos
  abydos: {
    id: 'abydos',
    name: 'Abydos',
    coordinates: [26.185, 31.919],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'temple-seti',
        name: 'Temple of Seti I',
        description: 'Spiritual center of Osiris worship',
        longDescription: `Abydos was the spiritual center of Osiris worship. The Temple of Seti I features deeply carved reliefs, including the Abydos King List.`,
        image: '/images/sites/abydos.jpg',
        scene: 'The Cult of Osiris',
        visualHighlights: ['Deeply carved reliefs', 'Abydos King List', 'Osireion', 'Pilgrimage site'],
        deity: 'Osiris',
        type: 'temple'
      }
    ]
  },
  
  // 35: Valley of the Kings
  valleyKings: {
    id: 'valley-kings',
    name: 'Valley of the Kings',
    coordinates: [25.746, 32.629],
    region: 'Egypt - Thebes',
    locations: [
      {
        id: 'valley-kings',
        name: 'Valley of the Kings',
        description: 'Royal burial ground of the pharaohs',
        longDescription: `In dimly lit chambers, priests performed ritual actions to restore the senses of the deceased. Torchlight flickers across gold surfaces.`,
        image: '/images/sites/valley-kings.jpg',
        scene: 'The Royal Necropolis',
        visualHighlights: ['Subterranean tombs', 'Flickering torchlight', 'Gold burial goods', 'Solemn ceremonial atmosphere'],
        type: 'tomb'
      },
      {
        id: 'tutankhamun-tomb',
        name: 'Tomb of Tutankhamun',
        description: 'The most intact royal tomb ever found',
        longDescription: `Discovered by Howard Carter in 1922, Tutankhamun's tomb was filled with over 5,000 objects—golden shrines, jewelry, chariots, and the famous death mask.`,
        image: '/images/sites/tutankhamun.jpg',
        scene: 'The Boy King\'s Treasure',
        visualHighlights: ['Golden death mask', 'Canopic chest', 'Painted burial chamber', 'Over 5,000 artifacts'],
        type: 'tomb'
      },
      {
        id: 'nefertari-tomb',
        name: 'Tomb of Nefertari',
        description: 'The Prism Chamber of vivid paintings',
        longDescription: `Every surface of the chamber is covered in pristine, vividly colored paintings. Gold details shimmer under light, while the ceiling evokes a star-filled sky.`,
        image: '/images/sites/nefertari.jpg',
        scene: 'The Queen\'s Immortal Art',
        visualHighlights: ['Pristine colored paintings', 'Gold details shimmering', 'Star-filled ceiling', 'Immersive narrative artwork'],
        type: 'tomb'
      }
    ]
  }
}

// ========== SECTION 2: FAYUM & AMARNA (36-37) ==========
export const additionalEgyptianSites: Record<string, Site> = {
  fayum: {
    id: 'fayum',
    name: 'Faiyum Oasis',
    coordinates: [29.3084, 30.8428],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'malachite-gardens',
        name: 'Malachite Gardens',
        description: 'Lush green fields contrasting with the desert',
        longDescription: `Green fields, irrigation canals, and cultivated land create a striking contrast with surrounding desert. The landscape emphasizes abundance and agricultural success.`,
        image: '/images/sites/fayum.jpg',
        scene: 'The Oasis Gardens',
        visualHighlights: ['Vibrant green fields', 'Irrigation canals', 'Desert contrast', 'Agricultural abundance'],
        type: 'city'
      }
    ]
  },
  
  amarna: {
    id: 'amarna',
    name: 'Amarna',
    coordinates: [27.645, 30.904],
    region: 'Egypt - Upper Egypt',
    locations: [
      {
        id: 'crimson-amarna',
        name: 'The Crimson Arrival at Amarna',
        description: 'The experimental city of sun worship',
        longDescription: `Bathed in warm red and orange tones, the city presents a striking departure from traditional Egyptian architecture—open-air temples and sunlight-defining spaces.`,
        image: '/images/sites/amarna.jpg',
        scene: 'The Sun City of Akhenaten',
        visualHighlights: ['Open-air temples', 'Sun altar offerings', 'Amarna art style', 'Revolutionary architecture'],
        deity: 'Aten',
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 3: NUBIA & KUSH (38-44) ==========
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
        longDescription: `A dramatic sandstone formation rises from the desert—the sacred mountain of Jebel Barkal. The Kushites believed this was where the god Amun resided, making it the religious heart of the Kingdom of Kush.`,
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
        longDescription: `Unlike the smooth-sided pyramids of Egypt, the Meroë pyramids are steep, narrow, and distinctly Kushite. Over 200 pyramids stand in the desert, their red sandstone glowing in the setting sun.`,
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
        longDescription: `The massive mudbrick structure known as the Western Deffufa dominates the ancient city of Kerma. This 18-meter-high temple served as the religious center of the earliest kingdom in Nubia.`,
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
        longDescription: `Napata was the southern capital of the Kingdom of Kush, where the Black Pharaohs of the 25th Dynasty originated, blending Egyptian and Kushite traditions.`,
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
        longDescription: `Aksum was the capital of a powerful trading empire that controlled Red Sea trade routes between Rome and India. The city's wealth came from ivory, gold, frankincense, and myrrh.`,
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
        longDescription: `The obelisks of Aksum are among the largest monolithic stones ever erected. The tallest standing obelisk rises 24 meters, carved with detailed windows and doors representing multi-story palaces.`,
        image: '/images/sites/axum-obelisks.jpg',
        scene: 'The Stone Giants of Aksum',
        visualHighlights: ['24-meter carved obelisk', 'Palace-style stone architecture', 'Royal burial markers', 'Fallen Great Obelisk'],
        type: 'monument'
      }
    ]
  }
}

// ========== SECTION 4: RED SEA & PUNT (45-50) ==========
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
        longDescription: `Wadi Gawasis was Egypt's gateway to the Red Sea and the Land of Punt. Excavations have revealed perfectly preserved ship timbers, anchors, and expedition inscriptions.`,
        image: '/images/sites/wadi-gawasis.jpg',
        scene: 'Egypt\'s Ancient Red Sea Port',
        visualHighlights: ['Ship timbers', 'Cave storage galleries', 'Expedition inscriptions', 'Nile-Red Sea connection'],
        type: 'city'
      }
    ]
  },
  
  adulis: {
    id: 'adulis',
    name: 'Adulis',
    coordinates: [15.267, 39.667],
    region: 'Red Sea Coast',
    locations: [
      {
        id: 'adulis-port',
        name: 'Port of Adulis',
        description: 'Major Red Sea trade hub of the ancient world',
        longDescription: `Adulis was the greatest port on the Red Sea during antiquity, serving as the gateway for trade between the Mediterranean, Africa, and India.`,
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
    region: 'Horn of Africa',
    locations: [
      {
        id: 'opone-port',
        name: 'Ancient Opone',
        description: 'Trading port for incense and exotic goods',
        longDescription: `Located on the Somali coast, Opone was a major trading port for incense, aromatic gums, and exotic animals. The site includes an artificial island connected by causeway.`,
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
        longDescription: `The rugged coastline of Eritrea matches descriptions of Punt in Egyptian texts—steep mountains descending to the Red Sea, matching Hatshepsut's relief depictions.`,
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
        longDescription: `The Somali coast, with its frankincense and myrrh production, represents the eastern extension of the Punt trade network. Ancient trading ports connected Africa to Arabia, Persia, and India.`,
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
        longDescription: `The Red Sea was the superhighway of the ancient world, connecting Egypt to the riches of Africa, Arabia, and India. Controlling the Red Sea meant controlling world trade.`,
        image: '/images/sites/red-sea.jpg',
        scene: 'The Ancient Maritime Highway',
        visualHighlights: ['Turquoise coral waters', 'Ancient ship routes', 'Coastal trading ports', 'Monsoon wind patterns'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 5: PHOENICIANS (51-56) ==========
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
        longDescription: `Tyre was the greatest of the Phoenician cities, built on an island fortress. Its twin harbors made Tyre the wealthiest city in the ancient world, famous for purple dye.`,
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
        longDescription: `Sidon was one of the oldest and wealthiest Phoenician cities, famous for glass production, purple dye, and skilled sailors. Glassblowing was perfected here.`,
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
        longDescription: `Byblos was the most ancient Phoenician city, with continuous habitation since 5000 BCE. It was Egypt's primary trade partner, importing cedar wood for Egyptian tombs.`,
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
        longDescription: `Carthage was the greatest Phoenician colony, founded by Tyre in 814 BCE. It grew into a Mediterranean empire that rivaled Rome, controlling North Africa, Spain, and Mediterranean islands.`,
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
        longDescription: `Motya was a wealthy Phoenician colony on an island off western Sicily, serving as a waystation between Carthage, Italy, and the Greek world.`,
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
        longDescription: `Sarepta was a major industrial center for Phoenician crafts, with workshops for purple dye, metalworking, pottery, and olive oil production.`,
        image: '/images/sites/sarepta.jpg',
        scene: 'The Industrial Heart of Phoenicia',
        visualHighlights: ['Dye production facilities', 'Metalworking workshops', 'Pottery kilns', 'Phoenician sanctuary'],
        deity: 'Tanit',
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 6: BABYLONIANS (57-63) ==========
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
        longDescription: `Babylon was the greatest city of ancient Mesopotamia, protected by massive double walls. Under Nebuchadnezzar II, it reached its peak with the Ishtar Gate and Hanging Gardens.`,
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
        longDescription: `The Ishtar Gate was Babylon's most magnificent structure, a blue-glazed brick archway decorated with over 120 molded lions, dragons, and aurochs.`,
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
        longDescription: `Etemenanki was the great ziggurat of Babylon, a seven-tiered tower rising 91 meters, likely inspiring the biblical Tower of Babel story.`,
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
        longDescription: `Borsippa was Babylon's sister city, with a massive ziggurat dedicated to Nabu, god of writing and wisdom, making it a center for scribal training.`,
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
        longDescription: `Sippar was the center of sun god Shamash worship in Babylonia, housing the most important cult statue of Shamash, consulted for oracles and legal decisions.`,
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
        longDescription: `Ur was one of the most ancient cities of Mesopotamia, dating to 3800 BCE. The Royal Cemetery yielded spectacular treasures—gold helmets, the Standard of Ur, and elaborate lyres.`,
        image: '/images/sites/ur.jpg',
        scene: 'The Ancient City of Abraham',
        visualHighlights: ['Ziggurat of Nanna', 'Royal Cemetery treasures', 'Standard of Ur mosaic', 'Abraham\'s traditional birthplace'],
        deity: 'Nanna',
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 7: HEBREWS (64-69) ==========
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
        longDescription: `Jerusalem was the capital of the united Kingdom of Israel and later Judah, built on a hilltop. The City of David features the Gihon Spring—Jerusalem's water source for millennia.`,
        image: '/images/sites/jerusalem.jpg',
        scene: 'The Golden City on the Hill',
        visualHighlights: ['City of David', 'Temple Mount', 'Gihon Spring', 'Defensive walls'],
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
        longDescription: `The Temple Mount was the holiest site in ancient Israel, where Solomon built the First Temple to house the Ark of the Covenant.`,
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
        longDescription: `The City of David is the original hilltop settlement that became Jerusalem, where King David made his capital and brought the Ark of the Covenant.`,
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
        longDescription: `Hebron is one of the most ancient cities, traditionally associated with Abraham, Isaac, and Jacob. The Cave of Machpelah is the traditional tomb of the patriarchs.`,
        image: '/images/sites/hebron.jpg',
        scene: 'The City of the Patriarchs',
        visualHighlights: ['Cave of Machpelah', 'Herodian enclosure', 'Ancient city walls', 'Oak of Abraham'],
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
        longDescription: `Mount Sinai is traditionally identified with the mountain where Moses received the Ten Commandments, its red granite peak rising dramatically from the desert.`,
        image: '/images/sites/mount-sinai.jpg',
        scene: 'The Mountain of Divine Revelation',
        visualHighlights: ['Red granite peak', 'Moses\' ascent path', 'Saint Catherine\'s Monastery', 'Burning Bush tradition'],
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
        longDescription: `Lachish was the second most important city in Judah after Jerusalem, guarding the approaches to the capital. The Assyrians under Sennacherib besieged it in 701 BCE.`,
        image: '/images/sites/lachish.jpg',
        scene: 'The Fortress of Judah',
        visualHighlights: ['Double defensive walls', 'Assyrian siege ramp', 'Palace-fort', 'Lachish Letters archive'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 8: HITTITES & CONFLICT ZONE (70-74) ==========
export const invaderSites: Record<string, Site> = {
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
        longDescription: `Hattusa was the imposing capital of the Hittite Empire, with massive stone walls—6 km of walls with towers and gates—housing the royal archives with thousands of clay tablets.`,
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
        longDescription: `Kadesh was the site of the greatest chariot battle in ancient history (1274 BCE) between Ramesses II and the Hittite king Muwatalli II, resulting in the world's first recorded peace treaty.`,
        image: '/images/sites/kadesh-battle.jpg',
        scene: 'The Chariot Battle of the Ages',
        visualHighlights: ['Orontes River valley', 'Fortress ruins', 'Battle memorials', 'Peace treaty tablet'],
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
        longDescription: `Ugarit was a wealthy Bronze Age port city destroyed during the Sea Peoples' invasions around 1190 BCE, preserving its final moments like a Pompeii of ancient Syria.`,
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
        longDescription: `Megiddo guards the Aruna Pass, the most important route between Egypt and Mesopotamia, having witnessed more battles than any other location on earth.`,
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
        longDescription: `Alalakh was a prosperous city in the Amuq Valley, controlling trade between Mesopotamia, Anatolia, and the Mediterranean, with thousands of clay tablets found at the site.`,
        image: '/images/sites/alalakh.jpg',
        scene: 'The Merchant Prince\'s City',
        visualHighlights: ['Palace of Yarim-Lim', 'Trade contract tablets', 'Fortification walls', 'Temple precinct'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 9: GREEK & AEGEAN (75-90) ==========
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
        description: 'Iconic sanctuary of Athena',
        longDescription: `The Acropolis rises dramatically above Athens, transformed into the greatest sanctuary of ancient Greece, with the Parthenon, Erechtheion, and Propylaea forming a unified architectural masterpiece.`,
        image: '/images/sites/acropolis.jpg',
        scene: 'The Sacred Rock of Athens',
        visualHighlights: ['Parthenon', 'Propylaea gateway', 'Erechtheion Caryatids', 'Temple of Athena Nike'],
        deity: 'Athena',
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
        id: 'temple-zeus-olympia',
        name: 'Temple of Zeus',
        description: 'Home of the gold and ivory Zeus statue',
        longDescription: `The Temple of Zeus at Olympia contained one of the Seven Wonders—the gold and ivory statue of Zeus by Pheidias, 12 meters tall.`,
        image: '/images/sites/zeus-olympia.jpg',
        scene: 'The Statue of Zeus at Olympia',
        visualHighlights: ['Gold and ivory Zeus statue', 'Pheidias\' workshop', 'Olympic flame altar'],
        deity: 'Zeus',
        type: 'temple'
      },
      {
        id: 'temple-hera-olympia',
        name: 'Temple of Hera',
        description: 'Oldest temple at Olympia',
        longDescription: `The Temple of Hera (600 BCE) is the oldest temple at Olympia, where the Olympic flame is still lit using a parabolic mirror.`,
        image: '/images/sites/hera-olympia.jpg',
        scene: 'The Queen of the Gods',
        visualHighlights: ['Olympic flame lighting', 'Original wooden column', 'Hermes of Praxiteles'],
        deity: 'Hera',
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
        name: 'Sanctuary of Apollo',
        description: 'Site of the Delphic Oracle',
        longDescription: `Delphi was the most sacred site in ancient Greece—the omphalos (navel) of the world—where the Pythia uttered prophecies.`,
        image: '/images/sites/delphi.jpg',
        scene: 'The Oracle of Apollo',
        visualHighlights: ['Temple of Apollo', 'Omphalos stone', 'Sacred Way', 'Mountain amphitheater'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  },
  
  sounion: {
    id: 'sounion',
    name: 'Cape Sounion',
    coordinates: [37.65, 24.026],
    region: 'Greece',
    locations: [
      {
        id: 'temple-poseidon',
        name: 'Temple of Poseidon',
        description: 'Poseidon\'s sanctuary overlooking the Aegean',
        longDescription: `The Temple of Poseidon at Cape Sounion stands on a 60-meter cliff, visible to sailors approaching Athens.`,
        image: '/images/sites/sounion.jpg',
        scene: 'The Temple by the Aegean',
        visualHighlights: ['Sunset through columns', 'Lord Byron\'s signature', 'Cliff-edge location'],
        deity: 'Poseidon',
        type: 'temple'
      }
    ]
  },
  
  ephesus: {
    id: 'ephesus',
    name: 'Ephesus',
    coordinates: [37.939, 27.341],
    region: 'Asia Minor',
    locations: [
      {
        id: 'temple-artemis',
        name: 'Temple of Artemis',
        description: 'One of the Seven Wonders',
        longDescription: `The Temple of Artemis at Ephesus was one of the Seven Wonders, the largest Greek temple ever built (110 by 55 meters, 127 columns).`,
        image: '/images/sites/ephesus-artemis.jpg',
        scene: 'The Great Temple of Artemis',
        visualHighlights: ['Standing reconstructed column', 'Many-breasted cult statue', 'Roman altar relief'],
        deity: 'Artemis',
        type: 'temple'
      }
    ]
  },
  
  paphos: {
    id: 'paphos',
    name: 'Paphos',
    coordinates: [34.757, 32.412],
    region: 'Cyprus',
    locations: [
      {
        id: 'temple-aphrodite',
        name: 'Sanctuary of Aphrodite',
        description: 'Birthplace of the goddess of love',
        longDescription: `Paphos was the legendary birthplace of Aphrodite (Venus), emerging from sea foam, with a sanctuary operating from 1200 BCE to the 4th century CE.`,
        image: '/images/sites/paphos.jpg',
        scene: 'The Birthplace of Love',
        visualHighlights: ['Conical black stone cult statue', 'Pilgrim offerings', 'Sacred grove with doves'],
        deity: 'Aphrodite',
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
        description: 'Labyrinthine palace of King Minos',
        longDescription: `Knossos, the legendary palace of King Minos, is Europe's oldest city—a sprawling maze of rooms, corridors, and light wells.`,
        image: '/images/sites/knossos.jpg',
        scene: 'The Palace of the Minotaur',
        visualHighlights: ['Throne Room', 'Dolphin fresco', 'Light well architecture', 'Linear B tablets'],
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
        description: 'Minoan city preserved in volcanic ash',
        longDescription: `Akrotiri was a prosperous Minoan city on Santorini, buried under volcanic ash around 1600 BCE, preserving multi-story buildings and stunning frescoes.`,
        image: '/images/sites/akrotiri.jpg',
        scene: 'The Minoan Pompeii',
        visualHighlights: ['Multi-story buildings', 'Frescoes', 'Advanced plumbing', 'Volcanic ash layer'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 10: CENTRAL & SOUTHERN AFRICA (91-100) ==========
export const centralAfricaSites: Record<string, Site> = {
  greatZimbabwe: {
    id: 'great-zimbabwe',
    name: 'Great Zimbabwe',
    coordinates: [-20.2667, 30.9333],
    region: 'Southern Africa',
    locations: [
      {
        id: 'great-zimbabwe-ruins',
        name: 'Great Zimbabwe',
        description: 'Massive stone enclosure of the Shona kingdom',
        longDescription: `Great Zimbabwe was the capital of the Shona kingdom, with massive granite walls built without mortar. The Great Enclosure's conical tower served as a royal palace or ritual center.`,
        image: '/images/sites/great-zimbabwe.jpg',
        scene: 'The Great Enclosure',
        visualHighlights: ['11-meter granite walls', 'Conical tower', 'Hill complex', 'Trade goods from China, Persia, India'],
        type: 'city'
      }
    ]
  },
  
  mapungubwe: {
    id: 'mapungubwe',
    name: 'Mapungubwe',
    coordinates: [-22.2, 29.4],
    region: 'Southern Africa',
    locations: [
      {
        id: 'mapungubwe-hill',
        name: 'Mapungubwe Hill',
        description: 'Sacred hilltop settlement',
        longDescription: `Mapungubwe was the first class-based social system in southern Africa, predating Great Zimbabwe, where royalty lived on the hilltop separated from commoners.`,
        image: '/images/sites/mapungubwe.jpg',
        scene: 'The Hill of the Golden Rhino',
        visualHighlights: ['Golden Rhino figurine', 'Royal hilltop enclosure', 'Gold burial goods', 'Ivory trade evidence'],
        type: 'city'
      }
    ]
  }
}
// ========== SECTION 11: NORTH AFRICA (Beyond Egypt) - 6 Locations ==========
export const northAfricaSites: Record<string, Site> = {
  // Garamantes Civilization (Libya)
  garama: {
    id: 'garama',
    name: 'Garama (Germa)',
    coordinates: [25.45, 13.1],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'garama-capital',
        name: 'Garama',
        description: 'Capital of the Garamantes civilization in the Sahara',
        longDescription: `Garama was the capital of the Garamantes civilization, a Saharan kingdom that flourished from 500 BCE to 700 CE in the Wadi al-Ajal. The city supported a population of 4,000-8,000 people in one of Earth's most arid environments.

The Garamantes built an extensive network of underground channels (foggaras) that tapped fossil water, allowing agriculture in the heart of the Sahara. At Garama, archaeologists have found monumental stone architecture, cemeteries, and evidence of craft production.

The kingdom controlled trans-Saharan trade routes, exporting salt, slaves, and possibly gold to Rome. Garama demonstrates that complex civilizations could flourish far from rivers, relying on engineering and adaptation.`,
        image: '/images/sites/garama.jpg',
        scene: 'The Saharan Capital of the Garamantes',
        visualHighlights: ['Monumental stone buildings', 'Foggara-irrigated fields', 'Trans-Saharan trade center', 'Desert adaptation', 'Roman-era artifacts'],
        type: 'city'
      }
    ]
  },
  
  // Tassili n'Ajjer Rock Art (Algeria)
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
        longDescription: `Tassili n'Ajjer contains one of the most important collections of prehistoric rock art in the world, with over 15,000 engravings and paintings spanning from 10,000 BCE to the Christian era.

The art documents the dramatic climatic transformation of the Sahara from a green savanna with lakes, rivers, and abundant wildlife to the desert we know today. Early images show elephants, giraffes, rhinos, and hippos; later scenes depict domesticated cattle, horses, chariots, and camels.

The paintings also depict human activities—hunting, dancing, warfare, and ritual—providing an unparalleled visual record of cultural change across millennia. The "Round Head" and "Bovidian" styles are masterpieces of prehistoric art.`,
        image: '/images/sites/tassili.jpg',
        scene: 'The Green Sahara Gallery',
        visualHighlights: ['15,000+ rock paintings', 'Elephant and giraffe images', 'Climate change documentation', 'Prehistoric cultural evolution', 'Dramatic sandstone formations'],
        type: 'monument'
      }
    ]
  },
  
  // Carthage (already exists, adding more detail)
  carthageDetailed: {
    id: 'carthage-detailed',
    name: 'Carthage',
    coordinates: [36.8528, 10.3236],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'carthage-ports',
        name: 'The Ports of Carthage',
        description: 'Circular naval base and commercial harbor',
        longDescription: `The Cothon (artificial harbor) of Carthage was the most impressive naval base of the ancient world. The circular inner harbor, 325 meters in diameter, once housed up to 220 warships in ship-sheds arranged around a central island with the admiral's headquarters.

The outer rectangular commercial harbor handled merchant vessels, with docks and warehouses for goods from across the Mediterranean. The harbor's sophisticated design was later copied by Rome and Constantinople.

When Polybius described the harbor in 146 BCE, he marveled at its sophistication—ships could be pulled from the water, repaired, and relaunched without entering the main harbor, making Carthage's navy always ready for action.`,
        image: '/images/sites/carthage-harbor.jpg',
        scene: 'The Naval Arsenal of Carthage',
        visualHighlights: ['325-meter circular harbor', '220 ship-sheds', 'Admiral\'s island headquarters', 'Double harbor design', 'Phoenician-Punic engineering'],
        deity: 'Tanit',
        type: 'city'
      },
      {
        id: 'carthage-tophet',
        name: 'Tophet of Carthage',
        description: 'Sacred ritual burial ground',
        longDescription: `The Tophet of Carthage is a unique sacred precinct containing thousands of funerary urns with the cremated remains of infants and animals. This ritual site, dedicated to the gods Baal Hammon and Tanit, was used from the 8th to the 2nd centuries BCE.

The site's purpose remains debated—some scholars interpret it as evidence of child sacrifice, while others see it as a burial ground for stillborn infants. Regardless, the Tophet represents a distinctive Phoenician-Punic religious practice found across Carthage's colonies.

The stelae covering the site bear symbols of the goddess Tanit (a triangle with a circle and horizontal bar) and inscriptions dedicating the offerings to the gods, providing invaluable evidence of Carthaginian religion and writing.`,
        image: '/images/sites/carthage-tophet.jpg',
        scene: 'The Sacred Precinct of Tanit',
        visualHighlights: ['Thousands of funerary urns', 'Tanit symbol stelae', 'Baal Hammon inscriptions', 'Unique Phoenician-Punic sanctuary', 'Ritual offerings'],
        deity: 'Tanit',
        type: 'tomb'
      }
    ]
  },
  
  // Utica - Oldest Phoenician colony in Africa
  utica: {
    id: 'utica',
    name: 'Utica',
    coordinates: [37.0667, 10.05],
    region: 'North Africa (Tunisia)',
    locations: [
      {
        id: 'utica-city',
        name: 'Utica',
        description: 'One of the oldest Phoenician settlements in North Africa',
        longDescription: `Utica was founded as a Phoenician colony around 1100 BCE, predating even Carthage. Its location at the mouth of the Medjerda River gave it control over trade with the African interior and access to the rich metal deposits of the Atlas Mountains.

The city's name means "old town" in Phoenician, reflecting its antiquity. Excavations have uncovered Phoenician houses, industrial quarters (including purple dye production facilities), and a vast necropolis spanning centuries.

Unlike Carthage, which Rome destroyed, Utica survived and became the capital of Rome's African province. The city's later Roman phases include imposing public buildings, baths, and a forum, preserving layers of North African history from Phoenician through Roman times.`,
        image: '/images/sites/utica.jpg',
        scene: 'The Oldest Phoenician Colony',
        visualHighlights: ['1100 BCE foundation', 'Purple dye workshops', 'Phoenician housing', 'Multi-layer history', 'Roman forum remains'],
        type: 'city'
      }
    ]
  },
  
  // Volubilis (Morocco)
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
        longDescription: `Volubilis was the administrative center of the Roman province of Mauretania Tingitana, standing at the southwestern edge of the Roman Empire. The city controlled the fertile lands of the Saïs plain and the trade routes to the Atlas Mountains.

The site features remarkably well-preserved Roman public buildings—basilica, capitol, triumphal arch (Caracalla), and baths—as well as luxurious private houses with exquisite mosaics depicting mythological scenes and daily life.

After the Roman withdrawal in 285 CE, the city continued to be inhabited by Berber populations, with later Islamic-era buildings added. The city's Latin inscriptions and Christian remains show the persistence of Roman culture beyond imperial control.`,
        image: '/images/sites/volubilis.jpg',
        scene: 'The Roman Frontier Outpost',
        visualHighlights: ['Triumphal arch of Caracalla', 'Basilica and capitol ruins', 'House of Orpheus with mosaics', 'Working olive presses', 'Berber-Roman architecture'],
        type: 'city'
      }
    ]
  },
  
  // Sabratha (Libya)
  sabratha: {
    id: 'sabratha',
    name: 'Sabratha',
    coordinates: [32.8, 12.48],
    region: 'North Africa (Libya)',
    locations: [
      {
        id: 'sabratha-theater',
        name: 'Sabratha',
        description: 'Phoenician-Roman port with stunning theater',
        longDescription: `Sabratha was a Phoenician trading post that became a major Roman city, capital of the province of Tripolitania. Its most spectacular monument is the theater, with three stories of columns still standing against the Mediterranean sky.

The city's prosperity came from the olive oil trade, with hundreds of olive presses found within the city walls. The site also includes a forum, temples to Liber Pater, Serapis, and Isis, a Christian basilica, and a museum housing Punic and Roman mosaics.

The Roman theater (2nd-3rd century CE) could seat 5,000 spectators, with elaborate stage decorations and marble columns imported from across the empire. The theater still hosts performances today.`,
        image: '/images/sites/sabratha.jpg',
        scene: 'The Theater by the Mediterranean',
        visualHighlights: ['Three-story theater columns', 'Mediterranean sea views', 'Punic-Roman architecture', 'Olive oil production facilities', 'Temple of Isis'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 12: WEST AFRICA - 8 Locations ==========
export const westAfricaSites: Record<string, Site> = {
  // Dhar Tichitt - Mauritania
  dharTichitt: {
    id: 'dhar-tichitt',
    name: 'Dhar Tichitt',
    coordinates: [18.5, -9.0],
    region: 'West Africa (Mauritania)',
    locations: [
      {
        id: 'dhar-tichitt-settlement',
        name: 'Dhar Tichitt Stone Settlements',
        description: 'Stone-built settlements in southern Mauritania',
        longDescription: `Dhar Tichitt contains the earliest known substantial stone settlements in West Africa, dating to 2000-500 BCE. The site features hundreds of stone-walled villages, agricultural terraces, and ritual structures spread across the cliff line of the Sahara's southern edge.

The settlements are organized into neighborhoods with specialized stone architecture—granaries, storerooms, livestock pens, and defensive walls against raiders and sand encroachment. The inhabitants cultivated millet (pearl millet, originally domesticated in the Sahel) and maintained herds of cattle, goats, and sheep.

Dhar Tichitt represents an adaptation to Saharan drying, as previously mobile groups became sedentary, developing complex social organization to manage resources and maintain these stone-built settlements. This culture is ancestral to the Soninke people, who later formed the Ghana Empire.`,
        image: '/images/sites/dhar-tichitt.jpg',
        scene: 'Stone Walls of the Southern Sahara',
        visualHighlights: ['Hundreds of stone-walled villages', 'Millet cultivation evidence', 'Defensive architecture', 'Pre-Saharan adaptation', 'Ancestral Soninke culture'],
        type: 'city'
      }
    ]
  },
  
  // Nok Culture (Nigeria)
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
        longDescription: `The Nok culture (1500 BCE - 1 CE) produced some of the earliest and most sophisticated terracotta sculpture in sub-Saharan Africa. Their naturalistic figures—with elaborate hairstyles, jewelry, and expressive faces—represent a distinct artistic tradition.

These sculptures were likely used in religious and healing rituals, depicting ancestors, deities, and important individuals. The combination of iron technology and advanced ceramic production suggests a complex, stratified society with craft specialists.

The artistic style of the Nok, with its triangular and pierced eyes (holes through the pupils) and elaborate headdresses, influenced later West African sculptural traditions, including those of Ife and Benin. Nok figures are found across an area of over 500 square kilometers, indicating a widespread culture linked through trade and shared beliefs.`,
        image: '/images/sites/nok-terracotta.jpg',
        scene: 'The Sculptors of Ancient Nigeria',
        visualHighlights: ['Naturalistic terracotta figures', 'Elaborate hairstyles and jewelry', 'Iron technology evidence', 'Religious/ritual function', 'Distinctive triangular eyes'],
        type: 'city'
      },
      {
        id: 'nok-iron',
        name: 'Nok Iron Smelting Site',
        description: 'Early metallurgy in action',
        longDescription: `The Nok culture was among the earliest in sub-Saharan Africa to smelt iron, developing the technology independently or through local innovation by 800 BCE.

Excavated smelting furnaces reveal sophisticated technology—clay shaft furnaces designed to achieve high temperatures, with bellows to control airflow. Slag heaps, tuyeres (ceramic blow-pipe tips), and iron implements (hoes, axes, spears) document the full production process.

Iron production gave the Nok significant economic and military advantages, enabling more effective farming tools (clearing forests for agriculture) and weapons. The technology spread to other West African cultures, transforming agriculture and enabling population growth, leading to the formation of later states like Ghana, Mali, and Songhai.`,
        image: '/images/sites/nok-iron.jpg',
        scene: 'The Birth of African Ironworking',
        visualHighlights: ['Shaft furnaces', 'Bellows technology', 'Slag heaps and tuyeres', 'Tool and weapon production', 'Early West African metallurgy'],
        type: 'city'
      }
    ]
  },
  
  // Kintampo Complex (Ghana)
  kintampo: {
    id: 'kintampo',
    name: 'Kintampo Complex',
    coordinates: [8.0, -1.5],
    region: 'West Africa (Ghana)',
    locations: [
      {
        id: 'kintampo-sites',
        name: 'Kintampo Settlement',
        description: 'Early farming and trade culture in Ghana region',
        longDescription: `The Kintampo Complex (c. 2500-1400 BCE) represents the earliest evidence of settled farming communities in the forest-fringe zone of modern Ghana. Sites include stone-constructed houses, grinding stones for cereal processing (pearl millet), and distinctive "Kintampo cigar-shaped" pottery.

The Kintampo people cultivated cowpeas, pearl millet, and oil palm, while also hunting wild game and maintaining livestock—likely sheep and goats. They produced polished stone axes, quartz microliths, and terracotta figurines of animals and humans.

The complex had trade connections reaching the Sahara, exchanging forest products (kola nuts, gold, ivory, wild animal skins) for Saharan salt and perhaps copper and glass beads. Kintampo sites lie along routes that later became major trade corridors in the Ghana and Mali empires.`,
        image: '/images/sites/kintampo.jpg',
        scene: 'The Forest Farmers of Ghana',
        visualHighlights: ['Stone house foundations', 'Polished stone axes', 'Distinctive pottery tradition', 'Forest-Sahara trade link', 'Earliest settled farming in region'],
        type: 'city'
      }
    ]
  },
  
  // Jenne-Jeno (Mali) - Early urban center
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
        longDescription: `Jenne-Jeno (250 BCE - 1400 CE) is the oldest known city in sub-Saharan Africa, predating the trans-Saharan trade. Built on the inland Niger Delta floodplain, the city covered 33 hectares at its peak, with an estimated population of 20,000-30,000 inhabitants.

The city had no defensive walls or monumental palaces—its wealth came from trade in iron, rice, fish, and pottery, not conquest. The city's unique "tell" formed from centuries of mudbrick construction, rising 7 meters above the surrounding plain.

Jenne-Jeno controlled access to gold from the south, salt from the Sahara, and copper from the north. The city's iron industry was particularly important, producing tools and weapons traded across West Africa. The site declined after 1400 CE, replaced by the nearby city of Djenné, famous for its Great Mosque.`,
        image: '/images/sites/jenne-jeno.jpg',
        scene: 'The Ancient City of the Niger Delta',
        visualHighlights: ['Mudbrick tell rising from floodplain', 'Ironworking furnaces', 'Pottery production zones', 'Trade access to gold and salt', 'Early urbanism without walls'],
        type: 'city'
      }
    ]
  },
  
  // Timbuktu (Mali) - Intellectual capital
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
        longDescription: `Timbuktu was the legendary "City of 333 Saints," a center of Islamic scholarship and trans-Saharan trade from the 13th to 17th centuries CE. The city's universities (Sankore, Djinguereber, Sidi Yahya) were among the most prestigious in the Islamic world, attracting scholars from Cairo, Baghdad, and Fez.

The city's libraries contained hundreds of thousands of manuscripts on law, medicine, astronomy, mathematics, and literature—many still preserved today. Timbuktu controlled the gold-salt trade, with merchants bringing gold from the south (Bambuk, Bure) and salt from the Sahara (Taghaza, Taoudenni).

The city's mudbrick architecture, including the Great Mosque of Djinguereber, showcases the distinctive Sudano-Sahelian style with its turrets and pinnacles. Timbuktu's fame as a place of mystery and learning captured the European imagination during the Age of Discovery, inspiring many expeditions to reach its fabled gates.`,
        image: '/images/sites/timbuktu.jpg',
        scene: 'The City of 333 Saints',
        visualHighlights: ['Sankore University', 'Sacred manuscripts library', 'Mudbrick mosque architecture', 'Trans-Saharan camel caravans', 'Gold and salt trade routes'],
        type: 'city'
      }
    ]
  },
  
  // Gao - Capital of Songhai Empire
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
        longDescription: `Gao (Kaw Kaw) was the capital of the Songhai Empire, the largest empire in West African history. The city controlled the Niger River trade route, serving as a hub for gold, slaves, salt, and textiles.

The tomb of Askia the Great (built 1495) is a unique pyramidal mudbrick structure, marking the conversion of the Songhai Empire to Islam under the Askia dynasty. The city also contains extensive palace and mosque ruins from the 15th-16th centuries.

Gao's strategic location on the Niger Bend allowed it to control both river and desert trade routes. The city's wealth from the gold and salt trade funded a professional army that conquered Timbuktu and Jenne, creating an empire that dominated West Africa until the Moroccan invasion of 1591.`,
        image: '/images/sites/gao.jpg',
        scene: 'The Seat of the Songhai Emperors',
        visualHighlights: ['Askia pyramidal tomb', 'Niger River trade port', 'Songhai palace ruins', 'Mudbrick mosque foundations', 'Gold and salt warehouses'],
        type: 'city'
      }
    ]
  },
  
  // Ile-Ife - Yoruba sacred city
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
        longDescription: `Ile-Ife is the spiritual homeland of the Yoruba people, believed to be the place where the gods descended to create the earth. The city's artistic tradition produced some of Africa's most naturalistic and refined bronze, brass, and terracotta sculptures (11th-15th centuries CE).

The "Bronze Head" and "Obalufon II mask" show remarkable technical skill, comparable to Renaissance Italian art. These sculptures depicted the divine kings (Ooni) of Ife, their faces scarified with royal patterns, crowned with elaborate beadwork.

Ile-Ife's art influenced the later Benin Kingdom, which adopted ife casting techniques for their own royal sculptures. The city remains the center of Yoruba religion, with annual festivals celebrating the creation of the world and the founding of the city's monarchy.`,
        image: '/images/sites/ile-life.jpg',
        scene: 'The Cradle of the Yoruba',
        visualHighlights: ['Naturalistic bronze heads', 'Terracotta royal figures', 'Obalufon II brass mask', 'Sacred grove (Opa Oranmiyan)', 'Ife glass bead production'],
        type: 'city'
      }
    ]
  }
}

// ========== SECTION 13: MYCENAEAN GREEK (91-94) ==========
export const mycenaeanSites: Record<string, Site> = {
  mycenae: {
    id: 'mycenae',
    name: 'Mycenae',
    coordinates: [37.7308, 22.7562],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'lion-gate',
        name: 'Lion Gate of Mycenae',
        description: 'Iconic entrance to the citadel of Agamemnon',
        longDescription: `The Lion Gate is the main entrance to the citadel of Mycenae, the most powerful city of Late Bronze Age Greece (1600-1100 BCE). The gate features two massive lions (now headless) flanking a column, carved in high relief on a single limestone slab - the oldest surviving monumental sculpture in Europe.

The gate's design is a "relieving triangle" that redirected weight from the lintel to the walls. The lions symbolized the power of the Mycenaean kings, the "wanax," who Homer called "golden Mycenae."

Within the walls lies Grave Circle A, where Heinrich Schliemann discovered the "Mask of Agamemnon" and other gold treasures in 1876. The site also includes the Treasury of Atreus (tholos tomb), palace complex, and underground cistern.`,
        image: '/images/sites/lion-gate.jpg',
        scene: 'The Gateway of Heroes',
        visualHighlights: ['Lion relief sculpture', 'Cyclopean stone walls', 'Grave Circle A gold masks', 'Treasury of Atreus beehive tomb', 'Palace megaron with hearth'],
        type: 'monument'
      },
      {
        id: 'treasury-of-atreus',
        name: 'Treasury of Atreus',
        description: 'Largest and best-preserved tholos tomb',
        longDescription: `The Treasury of Atreus (also called the Tomb of Agamemnon) is the largest tholos (beehive) tomb in Greece, built around 1250 BCE. The tomb's dome rises 13.5 meters with a diameter of 14.5 meters, made of 33 courses of stone, each projecting slightly inward.

The entrance features a relieving triangle and massive lintel beam weighing 120 tons - one of the largest stone blocks ever moved by ancient builders. The tomb was likely built for a Mycenaean king and was still visible to Pausanias in the 2nd century CE.

The name "Treasury of Atreus" reflects the belief that the tomb belonged to Agamemnon's father, though the actual occupant remains unknown. The tomb's engineering influenced later Greek architecture including the Athenian Treasury at Delphi.`,
        image: '/images/sites/treasury-of-atreus.jpg',
        scene: 'The Beehive Tomb of Kings',
        visualHighlights: ['120-ton lintel beam', '13.5-meter high dome', 'Tholos corbelled architecture', 'Dromos entrance passage', 'Geometric decorative bronze nails'],
        type: 'tomb'
      }
    ]
  },
  
  tiryns: {
    id: 'tiryns',
    name: 'Tiryns',
    coordinates: [37.598, 22.799],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'tiryns-walls',
        name: 'Cyclopean Walls of Tiryns',
        description: 'Massive fortifications of the Bronze Age citadel',
        longDescription: `Tiryns, legendary birthplace of Heracles (Hercules), features the most impressive cyclopean walls in Greece. The walls are 7 meters thick and 10 meters high, made of limestone blocks weighing up to 13 tons, so massive that later Greeks believed only the Cyclopes could have built them.

The citadel features the Upper Citadel (with palace megaron, hearth, and throne), Lower Citadel (with workshops and storage), and the famous "Galleries" (corridors within the walls for storage and defense). A hidden underground passage led to a water source during sieges.

Tiryns was a major Mycenaean center, controlling the Argive plain. Homer called it "mighty walled Tiryns" in the Iliad. The site also contains a "megaron" (palace hall) with a central hearth and throne, similar to Mycenae and Pylos.`,
        image: '/images/sites/tiryns.jpg',
        scene: 'The Cyclopean Fortress',
        visualHighlights: ['7-meter thick cyclopean walls', '"Galleries" vaulted corridors', 'Upper Citadel palace megaron', 'Underground water passage', "Heracles' birthplace tradition"],
        type: 'monument'
      }
    ]
  },
  
  pylos: {
    id: 'pylos',
    name: 'Pylos (Palace of Nestor)',
    coordinates: [36.965, 21.656],
    region: 'Greece (Peloponnese)',
    locations: [
      {
        id: 'palace-nestor',
        name: 'Palace of Nestor',
        description: 'Best-preserved Mycenaean palace with Linear B archive',
        longDescription: `The Palace of Nestor at Pylos is the best-preserved Mycenaean palace in Greece, dating to 1300 BCE. The site includes the main building (with megaron, throne room, storerooms, and workshops), the "Pantheon" (shrine complex), and extensive agricultural facilities.

The palace's storerooms contained thousands of wine jars, and the archives preserved over 1,000 Linear B tablets (deciphered as early Greek) recording palace administration, military preparations, and offerings to gods (including Poseidon, Zeus, Hera). The tablets mention the kingdom's organization, land ownership, and livestock.

The site is identified as Nestor's palace from Homer's Iliad ("sandy Pylos"). The bathtub found here is sometimes called "Nestor's bathtub." The palace was destroyed by fire around 1180 BCE, preserving the clay tablets.`,
        image: '/images/sites/pylos.jpg',
        scene: 'The Palace of Wise Nestor',
        visualHighlights: ['Megaron with central hearth', 'Throne room with painted floor', 'Linear B archive tablets', 'Bathtub (Nestor\'s bath)', 'Storerooms with wine jars'],
        deity: 'Poseidon',
        type: 'palace'
      }
    ]
  }
}

// ========== SECTION 14: MINOAN (Crete) - Phaistos, Malia, Zakros (95-97) ==========
export const minoanSites: Record<string, Site> = {
  phaistos: {
    id: 'phaistos',
    name: 'Phaistos',
    coordinates: [35.052, 24.815],
    region: 'Crete',
    locations: [
      {
        id: 'palace-phaistos',
        name: 'Palace of Phaistos',
        description: 'Second largest Minoan palace, home of the Phaistos Disc',
        longDescription: `The Palace of Phaistos is the second largest Minoan palace (after Knossos), located on a hill overlooking the Messara Plain. The palace was built around 1900 BCE and rebuilt after an earthquake in 1700 BCE, with a central court, theater area, storage magazines, and royal apartments with light wells.

The palace's most famous find is the Phaistos Disc (c. 1700 BCE), a clay disk stamped with 242 symbols in a spiral pattern on both sides. The symbols remain undeciphered, representing one of archaeology's greatest mysteries.

Phaistos controlled the fertile Messara Plain and had access to the Libyan Sea port of Kommos. The palace was destroyed around 1400 BCE, apparently by fire, preserving the famous disc.`,
        image: '/images/sites/phaistos.jpg',
        scene: 'The Palace of the Mysterious Disc',
        visualHighlights: ['Central court for ceremonies', 'Phaistos Disc with undeciphered symbols', 'Theater area for rituals', 'Royal apartments with light wells', 'Storage magazines with giant pithoi'],
        type: 'palace'
      }
    ]
  },
  
  malia: {
    id: 'malia',
    name: 'Malia',
    coordinates: [35.283, 25.467],
    region: 'Crete',
    locations: [
      {
        id: 'palace-malia',
        name: 'Palace of Malia',
        description: 'Third major Minoan palace with gold bee pendant',
        longDescription: `The Palace of Malia is the third largest Minoan palace, located on the north coast of Crete east of Heraklion. The palace was built around 1900 BCE and features a central court, storage magazines, workshops, and a famous "hypostyle crypt" (pillar room) with a ceremonial basin.

The palace's most famous artifact is the "Malia Pendant" (c. 1800 BCE), a gold pendant showing two bees depositing honey in a comb - a masterpiece of Minoan goldworking. The site also includes a "quartier Mu" (Mu Quarter) with a seal engraver's workshop and luxurious house.

Malia controlled the fertile plain and had access to the Aegean Sea, serving as a trading port. The palace was destroyed around 1450 BCE, possibly by the Thera eruption's effects.`,
        image: '/images/sites/malia.jpg',
        scene: 'The Palace of the Gold Bee Pendant',
        visualHighlights: ['Malia Pendant gold bees', 'Hypostyle crypt with pillar', 'Quartier Mu workshops', 'Kernos stone (offering table)', 'Giant pithos storage jars'],
        type: 'palace'
      }
    ]
  },
  
  zakros: {
    id: 'zakros',
    name: 'Zakros',
    coordinates: [35.098, 26.261],
    region: 'Crete',
    locations: [
      {
        id: 'palace-zakros',
        name: 'Palace of Zakros',
        description: 'Eastern Minoan palace connected to Egyptian trade',
        longDescription: `The Palace of Zakros (also called Kato Zakros) is the fourth Minoan palace, located on the east coast of Crete. The palace was built around 1600 BCE and served as a trading hub with Egypt, Syria, and Cyprus, as shown by imported ivory, Egyptian stone vessels, and Syrian cylinder seals.

The palace features a central court, royal apartments, storage magazines (with many intact pithoi), and a unique "shrine" with rock-crystal ritual vessels. The palace also had an elaborate drainage system and light wells similar to Knossos.

Zakros was destroyed around 1450 BCE, along with the other Minoan palaces. The palace's remote location preserved many artifacts found in situ, including the "Rock Crystal Vessel" carved from a single crystal.`,
        image: '/images/sites/zakros.jpg',
        scene: 'The Eastern Trading Hub of Minoan Crete',
        visualHighlights: ['Egyptian stone vessel imports', 'Rock crystal ritual vessels', 'Shrine with cult objects', 'Intact pithos storage jars', 'Syrian cylinder seals'],
        type: 'palace'
      }
    ]
  }
}

// ========== SECTION 15: PERSIAN EMPIRE (Achaemenid) - 98-100 ==========
export const persianSites: Record<string, Site> = {
  persepolis: {
    id: 'persepolis',
    name: 'Persepolis (Parsa)',
    coordinates: [29.935, 52.891],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'persepolis-complex',
        name: 'Persepolis',
        description: 'Ceremonial capital of the Achaemenid Empire',
        longDescription: `Persepolis (Parsa) was the ceremonial capital of the Achaemenid Empire, founded by Darius I in 518 BCE. The city's terrace (450 x 300 meters) was raised 14 meters above the plain and supported the Apadana Palace (audience hall with 72 columns 20 meters tall), Throne Hall (Hundred Columns Hall), Treasury, royal palaces, and tombs of Artaxerxes II and III.

The Apadana's reliefs (east and north stairways) depict 23 delegations from subject nations bringing gifts to the Persian king - the most detailed representation of Achaemenid imperial ideology, showing Medes, Elamites, Babylonians, Egyptians, Scythians, Indians, and Greeks.

Alexander the Great burned Persepolis in 330 BCE, supposedly in revenge for the Persian destruction of Athens. The fire preserved the mudbrick walls and revealed the column foundations. The site remains a symbol of Persian civilization.`,
        image: '/images/sites/persepolis.jpg',
        scene: 'The Throne of the Persian Kings',
        visualHighlights: ['Apadana Palace columns', 'Hundred Columns Hall', 'Gate of All Nations lamassu bulls', 'Treasury reliefs', 'Royal tomb facades'],
        type: 'palace'
      }
    ]
  },
  
  pasargadae: {
    id: 'pasargadae',
    name: 'Pasargadae',
    coordinates: [30.201, 53.179],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'tomb-cyrus',
        name: 'Tomb of Cyrus the Great',
        description: 'Resting place of the founder of the Persian Empire',
        longDescription: `Pasargadae was the first capital of the Achaemenid Empire, founded by Cyrus the Great after his conquest of Media (550 BCE). The site's most famous monument is the Tomb of Cyrus, a simple gabled stone chamber on six-stepped platform (11 meters high), described by Greek sources as bearing the inscription: "O man, whoever you are, I am Cyrus, who founded the Persian Empire. Do not begrudge me this earth."

The site also includes the Palace of Cyrus (with the only surviving Persian columned hall with a stone base), the Audience Hall (reception of foreign delegations), the Gatehouse (with winged man relief), and the Zendan-e Soleyman ("Solomon's Prison").

Pasargadae established the architectural tradition that culminated in Persepolis. Alexander the Great visited the tomb and ordered its restoration, respecting Cyrus as his model.`,
        image: '/images/sites/pasargadae.jpg',
        scene: 'The First Capital of Persia',
        visualHighlights: ['Stepped tomb of Cyrus', 'Palace of Cyrus column base', 'Winged man relief on Gatehouse', 'Princess tomb (possibly Roxana)', 'Zendan-e Soleyman tower'],
        deity: 'Ahura Mazda',
        type: 'tomb'
      }
    ]
  },
  
  naqshRostam: {
    id: 'naqsh-e-rostam',
    name: 'Naqsh-e Rostam',
    coordinates: [29.989, 52.873],
    region: 'Persia (Iran)',
    locations: [
      {
        id: 'royal-tombs',
        name: 'Naqsh-e Rostam',
        description: 'Royal rock-cut tombs of Achaemenid kings',
        longDescription: `Naqsh-e Rostam is a necropolis carved into a cliff face northwest of Persepolis, containing the rock-cut tombs of four Achaemenid kings (probably Darius I, Xerxes I, Artaxerxes I, and Darius II). Each tomb facade is carved in the form of a cross, with a relief of the king standing on a throne held by 30 figures representing the subject nations.

Below the tombs are Sasanian reliefs (3rd century CE), showing the investiture of Ardashir I and Shapur I's victory over Roman emperors (Valerian kneeling before Shapur). The site also includes the Ka'ba-ye Zartosht (Zoroaster's Cube), a square tower possibly used for fire altars.

The name "Naqsh-e Rostam" means "Picture of Rostam" (the Persian mythical hero), adopted after local identification of Sasanian reliefs with Rostam's exploits.`,
        image: '/images/sites/naqsh-e-rostam.jpg',
        scene: 'The Cliff Tombs of Achaemenid Kings',
        visualHighlights: ['Four royal rock-cut tombs', 'Cross-shaped facade reliefs', 'Sasanian king investiture reliefs', 'Ka\'ba-ye Zartosht tower', 'Valerian surrender relief'],
        type: 'tomb'
      }
    ]
  }
}

// ========== SECTION 16: ETRUSCAN CIVILIZATION (101-103) ==========
export const etruscanSites: Record<string, Site> = {
  tarquinia: {
    id: 'tarquinia',
    name: 'Tarquinia (Cerveteri adjacent)',
    coordinates: [42.255, 11.757],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'monterozzi-necropolis',
        name: 'Monterozzi Necropolis',
        description: 'Famous painted tombs of Etruscan aristocracy',
        longDescription: `The Monterozzi Necropolis at Tarquinia contains over 6,000 rock-cut tombs, many decorated with frescoes depicting Etruscan life - banquets, dancers, musicians, athletes, and scenes of the afterlife. The Tomb of the Leopards (5th century BCE) shows banquet scenes; Tomb of Hunting and Fishing shows the deceased in nature.

Tarquinia was one of the 12 cities of the Etruscan League, the most powerful Etruscan city. The site includes the "Tumulus of the King" (large mound tomb), "Tomb of the Augurs" (with haruspicy scenes), and "Tomb of the Bulls" (earliest Etruscan painting, 560 BCE).

The Etruscans influenced early Rome (the Tarquin dynasty ruled Rome). The tomb paintings provide the only surviving evidence of Etruscan art and social life, showing women participating in banquets reclining with men - equality unusual in Mediterranean cultures.`,
        image: '/images/sites/tarquinia.jpg',
        scene: 'The Frescoed Tombs of the Etruscan Elite',
        visualHighlights: ['Tomb of the Leopards banquet fresco', 'Tomb of Hunting and Fishing landscapes', 'Thousands of painted chamber tombs', 'Tumulus mound tombs', 'Etruscan language inscriptions'],
        type: 'tomb'
      }
    ]
  },
  
  cerveteri: {
    id: 'cerveteri',
    name: 'Cerveteri (Caere)',
    coordinates: [41.999, 12.109],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'necropolis-banditaccia',
        name: 'Necropolis of Banditaccia',
        description: 'City of the dead with tumulus and chamber tombs',
        longDescription: `The Banditaccia Necropolis is the largest ancient necropolis in the Mediterranean, containing thousands of tumulus (mound) tombs arranged along a "streets of the dead" grid pattern matching the living city.

Key tombs include the "Tomb of the Reliefs" (4th century BCE), carved to imitate a house with reliefs of pillows, weapons, utensils, and even pets (a dog and small horse); the "Tomb of the Greek Vases" (with imported Attic pottery); and the "Tomb of the Five Chairs" (with stone chairs placed for ancestor cult rituals).

Cerveteri (Roman Caere) was a major trading port, controlling the iron trade with Elba. The city was Rome's ally but declined after the 3rd century BCE. The necropolis's "city planning" demonstrates Etruscan social structure and family organization.`,
        image: '/images/sites/cerveteri.jpg',
        scene: 'The City of the Dead',
        visualHighlights: ['Tomb of the Reliefs house-like interior', '"Streets of the dead" urban planning', 'Tumulus mound tombs (c. 50 meter diameter)', 'Tomb of the Greek Vases imports', 'Ancestor cult chairs'],
        type: 'tomb'
      }
    ]
  },
  
  veii: {
    id: 'veii',
    name: 'Veii (Veio)',
    coordinates: [42.007, 12.401],
    region: 'Etruria (Italy)',
    locations: [
      {
        id: 'sanctuary-apollo',
        name: 'Sanctuary of Apollo at Veii',
        description: 'Temple of Apollo with famous terracotta statue',
        longDescription: `The Sanctuary of Apollo (Portonaccio) at Veii dates to the 6th century BCE, featuring the "Apollo of Veii" - a life-size painted terracotta statue of Apollo (the Etruscan Aplu) by the sculptor Vulca, the only Etruscan artist known by name.

The temple's architectural terracottas included scenes from the "Labors of Herakles" (Hercules) and the dispute between Apollo and Herakles over the Ceryneian Hind. The temple plan (three-cella) influenced later Roman temple design.

Veii was the richest Etruscan city, Rome's greatest rival until its destruction by Camillus in 396 BCE (10-year siege). The temple's cult statue was carried to Rome, and the city's territory was distributed to Roman citizens, marking the first Roman territorial expansion.`,
        image: '/images/sites/veii.jpg',
        scene: 'The Great Etruscan Temple of Apollo',
        visualHighlights: ['Apollo of Veii terracotta statue', 'Herakles labors reliefs', 'Three-cella temple plan', 'Terracotta antefixes', 'Veii-Portonaccio sanctuary layout'],
        deity: 'Apollo',
        type: 'temple'
      }
    ]
  }
}

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
  ...northAfricaSites,
  ...westAfricaSites,
  ...mycenaeanSites,    
  ...minoanSites,      
  ...persianSites,      
  ...etruscanSites      
}

// ========== FEATURED SITES (for homepage quick links) ==========
export const featuredSites = [
  // Egyptian Civilization
  { id: 'great-pyramid', name: 'Great Pyramid', icon: '𓋹', siteId: 'giza', civilization: 'Egyptian' },
  { id: 'karnak-hypostyle', name: 'Temple of Karnak', icon: '𓊨', siteId: 'karnak', civilization: 'Egyptian' },
  { id: 'abu-simbel-temple', name: 'Abu Simbel', icon: '𓆣', siteId: 'abuSimbel', civilization: 'Egyptian' },
  { id: 'temple-hathor', name: 'Temple of Hathor', icon: '𓋹', siteId: 'dendera', civilization: 'Egyptian' },
  { id: 'temple-isis', name: 'Temple of Isis', icon: '𓊨', siteId: 'philae', civilization: 'Egyptian' },
  
  // Nubian/Kushite Civilization
  { id: 'meroe-pyramids', name: 'Meroë Pyramids', icon: '𓋴', siteId: 'meroe-pyramids', civilization: 'Nubian' },
  { id: 'jebel-barkal-mountain', name: 'Jebel Barkal', icon: '𓋹', siteId: 'jebel-barkal', civilization: 'Nubian' },
  
  // Red Sea / Punt Trade World
  { id: 'aksum-city', name: 'Kingdom of Aksum', icon: '𓆣', siteId: 'aksum', civilization: 'Aksumite' },
  
  // Phoenician Civilization
  { id: 'tyre-island', name: 'Tyre', icon: '𓂀', siteId: 'tyre', civilization: 'Phoenician' },
  { id: 'carthage-city', name: 'Carthage', icon: '𓊨', siteId: 'carthage', civilization: 'Phoenician' },
  
  // Babylonian/Mesopotamian Civilization
  { id: 'babylon-city', name: 'Babylon', icon: '𓆊', siteId: 'babylon', civilization: 'Babylonian' },
  { id: 'ishtar-gate-structure', name: 'Ishtar Gate', icon: '𓋴', siteId: 'ishtar-gate', civilization: 'Babylonian' },
  
  // Hebrew/Israelite Civilization
  { id: 'jerusalem-city', name: 'Jerusalem', icon: '𓅃', siteId: 'jerusalem', civilization: 'Israelite' },
  { id: 'solomons-temple', name: 'Solomon\'s Temple', icon: '𓊨', siteId: 'temple-mount', civilization: 'Israelite' },
  
  // Hittite/Anatolian Civilization
  { id: 'hattusa-capital', name: 'Hattusa', icon: '𓁟', siteId: 'hattusa', civilization: 'Hittite' },
  
  // Greek/Aegean Civilization
  { id: 'acropolis-hill', name: 'Acropolis', icon: '𓇳', siteId: 'acropolis', civilization: 'Greek' },
  { id: 'temple-zeus-olympia', name: 'Temple of Zeus', icon: '⚡', siteId: 'olympia', civilization: 'Greek' },
  { id: 'oracle-delphi', name: 'Delphi', icon: '𓋹', siteId: 'delphi', civilization: 'Greek' },
  { id: 'temple-poseidon', name: 'Temple of Poseidon', icon: '🌊', siteId: 'sounion', civilization: 'Greek' },
  { id: 'temple-artemis', name: 'Temple of Artemis', icon: '🏹', siteId: 'ephesus', civilization: 'Greek' },
  
  // Mycenaean Greek Civilization
  { id: 'lion-gate', name: 'Lion Gate', icon: '🦁', siteId: 'mycenae', civilization: 'Mycenaean' },
  { id: 'palace-nestor', name: 'Palace of Nestor', icon: '🏛️', siteId: 'pylos', civilization: 'Mycenaean' },
  
  // Minoan Civilization
  { id: 'palace-phaistos', name: 'Phaistos Disc', icon: '📀', siteId: 'phaistos', civilization: 'Minoan' },
  { id: 'palace-malia', name: 'Malia', icon: '🐝', siteId: 'malia', civilization: 'Minoan' },
  
  // Persian Civilization
  { id: 'persepolis-complex', name: 'Persepolis', icon: '🏛️', siteId: 'persepolis', civilization: 'Persian' },
  { id: 'tomb-cyrus', name: 'Tomb of Cyrus', icon: '⚜️', siteId: 'pasargadae', civilization: 'Persian' },
  
  // Etruscan Civilization
  { id: 'monterozzi-necropolis', name: 'Tarquinia Tombs', icon: '🎨', siteId: 'tarquinia', civilization: 'Etruscan' },
  { id: 'necropolis-banditaccia', name: 'Cerveteri', icon: '🏺', siteId: 'cerveteri', civilization: 'Etruscan' },
  
  // West African Civilizations
  { id: 'timbuktu-manuscripts', name: 'Timbuktu', icon: '📚', siteId: 'timbuktu', civilization: 'West African' },
  { id: 'ile-ife', name: 'Ile-Ife', icon: '👑', siteId: 'ile-ife', civilization: 'Yoruba' },
  { id: 'dhar-tichitt-settlement', name: 'Dhar Tichitt', icon: '🗿', siteId: 'dhar-tichitt', civilization: 'West African' },
  
  // Southern African Civilization
  { id: 'great-zimbabwe-ruins', name: 'Great Zimbabwe', icon: '🏺', siteId: 'great-zimbabwe', civilization: 'Southern African' },
  
  // North African Civilizations
  { id: 'tassili-rock-art', name: 'Tassili n\'Ajjer', icon: '🎨', siteId: 'tassili-najjer', civilization: 'North African' },
  { id: 'garama-capital', name: 'Garama', icon: '🏜️', siteId: 'garama', civilization: 'North African' },
]

// Helper for civilization colors
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
  WestAfrican: 'from-orange-600 to-yellow-600',
  NorthAfrican: 'from-amber-700 to-brown-600',
  SouthernAfrican: 'from-green-600 to-emerald-600',
  Yoruba: 'from-gold-600 to-amber-600',
}