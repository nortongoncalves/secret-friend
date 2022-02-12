import { GenerateEncryption } from '../providers/Encrypt/GenerateEncryption';
import { CreateToken } from '../providers/Token/CreateToken';
import { UserRepository } from '../repositories/user/UserRepository';
import {
  CreateSession,
  CreateSessionResponse,
  CreateSessionParams,
} from '../usecases/CreateSession';

export class CreateSessionService implements CreateSession {
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
