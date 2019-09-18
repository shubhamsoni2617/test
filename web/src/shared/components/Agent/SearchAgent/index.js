import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../../../../assets/images/search-icon-gray.svg';
import './style.scss';
import downloadOrange from '../../../../assets/images/download-orange.svg';
import eventImg from '../../../../assets/images/explore.png';
import downArrow from '../../../../assets/images/downarrow-blue.svg';
import AgentService from '../../../services/AgentService';
import AgentVenuePopUp from '../../AgentVenuePopUp';
import Utilities from '../../../utilities';
import { useCustomWidth } from '../../CustomHooks';
import Constants from '../../../constants';
import ShimmerEffect from '../../ShimmerEffect';

const SearchAgent = props => {
  const {
    initialItems,
    countryFileUrl,
    showOnMapClick,
    venue,
    countryName,
    handleAttractionValue,
    handleEventValue,
    activeClassId,
    checkBox,
    handleMapFilter,
    mapClick
  } = props;

  const [width] = useCustomWidth();
  const activePopUpRef = useRef();
  const [data, setData] = useState([]);
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

  useEffect(() => {
    setFilter('');
  }, [mapClick]);

  const handleSubmit = event => {
    event.preventDefault();
  };

  // filter data through input tag
  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
    handleMapFilter(value);
  };

  // timer set when mouse-enter event occurs
  const showPopUp = detail => {
    handleActivePopUp();
    const params = {
      venue_id: detail.id
    };
    const cachedVenue = data.find(item => item.id === detail.id);
    if (cachedVenue) detail = cachedVenue;
    if (venue && !cachedVenue) {
      // timer = setTimeout(() => {
      fetchCurrentlyShowingData(params, detail);
      // }, 1000);
    } else {
      // timer = setTimeout(() => {
      setPopUpDetail(detail);
      setCurrentlyShowingData(detail.currentlyShowingData);

      // }, 1000);
    }
  };

  // timer cleared when mouse-leave event occurs
  const hidePopUp = detail => {
    clearTimeout(timer);
    handleActivePopUp();
    setPopUpDetail(detail);
  };

  //fetch CurrentlyShowingData from api
  const fetchCurrentlyShowingData = (params, detail) => {
    AgentService.getVenueSpecificEvents(params)
      .then(res => {
        if (res.data && res.data.data) {
          detail.currentlyShowingData = res.data.data;
          let currentlyShowingData = res.data.data;
          setCurrentlyShowingData(currentlyShowingData);
          setPopUpDetail(detail);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //pop-up show and hide function
  const handleActivePopUp = () => {
    if (activePopUpRef.current) {
      if (openPopUp) {
        activePopUpRef.current.classList.remove('active');
        setOpenUp(false);
      } else {
        activePopUpRef.current.classList.add('active');
        setOpenUp(true);
      }
    }
  };

  //toggle function for selection of attraction checkbox
  const handleAttraction = () => {
    if (!attraction) {
      handleAttractionValue(1);
      setAttraction(true);
    } else {
      handleAttractionValue(undefined);
      setAttraction(false);
    }
  };

  //toggle function for selection of ongoingEvents checkbox
  const handleOngoingEvents = () => {
    if (!onGoingEvents) {
      handleEventValue(1);
      setOngoingEvents(true);
    } else {
      handleEventValue(undefined);
      setOngoingEvents(false);
    }
  };

  let isFile;
  if (countryFileUrl) {
    isFile = Utilities.isFileExt(countryFileUrl);
  }

  console.log(initialItems, 'initialItems');

  return (
    <div className="search-agent">
      <div className="search-agent-header">
        <h2>
          {venue ? 'Venues in ' : 'Agents in '}{' '}
          {countryName ? countryName : 'Singapore'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="agent-search">
            <button type="submit" className="search-btn">
              <img src={SearchIcon} alt="search-icon" />
            </button>
            <input
              className="form-control"
              type="text"
              value={filter}
              onChange={handleChange}
              placeholder={
                venue ? 'Search for Location' : 'Search for an agent'
              }
            />
          </div>
        </form>
        {venue ? (
          <ul className="list-option">
            <li>
              <input
                type="checkbox"
                onChange={handleAttraction}
                className="styled-checkbox"
                id="1"
                checked={attraction ? true : false}
              />
              <label htmlFor="1"> Attractions</label>
            </li>
            <li>
              <input
                type="checkbox"
                onChange={handleOngoingEvents}
                className="styled-checkbox"
                id="2"
                checked={onGoingEvents ? true : false}
              />
              <label htmlFor="2"> Venues with Ongoing Events</label>
            </li>
          </ul>
        ) : null}
        {initialItems.length === 0 && filter === '' && (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={80}
            count={3}
            type="TILE"
          />
        )}
        {!venue && isFile ? (
          <h6 className="festive-hour">
            <a href={countryFileUrl} download target="_blank">
              Festive Period Operating Hours{' '}
              <img src={downloadOrange} alt="Download" />{' '}
            </a>
          </h6>
        ) : null}
      </div>
      <ul className="list-group">
        {initialItems &&
          initialItems.map((item, index) => {
            return (
              <li
                className={
                  item.id === activeClassId
                    ? 'pop-up-container active-class'
                    : 'pop-up-container'
                }
                onClick={e => {
                  showOnMapClick(e, item, activePopUpRef);
                }}
                key={index}
                onMouseEnter={() => showPopUp(item)}
                onMouseLeave={hidePopUp}
              >
                <img
                  src={downArrow}
                  className="active-arrow"
                  alt="Down Arrow"
                />
                <h3>
                  <span>
                    <strong>{item.name}</strong>
                  </span>
                  {item.name.length > 25 ? <br /> : null}{' '}
                  <span>
                    <a
                      onClick={e => {
                        showOnMapClick(e, item, activePopUpRef);
                      }}
                    >
                      Show on Map
                    </a>
                  </span>
                </h3>
                <p>
                  {item.address},{item.country}
                </p>
                <AgentVenuePopUp
                  item={item}
                  popUpDetail={popUpDetail}
                  currentlyShowingData={currentlyShowingData}
                  activePopUpRef={activePopUpRef}
                  {...props}
                />
              </li>
            );
          })}
        {initialItems.length === 0 && filter!==''  ? <h4>No result found</h4> : null}
      </ul>
    </div>
  );
};

export default SearchAgent;
