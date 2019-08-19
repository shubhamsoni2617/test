import React, { useState } from 'react';
import './style.scss';

const CountryRegion = () => {
  const [countryRegion] = useState([
    {
      country: "Singapore",
      regions: [
        { region: "East-Singapore" },
        { region: "West-Singapore" },
        { region: "South-Singapore" },
        { region: "North-Singapore" },
        { region: "East-Singapore" },
        { region: "West-Singapore" },
        { region: "South-Singapore" },
        { region: "North-Singapore" },
      ]
    },
    {
      country: "Indonesia",
      regions: [
        { region: "East-Indonesia" },
        { region: "West-Indonesia" },
        { region: "South-Indonesia" },
        { region: "North-Indonesia" },
      ]
    },
    {
      country: "Malaysia",
      regions: [
        { region: "East-Malaysia" },
        { region: "West-Malaysia" },
        { region: "South-Malaysia" },
        { region: "North-Malaysia" },
      ]
    },
    {
      country: "Macau",
      regions: [
        { region: "East-Macau" },
        { region: "West-Macau" },
        { region: "South-Macau" },
        { region: "North-Macau" },
      ]
    },
    {
      country: "Vietnam",
      regions: [
        { region: "East-Vietnam" },
        { region: "West-Vietnam" },
        { region: "South-Vietnam" },
        { region: "North-Vietnam" },
      ]
    },
  ]);
  const [country, setCountry] = useState("Singapore");
  const [region, setRegion] = useState("East-Singapore");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleCountryChange = (event) => {
    const { value } = event.target;
    setCountry(value);
    switch (value) {
      case "Singapore":
        setRegion("East-Singapore");
        break;
      case "Indonesia":
        setRegion("East-Indonesia");
        break;
      case "Malaysia":
        setRegion("East-Malaysia");
        break;
      case "Macau":
        setRegion("East-Macau");
        break;
      case "Vietnam":
        setRegion("East-Vietnam");
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
                  countryRegion.map((elem, index) => {
                    return (
                      <option
                        key={elem.country}
                        value={elem.country}
                      >
                        {elem.country}
                      </option>
                    )
                  })
                }
              </select>
            </div>
            <div className="col-lg-5">
              <select className="form-control" onChange={handleRegionChange} value={region}>
                {
                  countryRegion.map((elem, index) => {
                    return elem.regions.map((e, i) => {
                      if (elem.country === country) {
                        return (
                          <option
                            key={i}
                            value={e.region}
                          >
                            {e.region}
                          </option>
                        )
                      }
                    })
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
