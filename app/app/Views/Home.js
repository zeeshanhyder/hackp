import React, { Component } from "react";
import { View, ToolbarAndroid, ScrollView, StyleSheet, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';


const style = {
  'toolbar': {
    height: 58,
    backgroundColor: '#ff6f00'
  },
  'main_content':{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
      padding: 30,
  },
  'item': {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}



class Home extends Component {

  constructor(props){
    super(props)

  }
  doSomething(){

  }

  _parseData(data){
    if(data === undefined){
      return [];
    }
    console.log(data)
    return JSON.parse(data)
  }
  render() {
    console.log(this.props.tasks)
    const { navigate } = this.props.navigation;

    //extract keys
    _keyExtractor = (item, index) => item.id;


    const taskList = <FlatList keyExtractor={(item)=>item.id} data={this._parseData(this.props.tasks)} renderItem={({item}) => <Text style={style.item}>{item.task}</Text>}/>
    const loadingView = <Text>Please wait...</Text>

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ToolbarAndroid
          title="FunTaskIT"
          actions={[]}
          titleColor='#fff'
          style={style.toolbar}
        />
        {this.props.tasks === undefined?loadingView:taskList}
        <View style={style.main_content} >


          <Button
            onPress = {()=>navigate('NewTask')}
            title="Add Task"
            color="#ff6f00"
            accessibilityLabel="Add new task"
          />
          <Button
            onPress = {()=>navigate('TaskPopup')}
            title="Completed tasks"
            color="#ff6f00"
            accessibilityLabel="View deleted tasks"
          />
        </View>
      </View>
    );
  }
}

export default compose(
  firebaseConnect([
    'tasks' // { path: '/todos' } // object notation
  ]),
  connect((state) => ({
    tasks: state.firebase.data.tasks
  }))
)(Home)
