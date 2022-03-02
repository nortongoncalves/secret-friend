import { CreateUuid as ICreateUuid } from '../../../src/data/drivers/Uuid/CreateUuid';

export class CreateUuid implements ICreateUuid {
  async exec(): Promise<string> {
    return 'uuid-generated';
  }
}
