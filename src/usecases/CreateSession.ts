export type CreateSessionParams = {
  email: string;
  password: string;
};

export type CreateSessionResponse = {
  token: string;
};

export interface CreateSession {
  exec(params: CreateSessionParams): Promise<CreateSessionResponse>;
}
