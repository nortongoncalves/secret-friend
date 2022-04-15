import {
  GenerateEncryption as IGenerateEncryption,
  GenerateEncryptionParams,
  GenerateEncryptionResponse,
} from '../../src/data/drivers/Encrypt/GenerateEncryption';

export class GenerateEncryptionMock implements IGenerateEncryption {
  async exec(
    params: GenerateEncryptionParams
  ): Promise<GenerateEncryptionResponse> {
    const password = `${params.value}password-encrypted`;
    return {
      encryptedValue: password,
    };
  }
}
