const adForms = document.querySelector('.ad-form');
const fieldsets = adForms.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
const mapFiltersChildren = mapFilters.children;

export const inActiveState = () => {
  adForms.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (const fieldset of fieldsets) {
    fieldset.classList.add('disabled');
  }
  for (const mapFiltersChild of mapFiltersChildren) {
    mapFiltersChild.classList.add(('disabled'));
  }
};

export const activeState = () => {
  adForms.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (const fieldset of fieldsets) {
    fieldset.classList.remove('disabled');
  }
  for (const mapFiltersChild of mapFiltersChildren) {
    mapFiltersChild.classList.remove(('disabled'));
  }
};
