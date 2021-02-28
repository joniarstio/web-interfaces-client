import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableHighlight,
} from "react-native";

const ProductsView = (props) => {  
    
      return (
        <View style={{ marginTop: 50}}>
      <Text style={{ fontSize: 25 }}>Products</Text>
      {
        props.products.map(p => <Text key={p.id}>
          {p.title}
        </Text>)
        }
        </View>
      );
    };

export default ProductsView;
