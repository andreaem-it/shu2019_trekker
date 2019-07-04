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

  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng)
   0;
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });
}


  return() {
    const {navigate} = this.props.navigation;

    render(
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
      </View>
    )
  }
}
