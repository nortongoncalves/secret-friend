import { REACT_APP_SECRET_KEY } from 'react-native-dotenv';
import * as Crypto from 'expo-crypto';
import { CryptoEncoding } from 'expo-crypto';
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
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      params.value,
      { encoding: CryptoEncoding.HEX }
    );
    return { encryptedValue: hash };
  }
}
