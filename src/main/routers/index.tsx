import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login } from '../../presentation/pages/Login';
import { Register } from '../../presentation/pages/Register';

const Stack = createNativeStackNavigator();

export function Routers() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
