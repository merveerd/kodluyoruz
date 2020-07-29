import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => (
    <TouchableOpacity
    activeOpacity ={1}
    onPress = {props.onPress}
    style = {{
        backgroundColor: 'red',
        width : '90%',
        height : '15%',
        borderRadius : 10,
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <Text style={[props.style,{
            fontSize: 18}]}>{props.text}</Text>
    </TouchableOpacity> 
)

export {Button};
