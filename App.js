import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content,FooterTab, Button, Icon,Footer, Form, Item, Input, Label} from "native-base";
// import {StackNavigator} from 'react-navigation';
//import Footer from './src/Footer';

class App extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left/>
        <Body>
          <Title>Login</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.container}>
      <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button style={styles.red}><Text> Sign in </Text></Button>
      </Content>
      {/* <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer> */}
    </Container>
    );
  }
}
 
export default App;

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  // container:{
  //   flexDirection:'row',
  // },
  red: {
    color: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    flex:1

  },
});