import React from 'react';
import { View, Modal, Alert } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, H1, Form, Item, Input, Label, Button, Card, CardItem, Body } from 'native-base';

export default class singleInsurance extends React.Component {
  static navigationOptions = {
    title: 'Single Insurance',
    headerRight: (
      <Button
        transparent>
        <Text>Edit</Text>
      </Button>
    ),
  };

  constructor(props) {
    super(props);
    this.state={user: []}
  }

  componentWillMount() {
    const { id } = this.props.navigation.state.params;
    return fetch('http://localhost:8080/insurance/single/' + id)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          user: responseJson
        })
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <H1>Insurance Details</H1>
          <Card>
            <CardItem header bordered>
              <Text>{this.state.user.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Member ID: </Text><Text>{this.state.user.memberID}</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Group Number: </Text><Text>{this.state.user.groupNumber}</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Relationship: </Text><Text>{this.state.user.relationship}</Text>
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button block danger
            onPress={this.confirmDelete}>
             <Text>Delete Insurance Record</Text>
           </Button>
      </Container>
    );
  }

  confirmDelete () {
    Alert.alert(
      'Delete Insurane Record',
      'Are you sure you want to delete this insurance record?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Delete', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

}
