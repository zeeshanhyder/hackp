import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "../Views/Home";
import NewTask from "../Views/NewTask";
import CompletedTasksView from '../Views/CompletedTasksView';

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
    },
    CompletedTasksView:{
      screen: CompletedTasksView
    }
  },
  {
    // headerMode: "screen"
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "none"
  }
);
