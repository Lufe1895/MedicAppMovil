import React from 'react';
import { Container, Text, Footer } from 'native-base';
import { StyleSheet, Image } from 'react-native';

import Heading from '../Components/Heading';
import Nav from '../Components/Nav';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          navigation: props.navigation,
        };
    }

    render() {
        return(
            <Container style={ styles.container }>
                <Heading />
                    <Container>
                        <Text style={ styles.title1 }>BIENVENIDO</Text>
                        <Text style={ styles.title2 }>a mi aplicación móvil</Text>
                        <Image source={ require('../Images/nube.gif')} style={ styles.img }/>
                    </Container>
                <Footer>
                    <Nav navigation={ this.state.navigation } />
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title1: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: -200,
        fontWeight: 'bold'
    },
    title2: {
        fontSize: 30,
        textAlign: 'center'
    },
    footerText: {
        color: 'white',
        marginTop: 30
    },
    img: {
        flex: 0.7
    }
});

export default Welcome;