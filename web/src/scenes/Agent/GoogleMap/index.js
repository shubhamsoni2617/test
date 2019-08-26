import React, { useState, useEffect } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import DirectionIcon from '../../../../src/assets/images/direction.png';

const GoogleMap = (props) => {
  const { google, multipleMarker, selectedItem } = props;

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
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
    // const params = {
    //   latitude: props.position.lat,
    //   longitude: props.position.lng
    // }
    // markerClick(params);
  }

  const click = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
  }

  useEffect(() => {
    setSelectedPlace({});
    // setActiveMarker({})
  }, [selectedItem.id])

  if (!google) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {selectedPlace && selectedPlace.id ?
        <Map google={google}
          style={{ width: '100%', height: '100%' }}
          zoom={8}
          onClick={onMapClicked}
          initialCenter={{
            lat: 1.257681,
            lng: 103.82222290000004
          }}
        >

          {multipleMarker && multipleMarker.map((elem, index) => {
            return (
              <Marker
                key={elem.id}
                onClick={onMarkerClick}
                position={{ lat: elem.latitude, lng: elem.longitude }}
                id={elem.id}
                address={elem.address}
                imgPath={elem.image}
              />
            )
          })
          }

          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
            onClose={infoWindowHasClosed}
          >
            <div className="row">
              <div className="col-lg-3">
                <img height="50" width="100" src={selectedPlace.imgPath} title="Title of image" alt="alt text here" />
              </div>
              <div className="col-lg-6">
                <div>{selectedPlace.id}</div>
                <div>{selectedPlace.address}</div>
              </div>
              <div className="text-right">
                <a href={`https://www.google.com/maps/dir//${selectedPlace.address}`} target="_blank">
                  <img height='20' width='20' src={DirectionIcon} alt="direction" />
                </a>
              </div>
            </div>
          </InfoWindow>
          <div>
          </div>
        </Map>

        :

        <Map google={google}
          style={{ width: '100%', height: '100%' }}
          zoom={selectedItem.id ? 8 : 8}
          initialCenter={{
            lat: 1.257681,
            lng: 103.82222290000004
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
                  url: elem.id === selectedItem.id ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" : null
                }}
              />
            )
          })
          }
          {selectedItem.id ?
            <InfoWindow
              visible={true}
              position={{
                lat: selectedItem.latitude,
                lng: selectedItem.longitude
              }}
            >
              <div className="row">
                <div className="col-lg-3">
                  <img height="50" width="100" src={selectedItem.imgPath} title="Title of image" alt="alt text here" />
                </div>
                <div className="col-lg-6">
                  <div>{selectedItem.id}</div>
                  <div>{selectedItem.address}</div>
                </div>
                <div className="text-right">
                  <a href={`https://www.google.com/maps/dir//${selectedItem.address}`} target="_blank">
                    <img height='20' width='20' src={DirectionIcon} alt="direction" />
                  </a>
                </div>
              </div>
            </InfoWindow>
            :
            null
          }
          <div>
          </div>
        </Map>
      }
    </div>
  );
};

export default GoogleApiWrapper({
  // apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(GoogleMap);
