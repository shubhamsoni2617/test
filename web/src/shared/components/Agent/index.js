import React, { useState, useEffect } from 'react'
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';
import AgentService from '../../../shared/services/AgentService';
import Constants from '../../../shared/constants'
import grayArrow from '../../../assets/images/down-arrow-grey.svg';

const Agent = (props) => {

  //Decide which page should be mount (default-agent page)
  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [file, setCountryFile] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [countryName, setCountryName] = useState('');
  const [attractionValue, setAttractionValue] = useState(undefined);
  const [eventValue, setEventValue] = useState(undefined);

  useEffect(() => {
    const params = {
      client: Constants.CLIENT,
      country: "15",
      sort_type: "name",
      sort_order: "ASC"
    };
    scrollToTop();
    fetchCountryNRegion();
    fetchAgentsNVenues(params);
  }, []);

  const scrollToTop=()=>{
    window.scrollTo(0,0);
  }
  //Fetch countries & their respective regions
  const fetchCountryNRegion = () => {
    const eventSelection = venue ? AgentService.getVenuesCountryNRegion() : AgentService.getAgentsCountryNRegion();
    eventSelection
      .then((res) => {
        setCountryNRegion(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //Fetch agents or venues based on selection event
  const fetchAgentsNVenues = (params) => {
    if (params.region === undefined) {
      params.region = null;
    }
    if (attractionValue) {
      params.attractions = attractionValue
    }
    if (eventValue) {
      params.events = eventValue
    }
    params.client = Constants.CLIENT;
    params.sort_type = "name";
    params.sort_order = "ASC";

    const eventSelection = venue ? AgentService.getVenues(params) : AgentService.getAgents(params);
    eventSelection
      .then((res) => {
        setAgentList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // fetch agents or venues after submission
  const submitCountryNRegion = (params) => {
    if (params.country) {
      fetchAgentsNVenues(params);
    }
  }
  // filter file for selected country
  const filterCountryFile = (file) => {
    let filteredFile;
    countryNRegion && countryNRegion.filter((item) => {
      if (item.name === file) {
        filteredFile = item.festive_hours_file;
      }
    })
    setCountryFile(filteredFile);
  }

  // set selected list data in parent component
  const showInfo = (e, selectedItem,activePopUpRef) => {
    if(activePopUpRef.current){
      activePopUpRef.current.classList.remove("active");
    }
    setSelectedItem(selectedItem);
  }
  // set selected country in parent component
  const handleCountryName = (country) => {
    setCountryName(country);
  }
  // set selected attracion in parent component
  const handleAttractionValue = (value) => {
    setAttractionValue(value)
  }
  // set selected event in parent component
  const handleEventValue = (value) => {
    setEventValue(value)
  }

  return (

    <section className="">
      <CountryRegion
        countryNRegion={countryNRegion}
        onSubmit={submitCountryNRegion}
        filterCountryFile={filterCountryFile}
        handleCountryName={handleCountryName}
        {...props}
      />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <SearchAgent
              initialItems={agentList}
              countryFile={file}
              onClick={showInfo}
              countryName={countryName}
              handleAttractionValue={handleAttractionValue}
              handleEventValue={handleEventValue}
              {...props}
            />
          </div>
          <div className="col-lg-8">
            {/* <a href="/" className="find-map-mob">Find in map <img src={grayArrow} alt="Arrow"/></a> */}
            <GoogleMap
              multipleMarker={agentList}
              selectedItem={selectedItem}
              {...props}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Agent;
