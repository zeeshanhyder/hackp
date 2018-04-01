import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Button } from "react-native-material-ui";

import styles from "./styles";

const DefaultButton = ({ cStyle, text, onClick }) => (
  <View style={styles.buttonContainer}>
    <Button
      style={
        cStyle || {
          container: { paddingHorizontal: 100, paddingVertical: 35 },
          text: {
            fontSize: 20,
            width: "40%",
            textAlign: "center"
          }
        }
      }
      raised
      primary
      text={text}
      upperCase={false}
      onPress={onClick}
    />
  </View>
);

DefaultButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  cStyle: PropTypes.object
};

export default DefaultButton;
