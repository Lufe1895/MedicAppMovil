import React, { useState } from 'react';
import { List, ListItem, Row, Col, Text } from 'native-base';
import { Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function ItemLayout(props) {
    //console.log(props);

    const show = () => {
        console.log("Item Layout: " + props.datos.item.id);
        props.navigation.navigate('Show', { id:props.datos.item.id });
    }

    return(
        <List>
            <TouchableOpacity onPress={ show }>
                <ListItem>
                    <Row>
                        <Col>
                            <Image style={{ width: 150, height: 150}} source={{ uri:props.datos.item.medium_cover_image }} />
                        </Col>

                        <Col>
                            <Text style={{fontWeight: 'bold'}}>{ props.datos.item.title }</Text>
                            <Text>{ props.datos.item.summary.substring(0,100) }...</Text>
                        </Col>
                    </Row>
                </ListItem>
            </TouchableOpacity>
        </List>
    )
}

export default ItemLayout;