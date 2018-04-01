import React, { Component } from "react";
import {
  View,
  StatusBar,
  ToolbarAndroid,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "react-navigation";

import Map from "../Components/Map";
import { Container } from "../Components/Container";
import { GooglePlacesInput } from "../Components/TextInput";
import colors from "../config/colors";

const API_KEY = "AIzaSyBVaWYH-NKDC9Qd3q6sTabRj8OI_ktkM-c";

class ChooseLocation extends Component {
  state = {
    searchedLocation: null
  };

  handleSelectPlace = data => {
    this.renderPlaceID(data.place_id);
  };

  renderPlaceID = placeID => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?key=${API_KEY}&placeid=${placeID}`
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.result) {
          this.setState({
            searchedLocation: {
              latitude: responseJson.result.geometry.location.lat,
              longitude: responseJson.result.geometry.location.lng
            }
          });
        }
        return null;
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <View style={{ height: 92 }}>
          <GooglePlacesInput handleSelectPlace={this.handleSelectPlace} />
        </View>
        <Map searchedLocation={this.state.searchedLocation} />
      </Container>
    );
  }
}

export default ChooseLocation;
