/* eslint-disable prettier/prettier */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from '../screens';

const Stack = createStackNavigator();

const SearchStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export default SearchStackNavigator;