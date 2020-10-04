import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen
      name="Add"
      component={View}
      listeners={{
        tabPress: (e) => {
          e.preventDefault(); // 기본 기능 막은 후
          navigation.navigate("PhotoNavigation"); // navigate 한다.
        },
      }}
    />
    <Tab.Screen name="Notifications" component={Notifications} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabNavigation;