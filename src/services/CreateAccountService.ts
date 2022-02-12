import { User } from '../entities/User';
import { GenerateEncryption } from '../providers/Encrypt/GenerateEncryption';
import { CreateUuid } from '../providers/Uuid/CreateUuid';
import { UserRepository } from '../repositories/user/UserRepository';
import {
  CreateAccountParams,
  CreateAccountResponse,
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
  }: CreateAccountParams): Promise<CreateAccountResponse> {
    const id = await this.createUuid.exec();
    const foundEmail = await this.userRepository.getByEmail(email);

    if (foundEmail) {
      throw new Error('Email já registrado');
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

    const output: CreateAccountResponse = {
      id,
      login: email,
    };

    return output;
  }
}
