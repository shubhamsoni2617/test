import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import BluePin from '../../../../assets/images/bluepin.svg';
import Image from '../../Image';
import Constants from '../../../constants';
import { useCustomWidth } from '../../CustomHooks';
import Small from '../../../../assets/images/small.png';
const GoogleMap = ({
  google,
  multipleMarker,
  showOnMapData,
  venue,
  mapClick,
  countryName,
  handleActiveClass,
  mapInMobile,
  toggler
}) => {
  const [width] = useCustomWidth();

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [markerPosition, setMarkerPosition] = useState({});
  const [zoomValue, setZoomValue] = useState(10);

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setMarkerPosition({});
    }
  };

  const onMarkerClick = props => {
    setSelectedPlace(props);
    setShowingInfoWindow(true);
    setMarkerPosition(props.position);
    handleZoomInc(countryName);
  };

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
    setMarkerPosition({});
  };

  useEffect(() => {
    if (showOnMapData.id) {
      setSelectedPlace(showOnMapData);
      setShowingInfoWindow(true);
      setMarkerPosition({
        lat: showOnMapData.latitude,
        lng: showOnMapData.longitude
      });
      handleZoomInc(countryName);
    }
  }, [showOnMapData, toggler]);

  useEffect(() => {
    setShowingInfoWindow(false);
    setSelectedPlace({});
    handleActiveClass(0);
    resetCountryLocation(countryName);
  }, [mapClick]);

  const resetCountryLocation = country => {
    switch (country) {
      case 'Singapore':
        setMarkerPosition({
          lat: 1.3143344,
          lng: 103.703818
        });
        setZoomValue(10);

        break;
      case 'Malaysia':
        setMarkerPosition({
          lat: 4.3842778,
          lng: 101.8236839
        });
        setZoomValue(6);
        break;
      case 'Indonesia':
        setMarkerPosition({
          lat: -4.1387633,
          lng: 122.2170101
        });
        setZoomValue(5);
        break;
      case 'Thailand':
        setMarkerPosition({
          lat: 15.9788149,
          lng: 101.5057835
        });
        setZoomValue(6);
        break;
      case 'Vietnam':
        setMarkerPosition({
          lat: 13.3104817,
          lng: 108.2777181
        });
        setZoomValue(6);
        break;
      case 'Macau':
        setMarkerPosition({
          lat: 22.1974038,
          lng: 113.5446799
        });
        setZoomValue(10);
        break;
      case 'Taiwan':
        setMarkerPosition({
          lat: 23.6103744,
          lng: 121.4909552
        });
        setZoomValue(7);
        break;
      case 'South Korea':
        setMarkerPosition({
          lat: 36.3761305,
          lng: 128.143116
        });
        setZoomValue(7);
        break;
    }
  };

  const handleZoomInc = country => {
    switch (country) {
      case 'Singapore':
        setZoomValue(14);
        break;
      case 'Malaysia':
        setZoomValue(7);
        break;
      case 'Indonesia':
        setZoomValue(6);
        break;
      case 'Thailand':
        setZoomValue(7);
        break;
      case 'Vietnam':
        setZoomValue(7);
        break;
      case 'Macau':
        setZoomValue(4);
        break;
      case 'Taiwan':
        setZoomValue(7);
        break;
      case 'South Korea':
        setZoomValue(7);
        break;
    }
  };

  if (selectedPlace.id) {
    handleActiveClass(selectedPlace.id);
  } else {
    if (showOnMapData.id) {
      handleActiveClass(showOnMapData.id);
    }
  }

  if (!google) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="gmap"
      style={{
        display:
          width <= Constants.MOBILE_BREAK_POINT
            ? mapInMobile
              ? 'block'
              : 'none'
            : 'block'
      }}
    >
      <Map
        google={google}
        style={{
          width: '100%',
          height: window.innerHeight - 100,
          position: 'relative'
        }}
        zoom={zoomValue}
        onClick={onMapClicked}
        gestureHandling={
          width <= Constants.MOBILE_BREAK_POINT ? 'greedy' : 'cooperative'
        }
        center={markerPosition}
      >
        {multipleMarker &&
          multipleMarker.map((elem, index) => {
            return (
              <Marker
                onClick={props => onMarkerClick(props)}
                key={elem.id}
                position={{
                  lat: Number(elem.latitude),
                  lng: Number(elem.longitude)
                }}
                id={elem.id}
                name={elem.name}
                address={elem.address}
                imgPath={elem.image}
                icon={
                  elem.map_pin_icon !== '' && venue
                    ? {
                        url: elem.map_pin_icon,
                        scaledSize: new google.maps.Size(45, 45)
                      }
                    : elem.map_pin_color !== '#FFFFFF' && venue
                    ? {
                        path: Constants.MAP_PATH,
                        scale: 1,
                        fillColor: elem.map_pin_color,
                        fillOpacity: 1,
                        strokeWeight: 2
                      }
                    : elem.id === selectedPlace.id
                    ? {
                        url: showingInfoWindow && BluePin,
                        scaledSize: new google.maps.Size(50, 50)
                      }
                    : null
                }
              />
            );
          })}
        <InfoWindow
          options={{
            pixelOffset: new google.maps.Size(0, -40)
          }}
          position={{
            lat: selectedPlace.id
              ? selectedPlace.latitude
                ? Number(selectedPlace.latitude)
                : Number(selectedPlace.position.lat)
              : 0,
            lng: selectedPlace.id
              ? selectedPlace.latitude
                ? Number(selectedPlace.longitude)
                : Number(selectedPlace.position.lng)
              : 0
          }}
          visible={showingInfoWindow}
          onClose={infoWindowHasClosed}
        >
          <div className="map-info-popup">
            <div className="map-img">
              {/* <Image src={selectedPlace.imgPath || Small} type="Small" /> */}
              <img
                height="50"
                width="100"
                src={selectedPlace.imgPath || Small}
                title="Title of image"
                alt="alt text here"
              />
            </div>
            <div className="map-name-address">
              <h5>{selectedPlace.name}</h5>
              <p>{selectedPlace.address}</p>
              <a
                href={`https://www.google.com/maps/dir//${selectedPlace.address}`}
                className="direcrtion-icn"
                target="_blank"
              >
                <img
                  height="20"
                  width="20"
                  src={DirectionIcon}
                  alt="direction"
                />
              </a>
            </div>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: Constants.GOOGLE_MAP_API_KEY
})(GoogleMap);
