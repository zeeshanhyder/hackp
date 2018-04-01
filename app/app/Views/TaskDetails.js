import React from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-material-ui";

import { DefaultButton } from "../Components/Button";
import { Container } from "../Components/Container";
import { DefaultTextInput } from "../Components/TextInput";

const TaskPopup = () => (
  <Container>
    <View>
      <Card>
        <DefaultTextInput placeholder="Task Name" />
      </Card>
    </View>
    <View>
      <Card>
        <DefaultTextInput placeholder="Location" />
      </Card>
    </View>
    <DefaultButton text="Task It" />
  </Container>
);

export default TaskPopup;
