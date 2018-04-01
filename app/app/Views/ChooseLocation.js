import React, { Component } from "react";
import PropTypes from "prop-types";
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
import { firebaseConnect } from 'react-redux-firebase'
import { DefaultButton } from "../Components/Button";

const API_KEY = "AIzaSyBVaWYH-NKDC9Qd3q6sTabRj8OI_ktkM-c";

class ChooseLocation extends Component {
  

  constructor(props){
    super(props)

    this.state = {
      searchedLocation: null,
      prevKey : null,
      paramData : null
    };
  
  }

  handleSelectPlace = data => {
    this.renderPlaceID(data.place_id);
  };

  handleSelectLocation = () => {
    this.props.firebase.set('selLoc',JSON.stringify(this.state.searchedLocation))
    this.props.navigation.goBack(null)
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
              name: `${responseJson.result.name}, ${responseJson.result.formatted_address}`,
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
        <DefaultButton text="Select" onClick={this.handleSelectLocation} />
      </Container>
    );
  }
}

ChooseLocation.propTypes = {
  navigation: PropTypes.object
};

export default firebaseConnect()(ChooseLocation);
