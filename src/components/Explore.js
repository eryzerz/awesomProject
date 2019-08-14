import React, { Component } from 'react';
import {View,Text,ScrollView ,Image,TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Tab, TabHeading, Icon,Footer,Left,Right,Body,Title,Item,Input,Card,CardItem,Button} from 'native-base';
import { createStackNavigator,StackNavigator, createAppContainer,TabNavigator, createSwitchNavigator } from 'react-navigation';

import Navbar from '../template/NavbarItem'
import Search from './Search';
import Apps from './Apps';
//promoimage
const ImagePromo = (props)=> {
    return (
        <View style={{borderSize:2,flex:2,width:300,marginLeft:30,borderWidth:0.5,borderColor:'gray',borderRadius:10}}>
        <Image source={require('../../assets/promo1.png')} style={{height: 200, width: null, flex: 1,}}/>
        </View>
    )
}
// Bottom Image this digunakan untuk memangil props karena tidak ada param di class
class BottomImage extends Component {
    render(){
        return (
            <View style={{flex:1,backgroundColor:'white',paddingHorizontal:10,paddingBottom:25,marginLeft:20,}}>
                <Image style={{width:80,height:110,borderRadius:9
                        }} source={this.props.img}/>
            </View>
        )
    }
}
class Explore extends Component {
    // static navigationOptions = {
    //     header: null,
    //   };
    state = {  }
    render() { 
        return ( <AppContainer />);
    }
}
 
export default Explore;

class Satu extends Component {
    static navigationOptions = {
        header: null,
      };
    render() { 
        return (
          <View style={{flex:1,backgroundColor:'white'}}>
               <ScrollView>
               <View  style={{backgroundColor:'red',flexDirection:'row',height:50}}>
                    <View style={{flex:1,backgroundColor:'white',paddingTop:10,flexDirection:'row',justifyContent:'center',alignContent:'center',paddingLeft:30}}>
                            <Image source={require('../../assets/title.png')}
                                style={{width:35,height:35}}
                            />
                    <Text style={{marginLeft:15,fontSize:20}}>Mamahkost</Text>
                    </View>
                    <View style={{flex:2,backgroundColor:'white'}}></View>
               </View>

              <View style={{backgroundColor:'white',flexDirection:'row',height:70}}>
                  <Navbar img={require('../../assets/kost.png')}/>
                  <Navbar img={require('../../assets/pekerjaan.png')}/>
                  <Navbar img={require('../../assets/title.png')}/>
                  <Navbar img={require('../../assets/pekerjaan.png')}/>
              </View>

              <View style={{flex:1,backgroundColor:'white'}}>
                  <View>
                          <Text style={{fontSize:25,paddingLeft:26}}>Hai,</Text>
                          <Text style={{fontSize:33,paddingBottom:14,paddingLeft:24}}>Mau Cari Kost di Mana ?</Text>   
                  </View>
                 
                        
                  <View style={{backgroundColor:'white',paddingVertical:20,paddingHorizontal:22,flex:1}}>
                    <View style={{backgroundColor:'#dbd5d5',flex:1,padding:15,borderRadius:15,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Icon name="ios-search" style={{color:'gray'}} />
                        <Text style={{flex:1,color:'gray',padding:10}}
                        onPress={() =>this.props.navigation.navigate('Search')}
                        >Masukan nama dan alamat anda</Text>
                         {/* navigate("Screenone", {screen: "Screen one"}) */}
                    </View>
                </View>
            
              </View>
                <View style={{backgroundColor:'#e3e4e6',height:15}}></View>
                
              <View style={{flex:1,backgroundColor:'white'}}>
                  <View>
                  <Text style={{fontSize:25,paddingLeft:26,flex:1,paddingBottom:20,marginTop:20}}>PROMO</Text>
                  </View>

                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ImagePromo />
                    <ImagePromo />
                  </ScrollView>

              </View>

                <View style={{backgroundColor:'white',paddingVertical:20,paddingHorizontal:22,flex:1}}>
                    <View style={{backgroundColor:'#04c451',flex:1,padding:15,flexDirection:'row',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{flex:1,color:'white'}}>Login,Anda pemilik kost</Text>
                        <View><Button bordered light style={{padding:10,flex:1,borderRadius:7}}>
                            <Text style={{color:'white'}}>Light</Text>
                            </Button>
                        </View>
                    </View>
                </View>

          {/* flex:1 membrikan nilai keseluruh layar */}
          <Text style={{fontSize:30,marginTop:25,marginLeft:24}}>Kota Populer</Text>
              <View style={{flex:1,backgroundColor:'white',height:100,marginTop:30,borderColor:'red',flexDirection:'row',marginBottom:20,alignItems:'center',justifyContent:'center'}}>
            
                <ScrollView
                horizontal={true}>
                    <BottomImage img={require('../../assets/home.jpg')}/>
                    <BottomImage img={require('../../assets/city2.png')}/>
                    <BottomImage img={require('../../assets/city1.png')}/>
                    <BottomImage img={require('../../assets/city3.png')}/>
                    <BottomImage img={require('../../assets/home.jpg')}/>
                    <BottomImage img={require('../../assets/city1.png')}/> 
                  </ScrollView>

              </View>
              {/* view defaultnya nampil colom, */}
             </ScrollView> 
            
              
          </View>
       
         );
    }
}


class Dua extends Component {
    state = {  }
    render() { 
        return (<View><Text>Dasbhord</Text></View>  );
        
    }
}
 
const AppSwitchNavigator = createStackNavigator({
    Satu :{screen :Satu},
    Search :{screen :Search}
})

const AppContainer = createAppContainer(AppSwitchNavigator)

