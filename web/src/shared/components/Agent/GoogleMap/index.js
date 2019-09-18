import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import redirect from '../../../../assets/images/redirect.svg';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import DefaultImg from '../../../../assets/images/horizontal.png';
import BluePin from '../../../../assets/images/bluepin.svg';
import Image from '../../Image';
import Constants from '../../../constants';
import { useCustomWidth } from '../../CustomHooks';
import MapStyle from '../mapStyle';

const GoogleMap = props => {
  const {
    google,
    multipleMarker,
    showOnMapData,
    venue,
    mapClick,
    countryName,
    handleActiveClass,
    mapInMobile,
    toggler,
    regionName
  } = props;

  const [width] = useCustomWidth();

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});
  const [initialCenter, setInitialCenter] = useState({
    lat: 1.29027,
    lng: 103.851959
  });
  const [zoomValue, setZoomValue] = useState(12);

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
    }
  };

  const onMarkerClick = props => {
    setSelectedPlace(props);
    setShowingInfoWindow(true);
    // setZoomValue(15);
    setInitialCenter({
      lat: Number(selectedPlace.latitude),
      lng: Number(selectedPlace.latitude)
    });
  };

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
  };

  useEffect(() => {
    if (showOnMapData.id) {
      setSelectedPlace(showOnMapData);
      setShowingInfoWindow(true);
      setInitialCenter({
        lat: Number(showOnMapData.latitude),
        lng: Number(showOnMapData.longitude)
      });
      // setZoomValue(15);
    }
  }, [showOnMapData, toggler]);

  useEffect(() => {
    setShowingInfoWindow(false);
    setMapInitialCenter(countryName);
    setSelectedPlace({});
    handleActiveClass(0);
  }, [mapClick]);

  const setMapInitialCenter = country => {
    handleZoom(country);
  };

  const handleZoom = country => {
    console.log(country, 'handlego');
    switch (country) {
      case 'Singapore':
        setZoomValue(3);
        break;
      case 'Malaysia':
        setZoomValue(19);
        break;
      case 'Indonesia':
        setZoomValue(4);
        break;
      case 'Thailand':
        setZoomValue(5);
        break;
      case 'Vietnam':
        setZoomValue(5);
        break;
      case 'Macau':
        setZoomValue(2);
        break;
      case 'Taiwan':
        setZoomValue(5);
        break;
      case 'South Korea':
        setZoomValue(5);
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

  useEffect(() => {
    if (multipleMarker && multipleMarker.length > 0) {
      let lat = Number(multipleMarker[2].latitude);
      let lng = Number(multipleMarker[2].longitude);
      console.log(lat, lng);
      setInitialCenter({ lat, lng });
      // handleZoom('Singapore');
    }
  }, [multipleMarker]);

  if (!google) {
    return <div>Loading...</div>;
  }

  const handleImage = url => {
    let error = false;
    if (<img src={url} onError={(error = 'Image not there')} />) {
      console.log(error);
    }
    return error;
  };

  const centerMoved = (mapProps, map) => {
    console.log(mapProps, map);
  };
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
        onDragend={centerMoved}
        centerAroundCurrentLocation
        style={{ width: '100%', height: window.innerHeight - 90, position: 'relative' }}
        zoom={zoomValue}
        onClick={onMapClicked}
        initialCenter={initialCenter}
        gestureHandling={
          width <= Constants.MOBILE_BREAK_POINT ? 'greedy' : 'cooperative'
        }
        // center={initialCenter}
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
                        url: BluePin,
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
              <Image src={selectedPlace.imgPath} type="Small" />
              {/* <img
                  height="50"
                  width="100"
                  src={
                    selectedPlace.imgPath == '' ||
                    selectedPlace.imgPath === undefined ||
                    selectedPlace.imgPath === null
                      ? DefaultImg
                      : selectedPlace.imgPath
                  }
                  title="Title of image"
                  alt="alt text here"
                /> */}
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
