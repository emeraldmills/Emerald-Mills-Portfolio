// StPageFlip: realistic single-page turns + bending/curl illusion
document.addEventListener("DOMContentLoaded", () => {
  const bookEl = document.getElementById("book");
  const pagesEl = document.getElementById("pages");

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  // Create pageFlip instance
  const pageFlip = new St.PageFlip(bookEl, {
    width: 380,          // single page width
    height: 560,         // page height
    size: "stretch",
    minWidth: 315,
    maxWidth: 500,
    minHeight: 420,
    maxHeight: 760,

    showCover: false,    // book style, not a cover book
    mobileScrollSupport: false,

    // Realistic feel
    flippingTime: 1100,  // flip speed (ms)
    useMouseEvents: true,
    swipeDistance: 30,
    maxShadowOpacity: 0.35,
  });

  // Load HTML pages from hidden container
  pageFlip.loadFromHTML(pagesEl.querySelectorAll(".pf-page"));

  function updateButtons() {
    const current = pageFlip.getCurrentPageIndex();
    const total = pageFlip.getPageCount();

    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= total - 1;
  }

  updateButtons();

  // Buttons
  nextBtn.addEventListener("click", () => pageFlip.flipNext());
  prevBtn.addEventListener("click", () => pageFlip.flipPrev());

  // Update button state after flip
  pageFlip.on("flip", updateButtons);

  // Resize on window resize so it stays clean
  window.addEventListener("resize", () => {
    pageFlip.update();
  });
});
