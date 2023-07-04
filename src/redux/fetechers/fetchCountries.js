import axios from 'axios';

const fetchCountriesCases = async () => axios.get('https://disease.sh/v3/covid-19/countries')
  .then((response) => response.data);

export default fetchCountries;
