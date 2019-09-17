import React from 'react';
import redirect from '../../../assets/images/redirect.svg';
import address from '../../../assets/images/address.svg';
import parking from '../../../assets/images/parking.svg';
import food from '../../../assets/images/food.svg';
import clock from '../../../assets/images/clock.svg';
import contact from '../../../assets/images/contact-icon.svg';
import price from '../../../assets/images/price.svg';
import seat from '../../../assets/images/seat.svg';
import notification from '../../../assets/images/notification.svg';
import event from '../../../assets/images/current-event.svg';
import download from '../../../assets/images/download-blue.svg';
import Utilities from '../../utilities';
import Image from '../Image';
import { Link } from 'react-router-dom';
import './style.scss';
import EventHeading from '../EventHeading';
const AgentVenuePopUp = props => {
  const {
    item,
    popUpDetail,
    currentlyShowingData,
    activePopUpRef,
    venue
  } = props;

  let isFile;
  if (popUpDetail.festive_hours && popUpDetail.festive_hours_file) {
    isFile = Utilities.isFileExt(popUpDetail.festive_hours_file);
  }

  const showFoodNBeverage = foodNBeverage => {
    return foodNBeverage.map((elem, index) => {
        return (
          <ul className="currently-list">
            <li key={index}>
              {elem.image ? (
                <Image src={elem.thumb_image} alt="specific-event" type="Small" />
              ) : null}
              <div className="food-beverages-link">{elem.name ? <Link to="">{elem.name}</Link> : null}</div>
            </li>
          </ul>
        );
    });
  };

  return (
    <div
      className={
        item.id === popUpDetail.id ? 'pop-up-list active' : 'pop-up-list'
      }
      ref={item.id === popUpDetail.id ? activePopUpRef : null}
    >
      <a
        href={`https://www.google.com/maps/dir//${popUpDetail.address}`}
        className="direction"
        target="_blank"
      >
        <img height="20" width="20" src={redirect} alt="direction" />
      </a>
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
            {showFoodNBeverage(popUpDetail.food_beverages)}
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
          </div>
        </div>
      ) : null}

      {venue && popUpDetail.contact_details ? (
        <div className="agent-info">
          <div className="icon">
            <img src={contact} alt="icon" />
          </div>
          <div className="details">
            <h3>Contact Detail</h3>
            <div
              dangerouslySetInnerHTML={{ __html: popUpDetail.contact_details }}
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
      popUpDetail.currentlyShowingData.length > 0 ? (
        <div className="agent-info">
          <div className="icon">
            <img src={event} alt="icon" />
          </div>
          <div className="details">
            <h3>Currently Showing</h3>
            <ul className="currently-list">
              {currentlyShowingData && currentlyShowingData.length > 0 ? (
                currentlyShowingData.map((elem, index) => {
                  return (
                    <li key={index}>
                      {/* <img src={elem.thumb_image} alt="specific-event" /> */}
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
                          size={14}
                          allowTooltip={false}
                        />
                      </Link>
                    </li>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
      ) : null}
      {isFile && (
        <div className="agent-info">
          <div className="icon">
            <img src={event} alt="icon" />
          </div>
          <div className="details">
            <h3>Festive hours</h3>
            <p>
              <a href={popUpDetail.festive_hours_file} download target="_blank">
                Festive Hours file <img src={download} alt="Download" />
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentVenuePopUp;
