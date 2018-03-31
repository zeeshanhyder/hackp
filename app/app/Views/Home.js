import React, { Component } from "react";
import { View, ToolbarAndroid, ScrollView, StyleSheet, Text, Button, FlatList } from 'react-native';


const style = {
  'toolbar': {
    height: 58,
    backgroundColor: '#ff6f00'
  },
  'main_content':{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ff0',
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
          <Text style={{fontSize: 100, color: #568}}>TEstesttest</Text>
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
export default Home;
