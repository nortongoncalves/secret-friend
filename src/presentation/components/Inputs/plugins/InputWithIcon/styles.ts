import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/colors';

export type StylesParams = {
  backgroundColor?: string;
  marginBottom?: number;
  marginTop?: number;
  onError?: boolean;
};

export const createStyles = ({
  backgroundColor = colors.red_transparent,
  marginBottom = 0,
  marginTop = 0,
  onError,
}: StylesParams) => {
  let borderBottomColor = backgroundColor;
  let borderBottomWidth = 0;

  if (onError) {
    borderBottomColor = 'red';
    borderBottomWidth = 3;
  }

  return StyleSheet.create({
    body: {
      marginBottom,
      marginTop,
      width: '100%',
      minHeight: 40,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      minHeight: 40,
      borderRadius: 3,
      backgroundColor,
      borderBottomColor,
      borderBottomWidth,
      paddingHorizontal: 10,
    },
    icon: {
      flex: 0.1,
      textAlign: 'right',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginLeft: 2,
      marginTop: 2,
    },
  });
};
