import AppError from '@shared/errors/AppError';

import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeUserTokensRepository from '../repositories/fakes/FakeUserTokensRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

let fakeUsersRepository: FakeUsersRepository;
let fakeMailProvider: FakeMailProvider;
let fakeUserTokensRepository: FakeUserTokensRepository;
let sendForgotPasswordEmail: SendForgotPasswordEmailService;

describe('SendForgotPasswordEmail', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeMailProvider = new FakeMailProvider();
    fakeUserTokensRepository = new FakeUserTokensRepository();

    sendForgotPasswordEmail = new SendForgotPasswordEmailService(
      fakeUsersRepository,
      fakeMailProvider,
      fakeUserTokensRepository,
    );
  });

  it('should be able to recover the password using the email', async () => {
    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    await fakeUsersRepository.create({
      name: 'Zé Ninguem',
      email: 'zeninguem@exemplo.com',
      password: '123123',
    });

    await sendForgotPasswordEmail.execute({
      email: 'zeninguem@exemplo.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover password to a non-existing user', async () => {
    await expect(
      sendForgotPasswordEmail.execute({
        email: 'zeninguem@exemplo.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should generate a forgot password token', async () => {
    const generateToken = jest.spyOn(fakeUserTokensRepository, 'generate');

    const user = await fakeUsersRepository.create({
      name: 'Zé Ninguem',
      email: 'zeninguem@exemplo.com',
      password: '123123',
    });

    await sendForgotPasswordEmail.execute({
      email: 'zeninguem@exemplo.com',
    });

    expect(generateToken).toHaveBeenCalledWith(user.id);
  });
});
