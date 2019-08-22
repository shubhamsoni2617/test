import React, { useState } from 'react';
import './style.scss';

const CountryRegion = (props) => {

  const { countryNRegion, onSubmit,filterCountryFile } = props;

  const [country, setCountry] = useState("Singapore");
  const [region, setRegion] = useState("All locations");

  const handleSubmit = (event) => {
    event.preventDefault();
    let countryId;
    let regionId;
    countryNRegion.map((elem) => {
      if (elem.name === country) {
        countryId = elem.id;
        if (country === "Singapore") {
          elem.regions.map((e) => {
            if (e.name === region) {
              regionId = e.id;
            }
          })
        }
      }
      const params = {
        country: countryId,
        region: regionId
      }
      onSubmit(params);
    });
  }

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setCountry(value);
  }

  const handleRegionChange = (event) => {
    const { value } = event.target;
    setRegion(value);
  }

  filterCountryFile(country);

  return (
    <div className="find-an-agent text-center">
      <div className="authorised-agent">
        Find an Authorised Agent
      </div>
      <div className="text-center">
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-lg-5 text-left">
              <select className="form-control" onChange={handleCountryChange} value={country}>
                {
                  countryNRegion && countryNRegion.map((elem, index) => {
                    return (
                      <option
                        key={index}
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
              {
                country === "Singapore" ?
                  <select className="form-control" onChange={handleRegionChange} value={region}>
                    <option>Region</option>
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
                  :
                  <div  className="form-control text-left">Region</div>
              }

            </div>
            <button className="col-lg-1" type="submit">GO</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CountryRegion;
