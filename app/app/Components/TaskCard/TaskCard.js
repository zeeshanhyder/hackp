import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { Card } from "react-native-material-ui";

import styles from "./styles";

const TaskCard = ({ item }) => (
  <View>
    <Card>
      <Text style={styles.item}>{item.task}</Text>
    </Card>
  </View>
);

TaskCard.propTypes = {
  item: PropTypes.object
};

export default TaskCard;
