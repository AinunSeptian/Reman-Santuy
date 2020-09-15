import React from 'react';
import { Text, View,} from 'react-native';
import { ButtonWhite, ButtonBlue } from '../../components';
import { GoogleIcon, FbIcon, WaIcon, TwitterIcon } from '../../assets';

const Welcome = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Text style={{alignSelf: 'center', marginTop: 65, fontSize: 35, marginBottom: 70}}>Welcome</Text>
                <Text style={{fontSize: 13}}>Masuk jika anda sudah memiliki Akun</Text>
                <Text style={{fontSize: 13}}>Atau buat Akun anda Sekarang</Text>
            </View>
            <View style={{marginTop: 50}}>
                <ButtonWhite title="Masuk" 
                    onPress={() => handleGoTo('Login')}/> 
                <View style={{marginTop: 30}} />
                <ButtonBlue title="Daftar" 
                    onPress={() => handleGoTo('Register')}/>
            </View>
            <Text style={{alignSelf: 'center', marginTop: 30, fontSize: 13}}>Masuk dengan Akun anda yang lain</Text>
            <View style={{flexDirection: 'row', marginTop: 30, alignSelf: 'center'}}>
                <FbIcon width={33} height={33} />
                <View style={{marginLeft: 30}} />
                <GoogleIcon width={31} height={31} />
                <View style={{marginLeft: 30}} />
                <TwitterIcon width={31} height={31} />
                <View style={{marginLeft: 30}} />
                <WaIcon width={31} height={31} />
            </View>
            
        </View>
    );
};

export default Welcome;

