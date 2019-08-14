
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Address from './Address';
import Explore from './Explore';
import Chat from './Chat';
import Login from './Login';
import Search from './Search';
import Whitlist from './Whitlist';
import Profile from './Profile';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: Explore },
  Whitlist: { screen: Whitlist },
  Chating : {screen:Chat},
  Login : {screen:Login}
},{
  tabBarOptions: { 
    activeTintColor: 'green',
    inactiveTintColor: 'gray',
    // activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

export default createAppContainer(TabNavigator);
