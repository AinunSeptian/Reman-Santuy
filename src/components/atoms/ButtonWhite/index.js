import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonWhite = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
            <Text style={styles.text.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    wrapper: {
        component: {
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'blue',
            borderRadius: 25, 
            paddingVertical: 11,
            marginLeft: 40,
            marginRight: 40,
        },
    },
    text: {
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            color: 'blue',
            textTransform: "uppercase",
            textAlign: 'center'
        },
    },
};

export default ButtonWhite;