import { CreateToken as ICreateToken } from '../../../../data/drivers/Token/CreateToken';
import { CreateToken } from '../../../../infra/drivers/Token/CreateToken';

export function makeCreateToken(): ICreateToken {
  return new CreateToken();
}
