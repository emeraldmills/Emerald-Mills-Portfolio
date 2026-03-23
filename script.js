document.addEventListener("DOMContentLoaded", () => {
  const $flip = $("#flipbook");

  // IMPORTANT: Turn.js needs real sizes
  $flip.turn({
    width: $flip.width(),
    height: $flip.height(),
    autoCenter: true,
    gradients: true,
    elevation: 50
  });

  // Buttons
  document.getElementById("nextBtn").addEventListener("click", () => {
    $flip.turn("next");
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    $flip.turn("previous");
  });

  // Keyboard (optional)
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") $flip.turn("next");
    if (e.key === "ArrowLeft") $flip.turn("previous");
  });

  // Resize fix
  window.addEventListener("resize", () => {
    const w = $flip.width();
    const h = $flip.height();
    $flip.turn("size", w, h);
  });
});
