const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("write-input");

let quote = "";
let time = 30;
let timer = "";
let mistakes = 0;

const renderNewQuote = async () => {
  const response = await fetch(quoteApiUrl);
  let data = await response.json();
  quote = data.content;
  let arr = quote.split("").map((val) => {
    return "<span class='quote-chars'>" + val + "</span>";
  });
  quoteSection.innerHTML += arr.join("");
};

userInput.addEventListener("input", () => {
  let quoteChars = document.querySelectorAll(".quote-chars");
  quoteChars = Array.from(quoteChars);

  let userChars = userInput.value.split("");
  quoteChars.forEach((char, index) => {
    // check user char with user char
    if (char.innerText == userChars[index]) {
      char.classList.add("success");
      //user backspaced
    } else if (userChars[index] == null) {
      if (char.classList.contains("success")) {
        char.classList.remove("success");
      } else {
        char.classList.remove("fail");
      }
    }
    //user enters wrong character
    else {
      char.classList.add("fail");
      mistakes++;
      document.getElementById("mistakes").innerText = mistakes;
    }
    let check = quoteChars.every((el) => {
      return el.classList.contains("success");
    });
    if (check) {
      displayResult();
    }
  });
});
//Set Timer
const timeReduce = () => {
  time = 30;
  timer = setInterval(updateTimer, 1000);
};
function updateTimer() {
  if (time == 0) {
    displayResult();
  } else {
    document.getElementById("timer").innerText = --time + "s";
  }
}

const displayResult = () => {
  document.querySelector(".result").style.display = "block";
  clearInterval(timer);
  document.getElementById("stop-test").style.display = "none";
  userInput.disabled = true;
  let timeTaken = 1;
  if (time != 0) {
    timeTaken = (30 - time) / 100;
  }
};
const startTest = () => {
  mistakes = 0;
  timer = "";
  userInput.disabled = false;
  timeReduce();
  document.getElementById("start-test").style.display = "none";
  document.getElementById("stop-test").style.display = "block";
};

window.onload = () => {
  userInput.value = "";
  document.getElementById("start-test").style.display = "block";
  document.getElementById("stop-test").style.display = "none";
  renderNewQuote();
};
