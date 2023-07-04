import axios from 'axios';

const URLC = 'https://disease.sh/v3/covid-19/countries';
const URLA = 'https://disease.sh/v3/covid-19/all';
const fetchCountriesCases = async () => axios.get(URLC)
  .then((response) => response.data);

const fetchTotalCases = async () => axios.get(URLA)
  .then((response) => response.data.cases);

const fetchCountries = async () => ({
  countries: await fetchCountriesCases(),
  totalTodayConfirmed: await fetchTotalCases(),
});

export default fetchCountries;
