import { sign } from 'jsonwebtoken';
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
    const token = await sign({ id }, REACT_APP_SECRET_TOKEN, {
      expiresIn,
    });
    return {
      token,
    };
  }
}
