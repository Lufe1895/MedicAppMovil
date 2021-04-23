import React from 'react';
import { Container, Content, Card, CardItem, Text, Footer, Header } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Heading from '../Components/Heading';
import Nav from '../Components/Nav';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      nombre: '',
      apellido: '',
      usuario: '',
      correo: '',
      pass: '',
      isLogin: false
    };
  }

  login = async () => {
    let userData = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      usuario: this.state.usuario,
      correo: this.state.correo,
      pass: this.state.pass,
      isLogin: true
    }
    AsyncStorage.setItem('userData', JSON.stringify(userData))
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Container>
        <Header>
          <Text style={ styles.text }>Mi Aplicación Móvil</Text>
        </Header>
        <Content padder style={ styles.content }>
          <Card>
            <CardItem header bordered>
              <Text style={ styles.title }>Registro</Text>
            </CardItem>

            <CardItem>
              <TextInput full placeholder="Nombre" onChangeText={(nombre) => this.setState({nombre})}></TextInput>
            </CardItem>

            <CardItem>
              <TextInput full placeholder="Apellido" onChangeText={(apellido) => this.setState({apellido})}></TextInput>
            </CardItem>

            <CardItem>
              <TextInput full placeholder="Usuario" onChangeText={(usuario) => this.setState({usuario})}></TextInput>
            </CardItem>

            <CardItem>
              <TextInput full placeholder="Correo" onChangeText={(correo) => this.setState({correo})}></TextInput>
            </CardItem>

            <CardItem bordered></CardItem>

            <CardItem>
              <TextInput full placeholder="Contraseña" secureTextEntry={ true } onChangeText={(pass) => this.setState({pass})}></TextInput>
            </CardItem>

            <CardItem>
              <TextInput full placeholder="Confirmar Contraseña" secureTextEntry={ true }></TextInput>
            </CardItem>

            <CardItem footer button styles={ styles.button } bordered>
              <Text style={ styles.buttonStyle } onPress={ this.login }>Registrarme</Text>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <Nav navigation={ this.state.navigation }/>
        </Footer>
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
    marginLeft: 220
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

export default Register;