import React, { Component } from "react";
import {View, Text, TextInput, FlatList} from 'react-native';
import { Constants, Location, Permissions } from "expo";
import {getNearbyPlace} from "../api/api_places";



class NewTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            location: {},
            locationSuggestions: [
                {
                    name:"CVS"
                },
                {
                    name:"Target"
                },
                {
                    name: "Walmart"
                }
            ]
        }
        this.fetchPlaces = this.fetchPlaces.bind(this);

        getLocationAsync = async () => {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== "granted") {
              console.log("Denied!")
            }
        
            const location = await Location.getCurrentPositionAsync({});
            this.state.location = location;
            console.log(this.state.location)
          };
        getLocationAsync();
    }

    fetchPlaces(){
        getNearbyPlace(this.state.location).
        then(response =>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })

    }


    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type new task here"
                    onChange={this.fetchPlaces}
                    />

                <FlatList data={this.state.locationSuggestions} renderItem={({item}) => <Text >{item.name}</Text>}/>
            </View>
        )

    }
}

export default NewTask;
