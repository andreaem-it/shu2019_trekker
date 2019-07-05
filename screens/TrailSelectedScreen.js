import React, { Component }  from 'react';

import {
  Platform,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PermissionAndroid
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MapView, { AnimatedRegion, Polyline, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Geolocation } from 'react-native-geolocation-service';

export default class TrailSelectedScreen extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    latitude: 42.9564927,
    longitude: 12.7067667,
    latitudeDelta: 0.02,
    longitudeDelta: 0.05,
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
         zoom="19"
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
         provider="google">
      </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.bubble, styles.button]}>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height: '80%',
    width: '100%',
  }
})
