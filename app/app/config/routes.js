import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "../Views/Home";
import NewTask from "../Views/NewTask";
import TaskPopup from "../Views/TaskPopup";

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

export default StackNavigator(
  {
    Home: {
      screen: TaskPopup
    }
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: "none"
  }
);
