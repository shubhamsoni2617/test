import React, { useState } from 'react'
import './style.scss';
import CountryRegion from './CountryRegion';
import SearchAgent from './SearchAgent';
import GoogleMap from './GoogleMap';

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

  const [popUpDetail, setPopUpDetail] = useState('');

  const removePopUpDetail = (popUp) => {
    setPopUpDetail(popUp);
  }

  return (
    <section className="">
      <CountryRegion />
      <div className="container-fluid row">
        <div className="col-lg-4">
          <SearchAgent initialItems={filterAgent} removePopUpDetail={removePopUpDetail} />
        </div>
        <div className="col-lg-8">
          <GoogleMap multipleMarker={filterAgent} popUpDetail={popUpDetail} />
        </div>
      </div>
    </section>
  );
}
export default Agent;
