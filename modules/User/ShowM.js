import { Container, Content, Footer, Header, Text, Label, View, Switch, CheckBox } from 'native-base';
import React, { Component} from 'react';
import { Image, StyleSheet} from 'react-native';
import Nav from "../Components/Nav";
import API from '../Utils/API';
class ShowM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            response: ''
        };
    }

    async componentDidMount() {
        // console.log("Show: " + this.props.route.params.id);
        let response = await API.getMedicinesItem(this.props.route.params.id);
        this.setState({response: response})
        // console.log(this.state.response.name);
    }

    render() {
        
        return(
            <Container>
                <Header>
                    <Text style={ styles.text }>{this.state.response.name}</Text>
                </Header>
                <Content>
                    <Label> </Label>
                    <View  style={styles.image}>
                        <Image source={{uri: this.state.response.image}} style={{height:300, width:300}} />
                    </View>
                    <Label> </Label>
                    <Label style = {styles.body}>Nombre</Label>
                        <Text> {this.state.response.name}</Text>
                    <Label> </Label>
                    <Label style = {styles.body}>Dosis</Label>
                        <Text> {this.state.response.dosis} </Text>
                    <Label> </Label>
                    <Label style = {styles.body}>Descripcion</Label>
                        <Text> {this.state.response.description}</Text>
                    <Label> </Label>
                    <Label style = {styles.body}>Precio</Label>
                        <Text> {this.state.response.cost}</Text>
                </Content>
                <Footer>
                    <Nav navigation={ this.state.navigation } />
                </Footer>
            </Container>
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
    body:{
        fontSize: 15,
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
    image: {
        
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewHeader:{
        flex:1, 
        flexDirection: "row",
        flexWrap: "wrap"
    }
  })

export default ShowM;