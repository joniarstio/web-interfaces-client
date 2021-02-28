import React from 'react';
import { View, Text, Button} from 'react-native';


const View1 = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Your profile</Text>
      
      <Button
        title="Go to Products List View"
        onPress={() => props.navigation.navigate('MyProducts')}
      />
      <Button
        title="Logout"
        onPress={ props.onLogout }
      />
    </View>
  )
}

export default View1
