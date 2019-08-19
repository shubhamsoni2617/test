import React, { Fragment, useState, useRef } from 'react';
import SearchIcon from '../../../assets/images/search-grey.png';
import './style.scss';

const SearchAgent = (props) => {

  const { initialItems, removePopUpDetail } = props;

  const popUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  const showPopUp = (detail) => {
    setPopUpDetail(detail);
    removePopUpDetail(popUpRef);
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
              <ul key={index} onClick={() => showPopUp(item)}>
                <li><strong>{item.id}</strong> <span><a>{item.shownOnMap}</a></span></li>
                <li>{item.address}</li>
                <div className="pop-up" ref={popUpRef} style={{ display: item.id === popUpDetail.id ? "block" : "none" }}>
                  {popUpDetail.address}
                </div>
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
