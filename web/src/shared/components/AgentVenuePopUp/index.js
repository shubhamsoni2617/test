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

const AgentVenuePopUp = (props) => {

  const { item, popUpDetail, currentlyShowingData, activePopUpRef, venue } = props;

  let isFile;
  if (popUpDetail.festive_hours && popUpDetail.festive_hours_file) {
    isFile = Utilities.isFileExt(popUpDetail.festive_hours_file);
  }


  return (
    <div
      className={item.id === popUpDetail.id ? "pop-up-list active" : "pop-up-list"}
      ref={item.id === popUpDetail.id ? activePopUpRef : null}
    >

      <a href={`https://www.google.com/maps/dir//${popUpDetail.address}`} className="direction" target="_blank">
        <img height='20' width='20' src={redirect} alt="direction" />
      </a>
      <div className="agent-info">
        <div className="icon">
          <img src={address} alt="icon" />
        </div>
        <div className="details">
          <h3>How To Get There</h3>
          <p>{popUpDetail.how_to_get_there}</p>
        </div>
      </div>
      <div className="agent-info">
        <div className="icon">
          <img src={parking} alt="icon" />
        </div>
        <div className="details">
          <h3>Parking</h3>
          <p>{popUpDetail.parking}</p>
        </div>
      </div>
      <div className="agent-info">
        <div className="icon">
          {venue && popUpDetail.food_beverages && popUpDetail.food_beverages[0].name ?
            <img src={food} alt="icon" /> : null}
          {!venue ? <img src={clock} alt="icon" /> : null}
        </div>
        <div className="details">
          {venue && popUpDetail.food_beverages && popUpDetail.food_beverages[0].name ?
            <h3>"Food & Beverage"</h3> : null}
          {!venue ? <h3>"Operating Hours"</h3> : null}
          <p>{venue ? popUpDetail.food_beverages && popUpDetail.food_beverages[0].name : popUpDetail.operating_hours}</p>
        </div>
      </div>
      <div className="agent-info">
        <div className="icon">
          <img src={venue ? contact : price} alt="icon" />
        </div>
        <div className="details">
          <h3>{venue ? "Contact Detail" : "Payment Mode"}</h3>
          <p>{venue ? popUpDetail.contact_details : popUpDetail.payment_mode}</p>
        </div>
      </div>
      <div className="agent-info">
        <div className="icon">
          <img src={venue ? seat : notification} alt="icon" />
        </div>
        <div className="details">
          <h3>{venue ? "Seating Capacity" : "Ticket pick up Reminder"}</h3>
          <p>{venue ? popUpDetail.seating_capacity : popUpDetail.reminder}</p>
        </div>
      </div>
      {venue && popUpDetail.currentlyShowingData && popUpDetail.currentlyShowingData.length > 0 ?
        <div className="agent-info">
          <div className="icon">
            <img src={event} alt="icon" />
          </div>
          <div className="details">
            <h3>Currently Showing</h3>
            <ul className="currently-list">
              {currentlyShowingData && currentlyShowingData.length > 0 ?
                currentlyShowingData.map((elem, index) => {
                  return (
                    <li key={index}>
                      <img src={elem.thumb_image} alt="specific-event" />
                      <p>{elem.title}</p>
                    </li>
                  )
                })
                :
                <p>Loading...</p>
              }
            </ul>
          </div>
        </div>
        :
        null
      }
      {isFile &&
        <div className="agent-info">
          <div className="icon">
            <img src={event} alt="icon" />
          </div>
          <div className="details">
            <h3>Festive hours</h3>
            <p><a href={popUpDetail.festive_hours_file} download target="_blank">
              Festive Hours file <img src={download} alt="Download" />
            </a></p>
          </div>
        </div>}
    </div>
  );
};

export default AgentVenuePopUp;
