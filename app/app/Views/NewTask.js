import React, { Component } from "react";
import {View, Text, TextInput, ToolbarAndroid} from 'react-native';

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
      padding: 30
  },
  'item': {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  'textInput': {
      height: 50,
      borderRadius: 1
  }
}


class NewTask extends Component{
    render(){
        return(
          <View style={{flex: 1, flexDirection: 'column'}}>
            {/* <ToolbarAndroid
              title="FunTaskIT"
              actions={[]}
              titleColor='#fff'
              style={style.toolbar}
            /> */}

            <View>
                <TextInput
                    style={style.textInput}
                    placeholder="Enter new task is here"
                  />
            </View>

          </View>
        )

    }
}

export default NewTask;
