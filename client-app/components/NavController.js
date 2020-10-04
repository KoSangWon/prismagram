import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = useLogOut();

  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        {isLoggedIn ? (
          <TouchableOpacity onPress={logOut}>
            <Text>Log out</Text>
          </TouchableOpacity>
        ) : (
          <AuthNavigation />
        )}
      </View>
    </NavigationContainer>
  );
};
