import React from 'react';
import searchImage from '../../../assets/images/search.svg';
import searchImageBlue from '../../../assets/images/search-blue.svg';
import './style.scss';
import Autocomplete from './AutoComplete';

const HomePageSearch = props => {
  return (
    <div className="header-search">
      <Autocomplete {...props} />
      <button type="submit" className="search-btn">
        <img src={searchImage} className="img-fluid" alt="search-icon" />
        <img
          src={searchImageBlue}
          className="img-fluid active"
          alt="search-icon"
        />
      </button>
    </div>
  );
};

export default HomePageSearch;
