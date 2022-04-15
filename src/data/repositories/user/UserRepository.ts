import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../../../domain/entities/User';
import {
  UserRepository as IUserRepository,
  UserRepositoryParams,
  UserRepositoryResponse,
} from '../../../domain/repositories/user/UserRepository';

export class UserRepository implements IUserRepository {
  async save(params: UserRepositoryParams): Promise<UserRepositoryResponse> {
    let registeredUsers: User[] = [];
    const getUsers = await AsyncStorage.getItem('@secret-friend/user');
    if (getUsers) {
      registeredUsers = JSON.parse(getUsers);
    }
    registeredUsers.push(params);
    await AsyncStorage.setItem(
      '@secret-friend/user',
      JSON.stringify(registeredUsers)
    );
    return params;
  }

  async getByEmail(email: string): Promise<UserRepositoryResponse | undefined> {
    let registeredUsers: User[] = [];
    const getUsers = await AsyncStorage.getItem('@secret-friend/user');
    if (getUsers) {
      registeredUsers = JSON.parse(getUsers);
    }
    return registeredUsers.find((user) => user.email === email);
  }
}
