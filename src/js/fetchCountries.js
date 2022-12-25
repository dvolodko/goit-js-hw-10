export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}?capital`).then(
    response => {
      return response.json();
    }
  );
}
