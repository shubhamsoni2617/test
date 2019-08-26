import React, { Fragment, useState, useRef } from 'react';
import SearchIcon from '../../../assets/images/search-icon-gray.svg';
import './style.scss';
import Watch from '../../../assets/images/stopwatch-grey.svg';
import food from '../../../assets/images/food.svg';
import parking from '../../../assets/images/parking.svg';
import contact from '../../../assets/images/contact.svg';
import seat from '../../../assets/images/seat.svg';
import event from '../../../assets/images/current-event.svg';
import address from '../../../assets/images/address.svg';
import redirect from '../../../assets/images/redirect.svg';
import notification from '../../../assets/images/notification.svg';
import price from '../../../assets/images/price.svg';
import clock from '../../../assets/images/clock.svg';
import download from '../../../assets/images/download-blue.svg';
import downloadOrange from '../../../assets/images/download-orange.svg';
import eventImg from '../../../assets/images/explore.png';
import downArrow from '../../../assets/images/downarrow-blue.svg';

const SearchAgent = (props) => {

  const { initialItems, countryFile, onClick, getDirectionDetail } = props;
  const activePopUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [openPopUp, setOpenUp] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleSearchAgent = (event) => {
    const { value } = event.target;
    setFilter(value);
  }

  const showPopUp = (detail) => {
    setPopUpDetail(detail);
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

  // ------------------------------Array filtering-----------------------------
  const lowerCasedFilter = filter.toLowerCase();
  const filteredData = initialItems && initialItems.filter(item => {
    return Object.keys(item).some(key => {
      if (item[key] === null) {
        return
      }
      return item[key].toLowerCase().includes(lowerCasedFilter)
    });
  });


  return (
    <div className="search-agent">
      <h2>Agents in Singapore</h2>
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
      <h6 className="festive-hour">
        {countryFile && <a href={countryFile} download target="_blank">Festive Period Operating Hours <img src={downloadOrange} alt="Download" /> </a>}
      </h6>
      <ul className="list-group">
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <li className="pop-up-container" key={index} onMouseEnter={() => showPopUp(item)} onMouseLeave={showPopUp}>
                <img src={downArrow} className="active-arrow" alt="Down Arrow"/>
                <div><strong>{item.name}</strong> <span><a onClick={(e)=>{onClick(e,item)}}>shown On Map</a></span></div>
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
                            <img src={clock} alt="icon" />
                        </div>
                        <div className="details">
                            <h3>Operating Hours</h3>
                            <p>{popUpDetail.operating_hours}</p>
                        </div>
                  </div>
                  <div className="agent-info">
                        <div className="icon">
                            <img src={price} alt="icon" />
                        </div>
                        <div className="details">
                            <h3>Payment Mode</h3>
                            <p>{popUpDetail.payment_mode}</p>
                        </div>
                  </div>
                  <div className="agent-info">
                        <div className="icon">
                            <img src={notification} alt="icon" />
                        </div>
                        <div className="details">
                            <h3>Ticket pick up Reminder</h3>
                            <p>{popUpDetail.reminder}</p>
                        </div>
                  </div>
                  <div className="agent-info">
                        <div className="icon">
                            <img src={event} alt="icon" />
                        </div>
                        <div className="details">
                            <h3>Currently Showing</h3>
                            <ul className="currently-list">
                                <li>
                                    <img src={eventImg} alt="" />
                                    <p>SSO Red Balloon Series: Rhythums, Rites </p>
                                </li>
                                <li>
                                    <img src={eventImg} alt="" />
                                    <p>SSO Red Balloon Series: Rhythums, Rites </p>
                                </li>
                                <li>
                                    <img src={eventImg} alt="" />
                                    <p>SSO Red Balloon Series: Rhythums, Rites </p>
                                </li>
                                <li>
                                    <img src={eventImg} alt="" />
                                    <p>SSO Red Balloon Series: Rhythums, Rites </p>
                                </li>
                            </ul>
                        </div>
                  </div>
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
