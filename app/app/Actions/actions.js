/*
 * actions.js
 */


 // constants
 export const ADD_TASK = 'ADD_TASK';
 export const DEL_TASK = 'DEL_TASK';
 export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

 export function addTask(data){
    return {
        type: ADD_TASK,
        data
    }
 }

 export function deleteTask(id){
     return {
         type: DEL_TASK,
         id
     }
 }

 export function toggleCompleted(id){
     return {
         type: TOGGLE_COMPLETED,
         id
     }
 }