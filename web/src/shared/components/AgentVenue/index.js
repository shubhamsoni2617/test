import React, { useRef, useState, useEffect } from 'react';
import CountryRegion from './CountryRegion';
import AgentService from '../../../shared/services/AgentService';
import VenueService from '../../../shared/services/VenueService';
import Constants from '../../../shared/constants';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';

const AgentVenue = props => {
  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState(null);
  const [countryId, setCountryId] = useState(15);
  const [regionId, setRegionId] = useState(null);
  const [eventSelected, setEventSelected] = useState(null);
  const [attractionValue, setAttractionValue] = useState(0);
  const [eventValue, setEventValue] = useState(0);
  const [listedData, setListedData] = useState(null);
  const [filteredListedData, setFilteredListedData] = useState(null);
  const [festiveHourFile, setFestiveHourFile] = useState(null);
  const [countryName, setCountryName] = useState('Singapore');
  const [mapInMobile, setMapInMobile] = useState(false);
  const [onSubmitFetch, setOnSubmitFetch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [venueId, setVenueId] = useState(null);
  const [currentRegionId, setCurrentRegionId] = useState(0);

  if (props.location.search === null || props.location.search) {
    if (!venueId) {
      setCountryId(0);
      setVenueId(props.location.search.split('=')[1]);
    }
  }
  useEffect(() => {
    fetchCountryRegion();
  }, []);

  useEffect(() => {
    fetchAgentsNVenues();
  }, [attractionValue, eventValue, countryName, regionId, onSubmitFetch]);

  useEffect(() => {
    if (
      venueId &&
      countryNRegion &&
      filteredListedData !== null &&
      filteredListedData[0] &&
      filteredListedData[0].id
    ) {
      let fromIndex = countryNRegion.findIndex(
        el => el.name === filteredListedData[0].country
      );
      console.log(countryNRegion);
      console.log(fromIndex);

      let element = countryNRegion[fromIndex];
      countryNRegion.splice(fromIndex, 1);
      countryNRegion.unshift(element);
      console.log(countryNRegion);
      setCountryNRegion(countryNRegion);
      setCountryId(countryNRegion[0].id);
    }
  }, [filteredListedData]);

  const handleEventSelected = eventSelected => {
    setEventSelected(eventSelected);
  };

  const handleAttractionValue = attractionValue => {
    setAttractionValue(attractionValue);
  };

  const handleEventValue = eventValue => {
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
    setCurrentRegionId(id);
  };

  const handleMapForMobile = () => {
    if (!mapInMobile) {
      setMapInMobile(true);
    } else {
      setMapInMobile(false);
    }
  };

  const onSubmit = () => {
    let countryName = countryNRegion.find(el => el.id === countryId).name;
    handleEventValue(0);
    handleAttractionValue(0);
    setSearchText('');
    setCountryName(countryName);
    setRegionId(currentRegionId);
    setOnSubmitFetch(!onSubmitFetch);
    festiveHourFileHandler();
  };
  return (
    <section className={`agents-wrapper ${venue ? 'venue' : ''}`}>
      {countryNRegion && filteredListedData && (
        <CountryRegion
          countryNRegion={countryNRegion}
          countryIdHandler={countryIdHandler}
          regionIdHandler={regionIdHandler}
          countryId={countryId}
          onSubmit={onSubmit}
        />
      )}
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
              eventValue={eventValue}
              searchText={searchText}
              {...props}
            />
          </div>
          <div className="agent-map-area">
            <span className="map-label-mobileonly" onClick={handleMapForMobile}>
              Find in Map
            </span>
            <GoogleMap
              multipleMarker={filteredListedData}
              showOnMapData={eventSelected}
              countryName={countryName}
              mapClick={filteredListedData}
              mapInMobile={mapInMobile}
              {...props}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentVenue;
