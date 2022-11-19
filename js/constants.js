// Titles
const ADS_TITLE = ['Бугало настоящее', 'Лучший отель', 'Комната для студенток', 'Квартира для молодых пар', 'Уютный дом', 'Роскошный дворец'];

// This constant value need for generation 10 similar objects
const SIMILAR_OBJECTS_COUNT = 10;

// Type of home
const HOME_TYPES = {
  'Квартира': 'flat',
  'Бунгало': 'bungalow',
  'Дом': 'house',
  'Дворец': 'palace',
  'Отель': 'hotel',
};

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

// Array of features for ads
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];


// ============ Values  ============= //
export const LATITUDE = {
  min: 35.65000,
  max: 35.70000,
};
export const LONGITUDE = {
  min: 139.70000,
  max: 139.80000,
};


export const constant = {
  SIMILAR_OBJECTS_COUNT,
  ADS_TITLE,
  HOME_TYPES,
  PHOTOS,
  CHECKIN,
  CHECKOUT,
  DESCRIPTION,
  FEATURES,
};
