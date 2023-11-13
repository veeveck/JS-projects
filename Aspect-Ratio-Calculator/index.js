let widthRatio = document.getElementById("width-ratio");
let heightRatio = document.getElementById("height-ratio");
let width = document.getElementById("width");
let height = document.getElementById("height");

let calcWidth = () => {
  let aspectRatio = widthRatio.value / heightRatio.value;
  width.value = parseFloat(height.value * aspectRatio).toFixed(2);
};
let calcHeight = () => {
  let aspectRatio = widthRatio.value / heightRatio.value;
  height.value = parseFloat(width.value / aspectRatio).toFixed(2);
};
heightRatio.addEventListener("input", calcWidth);
widthRatio.addEventListener("input", calcHeight);
width.addEventListener("input", calcHeight);
height.addEventListener("input", calcWidth);
