import React from 'react';
import { Container, Text, Header } from 'native-base';
import { StyleSheet } from 'react-native';

class Heading extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Text style={ styles.text }>Mi Aplicación Móvil</Text>
                </Header>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15
    }
});

export default Heading;