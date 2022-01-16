import { User } from '../entities/User';
import { CreateUuid } from '../providers/CreateUuid/CreateUuid';
import { UserRepository } from '../repositories/user/UserRepository';
import {
  CreateAccountInput,
  CreateAccountOutput,
  CreateAccount,
} from '../usecases/CreateAccount';

export class CreateAccountService implements CreateAccount {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly createUuid: CreateUuid
  ) {}

  async exec({
    login: email,
    password,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    const id = await this.createUuid.exec();
    const user = new User({
      id,
      email,
      password,
    });

    const findedEmail = await this.userRepository.getByEmail(email);

    if (findedEmail) {
      throw new Error('Account already exist');
    }

    await this.userRepository.save(user);

    const output: CreateAccountOutput = {
      id,
      login: email,
    };

    return output;
  }
}
