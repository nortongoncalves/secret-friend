import { CreateUuid as ICreateUuid } from '../../../../src/providers/Uuid/CreateUuid';

export class CreateUuid implements ICreateUuid {
  async exec(): Promise<string> {
    return 'uuid-generated';
  }
}
