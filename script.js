const pages = Array.from(document.querySelectorAll(".page"));
let index = 0;

function showPage(i){
  pages.forEach((p, idx) => {
    p.classList.toggle("active", idx === i);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if(index < pages.length - 1) index++;
  showPage(index);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if(index > 0) index--;
  showPage(index);
});

showPage(index);
