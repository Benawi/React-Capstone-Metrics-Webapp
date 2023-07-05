import fetchCountries from '../fetchers/fetchCountries';
import getCountriesAction from '../actions/countries';

const getCountries = () => async (dispatch) => {
  const data = await fetchCountries();
  dispatch(getCountriesAction(data));
};

export default getCountries;
