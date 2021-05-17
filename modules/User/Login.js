import React from 'react';
import { Container, Content, Card, CardItem, Text, Footer, Header, Button, Body } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, FlatList, Item, Alert, Modal, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Nav from '../Components/Nav';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      correo: '',
      pass: '',
      isLogin: false
    };
  }

  loguear = () => {
    if(this.state.correo == 'Calamardo' && this.state.pass == 'guapo') {
      this.props.navigation.navigate('Movies');
    } else {
      Alert.alert("El correo o la contraseña son incorrectos");
    }
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
              <TextInput full placeholder="Correo" value={ this.state.correo } onChangeText={(correo) => this.setState({correo})}></TextInput>
            </CardItem>

            <CardItem TextInput>
              <TextInput full placeholder="Contraseña" value={ this.state.pass } secureTextEntry={ true } onChangeText={(pass) => this.setState({pass})}></TextInput>
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