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
import CompletedTasksView from '../Views/CompletedTasksView';

import colors from "../config/colors";

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    
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
        }
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
    },
    NewTask: {
      screen: NewTask
    },
    CompletedTasksView:{
      screen: CompletedTasksView
    }
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "screen",
    mode: "card"
  }
);
