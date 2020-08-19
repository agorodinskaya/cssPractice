export const operations = (x, operator, y) => {
  let result;
  if (operator === "add") {
    return (result = (parseFloat(x) + parseFloat(y)).toFixed(2));
  } else if (operator === "subtract") {
    return (result = (parseFloat(x) - parseFloat(y)).toFixed(2));
  } else if (operator === "multiply") {
    return (result = (parseFloat(x) * parseFloat(y)).toFixed(2));
  } else if (operator === "divide") {
    if (y === "0") {
      display.style.background = "#ef4565";
      display.style.fontSize = "2rem";
      result = "error: cannot divide by 0";
      setTimeout(function () {
        display.style.background = "#72757e";
        display.textContent = "0";
        calculator.dataset.firstValue = "";
        calculator.dataset.modValue = "";
        calculator.dataset.operator = "";
        calculator.dataset.previousKeyType = "";
        display.style.fontSize = "4rem";
      }, 1000);
    } else result = (parseFloat(x) / parseFloat(y)).toFixed(2);
    // } else if (operator === 'percent') {
    //     result = x / 100
  }
  // console.log(result)
  return result;
};

export const clear = () => {
  const calculatorClear = {
    firstValue: "",
    modValue: "",
    operator: "",
    previousKeyType: "",
    textContent: 0,
  };
  return calculatorClear;
};
