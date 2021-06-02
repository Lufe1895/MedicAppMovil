import React, { Component } from 'react';
import { Container, Header, Text, Footer } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ItemLayoutPedidos from '../Components/ItemLayoutPedidos';
import Nav from '../Components/Nav';

class Pedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation,
            result: ''
        };
    }

    async componentDidMount() {
        let pedidos = await AsyncStorage.getItem('pedidosclient')
        pedidos = JSON.parse(pedidos);
        this.setState({result: pedidos.pedidos})
        //console.log("Pedidos",pedidos);
        
    }
    
    render() {
        return( 
            <Container>
                <Header>
                    <Text style={ styles.text }>Pedidos</Text>
                </Header>

                <FlatList data={ this.state.result } keyExtractor= {(x, i) => i.toString()} renderItem={ (item) => <ItemLayoutPedidos datos={ item } navigation={ this.state.navigation } /> } />

                {/* <Footer>
                    <Nav navigation={ this.state.navigation } />
                </Footer> */}
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

export default Pedidos;