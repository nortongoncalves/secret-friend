export type CreateTokenParams = {
  id: string;
};

export type CreateTokenResponse = {
  token: string;
};

export interface CreateToken {
  exec(params: CreateTokenParams): Promise<CreateTokenResponse>;
}
