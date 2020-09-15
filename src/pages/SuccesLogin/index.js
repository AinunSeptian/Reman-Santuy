import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ceklis } from '../../assets'
import { ButtonBlue } from '../../components'

const SuccesLogin = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    };
    return (
        <View>
            <Ceklis width={100} height={100} style={{alignSelf: 'center', marginTop: 100}} />
            <Text style={{fontSize: 30, color: '#06DF1B', alignSelf: 'center', fontWeight: 'bold'}}
                >SUCCESS</Text>
            <View style={{marginTop: 50, margin: 40}}>
                <Text style={{alignSelf: 'center'}}>Selamat! Akun anda berhasil dibuat</Text>
                <Text>Silahkan Login untuk menuju halaman utama</Text>
            </View>
            <ButtonBlue title="Login" onPress={() => handleGoTo('Login')} />
        </View>
    );
};

export default SuccesLogin;

const styles = StyleSheet.create({})
