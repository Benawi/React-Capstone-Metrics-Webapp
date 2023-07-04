import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './reducers/countries';
import regionsReducer from './reducers/regions';

const Store = configureStore({
  reducer: {
    countries: countriesReducer,
    regions: regionsReducer,
  },
});

export default Store;
