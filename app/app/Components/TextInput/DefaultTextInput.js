import React from "react";
import PropTypes from "prop-types";
import { TextInput, View } from "react-native";
import { Card } from "react-native-material-ui";

import styles from "./styles";

const DefaultTextInput = ({ placeholder, onChangeText, value }) => (
  <View>
    <Card>
      <TextInput
        style={styles.defaultTextInput}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Card>
  </View>
);

DefaultTextInput.propTypes = {
  placeholder: PropTypes.string
};

export default DefaultTextInput;
