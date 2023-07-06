import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/countries';
import detailsReducer from './reducers/Details';

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
    Details: detailsReducer,
  },
});

export default Store;
