import React from "react";
import {
  View,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Header, StackNavigator } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

import Home from "../Views/Home";
import NewTask from "../Views/NewTask";
import TaskDetails from "../Views/TaskDetails";
import ChooseLocation from "../Views/ChooseLocation";

import colors from "../config/colors";

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    NewTask: {
      screen: NewTask
    }
  },
  {
    headerMode: "screen"
  }
);

const ChooseLocationStack = StackNavigator(
  {
    ChooseLocation: {
      screen: ChooseLocation,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: colors.orange
        },
        headerRight: (
          <TouchableOpacity
            onPress={() => {
              console.log(this.state.searchedLocation);
              // this.props.navigation.goBack(null);
            }}
          >
            <Ionicons
              name="md-checkmark"
              size={Header.HEIGHT - 30}
              style={{ paddingVertical: 10, paddingHorizontal: 15 }}
            />
          </TouchableOpacity>
        )
      })
    }
  },
  {
    headerMode: "none"
  }
);

const TaskDetailStack = StackNavigator(
  {
    TaskDetails: {
      screen: TaskDetails,
      navigationOptions: () => ({
        headerStyle: {
          backgroundColor: colors.orange
        }
      })
    }
  },
  {
    headerMode: "none"
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    },
    TaskDetails: {
      screen: TaskDetailStack
    },
    ChooseLocation: {
      screen: ChooseLocationStack
    }
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "screen",
    mode: "card"
  }
);
