import React, { Component } from "react";
import {View, Text, TextInput, FlatList} from 'react-native';
import { Constants, Location, Permissions } from "expo";
import {getNearbyPlace} from "../api/api_places";
import {Container} from '../Components/Container'; 
import { Card } from "react-native-material-ui";
import { DefaultButton } from "../Components/Button";
import { DefaultTextInput,LocationTextInput} from "../Components/TextInput";
import {firebaseConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';


class NewTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            location: {},
            noLoc: true,
            taskDesc: ''
        }
        getLocationAsync = async (state) => {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== "granted") {
            console.log("Denied!")
            }
        
            const location = await Location.getCurrentPositionAsync({});
            this.setState({location : location,noLoc: false})
            
        }
        getLocationAsync(this.state);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnTaskDescChange = this.handleOnTaskDescChange.bind(this);
    }

    handleLocationPress = () => {
        
        this.props.navigation.navigate("ChooseLocation",{data: this.state.taskDesc, key: this.props.navigation.key});
      };

    
    handleOnClick = () =>{
        data = JSON.parse(this.props.tasks)
        data.push({
            id: new Date(),
            task: this.state.taskDesc,
            loc: this.props.selLoc,
            completed: false 
        })
        this.props.firebase.set("tasks",JSON.stringify(data))
        this.props.firebase.set("selLoc","")
        this.props.navigation.goBack(null)
    }

    handleOnTaskDescChange = (event) =>{
        this.setState({
            taskDesc: event
        })
        
    }


    render(){

        const locationInfo = <Text>Getting location...</Text>;
        
        return(
            <Container>
            <View>
                <DefaultTextInput value={this.state.taskDesc} onChangeText={this.handleOnTaskDescChange} placeholder="Task Name" />
              
            </View>
            <View>
              
            <LocationTextInput
                placeholder="Location"
                onPress={this.handleLocationPress}
                
                />
              
            </View>
            <View style={{flex:1, flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                {this.state.noLoc?<Text style={{color:"#aaa"}}>Getting location...</Text>:null}
            </View>
            
            <DefaultButton onClick={this.handleOnClick} text="Task It" />
          </Container>
        )

    }
}

export default compose(
    firebaseConnect([
      "tasks",
      "selLoc" // { path: '/todos' } // object notation
    ]),
    connect(state => ({
      tasks: state.firebase.data.tasks,
      selLoc: state.firebase.data.selLoc
    }))
  )(NewTask);
