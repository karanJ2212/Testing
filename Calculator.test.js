const Calculator = require("./Calculator.js");

describe("calculator add", () => {
  test("adding two numbers", () => {
    expect(new Calculator().add(2, 3)).toBe(5);
  });
  test("adding one negative number", () => {
    expect(new Calculator().add(-1, 3)).toBe(2);
  });
  test("adding two negatiive numbers", () => {
    expect(new Calculator().add(-2, -3)).toBe(-5);
  });
});

describe("calculator subtract", () => {
  test("substracting two numbers", () => {
    expect(new Calculator().substract(2, 3)).toBe(-1);
  });
  test("substracting one negative number", () => {
    expect(new Calculator().substract(-1, 3)).toBe(-4);
  });
  test("subtracting two negatiive numbers", () => {
    expect(new Calculator().substract(-2, -3)).toBe(1);
  });
});

describe("calculator multiply", () => {
  test("multiplying two numbers", () => {
    expect(new Calculator().multiply(2, 3)).toBe(6);
  });
  test("multipling one negative number", () => {
    expect(new Calculator().multiply(-1, 3)).toBe(-3);
  });
  test("multiplying two negatiive numbers", () => {
    expect(new Calculator().multiply(-2, -3)).toBe(6);
  });
});

describe("calculator division", () => {
  test("divide two numbers", () => {
    expect(new Calculator().divide(6, 3)).toBe(2);
  });
  test("dividing one negative number", () => {
    expect(new Calculator().divide(-6, 3)).toBe(-2);
  });
  test("dividing two negatiive numbers", () => {
    expect(new Calculator().divide(-6, -3)).toBe(2);
  });
  test("dividing by zero", () => {
    expect(() => {
      new Calculator().divide(6, 0);
    }).toThrow("Cannot be divided by 0");
  });
});
