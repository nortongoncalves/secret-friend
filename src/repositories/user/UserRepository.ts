import { User } from '../../entities/User';

export type UserRepositoryInput = User;
export type UserRepositoryOutput = User;

export interface UserRepository {
  save(params: UserRepositoryInput): Promise<UserRepositoryOutput>;
  getByEmail(email: string): Promise<UserRepositoryOutput | undefined>;
}
