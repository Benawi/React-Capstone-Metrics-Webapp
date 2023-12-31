import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getCountries from '../redux/thunk/countries';
import Header from './Navigation';
import CountryItem from './CountryList';
import WorldImage from './worldImages.png';

const Countries = () => {
  const { countries, totalTodayConfirmed } = useSelector((state) => state.countries);
  const [countriesToShow, setCountriesToShow] = useState([]);
  let backgroudColorForCountry = '#dc4782';

  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.countries.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(getCountries());
    }
  }, []);

  const handleSearch = () => {
    let searchValue = '';
    if (document.getElementById('search-input')) {
      searchValue = document.getElementById('search-input').value;
    }

    let dumpArray = countries;
    if (searchValue !== '') {
      searchValue = searchValue.toLowerCase();
      dumpArray = dumpArray.filter((key) => key.country.toLowerCase().includes(searchValue));
      setCountriesToShow(dumpArray);
    } else {
      setCountriesToShow(countries);
    }
  };

  useEffect(() => {
    if (countries !== undefined) {
      setCountriesToShow(countries);
    }
  }, [countries]);

  return (
    <>
      <Header page="countries" />
      {(countriesToShow === undefined || totalTodayConfirmed === undefined) && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {!(countriesToShow === undefined || totalTodayConfirmed === undefined) && (
        <div className="main-container">
          <div className="total-countries-div">
            <div className="img">
              <img src={WorldImage} alt="world" className="image" />
            </div>
            <div>
              <span>WORLD CASES</span>
              <span>{`${totalTodayConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-countries">
            <p>CASES BY COUNTRIES</p>
            <div className="filter-inputs">
              <input type="text" id="search-input" onChange={handleSearch} placeholder="Search by country" />
            </div>
          </div>
          <div className="countries">
            {countriesToShow.map((country, index) => {
              if ((index + 1) % 2 === 0) {
                if (backgroudColorForCountry === '#dc4782') {
                  backgroudColorForCountry = '#cf4479';
                } else {
                  backgroudColorForCountry = '#dc4782';
                }
              }
              return (
                <CountryItem
                  key={country.country}
                  country={country}
                  backgroundColor={backgroudColorForCountry}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Countries;
