import React from 'react';
import { Container, Text, Footer } from 'native-base';
import { StyleSheet } from 'react-native';

class Foot extends React.Component {
    render() {
        return(
            <Container>
                <Footer>
                    <Text style={ styles.text }>Luis Fernando Antonio Toral</Text>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        marginTop: 25
    }
});

export default Foot;