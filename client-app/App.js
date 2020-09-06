import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading, Font, Asset } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    preLoad();
  }, [])

  return loaded ? (
    <View>
      <Text>ihiihihi</Text>
    </View>
  ) : (
      <AppLoading />
    )

}
