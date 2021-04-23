import React, { Component } from 'react';
import { List, ListItem, Row, Col, Text } from 'native-base';
import { Image } from 'react-native';

function ItemLayout(props) {
    console.log(props);
    return(
        <List>
            <ListItem>
                <Row>
                    <Col>
                        <Image style={{ width: 150, height: 150}} source={{ uri:props.datos.item.medium_cover_image }} />
                    </Col>

                    <Col>
                        <Text>{ props.datos.item.title }</Text>
                        <Text>{ props.datos.item.summary.substring(0,100) }</Text>
                    </Col>
                </Row>
            </ListItem>
        </List>
    )
}

export default ItemLayout;