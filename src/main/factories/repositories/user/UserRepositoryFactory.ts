import { UserRepository } from '../../../../data/repositories/user/UserRepository';
import { UserRepository as IUserRepository } from '../../../../domain/repositories/user/UserRepository';

export function makeUserRepository(): IUserRepository {
  return new UserRepository();
}
