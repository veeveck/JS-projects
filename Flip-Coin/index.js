let heads = 0;
let tails = 0;
let coin = document.querySelector(".coins");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let headCount = document.querySelector("#heads-count");
let tailCount = document.querySelector("#tails-count");

flipBtn.addEventListener("click", () => {});
resetBtn.addEventListener("click", () => {});

//Update State of head n tails
function updateState() {
  headCount.textContent = `Heads :${heads}`;
  tailCount.textContent = `Tails :${tails}`;
}
//Reset State
resetBtn.addEventListener("click", () => {
  heads = 0;
  tails = 0;
  updateState();
});
