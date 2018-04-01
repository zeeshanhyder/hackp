import React, { Component } from "react";
import { View, ToolbarAndroid, ScrollView, StyleSheet, Text, Button, FlatList } from 'react-native';


const style = {
  'toolbar': {
    height: 58,
    backgroundColor: '#ff6f00'
  },
  'done_tasks':{
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    text-decoration: 'line-through',
      padding: 30,
  },
  'item': {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
}
class TaskPopup extends Component {
  doingSomething()
  {

  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={style.done_tasks} >
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
          onPress = {()=>navigate('Home')}
          title="Home"
          color="#ff6f00"
          accessibilityLabel="Home"
        />
        </View>
    )

  }
}

export default TaskPopup;
