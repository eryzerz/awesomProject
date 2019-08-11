import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { Container,Footer,FooterTab, Header,Title,Item,Input, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default class App1 extends Component {
//   constructor(){
//     super();
//     this.state = ({
//       active : false
//     })
//   }
//   onpress = (items)=> {

// }
  render() {
    return (
      <Container>
        <Content>
            <Text style={{fontSize:25,paddingLeft:14}}>Hai,</Text>
            <Text style={{fontSize:27,paddingBottom:14,paddingLeft:10}}>Mau Cari Kost di Mana ?</Text>

           <Item searchBar rounded>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
           
          </Item>
            <Text 
            
            style={{fontSize:20,paddingLeft:14}}>Promo</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        color:'green',
    },
    footer : {
        backgroundColor:'white'
    }
})

