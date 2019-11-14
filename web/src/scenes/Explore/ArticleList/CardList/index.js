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
            <span className="featured-tag">{cardData.title}</span>
            <div className="event-img">
              <Image src={cardData.image} />
            </div>
            <div className="event-details">
              <div className="event-detail-prime">
                {cardData.genre &&
                  cardData.genre.map(genreName => {
                    return <button className="">{genreName}</button>;
                  })}
                <span>{cardData.title}</span>
                <div className="item-title">
                  <div
                    className="text-center sub-text"
                    dangerouslySetInnerHTML={{
                      __html: cardData.description
                    }}
                  />
                </div>
                <span>By {cardData.author_name}</span>
                <span>{cardData.date}</span>
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
