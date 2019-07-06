import React, {Component} from 'react';

import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTrekker from '../assets/images/icon-trekker.png';
import IconClock from '../assets/images/icon-clock.png';

export default class SessionsScreen extends React.Component {
  render = () => {

    const {navigate} = this.props.navigation;

    return (
    <View>
      <View style={styles.middleBarContainer}>
        <View style={styles.middleBarRow}>
          <Icon
            name="circle"
            size={20}
            color="white"
            style={styles.diff1}
          />
        </View>
        <View style={styles.middleBarRow}>
          <Icon
            name="circle"
            size={20}
            color="white"
            style={styles.diff2}
          />
        </View>
        <View style={styles.middleBarRow}>
          <Icon
            name="circle"
            size={20}
            color="white"
            style={styles.diff3}
          />
        </View>
        <View style={styles.middleBarRow}>
          <Text style={styles.trailDiffTxt}>
            EasyTrail
          </Text>
        </View>
        <View style={styles.middleBarRow}>
          <Image style={styles.trekkerIcon} source={IconTrekker} imageStyle={{resizeMode: 'stretch'}}/>
        </View>
        <View style={styles.middleBarRow}>
          <Text style={styles.trailTxt}>
            11,3 Km
          </Text>
        </View>
        <View style={styles.middleBarRow}>
          <Image style={styles.clockIcon} source={IconClock}/>
        </View>
        <View style={styles.middleBarRow}>
          <Text style={styles.trailTxt}>
            5-6 h
          </Text>
        </View>
      </View>
    </View>
  )}
};
const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'relative',
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
    backgroundColor: '#000000',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  middleBarContainer: {
    marginTop: 0,
    backgroundColor: '#01696D',
    height: 45,
    width: '100%',
    paddingHorizontal: '10%',
    flex: 0,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: 10,
  },
  middleBarRow: {
    flex: 0,
    flexDirection: 'column',
    marginHorizontal: -5,
  },
  diff1: {
    color: '#589F5D',
    marginVertical: 10,
    marginLeft: 0,
    marginRight: 10,
  },
  diff2: {
    color: '#FFFFFF',
    opacity: 0.5,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  diff3: {
    color: '#FFFFFF',
    opacity: 0.5,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 30,
  },
  trailDiffTxt: {
    color: '#FFFFFF',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginRight: 30,
    marginRight: 80,
    minWidth: 50,
  },
  trailTxt: {
    color: '#FFFFFF',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginRight: 20,
    minWidth: 50,
  },
  trekkerIcon: {
    marginTop: 12,
    width: 20,
    height: 20,
    marginRight: 20,
  },
  clockIcon: {
    marginTop: 12,
    width: 20,
    height: 20,
    marginRight: 20,
  },
})
