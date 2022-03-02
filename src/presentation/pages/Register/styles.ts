import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
  containerTop: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    marginBottom: 60,
  },
  viewTitle: {
    alignSelf: 'flex-start',
    width: '100%',
    borderBottomColor: colors.yellow,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.yellow,
  },
  formView: {
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
