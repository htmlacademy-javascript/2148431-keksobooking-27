// Import constant values from constant.js for function getLocation()
import {LATITUDE, LONGITUDE} from './constants.js';


// A function that returns a random integer from the given range, inclusive
const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  // Implement support for passing the minimum and maximum values in random order
  const lowerValue = Math.ceil(Math.min(a, b));
  const upperValue = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
};

// A function that returns a random floating point number from the given range, inclusive
// Parameters a and b are min and max values respectively. Digits is a number of value after fixed-point notation.
const getRandomPositiveFloat = (a, b, digits = 1) => {
  if (a < 0 || b < 0 || digits <= 0) {
    return NaN;
  }

  const lowerValue = Math.ceil(Math.min(a, b));
  const upperValue = Math.floor(Math.max(a, b));
  const result = Math.random() * (upperValue - lowerValue) + lowerValue;

  return +result.toFixed(digits);
};

// Function that returns random array element from certain constant value, that was created for generation object
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Function for generation list of avatar's photo
const generationAvatarList = () => {
  const result = [];
  for (let i = 1; i < 11; i++) {
    if (i <= 9) {
      result.push(`img/avatars/user0${i}.png`);
    } else if (i === 10) {
      result.push(`img/avatars/user${i}.png`);
    }
  }
  return result;
};

const getRandomLatitude = () =>
  getRandomPositiveFloat(LATITUDE.min, LATITUDE.max, 3);

const getRandomLongitude = () =>
  getRandomPositiveFloat(LONGITUDE.min, LONGITUDE.max, 3);

const createLocationData = () => ({
  lat: getRandomLatitude(),
  lng: getRandomLongitude(),
});

const getRandomPropertyForDict = (obj) => {
  const keys = Object.keys(obj);

  return keys[Math.floor(Math.random() * keys.length)];
};

export const helperFunctions = {
  getRandomPositiveInteger,
  generationAvatarList,
  getRandomArrayElement,
  getRandomPositiveFloat,
  createLocationData,
  getRandomPropertyForDict,
};
