import React, { useState } from 'react';
import searchImage from '../../../../../assets/images/search.svg';
import searchImageBlue from '../../../../../assets/images/search-blue.svg';
import prevArrowWhiteImage from '../../../../../assets/images/prev-arrow-white.svg';
import recentSearchIconImage from '../../../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../../../assets/images/close-blue-color.svg';
import eventImage from '../../../../../assets/images/kurios-joker.jpg';
import './style.scss';
import MostViewed from './MostViewed';

const HomePageSearch = props => {
  const [storageValues, setStorageValues] = useState(
    JSON.parse(localStorage.getItem('recentlySearched'))
  );

  const clearLocalStorageHandler = index => {
    let values = [...storageValues];
    values.splice(index, 1);
    setStorageValues(values);
    localStorage.setItem('recentlySearched', JSON.stringify(values));
  };

  const redirectHandler = text => {
    props.history.push(`/search-results?q=${text}`);
    props.focusHandler();
  };

  return (
    <div className="header-search">
      <div className="searched-wrapper">
        <div className="recently-search">
          <h3>Recently Searched</h3>
          <ul>
            {storageValues &&
              storageValues.map((text, index) => {
                return (
                  <li key={text + index}>
                    <span
                      onClick={e => {
                        e.preventDefault();
                        redirectHandler(text);
                      }}
                    >
                      <img src={recentSearchIconImage} alt="" /> {text}
                    </span>
                    <a
                      href="/"
                      onClick={e => {
                        e.preventDefault();
                        clearLocalStorageHandler(index);
                      }}
                      className="search-listing-close-btn"
                    >
                      <img src={closeBlueColorImage} alt="" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <MostViewed />
      </div>
    </div>
  );
};

export default HomePageSearch;
