import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, InputParams } from '../..';
import { createStyles, StylesParams } from './styles';

export type InputWithIconParams = InputParams &
  StylesParams & {
    onPressIcon?: () => void | undefined;
    nameIcon?: string;
    useIcon?: boolean;
  };

export function InputWithIcon({
  onPressIcon,
  nameIcon = '',
  useIcon = false,
  ...props
}: InputWithIconParams) {
  const styles = createStyles(props);

  return (
    <View style={styles.container}>
      <Input {...props} />
      {useIcon && (
        <Icon
          style={styles.icon}
          name={nameIcon}
          size={20}
          color="#FFF"
          onPress={onPressIcon}
        />
      )}
    </View>
  );
}
