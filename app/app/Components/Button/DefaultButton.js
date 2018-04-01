import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button } from "react-native-material-ui";

import styles from "./styles";

const DefaultButton = ({ text, onPress }) => (
  <View style={styles.buttonContainer}>
    <Button
      style={{
        container: { paddingHorizontal: 100, paddingVertical: 35 },
        text: {
          fontSize: 20,
          width: "40%"
        }
      }}
      raised
      primary
      text={text}
      upperCase={false}
      onPress={onPress}
    />
  </View>
);

DefaultButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default DefaultButton;
