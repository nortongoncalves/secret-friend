import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../../assets/logo.svg';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { InputWithBackground } from '../../components/Inputs/InputWithBackground';

export function Login() {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[
        colors.linear_background1,
        colors.linear_background2,
        colors.linear_background3,
      ]}
    >
      <View style={styles.containerTop}>
        <Logo width={130} height={102} style={styles.icon} />
        <View style={styles.viewTitle}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.formView}>
          <InputWithBackground
            keyboardType="email-address"
            placeholder="Email"
            autoComplete="email"
            marginBottom={15}
          />
          <InputWithBackground
            placeholder="Senha"
            autoComplete="password"
            secureTextEntry
          />
        </View>
        <TextInput />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.groupTextBottom}>
          <Text style={styles.firstTextBottom}>
            Ainda não possui uma conta ?
          </Text>
          <Text style={styles.secondTextBottom}>Faça seu cadastro</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
