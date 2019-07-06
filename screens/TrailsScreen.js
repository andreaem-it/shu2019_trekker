import React from 'react';

import {
  Platform,
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Trail1 from '../assets/trails/2.jpg';
import blank from '../assets/images/mountain.jpg';

export default class TrailsScreen extends React.Component {
  static navigationOptions = {
        title: 'Help ME',
        navBarHidden: true,
        orientation: 'portrait',
        header: null,
    }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <View style={styles.topBarContainer}>
          <TouchableOpacity
            style={styles.topBar}
            onPress= {() => navigate('Home')}
            >
            <Avatar
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
              }}
              rounded
              size= {100}
              title='AF'
              style={styles.topBarAvatar}
              />
              <View style={styles.topBarTextContainer}>
                <Text style={styles.topBarUserName}>JOHN</Text>
                <View style={styles.topBarSeparator}/>
                <Text style={styles.topBarUserLevel}>Newbie</Text>
              </View>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView>
            <View style={styles.mainContainer}>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>
                <TouchableOpacity
                  onPress = {() => navigate('TrailDetails')}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={Trail1}
                      imageStyle={{resizeMode: 'contain'}}
                      />
                  </View>
                  <View style={styles.titleContainer}>

                    <Text style={styles.title}>
                      Monte Vettore & Pilato Lake
                    </Text>
                    <Text style={styles.location}>
                      Castelluccio di Norcia (PG)
                    </Text>
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>
                <TouchableOpacity
                  onPress = {() => navigate('TrailDetails')}
                >
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={blank}
                      imageStyle={{resizeMode: 'contain'}}
                      />
                  </View>
                  <View style={styles.titleContainer}>

                    <Text style={styles.title}>
                      Add new Trail
                    </Text>
                    <Text style={styles.location}>

                    </Text>
                  </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>

                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>

                </View>
              </View>
            </View>
            <View style={styles.mainContainer}>
            <View style={styles.column}>
              <View style={styles.itemContainerLeft}>

              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.itemContainerLeft}>

              </View>
            </View>
            </View>
          </ScrollView>
          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>
              New trail added - Triponzo Loop (Cerreto di Spoleto)
            </Text>

            <View
              style={[styles.codeHighlightContainer, styles.navigationFilename]}>

            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topBarContainer: {
    position: 'absolute',
    height: 50,
    width: '100%',
    backgroundColor: 'transparent',
    top: 50,
    zIndex: 100
  },
  topBar: {
    height: 50,
    backgroundColor: '#000',
    marginHorizontal: 50,
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    flex: 1,
    flexDirection: 'row'
  },
  topBarAvatar: {
    height: 50,
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 150
  },
  topBarTextContainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topBarUserName: {
    marginVertical: 15,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  topBarSeparator: {
    height: 1,
    width: 5,
    backgroundColor: '#05595C'
  },
  topBarUserLevel: {
    marginVertical: 15,
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    paddingVertical: 0
  },
  column: {
    width: '50%'
  },
  itemContainerLeft: {
    height: 300,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#05595C',
    borderRadius: 0,
    marginLeft: 0,
  },
  itemContainerRight: {
    height: 300,
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#05595C',
    borderRadius: 0,
    marginRight: 0,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#666',
    borderRadius: 0
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 0,
  },
  titleContainer: {
    position: 'absolute',
    top: '70%',
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: '#05595C'
  },
  title: {
    color: '#FFF',
    textAlignVertical: 'top',
    textAlign: 'center',
    fontSize: 16
  },
  location: {
    color: '#FFF',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: 12
  },
  button: {
    height: 35,
    backgroundColor: '#000',
    borderRadius: 0
  },
  buttonText: {
    color: '#FFF',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginTop: 6
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: -5,
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
