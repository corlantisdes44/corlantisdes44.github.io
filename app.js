// TheBookGuy Spatiotemporal Catalog & Archival Terminal Engine
document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      id: "vol-1-world-history",
      archivalCode: "EU.ITA.TOS.FLR.1450.1550.01",
      title: "Lost Civilizations & Ancient Empires",
      series: "Spatiotemporal Puzzle Series — Volume 1",
      category: "puzzles",
      hueCategory: "hue-blue",
      priceCurrent: "$8.99",
      priceRegular: "$10.99",
      discountBadge: "10% LAUNCH DEAL",
      specs: "100 Pages • 8.5\" × 11\" • Large Print 18pt",
      coverAccent: "linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)",
      coverTitle: "LOST CIVILIZATIONS & ANCIENT EMPIRES",
      coverSub: "LARGE PRINT HISTORICAL WORD SEARCH & TRIVIA",
      description: "Explore 80 historical puzzles across Ancient Egypt, Edo Japan, Roman Britannia, and the Silk Road. Designed with 18pt high-contrast typography for effortless reading.",
      amazonUrl: "https://amazon.com",
      previewPages: [
        "80 Themed Historical Puzzles",
        "Short Historical Context Snippets on Every Page",
        "16×16 Large-Print Letter Matrices (No eye strain)",
        "Archival Coordinates & Solution Keys at the Back (Pages 81–100)"
      ]
    },
    {
      id: "vol-2-giza-pyramids",
      archivalCode: "AF.EGY.GZ.GIZA.B2550.B2490.01",
      title: "The Dynastic Nile: Old Kingdom Pyramids",
      series: "Spatiotemporal Puzzle Series — Volume 2",
      category: "puzzles",
      hueCategory: "hue-amber",
      priceCurrent: "$8.99",
      priceRegular: "$10.99",
      discountBadge: "VOLUME 2",
      specs: "100 Pages • 8.5\" × 11\" • Large Print 18pt",
      coverAccent: "linear-gradient(135deg, #78350f 0%, #291203 100%)",
      coverTitle: "THE DYNASTIC NILE: OLD KINGDOM",
      coverSub: "PYRAMID ARCHITECTURE & PHARAOHS",
      description: "A deep dive into Old Kingdom engineering, hieroglyphic vocabulary, quarrying routes, and temple priests of 4th Dynasty Giza.",
      amazonUrl: "https://amazon.com",
      previewPages: [
        "80 Fourth Dynasty Historical Word Searches",
        "Hieroglyphic Transliteration & Vocabulary Lists",
        "100% Large-Print 18pt High-Contrast Grid"
      ]
    },
    {
      id: "vol-3-edo-japan",
      archivalCode: "AS.JPN.KT.EDO.1603.1867.01",
      title: "Edo Period Japan: Shoguns & Castles",
      series: "Spatiotemporal Puzzle Series — Volume 3",
      category: "puzzles",
      hueCategory: "hue-crimson",
      priceCurrent: "$8.99",
      priceRegular: "$10.99",
      discountBadge: "VOLUME 3",
      specs: "100 Pages • 8.5\" × 11\" • Large Print 18pt",
      coverAccent: "linear-gradient(135deg, #4c0519 0%, #1a0208 100%)",
      coverTitle: "EDO PERIOD JAPAN: SHOGUNS & CASTLES",
      coverSub: "FEUDAL CHRONICLES & WOODBLOCK LORE",
      description: "Feudal castles, Tokaido post towns, artisan guilds, and samurai codes. Curated historical terms with micro-history notes.",
      amazonUrl: "https://amazon.com",
      previewPages: [
        "80 Themed Edo Era Historical Puzzles",
        "Tokaido Highway & Post Town Mapping",
        "Complete Solution Grids at the Back"
      ]
    }
  ];

  const grid = document.getElementById("book-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Render Catalog Cards
  function renderBooks(filteredList) {
    grid.innerHTML = "";
    filteredList.forEach(book => {
      const card = document.createElement("article");
      card.className = `book-card ${book.hueCategory}`;
      card.id = book.id;

      card.innerHTML = `
        <div class="card-mockup-wrap" style="background: ${book.coverAccent};">
          <span class="card-code-corner">${book.archivalCode}</span>
          <span class="card-badge">${book.discountBadge}</span>
          <div class="book-spine-mockup">
            <span class="spine-sub">${book.series.split("—")[0]}</span>
            <div class="spine-cover-art">${book.coverTitle}</div>
            <span class="spine-brand">THEBOOKGUY</span>
          </div>
        </div>

        <div class="card-content">
          <span class="card-category">${book.series}</span>
          <h3 class="card-title">${book.title}</h3>
          <p class="card-description">${book.description}</p>
          
          <div class="card-specs">
            <span>${book.specs}</span>
          </div>

          <div class="card-pricing">
            <span class="current-price">${book.priceCurrent}</span>
            <span class="regular-price">${book.priceRegular}</span>
            <span class="discount-tag">Amazon Launch Price</span>
          </div>

          <div class="card-actions">
            <a href="${book.amazonUrl}" target="_blank" rel="noopener" class="btn-buy-amazon">
              Buy on Amazon ↗
            </a>
            <button class="btn-preview-interior" data-id="${book.id}">
              Preview Interior Details
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    attachPreviewListeners();
  }

  // Initial Render
  renderBooks(books);

  // Category Filters
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      if (category === "all") {
        renderBooks(books);
      } else {
        const filtered = books.filter(b => b.category === category);
        renderBooks(filtered);
      }
      checkDeepLink();
    });
  });

  // Deep Linking & 2-Second Glow Animation
  function checkDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const targetId = params.get("item") || window.location.hash.replace("#", "");

    if (targetId) {
      const targetCard = document.getElementById(targetId);
      if (targetCard) {
        setTimeout(() => {
          targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
          targetCard.classList.add("highlight-glow");
          setTimeout(() => {
            targetCard.classList.remove("highlight-glow");
          }, 2200);
        }, 150);
      }
    }
  }

  checkDeepLink();
  window.addEventListener("hashchange", checkDeepLink);

  // Archival Code Terminal / Vault Logic
  const vaultModal = document.getElementById("vault-modal");
  const openVaultBtn = document.getElementById("open-vault-btn");
  const heroVaultBtn = document.getElementById("hero-vault-btn");
  const closeVaultBtn = document.getElementById("vault-close");
  const vaultOverlay = document.getElementById("vault-overlay");
  const vaultInput = document.getElementById("vault-code-input");
  const vaultSubmit = document.getElementById("vault-submit-btn");
  const vaultResult = document.getElementById("vault-result");
  const codePills = document.querySelectorAll(".code-pill");

  function openVault() {
    vaultModal.classList.add("active");
    vaultInput.focus();
  }

  function closeVault() {
    vaultModal.classList.remove("active");
  }

  if (openVaultBtn) openVaultBtn.addEventListener("click", openVault);
  if (heroVaultBtn) heroVaultBtn.addEventListener("click", openVault);
  if (closeVaultBtn) closeVaultBtn.addEventListener("click", closeVault);
  if (vaultOverlay) vaultOverlay.addEventListener("click", closeVault);

  function decodeArchivalCode(code) {
    const cleanCode = code.trim().toUpperCase();
    const match = books.find(b => b.archivalCode.toUpperCase() === cleanCode);

    vaultResult.classList.add("active");

    if (match) {
      const parts = cleanCode.split(".");
      const cont = parts[0];
      const ctry = parts[1];
      const reg = parts[2];
      const loc = parts[3];
      const timeStart = parts[4];
      const timeEnd = parts[5];
      const vol = parts[6];

      vaultResult.innerHTML = `
        <div style="border-left: 3px solid var(--hue1-pure); padding-left: 14px; margin-bottom: 14px;">
          <h4 style="color: var(--hue3-tint); font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 4px;">
            ✓ COORDINATES VERIFIED: ${match.title}
          </h4>
          <p style="color: var(--text-muted); font-size: 0.82rem; font-family: var(--font-mono);">
            CATALOG REF: ${cleanCode}
          </p>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 0.8rem; margin-bottom: 16px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 6px;">
          <div><strong style="color: var(--hue2-tint);">REGION:</strong> ${loc}, ${reg} (${ctry})</div>
          <div><strong style="color: var(--hue2-tint);">CONTINENT:</strong> ${cont}</div>
          <div><strong style="color: var(--hue3-tint);">ERA:</strong> ${timeStart} – ${timeEnd}</div>
          <div><strong style="color: var(--hue1-tint);">VOLUME:</strong> #${vol}</div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button id="jump-to-book-btn" style="flex: 1; background: var(--hue1-pure); color: #000; border: none; padding: 10px; border-radius: 6px; font-weight: 700; cursor: pointer;">
            Jump to Book Card ↓
          </button>
          <a href="${match.amazonUrl}" target="_blank" rel="noopener" style="flex: 1; background: var(--hue3-pure); color: #000; text-align: center; text-decoration: none; padding: 10px; border-radius: 6px; font-weight: 700;">
            Buy on Amazon ↗
          </a>
        </div>
      `;

      document.getElementById("jump-to-book-btn").addEventListener("click", () => {
        closeVault();
        window.location.hash = match.id;
        checkDeepLink();
      });
    } else {
      vaultResult.innerHTML = `
        <div style="color: var(--hue5-tint); border-left: 3px solid var(--hue5-pure); padding-left: 12px;">
          <strong>CODE UNRECOGNIZED:</strong> The format must follow <code>CONT.CTRY.REG.LOC.START.END.VOL</code> (e.g. <code>EU.ITA.TOS.FLR.1450.1550.01</code>).
        </div>
      `;
    }
  }

  if (vaultSubmit) {
    vaultSubmit.addEventListener("click", () => {
      decodeArchivalCode(vaultInput.value);
    });
  }

  if (vaultInput) {
    vaultInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") decodeArchivalCode(vaultInput.value);
    });
  }

  codePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const c = pill.getAttribute("data-code");
      vaultInput.value = c;
      decodeArchivalCode(c);
    });
  });

  // Modal Preview Handling
  const modal = document.getElementById("preview-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("modal-overlay");

  function attachPreviewListeners() {
    document.querySelectorAll(".btn-preview-interior").forEach(btn => {
      btn.addEventListener("click", () => {
        const bookId = btn.getAttribute("data-id");
        const book = books.find(b => b.id === bookId);
        if (book) {
          modalBody.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--hue3-tint); margin-bottom: 6px;">
              REF: ${book.archivalCode}
            </div>
            <h2 style="font-family: var(--font-heading); margin-bottom: 8px; color: var(--hue3-tint);">${book.title}</h2>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">${book.series} • ${book.specs}</p>
            <h4 style="color: var(--text-main); margin-bottom: 12px;">Interior Structure & KDP Specs:</h4>
            <ul style="padding-left: 20px; color: var(--text-muted); margin-bottom: 24px; line-height: 1.8;">
              ${book.previewPages.map(p => `<li>${p}</li>`).join("")}
            </ul>
            <a href="${book.amazonUrl}" target="_blank" rel="noopener" class="btn-buy-amazon" style="text-align: center; text-decoration: none;">
              Order Physical Paperback on Amazon ↗
            </a>
          `;
          modal.classList.add("active");
        }
      });
    });
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
});
