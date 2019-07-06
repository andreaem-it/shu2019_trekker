import React, { Component }  from 'react';

import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionAndroid,
  ImageBackground
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MapView, { AnimatedRegion, Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Geolocation } from 'react-native-geolocation-service';
import IconTrekker from '../assets/images/icon-trekker.png';
import IconClock from '../assets/images/icon-clock.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomBG from '../assets/images/2-layers.png';

export default class TrailSelectedScreen extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    latitude: 42.9564927,
    longitude: 12.7067667,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
    routeCoordinates: [],
    distanceTravelled: 0,
    prevLatLng: {},
    coordinate: new AnimatedRegion({
     latitude: 42.9564927,
     longitude: 12.7067667
   }),
   error: null
  };

}

componentDidMount()
    {
      navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err),
        { enableHighAccuracy: true, timeout: 8000, maximumAge: 10000 }
      );

     // Geolocation.getCurrentPosition(
     //     (position) => {
     //         console.log(position);
     //         this.setState({
     //           latitude: position.coords.latitude,
     //           longitude: position.coords.longitude,
     //           latitudeDelta: 0.03,
     //           longitudeDelta: 0.05,
     //           error: null,
     //         });
     //     },
     //     (error) => {
     //         // See error code charts below.
     //         console.log(error.code, error.message);
     //     },{
     //       enableHighAccuracy: true,
     //       timeout: 15000,
     //       maximumAge: 10000
     //     }
     // );
   }


  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: this.state.latitudeDelta,
    longitudeDelta: this.state.longitudeDelta
  });



render = () => {
    return (
      <View>
        <MapView
           ref={MapView => (this.MapView = MapView)}
           style={styles.map}
           initialRegion={this.state.region}
           loadingEnabled = {true}
           loadingIndicatorColor="#666666"
           loadingBackgroundColor="#eeeeee"
           moveOnMarkerPress = {false}
           showsUserLocation={true}
           showsCompass={true}
           showsPointsOfInterest = {false}
           zoomEnabled = {true}
           pitchEnabled={true}
           rotateEnabled={true}
           provider={null}>
        </MapView>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <ImageBackground
            source={BottomBG}
          >
            <View>

            </View>
          </ImageBackground>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height: '70%',
    width: '100%',
  },
  middleBarContainer: {
    marginTop: -20,
    backgroundColor: '#01696D',
    height: 45,
    width: '100%',
    paddingHorizontal: '10%',
    flex: 0,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
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
})
