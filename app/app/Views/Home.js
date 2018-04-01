import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, ToolbarAndroid, Text, Button, FlatList } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

import { TaskCard } from "../Components/TaskCard";
import colors from "../config/colors";

const style = {
  toolbar: {
    height: 58,
    backgroundColor: colors.orange
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
    return JSON.parse(data).filter(obj => {
      if (!obj.completed) {
        return obj;
      }
    });
  };

  handleTaskPress = item => {
    this.props.navigation.navigate("TaskDetails", {
      data: item
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    // extract keys
    const keyExtractor = (item, index) => item.id;

    const taskList = (
      <FlatList
        keyExtractor={item => item.id}
        data={this.parseData(this.props.tasks).reverse()}
        renderItem={({ item }) => (
          <TaskCard item={item} onPress={() => this.handleTaskPress(item)} />
        )}
      />
    );
    const loadingView = <Text>Please wait...</Text>;

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ToolbarAndroid
          title="FanTaskTic"
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
            onPress={() => navigate("CompletedTasksView")}
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
