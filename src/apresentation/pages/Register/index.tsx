import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../../assets/logo.svg';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { InputWithIcon } from '../../components/Inputs/plugins/InputWithIcon';
import { ButtonTouchableOpacity } from '../../components/Buttons/ButtonTouchableOpacity';
import { InputPasswordWithBackground } from '../../components/Inputs/plugins/InputPasswordWithBackground';

export function Register() {
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
          <Text style={styles.title}>CADASTRE-SE</Text>
        </View>
        <View style={styles.formView}>
          <InputWithIcon
            keyboardType="email-address"
            placeholder="Email"
            autoComplete="email"
            marginBottom={15}
            backgroundColor={colors.yellow_transparent}
            nameIcon="email-outline"
            useIcon
          />
          <InputPasswordWithBackground
            placeholder="Senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
            marginBottom={15}
          />
          <InputPasswordWithBackground
            placeholder="Confirmar a senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
          />
          <View style={styles.buttonContainer}>
            <ButtonTouchableOpacity
              marginTop={50}
              text="Criar a conta"
              onPress={() => console.log('clicou no botão criar conta')}
            />
          </View>
        </View>
        <TextInput />
      </View>
    </LinearGradient>
  );
}
