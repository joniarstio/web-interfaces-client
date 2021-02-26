import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import View1 from "./productApp/View1";
import Products from "./productApp/Products";
import ProductsView from "../navigation/ProductsView";

const Stack = createStackNavigator();

export default class ProductApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    console.log("Getting products");
    fetch(this.props.apiURI + "/products", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + this.props.jwt,
      },
    })
      .then((response) => {
        if (response.ok == false) {
          throw new Error(
            "HTTP Code " +
              response.status +
              " - " +
              JSON.stringify(response.json())
          );
        }
        return response.json();
      })
      .then((json) => {
        console.log("Products GET successful");
        console.log("Received following JSON:");
        console.log(json);

        this.setState({ products: json });
      })
      .catch((error) => {
        console.log("Error message:");
        console.log(error.message);
      });
  }

  onProductAdd = (title, description, category, location, images, price, deliveryType, sellerName, sellerPhone) => {
    fetch(this.props.apiURI + "/products", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + this.props.jwt,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, category, location, images, price, deliveryType, sellerName, sellerPhone }),
    })
      .then((response) => {
        if (response.ok == false) {
          throw new Error(
            "HTTP Code " +
              response.status +
              " - " +
              JSON.stringify(response.json())
          );
        }
        return response.json();
      })
      .then((json) => {
        console.log("Product POST successful");
        console.log("Received following JSON");
        console.log(json);

        this.setState({ products: json });
      })
      .catch((error) => {
        console.log("Error message:");
        console.log(error.message);
      });
  };

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="View1">
          {(props) => <View1 {...props} onLogout={this.props.onLogout} />}
        </Stack.Screen>
        <Stack.Screen name="ProductsView" options={{ title: "Products List" }}>
          {(props) => (
            <Products
              {...props}
              products={this.state.products}
              onProductAdd={this.onProductAdd}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  }
}