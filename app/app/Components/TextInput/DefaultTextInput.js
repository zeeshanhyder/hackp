import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "react-native";

import styles from "./styles";

const DefaultTextInput = ({ placeholder }) => (
  <TextInput
    style={styles.defaultTextInput}
    underlineColorAndroid="transparent"
    placeholder={placeholder}
  />
);

DefaultTextInput.propTypes = {
  placeholder: PropTypes.string
};

export default DefaultTextInput;
