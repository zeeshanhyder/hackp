import React, { Component } from "react";
import { View, ToolbarAndroid, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

const style = {
  'toolbar': {
    height: 58, 
    backgroundColor: '#e1474a'
  },
  'main_content':{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
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
          title="FunTaskIt"
          actions={[]}
          titleColor='#fff'
          style={style.toolbar}
           
        />
        <View style={style.main_content} >
          
          <Button
            onPress = {()=>navigate('NewTask')}
            title="Add Task"
            color="#e1474a"
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
