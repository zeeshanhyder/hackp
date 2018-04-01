import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";

import styles from "./styles";

class Map extends Component {
  state = {
    markerSet: false,
    coords: null
  };

  renderMarker = coords => {
    this.setState({
      markerSet: true,
      coords
    });
  };

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        onPress={e => this.renderMarker(e.nativeEvent.coordinate)}
      >
        {this.state.markerSet ? (
          <Marker coordinate={this.state.coords} title="Sample Title" />
        ) : null}
      </MapView>
    );
  }
}

export default Map;
