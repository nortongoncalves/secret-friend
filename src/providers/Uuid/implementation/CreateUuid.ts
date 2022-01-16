import { v4 } from 'uuid';
import { CreateUuid as ICreateUuid } from '../CreateUuid';

export class CreateUuid implements ICreateUuid {
  async exec(): Promise<string> {
    return v4();
  }
}
