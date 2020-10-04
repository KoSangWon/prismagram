import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import { Platform, Text, View } from 'react-native';
import MessagesLink from '../components/MessagesLink';
import HomeStackFactory from './TabsStackFactory/HomeStackFactory';
import styles from '../styles';
import NavIcon from '../components/NavIcons';
import SearchStackFactory from './TabsStackFactory/SearchStackFactory';
import ProfileStackFactory from './TabsStackFactory/ProfileStackFactory';
import NotiStackFactory from './TabsStackFactory/NotiStackFactory';

const Tab = createBottomTabNavigator();

const TabNavigation = ({ navigation }) => (
  <Tab.Navigator
  initialRouteName="HomeStackFactory"
    headerMode={'none'}
    tabBarOptions={{
      showLabel: false,
      style: {
        // tabBarStyle로 하면 탭 부분만 스타일이 바뀌고 그 아래는 적용이 안됨. 휴대폰 맨 끝 부분.
        backgroundColor: styles.instaColor,
      },
    }}
  >
    <Tab.Screen
      name="HomeStackFactory"
      component={HomeStackFactory}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon
            focused={focused}
            name={Platform === 'android' ? 'md-home' : 'ios-home'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="SearchStackFactory"
      component={SearchStackFactory}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon
            focused={focused}
            name={Platform === 'android' ? 'md-search' : 'ios-search'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={View}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon
            focused={focused}
            size={30}
            name={Platform === 'android' ? 'md-add' : 'ios-add'}
          />
        ),
      }}
      listeners={{
        tabPress: (e) => {
          e.preventDefault(); // 기본 기능 막은 후
          navigation.navigate("PhotoNavigation"); // navigate 한다.
        },
      }}
    />
    <Tab.Screen
      name="NotiStackFactory"
      component={NotiStackFactory}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon
            focused={focused}
            name={Platform === 'android' ? 'md-heart' : 'ios-heart'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ProfileStackFactory"
      component={ProfileStackFactory}
      options={{
        tabBarIcon: ({focused}) => (
          <NavIcon
            focused={focused}
            name={Platform === 'android' ? 'md-person' : 'ios-person'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;