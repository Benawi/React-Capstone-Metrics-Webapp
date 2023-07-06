import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import getDetails from '../redux/thunk/Details';
import Header from './Navigation';

const Details = () => {
  const { countryData } = useSelector((state) => state.Details);
  const { country } = useParams();
  const dataToShow = {
    cases: 0,
    todayCases: 0,
    deaths: 0,
    todayDeaths: 0,
    recovered: 0,
    todayRecovered: 0,
    active: 0,
    critical: 0,
  };
  const labels = {
    cases: 'Total Cases :',
    todayCases: 'Today Cases :',
    deaths: 'Total Deaths :',
    todayDeaths: 'Today Deaths :',
    recovered: 'Total Recovered :',
    todayRecovered: 'Today Recovered :',
    active: 'Active :',
    critical: 'Critical :',
  };
  const dispatch = useDispatch();
  const fetched = useSelector((state) => state.countries.length > 0);
  useEffect(() => {
    if (!fetched) {
      dispatch(getDetails(country));
    }
  }, []);

  return (
    <>
      <Header page="Details" />
      {countryData === undefined && (
        <div className="loading">
          <div className="loader" />
        </div>
      )}
      {countryData !== undefined && (
        <div className="main-container">
          <div className="total-Details-div">
            <img src={countryData.countryInfo.flag} alt="Country Flag" className="country-flag" />
            <div>
              <span>{country}</span>
              <span>{`${countryData.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Cases`}</span>
            </div>
          </div>
          <div className="cases-by-Details">
            DETAILED INFORMATION
          </div>
          <div className="Details">
            {Object.keys(dataToShow).map((key) => (
              <div key={key}>
                <span>{labels[key]}</span>
                <span>
                  {countryData[key].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  <FontAwesomeIcon icon={faArrowCircleRight} className="icon iconP" />
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
