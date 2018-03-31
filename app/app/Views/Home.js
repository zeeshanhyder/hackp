import React, { Component } from "react";
import { View, ToolbarAndroid, ScrollView, StyleSheet, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

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
  render() {
    console.log(this.props.tasks)
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ToolbarAndroid
          title="FunTaskIT"
          actions={[]}
          titleColor='#fff'
          style={style.toolbar}
        />
        <View style={style.main_content} >
          <FlatList
          data={[
            {task: 'Buy mushrooms'},
            {task: 'Give brother gift card'},
            {task: 'Join in games'},
            {task: 'Joel'},
          ]}
          renderItem={({item}) => <Text style={style.item}>{item.task}</Text>}
          />

          <Button
            onPress = {()=>navigate('NewTask')}
            title="Add Task"
            color="#ff6f00"
            accessibilityLabel="Add new task"
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
