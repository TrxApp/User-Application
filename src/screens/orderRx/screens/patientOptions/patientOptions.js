import React from 'react';
import { View } from 'react-native';
const util = require('util');
import { Container, Header, Content, Text, Footer, FooterTab, Button, Icon, H1, Card, CardItem, Body } from 'native-base';
import styles from './styles';

export default class patientOptions extends React.Component {
  static navigationOptions = {
    title: 'Patient Options',
    headerRight: (
      <Button
        transparent>
        <Text>Edit</Text>
      </Button>
    ),
  };
  render() {
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <Content>
          <H1 style={styles.headerStyle}>Confirm Patient Information</H1>
            <Card>
              <CardItem header>
                <Text>Patient Information</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Name: </Text><Text>Ahmed Panju</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Phone: </Text><Text>416-XXX-XXXX</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Address: </Text><Text>123 Example Street, Toronto, ON</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Health Card Number: </Text><Text>1234-123-123</Text>
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem header>
                <Text>Insurance Information</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Greensheid: </Text><Text>123-456-789</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Manulife: </Text><Text>123-456-789</Text>
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Button
              onPress={
                () => navigate('OrderConfirmed', {})
              }>
              <Text>Confirm Order</Text>
            </Button>
        </Content>
      </Container>
    );
  }
}
