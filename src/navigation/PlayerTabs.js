/* eslint-disable prettier/prettier */
import {
    View, 
    Text,
} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import globalStyles from '../../globalStyles';
import { SongInfo, RelatedTracks } from '../components';

const Tab = createMaterialTopTabNavigator();

const PlayerTabs = () => {

  return (
    <Tab.Navigator
    screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: "#fff" },
        tabBarStyle: { backgroundColor: globalStyles.purpleDark, marginTop: 30  },
        
        
      }}
      
    >
      <Tab.Screen 
        name="SongInfo" 
        component={SongInfo} 
        options={{ 
            tabBarLabel: 'Song Info',
            tabBarIndicatorStyle: {
                backgroundColor: globalStyles.purpleLight
            }
        }}
        
        />
      <Tab.Screen 
        name="RelatedTracks" 
        component={RelatedTracks}
        options={{ 
            tabBarLabel: 'Related Tracks',
            tabBarIndicatorStyle: {
                backgroundColor: globalStyles.purpleLight
            }
        }}
    />
    </Tab.Navigator>
  );
}

export default PlayerTabs;

