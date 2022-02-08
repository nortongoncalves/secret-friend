import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

type StylesParams = {
  backgroundColor: string;
  marginBottom: number;
};

export const styles = ({ backgroundColor, marginBottom }: StylesParams) => {
  return StyleSheet.create({
    Input: {
      width: '100%',
      height: 40,
      alignSelf: 'flex-start',
      borderRadius: 3,
      paddingLeft: 10,
      color: colors.white_text_color,
      fontWeight: '700',
      marginBottom,
      backgroundColor,
    },
  }).Input;
};

export const placeholderTextColor = colors.white_text_color;
