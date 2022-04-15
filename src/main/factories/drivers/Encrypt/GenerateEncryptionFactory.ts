import { GenerateEncryption as IGenerateEncryption } from '../../../../data/drivers/Encrypt/GenerateEncryption';
import { GenerateEncryption } from '../../../../infra/drivers/Encrypt/GenerateEncryption';

export function makeGenerateEncryption(): IGenerateEncryption {
  return new GenerateEncryption();
}
