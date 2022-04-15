import { User } from '../../domain/entities/User';
import { GenerateEncryption } from '../drivers/Encrypt/GenerateEncryption';
import { CreateUuid } from '../drivers/Uuid/CreateUuid';
import { UserRepository } from '../../domain/repositories/user/UserRepository';
import {
  CreateAccountParams,
  CreateAccountResponse,
  CreateAccount as ICreateAccount,
} from '../../domain/usecases/CreateAccount';

export class CreateAccount implements ICreateAccount {
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
      value: password,
    });

    const user = new User({
      id,
      email,
      password: generateEncryptionResponse.encryptedValue,
    });

    await this.userRepository.save(user);

    const output: CreateAccountResponse = {
      id,
      login: email,
    };

    return output;
  }
}
