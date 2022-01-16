export type GenerateEncryptionInput = {
  password: string;
};

export type GenerateEncryptionOutput = {
  password: string;
};

export interface GenerateEncryption {
  exec(params: GenerateEncryptionInput): Promise<GenerateEncryptionOutput>;
}
