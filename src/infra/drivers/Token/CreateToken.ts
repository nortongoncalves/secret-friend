import JWT from 'expo-jwt';
import { SupportedAlgorithms } from 'expo-jwt/dist/types/algorithms';
import { REACT_APP_SECRET_TOKEN } from 'react-native-dotenv';
import {
  CreateToken as ICreateToken,
  CreateTokenParams,
  CreateTokenResponse,
} from '../../../data/drivers/Token/CreateToken';

export class CreateToken implements ICreateToken {
  async exec({
    id,
    expiresIn = 300,
  }: CreateTokenParams): Promise<CreateTokenResponse> {
    const token = await JWT.encode({ id }, REACT_APP_SECRET_TOKEN, {
      algorithm: SupportedAlgorithms.HS512,
    });
    return {
      token,
    };
  }
}
