import { Container, Content, Footer, Header, Text } from 'native-base';
import React, { Component} from 'react';
import { StyleSheet, FlatList} from 'react-native';
import Nav from "../Components/Nav";
import API from '../Utils/API';
import ItemLayout from '../Components/ItemFavLayout';
class Favs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: props.navigation
        };
    }
    async componentDidMount() {
      let response = await API.getFav();
      this.setState({result: response.data.movies })
    }
    render() {
        return(
          <Container>
            <Header>
                <Text style={ styles.text }>Favoritas</Text>
            </Header>

            <FlatList data={ this.state.result } keyExtractor= {(x, i) => i.toString()} renderItem={ (item) => <ItemLayout datos={ item } navigation={ this.state.navigation } /> } />

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

export default Favs;