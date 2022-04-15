import { CreateAccount } from '../../../data/usecases/CreateAccount';
import { CreateAccount as ICreateAccount } from '../../../domain/usecases/CreateAccount';
import { makeGenerateEncryption } from '../drivers/Encrypt/GenerateEncryptionFactory';
import { makeCreateUuid } from '../drivers/Uuid/CreateUuidFactory';
import { makeUserRepository } from '../repositories/user/UserRepositoryFactory';

export function makeCreateAccount(): ICreateAccount {
  return new CreateAccount(
    makeUserRepository(),
    makeCreateUuid(),
    makeGenerateEncryption()
  );
}
