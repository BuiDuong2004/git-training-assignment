function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return 0;
}

function multiply(a, b) {
    return 0;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}


module.exports = { plus, minus, multiply, divide };
