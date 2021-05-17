import  React, { Component} from "react";
import {Container, Content, Footer, Header, Label, Left, ListItem, Radio, Right, Text, Card, CardItem, Body, Button } from "native-base";
import { StyleSheet, Image, View, Divider } from 'react-native';
import Nav from "../Components/Nav";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        };
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
                                            <Label>Calamardo</Label>
                                            <Label>Guapo</Label>
                                            <Label>30 / 02 / 2010</Label>  
                                        </View>
                                </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem header>
                                <Text>Categorias</Text>
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
                        <Card>
                            <CardItem header>
                                <Text>Clasificacion</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <View style={styles.viewHeader}>
                                        <Button disables rounded>
                                            <Text>A</Text>
                                        </Button>
                                        <Label> </Label>
                                        <Button disables rounded>
                                            <Text>B</Text>
                                        </Button>
                                        <Label> </Label>
                                        <Button disables rounded>
                                            <Text>C</Text>
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