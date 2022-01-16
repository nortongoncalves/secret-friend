export interface CreateAccount {
  exec(params: CreateAccountInput): Promise<CreateAccountOutput>;
}

export type CreateAccountInput = {
  login: string;
  password: string;
};

export type CreateAccountOutput = {
  id: string;
  login: string;
};
