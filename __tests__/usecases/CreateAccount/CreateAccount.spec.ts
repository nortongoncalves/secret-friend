import { CreateUuid } from '../mocks/CreateUuidMock';
import { CreateAccountService } from '../../../src/services/CreateAccountService';
import { UserRepositorySpy } from '../mocks/UserRepositorySpy';
import { GenerateEncryptionMock } from '../mocks/GenerateEncryptionMock';
import { CreateAccount } from '../../../src/usecases/CreateAccount';

type makeSutResponse = {
  sut: CreateAccount;
  userRepository: UserRepositorySpy;
};

const makeSut = (): makeSutResponse => {
  const userRepository = new UserRepositorySpy();
  const createUuid = new CreateUuid();
  const generateEncryption = new GenerateEncryptionMock();
  const sut = new CreateAccountService(
    userRepository,
    createUuid,
    generateEncryption
  );
  return {
    sut,
    userRepository,
  };
};

describe('CreateAccount', () => {
  it('should return the user with uuid', async () => {
    const { sut } = makeSut();
    const response = await sut.exec({
      login: 'johndoe@email.com',
      password: 'john123',
    });
    expect(response.id).toBe('uuid-generated');
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

  it('should get user with a password encrypted', async () => {
    const { sut, userRepository } = makeSut();
    await sut.exec({
      login: 'johndoe@email.com',
      password: 'john123',
    });

    const user = await userRepository.getByEmail('johndoe@email.com');
    expect(user?.password).toBe('john123password-encrypted');
  });
});
