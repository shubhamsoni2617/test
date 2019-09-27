import React from 'react';
import './style.scss';
import banner from '../../../../assets/images/location-banner.png';
import { Select } from '../../MultiPurposeCheckbox';

const CountryRegion = ({
  countryNRegion,
  venue,
  countryIdHandler,
  regionIdHandler,
  countryId,
  onSubmit,
  venueId,
  regionId
}) => {
  const handleCountryId = countryName => {
    if (countryName.length) {
      let countryId = countryNRegion.find(el => el.name === countryName[0]).id;
      countryIdHandler(countryId);
    }
  };
  const handleRegionId = regionName => {
    if (regionName.length) {
      let region = countryNRegion
        .filter(country => country.regions.length)[0]
        .regions.find(el => el.name === regionName[0]).id;
      regionIdHandler(region);
    }
  };

  return (
    <div className="banner-wrapper">
      <img src={banner} className="img-fluid" alt="page-banner" />
      <div className="banner-overlay">
        <div className="find-an-agent text-center">
          <h1 className="authorised-agent">
            {venue ? 'Find a Venue' : 'Find an Authorised Agent'}
          </h1>
          <div className="find-agent-form">
            {countryNRegion && (
              <>
                <Select
                  options={countryNRegion}
                  selectedValues={countryName => {
                    handleCountryId(countryName);
                  }}
                />
                <Select
                  options={
                    countryNRegion.filter(country => country.regions.length)[0]
                      .regions
                  }
                  selectedValues={regionName => {
                    handleRegionId(regionName);
                  }}
                />
              </>
            )}

            {/* <select
              className="form-control"
              onChange={e => countryIdHandler(e.target.value)}
            >
              {countryNRegion &&
                countryNRegion.map(country => (
                  <option key={country.name} value={country.id}>
                    {country.name}
                  </option>
                ))}
            </select> */}
            {/* <select
              className="form-control"
              onChange={e => regionIdHandler(e.target.value)}
              disabled={countryId !== '15'}
            >
              {(venueId && countryId === '15') || regionId ? null : (
                <option>All</option>
              )}
              {countryNRegion &&
                countryNRegion
                  .filter(country => country.regions.length)
                  .map(country =>
                    country.regions.map(region => (
                      <option key={region.name} value={region.id}>
                        {region.name}
                      </option>
                    ))
                  )}
            </select> */}
            <button className="go-btn" type="submit" onClick={onSubmit}>
              GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryRegion;
