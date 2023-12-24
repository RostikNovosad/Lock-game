const firstInput = document.querySelector(".num1");
const secondInput = document.querySelector(".num2");
const thirdInput = document.querySelector(".num3");
const tryBtn = document.querySelector(".try");
const resetBtn = document.querySelector(".reset");
const startBtn = document.querySelector(".start");
const lock = document.querySelector(".lock-img");
const firstMessage = document.querySelector(".message-1");
const secondMessage = document.querySelector(".message-2");
const thirdMessage = document.querySelector(".message-3");
const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close-hint");
const heading = document.querySelector(".heading");

let userNumberArr = [];
let gameNumberArr = [];

const createRandomNumber = () => {
  const gameNumber = parseInt(Math.random() * 999);

  gameNumberArr = gameNumber.toString().split("");

  if (gameNumberArr.length < 3) {
    gameNumberArr.unshift("0");
    if (gameNumberArr.length < 3) {
      gameNumberArr.unshift("0");
    }
  }
  console.log(gameNumberArr);
};

const comparison = () => {
  let corectNumber = 0;

  for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
      if (userNumberArr[0] === gameNumberArr[0]) {
        firstMessage.textContent = "Перше число вірне";
        corectNumber++;
      } else {
        firstMessage.textContent = "Перше число невірне";
      }
      if (userNumberArr[1] === gameNumberArr[1]) {
        secondMessage.textContent = "Перше число вірне";
        corectNumber++;
      } else {
        secondMessage.textContent = "Перше число невірне";
      }
      if (userNumberArr[2] === gameNumberArr[2]) {
        thirdMessage.textContent = "Перше число вірне";
        corectNumber++;
      } else {
        thirdMessage.textContent = "Перше число невірне";
      }
    }
  }
  userNumberArr = [];
  if (corectNumber === 27) {
    lock.src = "./img/unlock.png";
    changeHeading("Ви виграли!");
  } else {
    backdrop.classList.remove("hidden");
  }
};

const procesingInput = () => {
  const firstInputValue = firstInput.value;
  const secondInputValue = secondInput.value;
  const thirdInputValue = thirdInput.value;

  userNumberArr.push(firstInputValue, secondInputValue, thirdInputValue);
  console.log(userNumberArr);
};

const disabledCheck = () => {
  tryBtn.removeAttribute("disabled");
};

const closeBackdropBtn = () => {
  backdrop.classList.add("hidden");
};

const changeHeading = (text) => {
  heading.textContent = text;
};

closeBtn.addEventListener("click", closeBackdropBtn);
startBtn.addEventListener("click", () => {
  createRandomNumber();
  disabledCheck();
  changeHeading("Введіть число");
});
tryBtn.addEventListener("click", () => {
  procesingInput();
  comparison();
});
resetBtn.addEventListener("click", () => {
  location.reload();
});
