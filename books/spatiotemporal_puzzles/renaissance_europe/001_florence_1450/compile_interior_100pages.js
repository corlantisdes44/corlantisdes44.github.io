// Interior Compiler: Florence: The High Renaissance (1450-1550 AD)
// Clean, high-contrast, large-print puzzle book format.
// Zero explanatory essays/paragraphs. Zero answer key clutter.
// Pages 1-2: Front matter (Title & minimal copyright).
// Pages 3-102: Exactly 100 Full-Page Puzzles (102 pages total).
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
    Keywords: "Florence, Renaissance, Word Search, Puzzle Book, History, Large Print",
    Creator: "TheBookGuy Publishing Engine",
    Producer: "TheBookGuy Press"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

// Open image once for efficient PDF reuse (keeps PDF compact)
let bgImage = null;
if (fs.existsSync(IMAGE_PATH)) {
  bgImage = doc.openImage(IMAGE_PATH);
  console.log("Background oil painting image loaded successfully.");
}

// Helper to get margin positions based on page parity
function getPageBounds(pageNumber) {
  const isOdd = pageNumber % 2 !== 0;
  // Odd pages (recto): Inside (gutter) on LEFT, outside on RIGHT
  // Even pages (verso): Inside (gutter) on RIGHT, outside on LEFT
  const left = isOdd ? GUTTER_MARGIN : OUTSIDE_MARGIN;
  const right = PAGE_W - (isOdd ? OUTSIDE_MARGIN : GUTTER_MARGIN);
  const width = right - left;
  return { isOdd, left, right, width, top: 36, bottom: PAGE_H - 36 };
}

// Clean, high-contrast, minimalist page ground & subtle watermark
function drawCleanPageGround(b) {
  // Clean, warm natural page base
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#faf8f5');

  // Single clean, refined outer border (0.75 pt)
  doc.save();
  doc.strokeColor('#3a3530').lineWidth(0.75);
  doc.rect(b.left - 8, 28, b.width + 16, PAGE_H - 56).stroke();
  doc.restore();

  // Subtle Renaissance canvas oil painting watermark (6% opacity - non-intrusive)
  if (bgImage) {
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
// PAGE 1: TITLE PAGE (Recto)
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
// PAGE 2: MINIMAL COPYRIGHT (Verso)
// ==========================================
console.log("Compiling Page 2: Minimal Copyright...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b2 = getPageBounds(2);
drawCleanPageGround(b2);

// Clean, minimal copyright block at bottom (no walls of text, no field guide)
const crY = 640;
doc.strokeColor('#3a3530').lineWidth(0.6)
   .moveTo(b2.left + 60, crY).lineTo(b2.right - 60, crY).stroke();

doc.fillColor('#222222').font('Times-Bold').fontSize(9)
   .text('Historical Word Search: Florence (1450-1550 AD)', b2.left, crY + 16, { width: b2.width, align: 'center' });

doc.fillColor('#555555').font('Times-Roman').fontSize(8)
   .text('Volume 001 - The Spatiotemporal Puzzle Series\nClassification Code: 02.380.09.0501.1450.1550.001\nCopyright (c) 2026 TheBookGuy Press. All rights reserved.\nPrinted on Archival Cream Paper * Large Print Edition', b2.left, crY + 30, { width: b2.width, align: 'center', lineGap: 3 });


// ==========================================
// PAGES 3 TO 102: EXACTLY 100 PUZZLES
// ==========================================
console.log("Compiling 100 Historical Puzzle Pages (Pages 3 to 102)...");

const CELL_SIZE = 23.5; // 16 * 23.5 = 376 pt grid width
const GRID_W = 16 * CELL_SIZE; // 376 pt

puzzles.forEach((p, idx) => {
  const pageNum = idx + 3; // Puzzles start immediately on Page 3
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawCleanPageGround(b);

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

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`COMPLETE 100-PUZZLE INTERIOR COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Exact Pages: ${puzzles.length + 2} pages`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
