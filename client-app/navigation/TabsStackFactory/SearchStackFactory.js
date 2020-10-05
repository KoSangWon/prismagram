import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../../screens/Search';
// import {stackStyles} from '../config';
// import Detail from '../../screens/Detail';
// import UserDetail from '../../screens/UserDetail';
// import styles from '../../utils/styles';
// import {userDetailOption} from './options';

const Stack = createStackNavigator();

const SearchStackFactory = () => (
  <Stack.Navigator
    initialRouteName={'Search'}
    screenOptions={{
      headerStyle: {...stackStyles},
      headerBackTitle: ' ',
    }}>
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{headerTintColor: styles.black, headerTitle: 'Post'}}
    />
    <Stack.Screen
      name="UserDetail"
      component={UserDetail}
      options={userDetailOption}
    />
  </Stack.Navigator>
);

export default SearchStackFactory;
