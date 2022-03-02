import { User } from '../../../domain/entities/User';

export type UserRepositoryParams = User;
export type UserRepositoryResponse = User;

export interface UserRepository {
  save(params: UserRepositoryParams): Promise<UserRepositoryResponse>;
  getByEmail(email: string): Promise<UserRepositoryResponse | undefined>;
}
