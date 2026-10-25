// TheBookGuy Minimalist Gallery & Color-Shifting Maturation Engine
document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      id: "florence",
      shortTitle: "Florence (1450)",
      coverName: "FLORENCE // RENAISSANCE",
      coverImage: "assets/covers/florence_1450.png",
      vol: "VOL. 001",
      uploadDate: "2026-10-25", // 0 days -> Sprout (Celadon Green shift)
      numericCode: "02.380.09.0501.1450.1550.001",
      amazonUrl: "https://amazon.com"
    },
    {
      id: "giza",
      shortTitle: "Giza (2550 BCE)",
      coverName: "GIZA // DYNASTY IV",
      coverImage: null,
      vol: "VOL. 002",
      uploadDate: "2026-10-10", // 15 days -> In Bloom (Warm Sand shift)
      numericCode: "01.818.04.0042.2550.2490.001",
      amazonUrl: "https://amazon.com"
    },
    {
      id: "edo",
      shortTitle: "Edo (1603)",
      coverName: "EDO // SHOGUNATE",
      coverImage: null,
      vol: "VOL. 003",
      uploadDate: "2026-08-15", // 71 days -> Ripened (Terracotta Leather shift)
      numericCode: "03.392.13.0108.1603.1867.001",
      amazonUrl: "https://amazon.com"
    }
  ];

  // -------------------------------------------------------------
  // PURE COLOR-SHIFTING MATURATION (Zero Text Labels)
  // -------------------------------------------------------------
  function getMaturationClass(uploadDateStr) {
    const uploadTime = new Date(uploadDateStr).getTime();
    const now = new Date().getTime();
    const days = Math.floor(Math.max(0, now - uploadTime) / (1000 * 60 * 60 * 24));

    if (days <= 7) {
      return "bloom-sprout";    // Celadon Green
    } else if (days <= 30) {
      return "bloom-flower";    // Warm Sand Linen
    } else if (days <= 90) {
      return "bloom-ripe";      // Terracotta Leather
    } else {
      return "bloom-ancient";   // Aged Espresso / Sage
    }
  }

  const grid = document.getElementById("book-grid");

  function renderGallery() {
    grid.innerHTML = "";
    books.forEach(b => {
      const maturationClass = getMaturationClass(b.uploadDate);
      const card = document.createElement("article");
      card.className = `book-card ${maturationClass}`;
      card.id = b.id;

      const imageStyle = b.coverImage ? `style="background-image: url('${b.coverImage}');"` : "";
      const hasImageClass = b.coverImage ? "has-image" : "";

      card.innerHTML = `
        <div class="card-photo-box">
          <div class="cover-mockup ${hasImageClass}" ${imageStyle}>
            <span class="mockup-vol">${b.vol}</span>
            <div class="mockup-name">${b.coverName}</div>
            <span class="mockup-mark">THEBOOKGUY</span>
          </div>
        </div>
        <div class="card-bottom-row">
          <span class="short-title">${b.shortTitle}</span>
          <a href="${b.amazonUrl}" target="_blank" rel="noopener" class="btn-buy-compact">Buy -&gt;</a>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  renderGallery();

  // -------------------------------------------------------------
  // DEEP LINK 2-SECOND GLOW
  // -------------------------------------------------------------
  function checkDeepLink() {
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

  checkDeepLink();
  window.addEventListener("hashchange", checkDeepLink);

  // -------------------------------------------------------------
  // HIDDEN QUEST TERMINAL
  // -------------------------------------------------------------
  const vaultModal = document.getElementById("vault-modal");
  const openVaultBtn = document.getElementById("open-vault-btn");
  const closeVaultBtn = document.getElementById("vault-close");
  const vaultOverlay = document.getElementById("vault-overlay");
  const vaultInput = document.getElementById("vault-code-input");
  const vaultSubmit = document.getElementById("vault-submit-btn");
  const vaultResult = document.getElementById("vault-result");

  function openTerminal() {
    vaultModal.classList.add("active");
    vaultInput.focus();
  }

  function closeTerminal() {
    vaultModal.classList.remove("active");
  }

  if (openVaultBtn) openVaultBtn.addEventListener("click", openTerminal);
  if (closeVaultBtn) closeVaultBtn.addEventListener("click", closeTerminal);
  if (vaultOverlay) vaultOverlay.addEventListener("click", closeTerminal);

  if (vaultSubmit) {
    vaultSubmit.addEventListener("click", () => {
      const code = vaultInput.value.trim();
      const match = books.find(b => b.numericCode === code);
      vaultResult.classList.add("active");

      if (match) {
        vaultResult.innerHTML = `
          <div style="color: var(--c-celadon); font-family: var(--font-mono); font-size: 0.76rem; margin-bottom: 6px;">
            // QUEST UNLOCKED: ${match.shortTitle}
          </div>
          <div style="font-size: 0.85rem; color: var(--text-primary); margin-bottom: 10px;">
            Coordinate verified in archive records.
          </div>
          <button id="jump-quest-btn" style="background: var(--c-cream-parch); color: var(--c-espresso); border: none; padding: 6px 12px; font-size: 0.78rem; font-weight: 700; cursor: pointer; border-radius: var(--radius-xs);">
            Jump to Book Tile ↓
          </button>
        `;
        document.getElementById("jump-quest-btn").addEventListener("click", () => {
          closeTerminal();
          window.location.hash = match.id;
          checkDeepLink();
        });
      } else {
        vaultResult.innerHTML = `<span style="color: #e57373; font-family: var(--font-mono);">Coordinate not found.</span>`;
      }
    });
  }
});
