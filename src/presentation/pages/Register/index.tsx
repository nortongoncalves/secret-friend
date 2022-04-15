import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '../../../assets/logo.svg';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import InputWithIcon, {
  InputWithIconForwardRefOutput,
} from '../../components/Inputs/plugins/InputWithIcon';
import { ButtonTouchableOpacity } from '../../components/Buttons/ButtonTouchableOpacity';
import InputPasswordWithBackground from '../../components/Inputs/plugins/InputPasswordWithIcon';
import { CreateAccount } from '../../../domain/usecases/CreateAccount';
import { RegisterFactoryParams } from '../../../main/factories/pages/Register';
import { validateConfirmPasswords } from '../../utils/validateConfirmPasswords';
import { validateInvalidForm } from '../../utils/validateInvalidForm';

export type props = RegisterFactoryParams & {
  createAccount: CreateAccount;
};

export function Register({ createAccount, navigation }: props) {
  const emailInputRef = useRef<InputWithIconForwardRefOutput>(null);
  const passwordInputRef = useRef<InputWithIconForwardRefOutput>(null);
  const confirmPasswordInputRef = useRef<InputWithIconForwardRefOutput>(null);

  const validateConfirmPasswordsFactory = () => {
    validateConfirmPasswords({
      confirmPasswordInputRef,
      passwordInputRef,
    });
  };

  const validateInvalidFormFactory = () => {
    return validateInvalidForm({
      inputsRefs: [emailInputRef, passwordInputRef, confirmPasswordInputRef],
    });
  };

  const handleSubmitEmailInput = () => {
    passwordInputRef.current?.focus();
  };

  const handleSubmitPasswordInput = () => {
    confirmPasswordInputRef.current?.focus();
  };

  const submit = async () => {
    if (validateInvalidFormFactory() === true) {
      return;
    }

    const login = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!login || !password) {
      return;
    }

    try {
      const response = await createAccount.exec({
        login,
        password,
      });
      navigation.navigate('Login', response);
    } catch (error) {
      console.error(error);
    }
  };

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
            ref={emailInputRef}
            returnKeyType="next"
            onSubmitEditing={handleSubmitEmailInput}
            required
          />
          <InputPasswordWithBackground
            placeholder="Senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
            marginBottom={15}
            ref={passwordInputRef}
            returnKeyType="next"
            onTextInput={validateConfirmPasswordsFactory}
            onSubmitEditing={handleSubmitPasswordInput}
            required
          />
          <InputPasswordWithBackground
            placeholder="Confirmar a senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
            ref={confirmPasswordInputRef}
            onTextInput={validateConfirmPasswordsFactory}
            onSubmitEditing={submit}
            required
          />
          <View style={styles.buttonContainer}>
            <ButtonTouchableOpacity
              marginTop={50}
              text="Criar a conta"
              onPress={submit}
            />
          </View>
        </View>
        <TextInput />
      </View>
    </LinearGradient>
  );
}
