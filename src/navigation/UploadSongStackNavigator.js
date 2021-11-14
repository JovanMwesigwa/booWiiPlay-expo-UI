/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { UploadSongScreen, AddStationsScreen, SongSummaryScreen } from '../screens';

const Stack = createStackNavigator();

const UploadSongStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Upload" component={UploadSongScreen} />
            <Stack.Screen name="Add Media" component={AddStationsScreen} />
            <Stack.Screen name="Song Summary" component={SongSummaryScreen} />
        </Stack.Navigator>
    )
}

export default UploadSongStackNavigator;