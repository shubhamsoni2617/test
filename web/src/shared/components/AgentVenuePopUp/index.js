import React, { memo } from 'react';
import redirect from '../../../assets/images/redirect.svg';
import address from '../../../assets/images/address.svg';
import parking from '../../../assets/images/parking.svg';
import food from '../../../assets/images/food.svg';
import clock from '../../../assets/images/clock.svg';
import contact from '../../../assets/images/contact-icon.svg';
import price from '../../../assets/images/price.svg';
import closePopupImage from '../../../assets/images/cross-grey.svg';
import seat from '../../../assets/images/seat.svg';
import notification from '../../../assets/images/notification.svg';
import event from '../../../assets/images/current-event.svg';
import download from '../../../assets/images/download-blue.svg';
import Utilities from '../../utilities';
import Image from '../Image';
import { Link } from 'react-router-dom';
import EventHeading from '../EventHeading';
import './style.scss';

const AgentVenuePopUp = props => {
  const { popUpDetail, item, venue, closePopup } = props;

  let isFile;
  if (popUpDetail.festive_hours && popUpDetail.festive_hours_file) {
    isFile = Utilities.isFileExt(popUpDetail.festive_hours_file);
  }

  const showFoodNBeverage = foodNBeverage => {
    return foodNBeverage.map((elem, index) => {
      return (
        <li key={index}>
          {elem.image ? (
            <Image src={elem.image} alt="specific-event" type="Small" />
          ) : null}
          {elem.name ? (
            <div className="food-beverages-link">
              <a href={elem.url ? elem.url : null} target="_blank">
                {elem.name}
              </a>{' '}
            </div>
          ) : null}
        </li>
      );
    });
  };
  return (
    <div
      className={`pop-up-list ${item.id === popUpDetail.id ? 'active' : ''}`}
    >
      <div className="popup-inner">
        <a
          href={`https://www.google.com/maps/dir//${popUpDetail.address}`}
          className="direction"
          target="_blank"
        >
          <img height="20" width="20" src={redirect} alt="direction" />
        </a>
        <div className="popup-close-icon"
          style={{
            display:
              !Utilities.mobileAndTabletcheck() &&
                window.innerHeight < window.innerWidth
                ? 'none'
                : 'block'
          }}
        >
          <img
            height="20"
            width="20"
            onClick={closePopup}
            src={closePopupImage}
            alt="closePopup"
          />
        </div>

        {popUpDetail.how_to_get_there ? (
          <div className="agent-info">
            <div className="icon">
              <img src={address} alt="icon" />
            </div>
            <div className="details">
              <h3>How To Get There</h3>
              <p>{popUpDetail.how_to_get_there}</p>
            </div>
          </div>
        ) : null}

        {popUpDetail.parking ? (
          <div className="agent-info">
            <div className="icon">
              <img src={parking} alt="icon" />
            </div>
            <div className="details">
              <h3>Parking</h3>
              <p>{popUpDetail.parking}</p>
            </div>
          </div>
        ) : null}

        {venue &&
          popUpDetail.food_beverages &&
          popUpDetail.food_beverages[0].name ? (
            <div className="agent-info">
              <div className="icon">
                <img src={food} alt="icon" />
              </div>
              <div className="details">
                <h3>Food & Beverage</h3>
                <ul className="currently-list">
                  {showFoodNBeverage(popUpDetail.food_beverages)}
                </ul>
              </div>
            </div>
          ) : null}

        {!venue && popUpDetail.operating_hours ? (
          <div className="agent-info">
            <div className="icon">
              <img src={clock} alt="icon" />
            </div>
            <div className="details">
              <h3>Operating Hours</h3>
              <p>{popUpDetail.operating_hours}</p>
              {popUpDetail.festive_hours && (
                <p style={{ color: '#FF8300' }}>{popUpDetail.festive_hours}</p>
              )}
            </div>
          </div>
        ) : null}

        {venue && popUpDetail.contact_details ? (
          <div className="agent-info popup-contact-details">
            <div className="icon">
              <img src={contact} alt="icon" />
            </div>
            <div className="details">
              <h3>Contact Detail</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: popUpDetail.contact_details
                }}
              ></div>
            </div>
          </div>
        ) : null}
        {!venue && popUpDetail.payment_mode ? (
          <div className="agent-info">
            <div className="icon">
              <img src={price} alt="icon" />
            </div>
            <div className="details">
              <h3>Payment Mode</h3>
              <p>{popUpDetail.payment_mode}</p>
            </div>
          </div>
        ) : null}
        {venue && popUpDetail.seating_capacity ? (
          <div className="agent-info">
            <div className="icon">
              <img src={seat} alt="icon" />
            </div>
            <div className="details">
              <h3>Seating Capacity</h3>
              <p>{popUpDetail.seating_capacity}</p>
            </div>
          </div>
        ) : null}
        {!venue && popUpDetail.reminder ? (
          <div className="agent-info">
            <div className="icon">
              <img src={notification} alt="icon" />
            </div>
            <div className="details">
              <h3>Ticket pick up Reminder</h3>
              <p>{popUpDetail.reminder}</p>
            </div>
          </div>
        ) : null}

        {venue &&
          popUpDetail.currentlyShowingData &&
          popUpDetail.currentlyShowingData.length > 0 && (
            <div className="agent-info">
              <div className="icon">
                <img src={event} alt="icon" />
              </div>
              <div className="details">
                <h3>Currently Showing</h3>
                <ul className="currently-list">
                  {popUpDetail.currentlyShowingData.map((elem, index) => {
                    return (
                      <li key={index}>
                        <Image
                          src={elem.thumb_image}
                          alt="specific-event"
                          type="Small"
                        />
                        <Link to={`/events/${elem.alias}`}>
                          <EventHeading
                            title={elem.title}
                            lines={2}
                            height={18}
                            size={13}
                            allowTooltip={false}
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

        {isFile && (
          <div className="agent-info">
            <div className="icon">
              <img src={event} alt="icon" />
            </div>
            <div className="details">
              <h3>Festive hours</h3>
              <p>
                <a
                  href={popUpDetail.festive_hours_file}
                  download
                  target="_blank"
                >
                  Festive Hours file <img src={download} alt="Download" />
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(AgentVenuePopUp);
