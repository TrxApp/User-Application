import React from 'react';
import { Text, View } from 'react-native';
const util = require('util');
import { Container, Header, Content, Footer, FooterTab, Button, Icon, H3, H1, Card, CardItem, Body, List, ListItem } from 'native-base';
import styles from './styles';

export default class dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
    headerLeft: null
  };

  constructor(props) {
    super(props);
    this.state={movies: {}}
  }

  componentWillMount() {
    const { email } = this.props.navigation.state.params;
    return fetch('http://localhost:8080/user/' + email)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          movies: responseJson
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
    var { params } = this.props.navigation.state;
    console.log(params);
    return(
      <Container>
        <Content>
          <Card style={{height: 150}}>
            <CardItem style={styles.pointsCard} style={{height: 150, backgroundColor: 'rgba(97, 63, 105, 0.3)',}}>
              <Body
                style={
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }
                }>
                <Text>
                   <H1>Welcome, {this.state.movies.name}</H1>
                </Text>
                <Text>
                  You currently have 1450 points!
                </Text>
              </Body>
            </CardItem>
          </Card>
          <List>
            <ListItem>
              <Button full large transparent onPress={
                  () => navigate('UploadPrescription', {email: this.state.movies.email})
                }>
                <Icon name='add' style={{color: 'black', fontSize: 40}} />
                <H3>Order Prescription</H3>
              </Button>
            </ListItem>
            <ListItem>
              <Button full large transparent onPress={
                  () => navigate('Insurance', {email: this.state.movies.email})
                }>
                <Icon name='card' style={{color: 'black', fontSize: 40}} />
                <H3>Insurance Information</H3>
              </Button>
            </ListItem>
            <ListItem>
              <Button full large transparent onPress={
                  () => navigate('PersonalDetails', {email: this.state.movies.email})
                }>
                <Icon name='person' style={{color: 'black', fontSize: 40}} />
                <H3>Personal Details</H3>
              </Button>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              onPress={
                () => navigate('UploadPrescription', {})
              }>
              <Icon name="camera" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              onPress={
                () => navigate('Settings', {})
              }>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
