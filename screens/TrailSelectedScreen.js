import React, { Component }  from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements';
import MapView, { AnimatedRegion, Polyline, Marker } from 'react-native-maps';

const LATITUDE = '';
const LONGITUDE = '';
const LATITUDE_DELTA = 0;
const LONGITUDE_DELTA = 0;

export default class TrailSelectedScreen extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    routeCoordinates: [],
    distanceTravelled: 0,
    prevLatLng: {},
    coordinate: new AnimatedRegion({
     latitude: LATITUDE,
     longitude: LONGITUDE
    })
  };
}

componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition(
      position => {
        const { coordinate, routeCoordinates, distanceTravelled } =   this.state;
        const { latitude, longitude } = position.coords;

        const newCoordinate = {
          latitude,
          longitude
        };
        if (Platform.OS === "android") {
          if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(
              newCoordinate,
              500
            );
           }
         } else {
           coordinate.timing(newCoordinate).start();
         }
         this.setState({
           latitude,
           longitude,
           routeCoordinates: routeCoordinates.concat([newCoordinate]),
           distanceTravelled:
           distanceTravelled + this.calcDistance(newCoordinate),
           prevLatLng: newCoordinate
         });
       },
       error => console.log(error),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    if (Platform.OS === "android") {
      if (this.marker) {
      this.marker._component.animateMarkerToCoordinate(
        newCoordinate,
        500
       );
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
    this.setState({
      latitude,
      longitude,
      routeCoordinates: routeCoordinates.concat([newCoordinate]),
      distanceTravelled: distanceTravelled + this.calcDistance(newCoordinate),
      prevLatLng: newCoordinate
    });

  }
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

render = () => {
  return (
    <View>
    <MapView
      style={styles.map}
      showUserLocation
      followUserLocation
      loadingEnabled
      region={this.getMapRegion()}
      >
      <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} />
      <Marker.Animated
        ref={marker => {
          this.marker = marker;
        }}
        coordinate={this.state.coordinate}
      />
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

const styles = StyleSheet.create ({
  map: {

  }
})
