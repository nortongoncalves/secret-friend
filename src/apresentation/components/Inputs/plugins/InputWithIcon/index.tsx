/* eslint-disable react/function-component-definition */
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input, { InputParams } from '../..';
import { createStyles, StylesParams } from './styles';

export type InputWithIconParams = InputParams &
  StylesParams & {
    onPressIcon?: () => void | undefined;
    nameIcon?: string;
  };

export type InputWithIconForwardRefOutput = {
  focus: () => void;
  blur: () => void;
  value: string;
  onError: boolean;
  setError: (value: boolean) => void;
  messageError: string;
  setMessageError: (value: string) => void;
};

const InputWithIcon: ForwardRefRenderFunction<
  InputWithIconForwardRefOutput,
  InputWithIconParams
> = ({ onPressIcon, nameIcon = '', ...props }, ref) => {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [onError, setOnError] = useState<boolean>(false);
  const [onMessageError, setOnMessageError] = useState<string>('');
  const styles = createStyles({ onError, ...props });

  const focus = () => {
    inputRef.current?.focus();
  };

  const blur = () => {
    inputRef.current?.blur();
  };

  const setError = (value: boolean) => {
    setOnError(value);
  };

  const setMessageError = (value: string) => {
    setOnMessageError(value);
  };

  useImperativeHandle(ref, () => {
    return {
      blur,
      focus,
      value: inputValue,
      onError,
      setError,
      messageError: onMessageError,
      setMessageError,
    };
  });

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Input
          {...props}
          ref={inputRef}
          onChangeText={(value) => setInputValue(value)}
        />
        <Icon
          style={styles.icon}
          name={nameIcon}
          size={20}
          color="#FFF"
          onPress={onPressIcon}
        />
      </View>
      {onError && <Text style={styles.errorText}>{onMessageError}</Text>}
    </View>
  );
};

export default forwardRef(InputWithIcon);
