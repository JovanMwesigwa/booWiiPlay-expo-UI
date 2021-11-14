/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen, LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

const RegularUserAuthStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Welcome" component={SplashScreen} options={{
                headerShown: false
            }} />
             <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false
            }} />
             <Stack.Screen name="Register" component={RegisterScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default RegularUserAuthStackNavigator;