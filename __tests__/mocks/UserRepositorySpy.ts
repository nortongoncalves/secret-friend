import {
  UserRepository,
  UserRepositoryParams,
  UserRepositoryResponse,
} from '../../src/domain/repositories/user/UserRepository';

export class UserRepositorySpy implements UserRepository {
  callsCount = 0;

  data: UserRepositoryResponse[] = [];

  async save(user: UserRepositoryParams): Promise<UserRepositoryResponse> {
    this.callsCount += 1;
    this.data = [...this.data, user];
    return user;
  }

  async getByEmail(email: string): Promise<UserRepositoryResponse | undefined> {
    return this.data.find((user) => user.email === email);
  }
}
