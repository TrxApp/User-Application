import React from 'react';
import { View, Modal } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, Footer, FooterTab, Button, Card, CardItem, H1, Body, Icon } from 'native-base';
import styles from './styles';

export default class insurance extends React.Component {
  static navigationOptions = {
    title: 'Insurance',
  };

  constructor(props) {
    super(props);
    this.state={user: []}
  }

  componentWillMount() {
    const { email } = this.props.navigation.state.params;
    return fetch('http://localhost:8080/insurance/' + email)
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
    const insurance = this.state.user.map((insurance) =>
    <Card>
      <CardItem header bordered>
        <Text>{insurance.name}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>
            {insurance.memberID}
          </Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Button
          onPress={
          () => navigate('SingleInsurance', {id: insurance._id})
        }>
          <Text>View More</Text>
        </Button>
      </CardItem>
    </Card>
    );
    return(
      <Container>
        <Content>
          <H1 style={styles.headerStyle}>Insurance Information</H1>
          {insurance}
        </Content>
      </Container>
    );
  }
}
