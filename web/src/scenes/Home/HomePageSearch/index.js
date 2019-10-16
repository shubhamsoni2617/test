import React, { useState } from 'react';
import searchImage from '../../../assets/images/search.svg';
import searchImageBlue from '../../../assets/images/search-blue.svg';
import './style.scss';
import Autocomplete from './AutoComplete';

const HomePageSearch = props => {
  const [buttonActive, setButtonActive] = useState(false)

  const buttonActiveHandler = (value) => {
    setButtonActive(value)
  }
  return (
    <div className={`header-search ${buttonActive ? `active` : ``}`}>
      <Autocomplete {...props} buttonActiveHandler={buttonActiveHandler} />
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
