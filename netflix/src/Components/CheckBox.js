import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

const CheckBox = (props) => {
  return (
    //style lari css dosyasina tasi en son

    <View
      style={{flexDirection: 'row', alignItems: 'center', marginTop: '-5%'}}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[
          {
            width: 20,
            height: 20,
            backgroundColor: '#8a8888',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
          },
          props.style,
        ]}>
        {props.status && (
          <>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../images/check.png')}></Image>
          </>
        )}
      </TouchableOpacity>
      <Text style={{color: '#8a8888', fontWeight: 'bold', marginLeft: '2%'}}>
        Remember Me
      </Text>
      <TouchableOpacity style={{marginLeft: 'auto', marginRight: '5%'}}>
        <Text style={{color: '#8a8888', fontWeight: 'bold'}}>Need Help?</Text>
      </TouchableOpacity>
    </View>
  );
};

export {CheckBox};
