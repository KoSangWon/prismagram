import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Add" component={View}/>
        <Tab.Screen name="Notifications" component={Notifications}/>
        <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
);

export default TabNavigation;