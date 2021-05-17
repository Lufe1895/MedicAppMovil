import React, { useState } from 'react';
import { List, ListItem, Row, Col, Text, Label, View } from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Switch, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function ItemFavLayout(props) {
    //console.log(props);

    const show = () => {
        props.navigation.navigate('Show', { id:props.datos.item.id });
    }

    return(
        <List>
            <TouchableOpacity onPress={ show }>
                <ListItem>
                    <Row>
                        <Col style={{flex: 1}}>
                            <Image style={{ width: 75, height: 75}} source={{ uri:props.datos.item.medium_cover_image }} />
                        </Col>
                        <Col style={{flex: 3 }}>
                            <Text style={{fontWeight: 'bold'}}>{ props.datos.item.title }</Text>
                            <Text>{props.datos.item.genres}</Text>
                        </Col>
                        <Col style={{ alignItems:'center', justifyContent:'center', flex: 1}}>
                            <Switch value={true}></Switch>
                        </Col>
                    </Row>
                </ListItem>
            </TouchableOpacity>
        </List>
    )
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection: "column"
    },
    viewHeader:{
        flex:1, 
        flexDirection: "row",
        flexWrap: "wrap"
    }
  })

export default ItemFavLayout;