import React from 'react';
import { Container, Content, Card, CardItem, Text, Footer, Header, Button, Body } from 'native-base';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, FlatList, Item, Alert, Modal, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Nav from '../Components/Nav';

import API from '../Utils/API';

import ItemLayout from '../Components/ItemLayout';

class Login extends React.Component {
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

  async componentDidMount() {
    //console.log("LoginComponent: ", this.props.route.params);

    let userData = await AsyncStorage.getItem('userData');
    userData = JSON.parse(userData);
    if(userData) {
      console.log('LoginComponent: ', userData);
      this.setState({ 
        nombre: userData.nombre,
        apellido: userData.apellido,
        usuario: userData.usuario,
        correo: userData.correo,
        pass: userData.pass,
        result: '',
        isLogin: userData.isLogin
      })
    } else {
      console.log('LoginComponent: ', "userData: is null");
    }
  }

  getData = async () => {
    let response = await API.getData();
    this.setState({result: response.data.movies })
  }

  loguear = async () => {
    Alert.alert(this.state.nombre + " " + this.state.apellido + " " + this.state.usuario + " " + this.state.correo);
        console.log("Entro");
        //AsyncStorage.removeItem('userData');
  }

  render() {
    const row = ({ item }) => {
      return (
        <Item 
          item = { item }
          onPress = { () => console.log(item.id) }
        />
      )
    }

    const Item = ({ item, onPress}) => (
      <TouchableOpacity onPress={ onPress }>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontStyle: 'italic' }}>{ item.title }</Text>
          </CardItem>

          <CardItem bordered>
            <Body>
              <Text>{ item.summary }</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    )

    return (
      <Container>
        <Header>
          <Text style={ styles.text }>Mi Aplicación Móvil</Text>
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

        <FlatList data={ this.state.result } keyExtractor= {(x, i) => i.toString()} renderItem={ (item) => <ItemLayout datos={ item } /> } />

        <Button full onPress={ this.getData }><Text>Presióname</Text></Button>

        <Footer>
          <Nav navigation={ this.state.navigation } />
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