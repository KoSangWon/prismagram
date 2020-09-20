import React, { createContext, useContext, useState } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({ isLoggedIn: isLoggedInProp, children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInProp);

    const logUserIn = async () => {
        try {
            await AsyncStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
        } catch (err) {
            console.log(err);
        }
    }

    const logUserOut = async () => {
        try {
            await AsyncStorage.setItem("isLoggedIn", "false");
            setIsLoggedIn(false);
        } catch (err) {
            console.log(err);
        }
    }
    return <AuthContext.Provider value={{ isLoggedIn, logUserIn, logUserOut }}>{children}</AuthContext.Provider>
}

export const useIsLoggedIn = () => {
    const { isLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn);
    return isLoggedIn;
};

export const useLogIn = () => {
    const { logUserIn } = useContext(AuthContext);
    console.log('11111111loguserin', logUserIn)
    console.log('로그인하자')
    return logUserIn;
}

export const useLogOut = () => {
    const { logUserOut } = useContext(AuthContext);
    console.log('222222222loguserout', logUserOut)
    console.log('로그아웃하자')
    return logUserOut;
}