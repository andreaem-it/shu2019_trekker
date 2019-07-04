import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
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

        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity
            onPress = {() => navigate('TrailSelected')}
          >
            <Text style={styles.tabBarInfoText}>
              Start
            </Text>
          </TouchableOpacity>
        </View>

      </View>


    )}

  }

const styles = StyleSheet.create ({
  topImage: {
    width: 450,
    height: 450,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#58929F',
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
