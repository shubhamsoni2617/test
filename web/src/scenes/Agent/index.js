import React, { useState, useEffect } from 'react'
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';
import AgentService from '../../shared/services/AgentService';
import Constants from '../../shared/constants'
import grayArrow from '../../assets/images/down-arrow-grey.svg';

const Agent = (props) => {

  const { venue } = props;

  const [countryNRegion, setCountryNRegion] = useState([]);
  const [agentList, setAgentList] = useState([]);
  const [file, setCountryFile] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  useEffect(() => {
    const params = {}
    venue ? fetchVenueCountryNRegion() : fetchAgentCountryNRegion();
    venue ? fetchVenues(params) : fetchAgents(params);
  }, [])

  const fetchAgentCountryNRegion = () => {
    AgentService.getAgentsCountryNRegion()
      .then((res) => {
        console.log("agent countries", res.data)
        setCountryNRegion(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchVenueCountryNRegion = () => {
    AgentService.getVenuesCountryNRegion()
      .then((res) => {
        console.log("venue countries", res.data)
        setCountryNRegion(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const fetchAgents = (params) => {
    // debugger
    if (params.region === undefined) {
      params.region = null;
    }
    params.client = Constants.CLIENT;
    params.sort_type = "name";
    params.sort_order = "ASC";

    AgentService.getAgents(params)
      .then((res) => {
        console.log("getAgents", res);
        setAgentList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const fetchVenues = (params) => {
    // debugger
    if (params.region === undefined) {
      params.region = null;
    }
    params.client = Constants.CLIENT;
    params.sort_type = "name";
    params.sort_order = "ASC";

    AgentService.getVenues(params)
      .then((res) => {
        console.log("getVenues", res);
        setAgentList(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const submitCountryNRegion = (params) => {
    if (params.country) {
      fetchAgents(params)
    }
  }

  const filterCountryFile = (file) => {
    let filteredFile;
    countryNRegion && countryNRegion.filter((item) => {
      if (item.name === file) {
        filteredFile = item.festive_hours_file;
      }
    })
    setCountryFile(filteredFile);
  }

  const showInfo = (e, selectedItem) => {
    setSelectedItem(selectedItem);
  }

  return (

    <section className="">
      <CountryRegion
        countryNRegion={countryNRegion}
        onSubmit={submitCountryNRegion}
        filterCountryFile={filterCountryFile}
        {...props}
      />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <SearchAgent
              initialItems={agentList}
              countryFile={file}
              onClick={showInfo}
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
