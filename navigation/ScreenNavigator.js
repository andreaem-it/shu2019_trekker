import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import TrailsScreen from "../screens/TrailsScreen";
import TrailDetailsScreen from "../screens/TrailDetailsScreen";
import TrailSelectedScreen from "../screens/TrailSelectedScreen";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
    navigationOptions:{ header:{ visible:false }}
});

const HomeStack = createStackNavigator(
    {
        Home: {
          screen: HomeScreen,
          navigationOptions: ({navigation}) => ({
          title: 'Home',
          headerStyle: styles.headerStyle,
          headerTitle: 'Home',
          headerLeft : null,
          headerRight: null,
        })
        },
        Trails: {
          screen: TrailsScreen,
          navigationOptions: {
            header: null,
          }
        },
        TrailDetails: {
          screen: TrailDetailsScreen,
          navigationOptions: {
            header: null,
          }
        },
        TrailSelected: {
          screen: TrailSelectedScreen,
          navigationOptions: {
            header: null,
          }
        }
    },
    {
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerVisible: false
    },
    {
        navigationOptions: {
            header: null,
        },
    },
    config
);

const screenNavigator = createStackNavigator({
    HomeStack,
},
{
  headerMode: 'none',
});

const styles = StyleSheet.create ({
  headerStyle: {
    height: 0,
    flex: 1,
  }
})

export default screenNavigator;
