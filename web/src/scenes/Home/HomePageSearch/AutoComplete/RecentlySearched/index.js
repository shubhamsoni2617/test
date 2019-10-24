import React, { useState } from 'react';
import recentSearchIconImage from '../../../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../../../assets/images/close-blue-color.svg';
import closeGreyColorImage from '../../../../../assets/images/cross-grey.svg';
import './style.scss';
import MostViewed from './MostViewed';
import Utilities from '../../../../../shared/utilities';
import backButton from '../../../../../assets/images/events/sortby.svg';

const RecentlySearched = props => {
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
       {storageValues.length ? <div className="recently-search">
          <span onClick={props.history.goBack}>
            <image alt={'backButton'} src={backButton} />
          </span>
          <h3>Recently Searched</h3>
          <ul>
            {
              storageValues.map((text, index) => {
                return (
                  <li key={text + index}>
                    <span
                      onClick={e => {
                        e.preventDefault();
                        redirectHandler(text);
                        Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.remove("fixed-body");
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
                      <img src={closeGreyColorImage} alt="" className="search-close-mobile-btn" />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>:null}
        <MostViewed />
      </div>
    </div>
  );
};

export default RecentlySearched;
