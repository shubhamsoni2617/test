import React from 'react';
import noEvent from '../../../../assets/images/no-event.svg';
import './style.scss';

const SearchNotFound = ({ searchKeyword }) => {
  return (
    <div className="searchnotfound">
      <div className="container">
        <div className="no-data">
          <img src={noEvent} alt="no-event" className="img-fluid" />
          <p>
            <strong>Opps! No Result Found For '{searchKeyword}'</strong>
          </p>
          <p>You can also visit</p>
          <ul className="no-result-search-listing">
            <li>
              <a href="/attraction">Go to Attractions</a>
            </li>
            <li>
              <a href="/events">Go to Events</a>
            </li>
            <li>
              <a href="/promotions">Go to Promotions</a>
            </li>
            <li>
              <a href="/explore">Go to Explore</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchNotFound;
