import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Footer,Left,Right,Body,Title } from 'native-base';
import App from './App';
import App1 from './App1';
// import App3 from './App3';

export default class App2 extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'white'}}>
        <Left/>
          <Body>
            <Title style={{color:'green'}}>MamahKost</Title>
          </Body>
          <Right />
      </Header> 
      
        <Tabs hasTabs>
                <Tab heading={ <TabHeading><Icon name="home" /></TabHeading>}>
                    <App1 />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="navigate" /></TabHeading>}>
                    <App />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="cart" /></TabHeading>}>
                    <App1 />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="flask" /></TabHeading>}>
                    <App />
                </Tab>
                </Tabs>
     
      </Container>
    );
  }
}







