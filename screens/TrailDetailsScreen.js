import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Trail1 from '../assets/trails/1.jpg';

export default class TrailDetailsScreen extends React.Component {
  static navigationOptions = {
        title: '',
        navBarHidden: true,
        orientation: 'portrait',
        header: null,
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Image source={Trail1} style={styles.topImage}/>

      </View>
    )}

  }

const styles = StyleSheet.create ({
  topImage: {
    width: 450,
    height: 450,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})
