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
        data: data
    }
 }

 export function deleteTask(id){
     return {
         type: DEL_TASK,
         id: id
     }
 }

 export function toggleCompleted(id){
     return {
         type: TOGGLE_COMPLETED,
         id: id
     }
 }