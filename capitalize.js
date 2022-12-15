const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("not a string");
  } else {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
  }
};
module.exports = capitalize;
