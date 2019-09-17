import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import redirect from '../../../../assets/images/redirect.svg';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import DefaultImg from '../../../../assets/images/horizontal.png';
import svg from '../../../../assets/images/website.svg';
import Image from '../../Image';
import Constants from '../../../constants';
import { useCustomWidth } from '../../CustomHooks';

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
    toggler
  } = props;

  const [width] = useCustomWidth();

  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [initialCenter, setInitialCenter] = useState({
    lat: 1.29027,
    lng: 103.851959
  });
  const [zoomValue, setZoomValue] = useState(12);

  const onMapClicked = props => {
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
      setZoomValue(15);
      setInitialCenter({
        lat: Number(selectedPlace.latitude),
        lng: Number(selectedPlace.latitude)
      });
    } else {
      setActiveMarker(marker);
      setShowingInfoWindow(true);
      setSelectedPlace(props);
      setZoomValue(15);
      setInitialCenter({
        lat: Number(showOnMapData.latitude),
        lng: Number(showOnMapData.latitude)
      });
    }
  };

  const infoWindowHasClosed = () => {
    // setSelectedPlace({});
    setShowingInfoWindow(false);
  };

  useEffect(() => {
    setSelectedPlace({});
    // setActiveMarker({});
    setShowingInfoWindow(true);
    setInitialCenter({
      lat: Number(showOnMapData.latitude),
      lng: Number(showOnMapData.latitude)
    });
    setZoomValue(15);
  }, [showOnMapData.id, toggler]);

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
    console.log(country,"handlego")
    switch (country) {
      case 'Singapore':
        setZoomValue(12);
        break;
      case 'Malaysia':
        setZoomValue(4);
        break;
      case 'Indonesia':
        setZoomValue(1);
        break;
      case 'Thailand':
        setZoomValue(5);
        break;
      case 'Vietnam':
        setZoomValue(5);
        break;
      case 'Macau':
        setZoomValue(3);
        break;
      case 'Taiwan':
        setZoomValue(5);
        break;
      case 'South Korea':
        setZoomValue(5);
        break;
      default:
        setZoomValue(12);
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
      let lat = Number(multipleMarker[0].latitude);
      let lng = Number(multipleMarker[0].longitude);
      setInitialCenter({ lat: lat, lng: lng });
      handleZoom('Singapore');
    }
  }, [multipleMarker]);

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
      {selectedPlace.id || showOnMapData.id === undefined ? (
        <Map
          google={google}
          style={{ width: '100%', height: '600px', position: 'relative' }}
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
                  onClick={onMarkerClick}
                  key={elem.id}
                  position={{
                    lat: Number(elem.latitude),
                    lng: Number(elem.longitude)
                  }}
                  id={elem.id}
                  name={elem.name}
                  address={elem.address}
                  imgPath={elem.image}
                  // mapPinColor={elem.map_pin_color}
                  // mapPinIcon={elem.map_pin_icon}
                  icon={
                    elem.map_pin_icon !== '' && venue
                      ? {
                          url: elem.map_pin_icon,
                          scaledSize: new google.maps.Size(50, 50)
                        }
                      : elem.id === selectedPlace.id
                      ? {
                          path: Constants.MAP_PATH,
                          scale: 1.5,
                          fillColor: 'blue',
                          fillOpacity: 1,
                          strokeWeight: 2
                        }
                      : null
                  }
                />
              );
            })}
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
                  src={
                    selectedPlace.imgPath == '' ||
                    selectedPlace.imgPath === undefined ||
                    selectedPlace.imgPath === null
                      ? DefaultImg
                      : selectedPlace.imgPath
                  }
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
      ) : (
        <Map
          google={google}
          onClick={onMapClicked}
          style={{ width: '100%', height: '600px', position: 'relative' }}
          zoom={zoomValue}
          initialCenter={initialCenter}
          gestureHandling={'greedy'}
          // center={initialCenter}
        >
          {multipleMarker &&
            multipleMarker.map((elem, index) => {
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
                  icon={
                    elem.map_pin_icon !== '' && venue
                      ? {
                          url: elem.map_pin_icon,
                          scaledSize: new google.maps.Size(50, 50)
                        }
                      : elem.id === showOnMapData.id
                      ? {
                          path: Constants.MAP_PATH,
                          scale: 0.8,
                          fillColor: 'blue',
                          fillOpacity: 1,
                          strokeWeight: 2
                        }
                      : null
                  }
                />
              );
            })}
          {showOnMapData.id ? (
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
                    src={
                      showOnMapData.image === '' ||
                      showOnMapData.image === undefined ||
                      showOnMapData.image === null
                        ? DefaultImg
                        : showOnMapData.image
                    }
                    title="Title of image"
                    alt="alt text here"
                  />
                </div>
                <div className="map-name-address">
                  <h5>{showOnMapData.name}</h5>
                  <p>{showOnMapData.address}</p>
                  <a
                    href={`https://www.google.com/maps/dir//${showOnMapData.address}`}
                    className="direcrtion-icn"
                    target="_blank"
                  >
                    <img
                      height="20"
                      width="20"
                      src={redirect}
                      alt="direction"
                    />
                  </a>
                </div>
              </div>
            </InfoWindow>
          ) : null}
        </Map>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: Constants.GOOGLE_MAP_API_KEY
})(GoogleMap);
