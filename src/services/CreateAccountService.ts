import { User } from '../entities/User';
import { GenerateEncryption } from '../providers/Encrypt/GenerateEncryption';
import { CreateUuid } from '../providers/Uuid/CreateUuid';
import { UserRepository } from '../repositories/user/UserRepository';
import {
  CreateAccountInput,
  CreateAccountOutput,
  CreateAccount,
} from '../usecases/CreateAccount';

export class CreateAccountService implements CreateAccount {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly createUuid: CreateUuid,
    private readonly generateEncryption: GenerateEncryption
  ) {}

  async exec({
    login: email,
    password,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    const id = await this.createUuid.exec();
    const findedEmail = await this.userRepository.getByEmail(email);

    if (findedEmail) {
      throw new Error('Account already exist');
    }

    const generateEncryptionResponse = await this.generateEncryption.exec({
      password,
    });

    const user = new User({
      id,
      email,
      password: generateEncryptionResponse.password,
    });

    await this.userRepository.save(user);

    const output: CreateAccountOutput = {
      id,
      login: email,
    };

    return output;
  }
}
