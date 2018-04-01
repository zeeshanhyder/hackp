import React, { Component } from "react";
import PropTypes from "prop-types";

import { DefaultButton } from "../Components/Button";
import { Container } from "../Components/Container";
import { DefaultTextInput, LocationTextInput } from "../Components/TextInput";

class TaskPopup extends Component {
  handleLocationPress = () => {
    this.props.navigation.navigate("ChooseLocation");
  };

  handleSubmitButton = () => {
    console.log("SUBMITTED");
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Container>
        <DefaultTextInput placeholder="Task Name" />
        <LocationTextInput
          placeholder="Location"
          onPress={this.handleLocationPress}
        />
        <DefaultButton text="Task It" onPress={this.handleSubmitButton} />
      </Container>
    );
  }
}

TaskPopup.propTypes = {
  navigation: PropTypes.any
};

export default TaskPopup;
