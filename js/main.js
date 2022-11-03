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

// Functions for creating array of 10 generated js-objects
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

// Titles
const ADS_TITLE = ['Бугало', 'Отель', 'Комната', 'Квартира', 'Дом', 'Дворец'];

// This constant value need for generation 10 similar objects
const SIMILAR_OBJECTS_COUNT = 10;

// List of price values
const PRICE_FOR_HOME = [ 100, 1000, 10000, 200, 250, 500, 750, 1250, 1500, 1700, 1990, 2500, 5000, 8000 ];

// Type of home
const HOME_TYPES = [
  'flat',
  'bungalow',
  'house',
  'palace',
  'hotel',
];

// Array of photos
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

// Fixed values for checkin time
const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];
// Fixed values for checkout time
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

// Amount of rooms array
const ROOMS = [1, 2, 3, 4, 5, 6, 7 ];

// Array of descriptions for ads
const DESCRIPTION = [
  'Без ремонта',
  'Косметический ремонт без удобств',
  'Косметический ремонт без удобств',
  'Евроремонт без мебели',
  'Жилье готово к заселению',
  'Недалеко от центра',
  'Уютная студия',
  'Без кошек и детей'
];

// Amount of guests array
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];

// Array of features for ads
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];


// ============ Values for coordinate ============= //
const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};
const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};


const getLocation = () => {
  const lat = getRandomPositiveFloat(LATITUDE.min, LATITUDE.max, 3);
  const lng = getRandomPositiveFloat(LONGITUDE.min, LONGITUDE.max, 3);

  return {
    location: {lat, lng},
  };
};


// ============== Functions for generation new objects ====================//
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getAuthor = () => {
  const avatarList = generationAvatarList();
  const randomAuthorIndex = getRandomPositiveInteger(0, avatarList.length - 1);

  return {
    avatar: avatarList[randomAuthorIndex],
  };
};

const getOffer = () => {
  const addressValue = getLocation();

  return ({
    title: getRandomArrayElement(ADS_TITLE),
    address: addressValue,
    price: getRandomArrayElement(PRICE_FOR_HOME),
    type: getRandomArrayElement(HOME_TYPES),
    rooms: getRandomArrayElement(ROOMS),
    guests: getRandomArrayElement(GUESTS),
    checkin: getRandomArrayElement(CHECKIN),
    checkout: getRandomArrayElement(CHECKOUT),
    features: getRandomArrayElement(FEATURES),
    description: getRandomArrayElement(DESCRIPTION),
    photos: getRandomArrayElement(PHOTOS),
  });
};

const similarAuthors = Array.from({length: SIMILAR_OBJECTS_COUNT}, getAuthor);
const similarOffers = Array.from({length: SIMILAR_OBJECTS_COUNT}, getOffer);

