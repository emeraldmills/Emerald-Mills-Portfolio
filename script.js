const pages = Array.from(document.querySelectorAll(".page"));
let index = 0;

const bookEl = document.getElementById("book");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function render() {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
    p.classList.toggle("flipped", i < index);
    p.style.zIndex = i === index ? 10 : (i < index ? 2 : 1);
  });

  prevBtn.disabled = (index === 0);
  nextBtn.disabled = (index === pages.length - 1);
}

function markTurning(duration = 900) {
  const p = pages[index];
  p.classList.add("turning");
  setTimeout(() => p.classList.remove("turning"), duration);
}

function buttonFlip(step) {
  // Slow animation only for button press + bend effect
  const turningPage = pages[index];
  turningPage.classList.add("turning");

  bookEl.classList.add("buttonFlip");

  index = Math.max(0, Math.min(pages.length - 1, index + step));
  render();

  setTimeout(() => {
    turningPage.classList.remove("turning");
    bookEl.classList.remove("buttonFlip");
  }, 2900);
}

nextBtn.addEventListener("click", () => {
  if (index < pages.length - 1) buttonFlip(+1);
});

prevBtn.addEventListener("click", () => {
  if (index > 0) buttonFlip(-1);
});

/* Mouse / Trackpad drag flipping (normal speed + quick bend) */
let dragging = false;
let startX = 0;
let moved = false;

bookEl.addEventListener("mousedown", (e) => {
  dragging = true;
  moved = false;
  startX = e.clientX;
});

window.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 10) moved = true;
});

window.addEventListener("mouseup", (e) => {
  if (!dragging) return;
  dragging = false;

  const dx = e.clientX - startX;
  if (!moved) return;

  if (dx < -60 && index < pages.length - 1) {
    markTurning(900);
    index++;
    render();
  } else if (dx > 60 && index > 0) {
    markTurning(900);
    index--;
    render();
  }
});

/* Touch support */
bookEl.addEventListener("touchstart", (e) => {
  const t = e.touches[0];
  startX = t.clientX;
}, { passive: true });

bookEl.addEventListener("touchend", (e) => {
  const t = e.changedTouches[0];
  const dx = t.clientX - startX;

  if (dx < -60 && index < pages.length - 1) {
    markTurning(900);
    index++;
    render();
  } else if (dx > 60 && index > 0) {
    markTurning(900);
    index--;
    render();
  }
}, { passive: true });

render();
