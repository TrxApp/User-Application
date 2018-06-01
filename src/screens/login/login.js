import React from 'react';
import { View, Modal } from 'react-native';
import t from 'tcomb-form-native';
const util = require('util');
import { Container, Header, Right, Content, Text, H1, Form, Item, Input, Label, Toast, Button} from 'native-base';
import styles from './styles';

export default class login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };


  constructor(props) {
    super(props);
    this.state={
      error: '',
      email: '',
      password:'',
      token: ''
    }
  }

  render() {
    const Form = t.form.Form;

    const User = t.struct({
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
          <Text>LogIn</Text>
        </Button>
        <Button
          onPress={
            () => navigate('Dashboard', {token: this.state.token, email: this.state.email})
          }
        >
        <Text>Navigate</Text>
      </Button>
        </View>
    );
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.setState({
      email: value.email
    });
    fetch('http://localhost:8080/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.message === 'Auth failed') {
            console.log('Wrong Login!');
          } else {
            console.log(responseJson);
            this.setState({
              token: responseJson.token
            });
            this.loginSucess();
          }
          return responseJson;
        })
        .catch((error) => {
          console.log('duuuude');
        });
      }

    loginSucess = () => {
      console.log(this.state.token)
    }
  }
