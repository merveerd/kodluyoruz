import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

const optionStyle = {
    color: '#8a8888',
    marginLeft: '3%'
}

const OtherSignOptions = (props) => {
  return (
    <>
      <View
        style={[
          props.style,
          {marginTop: '-6%', flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Image
          style={{width: '6%', height: '130%'}}
          source={require('../images/facebook.jpeg')}
        />
        <Text style={optionStyle}>
          Login with Facebook
        </Text>
      </View>
      <View style = {[props.style, {flexDirection : 'row', marginTop : '10%'}]}>
      <Text style={[{ color: '#8a8888',fontSize : 18}]}> New To Netflix?</Text>
        <TouchableOpacity>
        
          <Text style={{color: 'white', fontSize : 18}}> Sign up now.</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export {OtherSignOptions};
//<Image source = '../images/facebook.jpeg'/>
