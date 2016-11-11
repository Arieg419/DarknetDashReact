import React from 'react';

import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';



export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{ height: '100%' }} /> }
      googleMapElement={ 
      	<GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}>
      		{props.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })} 
      	</GoogleMap>
      }

     />
  );
}