// Compiler for 100-Page Interior PDF of Florence: The High Renaissance (1450-1550 AD)
// Format: 8.5" x 11" (612 x 792 pt), Cream Paper, KDP Large Print Word Search Standards
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const DATA_PATH = path.join(__dirname, 'data', 'all_80_puzzles.json');
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
// Top: 36 pt (0.5 in)
// Bottom: 36 pt (0.5 in)
const GUTTER_MARGIN = 54;
const OUTSIDE_MARGIN = 38;
const CONTENT_W = PAGE_W - GUTTER_MARGIN - OUTSIDE_MARGIN; // 520 pt

const doc = new PDFDocument({
  autoFirstPage: false,
  margins: { top: 36, bottom: 36, left: 38, right: 38 },
  info: {
    Title: "Florence: The High Renaissance (1450-1550 AD) - Large Print Word Search",
    Author: "TheBookGuy Archival Press",
    Subject: "Spatiotemporal Historical Puzzle Series - Volume 001",
    Keywords: "Florence, Renaissance, Medici, Word Search, History, Large Print, Puzzles",
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

// Helper to draw standard antique vellum background and border
function drawVellumBackground(b) {
  // Base antique paper fill
  doc.rect(0, 0, PAGE_W, PAGE_H).fill('#f7f2e7');

  // Intaglio plate-mark border
  doc.save();
  doc.strokeColor('#8a6847').lineWidth(1.2);
  doc.rect(b.left - 10, 28, b.width + 20, PAGE_H - 56).stroke();

  doc.strokeColor('#bfa787').lineWidth(0.5);
  doc.rect(b.left - 7, 31, b.width + 14, PAGE_H - 62).stroke();

  // Corner fleurons
  doc.fillColor('#8a6847');
  doc.circle(b.left - 8.5, 29.5, 2).fill();
  doc.circle(b.right + 8.5, 29.5, 2).fill();
  doc.circle(b.left - 8.5, PAGE_H - 29.5, 2).fill();
  doc.circle(b.right + 8.5, PAGE_H - 29.5, 2).fill();
  doc.restore();

  // Faded background oil painting watermark (10% opacity)
  if (bgImage) {
    doc.save();
    doc.fillOpacity(0.10);
    doc.image(bgImage, b.left - 5, 60, {
      width: b.width + 10,
      height: PAGE_H - 120,
      fit: [b.width + 10, PAGE_H - 120],
      align: 'center',
      valign: 'center'
    });
    doc.restore();
  }
}

// ==========================================
// PAGE 1: HALF-TITLE / FRONTISPIECE (Recto)
// ==========================================
console.log("Compiling Page 1: Half Title...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b1 = getPageBounds(1);
drawVellumBackground(b1);

doc.fillColor('#7c6248').font('Times-Bold').fontSize(8.5)
   .text('ARCHIVAL REGISTRY OF HUMAN CIVILIZATION', b1.left, 80, { width: b1.width, align: 'center', characterSpacing: 1.5 });

doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(b1.left + 80, 96).lineTo(b1.right - 80, 96).stroke();

doc.fillColor('#4a3520').font('Times-Roman').fontSize(11)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES', b1.left, 130, { width: b1.width, align: 'center', characterSpacing: 2.0 });

doc.fillColor('#241b12').font('Times-Bold').fontSize(34)
   .text('FLORENCE', b1.left, 160, { width: b1.width, align: 'center', characterSpacing: 3.0 });

doc.fillColor('#5c4228').font('Times-Bold').fontSize(14)
   .text('THE HIGH RENAISSANCE (1450–1550 AD)', b1.left, 205, { width: b1.width, align: 'center', characterSpacing: 1.2 });

doc.strokeColor('#bfa787').lineWidth(1)
   .moveTo(b1.left + 120, 230).lineTo(b1.right - 120, 230).stroke();

doc.fillColor('#241b12').font('Times-Roman').fontSize(10.5)
   .text('80 Large-Print Historical Word Searches • 16×16 Matrices\nWith Full Archival Coordinate Register & Historical Solutions', b1.left, 250, { width: b1.width, align: 'center', lineGap: 4 });

// Classical Archival Cartouche
const boxW = 320;
const boxX = b1.left + (b1.width - boxW) / 2;
doc.save();
doc.rect(boxX, 360, boxW, 140).fillAndStroke('rgba(253, 250, 244, 0.95)', '#8a6847');
doc.rect(boxX + 3, 363, boxW - 6, 134).strokeColor('#c8b59e').lineWidth(0.6).stroke();

doc.fillColor('#4a3520').font('Times-Bold').fontSize(9)
   .text('COLLECTION LOCATOR SPECIFICATIONS', boxX, 375, { width: boxW, align: 'center', characterSpacing: 1.2 });
doc.strokeColor('#8a6847').lineWidth(0.6).moveTo(boxX + 30, 388).lineTo(boxX + boxW - 30, 388).stroke();

doc.fillColor('#241b12').font('Courier-Bold').fontSize(10)
   .text('REGISTRY: 02.380.09.0501.1450.1550.001', boxX, 400, { width: boxW, align: 'center' });

doc.fillColor('#5c4228').font('Times-Roman').fontSize(8.5)
   .text('[02] Continent: Europe\n[380] Sovereign Territory: Italy\n[09] Province / Cultural Basin: Tuscany\n[0501] City Commune: Florence (Firenze)\n[1450.1550] Chronological Epoch: 1450–1550 AD\n[001] Series Archival Volume: 001', boxX + 24, 420, { width: boxW - 48, align: 'left', lineGap: 2.5 });
doc.restore();

doc.fillColor('#5c4228').font('Times-Bold').fontSize(10)
   .text('THEBOOKGUY ARCHIVAL PRESS', b1.left, 690, { width: b1.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#7c6248').font('Times-Roman').fontSize(8)
   .text('HISTORICAL PUZZLE EDITIONS • FIRST PRINTING', b1.left, 705, { width: b1.width, align: 'center', characterSpacing: 1 });


// ==========================================
// PAGE 2: ARCHIVAL COLOPHON & COPYRIGHT (Verso)
// ==========================================
console.log("Compiling Page 2: Copyright & Colophon...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b2 = getPageBounds(2);
drawVellumBackground(b2);

doc.fillColor('#4a3520').font('Times-Bold').fontSize(11)
   .text('ARCHIVAL CATALOGING & PUBLICATION REGISTER', b2.left, 80, { width: b2.width, align: 'center', characterSpacing: 1.2 });
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(b2.left + 50, 96).lineTo(b2.right - 50, 96).stroke();

const colophonText = `THE SPATIOTEMPORAL PUZZLE SERIES
Volume 001: Florence: The High Renaissance (1450–1550 AD)

Published by TheBookGuy Archival Press
Digital Storefront & Registry: https://corlantisdes44.github.io

Classification Code: 02.380.09.0501.1450.1550.001
Series Matrix: Place × Epoch Historical Puzzle Collection

Copyright © 2026 TheBookGuy Press. All rights reserved.
No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means, electronic, mechanical, photocopying, recording, scanning, or otherwise, except as permitted under Section 107 or 108 of the 1976 United States Copyright Act, without either the prior written permission of the Publisher.

PRINTING & TYPOGRAPHIC SPECIFICATIONS
Interior Design: Classical Archival Vellum & Intaglio Border Format
Grid Specification: 16 × 16 Large-Print Matrix (18pt Visual Legibility Standard)
Target Vocabulary: 1,440 Hand-Verified Florentine Historical Terms
Paper Stock: 55# Cream Archival Book Paper
Dimensions: 8.5 × 11.0 inches (215.9 × 279.4 mm)
Cover Artwork: Museum Oil Painting on Canvas (High Renaissance Golden Hour over Brunelleschi's Duomo)

Printed in the United States of America
First Archival Edition: Autumn 2026`;

doc.fillColor('#261c13').font('Times-Roman').fontSize(9)
   .text(colophonText, b2.left + 40, 130, { width: b2.width - 80, align: 'left', lineGap: 4 });

doc.strokeColor('#bfa787').lineWidth(0.6)
   .moveTo(b2.left + 80, 560).lineTo(b2.right - 80, 560).stroke();

doc.fillColor('#7c6248').font('Times-Italic').fontSize(8.5)
   .text('"Chi non stima la vita non la merita."\n— Leonardo da Vinci, Florentine Master', b2.left, 580, { width: b2.width, align: 'center', lineGap: 3 });


// ==========================================
// PAGE 3: ARCHIVAL FIELD GUIDE (Recto)
// ==========================================
console.log("Compiling Page 3: Field Guide...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b3 = getPageBounds(3);
drawVellumBackground(b3);

doc.fillColor('#4a3520').font('Times-Bold').fontSize(14)
   .text('ARCHIVAL FIELD GUIDE', b3.left, 75, { width: b3.width, align: 'center', characterSpacing: 1.5 });
doc.fillColor('#7c6248').font('Times-Roman').fontSize(9)
   .text('METHODOLOGY & CONVENTIONS FOR SOLVING THE MATRICES', b3.left, 94, { width: b3.width, align: 'center', characterSpacing: 1 });
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(b3.left + 40, 108).lineTo(b3.right - 40, 108).stroke();

const guideSections = [
  {
    num: "I. THE SPATIOTEMPORAL MATRIX",
    desc: "Each puzzle folio presents a rigorous 16×16 character grid containing 256 uppercase letters set in large-print type. Every matrix reconstructs a specific historical dimension of Florence between 1450 and 1550 AD—encompassing civic governance, master bottegas, architectural triumphs, banking networks, and philosophy."
  },
  {
    num: "II. VECTOR ORIENTATION RULES",
    desc: "Target vocabulary words are concealed in all eight directional vectors across the Euclidean plane:\n• Horizontal: Left-to-Right and Right-to-Left (Reverse)\n• Vertical: Top-to-Bottom and Bottom-to-Top (Inverted)\n• Diagonal: Ascending and Descending across all quadrants\nLetters may intersect and be shared by multiple overlapping historical terms."
  },
  {
    num: "III. THE 18-TERM HISTORICAL REGISTRY",
    desc: "Directly below each matrix lies a three-column ledger of exactly eighteen historical terms. Words containing spaces in the ledger are continuous within the matrix. As each term is located, trace its line on the grid and mark its fleuron (◆) in the registry."
  },
  {
    num: "IV. COMPLETE ARCHIVAL SOLUTION REGISTER",
    desc: "If verification is required, refer to the Archival Solution Register at the conclusion of this volume (Folios 84–99). Every puzzle features an exact coordinate mapping denoting starting [Row, Col] and ending coordinates."
  }
];

let gy = 130;
guideSections.forEach(sec => {
  doc.fillColor('#5c4228').font('Times-Bold').fontSize(10.5)
     .text(sec.num, b3.left + 20, gy, { width: b3.width - 40 });
  gy += 18;
  doc.fillColor('#261c13').font('Times-Roman').fontSize(9)
     .text(sec.desc, b3.left + 20, gy, { width: b3.width - 40, lineGap: 3 });
  gy += (sec.num.includes("VECTOR") ? 80 : 54);
});

doc.strokeColor('#bfa787').lineWidth(0.6)
   .moveTo(b3.left + 100, gy + 15).lineTo(b3.right - 100, gy + 15).stroke();

doc.fillColor('#7c6248').font('Times-Bold').fontSize(9)
   .text('◆   THE ARCHIVAL CURATOR   ◆', b3.left, gy + 30, { width: b3.width, align: 'center', characterSpacing: 2 });


// ==========================================
// PAGES 4 TO 83: 80 HISTORICAL PUZZLES
// ==========================================
console.log("Compiling 80 Historical Puzzle Pages (Pages 4 to 83)...");

const CELL_SIZE = 23.5; // 16 * 23.5 = 376 pt grid width
const GRID_W = 16 * CELL_SIZE; // 376 pt

puzzles.forEach((p, idx) => {
  const pageNum = idx + 4; // Puzzles start at Page 4
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawVellumBackground(b);

  // Running Header
  doc.fillColor('#7c6248').font('Courier-Bold').fontSize(7.5)
     .text(`ARCHIVE REGISTRY // ${p.code}`, b.left, 46, { characterSpacing: 0.8 });

  doc.fillColor('#5c4228').font('Times-Bold').fontSize(8)
     .text(`VOLUME I • FLORENCE`, b.left, 46, { width: b.width, align: 'right', characterSpacing: 1.0 });

  doc.strokeColor('#8a6847').lineWidth(1.0)
     .moveTo(b.left, 57).lineTo(b.right, 57).stroke();
  doc.strokeColor('#d4c3ad').lineWidth(0.5)
     .moveTo(b.left, 60).lineTo(b.right, 60).stroke();

  // Subheader: Era badge + Title
  doc.fillColor('#8a5a36').font('Courier-Bold').fontSize(8)
     .text(`✦ ${p.era}`, b.left, 76, { characterSpacing: 0.8 });

  doc.fillColor('#241b12').font('Times-Bold').fontSize(20)
     .text(`${p.puzzleNumber}. ${p.title}`, b.left, 96, { width: b.width, characterSpacing: 0.5 });

  doc.strokeColor('#c8b59e').lineWidth(0.8)
     .moveTo(b.left, 126).lineTo(b.right, 126).stroke();

  // 16x16 Puzzle Grid Container
  const gridStartX = b.left + (b.width - GRID_W) / 2;
  const gridStartY = 142;

  // Solid subtle parchment box behind grid for maximum contrast
  doc.save();
  doc.rect(gridStartX, gridStartY, GRID_W, GRID_W).fillAndStroke('rgba(253, 250, 244, 0.94)', '#5a4430');

  // Internal cell lines
  doc.strokeColor('#dcd3c1').lineWidth(0.5);
  for (let i = 1; i < 16; i++) {
    const pos = i * CELL_SIZE;
    doc.moveTo(gridStartX + pos, gridStartY).lineTo(gridStartX + pos, gridStartY + GRID_W).stroke();
    doc.moveTo(gridStartX, gridStartY + pos).lineTo(gridStartX + GRID_W, gridStartY + pos).stroke();
  }

  // Draw Grid Letters (Crisp, High-Contrast 11.5pt Vector Font)
  doc.fillColor('#1a140d').font('Helvetica-Bold').fontSize(11.5);
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      const char = p.grid[r][c];
      const cx = gridStartX + c * CELL_SIZE;
      const cy = gridStartY + r * CELL_SIZE;
      // Center character perfectly
      doc.text(char, cx, cy + 5.5, { width: CELL_SIZE, align: 'center' });
    }
  }
  doc.restore();

  // Word Bank (3 Columns of 6 Words)
  const bankStartY = gridStartY + GRID_W + 24;
  doc.fillColor('#543c26').font('Times-Bold').fontSize(8.5)
     .text('HISTORICAL WORD REGISTRY // 18 TARGET TERMS', b.left, bankStartY, { characterSpacing: 1.2 });

  doc.strokeColor('#8a6847').lineWidth(0.8)
     .moveTo(b.left, bankStartY + 12).lineTo(b.right, bankStartY + 12).stroke();

  const colW = b.width / 3;
  p.words.forEach((w, wIdx) => {
    const col = wIdx % 3;
    const row = Math.floor(wIdx / 3);
    const wx = b.left + col * colW;
    const wy = bankStartY + 20 + row * 16.5;

    // Diamond fleuron + Word
    doc.fillColor('#8a5a36').font('Times-Bold').fontSize(7.5).text('◆ ', wx, wy + 1, { continued: true });
    doc.fillColor('#261c13').font('Helvetica-Bold').fontSize(8.5).text(w, { characterSpacing: 0.3 });
  });

  // Footer: Page Number & Series Citation
  doc.strokeColor('#d4c3ad').lineWidth(0.5)
     .moveTo(b.left, PAGE_H - 42).lineTo(b.right, PAGE_H - 42).stroke();

  const pageAlign = b.isOdd ? 'right' : 'left';
  doc.fillColor('#7c6248').font('Times-Bold').fontSize(8)
     .text(String(pageNum), b.left, PAGE_H - 34, { width: b.width, align: pageAlign });

  doc.fillColor('#7c6248').font('Times-Roman').fontSize(7.5)
     .text('THEBOOKGUY ARCHIVAL PRESS • FLORENCE (1450–1550 AD)', b.left, PAGE_H - 34, { width: b.width, align: 'center', characterSpacing: 0.8 });
});


// ==========================================
// PAGES 84 TO 99: 16 SOLUTION PAGES (5 Puzzles / Page)
// ==========================================
console.log("Compiling 16 Solution Pages (Pages 84 to 99)...");

const PUZZLES_PER_SOL_PAGE = 5;
const TOTAL_SOL_PAGES = 16;

for (let sPage = 0; sPage < TOTAL_SOL_PAGES; sPage++) {
  const pageNum = 84 + sPage;
  doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
  const b = getPageBounds(pageNum);
  drawVellumBackground(b);

  const startPIdx = sPage * PUZZLES_PER_SOL_PAGE;
  const endPIdx = Math.min(startPIdx + PUZZLES_PER_SOL_PAGE, puzzles.length);
  const pList = puzzles.slice(startPIdx, endPIdx);

  // Header
  doc.fillColor('#7c6248').font('Courier-Bold').fontSize(7.5)
     .text(`ARCHIVAL SOLUTION REGISTER // PUZZLES ${pList[0].puzzleNumber}–${pList[pList.length - 1].puzzleNumber}`, b.left, 46, { characterSpacing: 0.8 });

  doc.fillColor('#5c4228').font('Times-Bold').fontSize(8)
     .text(`VOLUME I • FLORENCE`, b.left, 46, { width: b.width, align: 'right', characterSpacing: 1.0 });

  doc.strokeColor('#8a6847').lineWidth(1.0)
     .moveTo(b.left, 57).lineTo(b.right, 57).stroke();

  let curY = 70;
  const modHeight = (PAGE_H - 120) / PUZZLES_PER_SOL_PAGE; // ~134 pt per puzzle solution module

  pList.forEach(p => {
    // Module frame
    doc.save();
    doc.rect(b.left, curY, b.width, modHeight - 8).fillAndStroke('rgba(253, 250, 244, 0.92)', '#bfa787');
    doc.restore();

    // Module Title Bar
    doc.fillColor('#4a3520').font('Times-Bold').fontSize(9.5)
       .text(`PUZZLE ${p.puzzleNumber}: ${p.title}`, b.left + 8, curY + 6, { characterSpacing: 0.5 });
    doc.fillColor('#7c6248').font('Times-Italic').fontSize(7.5)
       .text(p.subtitle, b.left + 8, curY + 18);

    doc.strokeColor('#c8b59e').lineWidth(0.5)
       .moveTo(b.left + 8, curY + 28).lineTo(b.right - 8, curY + 28).stroke();

    // 3 columns of word solutions: Word [Start] -> [End]
    const solColW = (b.width - 16) / 3;
    p.placements.forEach((pl, plIdx) => {
      const col = plIdx % 3;
      const row = Math.floor(plIdx / 3);
      const px = b.left + 8 + col * solColW;
      const py = curY + 32 + row * 14.5;

      const coordStr = `[${pl.start[0]},${pl.start[1]}]→[${pl.end[0]},${pl.end[1]}]`;
      doc.fillColor('#241b12').font('Helvetica-Bold').fontSize(7.2)
         .text(pl.original, px, py, { width: solColW - 55, lineBreak: false, ellipsis: true });
      doc.fillColor('#7c6248').font('Courier-Bold').fontSize(6.8)
         .text(coordStr, px + solColW - 54, py, { width: 52, align: 'right' });
    });

    curY += modHeight;
  });

  // Footer
  doc.strokeColor('#d4c3ad').lineWidth(0.5)
     .moveTo(b.left, PAGE_H - 42).lineTo(b.right, PAGE_H - 42).stroke();

  const pageAlign = b.isOdd ? 'right' : 'left';
  doc.fillColor('#7c6248').font('Times-Bold').fontSize(8)
     .text(String(pageNum), b.left, PAGE_H - 34, { width: b.width, align: pageAlign });

  doc.fillColor('#7c6248').font('Times-Roman').fontSize(7.5)
     .text('ARCHIVAL SOLUTION REGISTER • FLORENCE (1450–1550 AD)', b.left, PAGE_H - 34, { width: b.width, align: 'center', characterSpacing: 0.8 });
}


// ==========================================
// PAGE 100: EPILOGUE & CATALOG ROADMAP (Verso)
// ==========================================
console.log("Compiling Page 100: Epilogue & Archival Catalog...");
doc.addPage({ size: [PAGE_W, PAGE_H], margin: 0 });
const b100 = getPageBounds(100);
drawVellumBackground(b100);

doc.fillColor('#4a3520').font('Times-Bold').fontSize(14)
   .text('ARCHIVAL EPILOGUE', b100.left, 75, { width: b100.width, align: 'center', characterSpacing: 2 });
doc.fillColor('#7c6248').font('Times-Roman').fontSize(9)
   .text('THE COMPLETED FLORENTINE RECORD • VOLUME 001', b100.left, 94, { width: b100.width, align: 'center', characterSpacing: 1 });
doc.strokeColor('#8a6847').lineWidth(0.8)
   .moveTo(b100.left + 40, 108).lineTo(b100.right - 40, 108).stroke();

const epilogueText = `You have completed the eighty historical matrices of Florence: The High Renaissance (1450–1550 AD). Through these 1,440 target terms, you have retraced the geometry of Brunelleschi's dome, deciphered the workshops of Verrocchio and Leonardo, stood before Michelangelo's David, navigated the banking ledger of the Medici, and walked the corridors of the Florentine Republic.

The Spatiotemporal Historical Puzzle Series preserves human cultural memory through rigorous, hand-crafted archival puzzles. Each folio is permanently indexed within our global classification registry.`;

doc.fillColor('#261c13').font('Times-Roman').fontSize(9.5)
   .text(epilogueText, b100.left + 30, 130, { width: b100.width - 60, align: 'justify', lineGap: 4.5 });

// Series Roadmap Box
const catBoxY = 250;
const catBoxH = 340;
doc.save();
doc.rect(b100.left + 20, catBoxY, b100.width - 40, catBoxH).fillAndStroke('rgba(253, 250, 244, 0.95)', '#8a6847');
doc.rect(b100.left + 23, catBoxY + 3, b100.width - 46, catBoxH - 6).strokeColor('#c8b59e').lineWidth(0.6).stroke();

doc.fillColor('#4a3520').font('Times-Bold').fontSize(10.5)
   .text('THE SPATIOTEMPORAL PUZZLE SERIES ROADMAP', b100.left + 20, catBoxY + 16, { width: b100.width - 40, align: 'center', characterSpacing: 1.2 });
doc.strokeColor('#8a6847').lineWidth(0.6)
   .moveTo(b100.left + 50, catBoxY + 32).lineTo(b100.right - 50, catBoxY + 32).stroke();

const seriesRoadmap = [
  { vol: "VOL. 001", code: "02.380.09.0501.1450.1550.001", title: "FLORENCE: THE HIGH RENAISSANCE (1450–1550 AD)", status: "COMPLETED / IN REPOSITORY" },
  { vol: "VOL. 002", code: "02.380.05.0502.1475.1575.002", title: "VENICE: MARITIME EMPIRE & SERENISSIMA (1475–1575 AD)", status: "IN PRODUCTION" },
  { vol: "VOL. 003", code: "03.392.26.0601.1568.1638.003", title: "KYOTO: MOMOYAMA & EARLY EDO ERA (1568–1638 AD)", status: "ARCHIVAL RESEARCH" },
  { vol: "VOL. 004", code: "02.380.12.0503.1500.1580.004", title: "ROME: THE PAPAL STATE & HIGH RENAISSANCE (1500–1580 AD)", status: "SCHEDULED" },
  { vol: "VOL. 005", code: "02.826.01.0701.1558.1625.005", title: "LONDON: ELIZABETHAN & JACOBEAN AGE (1558–1625 AD)", status: "SCHEDULED" },
  { vol: "VOL. 006", code: "02.250.11.0801.1750.1795.006", title: "PARIS: THE ENLIGHTENMENT & REVOLUTION (1750–1795 AD)", status: "SCHEDULED" }
];

let ry = catBoxY + 46;
seriesRoadmap.forEach(item => {
  doc.fillColor('#8a5a36').font('Times-Bold').fontSize(8.5).text(item.vol, b100.left + 36, ry);
  doc.fillColor('#241b12').font('Times-Bold').fontSize(8.5).text(item.title, b100.left + 90, ry);
  ry += 12;
  doc.fillColor('#7c6248').font('Courier-Bold').fontSize(7).text(`CODE: ${item.code}`, b100.left + 90, ry);
  doc.fillColor(item.status.includes('COMPLETED') ? '#2e6b36' : '#7c6248')
     .font('Times-Bold').fontSize(7.5).text(item.status, b100.right - 180, ry, { width: 140, align: 'right' });
  ry += 18;
});

doc.fillColor('#5c4228').font('Times-Bold').fontSize(8.5)
   .text('EXPLORE THE ARCHIVAL STOREFRONT & REGISTRY AT:', b100.left + 20, catBoxY + 265, { width: b100.width - 40, align: 'center' });
doc.fillColor('#1a140d').font('Courier-Bold').fontSize(9)
   .text('https://corlantisdes44.github.io', b100.left + 20, catBoxY + 280, { width: b100.width - 40, align: 'center' });
doc.restore();

doc.fillColor('#7c6248').font('Times-Bold').fontSize(8)
   .text('100', b100.left, PAGE_H - 34, { width: b100.width, align: 'left' });
doc.fillColor('#7c6248').font('Times-Roman').fontSize(7.5)
   .text('THEBOOKGUY ARCHIVAL PRESS • HISTORICAL PUZZLE SERIES', b100.left, PAGE_H - 34, { width: b100.width, align: 'center', characterSpacing: 0.8 });

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(OUT_PDF);
  console.log(`\n======================================================`);
  console.log(`COMPLETE 100-PAGE INTERIOR PDF COMPILED SUCCESSFULLY!`);
  console.log(`Output Path: ${OUT_PDF}`);
  console.log(`File Size: ${(stats.size / 1024 / 1024).toFixed(2)} MB (${stats.size} bytes)`);
  console.log(`Exact Pages: 100 pages`);
  console.log(`======================================================\n`);
});
