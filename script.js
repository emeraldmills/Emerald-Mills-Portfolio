const pages = Array.from(document.querySelectorAll(".page"));
let index = 0;

function render() {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
    p.classList.toggle("flipped", i < index);
    // keep stack order stable
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

render();
