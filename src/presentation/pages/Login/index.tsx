import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from '@react-navigation/native';
import Logo from '../../../assets/logo.svg';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import InputWithIcon, {
  InputWithIconForwardRefOutput,
} from '../../components/Inputs/plugins/InputWithIcon';
import { ButtonTouchableOpacity } from '../../components/Buttons/ButtonTouchableOpacity';
import InputPasswordWithIcon from '../../components/Inputs/plugins/InputPasswordWithIcon';
import { validateInvalidForm } from '../../utils/validateInvalidForm';
import { CreateSession } from '../../../domain/usecases/CreateSession';
import { LoginFactoryParams } from '../../../main/factories/pages/Login';

export type LoginProps = LoginFactoryParams & {
  createSession: CreateSession;
};

export function Login({ createSession }: LoginProps) {
  const loginInputRef = useRef<InputWithIconForwardRefOutput>(null);
  const passwordInputRef = useRef<InputWithIconForwardRefOutput>(null);

  const validateInvalidFormFactory = () => {
    return validateInvalidForm({
      inputsRefs: [loginInputRef, passwordInputRef],
    });
  };

  const submit = async () => {
    if (validateInvalidFormFactory() === true) {
      return;
    }

    const login = loginInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    if (!login || !password) {
      return;
    }

    try {
      const response = await createSession.exec({
        email: login,
        password,
      });
      console.log('response: ', response);
      // navigation.navigate('Login', response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitLoginInput = () => {
    passwordInputRef.current?.focus();
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
        <View style={styles.titleView}>
          <Text style={styles.title}>LOGIN</Text>
        </View>
        <View style={styles.formView}>
          <InputWithIcon
            keyboardType="email-address"
            placeholder="Login"
            autoComplete="email"
            marginBottom={15}
            nameIcon="email-outline"
            ref={loginInputRef}
            returnKeyType="next"
            onSubmitEditing={handleSubmitLoginInput}
            required
          />
          <InputPasswordWithIcon
            placeholder="Senha"
            autoComplete="password"
            ref={passwordInputRef}
            onSubmitEditing={submit}
            required
          />
          <Link to={{ screen: 'Login' }} style={styles.forgotPasswordText}>
            Esqueceu a senha ?
          </Link>
          <View style={styles.buttonContainer}>
            <ButtonTouchableOpacity
              marginTop={50}
              text="Entrar"
              onPress={submit}
            />
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.textButtonGroup}>
          <Text style={styles.firstTextBottom}>
            Ainda não possui uma conta ?
          </Text>
          <Link to={{ screen: 'Register' }} style={styles.secondTextBottom}>
            Faça seu cadastro
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}
