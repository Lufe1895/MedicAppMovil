import React, { useState } from 'react';
import { List, ListItem, Row, Col, Text } from 'native-base';
import { Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function ItemLayoutM(props) {
    //console.log(props);

    const show = () => {
        props.navigation.navigate('ShowM', { id:props.datos.item.id });
    }

    return(
        <List>
            <TouchableOpacity onPress={ show }>
                <ListItem>
                    <Row>
                        <Col>
                            <Image style={{ width: 150, height: 150}} source={{ uri:props.datos.item.image }} />
                        </Col>

                        <Col>
                            <Text style={{fontWeight: 'bold'}}>{ props.datos.item.name }</Text>
                            <Text>{ props.datos.item.dosis}</Text>
                            <Text>{ props.datos.item.cost} </Text>
                        </Col>
                    </Row>
                </ListItem>
            </TouchableOpacity>
        </List>
    )
}

export default ItemLayoutM;