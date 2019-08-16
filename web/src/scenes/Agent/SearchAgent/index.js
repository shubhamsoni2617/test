import React, { Fragment, useState } from 'react';
import SearchIcon from '../../../assets/images/search-grey.png';
import './style.scss';

const SearchAgent = (props) => {

  const [filter, setFilter] = useState('');

  const [initialItems] = useState([
    {
      id: "112 Katong",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1"
    },
    {
      id: "114 Somerset",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1"
    },
    {
      id: "11 Anchorpoint",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1"
    },
    {
      id: "12 Capitol",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1"
    },
    {
      id: "2 ChangiAirpots",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1"
    },
    {
      id: "ChinaPoint Town",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level12"
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }
  // ------------------------------Array filtering-----------------------------
  const lowerCasedFilter = filter.toLowerCase();
  const filteredData = initialItems.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(lowerCasedFilter)
    );
  });

  return (
    <Fragment>
      <h1>Agents in Singapore</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-lg-10">
            <input
              className="form-control"
              type="text" value={filter}
              onChange={handleSearchAgent}
              placeholder="Search for an agent"
            />
          </div>
          <div className="col-lg-1">
            <button type="submit"><img src={SearchIcon} alt="search-icon" /></button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <ul key={index}>
                <li><strong>{item.id}</strong> <span><a>{item.shownOnMap}</a></span></li>
                <li>{item.address}</li>
                <hr />
              </ul>
            )
          })
        }
      </ul>
    </Fragment>
  );
};

export default SearchAgent;
