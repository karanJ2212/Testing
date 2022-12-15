const stringLength = (str) => {
  if (str < 1 || typeof str !== "string" || str.length > 10) {
    throw new Error("enter string greater than 0 less than 10");
  } else {
    return str.length;
  }
};
// console.log(stringLength(""));
module.exports = stringLength;
