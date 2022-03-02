import React, { useEffect, useRef } from 'react';
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

export function Register() {
  const emailInputRef = useRef<InputWithIconForwardRefOutput>(null);
  const passwordInputRef = useRef<InputWithIconForwardRefOutput>(null);
  const confirmPasswordInputRef = useRef<InputWithIconForwardRefOutput>(null);

  const validaConfirmPassword = () => {
    const password = passwordInputRef.current?.value;
    const confirmPassword = confirmPasswordInputRef.current?.value;

    if (String(password) === String(confirmPassword)) {
      confirmPasswordInputRef.current?.setError(false);
      confirmPasswordInputRef.current?.setMessageError('');
      return;
    }

    confirmPasswordInputRef.current?.setError(true);
    confirmPasswordInputRef.current?.setMessageError(
      'As senhas estão diferentes'
    );
  };

  const handleSubmitEmailInput = () => {
    passwordInputRef.current?.focus();
  };

  const handleSubmitPasswordInput = () => {
    confirmPasswordInputRef.current?.focus();
  };

  const someEmptyInputs = () => {
    const auxObject = [
      emailInputRef.current?.value,
      passwordInputRef.current?.value,
      confirmPasswordInputRef.current?.value,
    ];
    return auxObject.some((value) => value === '' || value === undefined);
  };

  const invalidForm = (): boolean | undefined => {
    emailInputRef.current?.blur();
    passwordInputRef.current?.blur();
    confirmPasswordInputRef.current?.blur();
    return (
      emailInputRef.current?.onError ||
      passwordInputRef.current?.onError ||
      confirmPasswordInputRef.current?.onError ||
      someEmptyInputs()
    );
  };

  const submit = () => {
    if (invalidForm() === true) {
      return;
    }

    const login = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const confirmPassword = confirmPasswordInputRef.current?.value;
    console.log(
      'login: ',
      login,
      ' password: ',
      password,
      ' confirmPassword: ',
      confirmPassword
    );
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
          />
          <InputPasswordWithBackground
            placeholder="Senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
            marginBottom={15}
            ref={passwordInputRef}
            returnKeyType="next"
            onTextInput={validaConfirmPassword}
            onSubmitEditing={handleSubmitPasswordInput}
          />
          <InputPasswordWithBackground
            placeholder="Confirmar a senha"
            autoComplete="password"
            backgroundColor={colors.yellow_transparent}
            ref={confirmPasswordInputRef}
            onTextInput={validaConfirmPassword}
            onSubmitEditing={submit}
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
