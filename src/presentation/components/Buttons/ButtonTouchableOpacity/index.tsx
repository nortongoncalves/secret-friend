import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { createStyles, StylesParams } from './styles';

interface ButtonTouchableOpacityParams
  extends TouchableOpacityProps,
    StylesParams {
  text?: string;
}

export function ButtonTouchableOpacity({
  text,
  ...props
}: ButtonTouchableOpacityParams) {
  const styles = createStyles(props);

  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
