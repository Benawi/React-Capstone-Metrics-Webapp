import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../redux/reducers/countries';
import detailsReducer from '../redux/reducers/Details';

describe('Redux Store', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        countries: countriesReducer,
        Details: detailsReducer,
      },
    });
  });

  it('should have the correct initial state', () => {
    const initialState = store.getState();
    expect(initialState).toEqual({
      countries: countriesReducer(undefined, {}),
      Details: detailsReducer(undefined, {}),
    });
  });
});