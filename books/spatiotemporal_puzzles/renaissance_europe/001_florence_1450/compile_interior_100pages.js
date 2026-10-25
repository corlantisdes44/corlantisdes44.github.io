// Complete Interior Compiler: Florence: The High Renaissance (1450-1550 AD)
// 108 Pages Total (Standard Press Signature Format):
// Page 1: Half-Title & Series Badge
// Page 2: Copyright & Publisher Colophon
// Page 3: Thematic Index of the 100 Historical Themes
// Page 4: Blank Facing Page (with Renaissance Motto)
// Pages 5-104: Exactly 100 Thematic Puzzles (One Per Page)
// Page 105: Historical Glossary Part I (Art & Architecture)
// Page 106: Historical Glossary Part II (Civic Republic & Guilds)
// Page 107: Series Catalog & Publisher Notes
// Page 108: Clean Terminal Blank Page
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const DATA_PATH = path.join(__dirname, 'data', 'all_100_puzzles.json');
const IMAGE_PATH = path.join(__dirname, 'cover', 'florence_1450_oil_painting.png');
const OUT_PDF = path.join(__dirname, 'interior', 'florence_1450_interior_100pages.pdf');

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
    Title: "Historical Word Search: Florence (1450-1550 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Spatiotemporal Historical Word Search Series - Volume 001",
    Keywords: "Florence, Renaissance, Word Search, Puzzle Book, Large Print, Medici",
    Creator: "TheBookGuy Publishing Engine",
    Producer: "TheBookGuy Press"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

// Open image once for efficient PDF reuse (keeps file compact)
let bgImage = null;
if (fs.existsSync(IMAGE_PATH)) {
  bgImage = doc.openImage(IMAGE_PATH);
  console.log("Background oil painting image loaded successfully.");
}

function getPageBounds(pageNumber) {
  const isOdd = pageNumber % 2 !== 0;
  // Odd pages (recto): Inside (gutter) on LEFT, outside on RIGHT
  // Even pages (verso): Inside (gutter) on RIGHT, outside on LEFT
  const left = isOdd ? GUTTER_MARGIN : OUTSIDE_MARGIN;
  const right = PAGE_W - (isOdd ? OUTSIDE_MARGIN : GUTTER_MARGIN);
  const width = right - left;
  return { isOdd, left, right, width, top: 36, bottom: PAGE_H - 36 };
}

function drawCleanPageGround(b, showWatermark = true) {
  // Clean warm natural ivory base
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#faf8f5');

  // Single clean, refined outer frame (0.75 pt)
  doc.save();
  doc.strokeColor('#3a3530').lineWidth(0.75);
  doc.rect(b.left - 8, 28, b.width + 16, PAGE_H - 56).stroke();
  doc.restore();

  // Subtle Renaissance canvas oil painting watermark (6% opacity)
  if (showWatermark && bgImage) {
    doc.save();
    doc.fillOpacity(0.06);
    doc.image(bgImage, b.left - 4, 60, {
      width: b.width + 8,
      height: PAGE_H - 120,
      fit: [b.width + 8, PAGE_H - 120],
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
   .text('FLORENCE', b1.left, 285, { width: b1.width, align: 'center', characterSpacing: 3 });
doc.fillColor('#5a4a3a').font('Times-Roman').fontSize(12)
   .text('THE HIGH RENAISSANCE (1450-1550 AD)', b1.left, 310, { width: b1.width, align: 'center', characterSpacing: 1.5 });

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
   .text('1,800 Historical Terms to Discover\nMasters * Bottegas * Architecture * Medici Banking * Statecraft', tBoxX, 435, { width: tBoxW, align: 'center', lineGap: 4 });
doc.fillColor('#5a4a3a').font('Courier-Bold').fontSize(8.5)
   .text('SERIES CODE: 02.380.09.0501.1450.1550.001', tBoxX, 475, { width: tBoxW, align: 'center' });
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

const crY = 620;
doc.strokeColor('#3a3530').lineWidth(0.6)
   .moveTo(b2.left + 50, crY).lineTo(b2.right - 50, crY).stroke();

doc.fillColor('#111111').font('Times-Bold').fontSize(9)
   .text('Historical Word Search: Florence (1450-1550 AD)', b2.left, crY + 16, { width: b2.width, align: 'center' });

doc.fillColor('#444444').font('Times-Roman').fontSize(8)
   .text('The Spatiotemporal Puzzle Series - Volume 001\nSeries Archival Classification: 02.380.09.0501.1450.1550.001\nPublished by TheBookGuy Press\nOnline Storefront: https://corlantisdes44.github.io\n\nCopyright (c) 2026 TheBookGuy Press. All rights reserved.\nPrinted on Archival 55# Cream Paper - Large Print 16x16 Edition\nFirst Edition: Autumn 2026\nPrinted in the United States of America', b2.left, crY + 30, { width: b2.width, align: 'center', lineGap: 3 });


// ==========================================
// PAGE 3: THEMATIC PUZZLE INDEX (Recto)
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
  { name: "I. ARCHITECTURE & MONUMENTS (Puzzles 01-23)", range: "Brunelleschi's Dome, Campanile, Baptistery Gates, Palazzo Vecchio, Ponte Vecchio, Pitti & Strozzi" },
  { name: "II. MEDICI BANKING & GUILDS (Puzzles 24-37)", range: "The Golden Florin, Double-Entry Ledgers, Arte di Calimala, Silk Weavers, Apothecaries, Arti Maggiori & Minori" },
  { name: "III. STATECRAFT, INTELLECT & WAR (Puzzles 38-50)", range: "Machiavelli's Prince, Guicciardini, Platonic Academy, Ficino, Pico della Mirandola, Siege of Florence" },
  { name: "IV. HIGH RENAISSANCE MASTERS (Puzzles 51-66)", range: "Leonardo's Codices, Michelangelo's David, Botticelli, Donatello, Ghirlandaio, Fra Angelico, Cellini, Vasari" },
  { name: "V. FLORENTINE CIVIC LIFE & PATRIMONY (Puzzles 67-100)", range: "Calcio Storico, Carnival Songs, Boboli Gardens, Carrara Marble, Fresco Techniques, Sfumato, Eternal City" }
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
   .text('Turn to Page 5 to begin your journey through the Florentine Renaissance.', b3.left + 30, dy + 36, { width: b3.width - 60, align: 'center' });
doc.restore();

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8)
   .text('3', b3.left, PAGE_H - 34, { width: b3.width, align: 'right' });


// ==========================================
// PAGE 4: CLEAN BLANK FACING PAGE (Verso)
// ==========================================
console.log("Compiling Page 4: Blank Facing Page...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b4 = getPageBounds(4);
drawCleanPageGround(b4, false);

// Elegant Renaissance motto centered quietly
doc.fillColor('#666666').font('Times-Italic').fontSize(11)
   .text('"L\'arte e il ponte tra l\'anima e il tempo."', b4.left, PAGE_H / 2 - 15, { width: b4.width, align: 'center' });
doc.fillColor('#888888').font('Times-Roman').fontSize(8.5)
   .text('- Florentine Proverb', b4.left, PAGE_H / 2 + 6, { width: b4.width, align: 'center' });

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8)
   .text('4', b4.left, PAGE_H - 34, { width: b4.width, align: 'left' });


// ==========================================
// PAGES 5 TO 104: EXACTLY 100 PUZZLES (Pages 5-104)
// ==========================================
console.log("Compiling 100 Historical Puzzle Pages (Pages 5 to 104)...");

const CELL_SIZE = 23.5; // 16 * 23.5 = 376 pt
const GRID_W = 16 * CELL_SIZE; // 376 pt

puzzles.forEach((p, idx) => {
  const pageNum = idx + 5; // Puzzles occupy Pages 5 through 104
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawCleanPageGround(b, true);

  // Clean Header
  doc.fillColor('#4a4035').font('Courier-Bold').fontSize(7.5)
     .text(`ARCHIVE REGISTRY // ${p.code}`, b.left, 44, { characterSpacing: 0.8 });

  doc.fillColor('#222222').font('Times-Bold').fontSize(8)
     .text(`VOLUME I - FLORENCE`, b.left, 44, { width: b.width, align: 'right', characterSpacing: 1.0 });

  doc.strokeColor('#3a3530').lineWidth(0.8)
     .moveTo(b.left, 55).lineTo(b.right, 55).stroke();

  // Subheader: Era badge + Title (Zero Paragraphs!)
  doc.fillColor('#5a4030').font('Courier-Bold').fontSize(8)
     .text(`FLORENCE, TUSCANY | 1450-1550 AD`, b.left, 72, { characterSpacing: 0.8 });

  doc.fillColor('#111111').font('Times-Bold').fontSize(19)
     .text(`${p.puzzleNumber}. ${p.title}`, b.left, 88, { width: b.width, characterSpacing: 0.5 });

  doc.strokeColor('#d0cbc4').lineWidth(0.6)
     .moveTo(b.left, 116).lineTo(b.right, 116).stroke();

  // 16x16 Puzzle Grid Container (High-Contrast White Box)
  const gridStartX = b.left + (b.width - GRID_W) / 2;
  const gridStartY = 134;

  doc.save();
  // Pure white box for crisp readability
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

    // Draw clean vector bullet circle (No unicode characters!)
    doc.save();
    doc.fillColor('#4a4035');
    doc.circle(wx + 3, wy + 5, 1.8).fill();
    doc.restore();

    // Word text in crisp black
    doc.fillColor('#111111').font('Helvetica-Bold').fontSize(8.5).text(w, wx + 10, wy, { characterSpacing: 0.3 });
  });

  // Footer: Page Number & Series Citation
  doc.strokeColor('#d0cbc4').lineWidth(0.5)
     .moveTo(b.left, PAGE_H - 42).lineTo(b.right, PAGE_H - 42).stroke();

  const pageAlign = b.isOdd ? 'right' : 'left';
  doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
     .text(String(pageNum), b.left, PAGE_H - 34, { width: b.width, align: pageAlign });

  doc.fillColor('#555555').font('Times-Roman').fontSize(7.5)
     .text('HISTORICAL WORD SEARCH | FLORENCE (1450-1550 AD)', b.left, PAGE_H - 34, { width: b.width, align: 'center', characterSpacing: 0.8 });
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
   .text('Architecture, Art & The Florentine Bottegas', b105.left, 62, { width: b105.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b105.left + 60, 76).lineTo(b105.right - 60, 76).stroke();

const glossaryPart1 = [
  { term: "Bottega", def: "The combined workshop, studio, and retail shop of a Florentine master artist where apprentices and journeymen collaborated on commissions." },
  { term: "Buon Fresco", def: "The demanding technique of painting with mineral pigments directly onto wet lime plaster (intonaco), chemically bonding the artwork to the wall." },
  { term: "Chiaroscuro", def: "The dramatic modeling of light and shadow on painted surfaces to create the realistic illusion of three-dimensional volume." },
  { term: "Contrapposto", def: "The classical human sculptural posture in which body weight rests primarily on one leg, shifting the hips and shoulders for natural dynamic balance." },
  { term: "Duomo", def: "The Cathedral of Santa Maria del Fiore, crowned by Filippo Brunelleschi's revolutionary double-shell octagonal brick dome completed in 1436." },
  { term: "Ghirlanda", def: "A decorative garland of woven leaves, fruit, or flowers widely used across Florentine architectural relief and festival pageantry." },
  { term: "Intonaco", def: "The final, ultra-smooth layer of wet lime-and-sand plaster applied to a wall in daily sections (giornate) specifically for fresco painting." },
  { term: "Pietra Serena", def: "A dark gray Tuscan sandstone quarried in Fiesole, famously used by Brunelleschi and Michelangelo to frame Florentine architectural interiors." },
  { term: "Sfumato", def: "Leonardo da Vinci's optical technique of blending colors and tones so subtly that boundaries soften into a smoky, imperceptible transition." },
  { term: "Sinopia", def: "A reddish-brown pigment and preparatory underdrawing sketched directly onto the rough plaster (arriccio) before applying the fresh intonaco." }
];

let g1Y = 92;
glossaryPart1.forEach(g => {
  doc.fillColor('#111111').font('Times-Bold').fontSize(9).text(g.term, b105.left + 16, g1Y);
  g1Y += 13;
  doc.fillColor('#333333').font('Times-Roman').fontSize(8.2).text(g.def, b105.left + 16, g1Y, { width: b105.width - 32, lineGap: 2.5 });
  g1Y += 27;
});

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('105', b105.left, PAGE_H - 34, { width: b105.width, align: 'right' });


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
   .text('Civic Republic, Guilds & Financial Dynasties', b106.left, 62, { width: b106.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b106.left + 60, 76).lineTo(b106.right - 60, 76).stroke();

const glossaryPart2 = [
  { term: "Arti Maggiori", def: "The seven prestigious Greater Guilds of Florence (including Wool Merchants, Silk Weavers, Bankers, and Physicians) that commanded civic government." },
  { term: "Arti Minori", def: "The fourteen Lesser Guilds representing skilled craftsmen, butchers, smiths, and cobblers, forming the vital industrial backbone of the commune." },
  { term: "Borsa", def: "The leather pouches kept in the sacristy of Santa Croce containing the names of vetted Florentine citizens eligible to be drawn by lot for public magistracies." },
  { term: "Calcio Storico", def: "The fierce, traditional 27-a-side combat football match contested annually on a dirt pitch in Piazza Santa Croce by Florence's four historic quarters." },
  { term: "Ciompi", def: "The unrepresented Florentine day-laborers and wool carders who staged the legendary democratic rebellion of 1378 against the ruling guild oligarchy." },
  { term: "Fiorino d'Oro", def: "The gold florin, first struck in 1252 in 24-carat gold with the Florentine lily (giglio); the universally accepted standard currency of international trade." },
  { term: "Gonfaloniere", def: "The Standard-Bearer of Justice, the supreme presiding magistrate of the Florentine Republic who led the nine-member Signoria." },
  { term: "Marzocco", def: "The heraldic crowned stone lion resting its paw on the shield of the Florentine lily, the supreme civic symbol of the Republic's liberty." },
  { term: "Pater Patriae", def: "Latin for 'Father of the Fatherland,' the posthumous civic title decreed by the Signoria to Cosimo de' Medici the Elder in 1465." },
  { term: "Signoria", def: "The supreme governing executive council of nine citizens (the Priori) who resided inside the Palazzo Vecchio during their two-month terms of office." }
];

let g2Y = 92;
glossaryPart2.forEach(g => {
  doc.fillColor('#111111').font('Times-Bold').fontSize(9).text(g.term, b106.left + 16, g2Y);
  g2Y += 13;
  doc.fillColor('#333333').font('Times-Roman').fontSize(8.2).text(g.def, b106.left + 16, g2Y, { width: b106.width - 32, lineGap: 2.5 });
  g2Y += 27;
});

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('106', b106.left, PAGE_H - 34, { width: b106.width, align: 'left' });


// ==========================================
// PAGE 107: SERIES CATALOG & NOTES (Recto)
// ==========================================
console.log("Compiling Page 107: Series Catalog & Notes...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b107 = getPageBounds(107);
drawCleanPageGround(b107, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', b107.left, 46, { width: b107.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8.5)
   .text('Place x Epoch Historical Word Search Volumes', b107.left, 62, { width: b107.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b107.left + 60, 76).lineTo(b107.right - 60, 76).stroke();

const upcomingVolumes = [
  { vol: "VOLUME 001", title: "FLORENCE: THE HIGH RENAISSANCE (1450-1550 AD)", status: "AVAILABLE NOW", desc: "100 Large-Print Puzzles chronicling Brunelleschi, Leonardo, Michelangelo, and the Medici dynasty." },
  { vol: "VOLUME 002", title: "VENICE: MARITIME EMPIRE & SERENISSIMA (1475-1575 AD)", status: "COMING SOON", desc: "100 Puzzles navigating the Grand Canal, Venetian galleys, glassmakers of Murano, and Titian." },
  { vol: "VOLUME 003", title: "KYOTO: THE MOMOYAMA & EARLY EDO ERA (1568-1638 AD)", status: "IN DEVELOPMENT", desc: "100 Puzzles celebrating samurai castles, tea ceremonies, Zen rock gardens, and traditional woodblock masters." },
  { vol: "VOLUME 004", title: "ROME: THE PAPAL STATE & RENAISSANCE (1500-1580 AD)", status: "IN DEVELOPMENT", desc: "100 Puzzles exploring the Sistine Chapel, St. Peter's Basilica, Raphael's Stanze, and ancient forums." },
  { vol: "VOLUME 005", title: "LONDON: THE ELIZABETHAN & JACOBEAN AGE (1558-1625 AD)", status: "SCHEDULED", desc: "100 Puzzles exploring Shakespeare's Globe, the Thames river trade, Galleon explorers, and London guilds." }
];

let cy = 96;
upcomingVolumes.forEach(v => {
  doc.fillColor('#8a5a36').font('Times-Bold').fontSize(8.5).text(v.vol, b107.left + 16, cy);
  doc.fillColor(v.status === 'AVAILABLE NOW' ? '#2e6b36' : '#666666').font('Times-Bold').fontSize(7.5).text(v.status, b107.right - 120, cy, { width: 104, align: 'right' });
  cy += 13;
  doc.fillColor('#111111').font('Times-Bold').fontSize(9).text(v.title, b107.left + 16, cy);
  cy += 13;
  doc.fillColor('#444444').font('Times-Roman').fontSize(8).text(v.desc, b107.left + 16, cy, { width: b107.width - 32, lineGap: 2.5 });
  cy += 24;
});

// Digital Storefront Callout
doc.save();
doc.rect(b107.left + 30, cy + 10, b107.width - 60, 48).fillAndStroke('#ffffff', '#3a3530');
doc.fillColor('#111111').font('Times-Bold').fontSize(8.5)
   .text('EXPLORE THE COMPLETE ARCHIVE ONLINE', b107.left + 30, cy + 20, { width: b107.width - 60, align: 'center', characterSpacing: 1 });
doc.fillColor('#5a4a3a').font('Courier-Bold').fontSize(8.5)
   .text('https://corlantisdes44.github.io', b107.left + 30, cy + 34, { width: b107.width - 60, align: 'center' });
doc.restore();

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('107', b107.left, PAGE_H - 34, { width: b107.width, align: 'right' });


// ==========================================
// PAGE 108: CLEAN TERMINAL BLANK PAGE (Verso)
// ==========================================
console.log("Compiling Page 108: Terminal Blank Page...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b108 = getPageBounds(108);
drawCleanPageGround(b108, false);

// Subtle publisher mark centered quietly
doc.fillColor('#777777').font('Times-Bold').fontSize(8.5)
   .text('THEBOOKGUY PRESS', b108.left, PAGE_H / 2 - 10, { width: b108.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#999999').font('Times-Roman').fontSize(7.5)
   .text('HISTORICAL PUZZLE EDITIONS', b108.left, PAGE_H / 2 + 5, { width: b108.width, align: 'center', characterSpacing: 1 });

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8.5)
   .text('108', b108.left, PAGE_H - 34, { width: b108.width, align: 'left' });

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`COMPLETE 108-PAGE INTERIOR COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Exact Pages: 108 pages (Perfect Press Signature)`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
