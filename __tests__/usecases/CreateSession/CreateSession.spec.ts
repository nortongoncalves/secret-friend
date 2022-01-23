import { CreateSessionService } from '../../../src/services/CreateSessionService';
import { CreateSession } from '../../../src/usecases/CreateSession';
import { CreateTokenMock } from '../mocks/CreateTokenMock';
import { GenerateEncryptionMock } from '../mocks/GenerateEncryptionMock';
import { UserRepositorySpy } from '../mocks/UserRepositorySpy';

type makeSutResponse = {
  sut: CreateSession;
  userRepository: UserRepositorySpy;
};

const makeSut = (): makeSutResponse => {
  const userRepository = new UserRepositorySpy();
  const generateEncryption = new GenerateEncryptionMock();
  const createToken = new CreateTokenMock();
  const sut = new CreateSessionService(
    userRepository,
    generateEncryption,
    createToken
  );
  return {
    sut,
    userRepository,
  };
};

describe('CreateSession', () => {
  it('should be able to create a session and return an object with a property called token', async () => {
    const { sut, userRepository } = makeSut();
    userRepository.data = [
      {
        id: 'uuid-generated',
        email: 'johndoe@gmail.com',
        password: 'johndoe123password-encrypted',
      },
    ];

    const response = await sut.exec({
      email: 'johndoe@gmail.com',
      password: 'johndoe123',
    });

    expect(response).toHaveProperty('token');
  });

  it('should not be able to create a session without a registered account', async () => {
    const { sut, userRepository } = makeSut();
    userRepository.data = [
      {
        id: 'uuid-generated',
        email: 'johndoe@gmail.com',
        password: 'johndoe123password-encrypted',
      },
    ];

    await expect(
      sut.exec({
        email: 'unregistred@gmail.com',
        password: 'johndoe123',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create a session with a password not match the registered password', async () => {
    const { sut, userRepository } = makeSut();
    userRepository.data = [
      {
        id: 'uuid-generated',
        email: 'johndoe@gmail.com',
        password: 'johndoe123password-encrypted',
      },
    ];

    await expect(
      sut.exec({
        email: 'johndoe@gmail.com',
        password: 'johndoe',
      })
    ).rejects.toBeInstanceOf(Error);
  });

  it('should be able to create a session and return a token along with a userid', async () => {
    const { sut, userRepository } = makeSut();
    userRepository.data = [
      {
        id: 'uuid-generated',
        email: 'johndoe@gmail.com',
        password: 'johndoe123password-encrypted',
      },
    ];

    const { token } = await sut.exec({
      email: 'johndoe@gmail.com',
      password: 'johndoe123',
    });

    expect(token).toBe('uuid-generated-token');
  });
});
