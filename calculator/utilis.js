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
      result = "error1";
      return result;
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
