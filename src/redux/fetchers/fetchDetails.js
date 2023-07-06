const fetchDetails = async (Detail) => {
  const url = `https://disease.sh/v3/covid-19/countries/${Detail}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { countryData: data };
  } catch (error) {
    return error;
  }
};

export default fetchDetails;
