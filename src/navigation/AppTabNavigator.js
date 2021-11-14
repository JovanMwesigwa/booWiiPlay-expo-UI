/* eslint-disable prettier/prettier */
import React from 'react'
import {
    View,
  } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import SearchStackNavigator from './SearchStackNavigator';
import UploadSongStackNavigator from './UploadSongStackNavigator';
import globalStyles from '../../globalStyles';

import Foundation from 'react-native-vector-icons/Foundation'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { NotificationsScreen } from '../screens';



const Tab = createMaterialBottomTabNavigator();

const AppTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions={{ tabBarLabel: false }}
            barStyle={{
                backgroundColor: globalStyles.purpleDark,
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <>
                            <View style={{ flex: 1, alignItems: "center"}}>
                                <Foundation name="home" color={color} size={25} />
                                {focused && <View style={{ width: 40, height: 2, backgroundColor: "white", marginTop: 10 }} />}
                            </View>
                        </>
                    )
                }}
            />
            <Tab.Screen 
                name="Search" 
                component={SearchStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <>
                            <View style={{ flex: 1, alignItems: "center"}}>
                                <AntDesign name="search1" color={color} size={23} />
                                {focused && <View style={{ width: 40, height: 2, backgroundColor: "white", marginTop: 10 }} />}
                            </View>
                        </>
                    )
                }} 
            />
            <Tab.Screen 
                name="Post" 
                component={UploadSongStackNavigator}
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                
                        <View style={{ backgroundColor: "red", borderRadius: 8, width: 65, alignItems: 'center', height: 30, justifyContent: 'center' }}>
                            <Entypo name="plus" color="#fff" size={23} />
                        </View>
                    ),
                    
                }} 
            />
            <Tab.Screen 
                name="Notification" 
                component={NotificationsScreen} 
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <>
                         <View style={{ flex: 1, alignItems: "center"}}>
                            <MaterialCommunityIcons name={focused ? "bell" : "bell-outline"} color={color} size={26} />
                            {focused && <View style={{ width: 40, height: 2, backgroundColor: "white", marginTop: 10 }} />}
                        </View>
                        </>
                    )
                }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileStackNavigator} 
                options={{
                    tabBarIcon: ({ color, focused, size }) => (
                        <>
                        
                            <View style={{ flex: 1, alignItems: "center"}}>
                                <MaterialCommunityIcons name={focused ? "account" : "account-outline"} color={color} size={25} />
                                {focused && <View style={{ width: 34, height: 2, backgroundColor: "white", marginTop: 10 }} />}
                            </View>
                        </>
                    )
                }} 
            />
        </Tab.Navigator>
    )
}

export default AppTabNavigator;