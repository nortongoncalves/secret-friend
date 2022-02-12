import { TextInput, TextInputProps } from 'react-native';
import { colors } from '../../../styles/colors';
import { placeholderTextColor, styles } from './styles';

interface InputWithBackgroundParams extends TextInputProps {
  backgroundColor?: string;
  marginBottom?: number;
}

export function InputWithBackground({
  backgroundColor = colors.red_transparent,
  marginBottom = 0,
  ...props
}: InputWithBackgroundParams) {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={styles({ backgroundColor, marginBottom })}
      {...props}
    />
  );
}
