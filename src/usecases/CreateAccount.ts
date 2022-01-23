export interface CreateAccount {
  exec(params: CreateAccountParams): Promise<CreateAccountResponse>;
}

export type CreateAccountParams = {
  login: string;
  password: string;
};

export type CreateAccountResponse = {
  id: string;
  login: string;
};
