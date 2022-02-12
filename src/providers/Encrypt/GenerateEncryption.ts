export type GenerateEncryptionParams = {
  password: string;
};

export type GenerateEncryptionResponse = {
  password: string;
};

export interface GenerateEncryption {
  exec(params: GenerateEncryptionParams): Promise<GenerateEncryptionResponse>;
}
