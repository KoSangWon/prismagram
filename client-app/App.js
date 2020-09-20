import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient, ApolloProvider } from "@apollo/client"

import { Clipboard } from 'react-native'

if (__DEV__) {
  Clipboard.setString('')
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        ...Ionicons.font
      });
      await Asset.loadAsync([require("./assets/logo.png")]);//App이 필요한 이미지를 미리 upload, 로고같은 것
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: AsyncStorage
      });
      const client = new ApolloClient({
        cache,
        ...apolloClientOptions
      })
      setLoaded(true);
      setClient(client);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    preLoad();
  }, [])

  return loaded && client ? (
    <ApolloProvider client={client}>
      <View>
        <Text>ihiihihi</Text>
      </View>
    </ApolloProvider>
  ) : (
      <AppLoading />
    )

}
