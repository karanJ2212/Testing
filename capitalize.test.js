const capitalize = require("./capitalize.js");

test("first letter is capital", () => {
  expect(capitalize("karan")).toBe("Karan");
});

test("not a string", () => {
  expect(() => capitalize(8)).toThrow("not a string");
});
