/* eslint-disable prettier/prettier */
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './AppTabNavigator';

import {MediaProfileScreen, SongPlayerScreen, EditProfile} from '../screens/'

const Stack = createNativeStackNavigator();


const MainAppStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Tabs" component={AppTabNavigator} />
            <Stack.Screen name="Profile Details" component={MediaProfileScreen} />
            <Stack.Screen name="Player" component={SongPlayerScreen} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            {/* 
            <Stack.Screen name="Settings" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
    )
}

export default MainAppStackNavigator;