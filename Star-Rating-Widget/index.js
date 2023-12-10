let starsContainer = document.getElementById("stars");
let active = -1;

for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");
  starImg.src = "./star.svg";
  starImg.className = "star-style";
  starsContainer.appendChild(starImg);

  starImg.addEventListener("mouseover", () => onStarHover(i));
  starImg.addEventListener("click", () => onStarClick(i));
  starImg.addEventListener("mouseleave", onStarOut);
}
let stars = document.querySelectorAll(".star-style");

function onStarHover(i) {
  fillStar(i);
}
function fillStar(val) {
  for (let i = 0; i < 5; i++) {
    if (i <= val) {
      stars[i].src = "./star-filled.svg";
    } else {
      stars[i].src = "./star.svg";
    }
  }
}
function onStarClick(i) {
  active = i;
  document.getElementById("star-value").innerHTML = i + 1;
  fillStar(active);
}
function onStarOut() {
  fillStar(active);
}
