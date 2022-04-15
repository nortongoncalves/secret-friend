import { TokenExpiredError } from 'jsonwebtoken';
import { CreateToken as ICreateToken } from '../../../src/data/drivers/Token/CreateToken';
import { CreateToken } from '../../../src/infra/drivers/Token/CreateToken';
import {
  VerifyToken,
  IVerifyToken,
} from '../../../src/infra/drivers/Token/VerifyToken';

type makeSutResponse = {
  sut: IVerifyToken;
  createToken: ICreateToken;
};

const makeSut = (): makeSutResponse => {
  const createToken = new CreateToken();
  const sut = new VerifyToken();
  return {
    sut,
    createToken,
  };
};

const id = '12';

describe('CreateToken', () => {
  it('should return an error with token expired message', async () => {
    const { createToken } = makeSut();
    const { token } = await createToken.exec({
      id,
      expiresIn: 0,
    });
    const { sut } = makeSut();
    expect(
      sut.exec({
        token,
      })
    ).rejects.toThrow(TokenExpiredError);
  });

  it('should receive an id equal to the one sent', async () => {
    const { createToken } = makeSut();
    const { token } = await createToken.exec({
      id,
      expiresIn: 300,
    });
    const { sut } = makeSut();
    const { decode } = await sut.exec({ token });
    if (typeof decode === 'string') {
      expect(decode).toBeTruthy();
      return;
    }
    expect(decode.id).toBe(id);
  });
});
