// Full-Wrap Cover Compiler: Kyoto: The Shogunate (1550-1650 AD)
// Volume 003 of The Spatiotemporal Puzzle Series
// Bestselling Amazon KDP Word Search Book Format:
// 1. Top "LARGE PRINT EDITION" Ribbon Banner
// 2. Towering "WORD SEARCH" Display Title
// 3. Golden Circular Value Medallion: "100 PUZZLES * 1,800 WORDS"
// 4. Prominent Visual Word Search Grid Preview with Realistic Color Highlighter Strokes (SAMURAI, KATANA, SHOGUN)
// 5. Value Checkmarks ("16x16 Matrices", "Glossary Included", "One Puzzle Per Page")
// 6. Classical Japanese Kano/Rinpa Masterwork Canvas Background
// 7. Spine: 0.243" (108 Pages Cream Paper) - Clean ASCII
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const IMAGE_PATH = path.join(__dirname, 'cover', 'kyoto_1550_oil_painting.jpg');
const OUT_PDF = path.join(__dirname, 'cover', 'kyoto_1550_cover_fullwrap_300dpi.pdf');

// Total Cover Dimensions in Points (72 pt / inch)
// 108 pages on cream paper: spine = 108 * 0.002252" = 0.2432" (17.51 pt)
// Width: 0.125" bleed (9 pt) + 8.5" back (612 pt) + 0.2432" spine (17.51 pt) + 8.5" front (612 pt) + 0.125" bleed (9 pt) = 1259.51 pt
// Height: 0.125" bleed (9 pt) + 11.0" trim (792 pt) + 0.125" bleed (9 pt) = 810 pt
const TOTAL_W = 1259.51;
const TOTAL_H = 810;

const BLEED = 9;
const TRIM_W = 612;
const TRIM_H = 792;
const SPINE_W = 17.51;

const BACK_LEFT = 0;
const BACK_RIGHT = BLEED + TRIM_W; // 621
const SPINE_LEFT = BACK_RIGHT; // 621
const SPINE_RIGHT = SPINE_LEFT + SPINE_W; // 638.51
const FRONT_LEFT = SPINE_RIGHT; // 638.51
const FRONT_RIGHT = TOTAL_W; // 1259.51

console.log("Compiling Bestseller-Inspired Word Search Full-Wrap Cover for Kyoto...");
console.log(`Dimensions: ${TOTAL_W.toFixed(2)} x ${TOTAL_H} pt (17.49" x 11.25")`);
console.log(`Spine Width: ${SPINE_W.toFixed(2)} pt (0.243" for 108 pages)`);

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: "Historical Word Search: Kyoto (1550-1650 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Bestselling Large Print Puzzle Book Cover Wrap - Volume 003",
    Keywords: "Word Search, Puzzle Book, Kyoto, Samurai, Shogunate, Large Print, Zen, KDP Bestseller"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

doc.addPage({ size: [TOTAL_W, TOTAL_H], margin: 0 });

// ==========================================
// 1. BACK COVER (Left Side)
// ==========================================
doc.rect(0, 0, BACK_RIGHT, TOTAL_H).fill('#16100b');

// Outer gold frame
const bFrameX = BLEED + 24;
const bFrameY = BLEED + 24;
const bFrameW = TRIM_W - 48;
const bFrameH = TRIM_H - 48;

doc.save();
doc.strokeColor('#b89758').lineWidth(1.2);
doc.rect(bFrameX, bFrameY, bFrameW, bFrameH).stroke();

doc.strokeColor('#d4af37').lineWidth(0.5);
doc.rect(bFrameX + 4, bFrameY + 4, bFrameW - 8, bFrameH - 8).stroke();
doc.restore();

const bContentX = bFrameX + 26;
const bContentW = bFrameW - 52;

// Top Series Banner
doc.fillColor('#d4af37').font('Times-Bold').fontSize(9)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', bContentX, bFrameY + 28, { width: bContentW, align: 'center', characterSpacing: 2 });
doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(bContentX + 50, bFrameY + 44).lineTo(bContentX + bContentW - 50, bFrameY + 44).stroke();

// Main Back Header
doc.fillColor('#ffffff').font('Times-Bold').fontSize(21)
   .text('ENTER THE LEGENDARY AGE OF', bContentX, bFrameY + 62, { width: bContentW, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(25)
   .text('THE SHOGUNATE', bContentX, bFrameY + 88, { width: bContentW, align: 'center', characterSpacing: 2 });

doc.strokeColor('#b89758').lineWidth(0.6)
   .moveTo(bContentX + 30, bFrameY + 120).lineTo(bContentX + bContentW - 30, bFrameY + 120).stroke();

// Back Cover Pitch (Clean left alignment)
const backPitch = `Step back in time to Kyoto between 1550 and 1650 AD - the dramatic epoch of samurai warlords, fortress sieges, tranquil Zen rock gardens, and the dawn of the Pax Tokugawa.

This masterfully curated puzzle collection brings Feudal Japan to life through 100 large-print word search puzzles and 1,800 authentic historical terms. Discover the nightingale floors of Nijo Castle, the three unifiers of Japan (Nobunaga, Hideyoshi, Ieyasu), the tea sanctuary of Sen no Rikyu, and the golden screen masterpieces of the Kano school.`;

doc.fillColor('#f0e6d6').font('Times-Roman').fontSize(10.5)
   .text(backPitch, bContentX, bFrameY + 135, { width: bContentW, align: 'left', lineGap: 5 });

// 4 Highlights with clean vector bullets
const puzzleFeatures = [
  {
    title: "100 THEMATIC PUZZLES",
    desc: "1,800 hand-verified historical terms covering samurai warfare, Zen temples, tea ceremony, and Kano art."
  },
  {
    title: "EASY-ON-THE-EYES LARGE PRINT",
    desc: "Spacious 16x16 letter matrices printed on high-contrast cream paper for effortless, strain-free solving."
  },
  {
    title: "HISTORICAL GLOSSARY INCLUDED",
    desc: "Complete reference lexicon defining key samurai concepts, Buddhist terms, and tea aesthetics."
  },
  {
    title: "GENUINE CANVAS ARTWORK",
    desc: "Authentic museum-grade classical Japanese painting embedded delicately into every puzzle folio."
  }
];

let pfY = bFrameY + 275;
puzzleFeatures.forEach(f => {
  doc.save();
  doc.fillColor('#d4af37');
  doc.circle(bContentX + 4, pfY + 5, 2.5).fill();
  doc.restore();

  doc.fillColor('#d4af37').font('Times-Bold').fontSize(9.5)
     .text(f.title, bContentX + 16, pfY, { characterSpacing: 0.8 });
  pfY += 15;

  doc.fillColor('#e0d5c3').font('Times-Roman').fontSize(8.8)
     .text(f.desc, bContentX + 16, pfY, { width: bContentW - 16, lineGap: 3 });
  pfY += 28;
});

// Official Classification Cartouche
const cBoxY = bFrameY + 480;
const cBoxH = 65;
doc.save();
doc.rect(bContentX, cBoxY, bContentW, cBoxH).fillAndStroke('#221a14', '#b89758');
doc.fillColor('#d4af37').font('Times-Bold').fontSize(8.5)
   .text('OFFICIAL ARCHIVE CLASSIFICATION', bContentX, cBoxY + 10, { width: bContentW, align: 'center', characterSpacing: 1.2 });
doc.fillColor('#ffffff').font('Courier-Bold').fontSize(10.5)
   .text('03.392.13.0108.1550.1650.003', bContentX, cBoxY + 26, { width: bContentW, align: 'center', characterSpacing: 1 });
doc.fillColor('#c5b398').font('Times-Roman').fontSize(7.5)
   .text('Asia * Japan * Kansai * Kyoto * 1550-1650 AD * Volume 003', bContentX, cBoxY + 44, { width: bContentW, align: 'center' });
doc.restore();

// Official Imprint Line
doc.fillColor('#d4af37').font('Times-Bold').fontSize(8.5)
   .text('THEBOOKGUY PRESS', bContentX, bFrameY + 575, { characterSpacing: 1.5 });
doc.fillColor('#a8947b').font('Times-Roman').fontSize(7.5)
   .text('Online Storefront: https://corlantisdes44.github.io', bContentX, bFrameY + 589);

// Amazon KDP Barcode Reservation Area (2.0" x 1.2" = 144 x 86.4 pt)
const barcodeW = 144;
const barcodeH = 86.4;
const barcodeX = BACK_RIGHT - BLEED - 18 - barcodeW;
const barcodeY = TOTAL_H - BLEED - 18 - barcodeH;

doc.save();
doc.rect(barcodeX, barcodeY, barcodeW, barcodeH).fill('#ffffff');
doc.strokeColor('#cccccc').lineWidth(0.5).rect(barcodeX, barcodeY, barcodeW, barcodeH).stroke();

doc.fillColor('#777777').font('Helvetica').fontSize(7)
   .text('BARCODE RESERVATION ZONE', barcodeX, barcodeY + 32, { width: barcodeW, align: 'center' });
doc.fillColor('#aaaaaa').font('Helvetica').fontSize(6)
   .text('(Amazon KDP will imprint ISBN barcode here)', barcodeX, barcodeY + 44, { width: barcodeW, align: 'center' });
doc.restore();


// ==========================================
// 2. SPINE (Center 0.243" / 17.51 pt)
// ==========================================
doc.rect(SPINE_LEFT, 0, SPINE_W, TOTAL_H).fill('#100b07');

doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(SPINE_LEFT, 0).lineTo(SPINE_LEFT, TOTAL_H).stroke();
doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(SPINE_RIGHT, 0).lineTo(SPINE_RIGHT, TOTAL_H).stroke();

doc.save();
doc.translate(SPINE_LEFT + SPINE_W / 2, TOTAL_H / 2);
doc.rotate(90);

doc.fillColor('#ffffff').font('Times-Bold').fontSize(7.5)
   .text('HISTORICAL WORD SEARCH: KYOTO (1550-1650)   *   100 PUZZLES   *   THEBOOKGUY', -360, -3.2, {
     width: 720,
     align: 'center',
     characterSpacing: 1.2
   });
doc.restore();


// ==========================================
// 3. FRONT COVER (Bestselling Word Search Design)
// ==========================================
// Base Classical Kyoto Painting
if (fs.existsSync(IMAGE_PATH)) {
  const frontW = TOTAL_W - FRONT_LEFT;
  doc.image(IMAGE_PATH, FRONT_LEFT - 4, 0, {
    width: frontW + 8,
    height: TOTAL_H,
    fit: [frontW + 8, TOTAL_H],
    align: 'center',
    valign: 'center'
  });
} else {
  doc.rect(FRONT_LEFT, 0, TOTAL_W - FRONT_LEFT, TOTAL_H).fill('#241b12');
}

// Dark atmospheric vignettes for maximum typographic pop
doc.save();
doc.rect(FRONT_LEFT, 0, TOTAL_W - FRONT_LEFT, 330).fillOpacity(0.75).fill('#0c0805');
doc.restore();

doc.save();
doc.rect(FRONT_LEFT, TOTAL_H - 240, TOTAL_W - FRONT_LEFT, 240).fillOpacity(0.82).fill('#0c0805');
doc.restore();

// Front Gold Frame
const fFrameX = FRONT_LEFT + BLEED + 16;
const fFrameY = BLEED + 16;
const fFrameW = TRIM_W - 32;
const fFrameH = TRIM_H - 32;

doc.save();
doc.strokeColor('#d4af37').lineWidth(1.2);
doc.rect(fFrameX, fFrameY, fFrameW, fFrameH).stroke();

doc.strokeColor('#e5cfa8').lineWidth(0.5);
doc.rect(fFrameX + 4, fFrameY + 4, fFrameW - 8, fFrameH - 8).stroke();
doc.restore();

const fContentX = fFrameX + 16;
const fContentW = fFrameW - 32;

// 1. TOP "LARGE PRINT" RIBBON BANNER
const ribbonW = fContentW;
const ribbonH = 26;
const ribbonY = fFrameY + 16;

doc.save();
doc.rect(fContentX, ribbonY, ribbonW, ribbonH).fillAndStroke('#d4af37', '#ffffff');
doc.fillColor('#111111').font('Times-Bold').fontSize(11)
   .text('* LARGE PRINT EDITION *', fContentX, ribbonY + 7, { width: ribbonW, align: 'center', characterSpacing: 2 });
doc.restore();

// 2. SERIES TAG
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(9)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', fContentX, ribbonY + 34, { width: fContentW, align: 'center', characterSpacing: 2.5 });

// 3. TOWERING, HIGH-IMPACT "WORD SEARCH" TITLE
doc.fillColor('#ffffff').font('Times-Bold').fontSize(34)
   .text('HISTORICAL', fContentX, ribbonY + 50, { width: fContentW, align: 'center', characterSpacing: 3 });

doc.fillColor('#f5eedc').font('Times-Bold').fontSize(52)
   .text('WORD SEARCH', fContentX, ribbonY + 86, { width: fContentW, align: 'center', characterSpacing: 2 });

doc.fillColor('#d4af37').font('Times-Bold').fontSize(18)
   .text('KYOTO', fContentX, ribbonY + 148, { width: fContentW, align: 'center', characterSpacing: 4 });

doc.fillColor('#ffffff').font('Times-Bold').fontSize(10.5)
   .text('THE SHOGUNATE (1550-1650 AD)', fContentX, ribbonY + 172, { width: fContentW, align: 'center', characterSpacing: 1.5 });

// 4. THE PROMINENT PUZZLE GRID PREVIEW + HIGHLIGHTER EFFECT + GOLD MEDALLION
const pRowY = ribbonY + 198;
const pGridSize = 8;
const pCellSize = 20;
const pGridW = pGridSize * pCellSize;
const pGridX = fContentX + 24;

doc.save();
doc.rect(pGridX - 8, pRowY - 8, pGridW + 16, pGridW + 16).fillAndStroke('#ffffff', '#3a2e20');
doc.restore();

// 8x8 Letters with authentic Kyoto samurai words hidden inside
const previewLetters = [
  ['S', 'A', 'M', 'U', 'R', 'A', 'I', 'K'],
  ['K', 'A', 'T', 'A', 'N', 'A', 'O', 'L'],
  ['S', 'H', 'O', 'G', 'U', 'N', 'T', 'E'],
  ['B', 'U', 'S', 'H', 'I', 'D', 'O', 'O'],
  ['M', 'A', 'T', 'C', 'H', 'A', 'L', 'N'],
  ['T', 'E', 'M', 'P', 'L', 'E', 'Z', 'A'],
  ['G', 'A', 'R', 'D', 'E', 'N', 'S', 'R'],
  ['C', 'A', 'S', 'T', 'L', 'E', 'E', 'D']
];

// HIGHLIGHTER STROKE 1: Yellow/Gold across "SAMURAI" (Row 0, Cols 0-6)
doc.save();
doc.rect(pGridX + 2, pRowY + 2, 7 * pCellSize - 4, pCellSize - 4)
   .fillOpacity(0.45).fill('#ffcc00');
doc.strokeColor('#ffbb00').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + 1, 7 * pCellSize - 2, pCellSize - 2, 4).stroke();
doc.restore();

// HIGHLIGHTER STROKE 2: Turquoise/Cyan across "KATANA" (Row 1, Cols 0-5)
doc.save();
doc.rect(pGridX + 2, pRowY + pCellSize + 2, 6 * pCellSize - 4, pCellSize - 4)
   .fillOpacity(0.40).fill('#00cccc');
doc.strokeColor('#00bbbb').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + pCellSize + 1, 6 * pCellSize - 2, pCellSize - 2, 4).stroke();
doc.restore();

// HIGHLIGHTER STROKE 3: Coral/Rose across "SHOGUN" (Row 2, Cols 0-5)
doc.save();
doc.rect(pGridX + 2, pRowY + 2 * pCellSize + 2, 6 * pCellSize - 4, pCellSize - 4)
   .fillOpacity(0.35).fill('#ff6666');
doc.strokeColor('#ff5555').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + 2 * pCellSize + 1, 6 * pCellSize - 2, pCellSize - 2, 4).stroke();
doc.restore();

// Draw grid lines
doc.save();
doc.strokeColor('#e5dfd5').lineWidth(0.5);
for (let i = 1; i < pGridSize; i++) {
  doc.moveTo(pGridX + i * pCellSize, pRowY).lineTo(pGridX + i * pCellSize, pRowY + pGridW).stroke();
  doc.moveTo(pGridX, pRowY + i * pCellSize).lineTo(pGridX + pGridW, pRowY + i * pCellSize).stroke();
}

// Draw preview letters
doc.fillColor('#111111').font('Helvetica-Bold').fontSize(11);
for (let r = 0; r < pGridSize; r++) {
  for (let c = 0; c < pGridSize; c++) {
    const cx = pGridX + c * pCellSize;
    const cy = pRowY + r * pCellSize;
    doc.text(previewLetters[r][c], cx, cy + 4.5, { width: pCellSize, align: 'center' });
  }
}
doc.restore();

// Circular Gold Seal Medallion
const sealRadius = 58;
const sealCenterX = pGridX + pGridW + 28 + sealRadius;
const sealCenterY = pRowY + pGridW / 2;

doc.save();
doc.circle(sealCenterX, sealCenterY, sealRadius).fillAndStroke('#d4af37', '#ffffff');
doc.circle(sealCenterX, sealCenterY, sealRadius - 4).strokeColor('#8a6847').lineWidth(1).stroke();
doc.circle(sealCenterX, sealCenterY, sealRadius - 6).strokeColor('#d4af37').lineWidth(0.5).stroke();

doc.fillColor('#111111').font('Times-Bold').fontSize(30)
   .text('100', sealCenterX - 50, sealCenterY - 32, { width: 100, align: 'center' });
doc.fillColor('#111111').font('Times-Bold').fontSize(11)
   .text('PUZZLES', sealCenterX - 50, sealCenterY + 2, { width: 100, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#333333').font('Times-Roman').fontSize(8.5)
   .text('1,800 WORDS', sealCenterX - 50, sealCenterY + 16, { width: 100, align: 'center' });
doc.restore();

// 5. HIGH-CONTRAST VALUE PROPOSITION PILL
const pillW = fContentW - 20;
const pillH = 28;
const pillX = fContentX + 10;
const pillY = pRowY + pGridW + 16;

doc.save();
doc.rect(pillX, pillY, pillW, pillH).fillOpacity(0.92).fill('#16100b');
doc.rect(pillX, pillY, pillW, pillH).strokeColor('#d4af37').lineWidth(1.2).stroke();
doc.fillColor('#ffffff').font('Times-Bold').fontSize(10.5)
   .text('* 16x16 Matrices    * One Puzzle Per Page    * Historical Glossary Included', pillX, pillY + 7.5, { width: pillW, align: 'center', characterSpacing: 0.5 });
doc.restore();

// 6. BOTTOM ARCHIVAL REGISTRY PILL
const btmBoxY = TOTAL_H - BLEED - 130;
const btmBoxH = 55;
doc.save();
doc.rect(fContentX + 30, btmBoxY, fContentW - 60, btmBoxH).fillOpacity(0.90).fill('#16100b');
doc.rect(fContentX + 30, btmBoxY, fContentW - 60, btmBoxH).strokeColor('#d4af37').lineWidth(0.8).stroke();

doc.fillColor('#d4af37').font('Times-Bold').fontSize(8)
   .text('ARCHIVAL REGISTRY CODE', fContentX + 30, btmBoxY + 8, { width: fContentW - 60, align: 'center', characterSpacing: 1.5 });

doc.fillColor('#ffffff').font('Courier-Bold').fontSize(11)
   .text('03.392.13.0108.1550.1650.003', fContentX + 30, btmBoxY + 22, { width: fContentW - 60, align: 'center', characterSpacing: 1.2 });

doc.fillColor('#d8cebb').font('Times-Roman').fontSize(7.5)
   .text('VOLUME 003 * THEBOOKGUY PRESS', fContentX + 30, btmBoxY + 38, { width: fContentW - 60, align: 'center', characterSpacing: 1.0 });
doc.restore();

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`BESTSELLER-GRADE KYOTO COVER COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Dimensions: ${TOTAL_W.toFixed(2)} x ${TOTAL_H} pt (17.49" x 11.25")`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
