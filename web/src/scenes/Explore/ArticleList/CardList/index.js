import React, { Component, Fragment } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';
import EventHeading from '../../../../shared/components/EventHeading';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';

const CardList = ({ articleList, loadMore }) => {
  return articleList.length ? (
    articleList.map(cardData => {
      return (
        <div key={cardData.id}>
          <div className="event-block">
            {/* <span className="featured-tag">{cardData.genre[0]}</span> */}
            <span className="featured-tag">{cardData.title}</span>
            <div className="event-img">
              {/* <Image src={cardData.image} height="300px" /> */}
              <img src={cardData.thumb_image} height="400px" />
            </div>
            <div className="event-details">
              <div className="event-detail-prime">
                {/* {cardData.tags &&
                  cardData.tags.map(tag => {
                    return <button className="">{tag}</button>;
                  })} */}
                {/* <div className="item-title">
                  <div
                    className="text-center sub-text"
                    dangerouslySetInnerHTML={{
                      __html: cardData.description
                    }}
                  />
                </div> */}
                {cardData.synopsis && (
                  <span>{cardData.synopsis.slice(0, 65)}...</span>
                )}
                {cardData.synopsis && cardData.synopsis.length > 65 && (
                  <span>More</span>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <ShimmerEffect
      propCls={`${
        Utilities.mobileAndTabletcheck() ? 'shm_col-xs-6' : ''
      } col-md-4`}
      height={150}
      count={Utilities.mobileAndTabletcheck() ? 2 : 3}
      type="LIST"
    />
  );
};
export default CardList;
