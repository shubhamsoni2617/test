import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const GoogleMap = (props) => {

  const { google, multipleMarker } = props;

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

  const infoWindowHasClosed = () => {
    setShowingInfoWindow(false);
  }

  if (!google) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Map google={google}
        style={{ width: '100%', height: '100%' }}
        zoom={13}
        onClick={onMapClicked}
        initialCenter={{
          lat: 1.257681,
          lng: 103.82222290000004
        }}
      >
        {
          multipleMarker && multipleMarker.map((elem, index) => {
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
          </div>
        </InfoWindow>
        <div>
        </div>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(GoogleMap);
