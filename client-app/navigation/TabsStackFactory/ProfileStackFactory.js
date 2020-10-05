import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../screens/Profile';
// import {stackStyles} from '../config';
// import Detail from '../../screens/Detail';

const Stack = createStackNavigator();

const ProfileStackFactory = () => (
  <Stack.Navigator
    initialRouteName={'Profile'}
    screenOptions={{headerTitle: 'Profile', headerStyle: {...stackStyles}}}
    >
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

export default ProfileStackFactory;