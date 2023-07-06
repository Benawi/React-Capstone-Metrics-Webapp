import fetchCountries from '../redux/fetchers/fetchCountries';
import getCountriesAction from '../redux/actions/countries';
import getCountries from '../redux/thunk/countries';

jest.mock('../redux/fetchers/fetchCountries', () => jest.fn());

describe('getCountries', () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
  });

  it('should dispatch getCountriesAction with the fetched data', async () => {
    // Mock the response from fetchCountries function
    const fakeData = ['USA', 'UK', 'Germany'];
    fetchCountries.mockResolvedValue(fakeData);

    // Call getCountries and pass the mock dispatch function
    await getCountries()(dispatchMock);

    // Verify that fetchCountries is called
    expect(fetchCountries).toHaveBeenCalledTimes(1);

    // Verify that the getCountriesAction is dispatched with the fetched data
    expect(dispatchMock).toHaveBeenCalledWith(getCountriesAction(fakeData));
  });
});
