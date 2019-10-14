import React, { useState, useEffect } from 'react';
import searchImage from '../../../assets/images/search.svg';
import searchImageBlue from '../../../assets/images/search-blue.svg';
import prevArrowWhiteImage from '../../../assets/images/prev-arrow-white.svg';
import recentSearchIconImage from '../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../assets/images/close-blue-color.svg';
import eventImage from '../../../assets/images/kurios-joker.jpg';
import './style.scss';
// import { Link } from 'react-router-dom';
import Autocomplete from './AutoComplete';

const HomePageSearch = props => {
  // console.log(props);
  const [input, setInput] = useState('');
  return (
    <div className="header-search">
      <Autocomplete suggestions={data} {...props} />
      <button type="submit" className="search-btn">
        <img src={searchImage} className="img-fluid" alt="search-icon" />
        <img
          src={searchImageBlue}
          className="img-fluid active"
          alt="search-icon"
        />
      </button>

      {/* </div> */}
    </div>
  );
};

export default HomePageSearch;

let data = [
  {
    title: 'What is OCBC$ Rewards?',
    id: 382,
    alias: '/node/382',
    category: 'My Account',
    code: null
  },

  {
    title: 'What are the various mode of collection/delivery methods?',
    id: 338,
    alias: '/node/338',
    category: 'Collection Modes',
    code: null
  }
];
