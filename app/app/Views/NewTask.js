import React, { Component } from "react";
import {View, Text, TextInput} from 'react-native';



class NewTask extends Component{
    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type new task here"
                    />
            </View>
        )

    }
}

export default NewTask;
