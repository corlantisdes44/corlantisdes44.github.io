// Generator for 100 Historical Puzzles of Venice: The Maritime Empire (1475-1575 AD)
// Volume 002 of The Spatiotemporal Puzzle Series
const fs = require('fs');
const path = require('path');

const puzzlesData = [
  // SECTION I: THE MARITIME EMPIRE & THE ARSENAL (01-20)
  {
    id: 1,
    title: "THE VENETIAN ARSENAL",
    subtitle: "The World's First Naval Assembly Line",
    words: [
      "ARSENALE", "SHIPYARD", "GALEOTTO", "DRY DOCK",
      "CANAL GRANDE", "ROPEWALK", "CARPENTER", "SHIPWRIGHT",
      "ASSEMBLY", "TIMBER", "FIR TRUNK", "CORDERIE",
      "LION GATE", "WARSHIP", "MUNITIONS", "WORKERS",
      "SUPREMACY", "DOCKYARD"
    ]
  },
  {
    id: 2,
    title: "THE GREAT GALLEYS",
    subtitle: "Galea Grossa: Titans of the Adriatic",
    words: [
      "GALEA GROSSA", "ROWER BENCH", "LATEEN SAIL", "BALLAST",
      "RUDDER", "MAINMAST", "OARSMAN", "FORECASTLE",
      "BOW RAM", "CANNON", "CARGO HOLD", "FLAGSHIP",
      "PENNANT", "MERCHANT", "CONVOY", "HELM",
      "CROSSBOW", "ADRIATIC"
    ]
  },
  {
    id: 3,
    title: "THE CALAFATI & MARANGONI",
    subtitle: "Caulkers and Master Carpenters of the Sea",
    words: [
      "CALAFATI", "MARANGONI", "OAKUM PITCH", "MALLET",
      "WATERPROOF", "ADZE", "PLANING", "SAW PIT",
      "GUILD MASTER", "FOREMAN", "PINE RESIN", "CHISEL",
      "HULL TIMBER", "TREENAIL", "RIVET", "SHIPWRIGHT",
      "WORKSHOP", "DURABILITY"
    ]
  },
  {
    id: 4,
    title: "THE BUCENTAUR",
    subtitle: "Il Bucintoro: The Golden State Barge of the Doge",
    words: [
      "BUCINTORO", "STATE BARGE", "GILDED OAR", "CRIMSON VELVET",
      "DOGAL THRONE", "LION CANOPY", "MARRIAGE SEA", "PROCESSION",
      "FESTIVAL", "LAGOON WATER", "CEREMONY", "GOLDEN HULL",
      "SERENISSIMA", "SPECTACLE", "CHORAL", "TRUMPETERS",
      "SOVEREIGN", "MAJESTY"
    ]
  },
  {
    id: 5,
    title: "ST. MARK'S CAMPANILE",
    subtitle: "The Lighthouse & Watchtower of the Republic",
    words: [
      "CAMPANILE", "WATCHTOWER", "BELL TOWER", "MARANIELLA",
      "GOLDEN ANGEL", "BRICKWORK", "LOGGETTA", "SAN MARCO",
      "PIAZZA", "LIGHTHOUSE", "SIGNAL FIRE", "VISTA",
      "LAGOON VIEW", "BELFRY", "ARCHITECT", "FOUNDATION",
      "SANSOVINO", "SENTINEL"
    ]
  },
  {
    id: 6,
    title: "THE GRAND CANAL",
    subtitle: "Canalazzo: The Waterway of Palaces",
    words: [
      "CANALAZZO", "PALAZZO", "WATERWAY", "MARBLE FAÇADE",
      "GONDOLA", "MOORING POLE", "REFLECTION", "WATER GATE",
      "BALCONY", "LOGGIA", "CA D ORO", "TRAFFIC",
      "FESTIVITY", "HIGH TIDE", "ACQUA ALTA", "BARGE",
      "SERPENTINE", "SPLENDOR"
    ]
  },
  {
    id: 7,
    title: "THE RIALTO BRIDGE",
    subtitle: "Ponte di Rialto: Heart of Commerce",
    words: [
      "RIALTO", "STONE ARCH", "CANTONI", "MARKET PLACE",
      "GOLDSMITH", "SHOP ARCADE", "COMMERCE", "EXCHANGE",
      "MONEY CHANGER", "SPICE BAZAAR", "CANAL SPAN", "PEDESTRIAN",
      "SAN BARTOLOMEO", "MERCHANDISE", "BARGAIN", "DEALER",
      "STONE BRIDGE", "FOOTSTEP"
    ]
  },
  {
    id: 8,
    title: "MURANO GLASSMAKING",
    subtitle: "Secret Furnaces of Cristallo & Aventurine",
    words: [
      "MURANO", "GLASSBLOWER", "CRISTALLO", "BLOWPIPE",
      "FURNACE", "CRUCIBLE", "AVENTURINE", "CHANDELIER",
      "MILLEFIORI", "SECRET GUILD", "EXILE LAW", "POTASH SILICA",
      "SMOOTH GLASS", "COLORANT", "COBALT", "BEADMAKER",
      "GOBLET", "ALCHIMIA"
    ]
  },
  {
    id: 9,
    title: "TORCELLO & THE LAGOON",
    subtitle: "Ancient Roots & The Byzantine Mosaics",
    words: [
      "TORCELLO", "SANTA FOSCA", "BASILICA", "LAST JUDGMENT",
      "GOLD MOSAIC", "SALT MARSH", "ATTILA THRONE", "CANAL ROUTE",
      "FISHERMAN", "LAGOON REED", "ISLAND PEOPLES", "BELL TOWER",
      "REFUGE", "ANTIQUITY", "APSE", "VIRGIN MARY",
      "ANCIENT PORT", "SOLITUDE"
    ]
  },
  {
    id: 10,
    title: "THE MUDE CONVOYS",
    subtitle: "State-Regulated Merchant Fleets",
    words: [
      "MUDE FLEET", "STATE CONVOY", "AUCTION", "LEVANT ROUTE",
      "FLANDERS", "ARMED MERCHANT", "CAPTAIN", "SAILING DATE",
      "REGULATION", "CARGO QUOTA", "SPICE LADEN", "INSURANCE",
      "CREW DISCIPLINE", "PORT STOP", "MEDITERRANEAN", "SIGNORIA",
      "VOYAGE", "SCHEDULE"
    ]
  },
  {
    id: 11,
    title: "THE BATTLE OF LEPANTO",
    subtitle: "1571: The Christian Holy League at Sea",
    words: [
      "LEPANTO", "GALLEASS", "HOLY LEAGUE", "SEBASTIANO",
      "VENIER", "NAVAL CLASH", "CANNONADE", "CORINTH GULF",
      "VICTORY", "RAMMING", "TURKISH FLEET", "BOARDING",
      "FLAGSHIP", "BANNER", "ADMIRAL", "TRIUMPH",
      "BROADSIDE", "VALOR"
    ]
  },
  {
    id: 12,
    title: "CONSTANTINOPLE OUTPOSTS",
    subtitle: "The Bailo & The Venetian Quarter of Pera",
    words: [
      "BAILO", "CONSTANTINOPLE", "GALATA PERA", "EMBASSY",
      "TRADE TREATY", "SULTAN COURT", "BOSPHORUS", "MERCHANT WARD",
      "DIPLOMAT", "SILK CARGO", "GOLD COIN", "TOLERATION",
      "WAREHOUSE", "ENVOY", "LEVANT TRADE", "CARAVAN",
      "HARBOR", "SECURITY"
    ]
  },
  {
    id: 13,
    title: "THE REALM OF CANDIA",
    subtitle: "Crete: Crown Jewel of the Dominio da Mar",
    words: [
      "CANDIA", "CRETE ISLAND", "FORTRESS", "BASTION",
      "HERAKLION", "WINE EXPORT", "MALVASIA", "CRETAN ARCHER",
      "GARRISON", "OUTPOST", "DUKE CANDIA", "IONIAN FLEET",
      "DEFENSE WALL", "HARBOR MOLE", "PROVISION", "GRAIN CORN",
      "PROVINCIAL", "STRATEGY"
    ]
  },
  {
    id: 14,
    title: "CYPRUS & QUEEN CORNARO",
    subtitle: "Caterina Cornaro & The Annexation of 1489",
    words: [
      "CATERINA", "CORNARO", "QUEEN CYPRUS", "ANNEXATION",
      "NICOSIA", "FAMAGUSTA", "ROYAL PALACE", "ABDICATION",
      "SUGAR CANE", "COTTON CROP", "ASOLO COURT", "DOWAGER",
      "LEVANTE", "SENATE DECREE", "SOVEREIGNTY", "MARRIAGE",
      "LEGATION", "PATRONESS"
    ]
  },
  {
    id: 15,
    title: "THE DOMINIO DA MAR",
    subtitle: "Fortresses of the Venetian Sea Route",
    words: [
      "DOMINIO DA MAR", "ZARA", "CORFU", "NAUPLIA",
      "METHONI", "KORONI", "EYES OF VENICE", "CITADEL",
      "CASTLE", "COASTLINE", "DALMATIAN", "GARRISON",
      "ROVING FLEET", "COALING STATION", "SUPPLY BASE", "RAMPART",
      "HARBOR", "ISLAND WALL"
    ]
  },
  {
    id: 16,
    title: "PORTOLAN CHARTS & COMPASS",
    subtitle: "Venetian Navigational Mastery",
    words: [
      "PORTOLAN", "RHUMB LINE", "COMPASS ROSE", "PARCHMENT",
      "NAVIGATOR", "DEAD RECKONING", "SEAFARER", "COAST GUIDE",
      "LATITUDE", "HOURGLASS", "SOUNDING LEAD", "CHART MAKER",
      "PILOT BOOK", "ISOLARIO", "STAR SIGHT", "MAGNET",
      "LODESTONE", "WIND ROSE"
    ]
  },
  {
    id: 17,
    title: "OARSMEN & FREE SAILORS",
    subtitle: "Ciurma: The Strength of Venetian Galley Crews",
    words: [
      "CIURMA", "ROWER BENCH", "FREE CITIZEN", "CONSCRIPTION",
      "GALLEY STROKE", "RATION WINE", "HARDTACK", "COXSWAIN",
      "WHISTLE", "DRUM BEAT", "MUSCLE", "ENDURANCE",
      "SALARY", "MARINARO", "CREW QUARTERS", "VOYAGE",
      "OAR LENGTH", "STRENGTH"
    ]
  },
  {
    id: 18,
    title: "THE SEA GATE",
    subtitle: "Porta da Mar: Entrance to the Lagoon",
    words: [
      "PORTA DA MAR", "LIDO INLET", "MALAMOCCO", "CHIOZZIA",
      "SANDBAR", "TIDE CHANNEL", "BARRIER REEF", "PILOT BOAT",
      "CUSTOMS CUTTER", "SEAWALL", "MURAZZI", "BEACON",
      "DEFENSE FORT", "ENTRANCE", "PILOTAGE", "LAGOON REEF",
      "SAFE HAVEN", "HARBOR MASTER"
    ]
  },
  {
    id: 19,
    title: "THE SALT MONOPOLY",
    subtitle: "White Gold of the Venetian State",
    words: [
      "SALT MONOPOLY", "WHITE GOLD", "MAGAZZINI SALE", "PRESERVATION",
      "SALINAS", "TAXATION", "TREASURY", "LAGOON PAN",
      "COMMERCE", "FISH CURING", "TRADE MANDATE", "STATE WAREHOUSE",
      "MEASUREMENT", "SALT POND", "INSPECTOR", "CARGO BRINE",
      "REVENUE", "EMPIRE"
    ]
  },
  {
    id: 20,
    title: "GALLEY TACTICS & CANNON",
    subtitle: "Gunpowder & The Ram at Sea",
    words: [
      "CANNONADE", "BOW CANNON", "CULVERIN", "GUNPOWDER",
      "RAMMING SPEED", "SPONSON", "FUSILLADE", "GRAPPLING IRON",
      "BOARDING CUTLASS", "SWIVEL GUN", "SHOT POWDER", "NAVAL ARCHERY",
      "ARTILLERY", "TARGETING", "IRON BALL", "SMOKE SCREEN",
      "OFFENSIVE", "TACTIC"
    ]
  },

  // SECTION II: THE DOGE, STATECRAFT & SECRET COUNCILS (21-40)
  {
    id: 21,
    title: "THE DOGE OF VENICE",
    subtitle: "Serenissimo Principe: Ruler in Gilded Vestments",
    words: [
      "SERENISSIMO", "PRINCIPE", "CORNO DUCALE", "DOGAL CAP",
      "ERMINE CAPE", "GOLD BROCADE", "LIFETIME OFFICE", "CEREMONIAL",
      "STATE SYMBOL", "REPUBLIC CHIEF", "VETO POWER", "INVESTITURE",
      "THRONE ROOM", "DIGNITY", "SOVEREIGNTY", "OATH RECORD",
      "PROMISSIO", "MAJESTIC"
    ]
  },
  {
    id: 22,
    title: "PALAZZO DUCALE",
    subtitle: "The Doge's Palace: Gothic Elegance on the Molo",
    words: [
      "PALAZZO DUCALE", "GOTHIC LOGGIA", "PORTE DELLA CARTA", "SCALA DEI GIGANTI",
      "NEPTUNE STATUE", "MARS STATUE", "MARBLE ARCADE", "PINK VERONA",
      "SALA MAGGIOR", "DOGAL SUITE", "COUNCIL HALL", "COURTYARD",
      "WELLHEAD", "CANVAS CEILING", "MONUMENT", "BALCONY",
      "COLONNADE", "TREASURY"
    ]
  },
  {
    id: 23,
    title: "THE COUNCIL OF TEN",
    subtitle: "Consiglio dei Dieci: Guardians of Republic Security",
    words: [
      "CONSIGLIO DIECI", "STATE SECURITY", "SECRECY", "TRIBUNAL",
      "INQUISITOR", "DECREE", "CONSPIRACY", "INTERROGATION",
      "TREASON TRIAL", "VIGILANCE", "NIGHT COUNCIL", "CHIEF TRIO",
      "SHADOW POWER", "SURVEILLANCE", "SWIFT JUSTICE", "RECORD BOOK",
      "CONFIDENTIAL", "AUTHORITY"
    ]
  },
  {
    id: 24,
    title: "THE GOLDEN BOOK",
    subtitle: "Il Libro d'Oro: The Aristocratic Caste of Venice",
    words: [
      "LIBRO D ORO", "PATRICIAN", "NOBLE CASTE", "HEREDITARY",
      "SERRATA LAW", "GENEALOGY", "ARISTOCRAT", "REGISTRATION",
      "COAT OF ARMS", "PRIVILEGE", "CONSIGLIO", "BLOODLINE",
      "MARRIAGE RECORD", "CHAMBER", "GOVERNANCE", "SENATOR",
      "PEDIGREE", "INSCRIPTION"
    ]
  },
  {
    id: 25,
    title: "THE LION'S MOUTH",
    subtitle: "Bocche dei Leoni: Secret Denunciations",
    words: [
      "BOCCHE LEONI", "DENUNCIATION", "CARVED STONE", "WALL SLOT",
      "ACCUSATION", "ANONYMOUS", "CITIZEN REPORT", "CONTRABAND",
      "TAX FRAUD", "STATE CRIME", "BOX KEY", "INVESTIGATION",
      "INFORMER", "SCRUTINY", "TRIBUNAL SLIP", "CORRUPTION",
      "WARNING", "DISCRETION"
    ]
  },
  {
    id: 26,
    title: "THE BRIDGE OF SIGHS",
    subtitle: "Ponte dei Sospiri: From Palace to Prison",
    words: [
      "PONTE DEI SOSPIRO", "COVERED BRIDGE", "PIOMBI PRISON", "LODGEMENT",
      "STONE GRILLE", "RIO PALAZZO", "PRISONER SIGH", "LEAD ROOF",
      "CONDEMNED", "DARK CELL", "CARCERI NUOVE", "LAST GLANCE",
      "LAGOON LIGHT", "LIMESTONE", "PASSAGEWAY", "GUARDSMAN",
      "FOOTSTEPS", "SHADOWS"
    ]
  },
  {
    id: 27,
    title: "THE GREAT COUNCIL",
    subtitle: "Maggior Consiglio: The General Assembly",
    words: [
      "CONSIGLIO", "PARADISE CANVAS", "LEATHER BENCH", "ASSEMBLY",
      "PATRICIAN HALL", "DEBATE", "ELECTION", "SENATE QUORUM",
      "VOTING TUBE", "GILDED ROOF", "TINTORETTO", "ORATOR",
      "REPUBLIC LAW", "LEGISLATIVE", "CHAMBER SEAT", "PROCEDURE",
      "DELIBERATION", "CITIZEN NOBLE"
    ]
  },
  {
    id: 28,
    title: "THE BALLA D'ORO",
    subtitle: "Golden Urns & The Intricate Dogal Ballot",
    words: [
      "BALLA D ORO", "BALLOT SPHERE", "GOLDEN BALL", "SILVER URN",
      "DRAWING CHANCE", "ELECTOR BATCH", "COMPLEX SYSTEM", "SELECTION",
      "FACTION CHECK", "CORRUPTION BAN", "SECRET VOTING", "YOUTH RUNNER",
      "NINE ELECTORS", "FORTY-ONE MEN", "SCRUTINY", "CEREMONY",
      "BALLOT BOX", "LOTTERY"
    ]
  },
  {
    id: 29,
    title: "VENETIAN DIPLOMACY",
    subtitle: "Ambassadors & The Secret Relazioni",
    words: [
      "RELAZIONI", "AMBASSADOR", "DIPLOMACY", "SECRET DISPATCH",
      "FOREIGN COURT", "INTELLIGENCE", "OBSERVER", "STATE REPORT",
      "ENVOY", "ESPIONAGE", "PARIS EMBASSY", "MADRID LEGATION",
      "ROME MISSION", "SUBTLE CRAFT", "NEGOTIATOR", "ARCHIVE",
      "SECRECY", "DISCRETION"
    ]
  },
  {
    id: 30,
    title: "DOGE LEONARDO LOREDAN",
    subtitle: "Steering the Republic Through the Storm of 1501",
    words: [
      "LOREDAN", "BELLINI PORTRAIT", "STEADY HAND", "CRISIS LEADER",
      "DEFIANCE", "NOBLE DIGNITY", "TREASURY LOAN", "FAMILY SILVER",
      "COUNCIL HEAD", "DIPLOMAT", "SERENISSIMA", "WAR LEAGUE",
      "SOVEREIGN", "CAPE LINING", "HISTORIAN", "PIETY",
      "FORTITUDE", "REPUTATION"
    ]
  },
  {
    id: 31,
    title: "DOGE ANDREA GRITTI",
    subtitle: "The Soldier-Statesman of the Renaissance",
    words: [
      "ANDREA GRITTI", "SOLDIER DOGE", "TITIAN PORTRAIT", "WAR CAPTAIN",
      "TURKISH PRISON", "FORTRESS MASTER", "LEAGUE LEADER", "COMMANDER",
      "DOGAL ROBE", "AUTHORITY", "RENAISSANCE MIND", "STATESMAN",
      "LEPANTO SPIRIT", "GRITTI PALACE", "REFORM", "MILITARY",
      "WAR COUNSEL", "COURAGE"
    ]
  },
  {
    id: 32,
    title: "THE LEAGUE OF CAMBRAI",
    subtitle: "1508: Venice Standing Alone Against Europe",
    words: [
      "CAMBRAI", "COALITION", "POPE JULIUS", "FRANCE KING",
      "EMPEROR MAX", "AGNADELLO", "TERRAFERMA", "RETREAT",
      "RESILIENCE", "PEASANT LOYALTY", "TREASURY DRAIN", "DIPLOMATIC WEAVE",
      "PEACE TREATY", "RECOVERY", "DEFIANCE", "FORTIFICATION",
      "SURVIVAL", "STRATEGY"
    ]
  },
  {
    id: 33,
    title: "THE PLAGUE & IL REDENTORE",
    subtitle: "Deliverance of the Lagoon & Palladio's Church",
    words: [
      "REDENTORE", "PLAGUE OUTBREAK", "LAZZARETTO", "VOW OF SENATE",
      "PALLADIO", "GIUDECCA", "PILGRIMAGE", "PONTOON BRIDGE",
      "HEALING", "QUARANTINE", "ISOLATION DOCK", "CLEANSING",
      "THANKSGIVING", "BASILICA", "MEMORIAL", "CURE",
      "RESTORATION", "HOPE"
    ]
  },
  {
    id: 34,
    title: "THE SCUOLE GRANDI",
    subtitle: "Civic Brotherhoods of Charity & Splendor",
    words: [
      "SCUOLA GRANDE", "BROTHERHOOD", "CONFRATERNITY", "CHARITY",
      "PROCESSION", "STANDARD BANNER", "RELIC CASING", "PATRON SAINT",
      "HALL OF FEASTS", "ALMSGIVING", "CITIZEN ORDER", "DONATION",
      "MARBLE PORTAL", "CEILING CANVAS", "BURIAL VAULT", "WELFARE",
      "DEVOTION", "BROTHER"
    ]
  },
  {
    id: 35,
    title: "SCUOLA GRANDE DI SAN ROCCO",
    subtitle: "Tintoretto's Sistine Chapel of the Lagoon",
    words: [
      "SAN ROCCO", "TINTORETTO", "PLAGUE SAINT", "CANVAS CYCLE",
      "CRUCIFIXION", "BRUSH SPEED", "ALBERGO HALL", "CEILING PANEL",
      "MIRACLE", "LIGHTING EFFECT", "CHIAROSCURO", "PATRON OFFER",
      "COMPETITION", "TERRIBILITA", "FAITH", "DEVOTION",
      "PILGRIM", "MASTERY"
    ]
  },
  {
    id: 36,
    title: "SCUOLA DI SAN MARCO",
    subtitle: "Trompe L'oeil Marble & The Medical Brotherhood",
    words: [
      "SAN MARCO SCUOLA", "LOMBARD FAÇADE", "TROMPE L OEIL", "MARBLE LION",
      "CAMPO SANTI", "GIOVANNI BELLINI", "GENTILE", "HOSPITAL WARD",
      "SURGEON GUILD", "RELIEF SCULPTURE", "PORTAL ARCH", "BROTHERHOOD",
      "CIVIC DUTY", "MEDICINE", "CLASSICAL MOTIF", "RENAISSANCE",
      "CHARITY", "ORNAMENT"
    ]
  },
  {
    id: 37,
    title: "THE GHETTO OF VENICE",
    subtitle: "1516: Origin of the Global Word in Cannaregio",
    words: [
      "GHETTO NUOVO", "CANNAREGIO", "CANAL GATE", "NIGHT CURFEW",
      "SYNAGOGUE", "SCOLA SPAGNOLA", "SCOLA TEDESCA", "TALL BUILDINGS",
      "SCHOLARSHIP", "PHYSICIAN", "MONEYLENDING", "PAWNBROKER",
      "COMMUNITY", "TOLERATION", "FOUNDRY SITE", "MERCHANT HEBREW",
      "LAGOON REFUGE", "TRADITION"
    ]
  },
  {
    id: 38,
    title: "SUMPTUARY LAWS",
    subtitle: "Restraining Luxury in Silk, Jewels & Feasts",
    words: [
      "SUMPTUARY LAW", "LUXURY BAN", "PEARL LIMIT", "SILK TRAIN",
      "BANQUET CHECK", "MAGISTRATE", "POMP INSPECTOR", "DOWRY CEILING",
      "GOLD EMBROIDERY", "FEAST COURSE", "REPUBLIC MODESTY", "PATRICIAN RULE",
      "PENALTY FINE", "DRESS CODE", "TAILOR COURT", "AUSTERITY",
      "DECREE", "DECENCY"
    ]
  },
  {
    id: 39,
    title: "THE SECRET POLICE & SPIES",
    subtitle: "Eyes and Ears in Every Bacaro and Palace",
    words: [
      "SECRET POLICE", "INFORMER", "SHADOW COURIER", "CIPHER CODE",
      "SURVEILLANCE", "EAVESDROP", "FOREIGN AGENT", "ALLEY WATCH",
      "COURIER SACK", "DECODER", "DOSSIER", "INVESTIGATOR",
      "PRISON CELL", "WHISPER", "COUNTERPLOT", "INTERCEPTION",
      "DISGUISE", "VIGILANCE"
    ]
  },
  {
    id: 40,
    title: "THE PROMISSIO DUCALE",
    subtitle: "The Sacred Oath Restraining Dogal Power",
    words: [
      "PROMISSIO", "CORONATION OATH", "RESTRAINT", "NOBLE SENATE",
      "CHARTER", "SIGNORIA LIMIT", "SEAL SURRENDER", "FAMILY PROHIBIT",
      "CONSTITUTION", "SOVEREIGN BOND", "INSPECTION", "LEGAL STATUTE",
      "CORONATION", "PATRICIAN CHECK", "DUTY BINDING", "COMMISSION",
      "VOW", "GOVERNANCE"
    ]
  },

  // SECTION III: SPICE ROUTES, SILK & LEVANT TRADE (41-60)
  {
    id: 41,
    title: "FONDACO DEI TEDESCHI",
    subtitle: "The German Merchants' Trading Depot on the Rialto",
    words: [
      "FONDACO TEDESCHI", "GERMAN MERCHANT", "TITIAN FRESCO", "GIORGIONE",
      "TRADE HOSTEL", "RACK WAREHOUSE", "CENTRAL COURT", "BALCONY ROW",
      "DUTY CUSTOMS", "NUREMBERG", "AUGSBURG", "COPPER ORE",
      "SILVER BULLION", "LINEN CLOTH", "RIALTO BANK", "INSPECTION",
      "SECURITY", "COMMERCE"
    ]
  },
  {
    id: 42,
    title: "FONDACO DEI TURCHI",
    subtitle: "Ottoman Merchants & Levantine Caravans",
    words: [
      "FONDACO TURCHI", "TURKISH TRADER", "BYZANTINE PALACE", "WATER ARCADE",
      "CARPET BALES", "RAW SILK", "SPICE BOX", "TURKISH COFFEE",
      "ORIENTAL TOBACCO", "LAGOON DOCK", "PRAYER ROOM", "CUSTOMS WATCH",
      "CARAVAN WEALTH", "LEVANT GOODS", "BARTER", "EXCHANGE",
      "WAREHOUSE", "RESIDENCE"
    ]
  },
  {
    id: 43,
    title: "SPICES OF THE ORIENT",
    subtitle: "Pepper, Cinnamon, Cloves & Nutmeg",
    words: [
      "BLACK PEPPER", "CINNAMON BARK", "NUTMEG MACE", "CLOVE FLOWER",
      "CARDAMOM", "GINGER ROOT", "WEIGHT RATIO", "SILK SACK",
      "MOLUCCAS", "INDIA VOYAGE", "SCENT AROMA", "PRESERVATION",
      "GOLD VALUE", "APOTHECARY", "TRADE CARAVAN", "CULINARY",
      "LUXURY SPICE", "TREASURE"
    ]
  },
  {
    id: 44,
    title: "SILK ROAD CARGOES & DAMASKS",
    subtitle: "Loom Masters, Velvets & Golden Brocades",
    words: [
      "VENETIAN SILK", "BROCADE", "DAMASK WEAVE", "VELVET CUT",
      "GOLD THREAD", "LOOM WORKER", "GUILD WEAVER", "CRIMSON DYE",
      "KERMES INSECT", "TYRIAN PURPLE", "LEVANTE COCOON", "TEXTILE SHOP",
      "PATRICIAN GOWN", "MERCERIA", "LUXURY BOLT", "SHIMMER",
      "WARP WEFT", "ELEGANCE"
    ]
  },
  {
    id: 45,
    title: "THE VENETIAN DUCAT",
    subtitle: "Il Zecchino d'Oro: The Universal Gold Currency",
    words: [
      "ZECCHINO D ORO", "GOLD DUCAT", "ZECCA MINT", "PURE GOLD",
      "SAN MARCO SEAL", "DOGE KNEELING", "STANDARD COIN", "GLOBAL WEIGHT",
      "CURRENCY TRUST", "MERCHANT SACK", "MEDITERRANEAN", "COINAGE STAMP",
      "GENUINE MINT", "BULLION", "EXCHANGE RATE", "TREASURY",
      "VALUE PLEDGE", "SOLVENCY"
    ]
  },
  {
    id: 46,
    title: "BANCO GIRO & DOUBLE ENTRY",
    subtitle: "The Pioneer of Public Banking & Credit Transfers",
    words: [
      "BANCO GIRO", "DOUBLE ENTRY", "BOOKKEEPING", "DEBIT CREDIT",
      "LEDGER", "LUCA PACIOLI", "CHEQUE ORDER", "CLEARING HOUSE",
      "RIALTO BANKER", "ACCOUNT BALANCES", "TRANSFER SYSTEM", "DEPOSITOR",
      "INTEREST RATE", "TRADE CREDIT", "CAPITAL FLOW", "RECORD SHEET",
      "FINANCE", "TRUST"
    ]
  },
  {
    id: 47,
    title: "THERIAC OF VENICE",
    subtitle: "The Renowned Antidote & Apothecary Panacea",
    words: [
      "THERIAC PANACEA", "VIPER FLESH", "APOTHECARY", "PUBLIC MIXING",
      "ST MARK DRUG", "OPIUM WINE", "HERBAL COMPOUND", "SEAL OF PURITY",
      "PHARMACY JAR", "ALCHIMIST", "MEDICINE CURE", "ANTIDOTE",
      "EXPORT REPUTE", "LABORATORY", "POTION", "FORMULA",
      "OFFICIAL SEAL", "HEALING"
    ]
  },
  {
    id: 48,
    title: "SCENTS & PERFUMES",
    subtitle: "Essences of Rosewater, Musk & Ambergris",
    words: [
      "ROSEWATER", "MUSK OIL", "AMBERGRIS", "CIVET SCENT",
      "PERFUMERY", "GLASS VIAL", "ORIENTAL ESSENCE", "FRAGRANCE",
      "DISTILLATION", "APOTHECARY SHOP", "SCENTED GLOVE", "POMANDER",
      "AROMATICS", "BALM", "LADY DRESSING", "INCENSE",
      "ALEMBIC", "LUXURY"
    ]
  },
  {
    id: 49,
    title: "COTTON & FLAX TRADE",
    subtitle: "Bales from Aleppo, Syria & Egypt",
    words: [
      "RAW COTTON", "ALEPPO BALE", "SYRIAN HARBOR", "EGYPTIAN CARGO",
      "SPINNING WHEEL", "CANVAS SAILCLOTH", "LINEN WEAVING", "WHARF CRANE",
      "MERCHANT STAMP", "CUSTOMS BOND", "TEXTILE MILL", "BULK FREIGHT",
      "TRADE DEPOT", "CORDAGE FIBER", "PACKING WEIGH", "IMPORTER",
      "COMMODITY", "SUPPLY"
    ]
  },
  {
    id: 50,
    title: "DYEWORKS & PIGMENTS",
    subtitle: "Ultramarine, Cinnabar & Kermes Crimson",
    words: [
      "ULTRAMARINE", "LAPIS LAZULI", "CINNABAR RED", "KERMES COCHINEAL",
      "VERDIGRIS", "ORPIMENT YELLOW", "LEAD WHITE", "DYE VAT",
      "COLOR MERCHANT", "ARTIST GRINDER", "PIGMENT POWDER", "CANAL STEEP",
      "RAW MINERAL", "ALUM MORDANT", "BRILLIANCE", "IMPORT TRADE",
      "PALETTE", "INTENSITY"
    ]
  },
  {
    id: 51,
    title: "SHIP INSURANCE & MARITIME LOANS",
    subtitle: "Mitigating Pirate Raids, Storms & Shipwrecks",
    words: [
      "MARITIME LOAN", "INSURANCE POLICY", "SEA RISK", "PIRACY LOSS",
      "BOTTOMRY BOND", "PREMIUM PAYMENT", "NOTARY CONTRACT", "RISK POOLING",
      "CARGO UNDERWRITE", "STORM CASUALTY", "SHIP LOSS", "CLAIM RECORD",
      "FINANCIAL SHIELD", "MERCHANT TRUST", "SETTLEMENT", "SIGNORIA LAW",
      "VENTURE", "GUARANTEE"
    ]
  },
  {
    id: 52,
    title: "ALEXANDRIA CARAVANS",
    subtitle: "Spices from the Nile & Red Sea Corridors",
    words: [
      "ALEXANDRIA", "NILE DELTA", "RED SEA ROUTE", "CAMEL CARAVAN",
      "MAMLUK TREATY", "SULTAN SAFEGUARD", "CONSULAR DESK", "PEPPER SHORE",
      "CARGO SCALE", "DESERT ROUTE", "OASIS CONVOY", "ORIENT PORT",
      "MERCHANT HOUSING", "CUSTOM CLEARANCE", "GOLD TRADE", "SPICE BARTER",
      "VOYAGE", "EXOTIC"
    ]
  },
  {
    id: 53,
    title: "DAMASCUS STEEL & BLADES",
    subtitle: "Folded Iron, Swords & Arabesque Engravings",
    words: [
      "DAMASCUS STEEL", "FOLDED BLADE", "WATER PATTERN", "SWORD HILT",
      "ARABESQUE", "ARMORER", "INLAY GOLD", "TEMPERED EDGE",
      "CARAVAN WEAPON", "SCIMITAR", "DAGGER SHEATH", "IMPORT STEEL",
      "CRUCIBLE WORK", "BLACKSMITH", "COLLECTION", "WEAPONRY",
      "DURABILITY", "SHARPNESS"
    ]
  },
  {
    id: 54,
    title: "CARPETS & KILIMS",
    subtitle: "Treasures from Persian & Anatolian Looms",
    words: [
      "ORIENTAL CARPET", "ANATOLIAN RUG", "KILIM WEAVE", "WOOL KNOT",
      "GEOMETRIC BORDER", "INDIGO MORDANT", "PALAZZO FLOOR", "BALCONY HANGING",
      "CARPET MERCHANT", "PERSIA IMPORT", "MEDALLION", "WARP KNOT",
      "LUXURY FIBER", "CANAL DISPLAY", "COLLECTOR PIECE", "ORNAMENT",
      "PATTERN", "CRAFT"
    ]
  },
  {
    id: 55,
    title: "CONTERIE GLASS BEADS",
    subtitle: "Venice's Miniature Currencies of the World",
    words: [
      "CONTERIE", "GLASS BEAD", "CHEVRON BEAD", "ROSETTA BEAD",
      "MURANO FORGE", "TRADE BEAD", "BARTER CURRENCY", "AFRICA VOYAGE",
      "COLOR BANE", "POLISHED GLASS", "STRING BEAD", "MILLEFIORI SLICE",
      "CANAL EXPORT", "BEAD STRINGER", "ORNAMENT ITEM", "COLLECTIBLE",
      "GLOSS", "MINIATURE"
    ]
  },
  {
    id: 56,
    title: "THE JEWISH FINANCIERS",
    subtitle: "Pawn, Medicine & The International Levant Networks",
    words: [
      "FINANCIER", "COMMERCE TIES", "BANK DESK", "LOAN REGISTER",
      "MEDICAL SCIENCE", "SCHOLAR RABBI", "HEBREW PRESS", "TRADE NETWORK",
      "GHETTO BANK", "EUROPE CREDIT", "PAWNSHOP", "CONTRACT LAW",
      "COMMUNITY BOND", "LANGUAGE SKILL", "TRANSLATION", "PORT AGENT",
      "HONOR", "ENTERPRISE"
    ]
  },
  {
    id: 57,
    title: "LE MERCERIE",
    subtitle: "The Premier Retail Arcades of High Venice",
    words: [
      "MERCERIE", "SHOPPING STREET", "GOLD CHAIN", "RIBBON LACE",
      "PERFUME BOOTH", "HABERDASHERY", "CLOCK TOWER PASS", "WINDOW SHOW",
      "CUSTOMER TRAIN", "FOREIGN BUYER", "EMBROIDERY", "LUXURY GOODS",
      "COBBLE ALLEY", "CANVAS CANOPY", "MERCHANT SHINGLE", "FASHION",
      "PURSE", "GLAMOUR"
    ]
  },
  {
    id: 58,
    title: "PUNTA DOGANA",
    subtitle: "The Triangle Customs Point of Venice",
    words: [
      "PUNTA DOGANA", "CUSTOMS HOUSE", "FORTUNE STATUE", "GOLDEN GLOBE",
      "WEATHOVANE", "CANAL MOUTH", "GIUDECCA POINT", "QUAY UNLOAD",
      "INSPECTION CREW", "WEIGHMASTER", "PORT LEDGER", "CUSTOM TARIFF",
      "CONTAINER CRANE", "LIGHT TOWER", "TIDE WATER", "GATEWAY",
      "SURVEILLANCE", "CHECKPOINT"
    ]
  },
  {
    id: 59,
    title: "THE WEIGH HOUSE & TOLLS",
    subtitle: "Precision Balances of the Salt & Spices Office",
    words: [
      "WEIGH HOUSE", "SCALE BRASS", "COUNTERWEIGHT", "OFFICIAL STAMP",
      "TOLL COLLECTOR", "MEASURE REGISTER", "ACCURACY CHECK", "MERCHANT FINE",
      "GRAIN BUSHEL", "SPICE WEIGHT", "PITCH BARREL", "REVENUE CLERK",
      "STANDARDIZATION", "CARGO VALUE", "STATE GAUGER", "BALANCE BEAM",
      "ACCURACY", "REVENUE"
    ]
  },
  {
    id: 60,
    title: "MALVASIA WINE & CITRUS",
    subtitle: "Sweet Nectars from the Greek Islands",
    words: [
      "MALVASIA WINE", "SWEET VINTAGE", "BARREL CASK", "GREEK ISLAND",
      "CITRUS CARGO", "LEMON CRATE", "SWEET ALMOND", "RAISIN SACK",
      "TAVERN FLASK", "BACARO CELLAR", "TASTING", "IMPORT QUOTA",
      "VINEYARD SUN", "PRESS TANK", "AMBER COLOR", "REFRESHMENT",
      "CELLAR MASTER", "TOAST"
    ]
  },

  // SECTION IV: VENETIAN RENAISSANCE MASTERS & COLORITO (61-80)
  {
    id: 61,
    title: "GIOVANNI BELLINI",
    subtitle: "The Patriarch of Venetian Light & Color",
    words: [
      "GIOVANNI BELLINI", "SAN ZACCARIA", "HOLY CONVERSE", "LUMINOUS OIL",
      "GOLDEN DAWN", "MADONNA MEADOW", "SAN GIOBBE", "GLOWING FLESH",
      "DEVOTIONAL", "HARMONY", "ANGEL LUTE", "OIL TECHNIQUE",
      "MASTER STUDIO", "COLORITO", "SERENITY", "ATMOSPHERE",
      "PIETY", "GENIUS"
    ]
  },
  {
    id: 62,
    title: "VITTORE CARPACCIO",
    subtitle: "Narratives of St. Ursula & St. George",
    words: [
      "CARPACCIO", "SAINT URSULA", "SAINT GEORGE", "DRAGON FIGHT",
      "MIRACLE OF RELIC", "LAGOON PANORAMA", "DETAIL MASTER", "DOGAL PAGEANT",
      "RED HAT", "CRIMSON HOSE", "ARCHITECTURE", "LEGEND CYCLE",
      "NARRATIVE ART", "BRUSH STORY", "SPECTATOR", "VENETIAN SCENE",
      "ELEGANCE", "COSTUME"
    ]
  },
  {
    id: 63,
    title: "GIORGIONE & THE TEMPEST",
    subtitle: "Poetic Enigmas & Atmospheric Chiaroscuro",
    words: [
      "GIORGIONE", "THE TEMPEST", "LIGHTNING FLASH", "SOLDIER GYPSY",
      "CASTELFRANCO", "POETIC MYSTERY", "PASTORAL SCENE", "SOFT SHADOW",
      "CANVAS MOOD", "LANDSCAPE GLOW", "SLEEPING VENUS", "EARLY PASSING",
      "PASTORAL MUSIC", "INTIMACY", "RUIN COLUMN", "ATMOSPHERIC",
      "MELANCHOLY", "ENIGMA"
    ]
  },
  {
    id: 64,
    title: "TITIAN: KING OF PAINTERS",
    subtitle: "Tiziano Vecellio: Master of Emperors and Popes",
    words: [
      "TIZIANO VECELLIO", "EMPEROR CHARLES", "COURT PAINTER", "RICH PIGMENTS",
      "CADORE MOUNTAIN", "PALETTE KNIFE", "FINGER PAINTING", "PORTRAIT KING",
      "POESIE MYTH", "BACCHANAL", "VENUS OF URBINO", "IMPERIAL HONOR",
      "GOLDEN GLOW", "DYNAMIC POSE", "RED HAIR", "TITIAN SHADE",
      "BRUSHWORK", "SUPREMACY"
    ]
  },
  {
    id: 65,
    title: "THE ASSUMPTION OF THE VIRGIN",
    subtitle: "The Masterpiece of the High Altar at the Frari",
    words: [
      "SANTA MARIA FRARI", "THE ASSUMPTION", "TITIAN MASTER", "HIGH ALTAR",
      "GOLDEN HEAVEN", "APOSTLE GESTURE", "SURGING CLOUD", "GOD THE FATHER",
      "ANGEL CHOIR", "MONUMENTAL", "RED MANTLE", "CHURCH NAVE",
      "REVELATION", "DIVINE ASCENT", "DRAMATIC SCALE", "COLOR SPLENDOR",
      "DEVOTION", "TRIUMPH"
    ]
  },
  {
    id: 66,
    title: "TINTORETTO: IL FURIOSO",
    subtitle: "Furious Brushwork & The Speed of Light",
    words: [
      "TINTORETTO", "IL FURIOSO", "JACOPO ROBUSTI", "LIGHTNING BRUSH",
      "SHADOW CONTRAST", "ROMAN STATURE", "TITIAN COLOR", "STUDIO MOTTO",
      "WAX FIGURINE", "HANGING MODEL", "DYNAMIC FORCE", "MIRACLE SLAVE",
      "RAPID CANVAS", "DRAMATIC ANGLE", "INTENSE ENERGY", "VENETIAN SCHOOL",
      "POWER", "SWIFTNESS"
    ]
  },
  {
    id: 67,
    title: "IL PARADISO IN PALAZZO DUCALE",
    subtitle: "The Largest Canvas Painting in the World",
    words: [
      "IL PARADISO", "LARGEST CANVAS", "DUCAL HALL", "CELESTIAL REALM",
      "FIVE HUNDRED", "HEAVENLY HOST", "CHRIST ENTHRONED", "VIRGIN QUEEN",
      "SAINT MARTYR", "TINTORETTO SON", "CONSIGLIO", "MASSIVE SPAN",
      "RADIANT LIGHT", "CHORAL VISION", "SOVEREIGN CROWD", "SPECTACLE",
      "ETERNITY", "COLOSSUS"
    ]
  },
  {
    id: 68,
    title: "PAOLO VERONESE",
    subtitle: "Sumptuous Banquets & Radiant Aristocracy",
    words: [
      "PAOLO VERONESE", "CALIARI", "BANQUET SCENE", "PEARL SILK",
      "MARBLE TERRACE", "DOG JESTER", "MUSICIAN GROUP", "LUXURY FEAST",
      "LIGHT BLUE SKY", "GOLD BROCADE", "SAN SEBASTIANO", "DECORATIVE",
      "RENAISSANCE JOY", "COURTLY MANNER", "ALLEGORY", "FESTIVE CROWD",
      "ELEGANCE", "SPLENDOR"
    ]
  },
  {
    id: 69,
    title: "THE WEDDING AT CANA",
    subtitle: "Veronese's Monumental Refectory Masterpiece",
    words: [
      "WEDDING AT CANA", "REFECTORY WALL", "SAN GIORGIO", "WATER INTO WINE",
      "ONE HUNDRED", "CELEBRITY GUEST", "VERONESE VIOL", "TITIAN BASS",
      "MARBLE COLUMN", "TERRACE BALCONY", "FEAST CUP", "GREYHOUND DOG",
      "BANQUET DRESS", "TURBAN NOBLE", "LUSTROUS FABRIC", "MONUMENTAL",
      "CELEBRATION", "MIRACLE"
    ]
  },
  {
    id: 70,
    title: "FEAST IN THE HOUSE OF LEVI",
    subtitle: "Before the Inquisition for Renaissance Liberty",
    words: [
      "HOUSE OF LEVI", "INQUISITION", "TRIBUNAL TRIAL", "DEFENSE OF ART",
      "POET LICENSE", "SOLDIER BUFFOON", "GERMAN MERCENARY", "PARROT JESTER",
      "HOLY OFFICE", "VERONESE WIT", "CANVAS TITLE", "THREE ARCHES",
      "ART FREEDOM", "TESTIMONY", "ACQUITTAL", "FEAST TABLE",
      "CONTROVERSY", "COURAGE"
    ]
  },
  {
    id: 71,
    title: "JACOPO BASSANO",
    subtitle: "Night Scenes, Animals & Rural Splendor",
    words: [
      "JACOPO BASSANO", "PASTORAL", "NIGHT LIGHTING", "ANIMAL REALISM",
      "SHEEP FLOCK", "RUSTIC BOTTEGA", "COPPER GLOW", "BASSANO GRAPPA",
      "BIBLE SCENE", "FIREPLACE COAL", "PEASANT DETAIL", "EARTHENWARE",
      "DARK LANDSCAPE", "STUDIO SONS", "NATURALISM", "LANTERN BEAM",
      "HARVEST", "HUMILITY"
    ]
  },
  {
    id: 72,
    title: "LORENZO LOTTO",
    subtitle: "Psychological Insight & The Restless Nomad",
    words: [
      "LORENZO LOTTO", "PSYCHOLOGY", "ECCENTRIC GENIUS", "SOUL PORTRAIT",
      "NERVOUS GESTURE", "PRAYER SHIELD", "RESTLESS TRAVEL", "CARPET ALTAR",
      "SOUL WINDOW", "POETIC TRUTH", "BERGAMO STAY", "LORETO RETREAT",
      "INDIVIDUAL", "SENSITIVITY", "ROSARY SACK", "CHARACTER",
      "ORIGINALITY", "TOUCH"
    ]
  },
  {
    id: 73,
    title: "PALMA IL VECCHIO",
    subtitle: "Blonde Venetian Beauties & Sacra Conversazione",
    words: [
      "PALMA IL VECCHIO", "BLONDE BEAUTY", "GOLDEN TRESSES", "SANTA BARBARA",
      "TERRACOTTA FLESH", "RICH VELVET", "RURAL HORIZON", "ENTHRONED LADY",
      "SERENITY", "CANVAS PORTRAIT", "BEAUTY IDEAL", "FULL FIGURE",
      "DRAPERY FOLD", "HARMONY", "VENETIAN GRACE", "STUDIO SUCCESS",
      "CHARM", "CLASSIC"
    ]
  },
  {
    id: 74,
    title: "SEBASTIANO DEL PIOMBO",
    subtitle: "Venetian Color Meets Roman Grandeur",
    words: [
      "SEBASTIANO", "DEL PIOMBO", "LEAD SEAL", "PAPAL COURT",
      "GIORGIONE HEIR", "ROMAN ALLIANCE", "DEATH ADONIS", "RAISING LAZARUS",
      "STONE OIL", "SLATE SUPPORT", "ROMAN DRAMA", "LUTE PLAYER",
      "COLOR MASTERY", "PORTRAIT NOBLE", "OFFICIAL KEEPER", "MONUMENTAL",
      "SHADOW DEPTH", "ALLIANCE"
    ]
  },
  {
    id: 75,
    title: "ANDREA PALLADIO",
    subtitle: "Four Books of Architecture & Harmonic Proportion",
    words: [
      "ANDREA PALLADIO", "FOUR BOOKS", "CLASSICAL ORDER", "SYMMETRY",
      "PEDIMENT", "TEMPLE FAÇADE", "SAN GIORGIO", "VICENZA BASILICA",
      "VILLA ROTONDA", "HARMONIC RATIO", "COLUMN PEDESTAL", "WHITE STONE",
      "ARCHITECT", "ROMAN ANTIQUITY", "ENTABLATURE", "MODERN VISION",
      "PROPORTION", "TIMELESS"
    ]
  },
  {
    id: 76,
    title: "BASILICA DI SAN GIORGIO",
    subtitle: "Palladio's Island Jewel Across St. Mark's Basin",
    words: [
      "SAN GIORGIO", "ISLAND MONASTERY", "WHITE FAÇADE", "BENEDICTINE",
      "LIGHT REFLECTION", "CLASSICAL TEMPLE", "CAMPANILE", "WOOD CHOIR",
      "THE LAST SUPPER", "CLOISTER", "MARBLE FLOOR", "BASIN VISTA",
      "HARMONY", "TRANQUILLITY", "SERENITY", "ARCHITECT",
      "DOCK ENTRANCE", "MONUMENT"
    ]
  },
  {
    id: 77,
    title: "JACOPO SANSOVINO",
    subtitle: "Proto of the Republic & Master Sculptor",
    words: [
      "JACOPO SANSOVINO", "PROTO MAGISTRATE", "PIAZZA RENEWAL", "MARCIANA HALL",
      "ZECCA MINT", "LOGGETTA", "BRONZE RELIEF", "ROMAN REFUGEE",
      "CLASSICAL STATUE", "BALUSTRADE", "DOGE ARCHITECT", "URBAN REDESIGN",
      "SCULPTOR CHIEF", "DORIC FRIEZE", "TRAVERTINE", "GRANDEUR",
      "LEGACY", "CIVIC LEADER"
    ]
  },
  {
    id: 78,
    title: "MARCIANA HALL",
    subtitle: "The Crown of Venetian Renaissance Architecture",
    words: [
      "MARCIANA HALL", "GREEK CARDINAL", "GREEK MANUSCRIPT", "ARCADE VAULT",
      "DORIC IONIC", "ROOF STATUES", "GODS HEROES", "READING HALL",
      "SANSOVINO", "CEILING CANVAS", "VERONESE ROUNDEL", "TREASURY BOOKS",
      "PIAZZETTA", "REPUBLIC LIBRARY", "HUMANISM", "SCHOLAR",
      "WISDOM", "PRESERVATION"
    ]
  },
  {
    id: 79,
    title: "MOSAICS OF SAN MARCO",
    subtitle: "The Golden Cathedral: Basilica Cattedrale d'Oro",
    words: [
      "CHIESA D ORO", "GOLDEN CATHEDRAL", "GOLDEN BASILICA", "BYZANTINE DOME",
      "TESSERAE GLASS", "PALA D ORO", "ENAMEL JEWEL", "EVANGELIST RELIC",
      "BRONZE HORSES", "NARTHEX DOME", "GENESIS VAULT", "ATRIUM",
      "GLOWING INTERIOR", "APOSTLE ROW", "MARBLE CARPET", "SANCTUARY",
      "DEVOTION", "SACRED GOLD"
    ]
  },
  {
    id: 80,
    title: "CANVAS & COLORITO",
    subtitle: "The Venetian Oil on Canvas Revolution",
    words: [
      "COLORITO", "CANVAS TEXTURE", "LINSEED OIL", "HUMIDITY RESIST",
      "SAILCLOTH BASE", "IMPRIMATURA", "GLAZING LAYERS", "ATMOSPHERE",
      "OPTICAL BLEND", "EMOTIONAL COLOR", "LOOSE BRUSHWORK", "OIL REVOLUTION",
      "FIBER WEAVE", "WARM UNDERTONE", "REFLECTIVE LIGHT", "MASTERY",
      "ART INNOVATION", "TECHNIQUE"
    ]
  },

  // SECTION V: SERENISSIMA CIVIC LIFE, MUSIC & PRINTING (81-100)
  {
    id: 81,
    title: "ALDUS MANUTIUS",
    subtitle: "The Aldine Press: Father of Modern Typography",
    words: [
      "ALDUS MANUTIUS", "ALDINE PRESS", "ANCHOR DOLPHIN", "FESTINA LENTE",
      "ITALIC TYPE", "OCTAVO POCKET", "GREEK CLASSICS", "SCHOLAR ACADEMY",
      "ERASMUS VISITOR", "PRINT REVOLUTION", "MOVABLE TYPE", "BOOKSELLER",
      "PUNCHCUTTER", "FRANCESCO GRIFFO", "HUMANIST PRESS", "EDITORIAL",
      "WISDOM", "ELEGANCE"
    ]
  },
  {
    id: 82,
    title: "THE POCKET OCTAVO",
    subtitle: "Portable Books that Democratized Reading",
    words: [
      "POCKET OCTAVO", "PORTABLE BOOK", "HANDHELD SIZE", "LEATHER BINDING",
      "READING COMMUTE", "PAPER MARGINS", "VIRGIL POEMS", "HORACE ODES",
      "ACCESSIBILITY", "SCHOLAR BAG", "PAGE NUMBER", "PRINT SHOP",
      "VELLUM COVER", "BOOK LOVER", "INTELLECTUAL", "TRAVEL BOOK",
      "INNOVATION", "CULTURE"
    ]
  },
  {
    id: 83,
    title: "GREEK SCHOLARS IN VENICE",
    subtitle: "Preserving Ancient Wisdom After 1453",
    words: [
      "GREEK SCHOLAR", "BYZANTINE REFUGE", "BESSARION", "NEAKADEMIA",
      "PLATO TEXTS", "ARISTOTLE TEXT", "GREEK GRAMMAR", "EXILE",
      "ANCIENT GREEK", "LIBRARY GIFT", "TRANSLATOR", "PHILOLOGY",
      "LECTURE ROOM", "LAGOON HAVEN", "PRESERVATION", "INTELLECT",
      "ANCIENT TIES", "ENLIGHTENMENT"
    ]
  },
  {
    id: 84,
    title: "VENETIAN GONDOLAS",
    subtitle: "Black Swans of the Narrow Canals",
    words: [
      "GONDOLA", "GONDOLIERE", "FORCOLA OURLOCK", "REMO OAR",
      "FERRO PROW", "ASYMMETRIC HULL", "NINE WOOD TYPES", "BLACK LACQUER",
      "SUMPTUARY LAW", "NARROW RII", "WATER CRY", "STALI PREMI",
      "NIGHT LIGHT", "LAGOON CRAFT", "PASSENGER", "CANAL GLIDE",
      "NAVIGATION", "GRACE"
    ]
  },
  {
    id: 85,
    title: "THE CARNIVAL OF VENICE",
    subtitle: "Il Carnevale: Equality Behind the Mask",
    words: [
      "CARNEVALE", "BAUTA MASK", "VOLTO WHITE", "TRICORNE HAT",
      "TABARRO CLOAK", "ANONYMITY", "ST MARK SQUARE", "JUGGLER ACROBAT",
      "LENTEN COUNTDOWN", "PALAZZO BALL", "PUNCHINELLO", "COMMEDIA ARTE",
      "CONFUSION", "ILLUSION", "CELEBRATION", "CARNIVAL LICENSE",
      "REVELRY", "MASKED CROWD"
    ]
  },
  {
    id: 86,
    title: "THE BAUTA & MORETTA",
    subtitle: "Masks of State Anonymity & Silent Charm",
    words: [
      "BAUTA MASK", "MORETTA OVAL", "BLACK VELVET", "BUTTON BITE",
      "SILENT CHARM", "VOICE DISTORTION", "VOTING FREEDOM", "CASINO GAMBLING",
      "RIDOTTO HALL", "LEGAL SHIELD", "GENDER EQUAL", "MYSTERY GUEST",
      "ALLEY WHISPER", "SECRET MEETING", "PORCELAIN WHITE", "DISGUISE",
      "SHADOWS", "ELEGANCE"
    ]
  },
  {
    id: 87,
    title: "REGATA STORICA",
    subtitle: "Historic Gondola Races on the Grand Canal",
    words: [
      "REGATA STORICA", "RACE ROWING", "CANAL TRACK", "HISTORIC BARGE",
      "WATER PROCESSION", "SPECTATOR QUAY", "CHAMPION OARSMAN", "RED PENNANT",
      "PALAZZO WINDOW", "SPEED TRIAL", "CHEERING CROWD", "TRADITION",
      "CREW SYNERGY", "LAGOON ROWERS", "MEDAL CEREMONY", "SPORTSMANSHIP",
      "RIVALRY", "HONOR"
    ]
  },
  {
    id: 88,
    title: "THE SENSA FESTIVAL",
    subtitle: "Festa della Sensa: Marriage to the Sea",
    words: [
      "SENSA FESTA", "ASCENSION DAY", "MARRIAGE SEA", "GOLD RING",
      "DESPOSAMUS TE", "MARE NOSTRUM", "LIDO INLET", "DOGE CAST",
      "BUCENTAUR TRIP", "SOLEMN BLESSING", "PATRIARCH", "ETERNAL UNION",
      "MARITIME PRIDE", "BOAT PROCESSION", "NAVAL SUPREMACY", "CEREMONY",
      "OATH OF SEA", "SANCTITY"
    ]
  },
  {
    id: 89,
    title: "BELLS OF THE LAGOON",
    subtitle: "Campane: The Rhythm of Civic & Church Time",
    words: [
      "CAMPANE BELLS", "MARANGONA", "NONA HOUR", "MALMEZZO",
      "TROTTIERA", "PREGADI CALL", "SENATE ALARM", "DAWN PEAL",
      "CURFEW TOLL", "BRONZE CHIME", "LAGOON ECHO", "TOWER BELFRY",
      "CIVIC PULSE", "TIMEKEEPING", "FIRE WARNING", "CHURCH STEEPLE",
      "SOUNDWAVE", "RESONANCE"
    ]
  },
  {
    id: 90,
    title: "MUSIC OF SAN MARCO",
    subtitle: "Cori Spezzati & Polychoral Splendor",
    words: [
      "CORI SPEZZATI", "DIVIDED CHOIRS", "ADRIAN WILLAERT", "CATHEDRAL ECHO",
      "TWIN ORGANS", "BRASS ENSEMBLE", "ANDREA GABRIELI", "GABRIELI CANZON",
      "SACRED CONCERT", "COUNTERPOINT", "MOTET", "SOUND SPATIAL",
      "GOLDEN GALLERY", "SURROUND MUSIC", "MAJESTY", "RESONANCE",
      "HARMONY", "DEVOTION"
    ]
  },
  {
    id: 91,
    title: "CLAUDIO MONTEVERDI",
    subtitle: "Maestro di Cappella & The Birth of Opera",
    words: [
      "MONTEVERDI", "MAESTRO CAPPELLA", "SAN MARCO MUSIC", "MADRIGAL",
      "SECOND PRACTICE", "OPERA PIONEER", "VESPERS 1610", "DRAMATIC FEELING",
      "ORCHESTRA COLOR", "VOCAL VIRTUOSO", "ORFEO MASTER", "CHOIRMASTER",
      "LAGOON RESIDENCE", "EMOTION", "HARMONIC DARING", "GENIUS",
      "TRANSFORMATION", "TIMELESS"
    ]
  },
  {
    id: 92,
    title: "BURANO LACEMAKING",
    subtitle: "Punto in Aria: Stitches in the Air",
    words: [
      "BURANO LACE", "PUNTO IN ARIA", "NEEDLE STITCH", "ISLAND LACEMAKER",
      "COLORFUL HOUSES", "FISHING WIVES", "LINEN THREAD", "PILLOW LACE",
      "ROYAL COLLAR", "WEDDING VEIL", "AIR STITCH", "EUROPE MONARCHS",
      "GUILD TRADITION", "DELICATE PATTERN", "PATIENCE", "ARTISANRY",
      "PRECISION", "TIMELESS"
    ]
  },
  {
    id: 93,
    title: "FRITTOLE & ZALETI",
    subtitle: "Sweet Pastries of Venetian Carnivals and Bakeries",
    words: [
      "FRITTOLE DOUGH", "ZALETI COOKIE", "CORNMEAL CAKE", "PINE NUT",
      "RAISIN DUST", "ORANGE ZEST", "CARNIVAL SWEET", "POWDERED SUGAR",
      "BAKERY FORNO", "FRITOLER GUILD", "HOT OIL KETTLE", "STREET AROMA",
      "LENTEN FEAST", "WINE PAIRING", "TRADITION", "CONFECTIONERY",
      "DELIGHT", "TASTE"
    ]
  },
  {
    id: 94,
    title: "BACARI & CICCHETTI",
    subtitle: "Tavern Culture and Small Bites by the Rialto",
    words: [
      "BACARO TAVERN", "CICCHETTI BITE", "OMBRA WINE", "CREAMED COD",
      "CREAMED CODFISH", "CROSTINI BREAD", "SARDINES SAOR", "POLPETTE MEAT",
      "WOODEN COUNTER", "STANDING DRINK", "NEIGHBORHOOD", "NEIGHBOR TALK",
      "WINE CARAFE", "FRIENDSHIP", "EVENING HOUR", "TRADITION",
      "COMMUNITY", "FLAVOR"
    ]
  },
  {
    id: 95,
    title: "SECRET COURTYARDS & GARDENS",
    subtitle: "Hidden Paradises Behind Stone Palazzo Walls",
    words: [
      "SECRET GARDEN", "PALAZZO COURT", "FIG TREE", "JASMINE VINE",
      "CLIMBING ROSE", "WELLHEAD STONE", "PERGOLA WALK", "CANAL PRIVACY",
      "FLAGSTONE PATIO", "BIRD FOUNTAIN", "SHADED RETREAT", "PATRICIAN GREEN",
      "OASIS LAGOON", "BOTANICAL", "BLOSSOM", "TRANQUILLITY",
      "SECLUSION", "BEAUTY"
    ]
  },
  {
    id: 96,
    title: "PALAZZO CA' D'ORO",
    subtitle: "The House of Gold on the Grand Canal",
    words: [
      "CA D ORO", "GOLDEN PALACE", "CONTARINI", "FLORID GOTHIC",
      "GILDED FAÇADE", "MARBLE TRACERY", "LOGGIA ARCH", "WATER GATEWAY",
      "VERONA RED", "ISTRIAN STONE", "GRAND CANAL GEM", "CANAL PALACE",
      "ROOF MERLON", "ELEGANCE", "GOTHIC SPLENDOR", "MONUMENT",
      "PRESERVATION", "SHINE"
    ]
  },
  {
    id: 97,
    title: "CA' REZZONICO & MARBLE HALLS",
    subtitle: "Baroque and Classical Magnificence on the Water",
    words: [
      "CA REZZONICO", "LONGHENA", "GRAND BALLROOM", "CHANDELIER",
      "CANAL ENTRANCE", "DANCE CEILING", "FRESCO SKY", "WATER RECEPTION",
      "MARBLE COLUMNS", "NOBLE SUITE", "LUSTROUS FLOOR", "SPECTACLE",
      "PATRICIAN WEALTH", "WATER STAIR", "PALATIAL", "ARCHITECT",
      "GRANDEUR", "SPLENDOR"
    ]
  },
  {
    id: 98,
    title: "VERE DA POZZO: WELLHEADS",
    subtitle: "Pure Fresh Water in a City of Salt Water",
    words: [
      "VERE DA POZZO", "WELLHEAD STONE", "CISTERN FILTER", "RAINWATER",
      "SAND FILTRATION", "CAMPO CENTER", "PUBLIC WATER", "PARISH LIFE",
      "CARVED RELIEF", "MARBLE BASIN", "COPPER BUCKET", "MORNING GATHER",
      "WATER BEARER", "ACQUA POTABILE", "COMMUNITY", "SURVIVAL",
      "INGENUITY", "STONEWORK"
    ]
  },
  {
    id: 99,
    title: "THE WINGED LION OF ST. MARK",
    subtitle: "Pax Tibi Marce, Evangelista Meus",
    words: [
      "WINGED LION", "SAINT MARK", "PAX TIBI MARCE", "EVANGELISTA",
      "OPEN GOSPEL", "SWORD OF JUSTICE", "VENETIAN BANNER", "CRIMSON FIELD",
      "EMBLEM OF STATE", "MARBLE RELIEF", "HARBOR BASTION", "WAR FLAG",
      "PROTECTOR", "PATRON SAINT", "DEVOTION", "REPUBLIC SPIRIT",
      "SOVEREIGNTY", "SENTINEL"
    ]
  },
  {
    id: 100,
    title: "LA SERENISSIMA FOREVER",
    subtitle: "The Most Serene Republic of Venice Across the Ages",
    words: [
      "SERENISSIMA", "MILLENNIUM REIGN", "QUEEN ADRIATIC", "INDEPENDENCE",
      "LIBERTY", "LAGOON REFUGE", "MARITIME GLORY", "ETERNAL EMPIRE",
      "PATRICIAN WISDOM", "CITIZEN HARMONY", "WATER REALM", "SPLENDOR",
      "IMMORTAL GLORY", "IMMORTAL CITY", "CULTURE LIGHT", "BEAUTY",
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

  // Sort longest words first
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
    volNumber: "002",
    puzzleNumber: String(p.id).padStart(2, '0'),
    code: "02.380.05.0502.1475.1575.002",
    title: p.title,
    subtitle: p.subtitle,
    era: "VENICE, SERENISSIMA • 1475–1575 AD",
    words: p.words,
    grid: result.grid,
    placements: result.placements
  });
}

const outPath = path.join(__dirname, 'data', 'all_100_puzzles.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(completeBookData, null, 2));

console.log(`Successfully generated and saved all ${completeBookData.length} Venice puzzles with 100% placement to: ${outPath}`);
