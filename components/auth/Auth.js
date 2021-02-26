import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreen from './SignUpScreen';
import SignUpCompleted from './SignUpCompleted';
import * as SecureStore from 'expo-secure-store';
import LoadingScreen from './LoadingScreen';
import ProductApp from './ProductApp';
//import ProductsView from '../navigation/ProductsView';
import Products from '../auth/productApp/Products';

const Stack = createStackNavigator();
const secureStoreTokenName = "demoApJWT2";

export default class AuthDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCheckingTokenStorage: true,
      activeJWT: null
    };
  }

  componentDidMount() {
    // Check for stored JWT when the application loads
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")        
        this.setState({ activeJWT: response, isCheckingTokenStorage: false })
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error")
        console.log(error);
      });
  }

  
  onLoginReceiveJWT = (responseJWT) => {
    // Deal with successful login by storing the token into secure store
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT, isCheckingTokenStorage: false })
      })    
  }

  

  authLogic = () => {
    const authScreens = (
      <>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          { props => <LoginScreen {...props} onLoginReceiveJWT={ this.onLoginReceiveJWT } apiURI={ this.props.apiURI }></LoginScreen> }
        </Stack.Screen>
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
        >
          { props => <SignUpScreen {...props} apiURI={ this.props.apiURI }></SignUpScreen>}
        </Stack.Screen>
        <Stack.Screen
          name="SignupCompleted"
          options={{
            headerShown: false,
          }}
        >
          { props => <SignUpCompleted {...props}></SignUpCompleted>}
        </Stack.Screen>
        <Stack.Screen
          name="ProductsView"
          options={{
            headerShown: false,
          }}
        >
          { props => <Products {...props}></Products>}
        </Stack.Screen>
      </>
    );

    const app = (
      <Stack.Screen 
        name="ProductApp" 
        options={{
          headerShown: false,
        }}>
          { props => <ProductApp 
                        {...props} 
                        jwt={ this.state.activeJWT } 
                        apiURI={ this.props.apiURI }
                        onLogout={ this.onLogout }
                      ></ProductApp>}
      </Stack.Screen>
    )

    

    const checkingForTokenStorage = (
      <Stack.Screen name="Loading" component={LoadingScreen} />
    )

    if(this.state.isCheckingTokenStorage)
    {
      console.log('Checking is token stored');
      return checkingForTokenStorage;
    }
    else
    {
      if(this.state.activeJWT != null)
      {
        console.log('JWT Token found, displaying application logged in views');
        return app;
      }
      else
      {
        console.log('JWT Token not found, displaying application authentication views');
        return authScreens;
      }
    }
    console.error('Incorrect authLogic function processing');
  }

  onLogout = () => {
    console.log("Logout clicked");
    this.setState({ activeJWT: null });
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            { this.authLogic() }
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
