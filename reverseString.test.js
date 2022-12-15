const reverseString = require("./reverseString.js");

test("prints reverse", () => {
  expect(reverseString("hello")).toBe("olleh");
});
