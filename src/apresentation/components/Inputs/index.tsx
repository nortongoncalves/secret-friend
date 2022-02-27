import { TextInput, TextInputProps } from 'react-native';
import { StylesParams, createStyles } from './styles';

export type InputParams = TextInputProps & StylesParams;

export function Input(props: InputParams) {
  const { placeholderTextColor, styles } = createStyles(props);

  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={placeholderTextColor}
      {...props}
    />
  );
}
