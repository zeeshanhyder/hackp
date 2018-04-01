import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  ToolbarAndroid,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { Card } from "react-native-material-ui";

import { TaskCard } from "../Components/TaskCard";

const style = {
  toolbar: {
    height: 58,
    backgroundColor: "#ff6f00"
  },
  main_content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 30
  }
};

class Home extends Component {
  parseData = data => {
    if (data === undefined) {
      return [];
    }
    console.log(data);
    return JSON.parse(data);
  };

  render() {
    console.log(this.props.tasks);
    const { navigate } = this.props.navigation;

    // extract keys
    const keyExtractor = (item, index) => item.id;

    const taskList = (
      <FlatList
        keyExtractor={item => item.id}
        data={this.parseData(this.props.tasks)}
        renderItem={({ item }) => <TaskCard item={item} />}
      />
    );
    const loadingView = <Text>Please wait...</Text>;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ToolbarAndroid
          title="FunTaskIT"
          actions={[]}
          titleColor="#fff"
          style={style.toolbar}
        />
        {this.props.tasks === undefined ? loadingView : taskList}
        <View style={style.main_content}>
          <Button
            onPress={() => navigate("NewTask")}
            title="Add Task"
            color="#ff6f00"
            accessibilityLabel="Add new task"
          />
          <Button
            onPress={() => navigate("TaskPopup")}
            title="Completed tasks"
            color="#ff6f00"
            accessibilityLabel="View deleted tasks"
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  tasks: PropTypes.any,
  navigation: PropTypes.any
};

export default compose(
  firebaseConnect([
    "tasks" // { path: '/todos' } // object notation
  ]),
  connect(state => ({
    tasks: state.firebase.data.tasks
  }))
)(Home);
