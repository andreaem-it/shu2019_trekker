import React, { Component }  from 'react';

import {
  View,
  Text
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default class TrailSelectedScreen extends React.Component {
  static navigationOptions = {
        title: '',
        navBarHidden: true,
        orientation: 'portrait',
        header: null,
    }

  return() {
    const {navigate} = this.props.navigation;

    render(
      <View>
        <Text>Ok so... you've seleced a trail, nice!</Text>
      </View>
    )
  }
}
