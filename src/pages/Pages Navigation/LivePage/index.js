import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Rumah, LiveAktif, Account, Zone, Chating } from '../../../assets';

const LivePage = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    };
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'pink'}}></View>
            <View style={{height: 56, flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Rumah width={26} height={26} onPress={() => handleGoTo('Home')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Home</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Zone width={30} height={28} onPress={() => handleGoTo('ZonePage')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Zone</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Chating width={28} height={28} onPress={() => handleGoTo('ChatPage')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Chat</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <LiveAktif width={28} height={28} />
                    <Text style={{fontSize: 12, color: '#43ab4a', marginTop: 4}} >Live</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Account width={28} height={28} onPress={() => handleGoTo('AccountPage')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Account</Text>
                </View>
            </View>
        </View>
    );
};

export default LivePage;

const styles = StyleSheet.create({})
