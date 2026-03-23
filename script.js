$(function () {
  // Initialize Turn.js
  $("#flipbook").turn({
    width: $("#flipbook").width(),
    height: 560,
    autoCenter: true
  });

  // Buttons
  document.getElementById("nextBtn").addEventListener("click", () => {
    $("#flipbook").turn("next");
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    $("#flipbook").turn("previous");
  });

  // Keyboard support (optional)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") $("#flipbook").turn("next");
    if (e.key === "ArrowLeft") $("#flipbook").turn("previous");
  });

  // Resize handling
  window.addEventListener("resize", () => {
    const w = Math.min(720, document.querySelector(".openBookWrap").clientWidth);
    $("#flipbook").turn("size", w, window.innerWidth < 980 ? 520 : 560);
  });
});
