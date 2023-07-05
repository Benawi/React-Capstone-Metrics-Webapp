import fetchDetails from '../fetchers/fetchDetails';
import getDetailsAction from '../actions/Details';

const getDetails = (Detail) => async (dispatch) => {
  const data = await fetchDetails(Detail);
  dispatch(getDetailsAction(data));
};

export default getDetails;
