import {
  UserRepository,
  UserRepositoryInput,
  UserRepositoryOutput,
} from '../../../../src/repositories/user/UserRepository';

export class UserRepositorySpy implements UserRepository {
  callsCount = 0;

  data: UserRepositoryOutput[] = [];

  async save(user: UserRepositoryInput): Promise<UserRepositoryOutput> {
    this.callsCount += 1;
    this.data = [...this.data, user];
    return user;
  }

  async getByEmail(email: string): Promise<UserRepositoryOutput | undefined> {
    return this.data.find((user) => user.email === email);
  }
}
