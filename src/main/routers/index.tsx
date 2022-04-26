import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginFactory } from '../factories/pages/Login';
import { RegisterFactory } from '../factories/pages/Register';

const Stack = createNativeStackNavigator();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginFactory}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={RegisterFactory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
