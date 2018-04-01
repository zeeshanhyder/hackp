import React from "react";
import PropTypes from "prop-types";
import { TextInput, View, TouchableHighlight } from "react-native";
import { Card } from "react-native-material-ui";

import styles from "./styles";

const LocationTextInput = ({ placeholder, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View>
      <Card>
        <TextInput
          style={styles.defaultTextInput}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          editable={false}
        />
      </Card>
    </View>
  </TouchableHighlight>
);

LocationTextInput.propTypes = {
  placeholder: PropTypes.string,
  onPress: PropTypes.func
};

export default LocationTextInput;
