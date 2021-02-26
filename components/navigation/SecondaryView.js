import React from 'react';
import { View, Text } from 'react-native';
import LoginScreen from '../auth/LoginScreen';

const SecondaryView = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Login/register</Text>
      <LoginScreen  />
    </View>
  )
}

export default SecondaryView
