const sheets = Array.from(document.querySelectorAll(".sheet"));
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let index = 0; // which sheet we are currently on (0 = first)

function updateButtons() {
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === sheets.length;
  prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}

function flipNext() {
  if (index >= sheets.length) return;
  sheets[index].classList.add("flipped");
  index++;
  updateButtons();
}

function flipPrev() {
  if (index <= 0) return;
  index--;
  sheets[index].classList.remove("flipped");
  updateButtons();
}

nextBtn.addEventListener("click", flipNext);
prevBtn.addEventListener("click", flipPrev);

/* Click page corners */
document.querySelectorAll(".cornerNext").forEach(el => {
  el.addEventListener("click", flipNext);
});
document.querySelectorAll(".cornerPrev").forEach(el => {
  el.addEventListener("click", flipPrev);
});

/* Optional: keyboard support */
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") flipNext();
  if (e.key === "ArrowLeft") flipPrev();
});

updateButtons();
