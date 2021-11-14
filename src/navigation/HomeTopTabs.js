/* eslint-disable prettier/prettier */
import {
    View, 
    Text,
    useWindowDimensions
} from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import globalStyles from '../../globalStyles';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Home } from '../screens';

const Tab = createMaterialTopTabNavigator();

const Top = () => {
    return (
        <Home />
    )
}

const Following = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#9A0FBD' }}>
            <Text>Following</Text>
        </View>
    )
}

const Recent = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#9A0FBD' }}>
            <Text>Recent</Text>
        </View>
    )
}

const renderScene = SceneMap({
    first: Top,
    second: Recent,
  });

function TopTabNavigator() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Top' },
        { key: 'second', title: 'Following' },
    ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default TopTabNavigator;