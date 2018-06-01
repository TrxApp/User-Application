import React from 'react';
import { View, Alert } from 'react-native';
const util = require('util');
import { Container, Header, Content, Text, Footer, FooterTab, Form, Picker, Button, H1, H3, Card, CardItem, Body } from 'native-base';
import styles from './styles';

export default class selectPharmacy extends React.Component {
  static navigationOptions = {
    title: 'Select Pharmacy'
  };

  constructor(props) {
   super(props);
   this.state = {
     pharmacies: [],
     latitude: null,
      longitude: null,
      error: null,
   };
 }

 componentWillMount() {
   navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    fetch('http://localhost:8080/pharmacies')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          pharmacies: responseJson
        })
        console.log(responseJson);
        console.log(responseJson.length);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
 }
  render() {
    var { navigate } = this.props.navigation;
          const pharmacies = this.state.pharmacies.map((pharmacy) =>
          <Card>
            <CardItem header bordered>
              <Text>{pharmacy.name}</Text>
            </CardItem>
          </Card>
        );
      return(
            <Container>
              <Content>
                <H1 style={styles.headerStyle}>Please Select Your Pharmacy</H1>
                <H3>Your Nearest Pharmacies:</H3>
                {pharmacies}
          <Text>{this.state.latitude}</Text>
          <Text>{this.state.longitude}</Text>
                <Button
                  onPress={
                  () => navigate('PatientOptions', {})
                }>
                  <Text>Patient Options</Text>
                </Button>
        </Content>
      </Container>
    );
  }
}
