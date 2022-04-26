import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Login } from '../../../../presentation/pages/Login';
import { makeCreateSession } from '../../usecases/CreateSessionFactory';

export type LoginFactoryParams = {
  navigation: NavigationProp<ParamListBase>;
};

export function LoginFactory({ navigation }: LoginFactoryParams) {
  return <Login createSession={makeCreateSession()} navigation={navigation} />;
}
