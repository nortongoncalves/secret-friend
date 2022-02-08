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
    borderBottomColor: colors.red,
    borderBottomWidth: 1,
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.red,
  },
  formView: {
    width: '100%',
  },
  containerBottom: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: colors.gray,
  },
  groupTextBottom: {
    flexDirection: 'row',
    marginTop: 15,
  },
  firstTextBottom: {
    fontSize: 14,
    color: colors.dark_gray,
    marginRight: 5,
  },
  secondTextBottom: {
    fontSize: 14,
    color: colors.purple_transparent,
  },
});
