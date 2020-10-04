import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();

const isLoggedIn2 = "true"
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {isLoggedIn2 ? (
          <MainNavigation/>
        ) : (
          <AuthNavigation />
        )}
      </View>
    </NavigationContainer>
  );
};
