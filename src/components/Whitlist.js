import React, { Component } from 'react';
import Address from './Address';
import Search from '../../src/components/Search';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import { Text, View } from 'react-native';

class Whitlist extends Component {
  constructor(){
    super()
  }
  state = {  }
  render() { 
    return ( 
      <Address />
     );
  }
}
export default Whitlist;





