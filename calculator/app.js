
// declarations :
const calculator = document.querySelector('.calculator');
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');

// calculator buttons event listener; 
//if button has action - operator, 
//decimal adds dot; 
//equal performs the calculation using the formulas from line 90; 
//clear - sets values to 0;  
// no action - numbers: 
buttons.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const clicked = e.target;
        const action = clicked.dataset.action;
        const clickedContent = clicked.textContent;
        const displayedNum = display.textContent;
        // Remove .is-depressed class from all clicked
        Array.from(clicked.parentNode.children).forEach((k) =>
            k.classList.remove("is-depressed")
        );

        const previousKeyType = calculator.dataset.previousKeyType;

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = clickedContent;
            } else {
                display.textContent = displayedNum + clickedContent;
            }
            calculator.dataset.previousKeyType = 'number';
        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
            // action === 'percent'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;

            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator' &&
                previousKeyType !== 'calculate'
            ) {
                const calcValue = operations(firstValue, operator, secondValue)
                display.textContent = calcValue
                calculator.dataset.firstValue = calcValue
            } else {
                calculator.dataset.firstValue = displayedNum
            }

            clicked.classList.add('is-depressed');
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.operator = action;
        }
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.';
            }
            calculator.dataset.previousKeyType = 'decimal';
        }
        if (action === 'clear') {
            if (clicked.textContent === 'AC') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
            }
            display.textContent = 0;
            calculator.dataset.previousKeyType = 'clear';
        }
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum;
                    secondValue = calculator.dataset.modValue;
                }
                display.textContent = operations(firstValue, operator, secondValue);
            }
            calculator.dataset.previousKeyType = 'calculate';
        }
    }


});

// math operations to perform calculations - working +, -, *, / => % and brackets in progress. function called on line 83.
const operations = (x, operator, y) => {
    let result;
    if (operator === 'add') {
        result = (parseFloat(x) + parseFloat(y)).toFixed(2)
    } else if (operator === 'subtract') {
        result = (parseFloat(x) - parseFloat(y)).toFixed(2)
    } else if (operator === 'multiply') {
        result = (parseFloat(x) * parseFloat(y)).toFixed(2);
    } else if (operator === 'divide') {
        if (y === '0') {
            display.style.background = "#ef4565";
            display.style.fontSize = "2rem"
            result = "error: cannot divide by 0";
            setTimeout(function () {
                display.style.background = "#72757e";
                display.textContent = '0';
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
                display.style.fontSize = "4rem"
            }, 1000);
        } else result = (parseFloat(x) / parseFloat(y)).toFixed(2)
        // } else if (operator === 'percent') {
        //     result = x / 100
    }
    // console.log(result)
    return result
}
