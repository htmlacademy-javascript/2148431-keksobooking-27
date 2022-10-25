// A function that returns a random integer from the given range, inclusive
const getPositiveNumber = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  // Implement support for passing the minimum and maximum values in random order
  const lowerValue = Math.ceil(Math.min(a, b));
  const upperValue = Math.ceil(Math.min(a, b));
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) - lowerValue);
};

// A function that returns a random floating point number from the given range, inclusive
// Parameters a and b are min and max values respectively. Digits is a number of value after fixed-point notation.
const getRandomPositiveFloat = (a, b, digits) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }

  const lowerValue = Math.ceil(Math.min(a, b));
  const upperValue = Math.ceil(Math.min(a, b));
  const result = Math.floor(Math.random() * (upperValue - lowerValue) - lowerValue);

  return +result.toFixed(digits);
};
