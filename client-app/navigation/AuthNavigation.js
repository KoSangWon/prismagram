import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator initialRouteName="AuthHome" headerMode={"none"}>
    <Stack.Screen name="AuthHome" component={AuthHome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Confirm" component={Confirm} />
    <Stack.Screen name="Signup" component={Signup} />
  </Stack.Navigator>
);
export default AuthNavigation;
