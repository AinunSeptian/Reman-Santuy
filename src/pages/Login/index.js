import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Input, ButtonBlue } from '../../components'
import { Kembali } from '../../assets';

const Login = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    };

    // const RegisterReducer = useSelector((state) => state.RegisterReducer);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const sendUserData = () => {
        console.log('Berhasil! Data Pengguna', form);
    };

    const onInputChange = (value, input) => {
        setForm({
            ...form,
            [input]: value,
        });
    };

    return (
        <View>
            <TouchableOpacity>
                <Kembali width={30} height={30} style={{marginTop: 5, marginLeft: 5 }} onPress={() => handleGoTo('Welcome')} />  
            </TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{alignSelf: 'center', marginTop: 40, fontSize: 35, marginBottom: 70}}>Sign In</Text>
                <Text style={{fontSize: 13}}>Masukan akun anda yang telah terdaftar!</Text>
            </View>
            <View style={{padding: 37}}>
                <Input 
                    placeholder="Email" 
                    value={form.email}
                    onChangeText={(value) => onInputChange(value, 'email')}/>
                <View style={{marginBottom: 30 }} />
                <Input 
                    placeholder="Password" 
                    vaalue={form.password}
                    onChangeText={(value) => onInputChange(value, 'password')}
                    secureTextEntry={true}/>
            </View>
                <ButtonBlue title="Login" 
                    onPress={() =>{ 
                        handleGoTo('Home')
                        sendUserData()
                        }}/>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({})
