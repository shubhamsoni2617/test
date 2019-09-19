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
import Small from '../../../../assets/images/small.png';
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
    lat: 1.3143394,
    lng: 103.703818
  });
  const [markerPosition, setMarkerPosition] = useState({});
  const [zoomValue, setZoomValue] = useState(10);

  const onMapClicked = props => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setMarkerPosition({});
      // handleZoom(countryName);
    }
  };

  const onMarkerClick = props => {
    setSelectedPlace(props);
    setShowingInfoWindow(true);
    // setInitialCenter({
    //   lat: Number(selectedPlace.latitude),
    //   lng: Number(selectedPlace.latitude)
    // });
    setMarkerPosition(props.position);
    handleZoomInc(countryName);
  };

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
    setMarkerPosition({});
    // handleZoom(countryName);
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
      // setInitialCenter({
      //   lat: Number(showOnMapData.latitude),
      //   lng: Number(showOnMapData.longitude)
      // });
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

        setInitialCenter({
          lat: 1.3143394,
          lng: 103.703818
        });
        setZoomValue(10);
        break;
      case 'Malaysia':
        setZoomValue(5);
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

  const handleZoomInc = country => {
    switch (country) {
      case 'Singapore':
        setZoomValue(14);
        setInitialCenter()
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

  useEffect(() => {
    if (multipleMarker && multipleMarker.length > 0) {
      let lat = Number(multipleMarker[0].latitude);
      let lng = Number(multipleMarker[0].longitude);
      setInitialCenter({ lat, lng });
      // handleZoom('Singapore');
    }
  }, [multipleMarker]);

  if (!google) {
    return <div>Loading...</div>;
  }

  // const handleImage = url => {
  //   let error = false;
  //   if (<img src={url} onError={(error = 'Image not there')} />) {
  //     console.log(error);
  //   }
  //   return error;
  // };

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
        // onDragend={centerMoved}
        // centerAroundCurrentLocation
        style={{ width: '100%', height: window.innerHeight - 100, position: 'relative' }}
        zoom={zoomValue}
        onClick={onMapClicked}
        initialCenter={initialCenter}
        gestureHandling={
          width <= Constants.MOBILE_BREAK_POINT ? 'greedy' : 'cooperative'
        }
        center={markerPosition}
      >
        {multipleMarker &&
          multipleMarker.map((elem, index) => {
            return (
              <Marker
                onMouseover={()=>{console.log(props)}}
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
