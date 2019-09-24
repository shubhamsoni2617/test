import React, { useState, useEffect } from 'react';
import './style.scss';
import banner from '../../../../assets/images/location-banner.png';

const CountryRegion = ({
  countryNRegion,
  venue,
  countryIdHandler,
  regionIdHandler,
  countryId,
  onSubmit
}) => (
  <div className="banner-wrapper">
    <img src={banner} className="img-fluid" alt="page-banner" />
    <div className="banner-overlay">
      <div className="find-an-agent text-center">
        <h1 className="authorised-agent">
          {venue ? 'Find a Venue' : 'Find an Authorised Agent'}
        </h1>
        <div className="find-agent-form">
          <select
            className="form-control"
            onChange={e => countryIdHandler(e.target.value)}
          >
            {countryNRegion.map(country => (
              <option key={country.name} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <select
            className="form-control"
            onChange={e => regionIdHandler(e.target.value)}
            disabled={countryId !== '15'}
          >
            <option>All</option>
            {countryNRegion
              .filter(country => country.regions.length)
              .map(country =>
                country.regions.map(region => (
                  <option key={region.name} value={region.id}>
                    {region.name}
                  </option>
                ))
              )}
          </select>
          <button className="go-btn" type="submit" onClick={onSubmit}>
            GO
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CountryRegion;
