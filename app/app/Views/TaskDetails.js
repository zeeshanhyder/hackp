import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import { DefaultButton } from "../Components/Button";
import { Container } from "../Components/Container";
import { DefaultTextInput, LocationTextInput } from "../Components/TextInput";

class TaskDetails extends Component {
  handleLocationPress = () => {
    this.props.navigation.navigate("ChooseLocation");
  };

  handleSubmitButton = () => {
    this.props.navigation.goBack(null);
  };
  handleDeleteButton = () => {
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <Container>
        <DefaultTextInput
          value={this.props.navigation.state.params.data.task}
          placeholder="Task Name"
        />
        <LocationTextInput
          placeholder="Location"
          backupLoc={this.props.navigation.state.params.data.loc}
          onPress={this.handleLocationPress}
        />
        <View
          style={{ flex: 1, flexDirection: "column", paddingVertical: 100 }}
        >
          <DefaultButton text="Update" onPress={this.handleSubmitButton} />
          <DefaultButton
            text="Mark as Done"
            onPress={this.handleSubmitButton}
            cStyle={{
              container: {
                paddingHorizontal: 100,
                paddingVertical: 35,
                backgroundColor: "orange"
              },
              text: {
                fontSize: 20,
                width: "40%",
                textAlign: "center"
              }
            }}
          />
          <DefaultButton
            text="Delete"
            onPress={this.handleDeleteButton}
            cStyle={{
              container: {
                paddingHorizontal: 100,
                paddingVertical: 35,
                backgroundColor: "red"
              },
              text: { fontSize: 20, width: "40%", textAlign: "center" }
            }}
          />
        </View>
      </Container>
    );
  }
}

TaskDetails.propTypes = {
  navigation: PropTypes.any
};

export default TaskDetails;
