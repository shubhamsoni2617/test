import React from 'react';
import './style.scss';

const Banner = ({

}) => {
  return (
    <div className="banner-leftalign-wrapper">
      <div className="container-fluid">
        <div className="banner-leftalign">
          <div className="banner-desc">
            <div className="banner-title">
              <p>About SISTIC</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tellus vel lorem auctor lobortis. Donec ultricies massa eu quam hendrerit fringilla.</p>
            </div>
            <a className="buy-now" href="#">
              <span>Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
