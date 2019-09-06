import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import redirect from '../../../../assets/images/redirect.svg';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import DefaultImg from '../../../../assets/images/horizontal.png';
import Image from '../../Image';

const GoogleMap = (props) => {

  const { google, multipleMarker, showOnMapData, venue, zoom, mapClick, countryName } = props;

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [initialCenter, setInitialCenter] = useState({ lat: 1.290270, lng: 103.851959 });
  const [zoomValue, setZoomValue] = useState(12);


  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const onMarkerClick = (props, marker, e) => {
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
  }, [showOnMapData.id])

  useEffect(() => {
    setShowingInfoWindow(false);
    setMapInitialCenter(countryName);
  }, [mapClick])

  const setMapInitialCenter = (country) => {
    switch (country) {
      case "Singapore":
        setInitialCenter({ lat: 1.290270, lng: 103.851959 });
        setZoomValue(12);
        break;
      case "Malaysia":
        setInitialCenter({ lat: 3.140853, lng: 101.693207 });
        setZoomValue(3);
        break;
      case "Indonesia":
        setInitialCenter({ lat: -6.21462, lng: 106.84513 });
        setZoomValue(3);
        break;
      case "Thailand":
        setInitialCenter({ lat: 13.736717, lng: 100.523186 });
        setZoomValue(5);
        break;
      case "Vietnam":
        setInitialCenter({ lat: 14.315424, lng: 108.339537 });
        setZoomValue(5);
        break;
      default:
        setInitialCenter({ lat: 1.290270, lng: 103.851959 });
        setZoomValue(12);
    }
  }

  if (!google) {
    return <div>Loading...</div>;
  }
  return (
    <div className="gmap">
      {selectedPlace.id || showOnMapData.id === undefined ?
        <Map google={google}
          style={{ width: '100%', height: '600px', position: 'relative' }}
          zoom={zoomValue}
          // zoom={venue ? zoom : 11}
          onClick={onMapClicked}
          initialCenter={initialCenter}
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
                <Image className="small" src={selectedPlace.imgPath} type="Small" />
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
          zoom={zoomValue}
          // zoom={venue && showOnMapData.id ? zoom : (showOnMapData.id ? 11 : 11)}
          initialCenter={initialCenter}
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
                  url: elem.id === showOnMapData.id ? require("../../../../../src/assets/images/pin.svg") : null
                }}
              />
            )
          })
          }
          {showOnMapData.id ?
            <InfoWindow
              visible={showingInfoWindow}
              position={{
                lat: showOnMapData.latitude,
                lng: showOnMapData.longitude
              }}
            >
              <div className="map-info-popup">
                <div className="map-img">
                  <Image className="small" src={showOnMapData.image} type="Small" />
                  {/* <img
                    height="50"
                    width="100"
                    src={showOnMapData.image === "" || showOnMapData.image === undefined || showOnMapData.image === null ? DefaultImg : showOnMapData.image}
                    title="Title of image"
                    alt="alt text here"
                  /> */}
                </div>
                <div className="map-name-address">
                  <h5>{showOnMapData.id}</h5>
                  <p>{showOnMapData.address}</p>
                  <a href={`https://www.google.com/maps/dir//${showOnMapData.address}`} className="direcrtion-icn" target="_blank">
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
