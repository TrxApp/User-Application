import React from 'react';
import { View } from 'react-native';
const util = require('util');
import { Container, Header, Content, Text, Footer, FooterTab, Button, Icon, H1 } from 'native-base';
import styles from './styles';

export default class orderConfirmed extends React.Component {
  static navigationOptions = {
    title: 'Order Confirmed',
    headerLeft: null
  };
  render() {
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <Content>
          <H1 style={styles.headerStyle}>Sit tight! Your Prescription is being prepared!</H1>
        </Content>
      </Container>
    );
  }
}
