// Test if a string is a valid number
export const assertNumber = (str) =>
  typeof str === "string"
    ? !isNaN(str) && !isNaN(parseFloat(str)) && isFinite(str)
    : false;

// Remove leading 0s with recursion
export const stripLeadingZeros = (value) =>
  value[0] === "0" && value.length > 1 && value[1] !== "."
    ? stripLeadingZeros(value.substring(1))
    : value;

export const commaToDecimalPoint = (value) => String(value).replace(",", ".");
