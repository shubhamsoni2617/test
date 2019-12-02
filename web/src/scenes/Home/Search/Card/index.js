import React, { Component } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import navigateToLink from '../../../../shared/HelperFunctions/navigateToLink';

const Card = props => {
  const { cardData } = props;
  return (
    <div
      className={`event-block ${
        cardData.type === 'event' || cardData.type === 'attractions'
          ? ``
          : `full-desc`
      }`}
    >
      <div className="event-img">
        <Image src={cardData.image} />
      </div>
      <div className="event-details">
        <div className="event-detail-prime">
          {cardData.type && cardData.type !== 'attractions' && (
            <h6>{cardData.type.toUpperCase()}</h6>
          )}
          {cardData.type && cardData.type === 'attractions' && (
            <h6>{'attraction'.toUpperCase()}</h6>
          )}
          <div className="item-title">
            <h5>{cardData.title}</h5>
            {cardData.date && <p className="event-date">{cardData.date}</p>}
            {cardData.venue && <p className="event-place">{cardData.venue}</p>}
            <span className={`${cardData.type === 'event' ? `event` : ``}`}>
              {cardData.category}
            </span>
          </div>
        </div>
        <div className="price-event">
          <div className="price">
            {cardData.status && <span>{cardData.status}</span>}
            {cardData.price && <p>{cardData.price}</p>}
          </div>
          <div
            onClick={() =>
              navigateToLink(
                props.history,
                cardData.type,
                cardData.category,
                cardData.id,
                cardData.code,
                cardData.tid
              )
            }
          >
            {cardData.type === 'event' || cardData.type === 'attractions' ? (
              <button type="button">Buy Tickets</button>
            ) : (
              <button type="button">Read More</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
