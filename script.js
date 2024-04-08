let num1;
let operator;
let num2;
let displayResult = "";
let displayNumber = "";

const display = document.querySelector(".result-display");
const number = document.querySelectorAll(".number");
const clearBtn = document.querySelector(".clearbtn");
const resultBtn = document.querySelector(".resultbtn");
const ops = document.querySelectorAll(".op");
const dot = document.querySelector(".dot");
const sign = document.querySelector(".sign");

ops.forEach((element) => {
  element.addEventListener("click", () => {
    grabValues();
    const textContent = element.textContent;
    displayResult += textContent;
    displayNumber = "";
  });
});

number.forEach((element) => {
  element.addEventListener("click", () => {
    const textContent = element.textContent;
    displayResult += textContent;
    displayNumber += textContent;
    display.textContent = displayNumber;
  });
});
dot.addEventListener("click", () => {
  displayNumber += ".";
  displayResult += ".";
  display.textContent = displayNumber;
});
isSigned = false;
sign.addEventListener("click", () => {
  if (!isSigned) {
    isSigned = !isSigned;
    displayResult = displayResult.replace(displayNumber, "");
    displayNumber = "-" + displayNumber;
    displayResult += displayNumber;
    display.textContent = displayNumber;
  } else {
    isSigned = !isSigned;
    displayNumber = displayNumber.replace("-", "");
    displayResult = displayResult.replace("-", "");
    display.textContent = displayNumber;
  }
});

function clearDisplay() {
  display.textContent = "";
  displayNumber = "";
  displayResult = "";
}

resultBtn.addEventListener("click", grabValues);

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
function modulo(num1, num2) {
  return num1 % num2;
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
    case "%":
      return modulo(num1, num2);
      break;
    default:
      break;
  }
}
function evaluate(op) {
  let opIndex = displayResult.indexOf(op);
  if (!opIndex) return;
  num1 = parseFloat(displayResult.slice(0, opIndex));
  num2 = parseFloat(displayResult.slice(opIndex + 1));
  console.log(num1, num2);
  let result = operate(num1, op, num2).toString();
  displayResult = result;
  displayNumber = result;
  display.textContent = displayResult;
}
function grabValues() {
  if (displayResult.includes("+")) {
    evaluate("+");
  } else if (displayResult.includes("-")) {
    evaluate("-");
  } else if (displayResult.includes("x")) {
    evaluate("*");
  } else if (displayResult.includes("/")) {
    evaluate("/");
  } else if (displayResult.includes("%")) {
    evaluate("%");
  }
}
