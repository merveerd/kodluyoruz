import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';

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

  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          flex: 1,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            onPress={() => props.navigation.pop()}
            style={{color: colors.main, fontSize: 14}}>
            Vazgeç
          </Text>
          <Icon
            style={{color: colors.main}}
            type="FontAwesome"
            name={'twitter'}
            fontSize={40}
          />
        </View>

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

        <Button
          text={'Register'}
          loading={props.loading}
          style={{height: 40, width: '90%'}}
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
      </View>
    </ScrollView>
  );
};

const mapStateToProps = ({authResponse}) => {
  const {loading, user} = authResponse;
  return {loading, user};
};

export default connect(mapStateToProps, {register})(Register);
