export type CreateTokenParams = {
  id: string;
  expiresIn?: number;
};

export type CreateTokenResponse = {
  token: string;
};

export interface CreateToken {
  exec: (params: CreateTokenParams) => Promise<CreateTokenResponse>;
}
