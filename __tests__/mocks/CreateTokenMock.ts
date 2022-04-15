import {
  CreateToken,
  CreateTokenParams,
  CreateTokenResponse,
} from '../../src/data/drivers/Token/CreateToken';

export class CreateTokenMock implements CreateToken {
  async exec({ id }: CreateTokenParams): Promise<CreateTokenResponse> {
    return {
      token: `${id}-token`,
    };
  }
}
