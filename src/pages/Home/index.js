import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { RumahAktif, Chating, Live, Account, Zone, Cari, Scanner, EducationIcon, HealthIcon, EventsIcon, OtherIcon } from '../../assets';

const Home = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    };
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                {/* Search Bar */}
                <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
                    <View style={{position: 'relative'}}>
                        <TextInput placeholder="what do you want to find?" style={{borderWidth: 1.5, borderColor: '#e8e8e8', borderRadius: 25, height: 42, fontSize: 14, paddingLeft: 45, paddingRight: 80, top: 10}} />
                        <Cari style={{position: 'absolute', top: 19, left: 13}} />
                    </View>
                    <View>
                        <Scanner width={30} height={30} style={{marginLeft: 9, marginTop: 15}} />
                    </View>
                </View>
                {/* Akhir Seacrh Bar */}

                {/* Explore Reman's News */}
                <View style={{marginHorizontal: 17, marginTop: 20}}>
                    <View>
                        <View style={{backgroundColor: '#2c5fbb', borderTopLeftRadius: 6, borderTopRightRadius: 6, padding: 12}}>
                            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Explore Reman's News</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 14, backgroundColor: '#2f65bd'}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <EducationIcon width={30} height={35} />
                            <Text style={{fontSize: 13, color: 'white'}}>Education</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <HealthIcon width={30} height={35} />
                            <Text style={{fontSize: 13, color: 'white'}}>Health</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <EventsIcon width={30} height={35} />
                            <Text style={{fontSize: 13, color: 'white'}}>Events</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <OtherIcon width={30} height={35} />
                            <Text style={{fontSize: 13, color: 'white'}}>Other</Text>
                        </View>
                    </View>
                </View>
                {/* Explore Reman's News */}
            </View>
            {/* Navigation */}
            <View style={{height: 56, flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <RumahAktif width={26} height={26} />
                    <Text style={{fontSize: 12, color: '#43ab4a', marginTop: 4}} >Home</Text>
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
                    <Live width={28} height={28} onPress={() => handleGoTo('LivePage')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Live</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Account width={28} height={28} onPress={() => handleGoTo('AccountPage')} />
                    <Text style={{fontSize: 12, color: '#545454', marginTop: 4}} >Account</Text>
                </View>
            </View>
            {/* Akhir Navigation */}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({})
