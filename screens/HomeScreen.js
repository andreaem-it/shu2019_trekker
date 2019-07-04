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
          showEditButton rounded
          size= {100}
          title='AF'
          style={{ height: 120, width: 120, marginTop: 100, borderColor: 'black', borderWidth: 5, borderRadius: 150}}
          />
          <Text style={styles.userNameText}>ALFONSO FONSATO</Text>
          <Text style={{ color:'#FFF'}}>
            Trekker Pippa
          </Text>
        </View>
      </ImageBackground>
      <ImageBackground
          source={bottomBG}
          imageStyle={{resizeMode: 'cover'}}
          style={styles.bottomBarImage}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' , zIndex: 5, marginTop: 120}}>
          <TouchableOpacity
            onPress= {() => navigate('Trails')}
          >
            <View style={{width: 150, height: 150, marginLeft: 50, backgroundColor: '#01696D', zIndex: 5}}>
              <Text>Asd</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: 150, height: 150, marginRight: 50, backgroundColor: '#01696D', zIndex: 5}}>
            <Text>Asd</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between' , zIndex: 5, marginTop: 40}}>
          <View style={{width: 150, height: 150, marginLeft: 50, backgroundColor: '#01696D', zIndex: 5}}>
            <Text>Asd</Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: 50, backgroundColor: '#DB6725', zIndex: 5}}>
            <Text>Asd</Text>
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
    height: 400,
    marginTop: -120,
    zIndex: -10,
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