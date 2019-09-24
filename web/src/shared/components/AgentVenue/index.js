import React, { useRef, useState, useEffect } from 'react';
import CountryRegion from './CountryRegion';
import AgentService from '../../../shared/services/AgentService';
import VenueService from '../../../shared/services/VenueService';
import Constants from '../../../shared/constants';
import SearchAgent from './SearchAgent';

const AgentVenue = props => {
  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState(null);
  const [countryId, setCountryId] = useState(15);
  const [regionId, setRegionId] = useState(null);
  const [deselectInfo, setDeselectInfo] = useState(false);
  const [eventSelected, setEventSelected] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [attractionValue, setAttractionValue] = useState(0);
  const [eventValue, setEventValue] = useState(0);
  const [listedData, setListedData] = useState(null);
  const [filteredListedData, setFilteredListedData] = useState(null);
  const [festiveHourFile, setFestiveHourFile] = useState(null);
  const [countryName, setCountryName] = useState(null);
  let currentRegionId = 0;
  useEffect(() => {
    fetchCountryRegion();
  }, []);

  useEffect(() => {
    fetchAgentsNVenues();
  }, [attractionValue, eventValue, countryName, regionId]);

  const handleDeselectInfo = () => {
    setDeselectInfo(!deselectInfo);
  };

  const showOnMapClick = eventSelected => {
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

  const handleMapFilter = value => {
    const filteredListedData = listedData.filter(item => {
      return Object.keys(item).some(key => {
        if (item[key] === null || typeof item[key] === 'object') {
          return;
        }
        return item.name.toLowerCase().includes(value.toLowerCase());
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
    // setCountryName(countryRegion[0].name);

    setFestiveHourFile(countryRegion[0].festive_hours_file);
  };

  const countryIdHandler = id => {
    setCountryId(id);
    // setCountryName(countryName);
  };

  const regionIdHandler = id => {
    currentRegionId = id;
  };

  const onSubmit = () => {
    let countryName = countryNRegion.find(el => el.id === countryId).name;
    setCountryName(countryName);
    setRegionId(regionId);
    festiveHourFileHandler();
  };
  return (
    <section className={`agents-wrapper ${venue ? 'venue' : ''}`}>
      {countryNRegion && (
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
              handleDeselectInfo={handleDeselectInfo}
              initialItems={filteredListedData}
              countryFileUrl={festiveHourFile}
              showOnMapClick={showOnMapClick}
              countryName={countryName}
              handleAttractionValue={handleAttractionValue}
              handleEventValue={handleEventValue}
              checkBox={countryId}
              handleMapFilter={handleMapFilter}
              mapClick={countryId}
              //   agentWrapper={agentWrapper}
              {...props}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentVenue;
