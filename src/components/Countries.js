import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getCountries from '../redux/thunk/countries';
import Header from './Navigation';
import CountryItem from './CountryItem';

const Countries = () => {
  const { countries, totalTodayConfirmed } = useSelector((state) => state.countries);
  const [countriesToShow, setCountriesToShow] = useState([]);
  let backgroudColorForCountry = '#dc4782';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
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

 
};

export default Countries;
