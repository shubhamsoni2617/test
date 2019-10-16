import React, { useState } from 'react';
import recentSearchIconImage from '../../../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../../../assets/images/close-blue-color.svg';
import './style.scss';
import MostViewed from './MostViewed';
import Utilities from '../../../../../shared/utilities';
import backButton from '../../../../../assets/images/events/sortby.svg';

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
    props.userInputHandler(text);
  };

  return (
    <div className="header-search">
      <div className="searched-wrapper">
        <div className="recently-search">
          <span onClick={props.history.goBack}>
            <image alt={'backButton'} src={backButton} />
          </span>
          {Utilities.mobilecheck() && (
            <input
              type="text"
              // onChange={props.onChange}
              // onKeyDown={props.onKeyDown}
              // value={props.userInput}
              className="search-inputtype mobile"
            />
          )}
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
