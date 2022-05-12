import JWT from 'expo-jwt';
import { REACT_APP_SECRET_TOKEN } from 'react-native-dotenv';
import {
  VerifyToken as InterfaceVerifyToken,
  VerifyTokenParams,
} from '../../../data/drivers/Token/VerifyToken';

export type IVerifyToken = InterfaceVerifyToken<string, any>;

export class VerifyToken implements IVerifyToken {
  async exec({ token }: VerifyTokenParams) {
    const decode = JWT.decode(token, REACT_APP_SECRET_TOKEN);
    return {
      decode,
    };
  }
}
