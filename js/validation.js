const MAX_VALUE_OF_SYMBOLS = 100;
const MIN_VALUE_OF_SYMBOLS = 30;
const MAX_VALUE_OF_ROOMS = '100';
const MIN_VALUE_OF_GUESTS = '0';
const MAX_PRICE = 100000;
const MIN_PRICE_LIST = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const adForm = document.querySelector('.ad-form');

const adFormType = adForm.querySelector('#type');

const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    successClass: 'ad-form__element--valid',
    errorTextParent: 'ad-form__element',
    errorTextTag: 'span',
    errorTextClass: 'ad-form__error',
  },
  true
);

// ========= TITLE =========== //
const adFormTitle = adForm.querySelector('#title');

const isTitleValid = (value) => value.length >= MIN_VALUE_OF_SYMBOLS && value.length <= MAX_VALUE_OF_SYMBOLS;
const getTitleErrorMessage = () => `От ${MIN_VALUE_OF_SYMBOLS} до ${MAX_VALUE_OF_SYMBOLS} символов`;
pristine.addValidator (
  adFormTitle,
  isTitleValid,
  getTitleErrorMessage(),
);

// ========= PRICE =========== //
const adFormPrice = adForm.querySelector('#price');

const isPriceValid = (value) => value >= MIN_PRICE_LIST[adFormType.value] && value <= MAX_PRICE;
const getPriceErrorMessage = () => `От ${MIN_PRICE_LIST[adFormType.value]} руб. до ${MAX_PRICE} руб.`;

const setPricePlaceholder = () => adFormPrice.placeholder = MIN_PRICE_LIST[adFormType.value];

adFormType.addEventListener('change', () => {
  setPricePlaceholder();
  if (adFormPrice.value) {
    pristine.validate(adFormPrice);
  }
});

pristine.addValidator (
  adFormPrice,
  isPriceValid,
  getPriceErrorMessage(),
);

// ========= CAPACITY && ROOMS =========== //
const adFormCapacity = adForm.querySelector('#capacity');
const adFormRooms = adForm.querySelector('#room_number');

const roomsOption = {
  1 : ['1'],
  2 : ['2', '1'],
  3 : ['3', '2', '1'],
  100 : ['0'],
};

const validateCapacity = () => roomsOption[adFormRooms.value].includes(adFormCapacity.value);

const getRoomsErrorMessage = () => {
  if (adFormRooms.value === MAX_VALUE_OF_ROOMS) {
    return 'Не для гостей';
  }
};

const getGuestsErrorMessage = () => {
  if (adFormCapacity.value === MIN_VALUE_OF_GUESTS) {
    return `Требуется ${MAX_VALUE_OF_ROOMS} комнат`;
  }
  return `Требуется минимум ${adFormCapacity.value} ${adFormCapacity.value === '1' ? 'комната' : 'комнаты'}.`;
};

adFormRooms.addEventListener('change', () => {
  pristine.validate(adFormCapacity);
  pristine.validate(adFormRooms);
});
adFormCapacity.addEventListener('change', () => {
  pristine.validate(adFormRooms);
  pristine.validate(adFormCapacity);
});

// ========= ENABLE/DISABLE FORM =========== //
const turnAdFormOff = () => {
  adForm.classList.add('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};
const turnAdFormOn = () => {
  adForm.classList.remove('ad-form--disabled');
  const fieldsets = adForm.querySelectorAll('fieldset');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};


pristine.addValidator(
  adFormCapacity,
  validateCapacity,
  getGuestsErrorMessage,
);
pristine.addValidator(
  adFormRooms,
  validateCapacity,
  getRoomsErrorMessage,
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();

  if (isValid){
    turnAdFormOn();
  } else {
    turnAdFormOff();
  }
});

export {turnAdFormOn, turnAdFormOff};
