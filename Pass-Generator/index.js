const passInput = document.querySelector(".input-box input");
const options = document.querySelectorAll(".option input");
const generateButton = document.querySelector(".generate-btn");
const slider = document.querySelector(".pass-length input");
const passIndicator = document.querySelector(".pass-indicator");
const copyIcon = document.querySelector(".input-box span");

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQSTUVWXYZ",
  symbols: "!@#$%^&*()_+-=~",
  numbers: "0123456789",
};
const generatePassword = () => {
  let staticPwd = "",
    randomPwd = "",
    passLength = slider.value;
  excludeDuplicate = false;
  options.forEach((option) => {
    if (option.checked) {
      staticPwd += characters[option.id];
    }
  });
  for (let i = 0; i < passLength; i++) {
    let randomChar = staticPwd[Math.floor(Math.random() * staticPwd.length)];
    console.log(randomChar);
    randomPwd += randomChar;
  }
  passInput.value = randomPwd;
};
const updatePassIndicator = () => {
  passIndicator.id =
    slider.value <= 8 ? "weak" : slider.value <= 16 ? "medium" : "strong";
};
const updateSlider = () => {
  document.querySelector(".pass-length span").innerText = slider.value;
  generatePassword();
  updatePassIndicator();
};
const copyText = () => {
  navigator.clipboard.writeText(passInput.value);
  copyIcon.innerText = "copied";
  copyIcon.style.color = "#72a92a";
  setTimeout(() => {
    copyIcon.innerText = "copy_all";
    copyIcon.style.color = "#707070";
  }, 1200);
};
slider.addEventListener("input", updateSlider);
copyIcon.addEventListener("click", copyText);
generateButton.addEventListener("click", generatePassword);
