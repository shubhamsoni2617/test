import React, { useState, useEffect, useRef } from 'react';
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
  const agentWrapper = useRef();
  const [countryNRegion, setCountryNRegion] = useState([]);
  const [listedData, setListedData] = useState([]);
  const [filteredListedData, setFilteredListedData] = useState(null);
  const [countryFileUrl, setCountryFileUrl] = useState('');
  const [showOnMapData, setShowOnMapData] = useState('');
  const [countryName, setCountryName] = useState('Singapore');
  const [regionName, setRegionName] = useState('All locations');
  const [attractionValue, setAttractionValue] = useState(null);
  const [eventValue, setEventValue] = useState(null);
  const [mapClick, setMapClick] = useState(1);
  const [activeClassId, setActiveClassId] = useState(0);
  const [countryId, setCountryId] = useState(null);
  const [regionId, setRegionId] = useState(null);
  const [checkBox, setCheckBox] = useState(0);
  const [mapInMobile, setMapInMobile] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mapWrapperClass, setMapWrapperClass] = useState('');
  const [countryIdSelected, setCountryIdSelected] = useState(null);
  const [deselectInfo, setDeselectInfo] = useState(false);

  const handleDeselectInfo = () => {
    console.log('Clicked');
    setDeselectInfo(!deselectInfo);
  };

  useEffect(() => {
    scrollToTop();
    fetchCountryNRegion();
  }, []);

  useEffect(() => {
    if (countryId) {
      const params = {
        country: countryId
      };
      fetchAgentsNVenues(params);
    }
  }, [countryId, regionId, attractionValue, eventValue, regionId]);

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
    setFilteredListedData(null);
    if (attractionValue) {
      params.attractions = attractionValue;
    }
    if (eventValue) {
      params.events = eventValue;
    }
    params.client = Constants.CLIENT;
    params.sort_type = 'name';
    params.sort_order = 'ASC';
    params.region = regionId;

    console.log(params, 'params');
    const eventSelection = venue
      ? AgentService.getVenues(params)
      : AgentService.getAgents(params);
    eventSelection
      .then(res => {
        setTimeout(() => {
          setFilteredListedData(res.data.data);
        }, 500);
        setListedData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // fetch agents or venues after submission (click on "GO" button)
  const submitCountryNRegion = params => {
    setCountryIdSelected(params.country);
    setCheckBox(Math.random());
    setCountryId(params.country);
    setRegionId(params.region);
    setAttractionValue(null);
    setEventValue(null);
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
  const showOnMapClick = (e, selectedItem) => {
    setToggle(!toggle);
    setShowOnMapData(selectedItem);
  };
  // set selected country in parent component
  const handleCountryNRegionName = (countryName, regionName) => {
    setCountryName(countryName);
    setRegionName(regionName);
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

  return (
    <section
      ref={agentWrapper}
      className={`agents-wrapper ${venue ? 'venue' : ''}`}
    >
      <CountryRegion
        countryNRegion={countryNRegion}
        onSubmit={submitCountryNRegion}
        filterCountryFile={filterCountryFile}
        handleCountryNRegionName={handleCountryNRegionName}
        handleMapClick={handleMapClick}
        handleMapFilter={handleMapFilter}
        {...props}
      />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="agent-sidebar">
            <SearchAgent
              handleDeselectInfo={handleDeselectInfo}
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
              agentWrapper={agentWrapper}
              {...props}
            />
          </div>
          <div className="agent-map-area">
            <span className="map-label-mobileonly" onClick={handleMapForMobile}>
              Find in Map
            </span>
            <GoogleMap
              deselectInfo={deselectInfo}
              toggler={toggle}
              multipleMarker={filteredListedData}
              showOnMapData={showOnMapData}
              countryName={countryName}
              regionName={regionName}
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
