import React, { Component, useState } from 'react';
import { Text, View, TextInput, TouchableHighlight, Button } from 'react-native';

const Products = (props) => {

  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productLocation, setProductLocation] = useState("");
  const [productImages, setProductImages] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDeliveryType, setProductDeliveryType] = useState("");
  const [productSellerName, setProductSellerName] = useState("");
  const [productSellerPhone, setProductSellerPhone] = useState("");

  
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'flex-start', marginTop: 30}}>        
        <Text >Add new product</Text>
        <View style={{ flexDirection: 'row', height: 40, width: '90%', justifyContent: 'center', marginBottom: 40}}>

          <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
            onChangeText={ value => setProductDescription(value) }
            value={ productDescription }>
          </TextInput>          
          <TouchableHighlight onPress={ () => props.onProductAdd(productDescription, '25-02-2020') }>
            <View style={ { flex: 1, backgroundColor: 'blue',} }>
              <Text style={{ color: 'white', padding: 10 }}>Save</Text>
            </View>
          </TouchableHighlight>

          <TextInput style={{ flex: 2, borderWidth: 1, borderColor: 'black', backgroundColor: 'white' }}
            onChangeText={ value => setProductDescription(value) }
            value={ productDescription }>
          </TextInput>          
          <TouchableHighlight onPress={ () => props.onProductAdd(productDescription, '25-02-2020') }>
            <View style={ { flex: 1, backgroundColor: 'blue',} }>
              <Text style={{ color: 'white', padding: 10 }}>Save</Text>
            </View>
          </TouchableHighlight>

        </View>        
        <Text style={{ fontSize: 25 }}>Products</Text>
        {
          props.products.map(p => <Text key={p.id}>{ p.title }</Text>)
        }
      </View>
  )
}

export default Products