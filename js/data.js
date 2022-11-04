// Imported constant values from constants.js for generation object
import {constant} from './constants.js';
// Imported helper functions to generate or get random values respectively
import {helperFunctions} from './util.js';


// Function to get random author with usage other functions (generationAvatarList() and getRandomPositiveInteger())
const getAuthor = () => {
  const avatarList = helperFunctions.generationAvatarList();
  const randomAuthorIndex = helperFunctions.getRandomPositiveInteger(0, avatarList.length - 1);

  return {
    avatar: avatarList[randomAuthorIndex],
  };
};


// Getting ad with usage random values and functions
const getOffer = () => {
  const addressValue = helperFunctions.getLocation();
  const priceRandomValue = helperFunctions.getRandomPositiveInteger(100, 10000);
  const roomsRandomValue = helperFunctions.getRandomPositiveInteger(1, 7);
  const guestRandomValue = helperFunctions.getRandomPositiveInteger(1, 15);

  return ({
    title: helperFunctions.getRandomArrayElement(constant.ADS_TITLE),
    address: addressValue,
    price: priceRandomValue,
    type: helperFunctions.getRandomArrayElement(constant.HOME_TYPES),
    rooms: roomsRandomValue,
    guests: guestRandomValue,
    checkin: helperFunctions.getRandomArrayElement(constant.CHECKIN),
    checkout: helperFunctions.getRandomArrayElement(constant.CHECKOUT),
    features: helperFunctions.getRandomArrayElement(constant.FEATURES),
    description: helperFunctions.getRandomArrayElement(constant.DESCRIPTION),
    photos: helperFunctions.getRandomArrayElement(constant.PHOTOS),
  });
};

// Getting authors and offers in amount according to SIMILAR_OBJECTS_COUNT. Its equals to 10.
const similarAuthors = Array.from({length: constant.SIMILAR_OBJECTS_COUNT}, getAuthor);
const similarOffers = Array.from({length: constant.SIMILAR_OBJECTS_COUNT}, getOffer);
