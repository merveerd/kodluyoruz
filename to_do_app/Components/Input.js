import React from 'react';
import { Text, View, TextInput } from 'react-native';



const Input = (props) => (
    <TextInput
    placeholder = {props.placeholder}
    placeholderTextColor = "#8a8888"
    secureTextEntry = {props.secureTextEntry}
    keyboardType = {props.keyboardType}
    value = {props.value}
    onChangeText = {(value) => props.onChangeText(value)}
    style = {[{
        width: '94%',
        height: '17%',
        backgroundColor: 'gray',
        borderRadius: 3,
        paddingLeft: 10,
        borderRadius: 5,
        marginBottom:  '5%',
        fontSize: 16
    }, props.style]}
    />
)

export {Input}