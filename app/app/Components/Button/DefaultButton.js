import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button } from "react-native-material-ui";

import styles from "./styles";

const DefaultButton = ({ text }) => (
  <View style={styles.buttonContainer}>
    <Button
      style={{
        container: { paddingHorizontal: 100, paddingVertical: 35 },
        text: {
          fontSize: 20
        }
      }}
      raised
      primary
      text={text}
      upperCase={false}
    />
  </View>
);

DefaultButton.propTypes = {
  text: PropTypes.string
};

export default DefaultButton;
