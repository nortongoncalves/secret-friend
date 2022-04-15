import { GenerateEncryption as IGenerateEncryption } from '../../../src/data/drivers/Encrypt/GenerateEncryption';
import { GenerateEncryption } from '../../../src/infra/drivers/Encrypt/GenerateEncryption';

type makeSutResponse = {
  sut: IGenerateEncryption;
};

const makeSut = (): makeSutResponse => {
  const sut = new GenerateEncryption();
  return {
    sut,
  };
};

describe('GenerateEncryption', () => {
  it('should return the user with uuid', async () => {
    const { sut } = makeSut();
    const response = await sut.exec({
      value: 'teste',
    });
    expect(response.encryptedValue.length).toBeGreaterThan(60);
  });
});
