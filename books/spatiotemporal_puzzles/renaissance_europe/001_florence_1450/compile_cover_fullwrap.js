// Full-Wrap Cover Compiler: Florence (1450-1550 AD)
// Unmistakable, commercial PUZZLE BOOK aesthetic.
// Featuring prominent "HISTORICAL WORD SEARCH" titling, visual sample puzzle grid graphic with highlighted words,
// 100 Large Print Puzzles badge, and museum oil painting canvas background.
// ZERO unicode characters in text (prevents '% AE' encoding bug).
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const IMAGE_PATH = path.join(__dirname, 'cover', 'florence_1450_oil_painting.png');
const OUT_PDF = path.join(__dirname, 'cover', 'florence_1450_cover_fullwrap_300dpi.pdf');

// Total Cover Dimensions in Points (72 pt / inch)
// 102 pages on cream paper: spine = 102 * 0.002252" = 0.230" (16.56 pt)
// Width: 0.125" bleed (9 pt) + 8.5" back (612 pt) + 0.230" spine (16.56 pt) + 8.5" front (612 pt) + 0.125" bleed (9 pt) = 1258.56 pt
// Height: 0.125" bleed (9 pt) + 11.0" trim (792 pt) + 0.125" bleed (9 pt) = 810 pt
const TOTAL_W = 1258.56;
const TOTAL_H = 810;

const BLEED = 9;
const TRIM_W = 612;
const TRIM_H = 792;
const SPINE_W = 16.56;

const BACK_LEFT = 0;
const BACK_RIGHT = BLEED + TRIM_W; // 621
const SPINE_LEFT = BACK_RIGHT; // 621
const SPINE_RIGHT = SPINE_LEFT + SPINE_W; // 637.56
const FRONT_LEFT = SPINE_RIGHT; // 637.56
const FRONT_RIGHT = TOTAL_W; // 1258.56

console.log("Generating Full-Wrap PUZZLE BOOK Cover PDF...");
console.log(`Dimensions: ${TOTAL_W} x ${TOTAL_H} pt (17.48" x 11.25")`);
console.log(`Spine Width: ${SPINE_W} pt (0.230")`);

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: "Historical Word Search: Florence (1450-1550 AD) - 100 Large Print Puzzles",
    Author: "TheBookGuy Press",
    Subject: "Commercial Puzzle Book Full-Wrap Cover",
    Keywords: "Word Search, Puzzle Book, Florence, Renaissance, Large Print, KDP"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

doc.addPage({ size: [TOTAL_W, TOTAL_H], margin: 0 });

// ==========================================
// 1. BACK COVER (Left Side)
// ==========================================
// Deep, rich Renaissance Florentine walnut leather tone
doc.rect(0, 0, BACK_RIGHT, TOTAL_H).fill('#1a1410');

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

// Top Series Badge
doc.fillColor('#d4af37').font('Times-Bold').fontSize(9)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', bContentX, bFrameY + 28, { width: bContentW, align: 'center', characterSpacing: 2 });
doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(bContentX + 50, bFrameY + 44).lineTo(bContentX + bContentW - 50, bFrameY + 44).stroke();

// Main Back Header: Direct Puzzle Appeal
doc.fillColor('#ffffff').font('Times-Bold').fontSize(22)
   .text('CHALLENGE YOUR MIND IN', bContentX, bFrameY + 62, { width: bContentW, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(24)
   .text('RENAISSANCE FLORENCE', bContentX, bFrameY + 90, { width: bContentW, align: 'center', characterSpacing: 2 });

doc.strokeColor('#b89758').lineWidth(0.6)
   .moveTo(bContentX + 30, bFrameY + 124).lineTo(bContentX + bContentW - 30, bFrameY + 124).stroke();

// Punchy Puzzle Book Pitch (No academic essays!)
const backPitch = `Immerse yourself in the golden age of art, genius, and architecture. Between 1450 and 1550 AD, Florence forged the modern world. This masterfully crafted collection brings the High Renaissance to life through 100 large-print word search puzzles.

From Brunelleschi's magnificent Duomo and Leonardo da Vinci's restless notebooks, to Michelangelo's David and the great merchant bottegas, every puzzle is an engaging journey into history.`;

doc.fillColor('#f0e6d6').font('Times-Roman').fontSize(10.5)
   .text(backPitch, bContentX, bFrameY + 140, { width: bContentW, align: 'justify', lineGap: 5 });

// 4 Commercial Puzzle Highlights with clean vector bullets
const puzzleFeatures = [
  {
    title: "100 THEMATIC PUZZLES",
    desc: "1,800 authentic historical terms chronicling artists, monuments, guilds, philosophy, and statecraft."
  },
  {
    title: "EASY-ON-THE-EYES LARGE PRINT",
    desc: "Spacious 16x16 letter matrices set on bright, crisp backgrounds for effortless reading and strain-free solving."
  },
  {
    title: "GENUINE MUSEUM CANVAS ART",
    desc: "Rich Renaissance oil painting atmosphere embedded into every puzzle background for a premium aesthetic."
  },
  {
    title: "RELAXING & EDUCATIONAL",
    desc: "The perfect screen-free mental workout for history lovers, puzzle enthusiasts, and travelers alike."
  }
];

let pfY = bFrameY + 285;
puzzleFeatures.forEach(f => {
  // Vector bullet dot (NO unicode characters!)
  doc.save();
  doc.fillColor('#d4af37');
  doc.circle(bContentX + 4, pfY + 5, 2.5).fill();
  doc.restore();

  doc.fillColor('#d4af37').font('Times-Bold').fontSize(10)
     .text(f.title, bContentX + 16, pfY, { characterSpacing: 0.8 });
  pfY += 15;

  doc.fillColor('#e0d5c3').font('Times-Roman').fontSize(9)
     .text(f.desc, bContentX + 16, pfY, { width: bContentW - 16, lineGap: 3 });
  pfY += 30;
});

// Classification Box
const cBoxY = bFrameY + 490;
const cBoxH = 65;
doc.save();
doc.rect(bContentX, cBoxY, bContentW, cBoxH).fillAndStroke('#221b14', '#b89758');
doc.fillColor('#d4af37').font('Times-Bold').fontSize(8.5)
   .text('OFFICIAL ARCHIVE CLASSIFICATION', bContentX, cBoxY + 10, { width: bContentW, align: 'center', characterSpacing: 1.2 });
doc.fillColor('#ffffff').font('Courier-Bold').fontSize(10.5)
   .text('02.380.09.0501.1450.1550.001', bContentX, cBoxY + 26, { width: bContentW, align: 'center', characterSpacing: 1 });
doc.fillColor('#c5b398').font('Times-Roman').fontSize(7.5)
   .text('Europe * Italy * Tuscany * Florence * 1450-1550 AD * Volume 001', bContentX, cBoxY + 44, { width: bContentW, align: 'center' });
doc.restore();

// Official Imprint Line
doc.fillColor('#d4af37').font('Times-Bold').fontSize(8.5)
   .text('THEBOOKGUY PRESS', bContentX, bFrameY + 580, { characterSpacing: 1.5 });
doc.fillColor('#a8947b').font('Times-Roman').fontSize(7.5)
   .text('Digital Storefront: https://corlantisdes44.github.io', bContentX, bFrameY + 594);

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
// 2. SPINE (Center 0.230" / 16.56 pt)
// ==========================================
doc.rect(SPINE_LEFT, 0, SPINE_W, TOTAL_H).fill('#120d09');

doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(SPINE_LEFT, 0).lineTo(SPINE_LEFT, TOTAL_H).stroke();
doc.strokeColor('#b89758').lineWidth(0.8)
   .moveTo(SPINE_RIGHT, 0).lineTo(SPINE_RIGHT, TOTAL_H).stroke();

// Spine Text - Clean ASCII only (NO unicode diamond, NO % AE!)
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
// 3. FRONT COVER (Right Side - Commercial PUZZLE BOOK)
// ==========================================
// 1. Base Museum Oil Painting
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

// 2. High-End Dark Dramatic Vignettes (Top and Bottom)
doc.save();
doc.rect(FRONT_LEFT, 0, TOTAL_W - FRONT_LEFT, 310).fillOpacity(0.70).fill('#0f0b08');
doc.restore();

doc.save();
doc.rect(FRONT_LEFT, TOTAL_H - 220, TOTAL_W - FRONT_LEFT, 220).fillOpacity(0.78).fill('#0f0b08');
doc.restore();

// 3. Front Intaglio Gold Frame
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

// 4. TOP BADGE: Series Banner
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(9.5)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', fContentX, fFrameY + 24, { width: fContentW, align: 'center', characterSpacing: 2.5 });

doc.strokeColor('#d4af37').lineWidth(0.8)
   .moveTo(fContentX + 50, fFrameY + 40).lineTo(fContentX + fContentW - 50, fFrameY + 40).stroke();

// 5. GIANT COMMANDING PUZZLE BOOK TITLE
doc.fillColor('#ffffff').font('Times-Bold').fontSize(36)
   .text('HISTORICAL', fContentX, fFrameY + 54, { width: fContentW, align: 'center', characterSpacing: 3 });

doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(46)
   .text('WORD SEARCH', fContentX, fFrameY + 94, { width: fContentW, align: 'center', characterSpacing: 2 });

doc.fillColor('#ffffff').font('Times-Bold').fontSize(18)
   .text('FLORENCE', fContentX, fFrameY + 150, { width: fContentW, align: 'center', characterSpacing: 4 });

doc.fillColor('#d4af37').font('Times-Bold').fontSize(11)
   .text('THE HIGH RENAISSANCE (1450-1550 AD)', fContentX, fFrameY + 174, { width: fContentW, align: 'center', characterSpacing: 1.5 });

// 6. PROMINENT COMMERCIAL PUZZLE BADGE
const badgeW = 320;
const badgeX = fContentX + (fContentW - badgeW) / 2;
const badgeY = fFrameY + 196;
doc.save();
doc.rect(badgeX, badgeY, badgeW, 28).fillAndStroke('#d4af37', '#ffffff');
doc.fillColor('#111111').font('Times-Bold').fontSize(12)
   .text('100 LARGE-PRINT PUZZLES', badgeX, badgeY + 7.5, { width: badgeW, align: 'center', characterSpacing: 1.5 });
doc.restore();

// 7. VISUAL PUZZLE GRID PREVIEW ELEMENT (Shows at first glance that it's a puzzle book!)
const sampleGridSize = 7;
const sampleCellSize = 19;
const sampleGridW = sampleGridSize * sampleCellSize; // 133 pt
const sampleGridX = fContentX + (fContentW - sampleGridW) / 2;
const sampleGridY = badgeY + 46;

// Semi-transparent decorative grid backdrop
doc.save();
doc.rect(sampleGridX - 8, sampleGridY - 8, sampleGridW + 16, sampleGridH = sampleGridW + 16)
   .fillOpacity(0.85).fill('#16100b');
doc.rect(sampleGridX - 8, sampleGridY - 8, sampleGridW + 16, sampleGridW + 16)
   .strokeColor('#d4af37').lineWidth(1).stroke();

// Sample letters containing visible words: "MEDICI", "DUOMO"
const sampleLetters = [
  ['M', 'E', 'D', 'I', 'C', 'I', 'S'],
  ['D', 'A', 'N', 'T', 'E', 'B', 'A'],
  ['U', 'R', 'N', 'A', 'R', 'N', 'O'],
  ['O', 'I', 'L', 'S', 'F', 'O', 'R'],
  ['M', 'C', 'R', 'E', 'S', 'T', 'I'],
  ['O', 'A', 'R', 'T', 'G', 'U', 'N'],
  ['P', 'A', 'T', 'R', 'O', 'N', 'S']
];

// Highlight "MEDICI" across row 0
doc.save();
doc.rect(sampleGridX + 2, sampleGridY + 2, 6 * sampleCellSize - 4, sampleCellSize - 4)
   .fillOpacity(0.40).fill('#d4af37');
doc.strokeColor('#d4af37').lineWidth(1.2)
   .roundedRect(sampleGridX + 1, sampleGridY + 1, 6 * sampleCellSize - 2, sampleCellSize - 2, 4).stroke();
doc.restore();

// Highlight "DUOMO" down col 0
doc.save();
doc.rect(sampleGridX + 2, sampleGridY + sampleCellSize + 2, sampleCellSize - 4, 5 * sampleCellSize - 4)
   .fillOpacity(0.40).fill('#d4af37');
doc.strokeColor('#d4af37').lineWidth(1.2)
   .roundedRect(sampleGridX + 1, sampleGridY + sampleCellSize + 1, sampleCellSize - 2, 5 * sampleCellSize - 2, 4).stroke();
doc.restore();

// Draw sample letters
doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(10);
for (let r = 0; r < sampleGridSize; r++) {
  for (let c = 0; c < sampleGridSize; c++) {
    const cx = sampleGridX + c * sampleCellSize;
    const cy = sampleGridY + r * sampleCellSize;
    doc.text(sampleLetters[r][c], cx, cy + 4, { width: sampleCellSize, align: 'center' });
  }
}
doc.restore();

// Subtitle under sample grid
doc.fillColor('#e0d5c3').font('Times-Italic').fontSize(9)
   .text('1,800 Historical Terms * 16x16 Matrices * Master Bottegas & Art', fContentX, sampleGridY + sampleGridW + 16, { width: fContentW, align: 'center' });

// 8. BOTTOM ARCHIVAL CODE STAMP PILL
const btmBoxY = TOTAL_H - BLEED - 135;
const btmBoxH = 60;
doc.save();
doc.rect(fContentX + 30, btmBoxY, fContentW - 60, btmBoxH).fillOpacity(0.88).fill('#16100b');
doc.rect(fContentX + 30, btmBoxY, fContentW - 60, btmBoxH).strokeColor('#d4af37').lineWidth(0.8).stroke();

doc.fillColor('#d4af37').font('Times-Bold').fontSize(8)
   .text('ARCHIVAL REGISTRY CODE', fContentX + 30, btmBoxY + 8, { width: fContentW - 60, align: 'center', characterSpacing: 1.5 });

doc.fillColor('#ffffff').font('Courier-Bold').fontSize(11)
   .text('02.380.09.0501.1450.1550.001', fContentX + 30, btmBoxY + 22, { width: fContentW - 60, align: 'center', characterSpacing: 1.2 });

doc.fillColor('#d8cebb').font('Times-Roman').fontSize(7.5)
   .text('VOLUME 001 * THEBOOKGUY PRESS', fContentX + 30, btmBoxY + 40, { width: fContentW - 60, align: 'center', characterSpacing: 1.0 });
doc.restore();

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`PUZZLE BOOK FULL-WRAP COVER COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Dimensions: ${TOTAL_W} x ${TOTAL_H} pt (17.48" x 11.25")`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
