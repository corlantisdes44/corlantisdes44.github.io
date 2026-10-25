// Full-Wrap Cover Compiler: Florence (1450-1550 AD)
// Bestselling Amazon KDP Word Search Book Format:
// 1. Top "LARGE PRINT EDITION" Ribbon Banner
// 2. Towering "WORD SEARCH" Display Title (Instant Thumbnail Readability)
// 3. Golden Circular Value Medallion: "100 PUZZLES * 1,800 WORDS"
// 4. Prominent Visual Word Search Grid Preview with Realistic Color Highlighter Strokes (MEDICI, DUOMO, DANTE)
// 5. Value Checkmarks ("16x16 Matrices", "Glossary Included", "One Puzzle Per Page")
// 6. Renaissance Oil Painting Canvas Background with Dramatic Lighting Vignettes
// 7. Spine: 0.243" (108 Pages Cream Paper) - Clean ASCII
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const IMAGE_PATH = path.join(__dirname, 'cover', 'florence_1450_oil_painting.png');
const OUT_PDF = path.join(__dirname, 'cover', 'florence_1450_cover_fullwrap_300dpi.pdf');

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

console.log("Compiling Bestseller-Inspired Word Search Full-Wrap Cover...");
console.log(`Dimensions: ${TOTAL_W.toFixed(2)} x ${TOTAL_H} pt (17.49" x 11.25")`);
console.log(`Spine Width: ${SPINE_W.toFixed(2)} pt (0.243" for 108 pages)`);

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: "Historical Word Search: Florence (1450-1550 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Bestselling Large Print Puzzle Book Cover Wrap",
    Keywords: "Word Search, Puzzle Book, Florence, Renaissance, Large Print, KDP Bestseller"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

doc.addPage({ size: [TOTAL_W, TOTAL_H], margin: 0 });

// ==========================================
// 1. BACK COVER (Left Side)
// ==========================================
doc.rect(0, 0, BACK_RIGHT, TOTAL_H).fill('#18120d');

// Clean, elegant outer gold border
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
   .text('JOURNEY TO THE CRADLE OF', bContentX, bFrameY + 62, { width: bContentW, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(25)
   .text('THE RENAISSANCE', bContentX, bFrameY + 88, { width: bContentW, align: 'center', characterSpacing: 2 });

doc.strokeColor('#b89758').lineWidth(0.6)
   .moveTo(bContentX + 30, bFrameY + 120).lineTo(bContentX + bContentW - 30, bFrameY + 120).stroke();

// Engaging Puzzle Pitch
const backPitch = `Step back in time to Florence between 1450 and 1550 AD—the golden century of Brunelleschi, Leonardo da Vinci, Botticelli, Michelangelo, and the Medici dynasty.

This masterfully curated puzzle collection brings the High Renaissance to life through 100 large-print word search puzzles and 1,800 authentic historical terms. Discover the bottegas, monuments, merchant guilds, and banking dynasties that shaped Western civilization.`;

doc.fillColor('#f0e6d6').font('Times-Roman').fontSize(10.2)
   .text(backPitch, bContentX, bFrameY + 135, { width: bContentW, align: 'justify', lineGap: 4.5 });

// 4 Commercial Puzzle Highlights with clean vector bullets
const puzzleFeatures = [
  {
    title: "100 THEMATIC PUZZLES",
    desc: "1,800 hand-verified historical terms covering art, architecture, statecraft, guilds, and medicine."
  },
  {
    title: "EASY-ON-THE-EYES LARGE PRINT",
    desc: "Spacious 16x16 letter matrices printed on high-contrast cream paper for effortless, strain-free reading."
  },
  {
    title: "HISTORICAL GLOSSARY INCLUDED",
    desc: "Complete reference lexicon defining key Renaissance terms, master bottegas, and Florentine institutions."
  },
  {
    title: "GENUINE CANVAS ARTWORK",
    desc: "Authentic Renaissance museum oil painting embedded delicately into every puzzle folio."
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
   .text('02.380.09.0501.1450.1550.001', bContentX, cBoxY + 26, { width: bContentW, align: 'center', characterSpacing: 1 });
doc.fillColor('#c5b398').font('Times-Roman').fontSize(7.5)
   .text('Europe * Italy * Tuscany * Florence * 1450-1550 AD * Volume 001', bContentX, cBoxY + 44, { width: bContentW, align: 'center' });
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
   .text('HISTORICAL WORD SEARCH: FLORENCE (1450-1550)   *   100 PUZZLES   *   THEBOOKGUY', -360, -3.2, {
     width: 720,
     align: 'center',
     characterSpacing: 1.2
   });
doc.restore();


// ==========================================
// 3. FRONT COVER (Bestselling Word Search Design)
// ==========================================
// Base Museum Oil Painting
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

// 1. TOP "LARGE PRINT" RIBBON BANNER (Crucial for Amazon Word Search Shoppers)
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

// 3. TOWERING, HIGH-IMPACT "WORD SEARCH" TITLE (Bestseller Format)
doc.fillColor('#ffffff').font('Times-Bold').fontSize(34)
   .text('HISTORICAL', fContentX, ribbonY + 50, { width: fContentW, align: 'center', characterSpacing: 3 });

doc.fillColor('#f5eedc').font('Times-Bold').fontSize(52)
   .text('WORD SEARCH', fContentX, ribbonY + 86, { width: fContentW, align: 'center', characterSpacing: 2 });

doc.fillColor('#d4af37').font('Times-Bold').fontSize(18)
   .text('FLORENCE', fContentX, ribbonY + 148, { width: fContentW, align: 'center', characterSpacing: 4 });

doc.fillColor('#ffffff').font('Times-Bold').fontSize(10.5)
   .text('THE HIGH RENAISSANCE (1450-1550 AD)', fContentX, ribbonY + 172, { width: fContentW, align: 'center', characterSpacing: 1.5 });

// 4. THE PROMINENT PUZZLE GRID PREVIEW + HIGHLIGHTER EFFECT + GOLD MEDALLION
// Center container for grid preview & medallion
const pRowY = ribbonY + 198;
const pGridSize = 8;
const pCellSize = 20; // 160 pt wide grid preview
const pGridW = pGridSize * pCellSize;
const pGridX = fContentX + 24;

// Realistic Word Search Grid Card (White/Cream Card with Shadow)
doc.save();
doc.rect(pGridX - 8, pRowY - 8, pGridW + 16, pGridW + 16).fillAndStroke('#ffffff', '#3a2e20');
doc.restore();

// 8x8 Letters with authentic Renaissance words hidden inside
const previewLetters = [
  ['M', 'E', 'D', 'I', 'C', 'I', 'B', 'K'],
  ['D', 'A', 'N', 'T', 'E', 'V', 'O', 'L'],
  ['U', 'P', 'R', 'A', 'T', 'O', 'T', 'E'],
  ['O', 'I', 'L', 'S', 'A', 'R', 'T', 'O'],
  ['M', 'A', 'S', 'O', 'N', 'R', 'Y', 'N'],
  ['O', 'C', 'R', 'E', 'S', 'T', 'Z', 'A'],
  ['P', 'A', 'T', 'R', 'O', 'N', 'S', 'R'],
  ['G', 'U', 'I', 'L', 'D', 'S', 'E', 'D']
];

// 1. HIGHLIGHTER STROKE 1: Yellow/Gold across "MEDICI" (Row 0, Cols 0-5)
doc.save();
doc.rect(pGridX + 2, pRowY + 2, 6 * pCellSize - 4, pCellSize - 4)
   .fillOpacity(0.45).fill('#ffcc00');
doc.strokeColor('#ffbb00').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + 1, 6 * pCellSize - 2, pCellSize - 2, 4).stroke();
doc.restore();

// 2. HIGHLIGHTER STROKE 2: Turquoise/Cyan down "DUOMO" (Col 0, Rows 0-4)
doc.save();
doc.rect(pGridX + 2, pRowY + 2, pCellSize - 4, 5 * pCellSize - 4)
   .fillOpacity(0.40).fill('#00cccc');
doc.strokeColor('#00bbbb').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + 1, pCellSize - 2, 5 * pCellSize - 2, 4).stroke();
doc.restore();

// 3. HIGHLIGHTER STROKE 3: Coral/Rose across "DANTE" (Row 1, Cols 0-4)
doc.save();
doc.rect(pGridX + 2, pRowY + pCellSize + 2, 5 * pCellSize - 4, pCellSize - 4)
   .fillOpacity(0.35).fill('#ff6666');
doc.strokeColor('#ff5555').lineWidth(1.2)
   .roundedRect(pGridX + 1, pRowY + pCellSize + 1, 5 * pCellSize - 2, pCellSize - 2, 4).stroke();
doc.restore();

// Draw grid lines
doc.save();
doc.strokeColor('#e5dfd5').lineWidth(0.5);
for (let i = 1; i < pGridSize; i++) {
  doc.moveTo(pGridX + i * pCellSize, pRowY).lineTo(pGridX + i * pCellSize, pRowY + pGridW).stroke();
  doc.moveTo(pGridX, pRowY + i * pCellSize).lineTo(pGridX + pGridW, pRowY + i * pCellSize).stroke();
}

// Draw preview letters in crisp dark charcoal
doc.fillColor('#111111').font('Helvetica-Bold').fontSize(11);
for (let r = 0; r < pGridSize; r++) {
  for (let c = 0; c < pGridSize; c++) {
    const cx = pGridX + c * pCellSize;
    const cy = pRowY + r * pCellSize;
    doc.text(previewLetters[r][c], cx, cy + 4.5, { width: pCellSize, align: 'center' });
  }
}
doc.restore();

// Beside the grid: Bestseller Circular Gold Seal Medallion (Right of Grid)
const sealRadius = 58;
const sealCenterX = pGridX + pGridW + 28 + sealRadius;
const sealCenterY = pRowY + pGridW / 2;

doc.save();
// Outer Gold Circle
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

// 5. HIGH-CONTRAST VALUE PROPOSITION PILL (Bold, Dark-Gold Frame for Maximum Visibility)
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
   .text('02.380.09.0501.1450.1550.001', fContentX + 30, btmBoxY + 22, { width: fContentW - 60, align: 'center', characterSpacing: 1.2 });

doc.fillColor('#d8cebb').font('Times-Roman').fontSize(7.5)
   .text('VOLUME 001 * THEBOOKGUY PRESS', fContentX + 30, btmBoxY + 38, { width: fContentW - 60, align: 'center', characterSpacing: 1.0 });
doc.restore();

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`BESTSELLER-GRADE PUZZLE COVER COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Dimensions: ${TOTAL_W.toFixed(2)} x ${TOTAL_H} pt (17.49" x 11.25")`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
