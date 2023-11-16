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
async function generateQRCode() {
  qrAreaCode.innerHTML = "";
  new QRCode("qr-code", {
    text,
    height: size,
    width: size,
    colorLight,
    colorDark,
  });
  download.href = await resolveDataUrl();
}
async function shareHandler() {
  setTimeout(async () => {
    try {
      const baseUrl = await resolveDataUrl();
      const blob = await (await fetch(baseUrl)).blob();
      const file = new File([blob], "QRCode.png", {
        type: blob.type,
      });
      await navigator.share({
        files: [file],
        title: text,
      });
    } catch (error) {
      alert("Browser doesn't support sharing.");
    }
  }, 100);
}
function sizeHandler(e) {
  size = e.target.value;
  generateQRCode();
}
function resolveDataUrl() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = document.querySelector("#qr-code img");
      if (img.currentSrc) {
        resolve(img.currentSrc);
        return;
      }
      const canvas = document.querySelector("canvas");
      resolve(canvas.toDataURL());
    }, 50);
  });
}
