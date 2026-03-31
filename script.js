// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Nav shadow on scroll
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.style.boxShadow = window.scrollY > 10 ? "0 8px 24px rgba(0,0,0,.08)" : "none";
});
