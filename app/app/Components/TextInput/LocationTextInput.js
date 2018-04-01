import React from "react";
import PropTypes from "prop-types";
import { TextInput, View, TouchableHighlight } from "react-native";
import { Card } from "react-native-material-ui";
import {firebaseConnect} from "react-redux-firebase";
import {compose} from 'redux';
import {connect} from 'react-redux';

import styles from "./styles";

function getName(loc){
  if( !loc){
    return null
  }
  loc = JSON.parse(loc)
  return loc.name
}

const LocationTextInput = ({ backupLoc, selLoc, placeholder, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View>
      <Card>
        <TextInput
          style={styles.defaultTextInput}
          underlineColorAndroid="transparent"
          placeholder={ placeholder}
          value={getName(selLoc)||getName(backupLoc)|| ''}
          editable={false}
        />
      </Card>
    </View>
  </TouchableHighlight>
);

LocationTextInput.propTypes = {
  placeholder: PropTypes.string,
  onPress: PropTypes.func
};


export default compose(
  firebaseConnect([
    "selLoc" // { path: '/todos' } // object notation
  ]),
  connect(state => ({
    selLoc: state.firebase.data.selLoc
  }))
)(LocationTextInput);

