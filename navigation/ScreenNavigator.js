import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import TrailsScreen from "../screens/TrailsScreen";
import TrailDetailsScreen from "../screens/TrailDetailsScreen";

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
    navigationOptions:{ header:{ visible:false }}
});

const HomeStack = createStackNavigator(
    {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            header: null,
          },
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
        }
    },
    {
      initialRouteName: 'Home',
      headerMode: 'screen',
      headerVisible: false
    },
    config
);

const screenNavigator = createStackNavigator({
    HomeStack,
},
);

export default screenNavigator;
