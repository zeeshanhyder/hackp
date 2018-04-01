import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Constants, Location, Permissions } from "expo";

import styles from "./styles";

// https://docs.expo.io/versions/latest/sdk/location.html
class LocationItem extends Component {
  state = {
    location: null,
    errorMessage: null
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      });
    } else {
      this.getLocationAsync();
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    const location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = "Waiting..";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify({
        longitude: this.state.location.coords.longitude,
        latitude: this.state.location.coords.latitude
      });
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>
    );
  }
}

export default LocationItem;
