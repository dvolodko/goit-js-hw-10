import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import countrySmallCardTpl from './templates/country-small-card.hbs';
import countryBigCardTpl from './templates/country-big-card.hbs';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryInfo: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
  searchField: document.querySelector('#search-box'),
};

refs.searchField.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const searchQuery = e.target.value.trim();
  if (!searchQuery) {
    resetRender();
    return;
  }
  fetchCountries(searchQuery)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countries.length <= 10 && countries.length > 1) {
        renderSmallCountryCards(countries);
      } else if (countries.length === 1) {
        renderBigCountryCard(countries);
      } else {
        Notify.failure('Oops, there is no country with that name');
      }
    })
    .catch(error => console.log(error));
}

function renderSmallCountryCards(countries) {
  resetRender();
  refs.countryList.insertAdjacentHTML(
    'beforeend',
    countrySmallCardTpl(countries)
  );
}

function renderBigCountryCard(countries) {
  resetRender();
  refs.countryInfo.insertAdjacentHTML(
    'beforeend',
    countryBigCardTpl(countries)
  );
}

function resetRender() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}
