const fs = require('fs');
const path = require('path');

const outDir = __dirname;
const imagePath = path.join(__dirname, '..', 'cover', 'florence_1450_oil_painting.png');

console.log("Image exists check:", fs.existsSync(imagePath), imagePath);

// 8.5" x 11" at 72 pt/inch = 612 x 792 pt
const PAGE_W = 612;
const PAGE_H = 792;
const GUTTER_LEFT = 54; // 0.75 in for spine glue
const MARGIN_RIGHT = 38;
const CONTENT_W = PAGE_W - GUTTER_LEFT - MARGIN_RIGHT;

const puzzle = {
  volNumber: "001",
  puzzleNumber: "01",
  code: "02.380.09.0501.1450.1550.001",
  title: "BRUNELLESCHI'S DOME",
  era: "FLORENCE, TUSCANY • 1450 AD",
  words: [
    "BRUNELLESCHI", "SANTA MARIA", "HERRINGBONE",
    "DOUBLE SHELL", "SCAFFOLDING", "LANTERN",
    "MASONRY", "TUSCANY", "DUOMO",
    "HOIST CRANE", "ARNO RIVER", "BOTTEGA",
    "BRICKWORK", "VAULTING", "MEDICI BANK",
    "OCTAGONAL", "CALCINA", "MASTER GUILD"
  ]
};

const grid = [
  ['B','R','U','N','E','L','L','E','S','C','H','I','F','T','P','Q'],
  ['H','E','R','R','I','N','G','B','O','N','E','X','D','U','O','M'],
  ['A','R','N','O','R','I','V','E','R','Z','C','A','L','C','I','N'],
  ['V','A','U','L','T','I','N','G','Y','M','A','S','O','N','R','Y'],
  ['S','C','A','F','F','O','L','D','I','N','G','W','J','K','L','M'],
  ['D','O','U','B','L','E','S','H','E','L','L','P','B','O','T','T'],
  ['B','O','T','T','E','G','A','Q','R','U','S','O','A','N','T','A'],
  ['H','O','I','S','T','C','R','A','N','E','V','X','N','Z','Y','W'],
  ['L','A','N','T','E','R','N','M','E','D','I','C','I','B','A','N'],
  ['M','E','D','I','C','I','B','A','N','K','P','Q','K','R','S','T'],
  ['O','C','T','A','G','O','N','A','L','L','E','D','G','E','R','U'],
  ['B','R','I','C','K','W','O','R','K','S','F','L','O','R','I','N'],
  ['T','U','S','C','A','N','Y','F','I','R','E','N','Z','E','A','R'],
  ['M','A','S','T','E','R','G','U','I','L','D','P','A','T','R','O'],
  ['S','A','N','T','A','M','A','R','I','A','C','A','T','H','E','D'],
  ['C','H','I','A','R','O','S','C','U','R','O','V','A','U','L','T']
];

function generateCleanArtisticSVG(bgImagePath) {
  const cellSize = 23.5;
  const gridW = 16 * cellSize; // 376 pt
  const gridStartX = GUTTER_LEFT + (CONTENT_W - gridW) / 2;
  const gridStartY = 145;

  let bgImageTag = '';
  if (bgImagePath && fs.existsSync(bgImagePath)) {
    const ext = path.extname(bgImagePath).slice(1);
    const b64 = fs.readFileSync(bgImagePath).toString('base64');
    bgImageTag = `
  <!-- Faded Museum Oil Painting on Canvas (14% Opacity) -->
  <g opacity="0.14">
    <image href="data:image/${ext};base64,${b64}" x="${GUTTER_LEFT - 6}" y="65" width="${CONTENT_W + 12}" height="${PAGE_H - 120}" preserveAspectRatio="xMidYMid slice" />
  </g>
`;
  }

  let svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${PAGE_W}pt" height="${PAGE_H}pt" viewBox="0 0 ${PAGE_W} ${PAGE_H}">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&amp;family=Cormorant+Garamond:wght@600;700&amp;family=Inter:wght@600;700&amp;family=JetBrains+Mono:wght@500;700&amp;display=swap');
      
      .bg-parchment { fill: #f7f2e7; }
      .outer-frame { fill: none; stroke: #8a6847; stroke-width: 1.2; }
      .inner-frame { fill: none; stroke: #bfa787; stroke-width: 0.6; }
      
      .header-code { font-family: 'JetBrains Mono', monospace; font-size: 7.5pt; fill: #7c6248; letter-spacing: 0.12em; font-weight: 700; }
      .header-vol { font-family: 'Cinzel', serif; font-size: 8pt; fill: #5c4228; letter-spacing: 0.14em; font-weight: 700; text-anchor: end; }
      
      .era-badge { font-family: 'JetBrains Mono', monospace; font-size: 8pt; font-weight: 700; fill: #8a5a36; letter-spacing: 0.12em; }
      .puzzle-title { font-family: 'Cinzel', serif; font-size: 21pt; font-weight: 700; fill: #241b12; letter-spacing: 0.05em; }
      
      .grid-box { fill: rgba(253, 250, 244, 0.94); stroke: #5a4430; stroke-width: 1.8; }
      .grid-cell { stroke: #dcd3c1; stroke-width: 0.55; }
      .grid-letter { font-family: 'Inter', sans-serif; font-size: 11.5pt; font-weight: 700; fill: #1a140d; text-anchor: middle; dominant-baseline: central; }
      
      .bank-title { font-family: 'Cinzel', serif; font-size: 8.5pt; font-weight: 700; fill: #543c26; letter-spacing: 0.16em; }
      .bank-item { font-family: 'Inter', sans-serif; font-size: 8.8pt; font-weight: 600; fill: #261c13; letter-spacing: 0.03em; }
      .fleuron { fill: #8a5a36; font-size: 8pt; }
      
      .footer-txt { font-family: 'Cinzel', serif; font-size: 8pt; fill: #7c6248; letter-spacing: 0.1em; text-anchor: middle; }
    </style>
  </defs>

  <!-- Antique Vellum Background Ground -->
  <rect width="${PAGE_W}" height="${PAGE_H}" class="bg-parchment" />

  <!-- Intaglio Plate-Mark Margin Frames -->
  <rect x="${GUTTER_LEFT - 12}" y="30" width="${CONTENT_W + 24}" height="${PAGE_H - 60}" class="outer-frame" />
  <rect x="${GUTTER_LEFT - 8}" y="34" width="${CONTENT_W + 16}" height="${PAGE_H - 68}" class="inner-frame" />
  
  <circle cx="${GUTTER_LEFT - 10}" cy="32" r="3" fill="#8a6847" />
  <circle cx="${PAGE_W - MARGIN_RIGHT + 10}" cy="32" r="3" fill="#8a6847" />
  <circle cx="${GUTTER_LEFT - 10}" cy="${PAGE_H - 32}" r="3" fill="#8a6847" />
  <circle cx="${PAGE_W - MARGIN_RIGHT + 10}" cy="${PAGE_H - 32}" r="3" fill="#8a6847" />

  ${bgImageTag}

  <!-- Running Header -->
  <text x="${GUTTER_LEFT}" y="52" class="header-code">ARCHIVE REGISTRY // ${puzzle.code}</text>
  <text x="${PAGE_W - MARGIN_RIGHT}" y="52" class="header-vol">VOLUME I • FLORENCE</text>
  <line x1="${GUTTER_LEFT}" y1="58" x2="${PAGE_W - MARGIN_RIGHT}" y2="58" stroke="#8a6847" stroke-width="1.2" />
  <line x1="${GUTTER_LEFT}" y1="61" x2="${PAGE_W - MARGIN_RIGHT}" y2="61" stroke="#d4c3ad" stroke-width="0.5" />

  <!-- Clean Title & Era (No Paragraph!) -->
  <text x="${GUTTER_LEFT}" y="88" class="era-badge">✦ ${puzzle.era}</text>
  <text x="${GUTTER_LEFT}" y="116" class="puzzle-title">${puzzle.puzzleNumber}. ${puzzle.title}</text>
  <line x1="${GUTTER_LEFT}" y1="126" x2="${PAGE_W - MARGIN_RIGHT}" y2="126" stroke="#c8b59e" stroke-width="0.8" />

  <!-- 16x16 Puzzle Grid Container -->
  <rect x="${gridStartX}" y="${gridStartY}" width="${gridW}" height="${gridW}" class="grid-box" />
`;

  // Draw Grid Lines & 18pt High-Contrast Letters
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 16; c++) {
      const cx = gridStartX + c * cellSize;
      const cy = gridStartY + r * cellSize;
      svg += `  <rect x="${cx}" y="${cy}" width="${cellSize}" height="${cellSize}" class="grid-cell" fill="none" />\n`;
      svg += `  <text x="${cx + cellSize / 2}" y="${cy + cellSize / 2}" class="grid-letter">${grid[r][c]}</text>\n`;
    }
  }

  // Word Bank (3 Columns of 6 Words with Fleuron Markers)
  const bankStartY = gridStartY + gridW + 30;
  svg += `
  <!-- Themed Word Bank -->
  <text x="${GUTTER_LEFT}" y="${bankStartY}" class="bank-title">HISTORICAL WORD REGISTRY // 18 TARGET TERMS</text>
  <line x1="${GUTTER_LEFT}" y1="${bankStartY + 6}" x2="${PAGE_W - MARGIN_RIGHT}" y2="${bankStartY + 6}" stroke="#8a6847" stroke-width="1" />
`;

  const colWidth = CONTENT_W / 3;
  puzzle.words.forEach((w, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const wx = GUTTER_LEFT + col * colWidth;
    const wy = bankStartY + 26 + row * 18;
    svg += `  <text x="${wx}" y="${wy}" class="bank-item"><tspan class="fleuron">◆</tspan> ${w}</text>\n`;
  });

  // Footer Rule & Page Number
  const footerY = PAGE_H - 46;
  svg += `
  <!-- Running Footer -->
  <line x1="${GUTTER_LEFT}" y1="${footerY - 12}" x2="${PAGE_W - MARGIN_RIGHT}" y2="${footerY - 12}" stroke="#c8b59e" stroke-width="0.8" />
  <text x="${PAGE_W / 2}" y="${footerY + 4}" class="footer-txt">FOLIO IV • TUSCAN CHRONICLES</text>
</svg>`;

  return svg;
}

const svgArtContent = generateCleanArtisticSVG(imagePath);
const targetSvgPath = path.join(outDir, 'page_01_proof.svg');
const targetHtmlPath = path.join(outDir, 'page_01_proof.html');

fs.writeFileSync(targetSvgPath, svgArtContent);

const htmlViewer = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clean Renaissance Folio Proof — Page 1 // TheBookGuy Archive</title>
  <style>
    body {
      background: #191f1a;
      color: #f7f2e7;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 0;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .toolbar {
      max-width: 820px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 12px;
      border-bottom: 1px solid #334236;
    }
    .proof-badge {
      font-family: monospace;
      font-size: 13px;
      color: #a1bc98;
      background: rgba(161, 188, 152, 0.15);
      border: 1px solid #a1bc98;
      padding: 4px 10px;
      border-radius: 4px;
    }
    .specs-note {
      font-size: 13px;
      color: #dccfc0;
    }
    .page-sheet {
      box-shadow: 0 16px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06);
      background: #f7f2e7;
      border-radius: 2px;
      line-height: 0;
    }
  </style>
</head>
<body>
  <div class="toolbar">
    <span class="proof-badge">RENAISSANCE OIL PAINTING BG // NO PARAGRAPH</span>
    <span class="specs-note">8.5" × 11" Trim • Faded Oil Painting on Canvas (14% Opacity) • 18 Target Words</span>
  </div>
  <div class="page-sheet">
    ${svgArtContent}
  </div>
</body>
</html>`;

fs.writeFileSync(targetHtmlPath, htmlViewer);
console.log("SUCCESS: Recompiled with embedded oil painting and zero paragraph clutter!");
