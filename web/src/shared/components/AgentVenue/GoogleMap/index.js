import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './style.scss';
import DirectionIcon from '../../../../assets/images/direction.png';
import BluePin from '../../../../assets/images/bluepin.svg';
import Constants from '../../../constants';
import { useCustomWidth } from '../../CustomHooks';
import Small from '../../../../assets/images/small.png';
import Image from '../../Image';
import CountryConstantZoom from './CountryConstantZoom';
import EventConstantZoom from './EventConstantZoom';
import useStickyPanel from '../../../hooks/useStickyPanel';
import Utilities from '../../../utilities';

const InfowindowData = ({ selectedPlace, DirectionIcon }) => (
  <div className="map-info-popup">
    <div className="map-img">
      <div id="iwc" />
    </div>
    <div className="map-name-address">
      <h5>{selectedPlace.name}</h5>
      <p>{selectedPlace.address}</p>
      <a
        href={`https://www.google.com/maps/dir//${selectedPlace.address}`}
        className="direcrtion-icn"
        target="_blank"
      >
        <img height="20" width="20" src={DirectionIcon} alt="direction" />
      </a>
    </div>
  </div>
);

const GoogleMap = ({
  google,
  multipleMarker,
  showOnMapData,
  venue,
  mapClick,
  countryName,
  mapInMobile,
  showOnMapClicked
}) => {
  const [width] = useCustomWidth();
  const [scrollContainerRef, styleObj] = useStickyPanel({
    sticky: { top: 63 },
    pixelBuffer: 63,
    bottom: 33
  });
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
    EventConstantZoom(countryName, setZoomValue);
  };

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
    setMarkerPosition({});
  };

  useEffect(() => {
    if (showOnMapData && showOnMapData.id) {
      setSelectedPlace(showOnMapData);
      setShowingInfoWindow(true);
      setMarkerPosition({
        lat: showOnMapData.latitude,
        lng: showOnMapData.longitude
      });
      EventConstantZoom(countryName, setZoomValue);
    }
  }, [showOnMapData, showOnMapClicked]);

  useEffect(() => {
    setShowingInfoWindow(false);
    setSelectedPlace({});
    CountryConstantZoom(countryName, setMarkerPosition, setZoomValue);
  }, [mapClick]);

  const onInfoWindowOpen = () => {
    ReactDOM.render(
      React.Children.only(
        <Image
          src={selectedPlace.image || selectedPlace.imgPath || Small}
          type="Small"
        />
      ),
      document.getElementById('iwc')
    );
  };

  if (!google) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '100%' }}
      ref={scrollContainerRef}
    >
      <div style={styleObj}>
        <div
          className="gmap"
          style={{
            display: !Utilities.mobileAndTabletcheck()
              ? 'block'
              : Utilities.mobileAndTabletcheck() && mapInMobile
              ? 'block'
              : 'none'
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
              Utilities.mobileAndTabletcheck() ? 'greedy' : 'cooperative'
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
              onOpen={() => {
                onInfoWindowOpen();
              }}
            >
              <InfowindowData
                selectedPlace={selectedPlace}
                DirectionIcon={DirectionIcon}
              />
            </InfoWindow>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: Constants.GOOGLE_MAP_API_KEY
})(GoogleMap);
