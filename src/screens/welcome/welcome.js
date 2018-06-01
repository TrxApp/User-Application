import React from 'react';
import { View, Modal } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, H1, Form, Item, Input, Label, Button} from 'native-base';
import styles from './styles';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    var { navigate } = this.props.navigation;
    return(
        <Container style={styles.container}>
          <Grid>
            <Row size={60}>
            <H1 style={styles.headerStyle}>Welcome</H1>
            </Row>
            <Row size={20 }>
              <Button
                style={styles.buttonStyle1}
                light
                onPress={
                () => navigate('Login', {})
              }>
                <Text>Login</Text>
              </Button>
              </Row>
              <Row size={20}>
              <Button
                light
                style={styles.buttonStyle2}
                onPress={
                () => navigate('Signup', {})
              }>
                <Text>Signup</Text>
              </Button>
              </Row>
            </Grid>
        </Container>
    );
  }

}
