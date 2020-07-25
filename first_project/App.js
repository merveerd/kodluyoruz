/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

const [count, setCount] = useState(0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
  
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
             
            }}>
            <Text>Hello, world!</Text>
          </View>
    
          <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
              <Text>Click me</Text>
            </TouchableOpacity>
            <View>
              <Text>You clicked {count} times</Text>
            </View>
          </View>
        </ScrollView>
    
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.light,
  },

  sectionContainer: {
    flex: 1,
    marginTop: 250,
    paddingHorizontal: 24,
    backgroundColor: Colors.dark,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
