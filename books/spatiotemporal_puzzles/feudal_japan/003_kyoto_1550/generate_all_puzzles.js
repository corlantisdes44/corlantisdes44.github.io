// Generator for 100 Historical Puzzles of Kyoto: The Shogunate (1550-1650 AD)
// Volume 003 of The Spatiotemporal Puzzle Series
const fs = require('fs');
const path = require('path');

const puzzlesData = [
  // SECTION I: CASTLES, WARLORDS & SENGOKU CLASHES (01-20)
  {
    id: 1,
    title: "NIJO CASTLE",
    subtitle: "Nightingale Floors & Tokugawa Power",
    words: [
      "NIJO CASTLE", "NIGHTINGALE", "UGUISUBARI", "SHOGUN GATE",
      "NINOMARU", "AUDIENCE HALL", "GOLD SCREEN", "STONE WALL",
      "MOAT WATER", "HONMARU KEEP", "TATAMI ROOM", "PINE MURAL",
      "CYPRESS WOOD", "GUARD WATCH", "IMPERIAL VISIT", "FORTRESS",
      "RETAINER", "POWER SEAT"
    ]
  },
  {
    id: 2,
    title: "ODA NOBUNAGA",
    subtitle: "The Great Unifier & Master of Firepower",
    words: [
      "NOBUNAGA", "WARLORD", "TENKA FUBU", "FIREPOWER",
      "NAGASHINO", "VOLLEY FIRE", "AZUCHI KEEP", "OWARI CLAN",
      "REVOLUTION", "IRON SHIPS", "INNOVATION", "SWORD BAN",
      "FREE MARKET", "TACTICIAN", "CONQUEROR", "ALLIANCE",
      "UNIFICATION", "RESOLVE"
    ]
  },
  {
    id: 3,
    title: "TOYOTOMI HIDEYOSHI",
    subtitle: "The Taiko & The Golden Tea Room",
    words: [
      "HIDEYOSHI", "TAIKO LEADER", "OSAKA CASTLE", "SWORD HUNT",
      "KATANAGARI", "GOLD TEA ROOM", "REGENT", "PEASANT BORN",
      "CADASTRAL", "LAND SURVEY", "MOMOYAMA ART", "CHERRY FEAST",
      "DAIGO BANQUET", "CASTLE WALL", "REORGANIZER", "EXPEDITION",
      "DYNASTY", "AMBITION"
    ]
  },
  {
    id: 4,
    title: "TOKUGAWA IEYASU",
    subtitle: "Founder of the 250-Year Edo Peace",
    words: [
      "IEYASU", "SEKIGAHARA", "SHOGUN TITLE", "PATIENCE",
      "MIKAWA CLAN", "EDO CAPITAL", "BAKUFU RULE", "STATESMAN",
      "WAR COUNSEL", "EASTERN ARMY", "VICTORY", "SANKEY POLICY",
      "DYNASTY HEAD", "POLITICAL WILL", "ALLIANCE BOND", "ENDURANCE",
      "SUCCESSION", "MAJESTY"
    ]
  },
  {
    id: 5,
    title: "THE BATTLE OF SEKIGAHARA",
    subtitle: "1600: The Clashing Armies of East and West",
    words: [
      "SEKIGAHARA", "CLASH ARMIES", "EAST ARMY", "WEST ALLIANCE",
      "ISHIDA", "DEFECTION", "MORNING MIST", "VALLEY BATTLE",
      "CANNON SHOT", "INFANTRY", "TACTICAL MOVE", "TURNING POINT",
      "HORSE CAVALRY", "WAR HORNS", "BATTLEFIELD", "DECISIVE DAY",
      "TRIUMPH", "DESTINY"
    ]
  },
  {
    id: 6,
    title: "THE HONNO-JI INCIDENT",
    subtitle: "1582: Betrayal in the Heart of Kyoto",
    words: [
      "HONNOJI", "AKECHI MITSU", "SURPRISE RAID", "TREACHERY",
      "TEMPLE FLAMES", "NOBUNAGA END", "MIDNIGHT ATTACK", "MORNING SUN",
      "KYOTO ALARM", "SPEAR FIGHT", "FATAL ORDER", "NARROW ESCAPE",
      "MOMENTUM", "HISTORIC FALL", "REGRET", "AMBUSH",
      "DESTINY TURN", "TRAGEDY"
    ]
  },
  {
    id: 7,
    title: "AZUCHI CASTLE",
    subtitle: "The Multi-Tiered Citadel of Azure Splendor",
    words: [
      "AZUCHI", "SEVEN TIERS", "BLUE TILES", "LAKE BIWA",
      "OCTAGON HALL", "GOLD LACQUER", "STONE MASON", "DEFENSE WALL",
      "PALACE TOWER", "INNOVATION", "CITADEL", "KANO SCREENS",
      "MAGNIFICENCE", "NEW CAPITAL", "FORTRESS KEEP", "VISTA VIEW",
      "SHORT REIGN", "GRANDEUR"
    ]
  },
  {
    id: 8,
    title: "OSAKA CASTLE SIEGES",
    subtitle: "The Winter and Summer Campaigns (1614-1615)",
    words: [
      "OSAKA SIEGE", "WINTER DEFENSE", "SUMMER BATTLE", "MOAT FILLING",
      "SANADA YUKIMURA", "FORT REDOUBT", "CANNON BARRAGE", "TOYOTOMI FALL",
      "CASTLE FLAMES", "FINAL CHARGE", "HEROIC STAND", "SIEGE WALL",
      "GUNPOWDER", "IRON EMBANK", "END OF WAR", "SACRIFICE",
      "PEACE SET", "FORTRESS"
    ]
  },
  {
    id: 9,
    title: "SAMURAI ARMOR & KABUTO",
    subtitle: "Lacquered Iron, Silk Cords & Crests",
    words: [
      "KABUTO HELMET", "DO BODY ARMOR", "SILK LACING", "IRON PLATE",
      "FAMILY CREST", "MENPO MASK", "SHOULDER SODE", "SHIN GUARDS",
      "GOLD HORNS", "PROTECTION", "FLEXIBILITY", "ARMORER GUILD",
      "SCARLET CORD", "CHAINMAIL", "CEREMONIAL", "COMBAT WEAR",
      "DIGNITY", "WARRIOR"
    ]
  },
  {
    id: 10,
    title: "THE KATANA & SWORDSMITH",
    subtitle: "Soul of the Samurai & Folded Tamahagane",
    words: [
      "KATANA", "TAMAHAGANE", "SWORDSMITH", "FOLDED STEEL",
      "HAMON LINE", "WATER QUENCH", "CLAY COATING", "RAZOR SHARP",
      "TSUKA HILT", "RAY SKIN WRAP", "TSUBA GUARD", "SCABBARD",
      "BLACK LACQUER", "SOUL WEAPON", "ANVIL STRIKE", "PURITY RITE",
      "FORGE MASTER", "BALANCE"
    ]
  },
  {
    id: 11,
    title: "BATTLE FLAGS & MON",
    subtitle: "Sashimono Banners on the Smoky Field",
    words: [
      "SASHIMONO", "FAMILY CREST", "MON EMBLEM", "BACK BANNER",
      "SILK FLAG", "HORSE STREAMER", "CLAN HERALDRY", "IDENTIFY",
      "WAR SMOKE", "FLAG BEARER", "GOLD CREST", "BLACK MOTIF",
      "RALLY POINT", "HONOR CODE", "INFANTRY POLE", "TROOP UNIT",
      "LOYALTY", "PARADE"
    ]
  },
  {
    id: 12,
    title: "TANEGASHIMA MATCHLOCKS",
    subtitle: "The Arrival and Mass Production of Firearms",
    words: [
      "TANEGASHIMA", "MATCHLOCK", "GUNPOWDER", "TRIGGER LOCK",
      "BARREL FORGE", "VOLLEY DRILL", "LEAD BULLET", "IRON SMELTER",
      "SALTPETER", "SULPHUR MINE", "RANGE FIRING", "SIGHT AIM",
      "INFANTRY ARMS", "TACTIC REFORM", "SMOKE FOG", "RELOAD SPEED",
      "ARSENAL", "PRECISION"
    ]
  },
  {
    id: 13,
    title: "ASHIGARU FOOT SOLDIERS",
    subtitle: "Light-Foot Infantry with Spears and Bows",
    words: [
      "ASHIGARU", "YARI SPEAR", "BAMBOO BOW", "CONICAL HAT",
      "JINGASA", "LIGHT INFANTRY", "SPEAR WALL", "TRAINED UNIT",
      "RATION RICE", "DRILL MARCH", "DISCIPLINE", "FIELD SHIELD",
      "FRONT LINE", "PEASANT RANK", "TACTICAL GRID", "COORDINATION",
      "STAMINA", "VANGUARD"
    ]
  },
  {
    id: 14,
    title: "BUSHIDO CODE",
    subtitle: "The Way of the Warrior: Loyalty, Honor & Duty",
    words: [
      "BUSHIDO", "WARRIOR WAY", "LOYALTY OATH", "HONOR BOND",
      "RECTITUDE", "COURAGE HEART", "BENEVOLENCE", "RESPECT RITE",
      "SINCERITY", "SELF CONTROL", "FEARLESS MIND", "LORD SERVICE",
      "MORAL VIRTUE", "MEDITATION", "SWORD CODE", "SACRIFICE",
      "INTEGRITY", "ETIQUETTE"
    ]
  },
  {
    id: 15,
    title: "SHINOBI & SCOUTS",
    subtitle: "Shadow Intelligence, Espionage & Stealth",
    words: [
      "SHINOBI", "STEALTH AGENT", "NIGHT RECON", "INFILTRATION",
      "ROPE HOOK", "DARK CLOTH", "SILENT STEP", "SMOKE BOMB",
      "CIPHER NOTE", "FALSE GUARD", "INTEL SCOUT", "CASTLE MOAT",
      "DECEPTION", "SECRET ORDER", "SHURIKEN", "DISGUISE",
      "VIGILANCE", "SHADOW"
    ]
  },
  {
    id: 16,
    title: "DAIMYO & RETAINERS",
    subtitle: "Provincial Lords & The Domains of Japan",
    words: [
      "DAIMYO", "PROVINCE LORD", "FIEF DOMAIN", "KOKU RICE",
      "RETAINER BAN", "VASSAL TIE", "CASTLE TOWN", "JOKAMACHI",
      "OATH TRIBUTE", "REVENUE BOOK", "LOCAL COURT", "SAMURAI BAND",
      "MILITARY LEVY", "TAX HARVEST", "FAMILY HONOR", "GOVERNOR",
      "LOYALTY", "DOMAIN"
    ]
  },
  {
    id: 17,
    title: "THE SHOGUN'S BAKUFU",
    subtitle: "The Military Tent Government of Japan",
    words: [
      "BAKUFU GOV", "TENT COUNCIL", "ELDER ROJU", "MAGISTRATE",
      "BUGYO OFFICE", "DECREE CODE", "ORDER LAW", "FEUDAL POWER",
      "TAX GRAIN", "SECURITY POST", "BORDER PASS", "TRAVEL PERMIT",
      "JUSTICE COURT", "ADMINISTRATOR", "CENTRAL RULE", "COMMAND",
      "STABILITY", "REGULATION"
    ]
  },
  {
    id: 18,
    title: "SEPPUKU & HONOR",
    subtitle: "Ritual Restoration of the Warrior's Soul",
    words: [
      "SEPPUKU", "RITUAL HONOR", "SHORT BLADE", "WHITE ROBE",
      "SECOND CUTTER", "KAISHAKUNIN", "TATAMI MAT", "SOLEMN RITE",
      "POEM FAREWELL", "WARRIOR WILL", "PURITY RESTORE", "COURAGE DIE",
      "CLAN DIGNITY", "UNBLEMISHED", "STEADFAST", "DUTY BOUND",
      "CEREMONY", "RESOLVE"
    ]
  },
  {
    id: 19,
    title: "SANKEI ALTERNATE RESIDENCE",
    subtitle: "Sankin-Kotai: The Processions to Edo",
    words: [
      "SANKIN KOTAI", "ALTERNATE STAY", "LORDS RETINUE", "HIGHWAY MARCH",
      "EXPEDITION", "PALANQUIN", "HOSTAGE SYSTEM", "EXPENSE DRAIN",
      "PEACE BALANCE", "TRAVEL ORDER", "COAST ROAD", "TOKAIDO ROUTE",
      "BEARER TEAM", "FAMILY IN EDO", "CEREMONY WALK", "REGULATION",
      "LOYALTY MARCH", "SECURITY"
    ]
  },
  {
    id: 20,
    title: "THE SENGOKU ERA CLOSING",
    subtitle: "The Great Pacification: The Sword Laid to Rest",
    words: [
      "PACIFICATION", "WARS END", "SWORD HUNTING", "PEACE REIGN",
      "REBUILD CAPITAL", "TRADE FLOURISH", "FARM RESTORE", "CANAL TRAFFIC",
      "STABLE COMMERCE", "TEMPLE RESTORE", "CIVIC ORDER", "NEW CENTURY",
      "TRANQUILLITY", "GOLDEN ERA", "HARMONY BORN", "SECURITY",
      "PROSPERITY", "DAWN"
    ]
  },

  // SECTION II: THE IMPERIAL COURT & ANCIENT TEMPLES (21-40)
  {
    id: 21,
    title: "KYOTO IMPERIAL PALACE",
    subtitle: "Gosho: The Sacred Abode of the Tenno",
    words: [
      "KYOTO GOSHO", "SHISHINDEN", "CHERRY TREE", "CITRUS BUSH",
      "COURT ENVOY", "GRAVEL YARD", "CEDAR ROOF", "SLIDING PANEL",
      "CORONATION", "SACRED SEAT", "VERMILION WOOD", "HALL OF STATE",
      "IMPERIAL GATE", "CYPRESS BARK", "QUIET DIGNITY", "CEREMONY",
      "ANCIENT LINE", "SOVEREIGN"
    ]
  },
  {
    id: 22,
    title: "THE TENNO & KUGE NOBILITY",
    subtitle: "Guardians of Ancient Poetry, Music & Rites",
    words: [
      "TENNO EMPEROR", "KUGE NOBILITY", "POETRY RITE", "WAKA VERSE",
      "COURT KIMONO", "SILK TRAIN", "FLUTE GAGAKU", "CALLIGRAPHY",
      "ANCIENT RITE", "INCENSE DUEL", "CEREMONIAL", "SACRED LINE",
      "DIGNITY SILENT", "TRADITION KEEPER", "PALACE CHAMBER", "ANCESTRAL",
      "HEIRLOOM", "HERITAGE"
    ]
  },
  {
    id: 23,
    title: "KINKAKU-JI",
    subtitle: "The Golden Pavilion & Mirror Pond Reflections",
    words: [
      "KINKAKUJI", "GOLDEN TEMPLE", "MIRROR POND", "KYOKO CHI",
      "PINE ISLAND", "THREE TIERS", "ZEN ARCHITECT", "GOLD FOIL LEAF",
      "ROOF PHOENIX", "ASHIKAGA YOSHI", "WATER GLOW", "SACRED GARDEN",
      "REFLECTION", "SUMMER BREEZE", "BUDDHA STATUE", "TIMELESS VIEW",
      "SERENITY", "SPLENDOR"
    ]
  },
  {
    id: 24,
    title: "GINKAKU-JI",
    subtitle: "The Silver Pavilion & Sea of Silver Sand",
    words: [
      "GINKAKUJI", "SILVER TEMPLE", "SAND MOON", "GINSHADAN",
      "CONICAL CONE", "KOGETSUSHAI", "MOSS PATHWAY", "BAMBOO GROVE",
      "WABI SIMPLICITY", "MOONLIGHT POND", "TEA PAVILION", "QUIET CORNER",
      "ASHIKAGA HERIT", "UNDERSTATED", "SAND MOUND", "CONTEMPLATION",
      "HARMONY", "PEACE"
    ]
  },
  {
    id: 25,
    title: "KIYOMIZU-DERA",
    subtitle: "The Grand Wooden Stage Above Otowa Waterfall",
    words: [
      "KIYOMIZUDERA", "WOODEN STAGE", "NO NAIL PILLARS", "CLIFF VALLEY",
      "OTOWA WATER", "THREE STREAMS", "HEALTH WATER", "WISDOM SIP",
      "CHERRY BLOSSOM", "PAGODA SPIRE", "TEMPLE BELL", "PILGRIM PATH",
      "VERMILION GATE", "AUTUMN RIDGE", "MOUNTAIN VISTA", "CANOPY VIEW",
      "PURIFICATION", "SANCTITY"
    ]
  },
  {
    id: 26,
    title: "RYOAN-JI ROCK GARDEN",
    subtitle: "Fifteen Stones of Meditative Solitude",
    words: [
      "RYOANJI", "FIFTEEN STONES", "RAKED GRAVEL", "MOSS ISLAND",
      "CLAY WALL", "ZEN RIDDLE", "UNSEEN STONE", "SILENT SPACE",
      "MEDITATION", "OBSERVER MIND", "VERANDA SEAT", "SIMPLICITY",
      "MINIMAL FORM", "STILLNESS", "SAND WAVES", "CONTEMPLATION",
      "ENLIGHTENMENT", "VOID"
    ]
  },
  {
    id: 27,
    title: "MOUNT HIEI & ENRYAKU-JI",
    subtitle: "The Warrior Monks & The Guardian Mountain",
    words: [
      "MOUNT HIEI", "ENRYAKUJI", "TENDAI SECT", "WARRIOR MONK",
      "SOHEI CLAN", "CEDAR FOREST", "ETERNAL LAMP", "PEAK SANCTUARY",
      "NORTHEAST GATE", "DEMON DEFENSE", "PILGRIMAGE PATH", "BELL CHIME",
      "MIST RIDGE", "MOUNTAIN AIR", "MONASTIC DISCIP", "HISTORIC SIEGE",
      "PURITY", "FORTITUDE"
    ]
  },
  {
    id: 28,
    title: "SANJUSANGENDO",
    subtitle: "The Hall of One Thousand Kannon Statues",
    words: [
      "SANJUSANGENDO", "THOUSAND STATUE", "GOLDEN KANNON", "ARCHERY DUEL",
      "LONG VERANDA", "CYPRESS HALL", "THIRTY THREE", "GUARDIAN DEVA",
      "THUNDER GOD", "WIND GOD", "CARVED CYPRESS", "COMPASSION",
      "GOLD LEAF GLOW", "ARROW STRIKE", "ANNUAL MATCH", "SACRED HALL",
      "REVERENCE", "MAJESTY"
    ]
  },
  {
    id: 29,
    title: "FUSHIMI INARI TAISHA",
    subtitle: "Senbon Torii: The Scarlet Forest of Ten Thousand Gates",
    words: [
      "FUSHIMI INARI", "SENBON TORII", "SCARLET GATES", "FOX STATUE",
      "KITSUNE", "KEY IN MOUTH", "RICE HARVEST", "BUSINESS PRAY",
      "SACRED MOUNT", "WINDING PATH", "VERMILION TUNNEL", "STONE SHRINE",
      "FOREST TRAIL", "LANTERN LIGHT", "OFFERING BOX", "SPIRIT GUARD",
      "DEVOTION", "BLESSING"
    ]
  },
  {
    id: 30,
    title: "GION & YASAKA SHRINE",
    subtitle: "The Sacred Sanctuary of the Gion Quarter",
    words: [
      "YASAKA SHRINE", "GION DISTRICT", "LANTERN STAGE", "PLAGUE BANISH",
      "SUMMER FEAST", "KAMOMACHI", "TEA SHOP ROW", "STONE PAVING",
      "SHINTO PRIEST", "RICE WINE CASK", "SACRED CEDAR", "MIRROR EMBLEM",
      "EVENING LIGHT", "PILGRIM GREET", "WOODEN ARCH", "PROTECTION",
      "HERITAGE", "CELEBRATION"
    ]
  },
  {
    id: 31,
    title: "DAITOKU-JI ZEN TEMPLE",
    subtitle: "The Spiritual Heart of the Tea Masters",
    words: [
      "DAITOKUJI", "RINZAI SECT", "TEA COMPOUND", "SANMON GATE",
      "SEN NO RIKYU", "STATUE DISPUTE", "ROCK COURTYARD", "PINE AVENUE",
      "SUBTEMPLE", "MOSS CARPET", "INK PAINTING", "TEA HOUSE",
      "ZAZEN CUSHION", "SILENT DISCIP", "ZEN MASTER", "ENLIGHTENMENT",
      "TRADITION", "TRANQUILLITY"
    ]
  },
  {
    id: 32,
    title: "KENNIN-JI",
    subtitle: "The Oldest Zen Temple in Kyoto & Dragon Ceiling",
    words: [
      "KENNINJI", "OLDEST ZEN", "EISAI FOUNDER", "TEA SEEDS",
      "DRAGON ROOF", "WIND AND THUNDER", "SOTATSU SCREENS", "SAND GARDEN",
      "PINE TREES", "CHINESE VISITOR", "DHARMA HALL", "MEDITATION",
      "GION BORDER", "WOOD CARVING", "INCENSE SMOKE", "WISDOM TEACH",
      "SERENITY", "LEGACY"
    ]
  },
  {
    id: 33,
    title: "TENRYU-JI & ARASHIYAMA",
    subtitle: "The Heavenly Dragon & The Sogenchi Pond",
    words: [
      "TENRYUJI", "ARASHIYAMA", "SOGENCHI POND", "DRAGON TEMPLE",
      "BAMBOO GROVE", "RIVER OI", "MOON BRIDGE", "TOGETSUKYO",
      "MOUNTAIN REFLECT", "MUSO SOSEKI", "ZEN DESIGN", "CARP STREAM",
      "CHERRY CANOPY", "MAPLE LEAVES", "STONE PATH", "HARMONY VIEW",
      "TRANQUILLITY", "SANCTUARY"
    ]
  },
  {
    id: 34,
    title: "SHINTO PURIFICATION",
    subtitle: "Misogi, Temizuya Basins & Sacred Shimenawa",
    words: [
      "TEMIZUYA", "WATER LADLE", "PURIFICATION", "SHIMENAWA ROPE",
      "WHITE PAPER", "SHIDE STREAMER", "WOOD CLAP", "BOW REVERENCE",
      "KAMI SPIRIT", "SACRED FOREST", "SALT PURIFY", "NATURE REVERE",
      "BELL ROPE", "COIN OFFERING", "CLEAN HEART", "SHINTO SHRINE",
      "SANCTITY", "BLESSING"
    ]
  },
  {
    id: 35,
    title: "PURE LAND & CHION-IN",
    subtitle: "The Monumental Gate & The Great Temple Bell",
    words: [
      "CHIONIN", "JODO SECT", "SANMON COLOSSUS", "NIGHTINGALE STAIR",
      "GIANT BELL", "SEVENTY TONS", "PURE LAND", "AMIDA BUDDHA",
      "NENBUTSU PRAY", "HIGASHIYAMA", "TEMPLE RAMPART", "HONEN FOUNDER",
      "SACRED SCRIPT", "DEEP RESONANCE", "PILGRIM GATHER", "DEVOTION",
      "PEACE PRAYER", "MAJESTY"
    ]
  },
  {
    id: 36,
    title: "KODAI-JI",
    subtitle: "Kita no Mandokoro's Tribute to Hideyoshi",
    words: [
      "KODAIJI", "NENE FOUNDER", "MAKIE LACQUER", "MEMORIAL TEMPLE",
      "BAMBOO COVE", "DRAGON PASSAGE", "GARDEN ENSEMBLE", "TEA COTTAGE",
      "ROOF SHINGLE", "POND REFLECT", "AUTUMN LIGHT", "GOLD POWDER",
      "MOMOYAMA STYLE", "DEVOTED WIFE", "RESTING PLACE", "TRANQUILLITY",
      "MEMORY", "ELEGANCE"
    ]
  },
  {
    id: 37,
    title: "TO-JI & THE FIVE-TIER PAGODA",
    subtitle: "The Tallest Wooden Pagoda in Feudal Japan",
    words: [
      "TOJI TEMPLE", "FIVE TIER PAGODA", "KOBO DAISHI", "SHINGON SECT",
      "MANDALA HALL", "WOODEN SPIRE", "SOUTHERN GATE", "FLEA MARKET",
      "ANTIQUE STALL", "SACRED RELIC", "CYPRESS CARVING", "TEMPLE SQUARE",
      "EARTHQUAKE RES", "PILLAR CENTER", "SHADOW TOWER", "KYOTO HORIZON",
      "ICONIC VIEW", "HERITAGE"
    ]
  },
  {
    id: 38,
    title: "KITANO TENMANGU",
    subtitle: "Shrine of Sugawara no Michizane & Plum Blossoms",
    words: [
      "KITANO TENMAN", "SUGAWARA", "SCHOLAR GOD", "PLUM BLOSSOM",
      "BRONZE BULL", "STONE LANTERN", "ACADEMIC LUCK", "TEA GATHERING",
      "RED PLUM", "WHITE BLOSSOM", "PRAYER WOOD", "CALLIGRAPHY FEST",
      "POETRY SACRED", "NORTH DISTRICT", "SHINTO ENCLAVE", "WISDOM PRAY",
      "TRADITION", "REVERENCE"
    ]
  },
  {
    id: 39,
    title: "THE INCENSE CEREMONY",
    subtitle: "Kohdo: Listening to the Sacred Fragrance of Woods",
    words: [
      "KOHDO WAY", "INCENSE LISTEN", "AGARWOOD", "KYARA WOOD",
      "SILVER MICA", "CHARCOAL EMB", "ASH CONE", "FEATHER BRUSH",
      "COURT ELEGANCE", "POETRY GUESS", "FRAGRANCE NOTE", "PERFUME WISP",
      "MINDFUL BREATH", "CEREMONIAL TONG", "NOBLE GATHER", "SUBTLETY",
      "CALM SPIRIT", "PURITY"
    ]
  },
  {
    id: 40,
    title: "TEMPLE BELLS AT DUSK",
    subtitle: "Bonsho: The Resonant Chimes Across the Valley",
    words: [
      "BONSHO BELL", "DUSK STRIKE", "WOODEN BEAM", "VALLEY ECHO",
      "DEEP TONE", "BRONZE LOTUS", "NIGHT INCOMING", "TEMPLE RIDGE",
      "MONK PRAYER", "MINDFUL HEAR", "PEACEFUL CHIME", "DAY CLOSING",
      "MOUNTAIN REVERB", "TRANQUIL HOUR", "PURIFY MIND", "ANCIENT ECHO",
      "RESONANCE", "STILLNESS"
    ]
  },

  // SECTION III: ZEN, TEA MASTERS & GARDEN AESTHETICS (41-60)
  {
    id: 41,
    title: "SEN NO RIKYU",
    subtitle: "The Supreme Master of Wabi-Cha Aesthetics",
    words: [
      "SEN NO RIKYU", "WABI TEA", "FOUR VIRTUES", "WA KEI SEI JAKU",
      "HARMONY RESPECT", "PURITY CALM", "TAIKO COUNSEL", "TEA PHILOSOPHY",
      "CLAY WALLS", "TINY ENTRANCE", "NIJIRIGUCHI", "UNADORNED",
      "BAMBOO SPOON", "KETTLE STEAM", "LAST TEA CUP", "AESTHETIC LAW",
      "IMMORTAL NAME", "LEGACY"
    ]
  },
  {
    id: 42,
    title: "CHANOYU: THE TEA CEREMONY",
    subtitle: "The Way of Tea: An Encounter Once in a Lifetime",
    words: [
      "CHANOYU", "TEA WAY", "ICHIGO ICHIE", "ONCE LIFETIME",
      "MATCHA GREEN", "BAMBOO WHISK", "CHASEN", "IRON KETTLE",
      "CHAGAMA", "WATER LADLE", "HISHAKU", "SWEET CONFECTION",
      "WAGASHI", "BOW COURTESY", "TATAMI STEP", "MINDFUL SERVE",
      "HOSPITALITY", "TRANQUILLITY"
    ]
  },
  {
    id: 43,
    title: "WABI-SABI AESTHETICS",
    subtitle: "Finding Transcendent Beauty in Imperfection and Age",
    words: [
      "WABI SABI", "IMPERFECTION", "AGED BEAUTY", "RUSTIC CHARM",
      "CRACKED GLAZE", "WEATHERED WOOD", "ASYMMETRY", "SIMPLICITY",
      "NATURAL FORM", "MOSS COVER", "TRANSIENCE", "MINIMALIST",
      "PATINA FINISH", "EARTHEN TONE", "QUIET DEPTH", "SOULFUL ART",
      "GRACEFUL AGE", "HARMONY"
    ]
  },
  {
    id: 44,
    title: "RAKU WARE POTTERY",
    subtitle: "Hand-Molded Tea Bowls Fired in Red and Black",
    words: [
      "RAKU BOWL", "CHOJIRO", "HAND MOLDED", "RED RAKU",
      "BLACK RAKU", "LOW FIRE KILN", "GLAZE TONGS", "HOT WATER PULL",
      "WARM PALM", "TACTILE FEEL", "DRINK RIM", "TEA ENJOY",
      "SUBTLE UNEVEN", "EARTHEN CLAY", "MASTERWORK", "IMPERFECT RIM",
      "WEIGHT BALANCE", "TEXTURE"
    ]
  },
  {
    id: 45,
    title: "TATAMI & CHASHITSU",
    subtitle: "The Architectural Geometry of the Rustic Tea Room",
    words: [
      "CHASHITSU", "TATAMI MAT", "RUSH GRASS", "WOVEN BORDER",
      "FOUR AND HALF", "SLIDING PAPER", "SHOJI WINDOW", "TOKOMONA ALCOVE",
      "FLOWER VASE", "CALLIGRAPHY PIN", "CYPRESS SILL", "LOW DOORWAY",
      "EQUALITY ENTRY", "SWORD DEPOSIT", "CEDAR CEILING", "EARTHEN ROOM",
      "PROPORTION", "SERENITY"
    ]
  },
  {
    id: 46,
    title: "ZAZEN MEDITATION",
    subtitle: "Sitting in Silent Stillness to Realize Buddha Nature",
    words: [
      "ZAZEN", "SEATED POSTURE", "ZAFU CUSHION", "BREATH FOCUS",
      "STRAIGHT BACK", "HALF LOTUS", "HANDS MUDRA", "QUIET MIND",
      "KYOSAKU STICK", "ALERTNESS", "DOJO HALL", "MORNING BELL",
      "DROP THOUGHTS", "INNER CALM", "INSIGHT DAWN", "AWARENESS",
      "ENLIGHTENMENT", "STILLNESS"
    ]
  },
  {
    id: 47,
    title: "KARESANSUI DRY GARDENS",
    subtitle: "Painting Oceans and Mountains in Stone and Sand",
    words: [
      "KARESANSUI", "DRY LANDSCAPE", "RAKED SAND", "WATERLESS SEAS",
      "STONE ISLAND", "GRANITE ROCKS", "MOSS REEF", "RIPPLE PATTERN",
      "WOODEN RAKE", "MONK LABORS", "ABSTRACT FORM", "NATURE METAPHOR",
      "MOUNTAIN ROCKS", "STREAMLESS", "CONTEMPLATION", "ETERNAL VIEW",
      "MINDFUL RAKE", "QUIETUDE"
    ]
  },
  {
    id: 48,
    title: "TOBI-ISHI STEPPING STONES",
    subtitle: "Guiding the Guest's Steps to the Teahouse",
    words: [
      "TOBI ISHI", "STEPPING STONES", "ROJI PATH", "DEWY GROUND",
      "MOSS BORDER", "NATURAL SLABS", "PACING PACE", "FOOT GUIDANCE",
      "RAIN WASHED", "FALLEN LEAF", "GARDEN TREK", "SLOW APPROACH",
      "RUSTIC TRAIL", "LANTERN GUIDE", "NATURE CONVERS", "SLANTED ROCK",
      "BALANCE", "JOURNEY"
    ]
  },
  {
    id: 49,
    title: "KOKEDERA MOSS GARDEN",
    subtitle: "One Hundred Varieties of Velvet Green",
    words: [
      "KOKEDERA", "SAIHOJI TEMPLE", "VELVET MOSS", "HUNDRED KINDS",
      "CARPET GREEN", "CEDAR SHADE", "HUMID VALLEY", "HEART POND",
      "GOLDEN LEAF", "SOFT EARTH", "ROOT EMBRACE", "MORNING DEW",
      "MIST CARPET", "TRANQUIL WALK", "ANCIENT SANCT", "RESTFUL EYE",
      "EMERALD GLOW", "SERENITY"
    ]
  },
  {
    id: 50,
    title: "TSUKUBAI WATER BASINS",
    subtitle: "Stooping Down to Purify Hands and Heart",
    words: [
      "TSUKUBAI", "STONE BASIN", "BAMBOO FLUME", "WATER DRIP",
      "PURIFY HANDS", "BOWL LADLE", "STOOPING DOWN", "HUMILITY ACT",
      "COIN STONE", "RUSTIC CARVING", "CLEAR SPRING", "SURFACE LEAF",
      "RIPPLE SOUND", "TEA GARDEN ROJI", "CLEAN MOUTH", "SOLEMN RITE",
      "HUMILITY", "PEACE"
    ]
  },
  {
    id: 51,
    title: "BONSAI CULTIVATION",
    subtitle: "The Majesty of Old Cedars in Miniature Pots",
    words: [
      "BONSAI TREE", "MINIATURE", "POTTED PINE", "SHAPED BRANCH",
      "COPPER WIRE", "PRUNING SHEARS", "ROOT TRIMMING", "JIN DEADWOOD",
      "SHARI TRUNK", "DECADE PATIENT", "NATURE MIRROR", "WEATHERED LOOK",
      "CERAMIC POT", "MOSS ACCENT", "ANCIENT SOUL", "SEASON TRANS",
      "HARMONY", "PATIENCE"
    ]
  },
  {
    id: 52,
    title: "STONE LANTERNS",
    subtitle: "Toro: Beacons in the Twilight Moss",
    words: [
      "TORO LANTERN", "GRANITE BASE", "LIGHT CHAMBER", "CANDLE GLOW",
      "PAGODA ROOF", "SNOW VIEWING", "YUKIMI TORO", "MOSS PATINA",
      "GARDEN BEACON", "TWILIGHT GUIDE", "STONE PILLAR", "CARVED BASE",
      "SHADOW LIGHT", "RUSTIC ORNAMENT", "RAIN RESIST", "NIGHT PATH",
      "ENDURANCE", "CHARM"
    ]
  },
  {
    id: 53,
    title: "IKEBANA: FLOWER ART",
    subtitle: "Kado: Living Flowers, Heaven, Earth and Humankind",
    words: [
      "IKEBANA", "KADO WAY", "HEAVEN BRANCH", "EARTH BRANCH",
      "HUMAN STEM", "KENZAN FROG", "BAMBOO VASE", "MINIMAL STEM",
      "FLOWER BUD", "SEASONAL CUT", "ASYMMETRIC FORM", "EMPTY SPACE",
      "LIVING BEAUTY", "CAMELIA STEM", "PLUM BLOSSOM", "MEDITATION",
      "GRACEFUL", "DELICACY"
    ]
  },
  {
    id: 54,
    title: "UJI MATCHA",
    subtitle: "The Verdant Hills of the Premier Tea Plantations",
    words: [
      "UJI MATCHA", "SHADED BUSH", "TANA TRELLIS", "TENCHA LEAF",
      "STONE MILL", "FINE POWDER", "JADE FOAM", "GREEN LIQUID",
      "FARM PICKERS", "SPRING FLUSH", "RIVER MIST", "SOIL NOURISH",
      "SWEET NOTES", "CEREMONIAL GRADE", "EXPORT BASKET", "TEA DYNASTY",
      "PURITY", "FLAVOR"
    ]
  },
  {
    id: 55,
    title: "KAISEKI DINING",
    subtitle: "The Multi-Course Symphony of Seasonal Flavors",
    words: [
      "KAISEKI", "MULTI COURSE", "SEASON DISH", "LACQUER BOWL",
      "EARTHEN POTTERY", "FRESH TOFU", "DASHI BROTH", "BONITO FLAKE",
      "SEAWEED KOMBU", "PICKLED RADISH", "RIVER TROUT", "BAMBOO SHOOT",
      "CHESTNUT MUSH", "EDIBLE FLOWER", "CULINARY ART", "HOSPITALITY",
      "HARMONY TASTE", "SPLENDOR"
    ]
  },
  {
    id: 56,
    title: "SHOJI & FUSUMA SCREENS",
    subtitle: "Filtered Paper Light and Painted Partitions",
    words: [
      "SHOJI SCREEN", "FUSUMA DOOR", "WASHI PAPER", "WOOD LATTICE",
      "FILTERED LIGHT", "SOFT SHADOW", "PULL RECESS", "MURAL CANVAS",
      "SLIDING TRACK", "SPACE DIVIDE", "FLEXIBLE ROOM", "TATAMI BORDER",
      "REPLACE PAPER", "AIR BREEZE", "SUBTLETY", "INTERIOR GRACE",
      "HARMONY", "DESIGN"
    ]
  },
  {
    id: 57,
    title: "YAMANAKA LACQUER",
    subtitle: "Turning Wood into Lustrous Vessels",
    words: [
      "YAMANAKA", "WOOD TURNING", "LUSTROUS COAT", "NATURAL SAP",
      "LATHE CARVING", "GRAIN PATTERN", "TEA CADDY", "NATSUME BOWL",
      "SOUP VESSEL", "BLACK FINISH", "RED BORDER", "DURABILITY",
      "HEAT PROOF", "POLISHED WAX", "ARTISAN EYE", "HANDICRAFT",
      "ELEGANCE", "PERFECTION"
    ]
  },
  {
    id: 58,
    title: "AUTUMN MAPLES IN TAKAO",
    subtitle: "Momiji: The Blazing Scarlet Valleys of Kyoto",
    words: [
      "MOMIJI MAPLE", "SCARLET LEAF", "TAKAO VALLEY", "RIVER STREAM",
      "CRIMSON CANOPY", "AUTUMN CHILL", "FALLEN LEAF", "GOLDEN TINGE",
      "TEMPLE BRIDGE", "VERMILION WOOD", "SEASONAL SIGHT", "NATURE WONDER",
      "MOUNTAIN HIKE", "OCTOBER LIGHT", "REFLECT WATER", "EVENING WALK",
      "SPLENDOR", "BEAUTY"
    ]
  },
  {
    id: 59,
    title: "CHERRY BLOSSOMS AT MARUYAMA",
    subtitle: "Sakura: The Ephemeral Cloud of Springtime Petals",
    words: [
      "SAKURA", "CHERRY BLOSSOM", "MARUYAMA PARK", "WEEPING CHERRY",
      "NIGHT ILLUM", "SPRING BREEZE", "FALLING PETAL", "PINK CANOPY",
      "HANAMI PICNIC", "RICE WINE CUP", "TEMPORAL GRACE", "PETAL SNOW",
      "CELEBRATION", "SEASONAL JOY", "LANTERN SHINE", "POETIC HEARTS",
      "BEAUTY", "EPHEMERAL"
    ]
  },
  {
    id: 60,
    title: "THE SOUND OF WATER",
    subtitle: "Bamboo Shishi-Odoshi in Silent Monastic Courtyards",
    words: [
      "SHISHI ODOSHI", "BAMBOO PIVOT", "WATER WEIGHT", "STONE CLACK",
      "DEER SCARER", "QUIET GARDEN", "RHYTHMIC DROP", "ECHO STILLNESS",
      "CLEAR TRICKLE", "MOSS COVER", "SPRING WATER", "MONASTIC YARD",
      "AWARENESS BEAT", "NATURE DEVICE", "HOLLOW BAMBOO", "PACING SOUND",
      "TRANQUILLITY", "ZEN"
    ]
  },

  // SECTION IV: KANO MASTERS, GOLD LEAF & RINPA ART (61-80)
  {
    id: 61,
    title: "KANO EITOKU",
    subtitle: "The Master of Monumental Momoyama Gold Screens",
    words: [
      "KANO EITOKU", "GOLD LEAF", "CHINESE LIONS", "CYPRESS SCREEN",
      "BOLD BRUSHWORK", "MOMOYAMA ART", "CASTLE MURAL", "SHOGUN PATRON",
      "POWERFUL FORM", "DRAMATIC TREE", "MINERAL PIGMENT", "SPLENDID VIEW",
      "KANO SCHOOL", "CANVAS GRANDEUR", "AZUCHI MURALS", "LEGEND MASTER",
      "GENIUS", "MAJESTY"
    ]
  },
  {
    id: 62,
    title: "HASEGAWA TOHAKU",
    subtitle: "The Pine Trees Screen: Master of Misty Sumi-e",
    words: [
      "TOHAKU", "PINE TREES", "SHORINZU SCREEN", "INK WASH",
      "SUMIE SHADOW", "MISTY FOREST", "ATMOSPHERIC", "EMPTY CANVAS",
      "CONTEMPLATION", "RIVAL TO KANO", "CHISHAKUIN", "MAPLE LEAVES",
      "POETIC SOUL", "DEEP RESTRAINT", "JAPANESE SPIRIT", "SILENT GROVE",
      "INTENSITY", "MASTERPIECE"
    ]
  },
  {
    id: 63,
    title: "RINPA: THE RENAISSANCE OF DECOR",
    subtitle: "Hon'ami Koetsu & Tawaraya Sotatsu",
    words: [
      "RINPA SCHOOL", "KOETSU", "SOTATSU", "WIND GOD",
      "THUNDER GOD", "GOLD FOIL", "TARASHIKOMI", "INK POOLING",
      "DECORATIVE", "POETRY SCROLL", "CALLIGRAPHY", "NATURE DESIGN",
      "BOLD OUTLINE", "TAKAMINE ART", "ARTISAN COLONY", "RHYTHMIC FORM",
      "ELEGANCE", "INNOVATION"
    ]
  },
  {
    id: 64,
    title: "BYOBU FOLDING SCREENS",
    subtitle: "Six-Panel Masterworks That Transformed Interiors",
    words: [
      "BYOBU SCREEN", "SIX PANEL", "PAPER HINGE", "GOLD GROUND",
      "SILK BORDER", "LACQUER FRAME", "PANORAMA MURAL", "SEASONS CYCLE",
      "ZIGZAG FOLD", "PORTABLE ART", "TATAMI STAND", "ROOM ENHANCE",
      "BIRD AND FLOWER", "RIVER SCENE", "HISTORIC CLASH", "GOLD REFLECTION",
      "SPLENDOR", "VERSATILITY"
    ]
  },
  {
    id: 65,
    title: "GOLD LEAF FOIL",
    subtitle: "Haku: Hammering Pure Gold to Whispers of Light",
    words: [
      "GOLD LEAF FOIL", "HAKU BEATER", "GOLD DUST", "LEATHER PAPER",
      "HAMMER STRIKE", "THIN FLAKES", "REFLECT LIGHT", "CLOUDS YAMATO",
      "BAMBOO TONGS", "LACQUER GLUE", "CANDLE SHINE", "GLOWING ROOM",
      "MOMOYAMA GOLD", "KINKAKU COVER", "TEMPLE STATUE", "BRILLIANCE",
      "CRAFT SECRETS", "MAJESTY"
    ]
  },
  {
    id: 66,
    title: "SUMI-E INK PAINTING",
    subtitle: "The Infinite Tones of Black Pine-Soot Ink",
    words: [
      "SUMIE INK", "PINE SOOT", "INK CAKE", "WATER DROPPER",
      "STONE GRIND", "INKSTONE SLAB", "HAIR BRUSH", "BAMBOO STEM",
      "SINGLE STROKE", "CONFIDENT LINE", "WET BRUSH", "DRY BRUSH",
      "TONAL SHADES", "SPIRIT RESOUND", "ZEN PAINTER", "MEDITATIVE",
      "MASTERY", "SIMPLICITY"
    ]
  },
  {
    id: 67,
    title: "MAKIE GOLD LACQUER",
    subtitle: "Sprinkling Gold and Silver onto Wet Urushi",
    words: [
      "MAKIE LACQUER", "SPRINKLED GOLD", "SILVER DUST", "URUSHI SAP",
      "FINE BRUSH", "POLISHED CHAR", "POWDER TUBE", "CREST DESIGN",
      "WRITING BOX", "SUZURIBAKO", "TEA CADDY", "JEWEL BOX",
      "HIGH RELIEF", "TAKOMAKIE", "DURABLE GLOSS", "IMPERIAL GIFT",
      "LUXURY CRAFT", "RADIANCE"
    ]
  },
  {
    id: 68,
    title: "NISHIJIN SILK WEAVING",
    subtitle: "The Legendary Brocade District of North Kyoto",
    words: [
      "NISHIJIN", "SILK LOOM", "GOLD BROCADE", "PATTERN WEAVE",
      "KIMONO SASH", "OBI WEAVER", "SHUTTLE WOOD", "WARP THREAD",
      "NORTH QUARTER", "NOBLE ORDER", "GUILD ARTISAN", "JACQUARD CARD",
      "HERITAGE WEAVE", "VIBRANT COLOR", "FESTIVAL GOWN", "PRESTIGE FABRIC",
      "INTRICATE", "SPLENDOR"
    ]
  },
  {
    id: 69,
    title: "KYO-YUZEN DYEING",
    subtitle: "Miyazaki Yuzensai's River-Rinsed Kimono Masterpieces",
    words: [
      "KYOYUZEN", "YUZENSAI", "RICE PASTE RES", "FREEHAND BRUSH",
      "KAMO RIVER", "WATER RINSING", "PASTE REMOVAL", "VIVID FLOWER",
      "SILK ROLL", "STREAM PURIFY", "COLOR DYES", "SUMMER MOTIF",
      "FASHION TREND", "ARTISAN EYE", "ELEGANT ROBE", "WEARABLE ART",
      "GRACEFUL", "DELICACY"
    ]
  },
  {
    id: 70,
    title: "NOH THEATER MASKS",
    subtitle: "Carved Cypress Faces That Shift with the Light",
    words: [
      "NOH MASK", "CARVED CYPRESS", "HANNYA DEMON", "KOOMOTE MAIDEN",
      "OKINA ELDER", "CHISEL CUT", "CHALK PAINT", "SUBTLE EMOTION",
      "HEAD TILT", "STAGE SHADOW", "ACTOR GESTURE", "PINE BACKDROP",
      "MYSTERIOUS", "SPIRIT DRAMA", "SACRED TRAD", "HAUNTING TONE",
      "EXPRESSION", "TIMELESS"
    ]
  },
  {
    id: 71,
    title: "KAKEMONO HANGING SCROLLS",
    subtitle: "The Seasonal Masterpiece for the Tokonoma Alcove",
    words: [
      "KAKEMONO", "HANGING SCROLL", "SILK MOUNTING", "ROLLER END",
      "BONE KNOB", "SEASONAL ART", "POEM COUPLAT", "INK BIRD",
      "WINTER PLUM", "AUTUMN MOON", "UNROLL CEREMONY", "ALCOVE PRIDE",
      "PROTECT BOX", "PAULOWNIA WOOD", "COLLECTOR ITEM", "REVERENCE",
      "ELEGANCE", "TRADITION"
    ]
  },
  {
    id: 72,
    title: "SHODO CALLIGRAPHY",
    subtitle: "The Dance of Mind, Energy and the Inked Brush",
    words: [
      "SHODO WAY", "BRUSH DANCE", "ENERGY KI", "BREATH HARMONY",
      "KAISHO BLOCK", "GYOSHO FLOW", "SOSHO CURSIVE", "SINGLE BREATH",
      "PRACTICE PAPER", "INK VISCOSITY", "CHARACTER FORM", "POETIC TRUTH",
      "MASTER SEAL", "VERMILION CHOP", "DISCIPLINE", "SOUL STAMP",
      "EXPRESSION", "GRACE"
    ]
  },
  {
    id: 73,
    title: "SUZURI INKSTONES",
    subtitle: "Ancient River Slate Carved for Scholars and Monks",
    words: [
      "SUZURI STONE", "SLATE QUARRY", "WATER WELL", "GRIND SLOPE",
      "SMOOTH GRAIN", "BLACK MINERAL", "INK RESIDUE", "SCHOLAR DESK",
      "CALLIGRAPHY COMP", "HEIRLOOM SLAB", "CARVED DRAGON", "BRUSH REST",
      "INK QUALITY", "STUDY ROOM", "MEDITATION AID", "TIMELESS TOOL",
      "ENDURANCE", "PURITY"
    ]
  },
  {
    id: 74,
    title: "MINERAL PIGMENTS: IWAENOGU",
    subtitle: "Crushed Malachite, Azurite, Cinnabar & Shells",
    words: [
      "IWAENOGU", "CRUSHED ROCK", "AZURITE BLUE", "GUNJO",
      "MALACHITE GREEN", "ROKUSHO", "CINNABAR RED", "OYSTER GOFUN",
      "ANIMAL GLUE", "NIKAWABOND", "PORCELAIN DISH", "WARM FINGER",
      "LIGHT REFRACT", "NATURAL SHINE", "UNFADING HUE", "MINERAL EARTH",
      "BRILLIANCE", "PRECIOUS"
    ]
  },
  {
    id: 75,
    title: "KANZAN & JITTOKU",
    subtitle: "The Zen Eccentrics of Broom and Scroll",
    words: [
      "KANZAN", "JITTOKU", "ZEN ECCENTRIC", "LAUGHING MONK",
      "BROOM SWEEP", "BLANK SCROLL", "COLD MOUNTAIN", "RUSTIC FREEDOM",
      "INK MASTER", "MOMOYAMA MURAL", "DETACHMENT", "WISDOM JEST",
      "FOOLISH SAGE", "CLOTHING TATTER", "SPIRIT FREE", "ENLIGHTENMENT",
      "HUMOR", "ENIGMA"
    ]
  },
  {
    id: 76,
    title: "BIRD AND FLOWER PAINTINGS",
    subtitle: "Kacho-ga: Nature's Harmony Across the Seasons",
    words: [
      "KACHOGA", "BIRD AND FLOWER", "GOLD BACKGROUND", "PEACOCK FEATHER",
      "CRANE PAIR", "SPARROW FLIGHT", "BAMBOO SHOOT", "PALE PEONY",
      "PLUM BLOSSOM", "STREAM STONE", "FOUR SEASONS", "PALACE SCREEN",
      "DETAIL BRUSH", "RADIANT COLOR", "POETIC NATURE", "HARMONY VIEW",
      "DELIGHT", "SPLENDOR"
    ]
  },
  {
    id: 77,
    title: "NANBAN ART & GALLEONS",
    subtitle: "Southern Barbarians: Portuguese Ships & Western Clocks",
    words: [
      "NANBAN SCREEN", "PORTUGUESE SHIP", "BLACK GALLEON", "JESUIT PRIEST",
      "WESTERN HAT", "BALLOON PANTS", "EXOTIC CARGO", "CLOCKWORK",
      "GLASS BEAD", "MATCHLOCK ARMS", "CURIOUS NOBLE", "NAGASAKI PORT",
      "KANO OBSERVER", "HISTORIC CLASH", "GOLD LEAF HARBOR", "GLOBAL VOYAGE",
      "NOVELTY", "ENCOUNTER"
    ]
  },
  {
    id: 78,
    title: "WOODEN ARCHITECTURE & DAIKU",
    subtitle: "Master Carpenters and Interlocking Joinery",
    words: [
      "DAIKU MASTER", "WOOD CARPENTER", "NO NAILS", "KIGUMI JOINERY",
      "MORTISE TENON", "CHISEL ADZE", "HAND PLANE", "KANA BLADE",
      "HINOKI CYPRESS", "CEDAR BEAM", "EARTHQUAKE JOINT", "BRACKET COMPLEX",
      "PAGODA CENTER", "ROOF TRUSS", "MILLENNIUM STAND", "PRECISION FIT",
      "CRAFT SECRETS", "MAJESTY"
    ]
  },
  {
    id: 79,
    title: "KATSURA IMPERIAL VILLA",
    subtitle: "The Pinnacle of Pure Japanese Architecture",
    words: [
      "KATSURA VILLA", "PRINCE TOSHITO", "MOON VIEWING", "BAMBOO BALCONY",
      "SHOI SHIN ESTATE", "GEOMETRIC PATH", "MOSS LAWN", "TEA PAVILION",
      "STEPPING STONES", "STREAM VISTA", "WABI ELEGANCE", "PERFECT BALANCE",
      "INTEGRATE NATURE", "RIVERBANK RET", "TIMELESS DESIGN", "ARCHITECTURE",
      "HARMONY", "SERENITY"
    ]
  },
  {
    id: 80,
    title: "THE YAMATO-E TRADITION",
    subtitle: "Classical Japanese Narrative Painting on Gold Grounds",
    words: [
      "YAMATO E", "CLASSICAL STYLE", "GOLDEN CLOUDS", "SUYARI GASUMI",
      "BIRD EYE VIEW", "ROOFLESS SCENE", "FUKINUKI YATAI", "GENJI TALE",
      "SILK CANVAS", "LUSTROUS COLOR", "NARRATIVE ART", "COURT SCENE",
      "LITERARY THEME", "FINE DETAIL", "JAPANESE SPIRIT", "POETIC PAST",
      "HERITAGE", "ELEGANCE"
    ]
  },

  // SECTION V: EDO TRANSITION, TOWNSFOLK & CIVIC LIFE (81-100)
  {
    id: 81,
    title: "IZUMO NO OKUNI & KABUKI",
    subtitle: "1603: The Riverbed Dances That Shook the Capital",
    words: [
      "OKUNI FOUNDER", "KAMO RIVERBED", "KABUKI DANCE", "AVANT GARDE",
      "MALE DISGUISE", "SWORD STRUT", "CHRISTIAN CROSS", "EXOTIC CLOTH",
      "POPULAR CROWD", "SPECTACLE", "WOODEN STAGE", "DRUM BEAT",
      "OUTRAGEOUS FUN", "SAMURAI CHEER", "NEW THEATER", "INNOVATION",
      "CHARISMA", "LEGEND"
    ]
  },
  {
    id: 82,
    title: "KAMO RIVER & SANJO BRIDGE",
    subtitle: "Sanjo Ohashi: The Western Terminal of the Tokaido",
    words: [
      "KAMO RIVER", "SANJO OHASHI", "WOODEN PILLARS", "BRONZE CAPS",
      "GIBOSHI EMBLEM", "TOKAIDO ROUTE", "TRAVELER POST", "RIVER TERRACE",
      "SUMMER BREEZE", "WOOD PLATFORM", "KAWADOKO", "EVENING CHILL",
      "RIVER SHORE", "STREET SELLERS", "CROSSING BRIDGE", "VITAL ARTERY",
      "WELCOME GATE", "PROMENADE"
    ]
  },
  {
    id: 83,
    title: "GION MATSURI FESTIVAL",
    subtitle: "The Thousand-Year Festival of Massive Floats",
    words: [
      "GION MATSURI", "YAMABOKO FLOATS", "NAGINATA SWORD", "CHIGEN BOY",
      "HUGE WHEELS", "PULLING ROPES", "CONSECRATION", "SUMMER PARADE",
      "TAPESTRY BALES", "LANTERN DISPLAY", "YOIYAMA NIGHT", "FESTIVAL HYMN",
      "STREET CROWD", "COMMUNITY PRIDE", "HISTORIC RITE", "WARD WORKERS",
      "CELEBRATION", "SPLENDOR"
    ]
  },
  {
    id: 84,
    title: "MIKOSHI PORTABLE SHRINES",
    subtitle: "Bearing the Golden Kami Spirits on Shoulders of Valor",
    words: [
      "MIKOSHI SHRINE", "GOLDEN PHOENIX", "BEARING POLES", "CHANTED CRY",
      "WASSHOI SHOUT", "ROUSING SWAY", "PURIFY STREET", "SHINTO CARRIAGE",
      "ROPE BINDING", "BLACK LACQUER", "TOWNSMEN POWER", "SWEAT DEDICAT",
      "BLESSING VISITS", "SUMMER ENERGY", "SACRED FORCE", "DEVOTION",
      "UNITY", "VALOR"
    ]
  },
  {
    id: 85,
    title: "GEISHA & GEIKO TRADITIONS",
    subtitle: "Masters of Classical Music, Dance and Conversation",
    words: [
      "GEIKO ARTIST", "MAIKO APPRENT", "SHAMISEN STRUM", "FAN DANCE",
      "WHITE POWDER", "VERMILION LIP", "SILK KIMONO", "ORNA BROCADE",
      "WOODEN GETA", "OCHOBO CUP", "TEA HOUSE GUEST", "HIGH POISE",
      "GION DISTRICT", "PONTOCHO ALLEY", "COURTESY MANNER", "CULTURAL HERIT",
      "ELEGANCE", "REFINEMENT"
    ]
  },
  {
    id: 86,
    title: "THE SHAMISEN",
    subtitle: "Three Strings, Ivory Plectrum & Resonant Wood",
    words: [
      "SHAMISEN", "THREE STRINGS", "IVORY PLECTRUM", "BACHI PICK",
      "SNAKE SKIN", "CAT SKIN TOP", "CYPRESS BODY", "RESONANT SOUND",
      "THEATER ACCOMP", "TEA ROOM SONG", "PITCH SLIDE", "FINGER DEXTER",
      "MUSIC GUILD", "FOLK BALLAD", "NIGHT MELODY", "ARTFUL STRUM",
      "EMOTION", "HARMONY"
    ]
  },
  {
    id: 87,
    title: "RYOKAN TRADITIONAL INNS",
    subtitle: "Hospitality, Cedar Baths & Steaming Rice",
    words: [
      "RYOKAN INN", "WOODEN INN", "CEDAR SOAK TUB", "HINOKI BATH",
      "HOSPITALITY", "OMOTENASHI", "GUEST YUKATA", "COTTON ROBE",
      "TATAMI REST", "FUTON MATTRESS", "GARDEN VIEW", "HOT TOWEL",
      "TEA WELCOME", "SEASON DINNER", "SLIDING WOOD", "QUIET REPOSE",
      "RESTFUL", "COMFORT"
    ]
  },
  {
    id: 88,
    title: "MERCHANT GUILDS: THE ZA",
    subtitle: "Monopolies, Protection and Urban Wealth",
    words: [
      "ZA GUILDS", "MERCHANT UNION", "MONOPOLY CHAR", "TRADE PROTECT",
      "RICE BROKER", "SILK FACTOR", "OIL PRODUCER", "SALT DISTRIB",
      "WHOLESALE HOUSE", "CHONIN CLASS", "URBAN WEALTH", "CREDIT TOKEN",
      "COMMERCE CODE", "ANNUAL TRIBUTE", "LEDGER SYSTEM", "MARKET ROW",
      "ENTERPRISE", "INFLUENCE"
    ]
  },
  {
    id: 89,
    title: "SANNENZAKA & NINENZAKA",
    subtitle: "The Sloping Cobblestone Lanes of Higashiyama",
    words: [
      "SANNENZAKA", "NINENZAKA", "STONE STEPS", "SLOPING ALLEY",
      "WOODEN FAÇADES", "POTTERY STALLS", "KIYOMIZU YAKI", "SOUVENIR ROW",
      "PAPER UMBRELLA", "SLANTED ROOF", "LANTERN HANG", "TRAVELER CROWD",
      "ANCIENT CHARM", "HILLSIDE TRAIL", "CEDAR SIDING", "PRESERVATION",
      "ATMOSPHERE", "BEAUTY"
    ]
  },
  {
    id: 90,
    title: "FUSHIMI SAKE BREWERIES",
    subtitle: "Pure Soft Groundwater and Cedar Fermentation Barrels",
    words: [
      "FUSHIMI SAKE", "SOFT WATER", "SPRING GOKOSUI", "RICE BREWERY",
      "KOJI MOLD", "STEAMED GRAIN", "CEDAR VAT", "FERMENTATION",
      "SAKE MASTER", "TOJI GUILD", "AMBER CUP", "WOODEN MASH",
      "WINTER BREWING", "CANAL BOATS", "CLEAR LIQUID", "CELEBRATION",
      "FLAVOR", "TOAST"
    ]
  },
  {
    id: 91,
    title: "RICE MERCHANT HOUSES",
    subtitle: "The Wealth of the Chonin and Koku Exchanges",
    words: [
      "RICE MERCHANT", "KOKU EXCHANGE", "STRAW BALES", "GRAIN SCALE",
      "CHONIN CITIZEN", "LEDGER BOOK", "ABACUS SOROBAN", "COUNTING BEADS",
      "FIREPROOF WARE", "KURA STORE", "THICK PLASTER", "GOLD COINS",
      "RYO BULLION", "MARKET PRICE", "COMMERCIAL HUB", "WEALTH ENGINE",
      "INSPECTION", "PROSPERITY"
    ]
  },
  {
    id: 92,
    title: "WOODEN MACHIYA TOWNHOUSES",
    subtitle: "Eel's Nests: Narrow Frontages and Hidden Courtyards",
    words: [
      "MACHIYA HOUSE", "EELS NEST", "NARROW FRONT", "COURTYARD DEEP",
      "TORINIWA ALLEY", "EARTHEN STOVE", "KAMADO FIRE", "WOODEN LATTICE",
      "KOSHISCREEN", "INNER GARDEN", "TSUBONIWA", "COOL BREEZE",
      "MERCHANT SHOP", "LIVING QUARTER", "TRADITION ROOF", "CYPRESS TIMBER",
      "INGENUITY", "HARMONY"
    ]
  },
  {
    id: 93,
    title: "TORO NAGASHI: FLOATING LANTERNS",
    subtitle: "Guiding Ancestral Spirits Home Along the River",
    words: [
      "TORO NAGASHI", "LANTERN FLOAT", "CANDLE BOAT", "PAPER BEACON",
      "KAMO WATERS", "BON FESTIVAL", "SPIRIT FAREWELL", "EVENING RIVER",
      "PRAYER MESSAGE", "GLOWING STREAM", "ANCESTOR SOUL", "PEACE OFFERING",
      "SILENT WATER", "FAMILY GATHER", "GENTLE CURRENT", "SUMMER NIGHT",
      "REMEMBRANCE", "DEVOTION"
    ]
  },
  {
    id: 94,
    title: "KYOTO SWEETS: WAGASHI",
    subtitle: "Artisan Confections Reflecting Seasons and Nature",
    words: [
      "WAGASHI SWEET", "AZUKI BEAN", "SWEET PASTE", "RICE FLOUR",
      "YATSUSHASHI", "CINNAMON DUST", "SEASON MOTIF", "CAMELIA CAKE",
      "TEA COMPANION", "WOODEN MOLD", "SUGAR CRYSTAL", "ARTISAN TOUCH",
      "SPRING BLOSSOM", "REFRESH PALATE", "AFTERNOON TEA", "DELICATE TASTE",
      "TRADITION", "DELIGHT"
    ]
  },
  {
    id: 95,
    title: "NIGHT MARKETS & YATAI",
    subtitle: "Lantern-Lit Stalls, Sizzling Grills and Evening Laughter",
    words: [
      "YATAI STALL", "NIGHT MARKET", "PAPER LANTERN", "CHARCOAL GRILL",
      "DANGO SKEWER", "SOY GLAZE", "SWEET AROMA", "TEMPLE FESTIVAL",
      "CROWD LAUGHTER", "WOODEN CART", "EVENING BREEZE", "STREET FOOD",
      "NOODLE BOWL", "CHILD TOY", "COMMUNITY MEET", "FESTIVE CHEER",
      "VIBRANCY", "FLAVOR"
    ]
  },
  {
    id: 96,
    title: "PAPER LANTERNS: CHOCHIN",
    subtitle: "Bamboo Ribs, Washi Paper and Candlelight",
    words: [
      "CHOCHIN", "PAPER LANTERN", "BAMBOO HOOPS", "COLLAPSIBLE",
      "WASHI SKINS", "BLACK LETTER", "SHOP INSIGNIA", "RED LANTERN",
      "CANDLE SOCKET", "RAINPROOF OIL", "EVENING GLOW", "ENTRYWAY LIGHT",
      "NIGHT PATHWAY", "FESTIVAL ROW", "TIMELESS CRAFT", "WARM SHINE",
      "WELCOME", "ATMOSPHERE"
    ]
  },
  {
    id: 97,
    title: "FOLDING FANS: SENSU",
    subtitle: "Elegance, Court Etiquette and Artisan Bamboo",
    words: [
      "SENSU FAN", "FOLDING FAN", "BAMBOO RIBS", "RIVET PIVOT",
      "GOLD LEAF FOIL", "PAINTED SCENE", "COURT DANCE", "SUMMER BREEZE",
      "ETIQUETTE SIGN", "GREETING BOW", "POCKET SIZE", "ARTISAN FORGE",
      "POETRY FLIGHT", "CEREMONIAL", "ELEGANT FLICK", "HERITAGE GIFT",
      "GRACEFUL", "DELICACY"
    ]
  },
  {
    id: 98,
    title: "THE TOKAIDO ROAD",
    subtitle: "Fifty-Three Stations Between Kyoto and Edo",
    words: [
      "TOKAIDO HIGHWAY", "FIFTY THREE", "STAGE STATION", "POST TOWN",
      "TRAVEL PERMIT", "PACK HORSE", "REST INN", "MILEPOST TREE",
      "COASTAL ROUTE", "BARRIER GATE", "HAKONE PASS", "PILGRIM WALK",
      "COURIER RUNNER", "MESSENGER SACK", "COMMERCE ROAD", "NATIONAL ARTERY",
      "JOURNEY", "VITALITY"
    ]
  },
  {
    id: 99,
    title: "THE IMPERIAL CHRYSANTHEMUM",
    subtitle: "Kiku: The Sixteen-Petaled Solar Seal",
    words: [
      "CHRYSANTHEMUM", "SIXTEEN PETALS", "SOLAR CREST", "IMPERIAL SEAL",
      "SACRED THRONE", "AUTUMN FLOWER", "LONGEVITY", "GOLD EMBLEM",
      "PALACE BANNER", "NOBLE FLOWER", "SOVEREIGN DIGN", "ROYAL HERITAGE",
      "SEASON FEST", "COURT MONUMENT", "REVERENCE", "UNBROKEN LINE",
      "MAJESTY", "ETERNAL"
    ]
  },
  {
    id: 100,
    title: "THE PAX TOKUGAWA",
    subtitle: "Kyoto at the Threshold of Two Centuries of Peace",
    words: [
      "PAX TOKUGAWA", "TWO CENTURIES", "PEACE FLOURISH", "ANCIENT CAPITAL",
      "CULTURAL HEART", "SAMURAI HONOR", "COMMERCE RISE", "MONASTIC CALM",
      "ETERNAL CITY", "SACRED LEGACY", "HARMONY FLOWER", "NEW HORIZONS",
      "JAPAN PATRIMONY", "IMMORTAL SHINE", "WISDOM BRIDGE", "TRANQUILLITY",
      "SOVEREIGNTY", "TRIUMPH"
    ]
  }
];

// Grid generation engine
const GRID_SIZE = 16;
const FILL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIRS = [
  [0, 1],   // Right
  [0, -1],  // Left
  [1, 0],   // Down
  [-1, 0],  // Up
  [1, 1],   // Down-Right
  [-1, -1], // Up-Left
  [1, -1],  // Down-Left
  [-1, 1]   // Up-Right
];

function generatePuzzleGrid(puzzle) {
  const size = GRID_SIZE;
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const placements = [];

  const wordBank = puzzle.words.map((w, idx) => ({
    original: w,
    clean: w.replace(/[^A-Za-z]/g, '').toUpperCase(),
    idx
  }));

  const sortedWords = [...wordBank].sort((a, b) => b.clean.length - a.clean.length);

  for (const item of sortedWords) {
    const word = item.clean;
    let placed = false;

    const shuffledDirs = [...DIRS].sort(() => Math.random() - 0.5);
    const coords = [];
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        coords.push([r, c]);
      }
    }
    coords.sort(() => Math.random() - 0.5);

    for (const [r, c] of coords) {
      if (placed) break;
      for (const [dr, dc] of shuffledDirs) {
        const endR = r + dr * (word.length - 1);
        const endC = c + dc * (word.length - 1);
        if (endR < 0 || endR >= size || endC < 0 || endC >= size) continue;

        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const currR = r + dr * i;
          const currC = c + dc * i;
          const existing = grid[currR][currC];
          if (existing !== null && existing !== word[i]) {
            canPlace = false;
            break;
          }
        }

        if (canPlace) {
          for (let i = 0; i < word.length; i++) {
            grid[r + dr * i][c + dc * i] = word[i];
          }
          placements.push({
            original: item.original,
            clean: word,
            start: [r + 1, c + 1],
            end: [endR + 1, endC + 1],
            dir: [dr, dc],
            originalIdx: item.idx
          });
          placed = true;
          break;
        }
      }
    }
  }

  placements.sort((a, b) => a.originalIdx - b.originalIdx);

  // Fill empty cells
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (grid[r][c] === null) {
        const rndChar = FILL_LETTERS[Math.floor(Math.random() * FILL_LETTERS.length)];
        grid[r][c] = rndChar;
      }
    }
  }

  return { grid, placements };
}

// Generate all 100 puzzles
const completeBookData = [];

for (const p of puzzlesData) {
  let attempts = 0;
  let success = false;
  let result = null;

  while (attempts < 50 && !success) {
    attempts++;
    result = generatePuzzleGrid(p);
    if (result.placements.length === p.words.length) {
      success = true;
    }
  }

  if (!success) {
    console.error(`Failed to place all words for puzzle ${p.id} (${p.title}) after ${attempts} attempts`);
    process.exit(1);
  }

  completeBookData.push({
    id: p.id,
    volNumber: "003",
    puzzleNumber: String(p.id).padStart(2, '0'),
    code: "03.392.13.0108.1550.1650.003",
    title: p.title,
    subtitle: p.subtitle,
    era: "KYOTO, FEUDAL JAPAN • 1550–1650 AD",
    words: p.words,
    grid: result.grid,
    placements: result.placements
  });
}

const outPath = path.join(__dirname, 'data', 'all_100_puzzles.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(completeBookData, null, 2));

console.log(`Successfully generated and saved all ${completeBookData.length} Kyoto puzzles with 100% placement to: ${outPath}`);
