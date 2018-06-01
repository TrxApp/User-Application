import React from 'react';
import { View, Modal } from 'react-native';
const util = require('util');
import { Container, Header, Right, Content, Text, H1, Form, Item, Input, Label, Button} from 'native-base';
import t from 'tcomb-form-native';
import styles from './styles';

export default class signup extends React.Component {
  static navigationOptions = {
    title: 'Signup',
  };

  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        firstName: '',
          lastName: '',
          email: '',
          password: ''
        }
    };
  }


  render() {
    const Form = t.form.Form;

    const User = t.struct({
      name: t.String,
      phone: t.Number,
      address: t.String,
      healthCard: t.Number,
      email: t.String,
      password: t.String,
    });

    var { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
          <Form
            ref={c => this._form = c} // assign a ref
            type={User}
          />
          <Button
            onPress={this.handleSubmit}
          >
          <Text>Signup</Text>
        </Button>
        <Button
          onPress={
            () => navigate('Dashboard', {token: this.state.token})
          }
        >
        <Text>Navigate</Text>
      </Button>
        </View>
    );
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: value.name,
        phone: value.phone,
        address: value.address,
        healthCard: value.healthCard,
        email: value.email,
        password: value.password,
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.log('duuuude');
        });
      }

    // loginSucess = () => {
    //   console.log(this.state.token)
    // }
}
