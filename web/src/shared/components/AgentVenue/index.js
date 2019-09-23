import React, { Component, useState, useEffect } from 'react';
import CountryRegion from './CountryRegion';
import AgentService from '../../../shared/services/AgentService';
import VenueService from '../../../shared/services/VenueService';
import Constants from '../../../shared/constants';
import SearchAgent from './SearchAgent';

class AgentVenue extends Component {
  constructor(props) {
    super(props);
    this.agentWrapper = React.createRef();
    this.state = {
      countryNRegion: null,
      countryId: 0,
      regionId: 0,
      deselectInfo: false,
      filteredListedData: null,
      listedData: null,
      festiveHourFile: null,
      toggle: false,
      eventSelected: null,
      eventValue: 0,
      attractionValue: 0
    };
  }

  componentDidMount() {
    this.fetchCountryRegion();
    this.fetchAgentsNVenues();
  }

  handleDeselectInfo = () => {
    this.setState({
      deselectInfo: !this.state.deselectInfo
    });
  };

  showOnMapClick = eventSelected => {
    this.setState({
      toggle: !this.state.toggle,
      eventSelected
    });
  };

  handleAttractionValue = attractionValue => {
    this.setState({
      attractionValue
    });
  };
  // set selected event in parent component
  handleEventValue = eventValue => {
    this.setState({
      eventValue
    });
  };

  fetchAgentsNVenues = () => {
    // if (attractionValue) {
    //   params.attractions = attractionValue;
    // }
    // if (eventValue) {
    //   params.events = eventValue;
    // }

    const params = {
      client: Constants.CLIENT,
      sort_type: 'name',
      sort_order: 'ASC',
      region: this.state.regionId,
      country: this.state.countryId
    };

    const eventSelection = this.props.venue
      ? VenueService.getVenues(params)
      : AgentService.getAgents(params);
    eventSelection
      .then(res => {
        this.setState({
          listedData: res.data.data
        });
        setTimeout(() => {
          this.setState({
            filteredListedData: res.data.data
          });
        }, 500);
      })
      .catch(err => {
        console.log(err);
      });

    this.festiveHourFileHandler();
  };

  festiveHourFileHandler = () => {
    if (this.state.countryNRegion) {
      const { countryNRegion, countryId } = this.state;
      let festiveHourFile = countryNRegion.filter(
        item => item.id === countryId
      )[0].festive_hours_file;
      this.setState({
        festiveHourFile
      });
    }
  };

  handleMapFilter = value => {
    const filteredListedData = this.state.listedData.filter(item => {
      return Object.keys(item).some(key => {
        if (item[key] === null || typeof item[key] === 'object') {
          return;
        }
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
    });

    this.setState({ filteredListedData });
  };

  fetchCountryRegion = () => {
    const eventSelection = this.props.venue
      ? VenueService.getVenuesCountryNRegion()
      : AgentService.getAgentsCountryNRegion();
    eventSelection
      .then(res => {
        if (res.data && res.data.data) {
          this.countryRegionHandler(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  countryRegionHandler = countryNRegion => {
    let fromIndex = countryNRegion.findIndex(el => el.name === 'Singapore');
    let element = countryNRegion[fromIndex];
    countryNRegion.splice(fromIndex, 1);
    countryNRegion.unshift(element);
    let countryId = countryNRegion[0].id;
    let countryName = countryNRegion[0].name;
    this.setState({
      countryNRegion,
      countryId,
      countryName
    });
  };

  countryIdHandler = id => {
    let countryName = this.state.countryNRegion.find(el => el.id === id).name;
    this.setState({
      countryId: id
    });
  };

  regionIdHandler = id => {
    this.setState({
      regionId: id
    });
  };

  render() {
    console.log(this.agentWrapper);
    const {
      state: { countryNRegion, countryId, countryName },
      countryIdHandler,
      regionIdHandler,
      handleDeselectInfo,
      festiveHourFile,
      showOnMapClick,
      handleAttractionValue,
      handleEventValue,
      filteredListedData,

      handleMapFilter
    } = this;
    const { venue } = this.props;
    return (
      <section
        ref={this.agentWrapper}
        className={`agents-wrapper ${venue ? 'venue' : ''}`}
      >
        {countryNRegion && (
          <CountryRegion
            countryNRegion={countryNRegion}
            countryIdHandler={countryIdHandler}
            regionIdHandler={regionIdHandler}
            countryId={countryId}
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
                agentWrapper={this.agentWrapper}
                ref={this.agentWrapper}
                {...this.props}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AgentVenue;
