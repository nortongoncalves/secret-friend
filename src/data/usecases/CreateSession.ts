import { GenerateEncryption } from '../drivers/Encrypt/GenerateEncryption';
import { CreateToken } from '../drivers/Token/CreateToken';
import { UserRepository } from '../repositories/user/UserRepository';
import {
  CreateSession as ICreateSession,
  CreateSessionResponse,
  CreateSessionParams,
} from '../../domain/usecases/CreateSession';

export class CreateSession implements ICreateSession {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly generateEncryption: GenerateEncryption,
    private readonly createToken: CreateToken
  ) {}

  async exec({
    email,
    password,
  }: CreateSessionParams): Promise<CreateSessionResponse> {
    const foundUser = await this.userRepository.getByEmail(email);
    if (!foundUser) throw new Error('Conta não encontrada');
    const responseGenerateEncryption = await this.generateEncryption.exec({
      password,
    });

    if (responseGenerateEncryption.password !== foundUser.password) {
      throw new Error('email ou senha incorreta');
    }

    const token = await this.createToken.exec({
      id: foundUser.id,
    });

    return token;
  }
}
