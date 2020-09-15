import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Welcome, Register, SuccesLogin, Login, Home, ScanQR } from '../pages';
import { ZonePage, ChatPage, LivePage, AccountPage } from '../pages/Pages Navigation';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="Welcome"
                component={Welcome}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="Register"
                component={Register} 
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="SuccesLogin"
                component={SuccesLogin}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="ZonePage"
                component={ZonePage}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="ChatPage"
                component={ChatPage}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="LivePage"
                component={LivePage}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="AccountPage"
                component={AccountPage}
                options={{
                    headerShown: false,
                }}/>
            <Stack.Screen name="ScanQR"
                component={ScanQR}
                options={{
                    headerShown: false,
                }}/>
        </Stack.Navigator>
    );
};

export default Router;
