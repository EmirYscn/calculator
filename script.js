let num1;
let operator;
let num2;
let displayValue = "";

const display = document.querySelector(".result-display");
const btnd = document.querySelectorAll(".btnd");
const clearBtn = document.querySelector(".clearbtn");
const resultBtn = document.querySelector(".resultbtn");

btnd.forEach((element) => {
  element.addEventListener("click", () => {
    const textContent = element.textContent;
    displayValue += textContent;
    display.textContent = displayValue;
  });
});

function clearDisplay() {
  display.textContent = "";
  displayValue = "";
}

clearBtn.addEventListener("click", clearDisplay);

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "*":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      break;
  }
}
