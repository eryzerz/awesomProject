import React, { Component } from 'react';
import {View,Text,ScrollView ,Image,TextInpu,FlatList,TextInput,TouchableOpacity} from 'react-native';
import { Container, Header, Tab, Icon,Title,Item,Input,Card,CardItem,Left,Button,Body,Right,Content, Accordion} from 'native-base';

const dataArray = [
    { title: "Jakarta", content: "Universits Indonesia" },
    { title: "Bandung", content: "Institut Tinggi Bandung" },
    { title: "Bali", content: "Udayana Bali" }
  ];
 

const handleSearch = (e)=> {
    if(e.key == 'enter'){
        alert('comming soon')
    }
}

class Search extends Component {
    // static navigationOptions = {
    //     header: null,
    //   };
    constructor(props) {
        super(props);
        this.state = { 
            text: '' };
      }
      
    state = {  }
    
    render() { 
       
        return ( 
                    <View style={{flex:1,backgroundColor:'white'}}>
                       
                            <View style={{backgroundColor:'white',height:50,paddingHorizontal:20}}>
                               <TextInput style={{borderColor:'gray',borderWidth:0.7,borderRadius:10}}
                                   placeholder='Searching'
                                   onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    onKeyUp={this.handleSearch}
                               />
                            </View>
                            <View style={{backgroundColor:'white',height:50}}>
                                <FlatList
                                data={[
                                    {key: this.state.text},
                                    
                                ]}
                                renderItem={({item}) =>  <Card>
                                <CardItem>
                                <Icon active name="logo-googleplus" />
                                <Text>{item.key}</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                                </CardItem>
                            </Card>}
                            />
                           

                            </View>
                            {/* <View style={{backgroundColor:'white',height:50,flexDirection:'row'}}>
                            <Icon active name="logo-googleplus" />
                            <Text onPress={()=> {alert('ok')}}>Lokasi sekitar</Text>
                            </View> */}

                            <View style={{backgroundColor:'white',height:50,fontSize:15,flexDirection:'row',padding:15,alignText:'center',
                            borderWidth:0.7,borderColor:'gray'}}>
                                <TouchableOpacity>
                                <View style={{flex:1,backgroundColor:'white'}}>
                                   <Text>Kampus</Text>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{flex:1,backgroundColor:'white'}}>
                                        <Text>Area</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <View style={{flex:1,backgroundColor:'white'}}>
                                    <Text>stasiun</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            {/* <View style={{flex:1,backgroundColor:'white',flexDirection:'row'}}> */}
                                <View style={{backgroundColor:'white',height:50,padding:20,flexDirection:'row',justifyContent:'center'}}>
                                
                                    <View style={{flex:1}}><Text onPress={()=> {alert('ok')}}>{this.state.text}</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>{this.state.text}</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>{this.state.text}</Text></View>
                                
                                </View>
                                <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                </View>
                                <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                                    
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                    <View style={{flex:1}}><Text  onPress={()=> {alert('ok')}}>University</Text></View>
                                </View>
                                <View style={{padding:20}}><Text style={{fontSize:20}}>Kampus of City</Text></View>
                                <View style={{flex:1,backgroundColor:'#dbd5d5'}}>
                                    <Content padder>
                                    <Accordion
                                        dataArray={dataArray}
                                        icon="add"
                                        expandedIcon="remove"
                                        iconStyle={{ color: "green" }}
                                        expandedIconStyle={{ color: "red" }}
                                    />
                                    </Content>
                                </View>

                    </View>

                 );
    }
}
 
export default Search;

