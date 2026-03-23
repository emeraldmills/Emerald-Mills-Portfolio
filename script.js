$(function () {
  const $flip = $("#flipbook");

  // If Turn.js didn’t load, stop here (prevents “it shows code” / broken)
  if (typeof $flip.turn !== "function") {
    alert("Turn.js did not load. Check your script links and try refresh (Cmd+Shift+R).");
    return;
  }

  function sizeBook() {
    const wrap = document.querySelector(".bookWrap");
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;

    // double-page book width should be close to wrap width
    $flip.turn("size", w, h);
  }

  // Init turn.js
  $flip.turn({
    width: document.querySelector(".bookWrap").clientWidth,
    height: document.querySelector(".bookWrap").clientHeight,

    display: "double",
    autoCenter: true,

    // This is the “speed” (ms). Higher = slower.
    duration: 1100,

    // These two make it feel more like paper
    acceleration: true,
    gradients: true,

    // Makes page edges feel thicker / more realistic
    elevation: 50
  });

  // Buttons
  $("#nextBtn").on("click", function () {
    $flip.turn("next");
  });

  $("#prevBtn").on("click", function () {
    $flip.turn("previous");
  });

  // Resize handler
  $(window).on("resize", function () {
    sizeBook();
  });

  // First size
  sizeBook();
});
