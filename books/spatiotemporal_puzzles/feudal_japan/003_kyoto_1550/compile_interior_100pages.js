// Complete Interior Compiler: Kyoto: The Shogunate (1550-1650 AD)
// Volume 003 of The Spatiotemporal Puzzle Series
// 108 Pages Total (Standard Press Signature Format):
// Page 1: Half-Title & Series Badge
// Page 2: Copyright & Publisher Colophon
// Page 3: Thematic Index of the 100 Historical Themes
// Page 4: Blank Facing Page (with Zen Motto)
// Pages 5-104: Exactly 100 Thematic Puzzles (One Per Page)
// Page 105: Historical Glossary Part I (Samurai, Castles & Sengoku Warfare)
// Page 106: Historical Glossary Part II (Zen, Tea Ceremony & Kano School Art)
// Page 107: Kyoto Historical Chronology (1550-1650 AD) & Series Catalog
// Page 108: Clean Terminal Blank Page
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const DATA_PATH = path.join(__dirname, 'data', 'all_100_puzzles.json');
const IMAGE_PATH = path.join(__dirname, 'cover', 'kyoto_1550_oil_painting.jpg');
const OUT_PDF = path.join(__dirname, 'interior', 'kyoto_1550_interior_100pages.pdf');

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
    Title: "Historical Word Search: Kyoto (1550-1650 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Spatiotemporal Historical Word Search Series - Volume 003",
    Keywords: "Kyoto, Samurai, Shogunate, Word Search, Puzzle Book, Large Print, Zen, Tea Ceremony",
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
  console.log("Background Kyoto painting image loaded successfully.");
}

function getPageBounds(pageNumber) {
  const isOdd = pageNumber % 2 !== 0;
  const left = isOdd ? GUTTER_MARGIN : OUTSIDE_MARGIN;
  const right = PAGE_W - (isOdd ? OUTSIDE_MARGIN : GUTTER_MARGIN);
  const width = right - left;
  return { isOdd, left, right, width, top: 36, bottom: PAGE_H - 36 };
}

function drawCleanPageGround(b, showWatermark = true) {
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
   .text('KYOTO', b1.left, 285, { width: b1.width, align: 'center', characterSpacing: 3 });
doc.fillColor('#5a4a3a').font('Times-Roman').fontSize(12)
   .text('THE SHOGUNATE (1550-1650 AD)', b1.left, 310, { width: b1.width, align: 'center', characterSpacing: 1.5 });

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
   .text('1,800 Historical Terms to Discover\nSamurai Castles * Zen Temples * Tea Ceremony * Kano Gold Art', tBoxX, 435, { width: tBoxW, align: 'center', lineGap: 4 });
doc.fillColor('#5a4a3a').font('Courier-Bold').fontSize(8.5)
   .text('SERIES CODE: 03.392.13.0108.1550.1650.003', tBoxX, 475, { width: tBoxW, align: 'center' });
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
   .text('Historical Word Search: Kyoto (1550-1650 AD)', b2.left, crY + 16, { width: b2.width, align: 'center' });

doc.fillColor('#444444').font('Times-Roman').fontSize(8)
   .text('The Spatiotemporal Puzzle Series - Volume 003\nClassification Code: 03.392.13.0108.1550.1650.003\n\nPublished by TheBookGuy Press\nhttps://corlantisdes44.github.io\n\nCopyright (c) 2026 TheBookGuy Press. All rights reserved.\nFirst Edition', b2.left, crY + 30, { width: b2.width, align: 'center', lineGap: 3.5 });


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
  { name: "I. CASTLES, WARLORDS & SENGOKU CLASHES (Puzzles 01-20)", range: "Nijo Castle, Nobunaga, Hideyoshi, Ieyasu, Sekigahara, Honno-ji, Azuchi, Samurai Armor, Katana" },
  { name: "II. THE IMPERIAL COURT & ANCIENT TEMPLES (Puzzles 21-40)", range: "Kyoto Imperial Palace, Tenno, Kinkaku-ji Golden Pavilion, Ginkaku-ji, Kiyomizu-dera, Ryoan-ji, Fushimi Inari" },
  { name: "III. ZEN, TEA MASTERS & GARDEN AESTHETICS (Puzzles 41-60)", range: "Sen no Rikyu, Chanoyu Tea Ceremony, Wabi-Sabi, Raku Ware, Karesansui Dry Gardens, Uji Matcha" },
  { name: "IV. KANO MASTERS, GOLD LEAF & RINPA ART (Puzzles 61-80)", range: "Kano Eitoku, Hasegawa Tohaku, Rinpa School, Byobu Folding Screens, Makie Lacquer, Nishijin Silk" },
  { name: "V. EDO TRANSITION, TOWNSFOLK & CIVIC LIFE (Puzzles 81-100)", range: "Okuni Kabuki, Gion Matsuri, Geisha Traditions, Ryokan, Merchant Za, Sannenzaka, Tokaido Road, Pax Tokugawa" }
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
   .text('Turn to Page 5 to begin your journey through Feudal Kyoto and the Shogunate.', b3.left + 30, dy + 36, { width: b3.width - 60, align: 'center' });
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

// Elegant Zen motto centered quietly
doc.fillColor('#666666').font('Times-Italic').fontSize(11)
   .text('"Ichigo Ichie - One Time, One Meeting."', b4.left, PAGE_H / 2 - 15, { width: b4.width, align: 'center' });
doc.fillColor('#888888').font('Times-Roman').fontSize(8.5)
   .text('- Ancient Japanese Tea Philosophy', b4.left, PAGE_H / 2 + 6, { width: b4.width, align: 'center' });

doc.fillColor('#4a4035').font('Times-Bold').fontSize(8)
   .text('4', b4.left, PAGE_H - 38, { width: b4.width, align: 'left' });


// ==========================================
// PAGES 5 TO 104: EXACTLY 100 PUZZLES (Pages 5-104)
// ==========================================
console.log("Compiling 100 Historical Puzzle Pages (Pages 5 to 104)...");

const CELL_SIZE = 23.5;
const GRID_W = 16 * CELL_SIZE;

puzzles.forEach((p, idx) => {
  const pageNum = idx + 5;
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawCleanPageGround(b, true);

  // Clean Header
  doc.fillColor('#4a4035').font('Courier-Bold').fontSize(7.5)
     .text(`ARCHIVE REGISTRY // ${p.code}`, b.left, 44, { characterSpacing: 0.8 });

  doc.fillColor('#222222').font('Times-Bold').fontSize(8)
     .text(`VOLUME III - KYOTO`, b.left, 44, { width: b.width, align: 'right', characterSpacing: 1.0 });

  doc.strokeColor('#3a3530').lineWidth(0.8)
     .moveTo(b.left, 55).lineTo(b.right, 55).stroke();

  // Subheader: Era badge + Title
  doc.fillColor('#5a4030').font('Courier-Bold').fontSize(8)
     .text(`KYOTO, FEUDAL JAPAN | 1550-1650 AD`, b.left, 72, { characterSpacing: 0.8 });

  doc.fillColor('#111111').font('Times-Bold').fontSize(19)
     .text(`${p.puzzleNumber}. ${p.title}`, b.left, 88, { width: b.width, characterSpacing: 0.5 });

  doc.strokeColor('#d0cbc4').lineWidth(0.6)
     .moveTo(b.left, 116).lineTo(b.right, 116).stroke();

  // 16x16 Puzzle Grid Container
  const gridStartX = b.left + (b.width - GRID_W) / 2;
  const gridStartY = 134;

  doc.save();
  doc.rect(gridStartX, gridStartY, GRID_W, GRID_W).fillAndStroke('#ffffff', '#2a241e');

  // Internal cell lines
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
     .text('HISTORICAL WORD SEARCH | KYOTO (1550-1650 AD)', b.left, PAGE_H - 38, { width: b.width, align: 'center', characterSpacing: 0.8 });
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
   .text('Samurai, Castles & Sengoku Statecraft', b105.left, 62, { width: b105.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b105.left + 60, 76).lineTo(b105.right - 60, 76).stroke();

const glossaryPart1 = [
  { term: "Ashigaru", def: "Light-foot soldier infantry who formed the backbone of Sengoku armies, armed with long spears (yari) and matchlock muskets (tanegashima)." },
  { term: "Bakufu", def: "Literally 'tent government,' the military administration led by the Shogun that governed Japan, establishing central authority over provincial lords." },
  { term: "Bushido", def: "The ethical code and 'Way of the Warrior' emphasizing unswerving loyalty, personal honor, martial discipline, and indifference to physical pain." },
  { term: "Daimyo", def: "Powerful feudal provincial lords who commanded vast samurai retinues and governed territorial domains assessed by annual rice yields (koku)." },
  { term: "Kabuto", def: "The formidable samurai helmet crafted from riveted iron plates, adorned with crests (maedate), silk lacing, and articulated neck guards." },
  { term: "Katana", def: "The curved, single-edged curved sword of folded tamahagane steel worn blade-up at the sash; revered as the physical soul of the samurai." },
  { term: "Mon", def: "The family crest or heraldic emblem of Japanese samurai clans displayed proudly across battle banners (sashimono), armor, and palace gates." },
  { term: "Sankin-Kotai", def: "The Tokugawa policy of alternate attendance requiring daimyo to spend alternate years residing in Edo, preserving national peace." },
  { term: "Sengoku Jidai", def: "The 'Warring States Period' (c. 1467-1603), an era of intense political upheaval and military conflict preceding the great unification." },
  { term: "Seppuku", def: "Ritual suicide by disembowelment, an ancient warrior rite undertaken by samurai to preserve personal and clan honor in defeat." }
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
   .text('Zen, Tea Ceremony, Kano Art & Kyoto Traditions', b106.left, 62, { width: b106.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b106.left + 60, 76).lineTo(b106.right - 60, 76).stroke();

const glossaryPart2 = [
  { term: "Byobu", def: "Multi-panel folding screens constructed with paper hinges and painted with gold leaf grounds, transforming temple and castle interiors." },
  { term: "Chanoyu", def: "The traditional Japanese Tea Ceremony ('hot water for tea'), a meditative choreographic ritual of preparing whisked powdered green tea." },
  { term: "Karesansui", def: "Dry landscape Zen rock gardens utilizing meticulously raked white sand and strategically placed boulders to represent oceans and mountains." },
  { term: "Machiya", def: "Traditional wooden townhouses with narrow street frontages, inner courtyard gardens (tsuboniwa), and latticed wooden screens (koshi)." },
  { term: "Makie", def: "The exquisite decorative technique of sprinkling powdered gold and silver onto damp urushi lacquer to create shimmering, permanent designs." },
  { term: "Raku Ware", def: "Hand-molded, lead-glazed earthenware tea bowls pulled glowing hot directly from small kilns, celebrated for their organic tactile warmth." },
  { term: "Rinpa", def: "The prestigious classical Japanese decorative art school pioneering bold graphic rhythms, flowing gold foil clouds, and literary motifs." },
  { term: "Tatami", def: "Traditional flooring mats woven from dried rush grass (igusa) around a rice straw core, defining room dimensions across Japanese architecture." },
  { term: "Wabi-Sabi", def: "The foundational aesthetic worldview that discovers profound spiritual beauty in natural imperfection, rustic modesty, and the passage of time." },
  { term: "Zazen", def: "Seated silent meditation practiced in Zen monasteries, cultivating alert presence, mindful breath, and insight into the nature of reality." }
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
// PAGE 107: KYOTO HISTORICAL CHRONOLOGY (Recto)
// ==========================================
console.log("Compiling Page 107: Historical Chronology...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b107 = getPageBounds(107);
drawCleanPageGround(b107, false);

doc.fillColor('#222222').font('Times-Bold').fontSize(12)
   .text('KYOTO HISTORICAL CHRONOLOGY', b107.left, 46, { width: b107.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#555555').font('Times-Italic').fontSize(8.5)
   .text('Pivotal Milestones of the Sengoku & Early Edo Eras (1550-1650 AD)', b107.left, 62, { width: b107.width, align: 'center' });
doc.strokeColor('#3a3530').lineWidth(0.8)
   .moveTo(b107.left + 50, 76).lineTo(b107.right - 50, 76).stroke();

const timelineEvents = [
  { year: "1568", desc: "Oda Nobunaga marches into Kyoto, securing the Ashikaga Shogunate and initiating the grand unification of war-torn Japan." },
  { year: "1576", desc: "Nobunaga constructs Azuchi Castle on Lake Biwa, inaugurating the magnificent gold-screen Momoyama artistic epoch." },
  { year: "1582", desc: "Akechi Mitsuhide attacks Nobunaga at Honno-ji in Kyoto; Toyotomi Hideyoshi avenges his master and assumes supreme control." },
  { year: "1587", desc: "Hideyoshi hosts the Grand Kitano Tea Ceremony, inviting thousands of tea lovers of all social classes to drink matcha." },
  { year: "1590", desc: "Kano Eitoku completes monumental screen paintings for Kyoto castles before his untimely passing at the height of his fame." },
  { year: "1591", desc: "Sen no Rikyu performs his final tea ceremony at Daitoku-ji, leaving an immortal legacy of wabi-sabi simplicity." },
  { year: "1598", desc: "Hideyoshi hosts the legendary Daigo Cherry Blossom Viewing Banquet shortly before passing away at Fushimi Castle." },
  { year: "1600", desc: "Tokugawa Ieyasu triumphs at the Battle of Sekigahara, laying the foundation for over 250 years of national stability." },
  { year: "1603", desc: "Ieyasu is appointed Shogun; Nijo Castle is completed in Kyoto; Izumo no Okuni performs early Kabuki by the Kamo river." },
  { year: "1615", desc: "Osaka Castle falls, consolidating undisputed Tokugawa supremacy; Ieyasu enacts the Buke Shohatto laws for samurai." },
  { year: "1620", desc: "Construction begins on Katsura Imperial Villa on Kyoto's outskirts, achieving the pinnacle of classical Japanese garden design." },
  { year: "1639", desc: "The Sakoku edicts close Japan to European trade, securing the tranquil inward cultural flourishing of the Pax Tokugawa." }
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
   .text('THE SPATIOTEMPORAL PUZZLE SERIES // ARCHIVE 003', b107.left + 30, ty + 22, { width: b107.width - 60, align: 'center', characterSpacing: 1 });
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
  console.log(`COMPLETE 108-PAGE KYOTO INTERIOR COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Exact Pages: 108 pages (Perfect Press Signature)`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
