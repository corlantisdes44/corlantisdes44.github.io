// Generator for 80 Historical Puzzles of Florence: The High Renaissance (1450-1550 AD)
const fs = require('fs');
const path = require('path');

const puzzlesData = [
  {
    id: 1,
    title: "BRUNELLESCHI'S DOME",
    subtitle: "Duomo of Santa Maria del Fiore",
    words: [
      "BRUNELLESCHI", "SANTA MARIA", "HERRINGBONE", "DOUBLE SHELL",
      "SCAFFOLDING", "LANTERN", "MASONRY", "TUSCANY",
      "DUOMO", "HOIST CRANE", "ARNO RIVER", "BOTTEGA",
      "BRICKWORK", "VAULTING", "MEDICI BANK", "OCTAGONAL",
      "CALCINA", "MASTER GUILD"
    ]
  },
  {
    id: 2,
    title: "COSIMO DE' MEDICI",
    subtitle: "Pater Patriae & The Rise of the Dynasty",
    words: [
      "PATER PATRIAE", "MEDICI DYNASTY", "SIGNORIA", "EXILE",
      "FLORENTINE", "BANKING HOUSE", "CAREGGI", "PATRONAGE",
      "DONATELLO", "MICHELOZZO", "SAN MARCO", "HUMANISM",
      "FLORIN", "COUNCIL", "ALLIANCE", "CIVIC LEADER",
      "MANUSCRIPT", "TREASURY"
    ]
  },
  {
    id: 3,
    title: "LORENZO THE MAGNIFICENT",
    subtitle: "Il Magnifico & The Golden Age",
    words: [
      "IL MAGNIFICO", "PLATONIC", "POLIZIANO", "SCULPTURE",
      "GARDEN", "DIPLOMACY", "POETRY", "CARNIVAL",
      "PATRON", "TOLERANCE", "PEACE OF LODI", "COTERIE",
      "SCHOLAR", "MEDICI VILLA", "SONNET", "CHIEFTAIN",
      "NOBILITY", "ELEGANCE"
    ]
  },
  {
    id: 4,
    title: "LEONARDO'S BOTTEGA",
    subtitle: "Apprenticeship under Verrocchio",
    words: [
      "VERROCCHIO", "APPRENTICE", "BAPTISM", "ANGEL FIGURE",
      "DRAPERY", "SKETCHBOOK", "SILVERPOINT", "PIGMENT",
      "STUDIO", "CHIAROSCURO", "BRONZE WORK", "ANATOMY",
      "BOTTEGA", "MASTERPIECE", "DRAWING", "CANVAS",
      "LINSEED OIL", "OBSERVATION"
    ]
  },
  {
    id: 5,
    title: "LEONARDO'S CODICES",
    subtitle: "Scientific Inventions & Observations",
    words: [
      "MIRROR WRITING", "FLYING MACHINE", "WATER FLOW", "HYDROLOGY",
      "BOTANY STUDY", "ANATOMICAL", "FOSSIL", "GEOMETRY",
      "PARACHUTE", "WAR MACHINE", "CODEX ATLANTIC", "NOTEBOOK",
      "OBSERVER", "PROPORTION", "MECHANISM", "DISSECTION",
      "OPTICS", "TURBINE"
    ]
  },
  {
    id: 6,
    title: "MICHELANGELO'S DAVID",
    subtitle: "The Giant Carved from Carrara Marble",
    words: [
      "CARRARA MARBLE", "SLINGSHOT", "CONTRAPPOSTO", "CHISEL",
      "SIGNORIA", "PIAZZA", "COLOSSUS", "ANATOMY",
      "REPUBLIC", "DEFENDER", "MALLEUS", "VEIN CARVING",
      "GAZE", "MARBLE DUCT", "COURAGE", "HEROIC",
      "SCULPTOR", "UNFINISHED"
    ]
  },
  {
    id: 7,
    title: "THE MEDICI CHAPELS",
    subtitle: "Michelangelo's Allegories of Time",
    words: [
      "SAN LORENZO", "SAGRESTIA NUOVA", "NIGHT", "DAY",
      "DAWN", "DUSK", "SARCOPHAGUS", "MONUMENT",
      "ALLEGORY", "GIULIANO", "LORENZO DUKE", "BASILICA",
      "MOURNING", "ETERNITY", "CARRARA", "ARCHITECT",
      "MORTALITY", "TRANSCEND"
    ]
  },
  {
    id: 8,
    title: "BOTTICELLI'S PRIMAVERA",
    subtitle: "The Allegory of Springtime",
    words: [
      "SPRINGTIME", "VENUS", "THREE GRACES", "MERCURY",
      "CHLORIS", "ZEPHYR", "FLORA", "ORANGE GROVE",
      "MYRTLE", "BOTANICAL", "ALLEGORY", "TEMPERA",
      "MYTHOLOGY", "GARLAND", "CHASTITY", "BEAUTY",
      "CADUCEUS", "BLOSSOM"
    ]
  },
  {
    id: 9,
    title: "THE BIRTH OF VENUS",
    subtitle: "Goddess of Love on the Tuscan Shore",
    words: [
      "SCALLOP SHELL", "SEA SPRAY", "WEST WIND", "ROSE PETALS",
      "ZEPHYRUS", "AURA", "HORA", "MANTLE",
      "CYPRUS", "FLOWING HAIR", "CLASSICAL", "TEMPERA WOOD",
      "NEOPLATONISM", "POETRY", "DIVINE LOVE", "MEDICI PATRON",
      "SHORELINE", "GRACE"
    ]
  },
  {
    id: 10,
    title: "DONATELLO'S BRONZE",
    subtitle: "Master of Bas-Relief & Renaissance Bronze",
    words: [
      "BRONZE DAVID", "ST GEORGE", "SCHIACCIATO", "RELIEF",
      "EQUESTRIAN", "GATTAMELATA", "ORATOR", "CASTING",
      "LOST WAX", "EXPRESSION", "PATINA", "SCULPTURE",
      "PULPIT", "FOUNDRY", "HUMAN EMOTION", "REVOLUTION",
      "NATURALISM", "BASILICA"
    ]
  },
  {
    id: 11,
    title: "VERROCCHIO'S BOTTEGA",
    subtitle: "Cradle of Renaissance Masters",
    words: [
      "ANDREA DEL", "SCULPTOR", "GOLDSMITH", "MASTER",
      "DOUBTING THOMAS", "COLLEONI", "FURNACE", "CASTING",
      "BRONZE WORK", "PERUGINO", "GHIRLANDAIO", "APPRENTICES",
      "ORSANMICHELE", "DRAPERY STUDY", "PERSPECTIVE", "CARVING",
      "WORKSHOP", "CHALK"
    ]
  },
  {
    id: 12,
    title: "FRA ANGELICO AT SAN MARCO",
    subtitle: "The Devotional Frescoes of the Cloister",
    words: [
      "ANNUNCIATION", "CELL FRESCO", "DOMINICAN", "CLOISTER",
      "DEVOTION", "MONASTERY", "GILDING", "PURITY",
      "MEDITATION", "ARCHWAY", "GABRIEL", "MARY VIRGIN",
      "SAN MARCO", "PIETY", "PIGMENT", "SPIRITUAL",
      "QUIETUDE", "HUMILITY"
    ]
  },
  {
    id: 13,
    title: "GIOTTO'S CAMPANILE",
    subtitle: "Florentine Gothic Bell Tower",
    words: [
      "BELL TOWER", "POLYCHROME", "MARBLE INLAY", "GOTHIC",
      "BAS RELIEF", "HEXAGONAL", "PLANETS", "VIRTUES",
      "LIBERAL ARTS", "PISANO", "TALENTI", "BALCONY",
      "DUOMO VIEW", "TRECENTO", "GEOMETRY", "CAMPANILE",
      "CARRARA WHITE", "PRATO GREEN"
    ]
  },
  {
    id: 14,
    title: "GATES OF PARADISE",
    subtitle: "Ghiberti's Gilded Bronze Baptistery Doors",
    words: [
      "GHIBERTI", "BAPTISTERY", "GILDED BRONZE", "SAN GIOVANNI",
      "CREATION", "ABRAHAM", "SOLOMON", "PERSPECTIVE",
      "FORESHORTEN", "RELIEF PANELS", "MICHELANGELO", "LOST WAX",
      "FRAMEWORK", "PROPHETS", "PORTAL", "TWENTY YEARS",
      "OCTAGON", "TRIUMPH"
    ]
  },
  {
    id: 15,
    title: "THE BRANCACCI CHAPEL",
    subtitle: "Masaccio & The Dawn of Renaissance Realism",
    words: [
      "MASACCIO", "EXPULSION", "TRIBUTE MONEY", "APOSTLE PETER",
      "SHADOW LIGHT", "FRESCO CYCLE", "PERSPECTIVE", "CARMINE",
      "MASOLINO", "FILIPPINO", "EMOTION", "ADAM EVE",
      "GRAVITY", "HUMAN DIGNITY", "INTONACO", "PILASTER",
      "RENAISSANCE", "REVOLUTION"
    ]
  },
  {
    id: 16,
    title: "GHIRLANDAIO'S FRESCOES",
    subtitle: "Florentine High Society at Santa Maria Novella",
    words: [
      "TORNABUONI", "CHOIR FRESCO", "NOBLE WOMEN", "BROCADE",
      "FASHION", "PORTRAITURE", "NATIVITY", "BAPTIST",
      "VOLTERRA", "WORKSHOP", "SANTA MARIA", "NOVELLA",
      "DETAIL", "REALISM", "MEDICI TIES", "PERSPECTIVE",
      "PATRON PRIDE", "FLORENTINE"
    ]
  },
  {
    id: 17,
    title: "PIERO DELLA FRANCESCA",
    subtitle: "Perspective, Mathematics & Sacred Geometry",
    words: [
      "MATHEMATICS", "DE PROSPECTIVA", "GEOMETRY", "LIGHT SPACE",
      "CALCULATION", "DUCAL COURT", "URBINO", "PORTRAIT",
      "BAPTISM CHRIST", "RESURRECTION", "SYMMETRY", "PERSPECTIVE",
      "TUSCAN SOIL", "RATIO", "EUCLID", "VOLUME",
      "MEASURE", "CLARITY"
    ]
  },
  {
    id: 18,
    title: "LEON BATTISTA ALBERTI",
    subtitle: "Universal Man & Master Architect",
    words: [
      "DE RE AEDIFIC", "RUCELLAI", "FACADE", "VOLUTE",
      "PROPORTION", "UNIVERSAL MAN", "SANTA MARIA", "LATIN TREATISE",
      "CLASSICAL", "VITRUVIUS", "SYMMETRY", "GEOMETER",
      "HUMANIST", "COLUMN ORDER", "TEMPLE", "MODULAR",
      "ARCHITRAVE", "HARMONY"
    ]
  },
  {
    id: 19,
    title: "PALAZZO VECCHIO",
    subtitle: "Fortress of Florentine Civic Power",
    words: [
      "SIGNORIA", "ARNOLFO TOWER", "CRENELLATION", "PIAZZA",
      "SALONE", "CINQUECENTO", "COUNCIL", "REPUBLIC",
      "RUSTICATION", "DEFENSE", "HERALDRY", "LION MARZOCCO",
      "PRIORI", "MEETING HALL", "GOVERNANCE", "BELL TOLL",
      "FORTRESS", "PATRIOT"
    ]
  },
  {
    id: 20,
    title: "PALAZZO MEDICI",
    subtitle: "The Michelozzo Residence of Via Larga",
    words: [
      "MICHELOZZO", "VIA LARGA", "RUSTICATED", "COURTYARD",
      "CORINTHIAN", "LOGGIA", "MAGI CHAPEL", "GOZZOLI",
      "BANQUET", "LIBRARY", "STUDIOLO", "MEDICI CREST",
      "PALATIAL", "ARCHITRAVE", "INNER CLOISTER", "DISCRETION",
      "ELEGANCE", "DOMICILE"
    ]
  },
  {
    id: 21,
    title: "PALAZZO PITTI",
    subtitle: "Across the Arno River to Oltrarno",
    words: [
      "OLTRARNO", "LUCA PITTI", "AMMANNATI", "RIVALRY",
      "GRAND DUCHY", "STONE BLOCKS", "RESIDENCE", "EXPANSION",
      "BOBOLI HILL", "MAGNIFICENCE", "COURTYARD", "FACADE",
      "RUSTIC STONE", "PALATIAL", "DYNASTY", "ACROSS ARNO",
      "QUARRY", "SPLENDOR"
    ]
  },
  {
    id: 22,
    title: "PALAZZO STROZZI",
    subtitle: "Monument of Noble Renaissance Banking",
    words: [
      "STROZZI FAMILY", "BENEDETTO", "CRONACA", "CORNICE",
      "RUSTICATION", "IRON LANTERN", "CAPARRA", "COURTYARD",
      "MASSIVE", "FORTRESS PALACE", "SYMMETRY", "FLORENTINE",
      "PATRICIAN", "HEWN STONE", "ELEGANCE", "BANKING WEALTH",
      "WINDOW ARCH", "STABILITY"
    ]
  },
  {
    id: 23,
    title: "PONTE VECCHIO",
    subtitle: "Medieval Stone Bridge & Goldsmith Shops",
    words: [
      "ARNO RIVER", "STONE BRIDGE", "GOLDSMITH", "JEWELRY",
      "THREE ARCHES", "BOTTEGHE", "WORKSHOPS", "CORRIDOR",
      "FERDINANDO", "RIVER CROSSING", "BUTCHERS EXILE", "GOLD TRADING",
      "SUNDIAL", "CENTURIES", "WATERWAY", "VIEWPOINT",
      "MEDIEVAL SPAN", "TUSCAN SUN"
    ]
  },
  {
    id: 24,
    title: "THE GOLDEN FLORIN",
    subtitle: "Currency of European Commerce",
    words: [
      "FIORINO D ORO", "PURE GOLD", "GIGLIO", "LILY CREST",
      "SAN GIOVANNI", "MINT ZECCA", "CURRENCY", "STANDARD",
      "EXCHANGE RATE", "WEIGHT ASSAY", "BULLION", "MERCHANT",
      "TREASURE", "BANKING", "SOLDI", "COMMERCE",
      "PRESTIGE", "STABILITY"
    ]
  },
  {
    id: 25,
    title: "MEDICI BANK EUROPE",
    subtitle: "The Financial Network across Capitals",
    words: [
      "ROME BRANCH", "LONDON AGENT", "BRUGES OFFICE", "GENEVA",
      "LYON TRADING", "VENICE POST", "AVIGNON", "LETTER CREDIT",
      "BILL EXCHANGE", "FACTOR", "GENERAL LEDGER", "DIVIDEND",
      "CORRESPONDENT", "WOOL TRADE", "ALUM MONOPOLY", "DEPOSIT",
      "CAPITAL", "ENTERPRISE"
    ]
  },
  {
    id: 26,
    title: "DOUBLE-ENTRY BOOKKEEPING",
    subtitle: "Luca Pacioli & Florentine Ledgers",
    words: [
      "LUCA PACIOLI", "DEBIT CREDIT", "GIORNALE", "MASTRO LEDGER",
      "MEMORIALE", "SUMMA ARITH", "BALANCE SHEET", "ARABIC NUMERAL",
      "MERCHANT CODE", "AUDIT", "CALCULATION", "INVENTORY",
      "PROFIT LOSS", "TRANSACTION", "TALLY", "PRECISION",
      "VENETIAN METHOD", "ACCOUNTING"
    ]
  },
  {
    id: 27,
    title: "ARTE DI CALIMALA",
    subtitle: "Guild of the Wool Cloth Finishers",
    words: [
      "CLOTH FINISHING", "NORTH SEA WOOL", "DYE VATS", "SHEARING",
      "FULLING MILL", "MADDER ROOT", "COCHINEAL", "EXPORT TRADE",
      "SAN MINIATO", "CALIMALA STREET", "CONSUL", "QUALITY SEAL",
      "MEASUREMENT", "LUXURY CLOTH", "INSPECTION", "MERCHANTS",
      "GUILD EMBLEM", "WEALTH"
    ]
  },
  {
    id: 28,
    title: "ARTE DELLA LANA",
    subtitle: "The Great Wool Guild & The Ciompi Legacy",
    words: [
      "WOOL INDUSTRY", "CARDING", "SPINNING", "WEAVING LOOM",
      "TIRATOI", "CIOMPI WORKERS", "GUILD PALACE", "DUOMO PATRON",
      "WASHING ARNO", "RAW FLEECE", "TENTER FRAMES", "WAGE EARNER",
      "PRODUCE", "MANUFACTURE", "TUSCANY SHEEP", "STATION",
      "STATUTE", "WORKFORCE"
    ]
  },
  {
    id: 29,
    title: "ARTE DELLA SETA",
    subtitle: "Silk Weavers & Gold Thread Brocades",
    words: [
      "SILK WEAVING", "MULBERRY TREE", "SILKWORM", "GOLD THREAD",
      "DAMASK", "VELVET", "BROCADE", "TAFFETA",
      "LOOM PATTERN", "SPINNING WHEEL", "LUXURY FABRIC", "SERICULTURE",
      "DYERS", "SHUTTLE", "OSPEDALE INNOC", "MERCHANT GUILD",
      "ORNAMENT", "ROYAL COURT"
    ]
  },
  {
    id: 30,
    title: "MEDICI E SPEZIALI",
    subtitle: "Guild of Apothecaries, Doctors & Painters",
    words: [
      "APOTHECARY", "PIGMENTS", "HERBS", "SPICES",
      "MINERAL SALTS", "MORTAR PESTLE", "PHYSICIAN", "DOCTOR",
      "PAINTER GUILD", "RESINS", "OILS", "BALSAM",
      "GUM ARABIC", "SULPHUR", "PREPARATION", "PHARMACY",
      "DISTILLATION", "REMEDY"
    ]
  },
  {
    id: 31,
    title: "ARTI MAGGIORI",
    subtitle: "The Seven Greater Guilds of Florence",
    words: [
      "CALIMALA", "LANA WOOL", "CAMBIO BANKERS", "SETA SILK",
      "SPEZIALI", "JUDGES NOTARIES", "VAJAI FURRIERS", "CONSULATE",
      "POLITICAL POWER", "PRIORATE", "GUILD HALLS", "STATUTES",
      "GOVERNANCE", "NOBILITY", "VOTING RIGHTS", "ARMS CREST",
      "HONOR", "MERIT"
    ]
  },
  {
    id: 32,
    title: "ARTI MINORI",
    subtitle: "The Fourteen Lesser Guilds of Craftsmen",
    words: [
      "BUTCHERS", "BLACKSMITHS", "SHOEMAKERS", "MASONS",
      "CARPENTERS", "BAKERS", "INN KEEPERS", "LEATHER TANNER",
      "TAILORS", "LOCKSMITHS", "ARMORERS", "WINEMAKERS",
      "POTTERS", "BELT MAKERS", "CRAFT", "POPULO MINUTO",
      "WORKSHOP", "CITIZENRY"
    ]
  },
  {
    id: 33,
    title: "THE GONFALONIERE",
    subtitle: "Standard-Bearer of Justice & The Republic",
    words: [
      "GONFALONE", "BANNER JUSTICE", "CHIEF MAGISTRATE", "REPUBLIC",
      "SODERINI", "TERM OF OFFICE", "WHITE BANNER", "RED CROSS",
      "SIGNORIA PALACE", "CEREMONY", "CIVIC LEADER", "COUNCIL",
      "DELIBERATION", "CITIZEN DUTY", "ROBES OF STATE", "PROCESSION",
      "SOVEREIGN", "CONSTITUTION"
    ]
  },
  {
    id: 34,
    title: "THE SIGNORIA GOVERNANCE",
    subtitle: "The Priori and Florentine Assemblies",
    words: [
      "NINE PRIORI", "QUARTERS CITY", "LEATHER PURSES", "BORSA LOTTERY",
      "TWO MONTH TERM", "PALAZZO RESIDE", "BONI HOMINES", "SIXTEEN",
      "BALLOTING", "COUNCIL EIGHTY", "POPULAR VOTE", "SCRUTINY",
      "REPUBLIC LAW", "DECREE", "MAGISTRACY", "CITIZEN ASSEMBLY",
      "COALITION", "CONSENSUS"
    ]
  },
  {
    id: 35,
    title: "THE PAZZI CONSPIRACY",
    subtitle: "Blood in the Duomo on Easter Morning 1478",
    words: [
      "PAZZI FAMILY", "EASTER MASS", "DUOMO ALTAR", "GIULIANO KILLED",
      "LORENZO ESCAPES", "SACRISTY DOOR", "POPE SIXTUS", "ARCHBISHOP",
      "SALVIATI", "BANDINI", "ASSASSINATION", "REVENGE",
      "HANGING TOWER", "EXILE", "MEDICI POPULAR", "CONSPIRACY",
      "BARGELLO", "PURGE"
    ]
  },
  {
    id: 36,
    title: "GIROLAMO SAVONAROLA",
    subtitle: "The Fiery Prior of San Marco",
    words: [
      "DOMINICAN", "SAN MARCO", "PROPHECY", "REPENTANCE",
      "PURIFICATION", "REPUBLIC REFORM", "SERMONS DUOMO", "APOCALYPSE",
      "FERRARA", "MEDICI EXILE", "CHRIST IS KING", "MORALITY",
      "ZEALOT", "EXCOMMUNICATE", "ORATOR", "AUSTERITY",
      "RENAISSANCE FOE", "PRAYER"
    ]
  },
  {
    id: 37,
    title: "BONFIRE OF THE VANITIES",
    subtitle: "Carnival Tuesday 1497 in Piazza della Signoria",
    words: [
      "FALÒ DELLE", "VANITÀ", "MIRRORS", "ROUGE",
      "CARDS DICE", "CARNIVAL MASKS", "LUTE INSTRUMENT", "POETRY BOOKS",
      "LUXURY GOWNS", "PYRAMID PYRE", "WHITE ROBES", "CHILDREN CHOIR",
      "PIAZZA FLAMES", "ASHES ARNO", "BOTTICELLI", "AUSTERITY",
      "PENANCE", "ZEAL"
    ]
  },
  {
    id: 38,
    title: "NICCOLÒ MACHIAVELLI",
    subtitle: "The Florentine Secretary & The Prince",
    words: [
      "THE PRINCE", "SECOND CHANCERY", "DIPLOMACY", "VIRTU",
      "FORTUNA", "CESARE BORGIA", "DISCOURSES", "REALISM",
      "PRAGMATISM", "POLITICAL", "EXILE SAN CASCIANO", "MILITIA",
      "STATECRAFT", "TREATISE", "LION AND FOX", "AMBASSADOR",
      "REPUBLICAN", "LEGACY"
    ]
  },
  {
    id: 39,
    title: "FRANCESCO GUICCIARDINI",
    subtitle: "Statesman & Chronicler of Renaissance Italy",
    words: [
      "STORIA D ITALIA", "RICORDI", "HISTORIAN", "STATESMAN",
      "PRAGMATISM", "GOVERNOR", "PAPAL STATES", "DISILLUSION",
      "PARTICOLARE", "CHRONICLE", "ANALYSIS", "POLITICAL THOUGHT",
      "MEDICI ADVISER", "WARS OF ITALY", "REPUBLIC FALL", "DIPLOMACY",
      "OBSERVATION", "JUDGMENT"
    ]
  },
  {
    id: 40,
    title: "THE PLATONIC ACADEMY",
    subtitle: "Philosophical Revival at Villa Careggi",
    words: [
      "CAREGGI VILLA", "PLATO REVIVAL", "BANQUET NOV", "PHILOSOPHY",
      "FICINO", "COSIMO MEDICI", "GREEK CODICES", "DIALOGUES",
      "ACADEMY", "INTELLECTUAL", "SOUL IMMORTAL", "LOVE DIVINE",
      "SYMPOSIUM", "DISPUTATION", "CONCORD", "SCHOLARS",
      "LAUREL CROWN", "WISDOM"
    ]
  },
  {
    id: 41,
    title: "MARSILIO FICINO",
    subtitle: "Priest, Translator & Neoplatonist Master",
    words: [
      "THEOLOGIA", "PLATONICA", "TRANSLATION", "GREEK LATIN",
      "HERMETICA", "CORPUS", "DE VITA TRIPLEX", "MEDICINE",
      "ASTROLOGY", "HARMONY SPHERES", "CANON SAN LORENZO", "EPISTLES",
      "PHILOSOPHER", "HUMANIST", "COSMOLOGY", "LIGHT METAPHOR",
      "CONTEMPLATION", "SPIRIT"
    ]
  },
  {
    id: 42,
    title: "PICO DELLA MIRANDOLA",
    subtitle: "Oration on the Dignity of Man",
    words: [
      "DIGNITY OF MAN", "ORATION", "NINE HUNDRED", "THESES",
      "SYNCRETISM", "KABBALAH", "ARISTOTLE", "FREE WILL",
      "UNIVERSAL", "PRODIGY", "CHAMELEON", "ROME DEBATE",
      "CONCORDIA", "INTELLECT", "POTENTIAL", "PHILOSOPHY",
      "GENIUS", "ELEVATION"
    ]
  },
  {
    id: 43,
    title: "ANGELO POLIZIANO",
    subtitle: "Court Poet, Philologist & Humanist Genius",
    words: [
      "STANZE GIOSTRA", "GIULIANO JOUST", "PHILOLOGY", "LATIN VERSE",
      "GREEK EPIGRAM", "TUTOR MEDICI", "MISCELLANEA", "POETRY",
      "CLASSICAL TEXTS", "CRITICISM", "RHETORIC", "METRIC",
      "MYTHOLOGICAL", "ORPHEUS PLAY", "ELEGANCE", "SCHOLAR",
      "MEDICI COURT", "VERSES"
    ]
  },
  {
    id: 44,
    title: "THE TUSCAN VERNACULAR",
    subtitle: "Dante, Petrarch, Boccaccio & The Language",
    words: [
      "VOLGARE", "TUSCAN DIALECT", "DANTE COMEDY", "PETRARCH SONNET",
      "BOCCACCIO", "DECAMERON", "TERZA RIMA", "CANZONIERE",
      "LITERARY CANON", "CRUSCA ACADEMY", "LANGUAGE PRIDE", "VERNACULAR",
      "HUMAN SPEECH", "PROSE", "POETIC FORM", "FLORENTINE VOICE",
      "ACCENT", "MELODY"
    ]
  },
  {
    id: 45,
    title: "VESPASIANO DA BISTICCI",
    subtitle: "King of the Florentine Booksellers",
    words: [
      "BOOKSELLER", "LIBRARIAN", "MANUSCRIPT", "SCRIBE",
      "VELLUM", "CALLIGRAPHY", "URBINO LIBRARY", "COSIMO MEDICI",
      "LIVES MEN", "ILLUMINATION", "STATIONER", "CLASSIC TEXTS",
      "FOLIO", "INK HORN", "BINDERY", "HUMANIST",
      "BIOGRAPHY", "PATRON"
    ]
  },
  {
    id: 46,
    title: "EARLY FLORENTINE PRINTING",
    subtitle: "The Moveable Type Revolution & Ripoli Press",
    words: [
      "INCUNABULA", "MOVEABLE TYPE", "RIPOLI PRESS", "NUNS COMPOSING",
      "LEAD MATRIX", "PRESS INK", "PAGINATION", "WOODCUT PRINT",
      "BOOK TRADE", "BROADSIDE", "VELLUM PAPER", "PUNCHCUTTER",
      "PULL BAR", "IMPRESSION", "EDITION", "COLOPHON",
      "TYPOGRAPHY", "SPREAD"
    ]
  },
  {
    id: 47,
    title: "PAOLO TOSCANELLI",
    subtitle: "Astronomer, Physician & Mapmaker of Florence",
    words: [
      "TOSCANELLI", "CARTOGRAPHY", "GNOMON DUOMO", "SOLSTICE MERIDIAN",
      "ASTRONOMY", "COLUMBUS MAP", "WESTWARD ROUTE", "GLOBE",
      "LATITUDE", "NAVIGATION", "MATHEMATICIAN", "SPHERE",
      "HORIZON", "MEASUREMENT", "EQUINOX", "COSMOGRAPHY",
      "OBSERVATORY", "SEAFARER"
    ]
  },
  {
    id: 48,
    title: "AMERIGO VESPUCCI",
    subtitle: "The Florentine Explorer of the New World",
    words: [
      "AMERIGO", "MUNDUS NOVUS", "NEW WORLD", "AMERICA",
      "CONTINENT", "NAVIGATOR", "MEDICI LETTERS", "EXPEDITION",
      "COSMOGRAPHER", "SOUTHERN CROSS", "NAVIGATION", "VOYAGES",
      "FLORENTINE BORN", "OGNISSANTI", "WALDSEEMULLER", "DISCOVERY",
      "COASTLINE", "SEXTANT"
    ]
  },
  {
    id: 49,
    title: "THE BATTLE OF ANGHIARI",
    subtitle: "Lost Mural of Leonardo in Palazzo Vecchio",
    words: [
      "ANGHIARI", "LOST FRESCO", "LEONARDO MURAL", "BATTLE SCENE",
      "SALONE CINQUE", "FIGHT FOR STANDARD", "HORSES REARING", "RAGE",
      "EXPERIMENTAL", "ENCAUSTIC", "DRIP WAX", "MICHELANGELO",
      "CASCINA RIVALRY", "SKETCH COPIES", "RUBENS COPY", "VASARI WALL",
      "WARFARE", "EXPRESSION"
    ]
  },
  {
    id: 50,
    title: "THE SIEGE OF FLORENCE",
    subtitle: "Heroic Defense of the Republic (1529–1530)",
    words: [
      "SIEGE FLORENCE", "IMPERIAL ARMY", "CHARLES FIFTH", "DEFENSE WALLS",
      "MICHELANGELO", "SAN MINIATO", "BASTION", "FERRUCCI",
      "GAVINANA", "STARVATION", "TREASON", "MALATESTA",
      "MEDICI RESTORE", "FALL OF REPUBLIC", "CITADEL", "CANNONBALL",
      "VALOR", "DEFEAT"
    ]
  },
  {
    id: 51,
    title: "BENVENUTO CELLINI",
    subtitle: "Goldsmith, Sculptor & Creator of Perseus",
    words: [
      "CELLINI", "PERSEUS MEDUSA", "LOGGIA DEI LANZI", "BRONZE CAST",
      "AUTOBIOGRAPHY", "SALT CELLAR", "FRANCIS FIRST", "FURNACE EXPLODE",
      "PEWTER DISHES", "MOLTEN METAL", "CHISEL GRAVER", "DUCAL COURT",
      "GENIUS TEMPER", "VICTORY", "GOLDSMITH", "HEAD MEDUSA",
      "SWORD RAISED", "PATINA"
    ]
  },
  {
    id: 52,
    title: "GIORGIO VASARI",
    subtitle: "The First Art Historian & Architect",
    words: [
      "VITE ARTISTI", "LIVES PAINTERS", "BIOGRAPHY", "RINASCITA",
      "UFFIZI BUILDING", "VASARI CORRIDOR", "AREZZO", "COSIMO FIRST",
      "ACADEMY DESIGN", "ART CRITICISM", "HISTORIAN", "MANNERISM",
      "FRESCO PAINTER", "GENEALOGY", "STUDIO", "CHRONICLE",
      "DUCAL ORDERS", "DEVOTION"
    ]
  },
  {
    id: 53,
    title: "JACOPO PONTORMO",
    subtitle: "Master of Mannerist Color & Emotion",
    words: [
      "PONTORMO", "DEPOSITION", "SANTA FELICITA", "LUMINOUS",
      "PASTEL TONES", "MANNERISM", "ELONGATED", "SPIRAL TWIST",
      "MELANCHOLY", "DIARY", "SAN LORENZO", "ECCENTRIC",
      "ISOLATION", "WEIGHTLESS", "PINK AND BLUE", "TUSCAN ART",
      "VISIONARY", "GRACE"
    ]
  },
  {
    id: 54,
    title: "ROSSO FIORENTINO",
    subtitle: "Flamboyant Mannerist & Fontainebleau Master",
    words: [
      "ROSSO", "VOLTERRA", "DEPOSITION CROSS", "ANGULAR",
      "EXPRESSIONIST", "SKELETON POSE", "RED HAIR", "FONTAINEBLEAU",
      "FRENCH COURT", "STUCCO RELIEF", "DRAMATIC LIGHT", "INTENSITY",
      "FLORENTINE ROOTS", "UNCONVENTIONAL", "INVENTION", "FRESCO",
      "DISTORTION", "GENIUS"
    ]
  },
  {
    id: 55,
    title: "AGNOLO BRONZINO",
    subtitle: "Court Painter to the Grand Dukes",
    words: [
      "BRONZINO", "ELEONORA TOLEDO", "COURT PORTRAIT", "PORCELAIN SKIN",
      "SILK DAMASK", "PEARL JEWELRY", "COLD ELEGANCE", "MANNERIST POSE",
      "COSIMO FIRST", "ALLEGORY VENUS", "CUPID FOLLY", "POET ACCADEMIA",
      "DETAIL TEXTURE", "OPULENCE", "RESTRAINED", "FORMAL",
      "MEDICI DUCHY", "PRECISION"
    ]
  },
  {
    id: 56,
    title: "COSIMO I DE' MEDICI",
    subtitle: "First Grand Duke of Tuscany",
    words: [
      "GRAND DUKE", "COSIMO PRIMO", "TUSCANY UNIFY", "SIENA CONQUEST",
      "ORDER ST STEPHEN", "ELBA ISLAND", "PORTOFERRAIO", "FORTRESS",
      "ABSOLUTE RULE", "NAVY FLEET", "COUNCIL TWO HUND", "EXPANSION",
      "CENTRAL STATE", "STATUE CORSO", "DUCAL CREST", "SOVEREIGNTY",
      "LEGITIMACY", "POWER"
    ]
  },
  {
    id: 57,
    title: "ELEONORA DI TOLEDO",
    subtitle: "Duchess of Florence & Spanish Matron",
    words: [
      "ELEONORA", "TOLEDO", "NAPLES VICEROY", "DUCHESS",
      "PITTI PURCHASE", "BOBOLI EXPANSION", "BROCADE DRESS", "AGRICULTURE",
      "VALDICHIANA", "ESTATE SYSTEM", "COURT STYLE", "PIETY",
      "SPANISH PROTOCOL", "PORTRAITS", "CONSORT", "DYNASTIC HEIRS",
      "ELEGANCE", "WEALTH"
    ]
  },
  {
    id: 58,
    title: "THE VASARI CORRIDOR",
    subtitle: "The Secret Enclosed Walkway Above the City",
    words: [
      "CORRIDOIO", "VASARIANO", "ENCLOSED PATH", "PALAZZO VECCHIO",
      "UFFIZI PASSAGE", "PONTE VECCHIO", "SANTA FELICITA", "PITTI PALACE",
      "SECRET WALK", "ONE KILOMETER", "DUCAL WEDDING", "OVER ARNO",
      "PORTRAIT GALLERY", "ROUND WINDOWS", "SOVEREIGN SAFETY", "SIGHTLINE",
      "PASSAGEWAY", "PRIVILEGE"
    ]
  },
  {
    id: 59,
    title: "THE UFFIZI OFFICES",
    subtitle: "From Administrative Magistracies to Global Museum",
    words: [
      "UFFIZI", "MAGISTRACIES", "THIRTEEN GUILDS", "COLONNADE",
      "DORIC ORDER", "COURT NARROW", "ARNO PERSPECTIVE", "STATUES",
      "TRIBUNA", "BUONTALENTI", "COLLECTIONS", "MEDICI TREASURE",
      "CABINET ART", "CORRIDORS", "GRAND DUCAL", "GALLERY",
      "PATRIMONY", "ARCHIVES"
    ]
  },
  {
    id: 60,
    title: "THE BOBOLI GARDENS",
    subtitle: "Mannerist Landscapes & Terraced Fountains",
    words: [
      "BOBOLI GARDENS", "AMPHITHEATRE", "CYPRESS ALLEY", "NEPTUNE FOUNTAIN",
      "GROTTO BUONTAL", "ISOLOTTO", "STATUARY", "TERRACE",
      "FOUNTAIN OCEAN", "BOXWOOD HEDGE", "TOPUARY", "WATERWORKS",
      "PALATIAL PARK", "LEMON HOUSES", "VISTA ARNO", "MANNERISM",
      "GROTESQUE", "PARADISE"
    ]
  },
  {
    id: 61,
    title: "THE BARGELLO FORTRESS",
    subtitle: "Palace of the Podestà & Council of Justice",
    words: [
      "BARGELLO", "PODESTA", "JUSTICE TRIBUNAL", "COURTYARD",
      "STONE STAIRWAY", "FORTRESS WALL", "BELL VENTUNO", "JAIL PRISON",
      "DONATELLO ROOM", "BRONZE STATUES", "COATS OF ARMS", "POLICE CHIEF",
      "MEDIAEVAL TOWER", "TRIAL", "EXECUTION LAW", "MAGISTRATE",
      "CIVIC MEMORY", "FORTIFICATION"
    ]
  },
  {
    id: 62,
    title: "BASILICA OF SANTA CROCE",
    subtitle: "The Pantheon of Florentine Glories",
    words: [
      "SANTA CROCE", "FRANCISCAN", "PANTHEON", "MICHELANGELO TOMB",
      "MACHIAVELLI", "GALILEO", "GIOTTO FRESCOES", "BARDI CHAPEL",
      "PERUZZI", "PAZZI CHAPEL", "BRUNELLESCHI", "CLOISTER",
      "LEATHER SCHOOL", "FLOOR TOMBS", "MEMORIAL", "GOTHIC NAVE",
      "MONUMENT", "ETERNAL REST"
    ]
  },
  {
    id: 63,
    title: "SANTA MARIA DEL CARMINE",
    subtitle: "The Carmelite Convent & Renaissance Pilgrimage",
    words: [
      "CARMINE CONVENT", "BRANCACCI", "CARMELITE MONKS", "FRESCO SCHOOL",
      "PERUGINO VISITS", "RAPHAEL STUDIES", "CLOISTER SHADOW", "PIAZZA",
      "OLTRARNO QUART", "DEVOTION", "FIRE 1771", "SURVIVAL",
      "PILGRIMAGE", "SACRED WALLS", "TUSCAN HERITAGE", "INCENSE",
      "PRAYER CHANT", "SANCTUARY"
    ]
  },
  {
    id: 64,
    title: "SAN MINIATO AL MONTE",
    subtitle: "Romanesque Jewel Overlooking the Arno Basin",
    words: [
      "SAN MINIATO", "ROMANESQUE", "MARBLE FACADE", "EAGLE CALIMALA",
      "CARDINAL PORTUGAL", "CRYPT", "MOSAIC APSE", "BENEDICTINE",
      "FORTIFIED HILL", "HILLTOP VISTA", "BELL TOWER", "GEOMETRIC INLAY",
      "MICHELANGELO RAMP", "TERRACE CITY", "CANDLELIGHT", "MONASTIC",
      "SACRED PEAK", "PEACE"
    ]
  },
  {
    id: 65,
    title: "ORSANMICHELE",
    subtitle: "Grain Market & Guild Statuary Sanctuary",
    words: [
      "ORSANMICHELE", "GRAIN LOGGIA", "TABERNACLE", "EXTERIOR NICHES",
      "FOURTEEN GUILDS", "DONATELLO GEORGE", "NANNI DI BANCO", "VERROCCHIO",
      "VIRGIN IMAGE", "HARVEST STORAGE", "STONE VAULT", "PILLARS",
      "CIVIC DEVOTION", "SCULPTURE", "MEDIEVAL GRAIN", "SANCTUARY",
      "BRONZE PATRON", "COMMERCE"
    ]
  },
  {
    id: 66,
    title: "OSPEDALE DEGLI INNOCENTI",
    subtitle: "Brunelleschi's Renaissance Foundling Hospital",
    words: [
      "INNOCENTI", "FOUNDLING", "BRUNELLESCHI", "LOGGIA ARCHES",
      "TERRACOTTA", "DELLA ROBBIA", "SWADDLED BABES", "ROUNDELS",
      "ORPHAN CARE", "SETA GUILD", "SYMMETRY", "MODULAR RATIO",
      "ROTATING WHEEL", "CIVIC CHARITY", "ANNUNZIATA", "CLOISTER",
      "HOSPITALITY", "PROTECTION"
    ]
  },
  {
    id: 67,
    title: "FLORENTINE FESTIVALS",
    subtitle: "Civic Pageantry, Jousts & Patron Saint Days",
    words: [
      "SAN GIOVANNI FEAST", "CALCIO STORICO", "PALIO CHARIOTS", "FIREWORKS CAR",
      "SCOPPIO DEL CARRO", "HOLY FIRE", "DOVE COLOMBINA", "JOUST OF PIAZZA",
      "COSTUME SILK", "TRUMPETERS", "FLAG THROWING", "CARNIVAL PARADE",
      "CANDLES OFFERING", "CEREMONY", "CIVIC SPLENDOR", "BELL PEAL",
      "PROCESSION", "JUBILEE"
    ]
  },
  {
    id: 68,
    title: "CALCIO STORICO FIORENTINO",
    subtitle: "Historic Combat Football in Piazza Santa Croce",
    words: [
      "CALCIO STORICO", "SANTA CROCE", "FOUR QUARTERS", "BIANCHI WHITE",
      "ROSSI RED", "VERDI GREEN", "AZZURRI BLUE", "DIRT PITCH",
      "TWENTY SEVEN", "NO RULES SCRUM", "LEATHER BALL", "CHIANINA COW",
      "CIVIC TRADITION", "FIGHTERS", "DRUM BEAT", "PRIDE",
      "HISTORIC GAME", "MATCH"
    ]
  },
  {
    id: 69,
    title: "RENAISSANCE MUSIC & LUTES",
    subtitle: "Madrigals, Humanist Songs & Florentine Camerata",
    words: [
      "LUTE GUITAR", "MADRIGAL", "POLYPHONY", "FROTTOLA",
      "LAUDE SPIRIT", "CAMERATA", "MONODY", "GALILEI",
      "EARLY OPERA", "HARPSICHORD", "VIOLA GAMBA", "SWEET STRINGS",
      "POETRY SUNG", "MEDICI FEAST", "CHORUS", "COUNTERPOINT",
      "MELODIC", "RESONANCE"
    ]
  },
  {
    id: 70,
    title: "THE RENAISSANCE TABLE",
    subtitle: "Tuscan Banquets, Medici Recipes & Chianti Wine",
    words: [
      "CHIANTI WINE", "OLIVE OIL", "ROASTED MEAT", "PECORINO CHEESE",
      "HERB SPICES", "SAFFRON BROTH", "SWEET WINE", "CANTUCCI",
      "MEDICI FEAST", "SILVER FORK", "SUGAR SCULPTURE", "BANQUET HALL",
      "TUSCAN BREAD", "ROSE WATER", "PHEASANT", "CARVER SEWER",
      "HOSPITALITY", "VINTAGE"
    ]
  },
  {
    id: 71,
    title: "TUSCAN HILLS & OLIVES",
    subtitle: "Contado Agrarian Life & Tuscan Landscapes",
    words: [
      "CONTADO", "CYPRESS TREES", "OLIVE GROVE", "TERRACED VINEYARD",
      "STONE FARMHOUSE", "MEZZADRIA", "SHARECROPPING", "HARVEST WHEAT",
      "ARNO VALLEY", "CHIANTI HILLS", "FIESOLE PEAK", "RURAL LIFE",
      "MULE TRAIN", "GRAIN BASKET", "SPRING BLOSSOM", "TUSCAN SUN",
      "ESTATE VILLA", "PASTORAL"
    ]
  },
  {
    id: 72,
    title: "CARRARA MARBLE",
    subtitle: "Quarrying the White Vein of the Apuan Alps",
    words: [
      "CARRARA", "APUAN ALPS", "STATUARIO", "WHITE MARBLE",
      "QUARRY", "CHISEL WEDGE", "OXEN SLED", "LIZZA ROPE",
      "SEA BARGE", "RIVER TRANSPORT", "STONE CUTTER", "MICHELANGELO",
      "RAW BLOCK", "PULLING CABLE", "MOUNTAIN VEIN", "PURITY STONE",
      "ENDURANCE", "MONUMENT"
    ]
  },
  {
    id: 73,
    title: "PIETRA SERENA",
    subtitle: "The Gray Architectural Sandstone of Florence",
    words: [
      "PIETRA SERENA", "GRAY SANDSTONE", "FIESOLE QUARRY", "COLUMNS ARCHES",
      "BRUNELLESCHI", "CONTRAST", "ARCHITRAVE", "PILASTER",
      "PAZZI CHAPEL", "MEDICI PALACE", "FINE GRAIN", "STONE CUTTING",
      "WEATHERING", "MONOCHROME", "SOBRIETY", "TUSCAN STONE",
      "STRUCTURE", "ENDURANCE"
    ]
  },
  {
    id: 74,
    title: "FRESCO TECHNIQUES",
    subtitle: "The Demanding Craft of Buon Fresco",
    words: [
      "BUON FRESCO", "ARRICCIO", "INTONACO", "SINÒPIA",
      "GIORNATA", "WET PLASTER", "LIME WATER", "CARBONATION",
      "POUNCING", "SPOLVERO", "PIGMENT ABSORB", "CARTOON DRAWING",
      "SCAFFOLD STAGE", "DURABILITY", "DRYING TIME", "MASTER STROKE",
      "CRAFT WORK", "IMMORTAL"
    ]
  },
  {
    id: 75,
    title: "CHIAROSCURO & SFUMATO",
    subtitle: "Light, Shadow & Subtle Transitions",
    words: [
      "CHIAROSCURO", "SFUMATO", "LIGHT SHADOW", "SMOKY HAZE",
      "GRADATION", "LEONARDO METHOD", "NO SHARP EDGES", "ATMOSPHERE",
      "VOLUME MODEL", "CONTRAST", "ILLUSION DEPTH", "TUSCAN OIL",
      "EYELID SHADOW", "MYSTERY", "GLAZE LAYERS", "OPTICAL MAGIC",
      "BRUSHWORK", "LUMINANCE"
    ]
  },
  {
    id: 76,
    title: "TEMPERA & OIL PAINTS",
    subtitle: "From Egg Yolk Emulsions to Flemish Oils",
    words: [
      "EGG TEMPERA", "YOLK BINDER", "WOOD PANEL", "POPLAR WOOD",
      "GESSO GROUND", "RABBIT GLUE", "LINSEED OIL", "WALNUT OIL",
      "GLAZING LAYERS", "SLOW DRYING", "LUMINOUS DEPTH", "FLEMISH INFLUENCE",
      "CENNINO CENNINI", "BOOK OF ART", "BRISTLE BRUSH", "PREPARATION",
      "PIGMENT GRIND", "VARNISH"
    ]
  },
  {
    id: 77,
    title: "RENAISSANCE PIGMENTS",
    subtitle: "Minerals, Stones & Botanical Colors",
    words: [
      "LAPIS LAZULI", "ULTRAMARINE", "GOLD LEAF", "MALACHITE GREEN",
      "CINNABAR RED", "VERMILION", "YELLOW OCHRE", "BURNT SIENNA",
      "AZURITE BLUE", "BONE BLACK", "LEAD WHITE", "COCHINEAL LAKE",
      "DRAGONS BLOOD", "MADDER ROOT", "MINERAL CRUSH", "ALCHEMIST",
      "VIBRANT", "PERMANENCE"
    ]
  },
  {
    id: 78,
    title: "BOTANICAL GARDENS",
    subtitle: "The Giardino dei Semplici & Medici Botany",
    words: [
      "SEMPLICI GARDEN", "MEDICINAL HERB", "COSIMO FIRST", "LUCA GHINI",
      "HERBAL SPECIMEN", "CLASSIFICATION", "BOTANICAL", "EXOTIC PLANTS",
      "CITRUS TREES", "APOTHECARY STUDY", "HERBARIUM", "LEAF PRESS",
      "NATURE SCIENCE", "TERRACE PLOT", "IRRIGATION", "TAXONOMY",
      "DISCOVERY", "HEALING"
    ]
  },
  {
    id: 79,
    title: "FLORENTINE COMMERCE & TRADE",
    subtitle: "The Mercantile Bridges from Florence to the World",
    words: [
      "MERCANTILE", "PISA HARBOR", "LIVORNO PORT", "GALLEY SHIPS",
      "CONSTANTINOPLE", "LEVANT TRADE", "FLORIN GOLD", "CONTRACT LAW",
      "INSURANCE MARINE", "CUSTOMS TOLL", "WAREHOUSE", "SPICE ROUTE",
      "WOOL SHIPMENT", "COMMERCIAL COURT", "TRADE NETWORK", "PROSPERITY",
      "EMPORIUM", "ENTERPRISE"
    ]
  },
  {
    id: 80,
    title: "THE ARCHIVAL PATRIMONY",
    subtitle: "The Enduring Cultural Legacy of the Renaissance",
    words: [
      "ARCHIVE", "FLORENTINE", "MEDICI ESTATE", "LAURENZIANA",
      "STATE ARCHIVES", "MANUSCRIPTS", "HUMANIST", "CIVIC BEAUTY",
      "MONUMENT", "CRADLE OF ART", "ETERNAL TUSCANY", "CHRONICLE",
      "SERIES ARCHIVE", "ARNO LEGACY", "TIMELESS ART", "WISDOM",
      "CULTURAL BEACON", "IMMORTAL"
    ]
  }
];

console.log("Total puzzles defined:", puzzlesData.length);

// Word Search Grid Generator (16x16)
const DIRS = [
  [0, 1],   // right
  [0, -1],  // left
  [1, 0],   // down
  [-1, 0],  // up
  [1, 1],   // down-right
  [-1, -1], // up-left
  [1, -1],  // down-left
  [-1, 1]   // up-right
];

// Weighted Italian/Latin Renaissance letter distribution
const FILL_LETTERS = "AAAAAAAAAABCCCCCCDDDDDDEEEEEEEEEEEEEFFFFGGGGHHHHIIIIIIIIIILLLLLLLLMMMMMMNNNNNNNNOOOOOOOOOPPPPPPQRRRRRRRRRSSSSSSSSTTTTTTTTTUUUUUVVVZZ";

function cleanWord(w) {
  return w.toUpperCase().replace(/[^A-Z]/g, '');
}

function generatePuzzleGrid(puzzle) {
  const size = 16;
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const placements = [];

  // Sort words by length descending for better placement fit
  const rawWords = puzzle.words.map(w => ({ original: w, clean: cleanWord(w) }));
  // Keep original order index to track back
  const indexedWords = rawWords.map((item, idx) => ({ ...item, idx }));
  indexedWords.sort((a, b) => b.clean.length - a.clean.length);

  for (const item of indexedWords) {
    const word = item.clean;
    let placed = false;

    // Try up to 300 random attempts
    const shuffledDirs = [...DIRS].sort(() => Math.random() - 0.5);
    
    // Generate all valid starting positions and shuffle
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

        // Check collision
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
          // Place word
          for (let i = 0; i < word.length; i++) {
            grid[r + dr * i][c + dc * i] = word[i];
          }
          placements.push({
            original: item.original,
            clean: word,
            start: [r + 1, c + 1], // 1-based coordinates
            end: [endR + 1, endC + 1],
            dir: [dr, dc],
            originalIdx: item.idx
          });
          placed = true;
          break;
        }
      }
    }

    if (!placed) {
      console.warn(`Warning: Could not place "${item.original}" in puzzle ${puzzle.id} (${puzzle.title})`);
    }
  }

  // Restore original word bank order for placements
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

// Generate all 80 puzzles and verify
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
    console.error(`Failed to place all words for puzzle ${p.id} after ${attempts} attempts`);
    process.exit(1);
  }

  completeBookData.push({
    id: p.id,
    volNumber: "001",
    puzzleNumber: String(p.id).padStart(2, '0'),
    code: "02.380.09.0501.1450.1550.001",
    title: p.title,
    subtitle: p.subtitle,
    era: "FLORENCE, TUSCANY • 1450–1550 AD",
    words: p.words,
    grid: result.grid,
    placements: result.placements
  });
}

const outPath = path.join(__dirname, 'data', 'all_80_puzzles.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(completeBookData, null, 2));

console.log(`Successfully generated and saved all 80 puzzles with 100% placement to: ${outPath}`);
