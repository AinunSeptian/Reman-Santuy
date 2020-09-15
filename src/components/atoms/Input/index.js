import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Input = ({placeholder, ...rest}) => {
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder={placeholder} 
                placeholderTextColor={'#00bfff'}
                {...rest}
                />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 18,
        fontSize: 15,
        color: '#00bfff',
    },
});
