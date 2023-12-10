let starsContainer = document.getElementById("stars");
for (let i = 0; i < 5; i++) {
  let starImg = document.createElement("img");
  starImg.src = "./star.svg";
  starImg.className = "star-style";
  starsContainer.appendChild(starImg);
}
