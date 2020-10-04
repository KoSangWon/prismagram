import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {stackStyles} from '../config';
// import Detail from '../../screens/Detail';
import Notifications from '../../screens/Notifications';

const Stack = createStackNavigator();

const NotiStackFactory = () => (
  <Stack.Navigator
    initialRouteName={'Notifications'}
    screenOptions={{
      headerTitle: 'Notifications',
    //   headerStyle: {...stackStyles},
    }}>
    <Stack.Screen name="Notifications" component={Notifications} />
    {/* <Stack.Screen name="Detail" component={Detail} /> */}
  </Stack.Navigator>
);

export default NotiStackFactory;