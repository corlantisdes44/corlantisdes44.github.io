// Full-Wrap Cover Compiler for Florence: The High Renaissance (1450-1550 AD)
// Amazon KDP Standard Specifications:
// 100 pages, Cream Paper (0.002252" per page * 100 = 0.2252" spine)
// Dimensions: 17.475" x 11.25" (1258.2 pt x 810 pt)
// Includes 0.125" bleed, full spine, barcode reservation zone, and museum oil painting canvas front cover.
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const IMAGE_PATH = path.join(__dirname, 'cover', 'florence_1450_oil_painting.png');
const OUT_PDF = path.join(__dirname, 'cover', 'florence_1450_cover_fullwrap_300dpi.pdf');

// Total Cover Dimensions in Points (72 pt / inch)
// Width: 0.125" bleed (9 pt) + 8.5" back (612 pt) + 0.225" spine (16.2 pt) + 8.5" front (612 pt) + 0.125" bleed (9 pt) = 1258.2 pt
// Height: 0.125" bleed (9 pt) + 11.0" trim (792 pt) + 0.125" bleed (9 pt) = 810 pt
const TOTAL_W = 1258.2;
const TOTAL_H = 810;

const BLEED = 9;
const TRIM_W = 612;
const TRIM_H = 792;
const SPINE_W = 16.2;

const BACK_LEFT = 0;
const BACK_RIGHT = BLEED + TRIM_W; // 621
const SPINE_LEFT = BACK_RIGHT; // 621
const SPINE_RIGHT = SPINE_LEFT + SPINE_W; // 637.2
const FRONT_LEFT = SPINE_RIGHT; // 637.2
const FRONT_RIGHT = TOTAL_W; // 1258.2

console.log("Generating Full-Wrap Book Cover PDF...");
console.log(`Total Dimensions: ${TOTAL_W} x ${TOTAL_H} pt (17.475" x 11.25")`);
console.log(`Spine Width: ${SPINE_W} pt (0.225")`);

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 0, bottom: 0, left: 0, right: 0 },
  info: {
    Title: "Florence: The High Renaissance (1450-1550 AD) - Full-Wrap Book Cover",
    Author: "TheBookGuy Archival Press",
    Subject: "Full-Wrap Print Cover for Amazon KDP (100 Pages)",
    Keywords: "Florence, Cover, KDP, 300DPI, Full-Wrap, Oil Painting, Renaissance"
  }
});

const writeStream = fs.createWriteStream(OUT_PDF);
doc.pipe(writeStream);

doc.addPage({ size: [TOTAL_W, TOTAL_H], margin: 0 });

// ==========================================
// 1. BACK COVER BACKGROUND (Left Side)
// ==========================================
// Rich deep Tuscan walnut leather background
doc.rect(0, 0, BACK_RIGHT, TOTAL_H).fill('#1a130e');

// Intaglio decorative gold frame on Back Cover
const bFrameX = BLEED + 24;
const bFrameY = BLEED + 24;
const bFrameW = TRIM_W - 48;
const bFrameH = TRIM_H - 48;

doc.save();
doc.strokeColor('#8a6847').lineWidth(1.2);
doc.rect(bFrameX, bFrameY, bFrameW, bFrameH).stroke();

doc.strokeColor('#bfa787').lineWidth(0.5);
doc.rect(bFrameX + 4, bFrameY + 4, bFrameW - 8, bFrameH - 8).stroke();

// Corner gold rosettes
doc.fillColor('#d4af37');
doc.circle(bFrameX + 2, bFrameY + 2, 2.5).fill();
doc.circle(bFrameX + bFrameW - 2, bFrameY + 2, 2.5).fill();
doc.circle(bFrameX + 2, bFrameY + bFrameH - 2, 2.5).fill();
doc.circle(bFrameX + bFrameW - 2, bFrameY + bFrameH - 2, 2.5).fill();
doc.restore();

// Back Cover Typography
const bContentX = bFrameX + 24;
const bContentW = bFrameW - 48;

// Series Header
doc.fillColor('#c5a880').font('Times-Bold').fontSize(8.5)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', bContentX, bFrameY + 28, { width: bContentW, align: 'center', characterSpacing: 2 });
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(bContentX + 60, bFrameY + 44).lineTo(bContentX + bContentW - 60, bFrameY + 44).stroke();

// Back Main Title
doc.fillColor('#f5eedc').font('Times-Bold').fontSize(22)
   .text('FLORENCE', bContentX, bFrameY + 60, { width: bContentW, align: 'center', characterSpacing: 2.5 });
doc.fillColor('#d4b382').font('Times-Bold').fontSize(11)
   .text('THE HIGH RENAISSANCE • 1450–1550 AD', bContentX, bFrameY + 88, { width: bContentW, align: 'center', characterSpacing: 1.2 });

doc.strokeColor('#bfa787').lineWidth(0.6)
   .moveTo(bContentX + 40, bFrameY + 110).lineTo(bContentX + bContentW - 40, bFrameY + 110).stroke();

// Blurb Paragraphs
const blurbP1 = `Step into the workshops, basilicas, and banking halls of Renaissance Florence between 1450 and 1550 AD—the golden century that transformed art, science, and the architecture of the Western mind.`;

const blurbP2 = `From the daring engineering of Brunelleschi's Duomo and the bustling bottegas of Verrocchio and Leonardo, to Michelangelo's heroic David, Botticelli's mythological visions, and the financial empire of the Medici, this archival edition reconstructs eighty foundational dimensions of Florentine civilization.`;

doc.fillColor('#e8decb').font('Times-Roman').fontSize(10.2)
   .text(blurbP1, bContentX, bFrameY + 130, { width: bContentW, align: 'justify', lineGap: 4.5 });

doc.fillColor('#e8decb').font('Times-Roman').fontSize(10.2)
   .text(blurbP2, bContentX, bFrameY + 185, { width: bContentW, align: 'justify', lineGap: 4.5 });

// Key Features List
const features = [
  {
    title: "80 CURATED HISTORICAL THEMES",
    desc: "1,440 hand-verified historical terms chronicling artists, guilds, statecraft, philosophy, and architectural monuments."
  },
  {
    title: "LARGE-PRINT 16×16 MATRICES",
    desc: "Engineered for superior visual comfort with high-contrast typography set upon authentic antique vellum grounds."
  },
  {
    title: "MUSEUM CANVAS OIL ARTWORK",
    desc: "Rich Renaissance atmospheric artwork faded into every puzzle background for a museum-grade archival aesthetic."
  },
  {
    title: "FULL ARCHIVAL SOLUTION REGISTER",
    desc: "Complete coordinate mapping [Row, Col] for all eighty matrices indexed in the concluding folios."
  }
];

let fY = bFrameY + 285;
features.forEach(f => {
  doc.fillColor('#d4af37').font('Times-Bold').fontSize(9.5)
     .text(`◆  ${f.title}`, bContentX, fY, { characterSpacing: 0.8 });
  fY += 14;
  doc.fillColor('#d8cebb').font('Times-Roman').fontSize(8.8)
     .text(f.desc, bContentX + 16, fY, { width: bContentW - 16, lineGap: 2.5 });
  fY += 28;
});

// Archival Registry Specification Box
const codeBoxY = bFrameY + 480;
const codeBoxH = 68;
doc.save();
doc.rect(bContentX, codeBoxY, bContentW, codeBoxH).fillAndStroke('rgba(38, 28, 20, 0.95)', '#8a6847');
doc.rect(bContentX + 3, codeBoxY + 3, bContentW - 6, codeBoxH - 6).strokeColor('#bfa787').lineWidth(0.5).stroke();

doc.fillColor('#d4b382').font('Times-Bold').fontSize(8)
   .text('OFFICIAL ARCHIVAL CLASSIFICATION', bContentX, codeBoxY + 10, { width: bContentW, align: 'center', characterSpacing: 1.2 });
doc.fillColor('#f5eedc').font('Courier-Bold').fontSize(10)
   .text('02.380.09.0501.1450.1550.001', bContentX, codeBoxY + 25, { width: bContentW, align: 'center', characterSpacing: 1.0 });
doc.fillColor('#c5a880').font('Times-Roman').fontSize(7.5)
   .text('[02 Europe] • [380 Italy] • [09 Tuscany] • [0501 Florence] • [1450.1550 AD] • [Vol 001]', bContentX, codeBoxY + 42, { width: bContentW, align: 'center' });
doc.restore();

// Official Imprint Line
doc.fillColor('#c5a880').font('Times-Bold').fontSize(8.5)
   .text('THEBOOKGUY ARCHIVAL PRESS', bContentX, bFrameY + 575, { characterSpacing: 1.5 });
doc.fillColor('#a8947b').font('Times-Roman').fontSize(7.5)
   .text('Digital Archive: https://corlantisdes44.github.io', bContentX, bFrameY + 589);

// Standard Amazon KDP Barcode Reservation Area (2.0" x 1.2" = 144 x 86.4 pt)
// Placed in lower right corner of the back cover, >0.25" (18 pt) from spine and bottom
const barcodeW = 144;
const barcodeH = 86.4;
const barcodeX = BACK_RIGHT - BLEED - 18 - barcodeW; // ~450 pt
const barcodeY = TOTAL_H - BLEED - 18 - barcodeH;   // ~696 pt

doc.save();
doc.rect(barcodeX, barcodeY, barcodeW, barcodeH).fill('#ffffff');
doc.strokeColor('#cccccc').lineWidth(0.5).rect(barcodeX, barcodeY, barcodeW, barcodeH).stroke();

doc.fillColor('#888888').font('Helvetica').fontSize(7)
   .text('BARCODE RESERVATION ZONE', barcodeX, barcodeY + 32, { width: barcodeW, align: 'center' });
doc.fillColor('#aaaaaa').font('Helvetica').fontSize(6)
   .text('(Amazon KDP will imprint ISBN barcode here)', barcodeX, barcodeY + 44, { width: barcodeW, align: 'center' });
doc.restore();


// ==========================================
// 2. SPINE (Center 0.225" / 16.2 pt)
// ==========================================
// Deep leather spine fill
doc.rect(SPINE_LEFT, 0, SPINE_W, TOTAL_H).fill('#16100b');

// Vertical gold trim lines
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(SPINE_LEFT, 0).lineTo(SPINE_LEFT, TOTAL_H).stroke();
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(SPINE_RIGHT, 0).lineTo(SPINE_RIGHT, TOTAL_H).stroke();

// Rotated Vertical Spine Text (Read top-to-bottom)
doc.save();
// Center of spine is SPINE_LEFT + SPINE_W/2 = 629.1 pt
doc.translate(SPINE_LEFT + SPINE_W / 2, TOTAL_H / 2);
doc.rotate(90);

doc.fillColor('#f5eedc').font('Times-Bold').fontSize(7.2)
   .text('FLORENCE: THE HIGH RENAISSANCE (1450–1550 AD)    ◆    VOL. 001    ◆    THEBOOKGUY', -360, -3.2, {
     width: 720,
     align: 'center',
     characterSpacing: 1.2
   });
doc.restore();


// ==========================================
// 3. FRONT COVER (Right Side)
// ==========================================
// Check and draw oil painting on canvas
if (fs.existsSync(IMAGE_PATH)) {
  const frontW = TOTAL_W - FRONT_LEFT;
  // Draw full front cover oil painting extending into bleed and spine edge
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

// Front Cover Atmospheric Overlays for Typographic Elegance
// Top dark gradient / vignette box for header readability
doc.save();
doc.rect(FRONT_LEFT, 0, TOTAL_W - FRONT_LEFT, 290).fillOpacity(0.55).fill('#120d09');
doc.restore();

// Bottom dark gradient / vignette box for footer readability
doc.save();
doc.rect(FRONT_LEFT, TOTAL_H - 190, TOTAL_W - FRONT_LEFT, 190).fillOpacity(0.65).fill('#120d09');
doc.restore();

// Intaglio Gold Frame on Front Cover
const fFrameX = FRONT_LEFT + BLEED + 18;
const fFrameY = BLEED + 18;
const fFrameW = TRIM_W - 36;
const fFrameH = TRIM_H - 36;

doc.save();
doc.strokeColor('#d4af37').lineWidth(1.2);
doc.rect(fFrameX, fFrameY, fFrameW, fFrameH).stroke();

doc.strokeColor('#f5eedc').lineWidth(0.5);
doc.rect(fFrameX + 4, fFrameY + 4, fFrameW - 8, fFrameH - 8).stroke();

// Corner fleurons
doc.fillColor('#d4af37');
doc.circle(fFrameX + 2, fFrameY + 2, 2.5).fill();
doc.circle(fFrameX + fFrameW - 2, fFrameY + 2, 2.5).fill();
doc.circle(fFrameX + 2, fFrameY + fFrameH - 2, 2.5).fill();
doc.circle(fFrameX + fFrameW - 2, fFrameY + fFrameH - 2, 2.5).fill();
doc.restore();

const fContentX = fFrameX + 16;
const fContentW = fFrameW - 32;

// Top Series Header
doc.fillColor('#e5cfa8').font('Times-Bold').fontSize(9.5)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', fContentX, fFrameY + 28, { width: fContentW, align: 'center', characterSpacing: 3.0 });

doc.strokeColor('#d4af37').lineWidth(0.8)
   .moveTo(fContentX + 40, fFrameY + 46).lineTo(fContentX + fContentW - 40, fFrameY + 46).stroke();

// Main Title: FLORENCE
doc.fillColor('#ffffff').font('Times-Bold').fontSize(46)
   .text('FLORENCE', fContentX, fFrameY + 70, { width: fContentW, align: 'center', characterSpacing: 4.0 });

doc.fillColor('#d4af37').font('Times-Bold').fontSize(14)
   .text('THE HIGH RENAISSANCE • 1450–1550 AD', fContentX, fFrameY + 130, { width: fContentW, align: 'center', characterSpacing: 2.0 });

doc.strokeColor('#f5eedc').lineWidth(0.8)
   .moveTo(fContentX + 60, fFrameY + 154).lineTo(fContentX + fContentW - 60, fFrameY + 154).stroke();

// Large Print Badge
doc.fillColor('#f5eedc').font('Times-Bold').fontSize(11)
   .text('LARGE PRINT HISTORICAL WORD SEARCH', fContentX, fFrameY + 172, { width: fContentW, align: 'center', characterSpacing: 1.5 });

doc.fillColor('#d8cebb').font('Times-Italic').fontSize(9.5)
   .text('80 Archival Puzzles • 16×16 Matrices • 1,440 Historical Terms', fContentX, fFrameY + 192, { width: fContentW, align: 'center', characterSpacing: 0.5 });


// Bottom Archival Stamp & Classification Pill
const btmBoxY = TOTAL_H - BLEED - 145;
const btmBoxH = 65;
doc.save();
doc.rect(fContentX + 20, btmBoxY, fContentW - 40, btmBoxH).fillOpacity(0.85).fill('#16100b');
doc.rect(fContentX + 20, btmBoxY, fContentW - 40, btmBoxH).strokeColor('#d4af37').lineWidth(0.8).stroke();

doc.fillColor('#d4af37').font('Times-Bold').fontSize(8.5)
   .text('ARCHIVAL REGISTRY CODE', fContentX + 20, btmBoxY + 10, { width: fContentW - 40, align: 'center', characterSpacing: 1.5 });

doc.fillColor('#ffffff').font('Courier-Bold').fontSize(11.5)
   .text('02.380.09.0501.1450.1550.001', fContentX + 20, btmBoxY + 25, { width: fContentW - 40, align: 'center', characterSpacing: 1.2 });

doc.fillColor('#d8cebb').font('Times-Roman').fontSize(7.5)
   .text('VOLUME 001 • THEBOOKGUY ARCHIVAL PRESS', fContentX + 20, btmBoxY + 44, { width: fContentW - 40, align: 'center', characterSpacing: 1.0 });
doc.restore();

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`FULL-WRAP PRINT-READY COVER PDF COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`Dimensions: ${TOTAL_W} x ${TOTAL_H} pt (17.475" x 11.25")`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`======================================================\n`);
});
