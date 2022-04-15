import { REACT_APP_SECRET_KEY } from 'react-native-dotenv';
import { HmacSHA256 } from 'crypto-js';
import {
  GenerateEncryption as IGenerateEncryption,
  GenerateEncryptionParams,
  GenerateEncryptionResponse,
} from '../../../data/drivers/Encrypt/GenerateEncryption';

export class GenerateEncryption implements IGenerateEncryption {
  async exec(
    params: GenerateEncryptionParams
  ): Promise<GenerateEncryptionResponse> {
    const secret = REACT_APP_SECRET_KEY;
    const hash = HmacSHA256(params.value, secret).toString();
    return { encryptedValue: hash };
  }
}
