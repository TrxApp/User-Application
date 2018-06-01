import React from 'react';
import { View, Modal } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, Footer, FooterTab, Button, Card, CardItem, H1, Body, Icon, List, ListItem } from 'native-base';
import styles from './styles';

export default class personalDetails extends React.Component {
  static navigationOptions = {
    title: 'Personal Details',
    headerRight: (
      <Button
        transparent>
        <Text>Edit</Text>
      </Button>
    ),
  };

  constructor(props) {
    super(props);
    this.state={user: {}}
  }

  componentWillMount() {
    const { email } = this.props.navigation.state.params;
    return fetch('http://localhost:8080/user/' + email)
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
  //
  // state= {
  //   modalVisible: false
  // }

  render() {
    var { navigate } = this.props.navigation;
    return(
      <Container>
        <Content>
          <H1 style={styles.headerStyle}>Personal Details</H1>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Name: </Text><Text>{this.state.user.name}</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Phone: </Text><Text>{this.state.user.phone}</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Address: </Text><Text>{this.state.user.address}</Text>
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{fontWeight: 'bold'}}>Health Card Number: </Text><Text>{this.state.user.healthCard}</Text>
                  </Text>
                </Body>
              </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
