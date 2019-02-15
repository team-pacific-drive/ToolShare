import React from "react"
import PropTypes from "prop-types"

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMaps extends React.Component {
  render () {
    return (
      <div>
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
// <div>
// <h1>{this.state.selectedPlace.name}</h1>
// </div>

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY")
})(MapContainer)
