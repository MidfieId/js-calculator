const display = document.querySelector(".display");
display.textContent = "";
const digitButtons = document.querySelectorAll(".button");
let num1 = null;
let num2 = null;
let operator;
function add(num1, num2) {
  return +num1 + +num2;
}
function subtract(num1, num2) {
  return +num1 - +num2;
}
function multiply(num1, num2) {
  return +num1 * +num2;
}
function divide(num1, num2) {
  return +num1 / +num2;
}

function addToDisplay(e) {
  let buttonType = e.target.getAttribute("id");
  let lastCharacter = display.textContent[display.textContent.length - 1];
  let operators = ['+','-','*','/']
  if (buttonType === "clear") {
    num1 = null;
    num2 = null;
    operator = null;
    display.textContent = "";
    return;
  }
  if (
    buttonType === "+" ||
    buttonType === "-" ||
    buttonType === "*" ||
    buttonType === "/"
  ) {
    if (display.textContent === "" || lastCharacter === buttonType) {
      return;
    }
    if (num1 === null && num2 === null) {
      num1 = +display.textContent;
      display.textContent += buttonType;
    } else if (num1 != null && num2 === null) {
      display.textContent += buttonType;
      let expression = display.textContent.split(buttonType);
      // loop through the operators array and check if the expression includes them, this should happen before i add in my second operator
      operators.forEach(op =>{
        if(expression.includes(op)){
          
        }
      })
      // if it does include an operator, split the string into 3 parts, left of the operator, right of the operator, and the operator itself
      if(expression[1] === "") {
        console.log(expression[1])
        return;
      }
      num2 = +expression[1];
      let result = operate(num1, num2, buttonType);
      console.log(num2);
      num1 = result;
      display.textContent = result;
      num2 = null;
      console.log(num2);
    }
  } else {
    display.textContent += e.target.textContent;
  }

  // when a number is being typed in, just keep adding it to the display

  // when an operator is clicked, add the previously typed number to the first variable and
}

function operate(num1, num2, operator) {
  switch (operator) {
    case "-": {
      return subtract(num1, num2);
    }
    case "+": {
      return add(num1, num2);
    }
    case "*": {
      return multiply(num1, num2);
    }
    case "/": {
      return divide(num1, num2);
    }
    default:
      return;
  }
}

digitButtons.forEach((button) => {
  button.addEventListener("click", addToDisplay);
});
