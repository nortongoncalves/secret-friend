import {
  GenerateEncryption as IGenerateEncryption,
  GenerateEncryptionParams,
  GenerateEncryptionResponse,
} from '../../../src/providers/Encrypt/GenerateEncryption';

export class GenerateEncryptionMock implements IGenerateEncryption {
  async exec(
    params: GenerateEncryptionParams
  ): Promise<GenerateEncryptionResponse> {
    const password = `${params.password}password-encrypted`;
    return {
      password,
    };
  }
}
