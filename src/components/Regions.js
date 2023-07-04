import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getRegions from '../redux/thunk/regions';
import Header from './Navigation';

const Regions = () => {
  const { countryData } = useSelector((state) => state.regions);
  const { country } = useParams();
  let dataToShow = {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    critical: 0,
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions(country));
    dataToShow = countryData;
  }, []);

  
};

export default Regions;
