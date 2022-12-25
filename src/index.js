import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import pokemonCardTpl from './templates/pokemon-card.hbs';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = {
  countryInfo: document.querySelector('.country-info'),
  countryList: document.querySelector('.country-list'),
  searchField: document.querySelector('#search-box'),
};

refs.searchField.addEventListener('input', debounce(onSearch, 300));

function onSearch(e) {
  const searchQuery = e.target.value;
  if (!searchQuery) {
    resetRender();
    return;
  }
  fetchCountries(searchQuery)
    .then(renderPokemonCard)
    .catch(error => console.log(error));
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.countryInfo.innerHTML = markup;
}

function resetRender() {
  refs.countryInfo.innerHTML = '';
}
