import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { createStyles, StylesParams } from './styles';

interface ButtonTouchableOpacityParams
  extends TouchableOpacityProps,
    StylesParams {
  text?: string;
}

export function ButtonTouchableOpacity({
  text,
  activeOpacity = 0.5,
  ...props
}: ButtonTouchableOpacityParams) {
  const styles = createStyles(props);

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={activeOpacity}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
