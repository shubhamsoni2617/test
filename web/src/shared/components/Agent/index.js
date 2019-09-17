import React, { useState, useEffect } from 'react';
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';
import AgentService from '../../../shared/services/AgentService';
import Constants from '../../../shared/constants';
import grayArrow from '../../../assets/images/down-arrow-grey.svg';

const Agent = props => {
  //Decide which page should be mount (default-agent page)
  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState([]);
  const [listedData, setListedData] = useState([]);
  const [filteredListedData, setFilteredListedData] = useState([]);
  const [countryFileUrl, setCountryFileUrl] = useState('');
  const [showOnMapData, setShowOnMapData] = useState('');
  const [countryName, setCountryName] = useState('');
  const [attractionValue, setAttractionValue] = useState(undefined);
  const [eventValue, setEventValue] = useState(undefined);
  const [mapClick, setMapClick] = useState(true);
  const [activeClassId, setActiveClassId] = useState(0);
  const [countryId, setCountryId] = useState(null);
  const [regionId, setRegionId] = useState(undefined);
  const [checkBox, setCheckBox] = useState(0);
  const [mapInMobile, setMapInMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mapWrapperClass, setMapWrapperClass] = useState('');

  useEffect(() => {
    scrollToTop();
    fetchCountryNRegion();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.pageYOffset +
        document.getElementById('footer').getBoundingClientRect().height +
        34 >=
      window.document.body.clientHeight - window.innerHeight
    ) {
      setTimeout(() => {
        setMapWrapperClass('agent-absolute');
      }, 0);
    } else if (window.pageYOffset >= 280) {
      setTimeout(() => {
        setMapWrapperClass('agent-fixed');
      }, 0);
    } else {
      setTimeout(() => {
        setMapWrapperClass('');
      }, 0);
    }
  };

  useEffect(() => {
    if (countryId) {
      const params = {
        country: countryId
      };
      fetchAgentsNVenues(params);
    }
  }, [countryId, attractionValue, eventValue]);

  useEffect(() => {
    if (countryNRegion && countryNRegion.length > 0 && !countryFileUrl) {
      filterCountryFile('Singapore');
    }
  }, [countryNRegion]);

  //page scroll to top after mounting component
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  //Fetch countries & their respective regions
  const fetchCountryNRegion = () => {
    const eventSelection = venue
      ? AgentService.getVenuesCountryNRegion()
      : AgentService.getAgentsCountryNRegion();
    eventSelection
      .then(res => {
        if (res.data && res.data.data) {
          let countryId = res.data.data.find(el => el.name === 'Singapore').id;
          setCountryId(countryId);
          setCountryNRegion(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //Fetch agents or venues based on selection event
  const fetchAgentsNVenues = params => {
    if (params.region === undefined) {
      params.region = null;
    }
    if (attractionValue) {
      params.attractions = attractionValue;
    }
    if (eventValue) {
      params.events = eventValue;
    }
    params.client = Constants.CLIENT;
    params.sort_type = 'name';
    params.sort_order = 'ASC';

    console.log(params, 'params');
    const eventSelection = venue
      ? AgentService.getVenues(params)
      : AgentService.getAgents(params);
    eventSelection
      .then(res => {
        setListedData(res.data.data);
        setFilteredListedData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // fetch agents or venues after submission (click on "GO" button)
  const submitCountryNRegion = params => {
    setCheckBox(Math.random());
    setCountryId(params.country);
    setRegionId(params.region);
    if (params.country) {
      fetchAgentsNVenues(params);
    }
    setAttractionValue(undefined);
    setEventValue(undefined);
  };
  // filter file for selected country (Festive Period Operating Hours - Agent page)
  const filterCountryFile = file => {
    let filteredFile;
    countryNRegion &&
      countryNRegion.filter(item => {
        if (item.name === file) {
          filteredFile = item.festive_hours_file;
        }
      });
    setCountryFileUrl(filteredFile);
  };

  // set selected list data in parent component
  const showOnMapClick = (e, selectedItem, activePopUpRef) => {
    setToggle(!toggle);
    if (activePopUpRef.current) {
      // remove popUpDetail after clicking on show on map
      activePopUpRef.current.classList.remove('active');
    }
    setShowOnMapData(selectedItem);
  };
  // set selected country in parent component
  const handleCountryName = country => {
    setCountryName(country);
  };
  // set selected attracion in parent component
  const handleAttractionValue = value => {
    setAttractionValue(value);
  };
  // set selected event in parent component
  const handleEventValue = value => {
    setEventValue(value);
  };

  const handleMapClick = event => {
    setMapClick(event);
  };

  const handleActiveClass = activeId => {
    setActiveClassId(activeId);
  };

  const handleMapForMobile = () => {
    if (!mapInMobile) {
      setMapInMobile(true);
    } else {
      setMapInMobile(false);
    }
  };

  const handleMapFilter = value => {
    let data = listedData;
    const lowerCasedFilter = value.toLowerCase();
    const filteredData =
      data &&
      data.filter(item => {
        return Object.keys(item).some(key => {
          if (item[key] === null || typeof item[key] === 'object') {
            return;
          }
          return item.name.toLowerCase().includes(lowerCasedFilter);
          // return item[key].toLowerCase().includes(lowerCasedFilter);
        });
      });

    setFilteredListedData(filteredData);
  };

  console.log(filteredListedData, 'filteredListedData');

  return (
    <section
      className={`agents-wrapper ${mapWrapperClass} ${venue ? 'venue' : ''}`}
    >
      <CountryRegion
        countryNRegion={countryNRegion}
        onSubmit={submitCountryNRegion}
        filterCountryFile={filterCountryFile}
        handleCountryName={handleCountryName}
        handleMapClick={handleMapClick}
        handleMapFilter={handleMapFilter}
        {...props}
      />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="agent-sidebar">
            <SearchAgent
              initialItems={filteredListedData}
              countryFileUrl={countryFileUrl}
              showOnMapClick={showOnMapClick}
              countryName={countryName}
              activeClassId={activeClassId}
              handleAttractionValue={handleAttractionValue}
              handleEventValue={handleEventValue}
              checkBox={checkBox}
              handleMapFilter={handleMapFilter}
              mapClick={mapClick}
              {...props}
            />
          </div>
          <div className="agent-map-area">
            <span className="map-label-mobileonly" onClick={handleMapForMobile}>
              Find in Map
            </span>
            <GoogleMap
              toggler={toggle}
              multipleMarker={filteredListedData}
              showOnMapData={showOnMapData}
              countryName={countryName}
              mapClick={mapClick}
              handleActiveClass={handleActiveClass}
              mapInMobile={mapInMobile}
              {...props}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Agent;
