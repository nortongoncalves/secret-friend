import { CreateToken as ICreateToken } from '../../../src/data/drivers/Token/CreateToken';
import { CreateToken } from '../../../src/infra/drivers/Token/CreateToken';

type makeSutResponse = {
  sut: ICreateToken;
};

const makeSut = (): makeSutResponse => {
  const sut = new CreateToken();
  return {
    sut,
  };
};

const id = '12';

describe('CreateToken', () => {
  it('should return the user with uuid', async () => {
    const { sut } = makeSut();
    const { token } = await sut.exec({
      id,
    });
    expect(token.length).toBeGreaterThan(35);
  });
});
