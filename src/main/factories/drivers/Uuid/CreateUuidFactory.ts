import { CreateUuid as ICreateUuid } from '../../../../data/drivers/Uuid/CreateUuid';
import { CreateUuid } from '../../../../infra/drivers/Uuid/CreateUuid';

export function makeCreateUuid(): ICreateUuid {
  return new CreateUuid();
}
