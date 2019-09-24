import React, { useState, useEffect, useCallback } from 'react';
import SearchIcon from '../../../../assets/images/search-icon-gray.svg';
import downloadOrange from '../../../../assets/images/download-orange.svg';
import downArrow from '../../../../assets/images/downarrow-blue.svg';
import AgentService from '../../../services/AgentService';
import AgentVenuePopUp from '../../AgentVenuePopUp';
import Utilities from '../../../utilities';
import ShimmerEffect from '../../ShimmerEffect';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.scss';

const SearchAgent = props => {
  const {
    initialItems,
    countryFileUrl,
    showOnMapClick,
    venue,
    countryName,
    handleAttractionValue,
    handleEventValue,
    checkBox,
    handleMapFilter,
    mapClick,
    agentWrapper,
    handleDeselectInfo
  } = props;

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [popUpDetail, setPopUpDetail] = useState('');
  const [attraction, setAttraction] = useState(false);
  const [onGoingEvents, setOngoingEvents] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    document.addEventListener('click', closePopup);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closePopup);
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const closePopup = e => {
    if (e.target.classList.contains('event-title')) return;
    if (e.target.classList.contains('agent-info')) return;
    if (e.target.closest('.agent-info')) return;

    setPopUpDetail({});
  };
  const escFunction = e => {
    if (e.keyCode === 27) {
      closePopup(e);
    }
  };
  const handleScroll = useCallback(() => {
    // if (
    //   agentWrapper.current.classList.contains('agent-fixed') &&
    //   document.getElementsByClassName('pop-up-list active') &&
    //   document.getElementsByClassName('pop-up-list active').length
    // ) {
    //   if (
    //     document
    //       .getElementsByClassName('pop-up-list active')[0]
    //       .getBoundingClientRect().top < 85
    //   ) {
    //     setPopUpDetail({});
    //   }
    // }
    // if (
    //   window.pageYOffset +
    //     document.getElementById('footer').getBoundingClientRect().height >=
    //   window.document.body.clientHeight - window.innerHeight
    // ) {
    //   agentWrapper.current.classList.remove('agent-fixed');
    //   agentWrapper.current.classList.add('agent-absolute');
    //   document.getElementsByClassName('search-agent')[0].style.marginTop =
    //     '0px';
    // } else if (
    //   window.pageYOffset >=
    //   document
    //     .getElementsByClassName('banner-wrapper')[0]
    //     .getBoundingClientRect().height
    // ) {
    //   agentWrapper.current.classList.remove('agent-absolute');
    //   agentWrapper.current.classList.add('agent-fixed');
    //   document.getElementsByClassName(
    //     'search-agent'
    //   )[0].style.marginTop = `${document
    //     .getElementsByClassName('search-agent-header')[0]
    //     .getBoundingClientRect().height - 33}px`;
    // } else {
    //   agentWrapper.current.classList.remove('agent-absolute');
    //   agentWrapper.current.classList.remove('agent-fixed');
    //   document.getElementsByClassName('search-agent')[0].style.marginTop =
    //     '0px';
    // }
  });

  useEffect(() => {
    handleScroll();
  }, [initialItems]);

  useEffect(() => {
    handleDeselectInfo();
  }, [attraction, onGoingEvents, filter]);

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

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
    handleMapFilter(value);
  };

  const showPopUp = detail => {
    const params = {
      venue_id: detail.id
    };
    const cachedVenue = data.find(item => item.id === detail.id);
    if (cachedVenue) detail = cachedVenue;
    setPopUpDetail(detail);
    if (venue && !cachedVenue) {
      fetchCurrentlyShowingData(params, detail);
    }
  };

  const fetchCurrentlyShowingData = (params, detail) => {
    AgentService.getVenueSpecificEvents(params)
      .then(res => {
        if (res.data && res.data.data) {
          detail.currentlyShowingData = res.data.data;
          let newData = [...data, { ...detail }];
          setData(newData);
          setPopUpDetail(detail);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleAttraction = () => {
    if (!attraction) {
      handleAttractionValue(1);
      setAttraction(true);
    } else {
      handleAttractionValue(0);
      setAttraction(false);
    }
  };

  const handleOngoingEvents = () => {
    if (!onGoingEvents) {
      handleEventValue(1);
      setOngoingEvents(true);
    } else {
      handleEventValue(0);
      setOngoingEvents(false);
    }
  };

  let isFile;
  if (countryFileUrl) {
    isFile = Utilities.isFileExt(countryFileUrl);
  }

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
        {!initialItems && filter === '' && (
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
                  item.id === popUpDetail.id
                    ? 'pop-up-container active'
                    : 'pop-up-container'
                }
                key={index}
              >
                <h3>
                  <span onClick={() => showPopUp(item)}>
                    <strong className="event-title">{item.name}</strong>
                  </span>
                  {item.name.length > 25 ? <br /> : null}{' '}
                  <span>
                    <a
                      onClick={() => {
                        showOnMapClick(item);
                      }}
                    >
                      Show on Map
                    </a>
                  </span>
                </h3>
                <p>
                  {item.address},{item.country}
                </p>
                <CSSTransitionGroup
                  transitionName="mega"
                  transitionEnter={true}
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
                >
                  {item.id === popUpDetail.id && (
                    <AgentVenuePopUp
                      item={item}
                      popUpDetail={popUpDetail}
                      venue={venue}
                      currentlyShowingData={popUpDetail.currentlyShowingData}
                    />
                  )}
                </CSSTransitionGroup>
              </li>
            );
          })}
        {initialItems && initialItems.length === 0 ? (
          <h4>No result found</h4>
        ) : null}
      </ul>
    </div>
  );
};

export default SearchAgent;
