export interface CreateUser {
  exec: (params: CreateUserParams) => void;
}

export type CreateUserParams = {
  login: string;
  password: string;
};
