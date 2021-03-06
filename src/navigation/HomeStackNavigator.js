/* eslint-disable prettier/prettier */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;