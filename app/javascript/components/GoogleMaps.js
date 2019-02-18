import React from "react"
import PropTypes from "prop-types"

import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

Geocode.setApiKey("AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY");
Geocode.enableDebug();

class GoogleMaps extends React.Component {
  state = {
    latitude: '',
    longitude: '',
    city: "Los Angeles, CA",
    mapPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng
    },
    markerPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng
    }
  }

  static defaultProps = {
    center: {
      lat: 32.740368,
      lng: -117.127306
    },
    zoom: 14
  };

//Put this Geocode in function with arguement inside ToolDetail, then put turn into prop and pass down zipcode--later cross st--and put that func into compDidMnt
  componentDidMount() {
    Geocode.fromAddress('3358 31st San Diego, CA')
    .then(response => {
      const { lat, lng } = response.results[0].geometry.location
      console.log( 'lat & lng', lat, lng );
      this.setState({
        latitude: lat,
        longitude: lng,
      })
    },
    error => {
      console.error( error );
    })
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '40vh' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.state.latitude}
            lng={this.state.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMaps
