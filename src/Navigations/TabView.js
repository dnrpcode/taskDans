import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import * as React from 'react';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Account'} component={Account} />
    </Tab.Navigator>
  );
}
