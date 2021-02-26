import React from 'react';
import { View, Text } from 'react-native';

const ProductsView = (props) => {
  
  return (
    <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>List all products</Text>
      <Text style={{ fontSize: 25 }}>Products</Text>
    </View>
  )
}

export default ProductsView