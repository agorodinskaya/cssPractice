import { operations } from "./utilis";
import { clear } from "./utilis";
// declarations :
const calculator = document.querySelector(".calculator");
// buttons are children of .calculator:
const buttons = document.querySelector(".buttons");
const display = document.querySelector(".display");

// calculator buttons event listener => since buttons are .calculators children, add event delegation pattern to listen to buttons press:
//if button has action attribute it is either operator, decimal, equal or clear. Without data-action attribute it is number.
//decimal adds dot;
//equal performs the calculation using the formulas from line 104;
//clear - sets values to 0;
// no action - numbers:
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const clicked = e.target;
    const action = clicked.dataset.action;
    const clickedContent = clicked.textContent;
    const displayedNum = display.textContent;
    // Remove .is-depressed class from all clicked, added when button pressed on line 60:
    Array.from(clicked.parentNode.children).forEach((k) =>
      k.classList.remove("is-depressed")
    );
    const previousKeyType = calculator.dataset.previousKeyType;

    //If the calculator's display shows 0, replace it with clicked number on the button.
    //Else the calculator shows a non - zero number, append/concat the clicked number on the button to the displayed number.
    // set previousKeyType to "number":
    if (!action) {
      if (
        displayedNum === "0" ||
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = clickedContent;
      } else {
        display.textContent = displayedNum + clickedContent;
      }
      calculator.dataset.previousKeyType = "number";
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
      // action === 'percent'
    ) {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;
      // if the first Value and operator exist and previousKeyTypes were operator and calculate apply and display operations function from line 104:
      if (
        firstValue &&
        operator &&
        previousKeyType !== "operator" &&
        previousKeyType !== "calculate"
      ) {
        const calcValue = operations(firstValue, operator, secondValue);
        display.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = displayedNum; // display first number
      }
      //to highlighed the button being pressed add class "is-depressed", rempve it in lines 21-22:
      clicked.classList.add("is-depressed");
      //custom attribute used to tell which was the previous button pressed in order to select the second number in line 30:
      calculator.dataset.previousKeyType = "operator";
      // to get the first number saved, store the operator custom attribute:
      calculator.dataset.operator = action;
    }
    // if the user presses decimal and it does not already include a dot, concat the number with the "."
    // else if the previously hit is an operator or calculate button the display should show "0."
    // set the previousKeyType to "decimal"
    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        display.textContent = displayedNum + ".";
      } else if (
        previousKeyType === "operator" ||
        previousKeyType === "calculate"
      ) {
        display.textContent = "0.";
      }
      calculator.dataset.previousKeyType = "decimal";
    }
    // if action clear => set all the values to intial / zero, set the previousKeyType to "clear":
    if (action === "clear") {
      calculator.dataset.firstValue = clear().firstValue;
      // console.log(clear().firstValue)
      // console.log(typeof calculator.dataset.firstValue, calculator.dataset.firstValue)
      calculator.dataset.modValue = clear().modValue;
      calculator.dataset.operator = clear().operator;
      calculator.dataset.previousKeyType = clear().previousKeyType;
      display.textContent = clear().textContent;
      // set previous KeyType to 'clear':
      calculator.dataset.previousKeyType = "clear";
    }
    // if action is caculate use the stored info (first, operator, second) to perform the calculation
    if (action === "calculate") {
      const firstValue = calculator.dataset.firstValue; // value of first number stored
      const operator = calculator.dataset.operator; // operator stored
      const secondValue = displayedNum; // second value stored
      if (firstValue) {
        if (previousKeyType === "calculate") {
          firstValue = displayedNum;
          secondValue = calculator.dataset.modValue;
        }
        // error - cannot divide by 0 :
        if (operations(firstValue, operator, secondValue) === "error1") {
          display.textContent = "Error, cannot divide by 0";
          display.style.background = "#ef4565";
          display.style.fontSize = "2rem";
          setTimeout(function () {
            display.style.background = "#72757e";
            display.textContent = firstValue;
            calculator.dataset.firstValue = "";
            calculator.dataset.modValue = "";
            calculator.dataset.operator = "";
            calculator.dataset.previousKeyType = "";
            display.style.fontSize = "4rem";
          }, 1000);
        } // display when no error:
        else
          display.textContent = operations(firstValue, operator, secondValue); // call function from line 104 based on the action chosen
      }
      calculator.dataset.previousKeyType = "calculate";
    }
  }
});
