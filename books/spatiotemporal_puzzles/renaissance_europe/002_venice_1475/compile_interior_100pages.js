// Complete Interior Compiler: Venice: The Maritime Empire (1475-1575 AD)
// Volume 002 of The Spatiotemporal Puzzle Series
// 108 Pages Total (Standard Press Signature Format):
// Page 1: Half-Title & Series Badge
// Page 2: Copyright & Publisher Colophon
// Page 3: Thematic Index of the 100 Historical Themes
// Page 4: Blank Facing Page (with Serenissima Venetian Motto)
// Pages 5-104: Exactly 100 Thematic Puzzles (One Per Page)
// Page 105: Historical Glossary Part I (Maritime, Arsenal & Naval Dominance)
// Page 106: Historical Glossary Part II (Statecraft, Levant Trade & Venetian Colorito)
// Page 107: Venetian Historical Chronology (1475-1575 AD) & Catalog
// Page 108: Clean Terminal Blank Page
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const DATA_PATH = path.join(__dirname, 'data', 'all_100_puzzles.json');
const IMAGE_PATH = path.join(__dirname, 'cover', 'venice_1475_oil_painting.jpg');
const OUT_PDF = path.join(__dirname, 'interior', 'venice_1475_interior_100pages.pdf');

fs.mkdirSync(path.dirname(OUT_PDF), { recursive: true });

const puzzles = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
console.log(`Loaded ${puzzles.length} historical puzzles from data.`);

const PAGE_W = 612; // 8.5 in * 72 pt/in
const PAGE_H = 792; // 11.0 in * 72 pt/in

// Margins (in points)
// Gutter (inside spine): 54 pt (0.75 in)
// Outside: 38 pt (~0.53 in)
const GUTTER_MARGIN = 54;
const OUTSIDE_MARGIN = 38;

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 36, bottom: 36, left: 38, right: 38 },
  info: {
    Title: "Historical Word Search: Venice (1475-1575 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Spatiotemporal Historical Word Search Series - Volume 002",
    Keywords: "Venice, Serenissima, Word Search, Puzzle Book, Large Print, Doge, Arsenal, Titian",
    Creator: "TheBookGuy Publishing Engine",
    Producer: "TheBookGuy Press"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

// Open background image once for efficient PDF reuse
let bgImage = null;
if (fs.existsSync(IMAGE_PATH)) {
  bgImage = doc.openImage(IMAGE_PATH);
  console.log("Background oil painting image loaded successfully.");
}

function getPageBounds(pageNumber) {
  const isOdd = pageNumber % 2 !== 0;
  const left = isOdd ? GUTTER_MARGIN : OUTSIDE_MARGIN;
  const right = PAGE_W - (isOdd ? OUTSIDE_MARGIN : GUTTER_MARGIN);
  const width = right - left;
  return { isOdd, left, right, width, top: 36, bottom: PAGE_H - 36 };
}

function drawCleanPageGround(b, showWatermark = true) {
  // Amazon Cream Paper provides natural cream warmth.
  // Subtle Venetian lagoon oil painting watermark strictly inside safe margins
  if (showWatermark && bgImage) {
    doc.save();
    doc.fillOpacity(0.05);
    doc.image(bgImage, b.left + 20, 70, {
      width: b.width - 40,
      height: PAGE_H - 140,
      fit: [b.width - 40, PAGE_H - 140],
      align: 'center',
      valign: 'center'
    });
    doc.restore();
  }
}

// ==========================================
// PAGE 1: HALF TITLE & TITLE PAGE (Recto)
// ==========================================
console.log("Compiling Page 1: Title Page...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b1 = getPageBounds(1);
drawCleanPageGround(b1);

doc.fillColor('#4a4035').font('Times-Bold').fontSize(10)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', b1.left, 130, { width: b1.width, align: 'center', characterSpacing: 2 });

doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b1.left + 80, 148).lineTo(b1.right - 80, 148).stroke();

doc.fillColor('#111111').font('Times-Bold').fontSize(32)
   .text('HISTORICAL', b1.left, 180, { width: b1.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#111111').font('Times-Bold').fontSize(38)
   .text('WORD SEARCH', b1.left, 220, { width: b1.width, align: 'center', characterSpacing: 2 });

doc.fillColor('#3a3025').font('Times-Bold').fontSize(16)
   .text('VENICE', b1.left, 285, { width: b1.width, align: 'center', characterSpacing: 3 });
doc.fillColor('#5a4a3a').font('Times-Roman').fontSize(12)
   .text('THE MARITIME REPUBLIC (1475-1575 AD)', b1.left, 310, { width: b1.width, align: 'center', characterSpacing: 1.5 });

doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b1.left + 120, 335).lineTo(b1.right - 120, 335).stroke();

// Feature Callout Box
const tBoxW = 340;
const tBoxX = b1.left + (b1.width - tBoxW) / 2;
doc.save();
doc.rect(tBoxX, 390, tBoxW, 110).fillAndStroke('#ffffff', '#3a3530');
doc.fillColor('#111111').font('Times-Bold').fontSize(12)
   .text('100 LARGE-PRINT PUZZLES', tBoxX, 412, { width: tBoxW, align: 'center', characterSpacing: 1 });
doc.fillColor('#3a3025').font('Times-Roman').fontSize(10)
   .text('1,800 Historical Terms to Discover\nWar Galleys * The Arsenal * Silk & Spices * Titian & Tintoretto', tBoxX, 435, { width: tBoxW, align: 'center', lineGap: 4 });
doc.fillColor('#5a4a3a').font('Courier-Bold').fontSize(8.5)
   .text('SERIES CODE: 02.380.05.0502.1475.1575.002', tBoxX, 475, { width: tBoxW, align: 'center' });
doc.restore();

doc.fillColor('#222222').font('Times-Bold').fontSize(10)
   .text('THEBOOKGUY PRESS', b1.left, 680, { width: b1.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#555555').font('Times-Roman').fontSize(8.5)
   .text('FIRST EDITION', b1.left, 696, { width: b1.width, align: 'center', characterSpacing: 1 });


// ==========================================
// PAGE 2: COPYRIGHT & PUBLISHER COLOPHON (Verso)
// ==========================================
console.log("Compiling Page 2: Copyright & Colophon...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b2 = getPageBounds(2);
drawCleanPageGround(b2, false);

const crY = 625;
doc.strokeColor('#3a3530').lineWidth(0.6)
   .moveTo(b2.left + 60, crY).lineTo(b2.right - 60, crY).stroke();

doc.fillColor('#111111').font('Times-Bold').fontSize(9)
   .text('Historical Word Search: Venice (1475-1575 AD)', b2.left, crY + 16, { width: b2.width, align: 'center' });

doc.fillColor('#444444').font('Times-Roman').fontSize(8)
   .text('The Spatiotemporal Puzzle Series - Volume 002\nClassification Code: 02.380.05.0502.1475.1575.002\n\nPublished by TheBookGuy Press\nhttps://corlantisdes44.github.io\n\nCopyright (c) 2026 TheBookGuy Press. All rights reserved.\nFirst Edition', b2.left, crY + 30, { width: b2.width, align: 'center', lineGap: 3.5 });


// ==========================================
// PAGE 3: THEMATIC PUZZLE DIRECTORY (Recto)
// ==========================================
console.log("Compiling Page 3: Thematic Index...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b3 = getPageBounds(3);
drawCleanPageGround(b3, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('THEMATIC PUZZLE DIRECTORY', b3.left, 46, { width: b3.width, align: 'center', characterSpacing: 1.5 });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b3.left + 60, 62).lineTo(b3.right - 60, 62).stroke();

const domains = [
  { name: "I. THE MARITIME EMPIRE & THE ARSENAL (Puzzles 01-20)", range: "The Arsenal, Great Galleys, Calafati & Marangoni, Bucentaur, St. Mark's Campanile, Murano, Lepanto" },
  { name: "II. THE DOGE, STATECRAFT & SECRET COUNCILS (Puzzles 21-40)", range: "Palazzo Ducale, Council of Ten, Libro d'Oro, Bocche dei Leoni, Bridge of Sighs, Doge Loredan, Ghetto" },
  { name: "III. SPICE ROUTES, SILK & LEVANT TRADE (Puzzles 41-60)", range: "Fondaco dei Tedeschi, Spice Caravans, Zecchino d'Oro, Banco Giro, Theriac Panacea, Alexandria Trade" },
  { name: "IV. VENETIAN MASTERS & COLORITO (Puzzles 61-80)", range: "Bellini, Carpaccio, Giorgione's Tempest, Titian's Frari, Tintoretto, Veronese's Feasts, Palladio, Sansovino" },
  { name: "V. SERENISSIMA CIVIC LIFE, MUSIC & PRINTING (Puzzles 81-100)", range: "Aldus Manutius, Pocket Octavo, Gondolas, Carnevale Masks, Regata Storica, San Marco Choirs, Burano Lace" }
];

let dy = 80;
domains.forEach(d => {
  doc.fillColor('#111111').font('Times-Bold').fontSize(8.8).text(d.name, b3.left + 16, dy);
  dy += 13;
  doc.fillColor('#444444').font('Times-Roman').fontSize(8).text(d.range, b3.left + 16, dy, { width: b3.width - 32, lineGap: 2.5 });
  dy += 24;
});

doc.save();
doc.rect(b3.left + 30, dy + 10, b3.width - 60, 48).fillAndStroke('#ffffff', '#3a3530');
doc.fillColor('#111111').font('Times-Bold').fontSize(8.5)
   .text('100 THEMATIC PUZZLES - 1,800 HISTORICAL TERMS', b3.left + 30, dy + 22, { width: b3.width - 60, align: 'center', characterSpacing: 1 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8)
   .text('Turn to Page 5 to begin your voyage across the Venetian Maritime Empire.', b3.left + 30, dy + 36, { width: b3.width - 60, align: 'center' });
doc.restore();

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8)
   .text('3', b3.left, PAGE_H - 38, { width: b3.width, align: 'right' });


// ==========================================
// PAGE 4: CLEAN BLANK FACING PAGE (Verso)
// ==========================================
console.log("Compiling Page 4: Blank Facing Page...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b4 = getPageBounds(4);
drawCleanPageGround(b4, false);

// Elegant Serenissima Venetian motto centered quietly
doc.fillColor('#666666').font('Times-Italic').fontSize(11)
   .text('"Pax Tibi Marce, Evangelista Meus."', b4.left, PAGE_H / 2 - 15, { width: b4.width, align: 'center' });
doc.fillColor('#888888').font('Times-Roman').fontSize(8.5)
   .text('- Motto of the Venetian Republic', b4.left, PAGE_H / 2 + 6, { width: b4.width, align: 'center' });

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8)
   .text('4', b4.left, PAGE_H - 38, { width: b4.width, align: 'left' });


// ==========================================
// PAGES 5 TO 104: EXACTLY 100 PUZZLES (Pages 5-104)
// ==========================================
console.log("Compiling 100 Historical Puzzle Pages (Pages 5 to 104)...");

const CELL_SIZE = 23.5; // 16 * 23.5 = 376 pt
const GRID_W = 16 * CELL_SIZE; // 376 pt

puzzles.forEach((p, idx) => {
  const pageNum = idx + 5;
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawCleanPageGround(b, true);

  // Clean Header
  doc.fillColor('#4a4035').font('Courier-Bold').fontSize(7.5)
     .text(`ARCHIVE REGISTRY // ${p.code}`, b.left, 44, { characterSpacing: 0.8 });

  doc.fillColor('#222222').font('Times-Bold').fontSize(8)
     .text(`VOLUME II - VENICE`, b.left, 44, { width: b.width, align: 'right', characterSpacing: 1.0 });

  doc.strokeColor('#3a3530').lineWidth(0.8)
     .moveTo(b.left, 55).lineTo(b.right, 55).stroke();

  // Subheader: Era badge + Title
  doc.fillColor('#5a4030').font('Courier-Bold').fontSize(8)
     .text(`VENICE, SERENISSIMA | 1475-1575 AD`, b.left, 72, { characterSpacing: 0.8 });

  doc.fillColor('#111111').font('Times-Bold').fontSize(19)
     .text(`${p.puzzleNumber}. ${p.title}`, b.left, 88, { width: b.width, characterSpacing: 0.5 });

  doc.strokeColor('#d0cbc4').lineWidth(0.6)
     .moveTo(b.left, 116).lineTo(b.right, 116).stroke();

  // 16x16 Puzzle Grid Container
  const gridStartX = b.left + (b.width - GRID_W) / 2;
  const gridStartY = 134;

  doc.save();
  doc.rect(gridStartX, gridStartY, GRID_W, GRID_W).fillAndStroke('#ffffff', '#2a241e');

  // Internal subtle cell lines
  doc.strokeColor('#d0cbc4').lineWidth(0.5);
  for (let i = 1; i < 16; i++) {
    const pos = i * CELL_SIZE;
    doc.moveTo(gridStartX + pos, gridStartY).lineTo(gridStartX + pos, gridStartY + GRID_W).stroke();
    doc.moveTo(gridStartX, gridStartY + pos).lineTo(gridStartX + GRID_W, gridStartY + pos).stroke();
  }

  // Draw Grid Letters: Deep black, bold 12pt Helvetica-Bold
  doc.fillColor('#000000').font('Helvetica-Bold').fontSize(12);
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      const char = p.grid[r][c];
      const cx = gridStartX + c * CELL_SIZE;
      const cy = gridStartY + r * CELL_SIZE;
      doc.text(char, cx, cy + 5.5, { width: CELL_SIZE, align: 'center' });
    }
  }
  doc.restore();

  // Word Bank (3 Columns of 6 Words)
  const bankStartY = gridStartY + GRID_W + 22;
  doc.fillColor('#222222').font('Times-Bold').fontSize(9)
     .text('18 WORDS TO FIND', b.left, bankStartY, { characterSpacing: 1.2 });

  doc.strokeColor('#3a3530').lineWidth(0.8)
     .moveTo(b.left, bankStartY + 12).lineTo(b.right, bankStartY + 12).stroke();

  const colW = b.width / 3;
  p.words.forEach((w, wIdx) => {
    const col = wIdx % 3;
    const row = Math.floor(wIdx / 3);
    const wx = b.left + col * colW;
    const wy = bankStartY + 20 + row * 16.5;

    // Vector bullet circle (100% clean ASCII)
    doc.save();
    doc.fillColor('#4a4035');
    doc.circle(wx + 3, wy + 5, 1.8).fill();
    doc.restore();

    doc.fillColor('#111111').font('Helvetica-Bold').fontSize(8.5).text(w, wx + 10, wy, { characterSpacing: 0.3 });
  });

  // Footer: Page Number & Series Citation
  doc.strokeColor('#d0cbc4').lineWidth(0.5)
     .moveTo(b.left, PAGE_H - 46).lineTo(b.right, PAGE_H - 46).stroke();

  const pageAlign = b.isOdd ? 'right' : 'left';
  doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
     .text(String(pageNum), b.left, PAGE_H - 38, { width: b.width, align: pageAlign });

  doc.fillColor('#555555').font('Times-Roman').fontSize(7.5)
     .text('HISTORICAL WORD SEARCH | VENICE (1475-1575 AD)', b.left, PAGE_H - 38, { width: b.width, align: 'center', characterSpacing: 0.8 });
});


// ==========================================
// PAGE 105: HISTORICAL GLOSSARY PART I (Recto)
// ==========================================
console.log("Compiling Page 105: Historical Glossary Part I...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b105 = getPageBounds(105);
drawCleanPageGround(b105, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('HISTORICAL GLOSSARY // PART I', b105.left, 46, { width: b105.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8.5)
   .text('Maritime Supremacy, The Arsenal & Lagoon Navigation', b105.left, 62, { width: b105.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b105.left + 60, 76).lineTo(b105.right - 60, 76).stroke();

const glossaryPart1 = [
  { term: "Arsenale", def: "The vast state-owned shipyard and naval armory in Castello, capable of assembling fully equipped war galleys in a single day using pre-standardized parts." },
  { term: "Bucintoro", def: "The magnificent gilded state barge used by the Doge on Ascension Day for the Festa della Sensa, symbolising the Republic's perpetual Marriage to the Sea." },
  { term: "Calafati", def: "The master caulkers of the Arsenal guild who sealed wooden ship hulls with boiling pitch and oakum, ensuring the legendary seaworthiness of Venetian galleys." },
  { term: "Ciurma", def: "The galley crew and oarsmen; unlike other Mediterranean fleets, early Venetian war galleys were rowed by free, salaried citizens renowned for their combat discipline." },
  { term: "Dominio da Mar", def: "The maritime empire of Venice, encompassing critical coastal fortresses, islands, and coaling ports across Istria, Dalmatia, Corfu, Crete, and Cyprus." },
  { term: "Galea Grossa", def: "The 'Great Galley,' a hybrid merchant warship combining high cargo capacity with lateen sails and formidable rowing power to defend rich Levant cargoes." },
  { term: "Marangoni", def: "Master ship carpenters and sawyers of the Arsenal who shaped fir and oak timbers into frames, keels, and rudders under state quality supervision." },
  { term: "Mude", def: "State-organized, heavily armed merchant convoys that sailed on strict seasonal timetables to Constantinople, Alexandria, Beirut, and Flanders." },
  { term: "Portolano", def: "Hand-drawn nautical navigation charts with crisscrossing rhumb lines, compass bearings, and harbor depths that guided Venetian mariners across uncharted seas." },
  { term: "Zecchino d'Oro", def: "The Venetian gold ducat, struck in 24-carat pure gold at the Zecca mint from 1284; the universally trusted currency of international commerce." }
];

let g1Y = 92;
glossaryPart1.forEach(g => {
  doc.fillColor('#111111').font('Times-Bold').fontSize(9).text(g.term, b105.left + 16, g1Y);
  g1Y += 13;
  doc.fillColor('#333333').font('Times-Roman').fontSize(8.2).text(g.def, b105.left + 16, g1Y, { width: b105.width - 32, lineGap: 2.5 });
  g1Y += 27;
});

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('105', b105.left, PAGE_H - 38, { width: b105.width, align: 'right' });


// ==========================================
// PAGE 106: HISTORICAL GLOSSARY PART II (Verso)
// ==========================================
console.log("Compiling Page 106: Historical Glossary Part II...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b106 = getPageBounds(106);
drawCleanPageGround(b106, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('HISTORICAL GLOSSARY // PART II', b106.left, 46, { width: b106.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8.5)
   .text('Statecraft, Levant Trade & Venetian Colorito', b106.left, 62, { width: b106.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b106.left + 60, 76).lineTo(b106.right - 60, 76).stroke();

const glossaryPart2 = [
  { term: "Bocche dei Leoni", def: "Stone lion-head wall carvings with carved mouth slots where citizens dropped secret written denunciations of state crimes and tax fraud." },
  { term: "Colorito", def: "The distinctive Venetian painting philosophy prioritizing radiant color, natural light, and luminous oil glaze layers over strict Florentine drawing (disegno)." },
  { term: "Consiglio dei Dieci", def: "The Council of Ten, an elite executive tribunal established in 1310 to safeguard republic state security, crush treason, and oversee secret intelligence." },
  { term: "Corno Ducale", def: "The unique horned cap of stiffened gold brocade and jewels worn by the Doge over a fine linen coif during ceremonial state appearances." },
  { term: "Fondaco", def: "The fortified trading post and hostel assigned to foreign merchant communities (such as the Germans and Turks) for customs, storage, and residential oversight." },
  { term: "Libro d'Oro", def: "The Golden Book of Venice, the official registry recording all hereditary patrician families entitled to sit in the sovereign Maggior Consiglio." },
  { term: "Relazioni", def: "Exhaustive confidential diplomatic reports read before the Senate by returning Venetian ambassadors, renowned across Europe for razor-sharp political analysis." },
  { term: "Scuola Grande", def: "Prestigious civic confraternities of wealthy lay citizens dedicated to mutual charity, civic processions, and commissioning monumental art cycles." },
  { term: "Theriac", def: "The legendary Venetian panacea and antidote compound of sixty-four herbs, vipers, and resins, compounded publicly in St. Mark's under government seal." },
  { term: "Vere da Pozzo", def: "Carved stone wellheads centered in Venetian campi, filtering surface rainwater through underground sand cisterns to provide pure fresh drinking water." }
];

let g2Y = 92;
glossaryPart2.forEach(g => {
  doc.fillColor('#111111').font('Times-Bold').fontSize(9).text(g.term, b106.left + 16, g2Y);
  g2Y += 13;
  doc.fillColor('#333333').font('Times-Roman').fontSize(8.2).text(g.def, b106.left + 16, g2Y, { width: b106.width - 32, lineGap: 2.5 });
  g2Y += 27;
});

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('106', b106.left, PAGE_H - 38, { width: b106.width, align: 'left' });


// ==========================================
// PAGE 107: VENETIAN HISTORICAL CHRONOLOGY (Recto)
// ==========================================
console.log("Compiling Page 107: Historical Chronology...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b107 = getPageBounds(107);
drawCleanPageGround(b107, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('VENETIAN HISTORICAL CHRONOLOGY', b107.left, 46, { width: b107.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8.5)
   .text('Pivotal Milestones of the Maritime Republic (1475-1575 AD)', b107.left, 62, { width: b107.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b107.left + 50, 76).lineTo(b107.right - 50, 76).stroke();

const timelineEvents = [
  { year: "1489", desc: "Queen Caterina Cornaro abdicates the throne of Cyprus, formally annexing the island kingdom to the Venetian maritime domain." },
  { year: "1494", desc: "Aldus Manutius founds the Aldine Press in Venice, pioneering italic typography, pocket octavo books, and printing Greek classics." },
  { year: "1501", desc: "Leonardo Loredan is elected Doge; Giovanni Bellini paints his iconic dogal portrait celebrating republican fortitude." },
  { year: "1508", desc: "Pope Julius II forms the League of Cambrai against Venice; despite defeats on the mainland, the Republic heroically recovers." },
  { year: "1516", desc: "The Venetian Senate establishes the Ghetto in Cannaregio, concentrating Jewish residents while granting religious toleration." },
  { year: "1518", desc: "Titian unveils The Assumption of the Virgin at the Frari basilica, inaugurating the golden age of High Venetian Colorito." },
  { year: "1527", desc: "Jacopo Sansovino flees Rome after the Sack and is appointed Proto of the Republic, redesigning Piazza San Marco and the Marciana." },
  { year: "1564", desc: "Tintoretto wins the commission for the Scuola Grande di San Rocco, executing over fifty monumental canvas masterpieces." },
  { year: "1570", desc: "Andrea Palladio publishes I Quattro Libri dell'Architettura, standardizing classical proportion across Venetian churches and villas." },
  { year: "1571", desc: "The Christian Holy League, powered by Venetian galleasses under Sebastiano Venier, triumphs at the historic Battle of Lepanto." },
  { year: "1573", desc: "Paolo Veronese defends artistic liberty before the Venetian Inquisition over his Feast in the House of Levi." },
  { year: "1576", desc: "Following a devastating plague, the Senate vows to build the Basilica del Redentore on Giudecca, designed by Palladio." }
];

let ty = 92;
timelineEvents.forEach(e => {
  doc.fillColor('#8a5a36').font('Courier-Bold').fontSize(9).text(e.year, b107.left + 16, ty);
  doc.fillColor('#222222').font('Times-Roman').fontSize(8.2).text(e.desc, b107.left + 64, ty, { width: b107.width - 80, lineGap: 2 });
  ty += 23.5;
});

// Evergreen Archive Stamp
doc.save();
doc.rect(b107.left + 30, ty + 12, b107.width - 60, 44).fillAndStroke('#ffffff', '#3a3530');
doc.fillColor('#111111').font('Times-Bold').fontSize(8.5)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES // ARCHIVE 002', b107.left + 30, ty + 22, { width: b107.width - 60, align: 'center', characterSpacing: 1 });
doc.fillColor('#5a4a3a').font('Courier-Bold').fontSize(8.5)
   .text('https://corlantisdes44.github.io', b107.left + 30, ty + 35, { width: b107.width - 60, align: 'center' });
doc.restore();

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('107', b107.left, PAGE_H - 38, { width: b107.width, align: 'right' });


// ==========================================
// PAGE 108: CLEAN TERMINAL BLANK PAGE (Verso)
// ==========================================
console.log("Compiling Page 108: Terminal Blank Page...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b108 = getPageBounds(108);
drawCleanPageGround(b108, false);

doc.fillColor('#777777').font('Times-Bold').fontSize(8.5)
   .text('THEBOOKGUY PRESS', b108.left, PAGE_H / 2 - 10, { width: b108.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#999999').font('Times-Roman').fontSize(7.5)
   .text('HISTORICAL PUZZLE EDITIONS', b108.left, PAGE_H / 2 + 5, { width: b108.width, align: 'center', characterSpacing: 1 });

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('108', b108.left, PAGE_H - 38, { width: b108.width, align: 'left' });

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`COMPLETE 108-PAGE VENICE INTERIOR COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Exact Pages: 108 pages (Perfect Press Signature)`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
