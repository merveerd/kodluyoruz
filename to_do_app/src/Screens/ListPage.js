import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {connect, useDispatch} from 'react-redux';
import {ADD_LIST_LOCAL, SET_LIST} from '../actions/types';
import {getList} from '../actions';

const ListPage = (props) => {
  useEffect(() => {
    props.getList();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.dsc}>{item.dsc}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={props.list}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          ListEmptyComponent={() => {
            return (
              <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={{fontSize: 10}}>
                  Herhangi bir data bulunamadı.
                </Text>
                
              </View>
            );
          }}
      
          // initialNumToRender={2}
          // inverted
          ListHeaderComponent={() => {
            return <View style={{height: 10, backgroundColor: 'black'}}></View>;
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  dsc: {
    fontSize: 14,
    color: 'gray',
  },
});

const mapStateToProps = (state) => {
  const {list, loading, data} = state.listResponse;
  return {list, list, loading, data};
};

export default connect(mapStateToProps, {getList})(ListPage);
