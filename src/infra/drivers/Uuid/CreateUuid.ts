import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { CreateUuid as ICreateUuid } from '../../../data/drivers/Uuid/CreateUuid';

export class CreateUuid implements ICreateUuid {
  async exec(): Promise<string> {
    return uuidv4();
  }
}
