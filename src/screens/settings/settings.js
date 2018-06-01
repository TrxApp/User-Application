import React from 'react';
import { View, Modal } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, H1, Form, Item, Input, Label, Button} from 'native-base';

export default class settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <H1>Settings</H1>
      </Container>
    );
  }

}
