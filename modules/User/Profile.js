import  React, { Component} from "react";
import {Container, Content, Footer, Header, Label, Left, ListItem, Radio, Right, Text, Card, CardItem, Body, Button } from "native-base";
import { StyleSheet, Image, View, Divider } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Nav from "../Components/Nav";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        };
    }

    async componentDidMount() {
        let userData = await AsyncStorage.getItem('userData')
        userData = JSON.parse(userData)
        if(userData){
          this.setState(
              {
                name : userData.name, 
                lastname: userData.lastname,
                email: userData.email, 
                phone: userData.phone,
                address: userData.address,
                sex: userData.sex,
                age: userData.age
              })
        }else{
          console.log('LoginComponent', "userData: is null");
        }
      }

    render() {
        return(
            <View style={styles.view}>
                <Container>
                    <Header>
                        <Text style={ styles.text }>Perfil</Text>
                    </Header>
                    <Content>
                        <Card>
                            <CardItem>
                                <Body>
                                    <View style={styles.viewHeader}>
                                        <View>
                                            <Image source={ require('../Images/iconCalamarco.png')} style={ styles.image }></Image>
                                        </View>
                                        <Label> </Label>
                                        <View>
                                            <Label>{this.state.name}</Label>
                                            <Label>{this.state.lastname}</Label>
                                            <Label>{this.state.age}</Label>  
                                            <Label>{this.state.email}</Label>
                                        </View>
                                </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text>Pedidos</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View style={styles.viewHeader}>
                                        <Button disables rounded style={styles.button}>
                                            <Text>Acción</Text>
                                        </Button>
                                        <Label> </Label>
                                        <Button disables rounded style={styles.button}>
                                            <Text>Comedia</Text>
                                        </Button>
                                        <Label> </Label>
                                        <Button disables rounded>
                                            <Text>Terror</Text>
                                        </Button>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                    <Footer>
                        <Nav navigation={ this.state.navigation } />
                    </Footer>
                </Container>
            </View>
            
        )
    }
}

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
    },
    image:{
        height: 100,
        width: 100
    },
    view:{
        flex: 1,
        flexDirection: "column"
    },
    viewHeader:{
        flex:1, 
        flexDirection: "row",
        flexWrap: "wrap"
    }
  })

export default Profile;