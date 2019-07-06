import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import topBarBG from '../assets/images/Profile/topBarBG.png';
import bottomBG from '../assets/images/Profile/bottomBG.png';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
        navBarHidden: true,
        orientation: 'portrait',
        header: null,
    }
render() {
  const {navigate} = this.props.navigation;
  return (
    <View style={styles.container}>
      <ImageBackground
          source={topBarBG}
          imageStyle={{resizeMode: 'stretch'}}
          style={styles.topBarImage}>
        <View style={styles.headerColumn}>
        <Avatar
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',}}
          rounded
          size= {120}
          title='AF'
          style={{ height: 120, width: 120, marginTop: 100, borderColor: 'black', borderWidth: 5, borderRadius: 150}}
          />
          <Text style={styles.userNameText}>JOHN DOE</Text>
          <Text style={{ color:'#FFF'}}>
            Trekker Newbie
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
          source={bottomBG}
          imageStyle={{resizeMode: 'cover'}}
          style={styles.bottomBarImage}>
        <View style={styles.buttonContainer}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' , zIndex: 5, marginTop: 80}}>

              <TouchableOpacity style={{width: '30%', height: 150, marginLeft: '15%'}}
                onPress= {() => navigate('Trails')}
              >
                <View style={{backgroundColor: '#01696D', zIndex: 5}}>
                  <View style={{height: 120, width: '100%'}}>
                  </View>
                  <View style={{height: 30, width: '100%', backgroundColor: '#00211e', opacity: 0.5}}>
                    <Text style={{textAlign: 'center', color: '#FFF', textAlignVertical: 'center', fontSize: 22, marginTop: 5}}>Trails</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{width: '30%', height: 150, marginRight: '15%'}}>
              <View style={{backgroundColor: '#01696D', zIndex: 5}}>
                <View style={{height: 120, width: '100%'}}>
                </View>
                <View style={{height: 30, width: '100%', backgroundColor: '#00211e', opacity: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#FFF', textAlignVertical: 'center', fontSize: 22, marginTop: 5}}>Tools</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' , zIndex: 5, marginTop: '10%'}}>
              <TouchableOpacity style={{width: '30%', height: 150, marginLeft: '15%'}}
                onPress= {() => navigate('Ar')}
              >
              <View style={{backgroundColor: '#01696D', zIndex: 5}}>
                <View style={{height: 120, width: '100%'}}>
                </View>
                <View style={{height: 30, width: '100%', backgroundColor: '#00211e', opacity: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#FFF', textAlignVertical: 'center', fontSize: 22, marginTop: 5}}>Marker</Text>
                </View>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={{width: '30%', height: 150, marginRight: '15%'}}>
              <View style={{backgroundColor: '#DB6725', zIndex: 5}}>
                <View style={{height: 120, width: '100%'}}>
                </View>
                <View style={{height: 30, width: '100%', backgroundColor: '#00211e', opacity: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#FFF', textAlignVertical: 'center', fontSize: 22, marginTop: 5}}>Settings</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          New trail added - Triponzo Loop (Cerreto di Spoleto)
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>

        </View>
      </View>
    </View>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    paddingTop: -10
  },
  topBarImage: {
    height: 330,
    paddingBottom: -10,
    paddingTop: -20,
    zIndex: 10,
  },
  bottomBarImage: {
    height: '100%',
    marginTop: -100,
    paddingTop: 50,
    paddingBottom: 100,
    zIndex: -10,
  },
  buttonContainer: {
    height: '50%',
  },
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  userImage: {
    borderColor: 'black',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
    marginTop: 15
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
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
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
