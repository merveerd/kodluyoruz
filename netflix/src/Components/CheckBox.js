import React from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';

const CheckBox = (props) => {
  return (
    //style lari css dosyasina tasi en son
   
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop : '-5%'}}>
      <TouchableOpacity
        
        style={{
          width: 20,
          height: 20,
          backgroundColor : '#8a8888',
          marginLeft: '7%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 2,
        }}>
                
          
        {props.status && (
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: 'white',
              borderWidth: 1.5,
              borderColor: 'white',
              borderRadius: 3,
            }}
          />
        )}
     
      </TouchableOpacity>
      <Text style={{color :'#8a8888', fontWeight: 'bold', marginLeft : '2%'}}>Remember Me</Text>
      <Text style={{color :'#8a8888', fontWeight: 'bold', marginLeft : '38%'}}>Need Help?</Text>
    </View>
  );
};

export {CheckBox};
