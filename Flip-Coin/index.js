let heads = 0;
let tails = 0;
let coin = document.querySelector(".coins");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let headCount = document.querySelector("#heads-count");
let tailCount = document.querySelector("#tails-count");

//Update State of head n tails
function updateState() {
  headCount.textContent = `Heads : ${heads}`;
  tailCount.textContent = `Tails : ${tails}`;
}
//Reset State
resetBtn.addEventListener("click", () => {
  heads = 0;
  tails = 0;
  updateState();
});
//Flip Coin
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateState, 2000);
  disableButton();
});
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 2000);
}
