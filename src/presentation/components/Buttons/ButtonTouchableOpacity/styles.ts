import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export type StylesParams = {
  backgroundColor?: string;
  marginTop?: number;
};

export const createStyles = ({
  backgroundColor = colors.dark_gray,
  marginTop = 0,
}: StylesParams) => {
  return StyleSheet.create({
    button: {
      width: '50%',
      height: 40,
      borderRadius: 3,
      paddingLeft: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop,
      backgroundColor,
    },
    text: {
      color: colors.white_text_color,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
};
