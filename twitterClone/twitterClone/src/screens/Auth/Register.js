import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  Animated,
  Keyboard,
  SafeAreaView,
} from 'react-native';

import {Input, Button} from '../../components';
import {connect} from 'react-redux';
import {register} from '../../actions';
import {Icon} from 'native-base';
import {colors} from '../../style';
const Register = (props) => {
  const [firstName, setFirstname] = useState('');
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const animation = useRef(new Animated.Value(0)).current;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', _keyboardWillShow);
    Keyboard.addListener('keyboardWillHide', _keyboardWillHide);

    return () => {
      Keyboard.removeListener('keyboardWillShow', _keyboardWillShow);
      Keyboard.removeListener('keyboardWillHide', _keyboardWillHide);
    };
  }, []);

  const _keyboardWillShow = (e) => {
    const height = e.endCoordinates.height;
    Animated.timing(animation, {
      toValue: -height +35 ,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const _keyboardWillHide = (e) => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <SafeAreaView style = {{flex: 1, marginLeft: '15%'}}> 
   
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: '10%',
            flex: 1,
          }}>
          <Text
            onPress={() => props.navigation.pop()}
            style={{color: colors.main, fontSize: 30}}>
            {'<'}
          </Text>
          <Icon
            style={{color: colors.main,   marginLeft : '40%'}}
            type="FontAwesome"
            name={'twitter'}

          />
        </View>
        <View style = {{flex: 8, marginTop: '20%'}}>
          <ScrollView>
            <Input
              placeholder="firstname"
              value={firstName}
              onChangeText={(value) => setFirstname(value)}
            />

            <Input
              placeholder="username"
              value={userName}
              onChangeText={(value) => setuserName(value)}
            />

            <Input
              placeholder="email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <Input
              placeholder="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry
            />
          </ScrollView>
        </View>
        <Animated.View
          style={[
            {
              flex: 0.6,
              backgroundColor: '#edeeef',
              borderTopColor: '#b7b7b7',
              borderTopWidth: 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              justifyContent: 'space-between',
            },
            {
              transform: [
                {
                  translateY: animation,
                },
              ],
            },
          ]}>
          <Button
            text={'Register'}
            loading={props.loading}
            style={{height: 40, width: '85%'}}
            onPress={() => {
              const params = {
                email,
                password,
                firstName,
                userName,
              };
              props.register(params);
            }}
          />
        </Animated.View>

    </SafeAreaView>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {register})(Register);
