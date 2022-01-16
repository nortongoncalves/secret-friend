import { CreateUuid } from '../../src/providers/CreateUuid/implementation/CreateUuid';
import {
  UserRepository,
  UserRepositoryInput,
  UserRepositoryOutput,
} from '../../src/repositories/user/UserRepository';

import { CreateAccountService } from '../../src/services/CreateAccountService';

class UserRepositorySpy implements UserRepository {
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

type makeSutOutput = {
  sut: CreateAccountService;
};

const makeSut = (): makeSutOutput => {
  const userRepository = new UserRepositorySpy();
  const createUuid = new CreateUuid();
  const sut = new CreateAccountService(userRepository, createUuid);
  return {
    sut,
  };
};

describe('CreateUser', () => {
  it('should return the user with uuid', async () => {
    const { sut } = makeSut();
    const anyUuid = 'cd77ee99-50a2-455c-b831-334a675fbd09';
    const response = await sut.exec({
      login: 'johndoe@email.com',
      password: 'john123',
    });
    expect(response.id.length).toBe(anyUuid.length);
  });

  it('should not create user with repeated email', async () => {
    const { sut } = makeSut();
    await sut.exec({
      login: 'johndoe@email.com',
      password: 'john123',
    });
    await expect(
      sut.exec({
        login: 'johndoe@email.com',
        password: 'john123',
      })
    ).rejects.toBeInstanceOf(Error);
  });
});
