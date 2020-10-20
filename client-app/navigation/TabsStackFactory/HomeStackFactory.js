import {Image, Text} from 'react-native';
// import NavIcon from '../../components/NavIcon';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MessagesLink from '../../components/MessagesLink';
import Home from '../../screens/Home';
// import {stackStyles} from '../config';
// import {userDetailOption} from './options';
import Detail from '../../screens/Detail';

// import UserDetail from '../../screens/UserDetail';
// import {StackFactory} from '../TabNavigation'
const Stack = createStackNavigator();

const HomeStackFactory = ({navigation}) => (
  <Stack.Navigator
    initialRouteName={'Home'}
    screenOptions={{
      headerTitle: 'Home',
    //   headerStyle: {...stackStyles},
    }}>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerRight: () => <MessagesLink />,
        headerTitle: <Text>aaaa</Text>,
      }}
    />
    <Stack.Screen name="Detail" component={Detail} />
    {/* <Stack.Screen
      name="UserDetail"
      component={UserDetail}
      options={userDetailOption}
    /> */}
  </Stack.Navigator>
);

export default HomeStackFactory;