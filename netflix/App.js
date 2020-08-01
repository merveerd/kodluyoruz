/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Input, Button, CheckBox, OtherSignOptions} from './src/Components';
const {width, height} = Dimensions.get('window');
export default class App extends Component {

  state = {
    username: '',
    password: '',
    isShowPassword: false
  }

  render() {
    const {
      username,
      password,
      isShowPassword

    } = this.state;
    return (
      <>
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={[styles.subContainer, {flex: 1, justifyContent: 'center'}]}>
              <Image
                style={styles.netflix}
                source={require('./src/images/netflix-logo.jpeg')}
              />
            </View>
            <View style={[styles.subContainer, {flex: 2}]}>
              <Text
                style={[styles.lightText, {fontSize: 35, marginBottom : '7%'}]}>

                Sign In
              </Text>
              <Input
                style={styles.darkText}
                placeholder={'Email or phone number'}
                value = {this.state.username}
                onChangeText = {(username) => this.setState({username : username})}
              />
              <Input style={styles.darkText}
               placeholder={'Password'}
               value = {this.state.password}
               onChangeText = {(password) => this.setState({password})}
               />
              <Button
              onPress = {() => {
                console.log('state degerleri', username, ' ', password);
              }}
                
                text={'Sign In'}
                style={
                  styles.lightText
                }></Button>
            </View>
            <View style={{flex: 1}}>
              <CheckBox/>
            </View>
            <View style={{flex: 1}}>
              <OtherSignOptions style = {styles.subContainer}/>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = {
  subContainer: {marginLeft: '8%'},
  darkText: {color: '#8a8888', backgroundColor: '#333333'},
  lightText: {color: 'white', fontWeight: 'bold'},
  netflix: {width: width * 0.35, height: width * 0.18},
};
