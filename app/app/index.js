import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {Provider, createStore} from 'react-redux';
import {compose, combineReducers} from 'redux';
import {appState, rrfConfig, firebase_config} from './Reducers/reducers';
import Navigator from "./config/routes";
import firebase from 'firebase';

firebase.initializeApp(firebase_config);

// const createStoreWithFirebase = compose(
//   reactReduxFirebase(firebase, rrfConfig),
// )(createStore)

// const rootReducer = combineReducers({
//   firebaseReducer
// });

// const initialState = {}
// const store = createStoreWithFirebase(rootReducer, initialState, function(){})

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

export default () => (
    <Navigator />
);
