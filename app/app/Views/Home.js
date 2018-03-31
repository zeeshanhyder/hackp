import React, { Component } from "react";
import { View, ToolbarAndroid, Text, Button } from 'react-native';


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

  doSomething(){

  }
  render() {
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

export default Home;
