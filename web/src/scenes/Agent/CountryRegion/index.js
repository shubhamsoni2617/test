import React, { useState } from 'react';
import './style.scss';

const CountryRegion = (props) => {

  const { countryNRegion, onSubmit, filterCountryFile, venue, text } = props;

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
        {venue ? text : "Find an Authorised Agent"}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="find-agent-form">
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
              <div className="form-control agent-val">Region</div>
          }

          <button className="go-btn" type="submit">GO</button>
        </div>
      </form>
    </div>
  );
};

export default CountryRegion;
