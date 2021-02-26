import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";

const Products = (props) => {
  const [productTitle, setProductTitle] = useState("Title");
  const [productDescription, setProductDescription] = useState("Description");
  const [productCategory, setProductCategory] = useState("Category");
  const [productLocation, setProductLocation] = useState("Location");
  const [productImages, setProductImages] = useState("Images");
  const [productPrice, setProductPrice] = useState("1");
  const [productDeliveryType, setProductDeliveryType] = useState("DeliveryType");
  const [productSellerName, setProductSellerName] = useState("SellerName");
  const [productSellerPhone, setProductSellerPhone] = useState("SellerPhone");

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-start",
        marginTop: 30,
      }}
    >
      <Text>Add new product</Text>
      <View
        style={{
          flexDirection: "row",
          height: "20%",
          width: "90%",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >

        <TextInput
          style={{
            flex: 3,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductTitle(value)}
          value={productTitle}
        ></TextInput>

        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductDescription(value)}
          value={productDescription}
        ></TextInput>

        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductCategory(value)}
          value={productCategory}
        ></TextInput>

        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductLocation(value)}
          value={productLocation}
        ></TextInput>

        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductImages(value)}
          value={productImages}
        ></TextInput>

        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductPrice(value)}
          value={productPrice}
        ></TextInput>
        <Text>Delivery Method:</Text>
        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductDeliveryType(value)}
          value={productDeliveryType}
        ></TextInput>
        <Text>Seller Name:</Text>
        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductSellerName(value)}
          value={productSellerName}
        ></TextInput>
        <Text>Phone Number:</Text>
        <TextInput
          style={{
            flex: 2,
            borderWidth: 1,
            borderColor: "black",
            backgroundColor: "white",
          }}
          onChangeText={(value) => setProductSellerPhone(value)}
          value={productSellerPhone}
        ></TextInput>
        
        <TouchableHighlight
          onPress={() =>
            props.onProductAdd(
              productTitle,
              productDescription,
              productCategory,
              productLocation,
              productImages,
              productPrice,
              productDeliveryType,
              productSellerName,
              productSellerPhone
            )
          }
        >
          <View style={{ flex: 1, backgroundColor: "blue" }}>
            <Text style={{ color: "black", padding: 10 }}>Save</Text>
          </View>
        </TouchableHighlight>
      </View>
      <Text style={{ fontSize: 25 }}>Products</Text>
      {
        props.products.map(p => <Text key={p.id}>
          {p.title}
        </Text>)
      }
    </View>
  );
};

export default Products;
