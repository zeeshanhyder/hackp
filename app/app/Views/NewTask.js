import React, { Component } from "react";
import {View, Text, TextInput, FlatList} from 'react-native';
import { Constants, Location, Permissions } from "expo";
import {getNearbyPlace} from "../api/api_places";
import {Container} from '../Components/Container'; 
import { Card } from "react-native-material-ui";
import { DefaultButton } from "../Components/Button";
import { DefaultTextInput} from "../Components/TextInput";


class NewTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            location: {},
            noLoc: true
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
    }



    render(){

        const locationInfo = <Text>Getting location...</Text>;
        
        return(
            <Container>
            <View>
              <Card>
                <DefaultTextInput placeholder="Task Name" />
              </Card>
            </View>
            <View>
              <Card>
                <DefaultTextInput placeholder="Location" />
              </Card>
            </View>
            <View style={{flex:1, flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                {this.state.noLoc?<Text style={{color:"#d8d8d8"}}>Getting location...</Text>:null}
            </View>
            
            <DefaultButton text="Task It" />
          </Container>
        )

    }
}

export default NewTask;
