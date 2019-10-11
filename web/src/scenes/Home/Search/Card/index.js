import React, { Component } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';

const Card = props => {
  const { cardData } = props;
  return (
    <div className="event-block">
      <div className="event-img">
        <Image src={cardData.thumb_image} />
      </div>
      <div className="event-details">
        <div className="event-detail-prime">
          <h6>{cardData.type.toUpperCase()}</h6>

          <div className="item-title">
            <h5>{cardData.title}</h5>
            {cardData.date && <p className="event-date">{cardData.date}</p>}
            {cardData.date && <p className="event-place">{cardData.venue}</p>}
            <h6 className={`${cardData.type === 'event' ? `category` : ``}`}>
              {cardData.category}
            </h6>
          </div>
        </div>
        <div className="price-event">
          <div className="price">
            {cardData.status && <span>{cardData.status}</span>}
            {cardData.price && <p>{cardData.price}</p>}
          </div>
          <button type="button">Buy Tickets</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
