import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export type StylesParams = {
  placeholderTextColor?: string;
};

export const createStyles = ({
  placeholderTextColor = colors.white_text_color,
}: StylesParams) => {
  const styles = StyleSheet.create({
    input: {
      color: colors.white_text_color,
      fontWeight: '700',
      minHeight: 40,
      marginBottom: 0,
      backgroundColor: 'transparent',
      flex: 0.9,
    },
  });
  return {
    styles,
    placeholderTextColor,
  };
};
