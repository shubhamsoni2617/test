import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = (props) => {

  let [multipleMarker, setMultipleMarker] = useState([]);

  useEffect(() => {
    const markers = [
      {
        name: 'Mountain View High School',
        lat: 37.3605,
        lng: -122.0675,
      },
      {
        name: 'FreeStyle',
        lat: 37.3599588,
        lng: -122.0653,
      },
      {
        name: 'Alta Vista',
        lat: 37.360188,
        lng: -122.064,
      }
    ];
    multipleMarker = [...multipleMarker, ...markers];
    setMultipleMarker(multipleMarker)
  }, []);

  const renderMarkers = (map, maps) => {
    multipleMarker && multipleMarker.map((marker, index)=>{
      new maps.Marker({
        position: {lat: marker.lat,lng: marker.lng,},
        map,
        title: marker.name
      });
    })
  }

  return (
    <div style={{ height: '160vh', width: '110%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={{ lat: 37.3596049, lng: -122.0665 }}
        defaultZoom={16}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      >
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
