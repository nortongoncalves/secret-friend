import { CreateUuid as ICreateUuid } from '../../../src/data/drivers/Uuid/CreateUuid';
import { CreateUuid } from '../../../src/infra/drivers/Uuid/CreateUuid';

type makeSutResponse = {
  sut: ICreateUuid;
};

const makeSut = (): makeSutResponse => {
  const sut = new CreateUuid();
  return {
    sut,
  };
};

describe('GenerateEncryption', () => {
  it('should return the user with uuid', async () => {
    const { sut } = makeSut();
    const response = await sut.exec();
    expect(response.length).toBeGreaterThan(35);
  });
});
