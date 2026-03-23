const pages = Array.from(document.querySelectorAll(".page"));
let index = 0;

function render() {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
    p.classList.toggle("flipped", i < index);

    p.style.zIndex = i === index ? 10 : (i < index ? 2 : 1);
  });

  document.getElementById("prevBtn").disabled = (index === 0);
  document.getElementById("nextBtn").disabled = (index === pages.length - 1);
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (index < pages.length - 1) index++;
  render();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (index > 0) index--;
  render();
});

/* Mouse / Trackpad drag flipping */
const bookEl = document.getElementById("book");
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
    index++;
    render();
  } else if (dx > 60 && index > 0) {
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
    index++;
    render();
  } else if (dx > 60 && index > 0) {
    index--;
    render();
  }
}, { passive: true });

render();
