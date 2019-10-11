import React, { Component, useState } from 'react';
import searchImage from '../../../assets/images/search.svg';
import searchImageBlue from '../../../assets/images/search-blue.svg';
import prevArrowWhiteImage from '../../../assets/images/prev-arrow-white.svg';
import recentSearchIconImage from '../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../assets/images/close-blue-color.svg';
import eventImage from '../../../assets/images/kurios-joker.jpg';
import './style.scss';
import { Link } from 'react-router-dom';

const HomePageSearch = () => {
  const [input, setInput] = useState('');
  return (
    <div className="header-search">
      <input
        placeholder="Search experiences..."
        className="form-control"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <img src={searchImage} className="img-fluid" alt="search-icon" />
        <img
          src={searchImageBlue}
          className="img-fluid active"
          alt="search-icon"
        />
      </button>
      <div className="searched-wrapper">
        <Link to={`/search-results?q=${input}`}>
          See all Results for {input}
        </Link>
      </div>
    </div>
  );
};

export default HomePageSearch;
