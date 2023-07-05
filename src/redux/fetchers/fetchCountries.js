const URLC = 'https://disease.sh/v3/covid-19/countries';
const URLA = 'https://disease.sh/v3/covid-19/all';

const fetchCountriesCases = async () => {
  try {
    const response = await fetch(URLC);
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
};

const fetchTotalCases = async () => {
  try {
    const response = await fetch(URLA);
    const data = await response.json();
    return data.cases;
  } catch (error) {
    return 0;
  }
};

const fetchCountries = async () => {
  const countries = await fetchCountriesCases();
  const totalTodayConfirmed = await fetchTotalCases();

  return {
    countries,
    totalTodayConfirmed,
  };
};

export default fetchCountries;
