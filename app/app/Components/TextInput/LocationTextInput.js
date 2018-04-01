import React from "react";
import PropTypes from "prop-types";
import { TextInput, View, TouchableHighlight } from "react-native";
import { Card } from "react-native-material-ui";
import {firebaseConnect} from "react-redux-firebase";
import {compose} from 'redux';
import {connect} from 'react-redux';

import styles from "./styles";

const LocationTextInput = ({ selLoc, placeholder, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <View>
      <Card>
        <TextInput
          style={styles.defaultTextInput}
          underlineColorAndroid="transparent"
          placeholder={selLoc || placeholder}
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

