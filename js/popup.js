import {getResultObject as result} from './data.js';

// getting fragment
const mapCanvas = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const author = result().author;
const offer = result().offer;
const _location = result().location;

export const getAd = () => {
  const cardEl = cardTemplate.cloneNode(true);

  cardEl.querySelector('.popup__avatar').textContent = author.avatar;

  cardEl.querySelector('.popup__title').textContent = offer.title;
  cardEl.querySelector('.popup__text--address').textContent = JSON.stringify(_location.location);
  cardEl.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  cardEl.querySelector('.popup__type').textContent = offer.type;
  cardEl.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardEl.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardEl.querySelector('.popup__features').textContent = offer.features;
  cardEl.querySelector('.popup__description').textContent = offer.description;
  cardEl.querySelector('.popup__photos').textContent = offer.photos;

  mapCanvas.appendChild(cardEl);
};
