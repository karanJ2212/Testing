const stringLength = require("./stringLength.js");
// import { stringLength } from "index.js";

test("prints number of charcters", () => {
  expect(stringLength("karan")).toBe(5);
});

test("throw error when empty", () => {
  expect(() => stringLength()).toThrow(
    "enter string greater than 0 less than 10"
  );
});

test("throw error when empty", () => {
  expect(() => stringLength("")).toThrow(
    "enter string greater than 0 less than 10"
  );
});

test("throw error when greater than 10", () => {
  expect(() => {
    stringLength("qwertyuiopa");
  }).toThrow("enter string greater than 0 less than 10");
});

test("throw error when greater than 10", () => {
  expect(() => {
    stringLength(2);
  }).toThrow("enter string greater than 0 less than 10");
  expect(() => {
    stringLength(undefined);
  }).toThrow("enter string greater than 0 less than 10");
  expect(() => {
    stringLength(null);
  }).toThrow("enter string greater than 0 less than 10");
});
