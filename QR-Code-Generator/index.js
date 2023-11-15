const download = document.querySelector(".download");
const shareBtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrAreaCode = document.querySelector("#qr-code");
const qrText = document.querySelector(".qr-text");

dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", sizeHandler);
shareBtn.addEventListener("click", shareHandler);

const defaultUrl = "https://www.google.com";
let colorLight = "#fff",
  colorDark = "#000",
  text = defaultUrl,
  size = 300;

function handleDarkColor(e) {
  colorDark = e.target.value;
  generateQRCode();
}
function handleLightColor(e) {
  colorLight = e.target.value;
  generateQRCode();
}
function handleQRText(e) {
  const value = e.target.value;
  text = value;
  if (!value) text = defaultUrl;
  generateQRCode();
}
async function generateQRCode() {}
