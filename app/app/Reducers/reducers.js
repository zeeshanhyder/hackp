/*
 * reducer.js
 */

import {ADD_TASK,DEL_TASK, TOGGLE_COMPLETED} from '../Actions/actions'
import {combineReducers} from 'redux'


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
    }
 }


export default appState = combineReducers({
    tasks
});