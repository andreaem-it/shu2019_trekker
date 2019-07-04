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
import Trail1 from '../assets/trails/1.jpg';

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
                <Text style={styles.topBarUserName}>ALFONSO</Text>
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
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={Trail1}
                      imageStyle={{resizeMode: 'contain'}}
                      />
                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => navigate('TrailDetails')}
                  >
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.itemContainerRight}>
                  <View style={styles.imageContainer}>

                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>
                  <View style={styles.imageContainer}>

                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.itemContainerRight}>
                  <View style={styles.imageContainer}>

                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.column}>
                <View style={styles.itemContainerLeft}>
                  <View style={styles.imageContainer}>

                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.itemContainerRight}>
                  <View style={styles.imageContainer}>

                  </View>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                      Bitch Lake
                    </Text>
                    <Text style={styles.location}>
                      Down your dock - Home (HQ)
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                      Discover
                    </Text>
                  </TouchableOpacity>
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
    height: 50,
    backgroundColor: '#FFF',
    marginTop: 20,
    marginBottom: 20,
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
    paddingVertical: 6
  },
  column: {

  },
  itemContainerLeft: {
    height: 200,
    width: 150,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#05595C',
    borderRadius: 10,
    marginLeft: 50,
  },
  itemContainerRight: {
    height: 200,
    width: 150,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#05595C',
    borderRadius: 10,
    marginRight: 50,
  },
  imageContainer: {
    height: 130,
    backgroundColor: '#000',
    borderRadius: 10
  },
  image: {
    height: 129,
    width: 148,
    borderRadius: 10,
  },
  titleContainer: {
    height: 35,
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
    borderRadius: 10
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
    zIndex: 10
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})