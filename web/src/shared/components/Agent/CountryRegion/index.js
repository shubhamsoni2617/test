import React, { useState, useEffect } from 'react';
import './style.scss';
import banner from '../../../../assets/images/location-banner.png';

const CountryRegion = props => {
  const {
    countryNRegion,
    onSubmit,
    filterCountryFile,
    handleCountryName,
    venue,
    handleMapClick,
  } = props;

  const [country, setCountry] = useState('Singapore');
  const [region, setRegion] = useState('All locations');
  const [toggleMapCondition, setToggleMapCondition] = useState(123);

  // useEffect(()=>{
  //   filterCountryFile(country);
  // },[]);

  const handleSubmit = event => {
    event.preventDefault();
    filterCountryFile(country);

    //set country name in parent component
    handleCountryName(country);
    // set map click event in parent component
    handleMapClick(toggleMapCondition);
    setToggleMapCondition(Math.random());

    const bothId = handleId();
    const params = {
      country: bothId.countryId,
      region: bothId.regionId
    };
    onSubmit(params);
  };

  const handleId = (value = country, locationId = region) => {
    let countryId;
    let regionId;
    countryNRegion.map(elem => {
      if (elem.name === value) {
        countryId = elem.id;
        if (value === 'Singapore') {
          elem.regions.map(e => {
            if (e.name === locationId) {
              regionId = e.id;
            }
          });
        }
      }
    });
    const bothId = {
      countryId,
      regionId
    };
    return bothId;
  };

  const handleCountryChange = event => {
    const { value } = event.target;
    setCountry(value);
    setRegion('All locations');
    // handleId(value);
  };

  const handleRegionChange = event => {
    const { value } = event.target;
    setRegion(value);
    // handleId(country, value);
  };

  return (
    <div className="banner-wrapper">
      <img src={banner} className="img-fluid" alt="page-banner" />
      <div className="banner-overlay">
        <div className="find-an-agent text-center">
          <h1 className="authorised-agent">
            {venue ? 'Find a Venue' : 'Find an Authorised Agent'}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="find-agent-form">
              <select
                className="form-control"
                onChange={handleCountryChange}
                value={country}
              >
                {countryNRegion &&
                  countryNRegion.map((elem, index) => {
                    return (
                      <option key={index} value={elem.name}>
                        {elem.name}
                      </option>
                    );
                  })}
              </select>

              <select
                className="form-control"
                onChange={handleRegionChange}
                value={region}
                readOnly={country !== 'Singapore' ? true : false}
              >
                <option>Region</option>
                {countryNRegion &&
                  countryNRegion.map((elem, index) => {
                    if (elem.regions.length > 0) {
                      return elem.regions.map((e, i) => {
                        if (elem.name === country) {
                          return (
                            <option key={i} value={e.name}>
                              {e.name}
                            </option>
                          );
                        }
                      });
                    }
                  })}
              </select>
              <button className="go-btn" type="submit">
                GO
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CountryRegion;
