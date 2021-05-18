import React from 'react';
import { Container, Content, Card, CardItem, Text, Header } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import API from '../Utils/API';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      email: '',
      password: '',
      isLogin: false
    };
  }

  async loguear() {
    Alert.alert("Funciono");
    let data = await API.login('user@example.com', '12345678');
    console.log(data);
    
  }

  render() {
    return (
      <Container>
        <Header>
          <Text style={ styles.text }>Login</Text>
        </Header>
        
        <Content padder style={ styles.content }>
          <Card>
            <CardItem header bordered>
              <Text style={ styles.title }>Inicio de Sesión</Text>
            </CardItem>

            <CardItem TextInput>
              <TextInput full placeholder="Correo" value={ this.state.email } onChangeText={(email) => this.setState({email})}></TextInput>
            </CardItem>

            <CardItem TextInput>
              <TextInput full placeholder="Contraseña" value={ this.state.password } secureTextEntry={ true } onChangeText={(password) => this.setState({password})}></TextInput>
            </CardItem>

            <CardItem footer button styles={ styles.button } bordered>
              <Text style={ styles.buttonStyle } onPress={ this.loguear }>Iniciar Sesión</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  footerText: {
    color: 'white',
    marginTop: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    color: 'blue'
  },
  buttonStyle: {
    textAlign: 'center',
    marginLeft: 200
  },
  content: {
    //marginTop: -250
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15
  }
})

export default Login;