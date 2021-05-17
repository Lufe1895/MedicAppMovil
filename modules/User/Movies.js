import React, { Component } from 'react';
import { Container, Header, Text, Footer } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

import API from '../Utils/API';

import ItemLayout from '../Components/ItemLayout';
import Nav from '../Components/Nav';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            result: ''
        };
    }

    async componentDidMount() {
        let response = await API.getData();
        this.setState({result: response.data.movies })
    }
    
    render() {
        return( 
            <Container>
                <Header>
                    <Text style={ styles.text }>Películas</Text>
                </Header>

                <FlatList data={ this.state.result } keyExtractor= {(x, i) => i.toString()} renderItem={ (item) => <ItemLayout datos={ item } navigation={ this.state.navigation } /> } />

                <Footer>
                    <Nav navigation={ this.state.navigation } />
                </Footer>
            </Container>
        );
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
    }
  })

export default Movies;