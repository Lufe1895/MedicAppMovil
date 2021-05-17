import { Container, Content, Footer, Header, Text, Label, View, Switch, CheckBox } from 'native-base';
import React, { Component} from 'react';
import { Image, StyleSheet} from 'react-native';
import Nav from "../Components/Nav";
import API from '../Utils/API';
class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            response: ''
        };
    }

    async componentDidMount() {
        console.log("Show: " + this.props.route.params.id);
        let response = await API.getMovie(this.props.route.params.id);
        this.setState({response: response.data.movie})
        console.log(this.state.response.title);
    }

    render() {
        
        return(
            <Container>
                <Header>
                    <Text style={ styles.text }>{this.state.response.title_long}</Text>
                </Header>
                <Content>
                    <Label> </Label>
                    <View  style={styles.image}>
                        <Image source={{uri: this.state.response.large_cover_image}} style={{height:308, width:220}} />
                    </View>
                    <Label> </Label>
                    <Label style = {styles.body}>Sinopsis</Label>
                    <Text> {this.state.response.description_full}</Text>
                    <Label> </Label>
                    <Label style = {styles.body}>Genero</Label>
                    <Text> {this.state.response.genres} </Text>
                    <Label> </Label>
                    <Label style = {styles.body}>Puntuación</Label>
                    <Text> {this.state.response.rating}</Text>
                    <Label> </Label>
                    <View style={styles.viewHeader}>
                        <Text style={styles.body}>Favorito</Text>
                        <Label> </Label>
                        <Switch value={false}></Switch>
                    </View>
                    <Label> </Label>
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

export default Show;