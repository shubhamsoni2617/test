import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../../../../assets/images/search-icon-gray.svg';
import './style.scss';
import downloadOrange from '../../../../assets/images/download-orange.svg';
import eventImg from '../../../../assets/images/explore.png';
import downArrow from '../../../../assets/images/downarrow-blue.svg';
import AgentService from '../../../services/AgentService';
import AgentVenuePopUp from '../../AgentVenuePopUp';
import Utilities from '../../../utilities';

const SearchAgent = (props) => {

  const { initialItems, countryFileUrl, showOnMapClick, venue, countryName,
    handleAttractionValue, handleEventValue, activeClassId, checkBox } = props;
  const activePopUpRef = useRef();

  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [openPopUp, setOpenUp] = useState(false);
  const [attraction, setAttraction] = useState(false);
  const [onGoingEvents, setOngoingEvents] = useState(false);
  const [currentlyShowingData, setCurrentlyShowingData] = useState([]);
  let timer;

  useEffect(() => {
    setAttraction(false);
    setOngoingEvents(false);
  }, [checkBox]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // filter data through input tag
  const handleChange = (event) => {
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
        fetchCurrentlyShowingData(params, detail);
      }, 1000);
    } else {
      timer = setTimeout(() => {
        setPopUpDetail(detail)
      }, 1000);
    }
  }

  // timer cleared when mouse-leave event occurs
  const hidePopUp = (detail) => {
    clearTimeout(timer);
    handleActivePopUp();
    setPopUpDetail(detail);
  }

  //fetch CurrentlyShowingData from api
  const fetchCurrentlyShowingData = (params, detail) => {
    AgentService.getVenueSpecificEvents(params)
      .then((res) => {
        if (res.data && res.data.data) {
          detail.currentlyShowingData = res.data.data;
          let currentlyShowingData = res.data.data;
          setCurrentlyShowingData(currentlyShowingData);
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

  //toggle function for selection of attraction checkbox
  const handleAttraction = () => {
    if (!attraction) {
      handleAttractionValue(1)
      setAttraction(true)
    } else {
      handleAttractionValue(undefined)
      setAttraction(false)
    }
  }

  //toggle function for selection of ongoingEvents checkbox
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
      return item.name.toLowerCase().includes(lowerCasedFilter);
      // return item[key].toLowerCase().includes(lowerCasedFilter);
    });
  });

  let isFile;
  if (countryFileUrl) {
    isFile = Utilities.isFileExt(countryFileUrl);
  }


  return (
    <div className="search-agent">
      <h2>{venue ? "Venues in " : "Agents in "} {countryName ? countryName : "Singapore"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="agent-search">
          <button type="submit" className="search-btn"><img src={SearchIcon} alt="search-icon" /></button>
          <input
            className="form-control"
            type="text" value={filter}
            onChange={handleChange}
            placeholder={venue ? "Search for Location" : "Search for an agent"}
          />
        </div>
      </form>
      {venue ?
        <ul className="list-option">
          <li><input type="checkbox" onChange={handleAttraction} className="styled-checkbox" id="1" checked={attraction ? true : false} /><label htmlFor="1"> Attractions</label></li>
          <li><input type="checkbox" onChange={handleOngoingEvents} className="styled-checkbox" id="2" checked={onGoingEvents ? true : false}/><label htmlFor="2"> Venues with Ongoing Events</label></li>
        </ul>
        : null
      }
      {!venue && isFile ?
        <h6 className="festive-hour">
          <a href={countryFileUrl} download target="_blank">Festive Period Operating Hours <img src={downloadOrange} alt="Download" /> </a>
        </h6>
        :
        null
      }

      <ul className="list-group">
        {
          filteredData && filteredData.map((item, index) => {
            return (
              <li className={item.id === activeClassId ? "pop-up-container active-class" : "pop-up-container"} onClick={(e) => { showOnMapClick(e, item, activePopUpRef) }} key={index} onMouseEnter={() => showPopUp(item)} onMouseLeave={hidePopUp}>
                <img src={downArrow} className="active-arrow" alt="Down Arrow" />
                <h3><strong>{item.name}</strong> <span><a onClick={(e) => { showOnMapClick(e, item, activePopUpRef) }}>show on Map</a></span></h3>
                <p>{item.address},{item.country}</p>
                <AgentVenuePopUp item={item} popUpDetail={popUpDetail} currentlyShowingData={currentlyShowingData} activePopUpRef={activePopUpRef} {...props} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default SearchAgent;
