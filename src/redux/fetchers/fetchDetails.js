import axios from 'axios';

const fetchDetails = async (Detail) => axios.get(`https://disease.sh/v3/covid-19/countries/${Detail}`)
  .then((response) => ({ countryData: response.data }));

export default fetchDetails;
