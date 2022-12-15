class Calculator {
  add = (a, b) => {
    return a + b;
  };

  substract = (a, b) => {
    return a - b;
  };

  multiply = (a, b) => {
    return a * b;
  };
  divide = (x = 0, y = 1) => {
    if (y === 0) {
      throw new Error("Cannot be divided by 0");
    } else return x / y;
  };
}
module.exports = Calculator;
