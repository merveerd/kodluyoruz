import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Input, Button } from '../Components'
import { LOADING_START, LOADING_END, UPDATE_LIST } from '../actions/types';
import { updateList } from '../actions';
const ListDetail = (props) => {

    const [title, setTitle] = useState();
    const [dsc, setDsc] = useState();
    const dispatch = useDispatch();



    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                paddingBottom: 10,
                flex: 1
            }}>

                <Input
                    placeholder='Title'
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />

                <Input
                    placeholder='Description'
                    value={dsc}
                    onChangeText={(value) => setDsc(value)}
                    multiline
                />

                <Button
                    text={'Add'}
                    style={{ height: 20 }}
                    onPress={() => {
                      
                        // let arr = data.slice()
                        let obj = {
                            title,
                            dsc
                        };
                        props.updateList(obj)
                        console.log(obj)
                        props.navigation.pop();
                    
                    }}
                />
                  {props.loading && <ActivityIndicator size='large' style={{ marginTop: 30}} />}
            </View>
        </ScrollView>
    );
}

const mapStateToProps = ({ listResponse }) => {
    const { list, loading } = listResponse;
    return { list, loading };
};

export default connect( mapStateToProps, { updateList } )(ListDetail);