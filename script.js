// Flip speed (ms). Bigger = slower.
const FLIP_DURATION = 900; // try 700–1200

$(function () {
  const $flip = $("#flipbook");

  // Build the flipbook
  $flip.turn({
    width: $flip.parent().width(),
    height: $flip.parent().height(),
    autoCenter: true,
    display: "double",     // shows 2 pages like a real book
    duration: FLIP_DURATION,
    acceleration: true,
    gradients: true,
    elevation: 50          // makes the curl feel more “real”
  });

  // Buttons
  $("#nextBtn").on("click", function () {
    $flip.turn("next");
  });

  $("#prevBtn").on("click", function () {
    $flip.turn("previous");
  });

  // Resize handling (keeps it looking right if window changes)
  $(window).on("resize", function () {
    const w = $flip.parent().width();
    const h = $flip.parent().height();
    $flip.turn("size", w, h);
    $flip.turn("center");
  });
});
