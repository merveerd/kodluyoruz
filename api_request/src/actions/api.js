import axios from 'axios'
import  { Alert } from 'react-native'

import * as RootNavigation from '../RootNavigation';

import AsyncStorage from '@react-native-community/async-storage'

import { USER, LOCAL_AUTH_ID } from './types'


export const post = (url, params, dispatch, start, success, failed) => {
   let method = url.split('/').pop();
    console.log('Giden URL => ', url);
    dispatch({  type: start })
    axios({
        method: 'post',
        url,
        data: params,
        headers: {
          authorization : 'Bearer '.concat(USER.token)
        }
      }).then((response) => {
        console.log('Gelen POST Başarılı: => ', response.data );
        
        dispatch({  type: success,  payload: method == 'removeCharacter' ?  params.id : response.data }) //guncellenecek

        if(method == 'login' || method == 'register'){
          RootNavigation.replace('Home');

          USER.token = response.data.token;
          AsyncStorage.setItem(LOCAL_AUTH_ID, response.data.token);
        } else if(method == 'addCharacter' || method == 'removeCharacter'){
          RootNavigation.pop() //bi onceki sayfaya gittik
        }
     

      }).catch((err) => {
        console.log('Gelen POST Hatalı: => ', err );
        Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!')
        dispatch({  type: failed  })
      })
}

export const get = (url, params, dispatch, start, success, failed) => {

    let method = url.split('/').pop();
    console.log('Giden URL => ', url);

    dispatch({  type: start })
    axios({
        method: 'get',
        url,
        headers: {
            authorization: 'Bearer '.concat(USER.token) //headers ta authorization olmadan log in olduktan sonraki hic bir islemi yapmaiyor olmamiz gerekiyor
        }
      }).then((response) => {


        console.log('Gelen GET Başarılı: => ', response.data );
        dispatch({  type: success, payload: response.data  })
      }).catch((err) => {
        console.log('Gelen GET Hatalı: => ', err );
        Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu!')
        dispatch({  type: failed  })
      })
}