import React, { useState, useEffect } from 'react';
import CountryRegion from './CountryRegion';
import AgentService from '../../../shared/services/AgentService';
import VenueService from '../../../shared/services/VenueService';
import Constants from '../../../shared/constants';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';
import Utilities from '../../utilities';
import './style.scss';
import MetaData from '../MetaData';

const AgentVenue = props => {
  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState(null);
  const [countryId, setCountryId] = useState(15);
  const [regionId, setRegionId] = useState(0);
  const [eventSelected, setEventSelected] = useState(null);
  const [attractionValue, setAttractionValue] = useState(0);
  const [eventValue, setEventValue] = useState(0);
  const [listedData, setListedData] = useState(null);
  const [filteredListedData, setFilteredListedData] = useState(null);
  const [festiveHourFile, setFestiveHourFile] = useState(null);
  const [countryName, setCountryName] = useState('Singapore');
  const [mapInMobile, setMapInMobile] = useState(false);
  const [onSubmitFetch, setOnSubmitFetch] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [venueId, setVenueId] = useState(null);
  const [countryNRegionSorted, setCountryNRegionSorted] = useState(null);
  const [showOnMapClicked, setShowOnMapClicked] = useState(0);
  const [idForScroll, setIdForScroll] = useState('');
  const [toggleFindInMap, setToggleFindInMap] = useState(false);

  if (props.location.search === null || props.location.search) {
    if (!venueId) {
      setCountryId(0);
      setVenueId(props.location.search.split('=')[1]);
    }
  }
  useEffect(() => {
    fetchCountryRegion();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (Utilities.mobileAndTabletcheck()) {
      setIdForScroll('mapClicked');
    }
  }, []);

  useEffect(() => {
    fetchAgentsNVenues();
  }, [attractionValue, eventValue, onSubmitFetch]);

  useEffect(() => {
    if (
      venueId &&
      countryNRegion &&
      filteredListedData !== null &&
      filteredListedData[0] &&
      filteredListedData[0].id
    ) {
      let countryIndex = countryNRegion.findIndex(
        el => el.name === filteredListedData[0].country
      );
      if (countryIndex !== -1) {
        let specificCountry = countryNRegion[countryIndex];

        if (specificCountry.regions.length) {
          let regionIndex = specificCountry.regions.findIndex(
            el => el.name === filteredListedData[0].region
          );
          let specificRegion = specificCountry.regions[regionIndex];
          setRegionId(specificRegion.id);
          specificCountry.regions.splice(regionIndex, 1);
          specificCountry.regions.unshift(specificRegion);
        }
        countryNRegion.splice(countryIndex, 1);
        countryNRegion.unshift(specificCountry);
        setCountryNRegionSorted(countryNRegion);
        setCountryId(countryNRegion[0].id);
        setCountryName(countryNRegion[0].name);
        handleEventSelected(filteredListedData[0]);
      }
    }
  }, [filteredListedData]);

  const handleEventSelected = eventSelected => {
    handleMapForMobile(true);
    setShowOnMapClicked(showOnMapClicked + 1);
    setEventSelected(eventSelected);
  };

  const handleAttractionValue = attractionValue => {
    setVenueId(null);
    if (venue) props.history.push('/venues');
    setAttractionValue(attractionValue);
  };

  const handleEventValue = eventValue => {
    setVenueId(null);
    if (venue) props.history.push('/venues');

    setEventValue(eventValue);
  };

  const fetchAgentsNVenues = () => {
    setFilteredListedData(null);
    const params = {
      client: Constants.CLIENT,
      sort_type: 'name',
      sort_order: 'ASC',
      region: regionId,
      country: countryId,
      attractions: attractionValue,
      events: eventValue
    };
    if (venueId) {
      params.id = venueId;
    }

    const eventSelection = venue
      ? VenueService.getVenues(params)
      : AgentService.getAgents(params);
    eventSelection
      .then(res => {
        setListedData(res.data.data);

        setTimeout(() => {
          setFilteredListedData(res.data.data);
        }, 500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const festiveHourFileHandler = () => {
    let festiveHourFile = countryNRegion.find(el => el.id === countryId)
      .festive_hours_file;
    setFestiveHourFile(festiveHourFile);
  };

  const handleMapFilter = e => {
    setSearchText(e.target.value);
    const filteredListedData = listedData.filter(item => {
      return Object.keys(item).some(key => {
        if (item[key] === null || typeof item[key] === 'object') {
          return;
        }
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
    });

    setFilteredListedData(filteredListedData);
  };

  const fetchCountryRegion = () => {
    const eventSelection = venue
      ? VenueService.getVenuesCountryNRegion()
      : AgentService.getAgentsCountryNRegion();
    eventSelection
      .then(res => {
        countryRegionHandler(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const countryRegionHandler = countryRegion => {
    let fromIndex = countryRegion.findIndex(el => el.name === 'Singapore');
    let element = countryRegion[fromIndex];
    element.regions.unshift({ id: '0', name: 'All' });
    countryRegion.splice(fromIndex, 1);
    countryRegion.unshift(element);
    setCountryNRegion(countryRegion);
    setCountryId(countryRegion[0].id);
    setFestiveHourFile(countryRegion[0].festive_hours_file);
  };

  const countryIdHandler = id => {
    setCountryId(id);
  };

  const regionIdHandler = id => {
    setRegionId(id);
  };

  const handleMapForMobile = toggler => {
    setMapInMobile(toggler);
  };

  const toggleFindInMapHandler = () => {
    setToggleFindInMap(true);
  };

  const onSubmit = () => {
    setVenueId(null);
    let countryName = countryNRegion.find(el => el.id === countryId).name;
    handleEventValue(0);
    handleAttractionValue(0);
    setSearchText('');
    setCountryNRegionSorted(null);
    setCountryName(countryName);
    setOnSubmitFetch(onSubmitFetch + 1);
    if (venue) props.history.push('/venues');
    festiveHourFileHandler();
  };
  return (
    <section className={`agents-wrapper ${venue ? 'venue' : ''}`}>
      <MetaData location={props.location} data={props.staticContext} />
      <CountryRegion
        countryNRegion={venueId ? countryNRegionSorted : countryNRegion}
        countryIdHandler={countryIdHandler}
        regionIdHandler={regionIdHandler}
        countryId={countryId}
        onSubmit={onSubmit}
        venue={venue}
      />

      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="agent-sidebar">
            <SearchAgent
              initialItems={filteredListedData}
              countryFileUrl={festiveHourFile}
              showOnMapClick={handleEventSelected}
              countryName={countryName}
              handleAttractionValue={handleAttractionValue}
              handleEventValue={handleEventValue}
              handleMapFilter={handleMapFilter}
              attractionValue={attractionValue}
              toggleFindInMapHandler={toggleFindInMapHandler}
              eventValue={eventValue}
              searchText={searchText}
              {...props}
            />
          </div>
          <div className="agent-map-area">
            <span
              id={idForScroll}
              className={`map-label-mobileonly ${
                toggleFindInMap ? `active` : ``
              }`}
              onClick={() => {
                handleMapForMobile(!mapInMobile);
                setToggleFindInMap(!toggleFindInMap);
              }}
            >
              Find in Map
            </span>
            <GoogleMap
              style={{ position: 'relative', width: '100%', height: '100%' }}
              multipleMarker={filteredListedData}
              showOnMapData={eventSelected}
              countryName={countryName}
              mapClick={filteredListedData}
              mapInMobile={mapInMobile}
              showOnMapClicked={showOnMapClicked}
              {...props}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentVenue;
