import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsView from './ProductsView';
import SecondaryView from './SecondaryView';
//import Auth from '../auth/Auth';
import ImageUpload from './ImageUpload';
import { Ionicons } from 'react-native-vector-icons';


const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Tab.Navigator>
          <Tab.Screen 
            name="Products" 
            component={ProductsView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-home" color={color} size={size} />)
            }}
          />
          <Tab.Screen 
            name="Login/register" 
            component={SecondaryView} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />)
            }}
          />
                    <Tab.Screen 
            name="Image Upload" 
            component={ImageUpload} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-outline" color={color} size={size} />)
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}