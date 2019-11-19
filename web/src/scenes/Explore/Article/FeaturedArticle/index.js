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
    slidesPerRow: 5
  };

  return featuredArticles && featuredArticles.length ? (
    Utilities.mobilecheck() ? (
      <div style={{ width: '30em', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <h3>Featured in Article</h3>
        <div className="grid-container">
          {featuredArticles &&
            featuredArticles.map((event, index) => {
              return (
                <div className="grid-container" key={index}>
                  <Item event={event} history={history} />
                </div>
              );
            })}
        </div>
      </div>
    ) : (
      <Slider {...settings}>
        <h3>Featured in Article</h3>
        {featuredArticles &&
          featuredArticles.map((event, index) => {
            return (
              <div className="grid-container" key={index}>
                <Item event={event} history={history} />
              </div>
            );
          })}
      </Slider>
    )
  ) : (
    <ShimmerEffect
      height={Utilities.mobilecheck() ? 100 : 200}
      count={Utilities.mobilecheck() ? 2 : 6}
      type="TILE"
      propCls={`shm_col-xs-2 col-md-2`}
    />
  );
};

export default FeaturedArticles;
