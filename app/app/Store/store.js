import { compose, createStore } from 'redux';
import RNFirebase from 'react-native-firebase';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import makeRootReducer from '../Reducers/reducers';


const reactNativeFirebaseConfig = {
    apiKey: "AIzaSyADqkRxMlwGa7LkxJSUhUhaKbK-LGaYRRc",
    authDomain: "funtaskplaces-1522483716126.firebaseapp.com",
    databaseURL: "https://funtaskplaces-1522483716126.firebaseio.com",
    projectId: "funtaskplaces-1522483716126",
    storageBucket: "funtaskplaces-1522483716126.appspot.com",
    messagingSenderId: "377232628281"
};
   
const reduxFirebaseConfig = {
userProfile: 'users', // save users profiles to 'users' collection
};

export default (initialState = { firebase: {} }) => {
    // initialize firebase
    const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);
   
    const store = createStore(
      makeRootReducer(),
      initialState,
      compose(
       reactReduxFirebase(firebase, reduxFirebaseConfig), // pass initialized react-native-firebase app instance
       // applyMiddleware can be placed here
      )
    );
   
    return store;
};

