import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Home from './screens/Home/Home';
import AddItem from './screens/Home/AddItem';
import {navigationRef} from './RootNavigation';

import AsyncStorage from '@react-native-community/async-storage';
import {LOCAL_AUTH_ID, USER} from './actions/types';

const Stack = createStackNavigator();

function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({navigation, route}) => ({
            title: 'Login',
            // headerRight: () => (
            //     <TouchableOpacity
            //     onPress={() => navigation.navigate('ListDetail')}
            //     style={{
            //         marginRight: 20
            //     }}
            //     >
            //         <Text style={{ fontSize: 30}}>+</Text>
            //     </TouchableOpacity>
            //   ),
          })}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            title: 'Home',

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddItem')}
                style={{
                  marginRight: 20,
                }}>
                <Text style={{fontSize: 30}}>+</Text>
              </TouchableOpacity>
            ),
          })}
        />
        
        <Stack.Screen
                    name="AddItem"
                    component={AddItem}
                    options={{ title: 'Add Characters' }}
                />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
