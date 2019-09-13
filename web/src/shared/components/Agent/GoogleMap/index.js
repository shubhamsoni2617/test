import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import redirect from '../../../../assets/images/redirect.svg';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import DefaultImg from '../../../../assets/images/horizontal.png';
import Image from '../../Image';
import Constants from '../../../constants';
import MapPin from '../../../../../src/assets/images/pin.svg';

const GoogleMap = (props) => {

  const { google, multipleMarker, showOnMapData, venue, mapClick, countryName, handleActiveClass } = props;

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [initialCenter, setInitialCenter] = useState({ lat: 1.290270, lng: 103.851959 });
  const [zoomValue, setZoomValue] = useState(12);
  const [width, setWidth] = useState(window.innerWidth);


  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  const onMapClicked = (props) => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };

  const onMarkerClick = (props, marker, e) => {
    if (selectedPlace.id || showOnMapData.id === undefined) {
      setSelectedPlace(props);
      setActiveMarker(marker);
      setShowingInfoWindow(true);
    } else {
      setActiveMarker(marker);
      setShowingInfoWindow(true);
      setSelectedPlace(props);
    }
  }

  const infoWindowHasClosed = () => {
    // setSelectedPlace({});
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
    setSelectedPlace({})
    handleActiveClass(0);
  }, [mapClick])

  const setMapInitialCenter = (country) => {
    handleZoom(country);
  }

  const handleZoom = (country) => {
    console.log(country)
    switch (country) {
      case "Singapore":
        // setInitialCenter({ lat: 1.290270, lng: 103.851959 });
        setZoomValue(venue ? 2 : 12);
        break;
      case "Malaysia":
        // setInitialCenter({ lat: 3.1412001, lng: 101.6865311 });
        setZoomValue(4);
        break;
      case "Indonesia":
        // setInitialCenter({ lat: -6.21462, lng: 106.84513 });
        setZoomValue(3);
        break;
      case "Thailand":
        // setInitialCenter({ lat: 13.736717, lng: 100.523186 });
        setZoomValue(5);
        break;
      case "Vietnam":
        // setInitialCenter({ lat: 14.315424, lng: 108.339537 });
        setZoomValue(5);
        break;
      case "Macau":
        // setInitialCenter({ lat: 22.210928, lng: 113.552971 });
        setZoomValue(3);
        break;
      case "Taiwan":
        // setInitialCenter({ lat: 23.6978092, lng: 120.9605179 });
        setZoomValue(5);
        break;
      case "South Korea":
        // setInitialCenter({ lat: 37.532600, lng: 127.024612 });
        setZoomValue(5);
        break;
      default:
        // setInitialCenter({ lat: 1.290270, lng: 103.851959 });
        setZoomValue(12);
    }
  }

  if (selectedPlace.id) {
    handleActiveClass(selectedPlace.id);
  } else {
    if (showOnMapData.id) {
      handleActiveClass(showOnMapData.id);
    }
  }

  useEffect(() => {
    if (multipleMarker && multipleMarker.length > 0) {
      let lat = Number(multipleMarker[0].latitude);
      let lng = Number(multipleMarker[0].longitude);
      setInitialCenter({ lat: lat, lng: lng });
      handleZoom("Singapore");
    }
  }, [multipleMarker])

  if (!google) {
    return <div>Loading...</div>;
  }

  console.log(selectedPlace.id,"ggggggggg")

  return (
    <div className="gmap" >
      {selectedPlace.id || showOnMapData.id === undefined ?
        <Map google={google}
          style={{ width: '100%', height: '600px', position: 'relative' }}
          zoom={zoomValue}
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
                name={elem.name}
                address={elem.address}
                imgPath={elem.image}
                mapPinColor={elem.map_pin_color}
                icon={{
                  url: elem.id === selectedPlace.id ? MapPin : null,
                  // fillColor: selectedPlace.mapPinColor
                }}
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
                {/* <Image className="small" src={selectedPlace.imgPath} type="Small" /> */}
                <img
                  height="50"
                  width="100"
                  src={selectedPlace.imgPath == "" || selectedPlace.imgPath === undefined || selectedPlace.imgPath === null ? DefaultImg : selectedPlace.imgPath}
                  title="Title of image"
                  alt="alt text here"
                />
              </div>
              <div className="map-name-address">
                <h5>{selectedPlace.name}</h5>
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
          initialCenter={initialCenter}
        >

          {multipleMarker && multipleMarker.map((elem, index) => {
            return (
              <Marker
                onClick={onMarkerClick}
                key={elem.id}
                position={{ lat: elem.latitude, lng: elem.longitude }}
                id={elem.id}
                name={elem.name}
                address={elem.address}
                imgPath={elem.image}
                mapPinColor={elem.map_pin_color}
                icon={{
                  url: elem.id === showOnMapData.id ? MapPin : null,
                  // fillColor: showOnMapData.mapPinColor
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
              onClose={infoWindowHasClosed}
            >
              <div className="map-info-popup">
                <div className="map-img">
                  {/* <Image className="small" src={showOnMapData.image} type="Small" /> */}
                  <img
                    height="50"
                    width="100"
                    src={showOnMapData.image === "" || showOnMapData.image === undefined || showOnMapData.image === null ? DefaultImg : showOnMapData.image}
                    title="Title of image"
                    alt="alt text here"
                  />
                </div>
                <div className="map-name-address">
                  <h5>{showOnMapData.name}</h5>
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
  apiKey: Constants.GOOGLE_MAP_API_KEY
})(GoogleMap);
