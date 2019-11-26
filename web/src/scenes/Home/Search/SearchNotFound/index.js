import React from 'react';
import noEvent from '../../../../assets/images/no-event.svg';
import './style.scss';
import { Link } from 'react-router-dom';

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
              <Link to="/attractions">Go to Attractions</Link>
            </li>
            <li>
              <Link to="/events">Go to Events</Link>
            </li>
            <li>
              <Link to="/promotions">Go to Promotions</Link>
            </li>
            <li>
              <Link to="/explore">Go to Explore</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchNotFound;
