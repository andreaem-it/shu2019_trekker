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
     longitude: 12.7067667,
   }),
    marker: {
      latlng: '42.7978912,13.2659697',
      title: 'Monte Vettore'
    },
    initial: {
      latitude : '42.7894',
      longitude : '13.2583'
    },
    final: {
      latitude : '42.826178',
      longitude : '13.265216'
    },
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
   }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: this.state.latitudeDelta,
    longitudeDelta: this.state.longitudeDelta
  });

render = () => {
  const {navigate} = this.props.navigation;

    return (
      <View>
        <MapView
           ref={MapView => (this.MapView = MapView)}
           style={styles.map}
           initialRegion={this.state.region}
           loadingEnabled = {true}
           loadingIndicatorColor="#666666"
           loadingBackgroundColor="#eeeeee"
           moveOnMarkerPress = {true}
           showsUserLocation={true}
           showsCompass={true}
           showsPointsOfInterest = {false}
           zoomEnabled = {true}
           pitchEnabled={true}
           rotateEnabled={true}
           provider={'google'}>
           <MapView.Polyline
             coordinates={[
                { latitude: 42.7894, longitude: 13.2583},
                { latitude: 42.826178,longitude: 13.265216}
             ]}
             strokeWidth={4}
            />
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
        <ImageBackground style={styles.bottomBG} source={BottomBG} imageStyle={{resizeMode: 'cover'}}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Monte Vettore & Pilato Lake</Text>
            <Text style={styles.subTitle}>Castelluccio di Norcia (PG)</Text>
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
          </View>
          <View style={styles.optionsColumns}>
            <TouchableOpacity
            >
              <View style={styles.defaultBtn}>
                <View style={styles.iconContainer}>
                </View>
                <View style={styles.textContainerBtn}>
                  <Text style={styles.text}>
                      Trail Info
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = {() => navigate('Sessions')}
            >
              <View style={styles.defaultBtn}>
                <View style={styles.iconContainer}>
                </View>
                <View style={styles.textContainerBtn}>
                  <Text style={styles.text}>
                      Sessions
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={styles.defaultBtn}>
                <View style={styles.iconContainer}>
                </View>
                <View style={styles.textContainerBtn}>
                  <Text style={styles.text}>
                      Download Map
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={styles.orangeBtn}>
                <View style={styles.iconContainer}>
                </View>
                <View style={styles.textContainerBtn}>
                  <Text style={styles.text}>
                      GET HELP
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View>
            <TouchableOpacity
              onPress = {() => navigate('TrailSelected')}
            >
            <View style={styles.tabBarInfoContainer}>

                <Text style={styles.tabBarInfoText}>
                  Start AR
                </Text>

            </View>
            </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    height: '45%',
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
  bottomBG: {
    width: '100%',
    height: '45%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    zIndex: -10,
    marginTop: -10
  },
  titleContainer: {
    textAlign: 'center',
    marginTop: 100
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '800'
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 20
  },
  ratingContainer: {
    flex: 0,
    flexDirection: 'row',
    position: 'relative',
    marginHorizontal: '30%'
  },
  bottomBtn: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: '#000'
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 18,
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
  optionsColumns: {
    flex: 0,
    flexDirection: 'row',
    marginTop: 50,
  },
  defaultBtn: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: '#01696D',
    height: 80,
    width: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  orangeBtn: {
    flex:0,
    flexDirection: 'column',
    backgroundColor: '#F3AF53',
    height: 80,
    width: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10
  },
  iconContainer: {
    height: '80%',
    width: '100%'
  },
  textContainerBtn: {
    height: '20%',
    opacity: 0.5,
    backgroundColor: '#000',
    borderRadius: 10
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12
  }
})
