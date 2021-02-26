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
          flexDirection: "column",
          height: "60%",
          width: "60%",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <Text>Title:</Text>
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
        <Text>Description:</Text>
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
        <Text>Category:</Text>
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
        <Text>Location:</Text>
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
        <Text>Images:</Text>
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
        <Text>Price:</Text>
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

    </View>
  );
};

export default Products;
