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
  doSomething(){

  }
  render() {
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
export default Home;
