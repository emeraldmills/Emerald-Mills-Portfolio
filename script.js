// Flip card (Hero)
const heroCard = document.getElementById("heroCard");
const flipBtn = document.getElementById("flipBtn");
const flipBackBtn = document.getElementById("flipBackBtn");

if (flipBtn && heroCard) {
  flipBtn.addEventListener("click", () => heroCard.classList.add("flipped"));
}
if (flipBackBtn && heroCard) {
  flipBackBtn.addEventListener("click", () => heroCard.classList.remove("flipped"));
}

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// Scroll animations (simple)
const aosEls = document.querySelectorAll(".aos");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

aosEls.forEach((el) => obs.observe(el));

// Nav shadow on scroll
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.style.boxShadow =
    window.scrollY > 10 ? "0 2px 16px rgba(0,0,0,.08)" : "none";
});

// Resume placeholder
const resumeBtn = document.getElementById("resumeBtn");
if (resumeBtn) {
  resumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Resume download coming soon!");
  });
}
