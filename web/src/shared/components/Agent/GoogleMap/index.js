import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import redirect from '../../../../assets/images/redirect.svg';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import DefaultImg from '../../../../assets/images/horizontal.png';
import Image from '../../Image';

const GoogleMap = (props) => {

  const { google, multipleMarker, selectedItem, venue, zoom, mapClick } = props;

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const onMarkerClick = (props, marker, e) => {
    console.log(props)
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const click = (props, marker) => {
    // setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    setSelectedPlace(props);
  }

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
  }

  useEffect(() => {
    setSelectedPlace({});
    // setActiveMarker({});
    setShowingInfoWindow(true);
  }, [selectedItem.id])

  useEffect(() => {
    setShowingInfoWindow(false);
  }, [mapClick])

  if (!google) {
    return <div>Loading...</div>;
  }

  return (
    <div className="gmap">
      {selectedPlace && selectedPlace.id ?
        <Map google={google}
          style={{ width: '100%', height: '600px', position: 'relative' }}
          zoom={venue ? zoom : 11}
          onClick={onMapClicked}
          initialCenter={{
            lat: 1.290270,
            lng: 103.851959
          }}
        >
          {multipleMarker && multipleMarker.map((elem, index) => {
            return (
              <Marker
                onClick={onMarkerClick}
                key={elem.id}
                position={{ lat: elem.latitude, lng: elem.longitude }}
                id={elem.id}
                address={elem.address}
                imgPath={elem.image}
              // icon={{
              //   url: venue ? require("../../../../../src/assets/images/pin.svg") : null
              // }}
              />
            )
          })
          }
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={infoWindowHasClosed}
          >
            <div className="map-info-popup">
              <div className="map-img">
                <Image className="small" src={selectedPlace.imgPath} type="Small"/>
                {/* <img
                  height="50"
                  width="100"
                  src={selectedPlace.imgPath == "" || selectedPlace.imgPath === undefined || selectedPlace.imgPath === null ? DefaultImg : selectedPlace.imgPath}
                  title="Title of image"
                  alt="alt text here"
                /> */}
              </div>
              <div className="map-name-address">
                <h5>{selectedPlace.id}</h5>
                <p>{selectedPlace.address}</p>
                <a href={`https://www.google.com/maps/dir//${selectedPlace.address}`} className="direcrtion-icn" target="_blank">
                  <img height='20' width='20' src={DirectionIcon} alt="direction" />
                </a>
              </div>
            </div>
          </InfoWindow>
        </Map>
        :
        <Map google={google}
          onClick={onMapClicked}
          style={{ width: '100%', height: '600px', position: 'relative' }}
          zoom={venue && selectedItem.id ? zoom : (selectedItem.id ? 11 : 11)}
          initialCenter={{
            lat: 1.290270,
            lng: 103.851959
          }}
        >
          {multipleMarker && multipleMarker.map((elem, index) => {
            return (
              <Marker
                onClick={click}
                key={elem.id}
                position={{ lat: elem.latitude, lng: elem.longitude }}
                id={elem.id}
                address={elem.address}
                imgPath={elem.image}
                icon={{
                  url: elem.id === selectedItem.id ? require("../../../../../src/assets/images/pin.svg") : null
                }}
              />
            )
          })
          }
          {selectedItem.id ?
            <InfoWindow
              visible={showingInfoWindow}
              position={{
                lat: selectedItem.latitude,
                lng: selectedItem.longitude
              }}
            >
              <div className="map-info-popup">
                <div className="map-img">
                  <Image className="small" src={selectedItem.image} type="Small"/>
                  {/* <img
                    height="50"
                    width="100"
                    src={selectedItem.image === "" || selectedItem.image === undefined || selectedItem.image === null ? DefaultImg : selectedItem.image}
                    title="Title of image"
                    alt="alt text here"
                  /> */}
                </div>
                <div className="map-name-address">
                  <h5>{selectedItem.id}</h5>
                  <p>{selectedItem.address}</p>
                  <a href={`https://www.google.com/maps/dir//${selectedItem.address}`} className="direcrtion-icn" target="_blank">
                    <img height='20' width='20' src={redirect} alt="direction" />
                  </a>
                </div>
              </div>
            </InfoWindow>
            :
            null
          }
        </Map>
      }
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(GoogleMap);
