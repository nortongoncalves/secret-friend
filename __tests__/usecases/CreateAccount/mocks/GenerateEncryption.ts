import {
  GenerateEncryption as IGenerateEncryption,
  GenerateEncryptionInput,
  GenerateEncryptionOutput,
} from '../../../../src/providers/Encrypt/GenerateEncryption';

export class GenerateEncryption implements IGenerateEncryption {
  async exec(
    params: GenerateEncryptionInput
  ): Promise<GenerateEncryptionOutput> {
    const password = `${params.password}password-encrypted`;
    return {
      password,
    };
  }
}
