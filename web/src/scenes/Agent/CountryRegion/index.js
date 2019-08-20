import React, { useState } from 'react';
import './style.scss';

const CountryRegion = (props) => {

  const { countryNRegion } = props;

  const [country, setCountry] = useState("Singapore");
  const [region, setRegion] = useState("Central");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setCountry(value);
    switch (value) {
      case "Singapore":
        setRegion("Central");
        break;
      case "Malaysia":
        setRegion("");
        break;
    }
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
                {
                  countryNRegion && countryNRegion.map((elem, index) => {
                    return (
                      <option
                        key={elem.name}
                        value={elem.name}
                      >
                        {elem.name}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="col-lg-5">
              <select className="form-control" onChange={handleRegionChange} value={region}>
                {
                  countryNRegion && countryNRegion.map((elem, index) => {
                    if (elem.regions.length > 0) {
                      return elem.regions.map((e, i) => {
                        if (elem.name === country) {
                          return (
                            <option
                              key={i}
                              value={e.name}
                            >
                              {e.name}
                            </option>
                          )
                        }
                      })
                    }
                  })
                }
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
