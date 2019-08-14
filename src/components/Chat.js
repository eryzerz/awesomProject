import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { Header,Left,Right,Body,Title,Button } from 'native-base';

class Chat extends Component {
    state = {  }
    render() { 
        return ( 
        <View style={{flex:1,backgroundColor:'gray'}}>

          <View style={{backgroundColor:'red',flex:1}}>
                <Header style={{backgroundColor:'white'}}>
                    <Left/>
                    <Body>
                        <Title style={{color:'black'}}>Chat</Title>
                    </Body>
                    <Right />
                </Header> 

                <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'black'}}>FAVORIT</Text>
                  </View>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Text style={{color:'black'}}>Dilihat</Text>
                  </View>
                </View>
          </View>

          <View style={{backgroundColor:'green',flex:4}}>
            <View style={{backgroundColor:'red',flex:1}}>
              <View style={{backgroundColor:'gray',flex:2}}>
                <Text>Image</Text>
              </View>
              <View style={{backgroundColor:'yellow',flex:1}}>
                <Text>Kamu belum Login Nih,Yuk Login Untuk Menikmati fitur Lebih Banyak</Text>
              </View>
            </View>
            {/* button */}
            <View style={{backgroundColor:'white'}}> 
              <Button style={{justifyContent:'center',textAlign:'center',borderWidth:1,borderRadius:25,backgroundColor:'pink',width:150}}>
                <Text >Login</Text>
              </Button>
            </View>

          </View>
            
          

        </View>
        
        );
    }
}
 
export default Chat;