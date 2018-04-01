/*
 * reducer.js
 */

 import {ADD_TASK,DEL_TASK, TOGGLE_COMPLETED, ON_LOCATION_SUGGESTIONS} from '../Actions/actions';
 import {combineReducers, compose} from 'redux';
 import firebase from 'firebase';


// Firebase init
const firebaseConfig = {
  apiKey: "AIzaSyADqkRxMlwGa7LkxJSUhUhaKbK-LGaYRRc",
  authDomain: "funtaskplaces-1522483716126.firebaseapp.com",
  databaseURL: "https://funtaskplaces-1522483716126.firebaseio.com",
  projectId: "funtaskplaces-1522483716126",
  storageBucket: "funtaskplaces-1522483716126.appspot.com",
  messagingSenderId: "377232628281"
};
export const rrfConfig = {
  userProfile: "users"
};
firebase.initializeApp(firebaseConfig);

 // our reducer
 function tasks(state = [], action){
    switch(action){
        case ADD_TASK:
            return [
                ...state,
                action.data
            ]
        case DEL_TASK:
            return state.filter((task,idx)=>{
                if(task.id != action.id){
                    return task
                } 
            })
        case TOGGLE_COMPLETED:
            return state.map((task,i)=>{
                if(task.id == action.id){
                    task.completed = !task.completed
                }
            })
        default:
            return state;
    }
 }

 function locationSuggestions(state = {},action){
     switch(action){
         case ON_LOCATION_SUGGESTIONS:
            return Object.assign({},state,{
                locationSuggestions: action.data
            });
         default:
            return state;
     }
 }


export default appState = tasks;
