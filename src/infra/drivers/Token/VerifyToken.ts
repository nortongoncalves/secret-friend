import { JwtPayload, verify } from 'jsonwebtoken';
import { REACT_APP_SECRET_TOKEN } from 'react-native-dotenv';
import {
  VerifyToken as InterfaceVerifyToken,
  VerifyTokenParams,
} from '../../../data/drivers/Token/VerifyToken';

export type IVerifyToken = InterfaceVerifyToken<string | JwtPayload>;

export class VerifyToken implements IVerifyToken {
  async exec({ token }: VerifyTokenParams) {
    const decode = verify(token, REACT_APP_SECRET_TOKEN);
    return {
      decode,
    };
  }
}
