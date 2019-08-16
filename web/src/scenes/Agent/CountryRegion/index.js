import React, { useState } from 'react';
import './style.scss';

const CountryRegion = () => {

  const [country, setCountry] = useState("Singapore");
  const [region, setRegion] = useState("Singapore");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setCountry(value);
  }

  const handleRegionChange = (event) => {
    const { value } = event.target;
    setRegion(value);
  }

  return (
    <div className="find-an-agent text-center">
      <div className="authorised-agent">
        Find an Authorised Agent
      </div>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-lg-5">
              <select className="form-control" onChange={handleCountryChange} value={country}>
                <option value="Singapore">Singapore</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Macau">Macau</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <div className="col-lg-5">
              <select className="form-control" onChange={handleRegionChange} value={region}>
                <option value="Singapore">Singapore</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Macau">Macau</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <button className="col-lg-1" type="submit">GO</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryRegion;
