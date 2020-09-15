import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Kembali } from '../../assets';

const ScanQR = () => {
    return (
        <View>
            <View>
                <View style={{height: 400, width: '100%', backgroundColor: 'grey', position: 'relative'}} />
                <Kembali style={{position: 'absolute', top: 10, left: 10}} width={30} height={30}/>
            </View>
            <View>

            </View>
        </View>
    );
};

export default ScanQR;

const styles = StyleSheet.create({})
