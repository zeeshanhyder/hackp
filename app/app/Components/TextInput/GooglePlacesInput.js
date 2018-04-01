import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

const HEIGHT = 20;

class GooglePlacesInput extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Search"
        minLength={2} // minimum length of text to search
        autoFocus
        returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
        listViewDisplayed="auto" // true/false/undefined
        fetchDetails={false}
        renderDescription={row => row.description} // custom description render
        onPress={data => {
          // 'details' is provided when fetchDetails = true
          this.props.handleSelectPlace(data);
        }}
        getDefaultValue={() => ""}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyA9JTIE_XERTAysm6TpetW4wnfwLG5UvmU",
          language: "en", // language of the results
          types: "establishment" // default: 'geocode'
        }}
        styles={{
          textInputContainer: {
            width: "100%"
          },
          description: {
            fontWeight: "bold"
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          },
          listView: {
            backgroundColor: "#fff"
          }
        }}
        nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
        GoogleReverseGeocodingQuery={
          {
            // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            // TODO: get lat long from click
          }
        }
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance"
        }}
        renderLeftButton={() => (
          <Ionicons name="md-search" size={HEIGHT} style={{ padding: 11 }} />
        )}
      />
    );
  }
}

GooglePlacesInput.propTypes = {
  handleSelectPlace: PropTypes.func
};

export default GooglePlacesInput;
