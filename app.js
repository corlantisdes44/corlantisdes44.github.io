// TheBookGuy Spatiotemporal Cartographic Archive Engine
// With Dynamic Botanical Maturation & Organic Lifecyle Tracking
document.addEventListener("DOMContentLoaded", () => {
  const archiveRecords = [
    {
      id: "rec-florence-renaissance",
      numericCode: "02.380.09.0501.1450.1550.001",
      uploadDate: "2026-10-25", // Just added today
      geoMeta: {
        continent: "02 (Europe)",
        country: "380 (Italy)",
        region: "09 (Tuscany)",
        location: "0501 (Florence)",
        epoch: "1450 – 1550 AD",
        volume: "001"
      },
      title: "Florence: The High Renaissance",
      category: "puzzles",
      format: "Physical Paperback",
      price: "$8.99",
      specs: "100 Pages • 8.5\" × 11\" • Large-Print 18pt",
      eraTag: "EPOCH 1450–1550 AD // TUSCANY",
      blurb: "80 curated historical word matrices capturing Brunelleschi's dome, Medici workshops, guild ledgers, and bottega artisans. Printed in high-contrast 18pt typography.",
      amazonUrl: "https://amazon.com",
      previewSpecs: [
        "80 Themed Historical Word Searches with Micro-Histories",
        "Large-Print 16×16 Letter Matrix (Engineered for Zero Eye Strain)",
        "Standardized 8.5\" × 11\" Cream Interior Format",
        "Full Solution Appendices in Back Matter (Pages 81–100)"
      ]
    },
    {
      id: "rec-giza-dynastic",
      numericCode: "01.818.04.0042.2550.2490.001",
      uploadDate: "2026-10-10", // 15 days ago -> In Bloom Stage
      geoMeta: {
        continent: "01 (Africa)",
        country: "818 (Egypt)",
        region: "04 (Lower Nile)",
        location: "0042 (Giza Necropolis)",
        epoch: "2550 – 2490 BCE",
        volume: "001"
      },
      title: "Giza: The Fourth Dynasty",
      category: "puzzles",
      format: "Physical Paperback",
      price: "$8.99",
      specs: "100 Pages • 8.5\" × 11\" • Large-Print 18pt",
      eraTag: "EPOCH 2550–2490 BCE // NILE VALLEY",
      blurb: "Old Kingdom quarry routes, limestone casing methods, astronomer priests, and seasonal flood logs. Systematic historical word matrices with archival notes.",
      amazonUrl: "https://amazon.com",
      previewSpecs: [
        "80 Fourth Dynasty Architectural Word Searches",
        "Hieroglyphic Transliteration Glossaries on Every Page",
        "18pt High-Contrast Large-Print Layout",
        "Complete Solution Appendix (Pages 81–100)"
      ]
    },
    {
      id: "rec-edo-shogunate",
      numericCode: "03.392.13.0108.1603.1867.001",
      uploadDate: "2026-08-15", // ~71 days ago -> Ripened Fruit Harvest Stage
      geoMeta: {
        continent: "03 (Asia)",
        country: "392 (Japan)",
        region: "13 (Kanto Plain)",
        location: "0108 (Edo Castle & Nihonbashi)",
        epoch: "1603 – 1867 AD",
        volume: "001"
      },
      title: "Edo: The Shogunate Castle Towns",
      category: "puzzles",
      format: "Physical Paperback",
      price: "$8.99",
      specs: "100 Pages • 8.5\" × 11\" • Large-Print 18pt",
      eraTag: "EPOCH 1603–1867 AD // KANTO",
      blurb: "Tokaido highway stations, woodblock master studios, merchant guilds, and samurai civic architecture. Formatted for screen-free mental focus.",
      amazonUrl: "https://amazon.com",
      previewSpecs: [
        "80 Themed Edo Era Word Searches",
        "Post-Station Road Itineraries & Cultural Glossaries",
        "Engineered 18pt Typography for Comfortable Reading",
        "Full Coordinate Solutions at the Back"
      ]
    }
  ];

  // -------------------------------------------------------------
  // BOTANICAL MATURATION & BLOOMING ENGINE
  // Calculates how long a book has been on the site like a plant:
  // Sprout -> In Bloom -> Ripened Fruit -> Deep Heritage Root
  // -------------------------------------------------------------
  function calculateMaturation(uploadDateStr) {
    const uploadTime = new Date(uploadDateStr).getTime();
    const now = new Date().getTime();
    const diffMs = Math.max(0, now - uploadTime);
    const daysElapsed = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (daysElapsed <= 7) {
      return {
        stage: "stage-sprout",
        icon: "🌱",
        statusText: daysElapsed === 0 ? "Sprouted Today" : `Sprouted ${daysElapsed}d ago`,
        phaseName: "Stage I • Fresh Sprout",
        progressPercent: Math.min(25, Math.max(8, daysElapsed * 3.5)),
        daysElapsed: daysElapsed
      };
    } else if (daysElapsed <= 30) {
      const bloomPct = Math.min(60, 25 + Math.floor(((daysElapsed - 7) / 23) * 35));
      return {
        stage: "stage-flower",
        icon: "🌸",
        statusText: `In Bloom (${daysElapsed}d)`,
        phaseName: "Stage II • Flower in Bloom",
        progressPercent: bloomPct,
        daysElapsed: daysElapsed
      };
    } else if (daysElapsed <= 90) {
      const ripePct = Math.min(90, 60 + Math.floor(((daysElapsed - 30) / 60) * 30));
      const months = Math.floor(daysElapsed / 30);
      return {
        stage: "stage-ripe",
        icon: "🍎",
        statusText: `Ripe Harvest (${months}mo)`,
        phaseName: "Stage III • Ripened Fruit",
        progressPercent: ripePct,
        daysElapsed: daysElapsed
      };
    } else {
      const months = Math.floor(daysElapsed / 30);
      return {
        stage: "stage-ancient",
        icon: "🌳",
        statusText: `Heritage Oak (${months}mo)`,
        phaseName: "Stage IV • Deep-Rooted Tree",
        progressPercent: 100,
        daysElapsed: daysElapsed
      };
    }
  }

  const grid = document.getElementById("book-grid");
  const filterPills = document.querySelectorAll(".filter-pill");

  // Render Grid
  function renderCatalog(items) {
    grid.innerHTML = "";
    items.forEach(book => {
      const maturation = calculateMaturation(book.uploadDate);

      const card = document.createElement("article");
      card.className = "book-card";
      card.id = book.id;

      card.innerHTML = `
        <div class="card-cover-stage">
          <span class="card-coord-stamp">${book.numericCode}</span>
          
          <!-- Botanical Maturation Badge -->
          <div class="maturation-badge ${maturation.stage}">
            <span class="maturation-icon">${maturation.icon}</span>
            <span>${maturation.statusText}</span>
          </div>
          
          <div class="book-physical-mockup">
            <span class="mockup-header">${book.numericCode.slice(0, 10)}...</span>
            <div class="mockup-title">${book.title}</div>
            <div class="mockup-footer">
              <span>VOL.${book.geoMeta.volume}</span>
              <span>8.5×11"</span>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="card-era-tag">${book.eraTag}</div>
          <h3 class="card-title">${book.title}</h3>
          <p class="card-blurb">${book.blurb}</p>
          
          <!-- Botanical Lifecycle Growth Meter -->
          <div class="maturation-meter-container">
            <div class="maturation-meter-label">
              <span>${maturation.phaseName}</span>
              <span>${maturation.daysElapsed} days mature</span>
            </div>
            <div class="maturation-meter-bar">
              <div class="maturation-meter-fill" style="width: ${maturation.progressPercent}%;"></div>
            </div>
          </div>

          <div class="card-specs">
            <span>${book.specs}</span>
          </div>

          <div class="card-commerce">
            <div class="card-price">${book.price}</div>
            <span class="card-price-note">Amazon Paperback</span>
          </div>

          <div class="card-btn-stack">
            <a href="${book.amazonUrl}" target="_blank" rel="noopener" class="btn-buy-amazon">
              Order on Amazon ↗
            </a>
            <button class="btn-inspect" data-id="${book.id}">
              Inspect Edition Details
            </button>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    bindPreviewEvents();
  }

  // Initial Render
  renderCatalog(archiveRecords);

  // Filters
  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const f = pill.getAttribute("data-filter");
      if (f === "all") {
        renderCatalog(archiveRecords);
      } else {
        const filtered = archiveRecords.filter(item => item.category === f);
        renderCatalog(filtered);
      }
      verifyDeepLink();
    });
  });

  // Deep Link Handling with 2.2-Second Halo Glow
  function verifyDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const target = params.get("item") || window.location.hash.replace("#", "");

    if (target) {
      const card = document.getElementById(target);
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("highlight-glow");
          setTimeout(() => {
            card.classList.remove("highlight-glow");
          }, 2200);
        }, 150);
      }
    }
  }

  verifyDeepLink();
  window.addEventListener("hashchange", verifyDeepLink);

  // Terminal Drawer & Numeric Code Decoder
  const vaultModal = document.getElementById("vault-modal");
  const openVaultBtn = document.getElementById("open-vault-btn");
  const heroVaultBtn = document.getElementById("hero-vault-btn");
  const closeVaultBtn = document.getElementById("vault-close");
  const vaultOverlay = document.getElementById("vault-overlay");
  const vaultInput = document.getElementById("vault-code-input");
  const vaultSubmit = document.getElementById("vault-submit-btn");
  const vaultResult = document.getElementById("vault-result");
  const shortcutPills = document.querySelectorAll(".shortcut-pill");

  function openTerminal() {
    vaultModal.classList.add("active");
    vaultInput.focus();
  }

  function closeTerminal() {
    vaultModal.classList.remove("active");
  }

  if (openVaultBtn) openVaultBtn.addEventListener("click", openTerminal);
  if (heroVaultBtn) heroVaultBtn.addEventListener("click", openTerminal);
  if (closeVaultBtn) closeVaultBtn.addEventListener("click", closeTerminal);
  if (vaultOverlay) vaultOverlay.addEventListener("click", closeTerminal);

  function decodeNumericCode(code) {
    const clean = code.trim();
    const match = archiveRecords.find(r => r.numericCode === clean);

    vaultResult.classList.add("active");

    if (match) {
      const g = match.geoMeta;
      const mat = calculateMaturation(match.uploadDate);

      vaultResult.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-celadon); margin-bottom: 6px;">
          // COORDINATE VERIFIED IN REGISTRY • ${mat.icon} ${mat.phaseName}
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--c-cream-light); margin-bottom: 12px;">
          ${match.title}
        </h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 18px; border-top: 1px solid var(--border-organic); padding-top: 12px;">
          <div><span style="color: var(--text-muted);">CONTINENT:</span> ${g.continent}</div>
          <div><span style="color: var(--text-muted);">COUNTRY:</span> ${g.country}</div>
          <div><span style="color: var(--text-muted);">REGION:</span> ${g.region}</div>
          <div><span style="color: var(--text-muted);">LOCATION:</span> ${g.location}</div>
          <div><span style="color: var(--text-muted);">EPOCH:</span> ${g.epoch}</div>
          <div><span style="color: var(--text-muted);">VOLUME:</span> #${g.volume}</div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button id="vault-jump-btn" style="flex: 1; background: var(--c-cream-parch); color: var(--c-espresso); border: 1px solid var(--c-warm-sand); padding: 10px; font-size: 0.82rem; font-weight: 700; cursor: pointer; border-radius: var(--radius-xs);">
            Locate Book on Shelf ↓
          </button>
          <a href="${match.amazonUrl}" target="_blank" rel="noopener" style="flex: 1; background: #141a16; color: var(--c-cream-light); border: 1px solid var(--border-organic); text-align: center; padding: 10px; font-size: 0.82rem; font-weight: 600; text-decoration: none; border-radius: var(--radius-xs);">
            Amazon Listing ↗
          </a>
        </div>
      `;

      document.getElementById("vault-jump-btn").addEventListener("click", () => {
        closeTerminal();
        window.location.hash = match.id;
        verifyDeepLink();
      });
    } else {
      vaultResult.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.82rem; color: #e57373;">
          [INVALID COORDINATE] Required syntax: <code>00.000.00.0000.0000.0000.000</code>
        </div>
      `;
    }
  }

  if (vaultSubmit) {
    vaultSubmit.addEventListener("click", () => decodeNumericCode(vaultInput.value));
  }
  if (vaultInput) {
    vaultInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") decodeNumericCode(vaultInput.value);
    });
  }

  shortcutPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const code = pill.getAttribute("data-code");
      vaultInput.value = code;
      decodeNumericCode(code);
    });
  });

  // Modal Sheet Detail
  const previewModal = document.getElementById("preview-modal");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("modal-overlay");

  function bindPreviewEvents() {
    document.querySelectorAll(".btn-inspect").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = archiveRecords.find(r => r.id === id);
        if (item) {
          const mat = calculateMaturation(item.uploadDate);

          modalBody.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--c-celadon); margin-bottom: 8px;">
              NUMERIC ARCHIVE REF: ${item.numericCode} • ${mat.icon} ${mat.phaseName}
            </div>
            <h2 style="font-family: var(--font-serif); font-size: 1.8rem; font-weight: 500; margin-bottom: 6px; color: var(--c-cream-light);">
              ${item.title}
            </h2>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 24px; padding-bottom: 14px; border-bottom: 1px solid var(--border-organic);">
              ${item.specs} • ${item.geoMeta.epoch}
            </div>
            <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--c-celadon); margin-bottom: 14px;">
              Manufacturing & Interior Specifications:
            </h4>
            <ul style="padding-left: 18px; color: var(--text-secondary); font-size: 0.88rem; line-height: 1.8; margin-bottom: 28px; font-weight: 300;">
              ${item.previewSpecs.map(s => `<li>${s}</li>`).join("")}
            </ul>
            <a href="${item.amazonUrl}" target="_blank" rel="noopener" class="btn-buy-amazon" style="text-decoration: none;">
              Order Bound Edition on Amazon ↗
            </a>
          `;
          previewModal.classList.add("active");
        }
      });
    });
  }

  function closePreview() {
    previewModal.classList.remove("active");
  }

  if (modalClose) modalClose.addEventListener("click", closePreview);
  if (modalOverlay) modalOverlay.addEventListener("click", closePreview);
});
