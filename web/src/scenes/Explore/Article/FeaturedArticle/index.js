import React, { useState, useEffect, useRef } from 'react';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import Utilities from '../../../../shared/utilities';
import Slider from 'react-slick';
import './style.scss';
import Item from './Item';

const FeaturedArticles = ({ featuredArticles, history }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 1,
    slidesPerRow: 5,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesPerRow: 3
      }
    }
    ]
  };

  if (!featuredArticles || !featuredArticles.length) {
    return <ShimmerEffect
      height={Utilities.mobilecheck() ? 100 : 200}
      count={Utilities.mobilecheck() ? 2 : 6}
      type="TILE"
      propCls={`shm_col-xs-2 col-md-2`}
    />
  }

  return Utilities.mobilecheck() ? (
    <div style={{ width: '30em', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <div className="grid-container">
        {featuredArticles &&
          featuredArticles.map((event, index) => {
            return <Item event={event} history={history} key={index} />
          })}
      </div>
    </div>
  ) :
    <Slider {...settings}>
      {featuredArticles &&
        featuredArticles.map((event, index) => {
          return (
            <div className="grid-container" key={index}>
              <Item event={event} history={history} />
            </div>
          );
        })}
    </Slider>
};

export default FeaturedArticles;
