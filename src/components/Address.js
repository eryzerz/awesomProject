import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';
import { Header,Left,Right,Body,Title,Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';


class Address extends Component {
  static navigationOption = {
    header:null
  }
    state = {  }
    render() { 
        return ( 
        <View style={{flex:1,backgroundColor:'gray'}}>

          <View style={{backgroundColor:'red',flex:1}}>
                <Header style={{backgroundColor:'white'}}>
                    <Left/>
                    <Body>
                        <Title style={{color:'black'}}>WhiteList</Title>
                    </Body>
                    <Right />
                </Header> 

                <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'black'}}
                    onPress={()=> {alert('ok')}}
                    >FAVORIT</Text>
                  </View>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'black'}}>Dilihat</Text>
                  </View>
                </View>
          </View>

          <View style={{backgroundColor:'white',flex:4,alignItems:'center',justifyContent:'center'}}>
            <View style={{backgroundColor:'red',flex:1}}>
              <View style={{backgroundColor:'gray',flex:2}}>
               
                  <Image source={require('../../assets/whislist.png')}
                  style={{height: 200, width: null, flex: 1,resizeMode:'cover',padding:20}}
                  />
               
              </View>
              <View style={{backgroundColor:'white',flex:1,padding:20,justifyContent:'center',textAlign:'center'}}>
                <Text>Kamu belum Login Nih,Yuk Login Untuk Menikmati </Text><Text>fitur Lebih Banyak</Text>
              </View>
            </View>
            {/* button */}
            <View style={{backgroundColor:'white',flex:1}}> 
              <Button style={{justifyContent:'center',textAlign:'center',borderWidth:0.6,borderRadius:25,backgroundColor:'#f75448',width:150}}>
                <Text style={{color:'white'}}>Login</Text>
              </Button>
              <Text style={{color:'gray',justifyContent:'center'}}>Syarat dan Ketetuan</Text>
            </View>

          </View>
        </View>
        
        );
    }
}
 
export default Address;