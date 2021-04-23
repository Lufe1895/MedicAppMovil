import React, {Component} from 'react';
import { List, ListItem, Row, Col, Text } from 'native-base';
import { Image, View, StyleSheet } from 'react-native';

function Resume(props) {
    return(
        <View style={ styles.container }>
            <View  style={ styles.image } >
                <Image source={{ uri:'https://previews.123rf.com/images/julioaldana/julioaldana1402/julioaldana140200018/25993073-hola-hola-espa%C3%B1ol-texto-vector-letras.jpg' }} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: 150, 
        height: 150,
        alignContent: 'space-around'
    }
});

export default Resume;