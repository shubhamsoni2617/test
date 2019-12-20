import React, { Component } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import navigateToLink from '../../../../shared/HelperFunctions/navigateToLink';
import './style.scss';
import EventHeading from '../../../../shared/components/EventHeading';
import Utilities from '../../../../shared/utilities';
import Ellipsis from '../../../../shared/components/Ellipsis';

const Card = props => {
  const { cardData } = props;
  return (
    <div
      className={`event-block cursor-pointer ${
        cardData.type === 'event' || cardData.type === 'attractions'
          ? ``
          : `full-desc`
        }`}
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
            <EventHeading
              title={cardData.title}
              lines={2}
              height={Utilities.mobilecheck() ? 19 : Utilities.mobileAndTabletcheck() ? 20 : 20}
            />
            {cardData.date &&
              <Ellipsis
                title={cardData.date}
                lines={1}
                customClass="event-date"
                height={Utilities.mobilecheck() ? 17 : Utilities.mobileAndTabletcheck() ? 17 : 17}
              />
            }
            {cardData.venue &&
              <Ellipsis
                title={cardData.venue}
                lines={1}
                customClass="event-place"
                height={Utilities.mobilecheck() ? 17 : Utilities.mobileAndTabletcheck() ? 17 : 17}
              />
            }
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
          <div>
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
