import React, { Component } from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';

class Profile extends Component {
    state = {  }
    render() { 
        return ( <View style={{flex:1,backgroundColor:"gray"}}>
                    <View style={{height:50,backgroundColor:'#04c451',flexDirection:'row'}}>
                            <View style={{flex:1,backgroundColor:'#04c451',paddingTop:10,flexDirection:'row',justifyContent:'center',textalign:'center',paddingLeft:30}}>
                                    <Image source={require('../../assets/title.png')}
                                        style={{width:35,height:35}}
                                    />
                                </View>
                            <View style={{backgroundColor:'#04c451',flex:1}}>
                                    <Text style={{color:'white'}}>Username</Text>
                                    <Text style={{color:'white'}}>08231321</Text>
                            </View>
                            <View style={{backgroundColor:'#04c451',flex:1}}></View>
                            <View style={{backgroundColor:'#04c451',flex:1}}>
                                <Text style={{paddingTop:10,color:'white'}}>Profile</Text>
                            </View>
                    </View>
                    <View style={{backgroundColor:'white',paddingVertical:5,paddingHorizontal:5}}>
                        <View style={{backgroundColor:'white',padding:15,flexDirection:'row',height:70,borderRadius:10,justifyContent:'center',}}>
                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity >
                                    <Image style={{width:35,height:35
                                            }} source={require('../../assets/kost.png')}/>
                                            <Text style={{paddingLeft:5,color:'white'}}>Kontrak</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity >
                                    <Image style={{width:35,height:35
                                            }} source={require('../../assets/kost.png')}/>
                                            <Text style={{paddingLeft:5,color:'white'}}>Tagihan</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity >
                                    <Image style={{width:35,height:35
                                            }} source={require('../../assets/kost.png')}/>
                                            <Text style={{paddingLeft:5,color:'white'}}>Komplain</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <TouchableOpacity >
                                    <Image style={{width:35,height:35
                                            }} source={require('../../assets/kost.png')}/>
                                            <Text style={{paddingLeft:5,color:'white'}}>Kios</Text>
                                </TouchableOpacity>
                            </View>
                               
                        </View>
                    </View>
                    <View style={{flex:1,backgroundColor:'gray'}}></View>

                 </View> 
        );
    }
}
 
export default Profile;