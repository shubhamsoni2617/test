import React, { useState, useEffect } from 'react'
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';
import AgentService from '../../shared/services/AgentService';
import Constants from '../../shared/constants'

const Agent = (props) => {
  let filterAgent = [
    {
      id: "112 Katong",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1",
      position: { lat: 37.759703, lng: -122.428093 }
    },
    {
      id: "114 Somerset",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1",
      position: { lat: 37.778519, lng: -122.405640 }
    },
    {
      id: "11 Anchorpoint",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1",
      position: { lat: 37.762391, lng: -122.439192 }
    },
    {
      id: "12 Capitol",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1",
      position: { lat: 37.782394, lng: -122.419190 }
    },
    {
      id: "2 ChangiAirpots",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level1",
      position: { lat: 37.702391, lng: -122.469192 }
    },
    {
      id: "ChinaPoint Town",
      shownOnMap: "Shown on Map",
      address: "112 East Coast Road Singapore 428802 Coincierge Counter, Level12",
      position: { lat: 37.792391, lng: -122.416192 }
    },
  ];

  const [countryNRegion, setCountryNRegion] = useState([]);
  const [agentList, setAgentList] = useState([]);



  useEffect(() => {
    const params = {}
    fetchAgentCountryNRegion();
    fetchAgents(params);
  }, [])

  const fetchAgentCountryNRegion = () => {
    AgentService.getAgentsCountryNRegion()
      .then((res) => {
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
        console.log(res);
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

  return (
    <section className="">
      <CountryRegion countryNRegion={countryNRegion} onSubmit={submitCountryNRegion} />
      <div className="container-fluid row agent-list">
        <div className="col-lg-4">
          <SearchAgent initialItems={agentList} />
        </div>
        <div className="col-lg-8">
          <GoogleMap
            multipleMarker={agentList}
          />
        </div>
      </div>
    </section>
  );
}
export default Agent;
