import { CreateSession } from '../../../data/usecases/CreateSession';
import { CreateSession as ICreateAccount } from '../../../domain/usecases/CreateSession';
import { makeGenerateEncryption } from '../drivers/Encrypt/GenerateEncryptionFactory';
import { makeCreateToken } from '../drivers/Token/CreateTokenFactory';
import { makeUserRepository } from '../repositories/user/UserRepositoryFactory';

export function makeCreateSession(): ICreateAccount {
  return new CreateSession(
    makeUserRepository(),
    makeGenerateEncryption(),
    makeCreateToken()
  );
}
