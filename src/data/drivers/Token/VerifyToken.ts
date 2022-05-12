export type VerifyTokenParams = {
  token: string;
};

export type VerifyTokenResponse<T, U> = {
  decode: T | U;
};

export interface VerifyToken<T, U> {
  exec: (params: VerifyTokenParams) => Promise<VerifyTokenResponse<T, U>>;
}
