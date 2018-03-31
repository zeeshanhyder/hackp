import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

import styles from "./styles";

const SampleText = ({ text }) => <Text style={styles.text}>{text}</Text>;

SampleText.propTypes = {
  text: PropTypes.string
};

export default SampleText;
