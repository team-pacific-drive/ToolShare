import React from "react"
import PropTypes from "prop-types"

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

Geocode.setApiKey("AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY");
Geocode.enableDebug();

class GoogleMaps extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    latitude: '',
    longitude: '',
    address: this.props.crossStreet,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

//Put this Geocode in function with arguement inside ToolDetail, then put turn into prop and pass down zipcode--later cross st--and put that func into compDidMnt
  componentDidMount() {
    let crossStreet = this.props.crossStreet
    let replaceWithAnd = crossStreet.includes("\u0026") ? crossStreet.replace("\u0026", "and") : crossStreet
    console.log('replace', replaceWithAnd+' '+this.props.city+' '+this.props.state);
    Geocode.fromAddress(replaceWithAnd+' '+this.props.city+' '+this.props.state)
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

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    console.log('add', this.props.crossStreet, this.props.city, this.props.state);
    if(this.props.crossStreet){
      console.log('test', this.state.address);
    }
    return (
      <div>
        {this.state.latitude &&
          <Map google={this.props.google}
               style={{height: '220px', width: '280px'}}
               onClick={this.onMapClicked}
               initialCenter={{
                 lat: this.state.latitude,
                 lng:  this.state.longitude
               }}>
            <Marker onClick={this.onMarkerClick}
                    name={this.props.title} />

            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h2>{this.state.selectedPlace.name}</h2>
                </div>
            </InfoWindow>
          </Map>
        }
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY")
})(GoogleMaps)
//
// render() {
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '40vh', width: '40vh' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDJ61AO_zemRdmN--SzsfliDbDzXsBJMeY"}}
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={this.state.latitude}
//           lng={this.state.longitude}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   )
// }
// }
