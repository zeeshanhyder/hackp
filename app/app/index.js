import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { COLOR, ThemeProvider } from "react-native-material-ui";
import firebase from "firebase";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { Provider } from "react-redux";
import { compose, combineReducers, createStore } from "redux";

import { appState, rrfConfig, firebaseConfig } from "./Reducers/reducers";
import Navigator from "./config/routes";

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer
});

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

EStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00bd9d",
  $primaryPurple: "#9e768f",

  $white: "#fff",
  $border: "#e2e2e2",
  $inputText: "#797979",
  $lightGray: "#f0f0f0",
  $darkText: "#343434"
});

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500
  },
  toolbar: {
    container: {
      height: 50
    }
  }
};

export default () => (
  <Provider store={store}>
    <ThemeProvider uiTheme={uiTheme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
);
