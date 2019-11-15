import React, { Component, Fragment } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import noEvent from '../../../../assets/images/no-event.svg';

const CardList = ({ articleList, totalRecords }) => {
  let textLimit = Utilities.mobilecheck() ? 45 : 50;
  return articleList.length ? (
    articleList.map(cardData => {
      return (
        <div key={cardData.id}>
          <div className="event-block">
            {/* <span className="category">{cardData.title}</span> */}
            <div className="event-img">
              <Image src={cardData.image} />
            </div>
            <div className="event-details">
              <div className="event-detail-prime">
                <div className="category-group">
                  <ul>
                    {cardData.genre &&
                      cardData.genre.map(genreName => {
                        return (
                          <li>
                            <span className="">{genreName}</span>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                <h3>{cardData.title}</h3>
                <div className="item-title">
                  <span>{cardData.description.slice(0, textLimit)}</span>
                  <span className="article-show-more">...More</span>
                </div>
                <div className="item-bottom">
                  <span className="item-author">By {cardData.author_name}</span>
                  <span className="item-date">{cardData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : totalRecords === 0 ? (
    <ShimmerEffect
      propCls={`${
        Utilities.mobileAndTabletcheck() ? 'shm_col-xs-6' : ''
      } col-md-4`}
      height={150}
      count={Utilities.mobileAndTabletcheck() ? 2 : 3}
      type="LIST"
    />
  ) : (
    <div className="no-data">
      <img src={noEvent} alt="No Event Data" />
      <p>
        <strong>No Data found</strong>
      </p>
      <p>Try again with more general search events</p>
    </div>
  );
};
export default CardList;
