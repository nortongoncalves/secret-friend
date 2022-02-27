import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

export type StylesParams = {
  backgroundColor?: string;
  marginBottom?: number;
  marginTop?: number;
};

export const createStyles = ({
  backgroundColor = colors.red_transparent,
  marginBottom = 0,
  marginTop = 0,
}: StylesParams) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: 40,
      borderRadius: 3,
      marginBottom,
      marginTop,
      backgroundColor,
      paddingHorizontal: 10,
    },
    icon: {
      flex: 0.1,
      textAlign: 'right',
    },
  });
};
