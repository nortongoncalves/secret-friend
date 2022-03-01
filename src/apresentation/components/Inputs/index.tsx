/* eslint-disable react/function-component-definition */
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { StylesParams, createStyles } from './styles';

export type InputParams = TextInputProps & StylesParams;

const Input: ForwardRefRenderFunction<TextInput, InputParams> = (
  props,
  ref
) => {
  const { placeholderTextColor, styles } = createStyles(props);

  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={placeholderTextColor}
      {...props}
      ref={ref}
    />
  );
};

export default forwardRef(Input);
