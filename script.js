// Turn.js flipbook setup
$(function () {
  const $flip = $("#flipbook");

  // If Turn.js didn't load, this prevents a silent "nothing happens"
  if (typeof $flip.turn !== "function") {
    console.error("Turn.js did not load. Check the script link in index.html.");
    return;
  }

  $flip.turn({
    width: $flip.parent().width(),
    height: 560,
    autoCenter: true,
    display: "double",
    acceleration: true,
    gradients: true
  });

  // Buttons
  $("#nextBtn").on("click", function () {
    $flip.turn("next");
  });

  $("#prevBtn").on("click", function () {
    $flip.turn("previous");
  });

  // Resize responsiveness
  $(window).on("resize", function () {
    const w = $flip.parent().width();
    $flip.turn("size", w, 560);
    $flip.turn("center");
  });
});
