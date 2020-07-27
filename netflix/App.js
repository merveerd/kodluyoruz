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
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
  const { width, height } = Dimensions.get('window')
export default class App extends Component {
  render() {
  
    return (
      <>
        <SafeAreaView style={{flex: 1, backgroundColor : 'black'}}>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={[styles.subContainer, {flex: 1}]}>
              <Image style = {styles.netflix} source={require('./src/images/netflix-logo.jpeg')} />
            </View>
            <View style={{flex: 2}}>
              <Text style = {[styles.lightText, styles.subContainer, {fontSize: 30}]}> Sign In</Text>
              <TextInput style = {styles.darkText} placeholder={'Email or phone number'} />
              <TextInput style = {styles.darkText} placeholder={'Password'} />
            </View>
            <View style={{flex: 2}}></View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = {
  subContainer: {justifyContent: 'center', marginLeft: '8%'},
  darkText: {color: 'gray'},
  lightText: {color: 'white',  fontWeight: 'bold'},
  netflix: {width: width * 0.32, height: width * 0.13 }
};
