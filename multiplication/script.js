const formEl = document.getElementById("form");
const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const bodyEL = document.getElementsByTagName("body");


const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;
const currectAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerHTML = `score: ${score}`;
formEl.addEventListener("submit", () => {
  const userAns = Number.parseInt(inputEl.value);

  if (userAns === currectAns) {
    score++;
    updateLocalStorage();
  } else {
    formEl.classList.add("wrongAnsEffect");
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

// const questionEl = document.getElementById('questionEl')
// const inputNumber = document.getElementById("inputNumber");
// const submitButton = document.getElementById("submitButton");
// const score = document.getElementById('score')

// const random1 = Math.floor(Math.random() * 10) + 1;
// const random2 = Math.floor(Math.random() * 10) + 1;

// questionEl.innerText = `What is ${random1} multiplay by ${random2}?`

// const multiplayNumber = random1 * random2

// submitButton.addEventListener("submit", function () {
//   event.preventDefault()

//   randomNumber1.innerHTML = random1;
//   randomNumber2.innerHTML = random2;

//   const totalNumber = random1 * random2;
//   const  newNumber = Number.parseInt(inputNumber.value)

//   const result = (totalNumber === newNumber) ? 'Currect' : 'Wrong'

//   console.log(result);
// });
