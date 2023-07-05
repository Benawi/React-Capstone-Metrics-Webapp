import { GET_DETAILS } from '../actions/Details';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
