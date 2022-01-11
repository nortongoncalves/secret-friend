import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Logo from '../../../assets/logo.svg';

const page = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Login() {
  return (
    <View style={page.container}>
      <Logo width={130} height={102} />
      <View>
        <Text>LOGIN</Text>
      </View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" />
      <TextInput />
    </View>
  );
}
