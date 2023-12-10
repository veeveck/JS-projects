const progress = document.querySelector(".progress-done");
const val = document.querySelector(".input-value");
const maxVal = document.querySelector(".max-value");
let finalVal = 0;
let finalMaxVal = 0;

function changeWidth() {
  progress.style.width = `${(finalVal / finalMaxVal) * 100}%`;
  progress.innerText = `${Math.ceil((finalVal / finalMaxVal) * 100)}%`;
}
val.addEventListener("keyup", function () {
  finalVal = parseInt(val.value, 10);
  changeWidth();
});
maxVal.addEventListener("keyup", function () {
  finalMaxVal = parseInt(maxVal.value, 10);
  changeWidth();
});
