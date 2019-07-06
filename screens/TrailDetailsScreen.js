import React from 'react';

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Trail1 from '../assets/trails/2.jpg';
import Trail1Map from '../assets/trails/2-map.png';
import IconTrekker from '../assets/images/icon-trekker.png';
import IconClock from '../assets/images/icon-clock.png';
import Icon from 'react-native-vector-icons/FontAwesome';


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
      <View style={styles.topImageContainer}>
        <ImageBackground source={Trail1} style={styles.topImage}>
          <View>
            <TouchableOpacity
              onPress = {() => navigate('Trails')}
            >
              <View>
              <Icon
                name="arrow-left"
                size={30}
                color="white"
                style={styles.backBtn}
              />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height: '70%'}}>
          </View>
          <View style={styles.info}>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingColumn}>
                <Icon
                  name="star"
                  size={30}
                  color="gold"
                />
              </View>
              <View style={styles.ratingColumn}>
                <Icon
                  name="star"
                  size={30}
                  color="gold"
                />
              </View>
              <View style={styles.ratingColumn}>
                <Icon
                  name="star"
                  size={30}
                  color="gold"
                />
              </View>
              <View style={styles.ratingColumn}>
                <Icon
                  name="star"
                  size={30}
                  color="gold"
                />
              </View>
              <View style={styles.ratingColumn}>
                <Icon
                  name="star"
                  size={30}
                  color="gold"
                />
              </View>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Monte Vettore & Pilato Lake</Text>
              <Text style={styles.subTitle}>Castelluccio di Norcia (PG)</Text>
            </View>
          </View>
        </ImageBackground>
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
        <View>
          <Image style={styles.bottomMap} source={Trail1Map}/>
        </View>
        <View>
            <TouchableOpacity
              onPress = {() => navigate('TrailSelected')}
            >
            <View style={styles.tabBarInfoContainer}>

                <Text style={styles.tabBarInfoText}>
                  Check the Map
                </Text>

            </View>
            </TouchableOpacity>

        </View>
      </View>



    )}

  }

const styles = StyleSheet.create ({
  topImageContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topImage: {
    width: 450,
    height: 400,
  },
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
  backBtn: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
  },
  middleBarContainer: {
    backgroundColor: '#F3AF53',
    height: 45,
    width: '100%',
    paddingHorizontal: '10%',
    flex: 0,
    flexDirection: 'row',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 10
  },
  middleBarRow: {
    flex: 0,
    flexDirection: 'column',
    marginHorizontal: -5
  },
  diff1: {
    color: '#589F5D',
    marginVertical: 10,
    marginLeft: 0,
    marginRight: 10
  },
  diff2: {
    color: '#FFFFFF',
    opacity: 0.5,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10
  },
  diff3: {
    color: '#FFFFFF',
    opacity: 0.5,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 30
  },
  trailDiffTxt: {
    color: '#FFFFFF',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginRight: 30,
    marginRight: 80,
    minWidth: 50
  },
  trailTxt: {
    color: '#FFFFFF',
    textAlignVertical: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginRight: 20,
    minWidth: 50
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
  bottomMap: {
    width: '100%',
    height: 250,
    marginTop: -20,
    zIndex: -10
  },
  ratingContainer: {
    flex: 0,
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: '30%'
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: -20
  },
  subTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    marginLeft: -20
  },
})
