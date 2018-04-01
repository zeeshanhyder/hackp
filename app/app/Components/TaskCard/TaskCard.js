import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight } from "react-native";
import { Card } from "react-native-material-ui";

import styles from "./styles";

const TaskCard = ({ item, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.underlayColor}>
    <View>
      <Card>
        <Text style={styles.item}>{item.task}</Text>
      </Card>
    </View>
  </TouchableHighlight>
);

TaskCard.propTypes = {
  item: PropTypes.object,
  onPress: PropTypes.func
};

export default TaskCard;
