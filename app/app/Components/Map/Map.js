import React, { Component } from "react";
import PropTypes from "prop-types";
import MapView, { Marker } from "react-native-maps";

import styles from "./styles";

class Map extends Component {
  render() {
    const coordinates = { longitude: 40.3439888, latitude: -74.6514481 };
    if (this.props.searchedLocation) {
      coordinates.longitude = this.props.searchedLocation.longitude;
      coordinates.latitude = this.props.searchedLocation.latitude;
    }

    return (
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        // onPress={e => {
        //   this.renderMarker(e.nativeEvent.coordinate);
        // }}
      >
        {this.props.searchedLocation ? (
          <Marker coordinate={coordinates} />
        ) : null}
      </MapView>
    );
  }
}

Map.propTypes = {
  searchedLocation: PropTypes.any
};

export default Map;
