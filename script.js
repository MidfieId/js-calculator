function add(num1, num2) {
  return;
}
function subtract(num1, num2) {
  return;
}
function multiply(num1, num2) {
  return;
}
function divide(num1, num2) {
  return;
}

function addToDisplay(e) {
  let buttonType = e.target.getAttribute("id");
  switch (buttonType) {
    case "+": {
      break;
    }
    case "-": {
      break;
    }
    case "-": {
      break;
    }
    case "-": {
      break;
    }
  }
}

function operate(num1,num2,operator){
    
}
const display = document.querySelector(".display");
display.textContent = "";
const digitButtons = document.querySelectorAll(".button");

digitButtons.addEventListener("click", addToDisplay);
