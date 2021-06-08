import React, { useState } from 'react';
import { List, ListItem, Row, Col, Text } from 'native-base';
import { Image, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function ItemLayoutPedidos(props) {
    //console.log(props);
    return(
        <List>
            <TouchableOpacity>
                <ListItem>
                    <Row>
                        <Col>
                            <Text style={{fontWeight: 'bold'}}>No. de Pedido: { props.datos.item.id }{"\n"}</Text>
                            <Text> Total: ${ props.datos.item.total} {"\n"}</Text>
                            <Text>Medicamentos: { props.datos.item.meds } {"\n"}</Text>
                            <Text>Direccion: { props.datos.item.address} {"\n"}</Text>
                        </Col>
                    </Row>
                </ListItem>
            </TouchableOpacity>
        </List>
    )
}

export default ItemLayoutPedidos;