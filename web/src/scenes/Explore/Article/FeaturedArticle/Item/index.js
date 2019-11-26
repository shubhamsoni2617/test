import React from 'react';
import Utilities from '../../../../../shared/utilities';
import Image from '../../../../../shared/components/Image';
import { Link } from 'react-router-dom';
const Item = ({ event, history }) => {
  return (
    <Link to={`/explore/1/${event.id}`}>
      <div className="item">
        <div className="item-wrapper">
          <div className="featured-item-img">
            <div className="item-img">
              <Image
                src={event && event.image}
                className="img-fluid"
                type="Small"
              />
            </div>
            <span
              className={`category ${event &&
                event.primary_genre &&
                event.primary_genre.toLowerCase()}`}
            >
              {event.primary_genre}
            </span>
          </div>
          {event && <p className="featured-event-date">{event.event_date}</p>}
          {event && event.title && (
            <h3>
              {Utilities.showLimitedChars(
                event && event.title,
                Utilities.mobilecheck() ? 30 : 40
              )}
            </h3>
          )}
          {event && event.venue && (
            <p className="venue-name">
              {Utilities.showLimitedChars(
                event && event.venue,
                Utilities.mobilecheck() ? 20 : 30
              )}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Item;
