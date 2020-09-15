import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Welcome');
        }, 2000);
    });
    return (
        <View>
            <View style={{
                width: '100%', 
                height: '100%', 
                backgroundColor: 'dodgerblue',
                position: 'absolute'
            }} />
            <Text style={{
                alignSelf: 'center', 
                marginVertical: '76%', 
                fontSize: 20, 
                fontWeight: 'bold', 
                color: 'white',
            }}>Aplikasi Santuy</Text>
        </View>
    );
};

export default Splash;
