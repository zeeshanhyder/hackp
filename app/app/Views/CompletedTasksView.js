import React, { Component } from "react";
import {View,Text,FlatList} from 'react-native';
import {Container} from "../Components/Container";
import { connect } from "react-redux";
import { compose } from "redux";
import {firebaseConnect} from 'react-redux-firebase';
import {TaskCard} from '../Components/TaskCard';


class CompletedTasksView extends Component{

    taskList = 
        <FlatList
          keyExtractor={item => item.id}
          data={this.props.completedTasks}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
    

    render(){
        return(
            <Container>
            <View>
                {this.taskList}
            </View>
            </Container>
        )
    }
}

export default compose(
    firebaseConnect([
      "tasks" // { path: '/todos' } // object notation
    ]),
    connect(state => {
        completedTasks = JSON.parse(state.firebase.data.tasks).filter((obj,idx)=>{
            if(obj.completed){
                return obj
            }
        })
        return {
            completedTasks: completedTasks
        }
    })
  )(CompletedTasksView);