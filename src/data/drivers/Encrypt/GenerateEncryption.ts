export type GenerateEncryptionParams = {
  value: string;
};

export type GenerateEncryptionResponse = {
  encryptedValue: string;
};

export interface GenerateEncryption {
  exec: (
    params: GenerateEncryptionParams
  ) => Promise<GenerateEncryptionResponse>;
}
