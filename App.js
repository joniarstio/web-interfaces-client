import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigation from './components/navigation/TabNavigation';
import Auth from './components/auth/Auth';


export default function App() {
  let output;

  output = (
    

    <View style={styles.container}>
      <Auth apiURI='http://192.168.8.100:3000'></Auth>
    </View>
  );

  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
});