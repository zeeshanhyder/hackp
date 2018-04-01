import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import Map from "../Components/Map";
import { Container } from "../Components/Container";
import { DefaultTextInput } from "../Components/TextInput";

class ChooseLocation extends Component {
  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <DefaultTextInput />
        <Map />
      </Container>
    );
  }
}

export default ChooseLocation;
