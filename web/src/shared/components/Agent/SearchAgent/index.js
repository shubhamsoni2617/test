import React, { useState, useRef } from 'react';
import SearchIcon from '../../../../assets/images/search-icon-gray.svg';
import './style.scss';
import food from '../../../../assets/images/food.svg';
import parking from '../../../../assets/images/parking.svg';
import contact from '../../../../assets/images/contact.svg';
import seat from '../../../../assets/images/seat.svg';
import event from '../../../../assets/images/current-event.svg';
import address from '../../../../assets/images/address.svg';
import redirect from '../../../../assets/images/redirect.svg';
import notification from '../../../../assets/images/notification.svg';
import price from '../../../../assets/images/price.svg';
import clock from '../../../../assets/images/clock.svg';
import download from '../../../../assets/images/download-blue.svg';
import downloadOrange from '../../../../assets/images/download-orange.svg';
import eventImg from '../../../../assets/images/explore.png';
import downArrow from '../../../../assets/images/downarrow-blue.svg';
import AgentService from '../../../services/AgentService';

const SearchAgent = (props) => {

  const { initialItems, countryFile, onClick, venue, countryName, handleAttractionValue, handleEventValue } = props;
  const activePopUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [openPopUp, setOpenUp] = useState(false);
  const [attraction, setAttraction] = useState(false);
  const [onGoingEvents, setOngoingEvents] = useState(false);
  const [specificEvent, setSpecificEvent] = useState([]);
  let timer;

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  // timer set when mouse-enter event occurs
  const showPopUp = (detail) => {
    handleActivePopUp();
    const params = {
      venue_id: detail.id
    };
    if (venue) {
      timer = setTimeout(() => {
        handleSpecificEvents(params, detail);
      }, 600);
    } else {
      timer = setTimeout(() => {
        setPopUpDetail(detail)
      }, 600);
    }
  }

  // timer cleared when mouse-leave event occurs
  const hidePopUp = (detail) => {
    clearTimeout(timer);
    handleActivePopUp();
    setPopUpDetail(detail);
  }

  //fetch specific-events data from api
  const handleSpecificEvents = (params, detail) => {
    AgentService.getVenueSpecificEvents(params)
      .then((res) => {
        if (res.data && res.data.data) {
          detail.specificEvent = res.data.data;
          let specificEvent = res.data.data;
          setSpecificEvent(specificEvent);
          setPopUpDetail(detail);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //pop-up show and hide function
  const handleActivePopUp = () => {
    if (activePopUpRef.current) {
      if (openPopUp) {
        activePopUpRef.current.classList.remove("active");
        setOpenUp(false);
      } else {
        activePopUpRef.current.classList.add("active");
        setOpenUp(true);
      }
    }
  }

  const handleAttraction = () => {
    if (!attraction) {
      handleAttractionValue(1)
      setAttraction(true)
    } else {
      handleAttractionValue(undefined)
      setAttraction(false)
    }
  }

  const handleOngoingEvents = () => {
    if (!onGoingEvents) {
      handleEventValue(1)
      setOngoingEvents(true)
    } else {
      handleEventValue(undefined)
      setOngoingEvents(false)
    }
  }

  // ------------------------------Array filtering-----------------------------
  const lowerCasedFilter = filter.toLowerCase();
  const filteredData = initialItems && initialItems.filter(item => {
    return Object.keys(item).some(key => {
      if (item[key] === null || typeof item[key] === "object") {
        return
      }
      return item[key].toLowerCase().includes(lowerCasedFilter)
    });
  });

  return (
    <div className="search-agent">
      <h2>{venue ? "Venue in " : "Agents in "} {countryName ? countryName : "Singapore"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="agent-search">
          <button type="submit" className="search-btn"><img src={SearchIcon} alt="search-icon" /></button>
          <input
            className="form-control"
            type="text" value={filter}
            onChange={handleSearchAgent}
            placeholder="Search for an agent"
          />
        </div>
      </form>
      {venue ?
        <div>
          <h5><input type="checkbox" onClick={handleAttraction} /><span> Attraction</span></h5>
          <h5><input type="checkbox" onClick={handleOngoingEvents} /><span> Venues With Ongoing Events</span></h5>
        </div>
        : null
      }
      {!venue ?
        <h6 className="festive-hour">
          {countryFile && <a href={countryFile} download target="_blank">Festive Period Operating Hours <img src={downloadOrange} alt="Download" /> </a>}
        </h6>
        :
        null
      }

      <ul className="list-group">
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <li className="pop-up-container" key={index} onMouseEnter={() => showPopUp(item)} onMouseLeave={hidePopUp}>
                <img src={downArrow} className="active-arrow" alt="Down Arrow" />
                <div><strong>{item.name}</strong> <span><a onClick={(e) => { onClick(e, item, activePopUpRef) }}>shown On Map</a></span></div>
                <div>{item.address},{item.country}</div>
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
                      <img src={venue ? food : clock} alt="icon" />
                    </div>
                    <div className="details">
                      <h3>{venue ? "Food & Beverage" : "Operating Hours"}</h3>
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
                  {venue && popUpDetail.specificEvent && popUpDetail.specificEvent.length > 0 ?
                    <div className="agent-info">
                      <div className="icon">
                        <img src={event} alt="icon" />
                      </div>
                      <div className="details">
                        <h3>Currently Showing</h3>
                        <ul className="currently-list">
                          {specificEvent && specificEvent.length > 0 ?
                            specificEvent.map((elem, index) => {
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
                  {popUpDetail.festive_hours &&
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
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default SearchAgent;
