import {
  CreateToken,
  CreateTokenParams,
  CreateTokenResponse,
} from '../../../src/providers/Token/CreateToken';

export class CreateTokenMock implements CreateToken {
  async exec({ id }: CreateTokenParams): Promise<CreateTokenResponse> {
    return {
      token: `${id}-token`,
    };
  }
}
