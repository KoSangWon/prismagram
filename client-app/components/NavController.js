import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsLoggedIn, useLogIn, useLogOut } from '../AuthContext';

export default () => {
    const isLoggedIn = useIsLoggedIn();
    const logIn = useLogIn();
    const logOut = useLogOut();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {isLoggedIn ? (
                <TouchableOpacity onPress={logOut}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity onPress={logIn}>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                )}
        </View>
    )
};