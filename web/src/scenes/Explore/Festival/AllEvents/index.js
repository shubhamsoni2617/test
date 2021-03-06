import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';
import arrowDown from '../../../../assets/images/arrow-right.svg';

const AllEvents = ({ sectionFour }) => {
  const [limit, setLimit] = useState(10);
  return sectionFour && sectionFour.events && sectionFour.events.length > 0 ? (
    <section className="festival-event-banner">
      <div className="container-fluid custom-container">
        <div className="fest-event-wrapper">
          {sectionFour && sectionFour.heading && (
            <h2>{sectionFour && sectionFour.heading}</h2>
          )}

          <div className="fest-box">
            {sectionFour &&
              sectionFour.events &&
              sectionFour.events
                .slice(0, limit)
                .map(({ image, event_date, title, venue, code }) => {
                  return (
                    <Link
                      to={`/events/${code}`}
                      className="event-box"
                      key={title}
                    >
                      <Image src={image} type="Horizontal" />
                      <h2>
                        {Utilities.showLimitedChars(
                          title,
                          Utilities.mobilecheck() ? 25 : 40
                        )}
                      </h2>
                      <span>{event_date}</span>
                      <p>
                        {Utilities.showLimitedChars(
                          venue,
                          Utilities.mobilecheck() ? 25 : 50
                        )}
                      </p>
                    </Link>
                  );
                })}
          </div>
          {sectionFour &&
            sectionFour.events &&
            sectionFour.events.length > limit && (
              <a
                onClick={() => {
                  setLimit(sectionFour.events.length);
                }}
              >
                Load more ({sectionFour.events.length - limit})
                <Image src={arrowDown} />
              </a>
            )}
        </div>
      </div>
    </section>
  ) : null;
};

export default AllEvents;
