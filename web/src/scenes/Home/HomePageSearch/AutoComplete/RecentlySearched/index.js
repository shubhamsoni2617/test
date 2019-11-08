import React, { useState } from 'react';
import recentSearchIconImage from '../../../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../../../assets/images/close-blue-color.svg';
import closeGreyColorImage from '../../../../../assets/images/cross-grey.svg';
import './style.scss';
import MostViewed from './MostViewed';
import Utilities from '../../../../../shared/utilities';
import { setValuesInLocalStorage } from '../setLocalStorage';

const RecentlySearched = ({ focusHandler, history, mostViewed }) => {
  const [storageValues, setStorageValues] = useState(
    JSON.parse(localStorage.getItem('recentlySearched'))
  );

  const clearLocalStorageHandler = index => {
    let values = [...storageValues];
    values.splice(index, 1);
    setStorageValues(values);
    localStorage.setItem('recentlySearched', JSON.stringify(values));
  };

  const onClickHandler = text => {
    setValuesInLocalStorage(text);
    history.push(`/search-results?q=${text}`);
    focusHandler(text);
    Utilities.mobilecheck() &&
      document.getElementsByTagName('body')[0].classList.remove('fixed-body');
  };

  return (
    <div className="header-search">
      <div className="searched-wrapper">
        {storageValues.length ? (
          <div className="recently-search">
            <h3>Recently Searched</h3>
            <ul>
              {storageValues.map((text, index) => {
                return (
                  <li key={text + index}>
                    <span onClick={() => onClickHandler(text)}>
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
                      <img
                        src={closeGreyColorImage}
                        alt=""
                        className="search-close-mobile-btn"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
        {mostViewed && mostViewed.length ? (
          <MostViewed mostViewed={mostViewed} />
        ) : null}
      </div>
    </div>
  );
};

export default RecentlySearched;
