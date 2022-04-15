export type VerifyTokenParams = {
  token: string;
};

export type VerifyTokenResponse<T> = {
  decode: T;
};

export interface VerifyToken<T> {
  exec: (params: VerifyTokenParams) => Promise<VerifyTokenResponse<T>>;
}
