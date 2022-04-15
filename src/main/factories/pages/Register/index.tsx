import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Register } from '../../../../presentation/pages/Register';
import { makeCreateAccount } from '../../usecases/CreateAccountFactory';

export type RegisterFactoryParams = {
  navigation: NavigationProp<ParamListBase>;
};

export function RegisterFactory({
  navigation,
}: RegisterFactoryParams): JSX.Element {
  return (
    <Register createAccount={makeCreateAccount()} navigation={navigation} />
  );
}
