import { AuthorizationStatus } from 'src/types/auth';
import { InitialState } from 'src/types/user-process';
import { setAuthStatus, setMe, userProcess } from 'src/store/user-process/user-process';

describe('Проверка редьюсера userProcess', () => {
  const initialState = (): InitialState => ({
    authorizationStatus: AuthorizationStatus.Unknown,
    me: undefined,
  });
  const USER = {
    avatarUrl: 'img/1.png',
    email: 'Oliver.conner@gmail.com',
    id: 1,
    isPro: false,
    name: 'Oliver.conner',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  };

  describe('Проверка экшена setAuthStatus', () => {
    it('Записывает в ключ authorizationStatus переданный статус auth', () => {
      const state = initialState();

      expect(userProcess.reducer(state, setAuthStatus(AuthorizationStatus.Auth))).toEqual({
        ...state,
        authorizationStatus: AuthorizationStatus.Auth,
      });
    });
  });

  describe('Проверка экшена SetMe', () => {
    it('Записывает в ключ me пользователя с типом User', () => {
      const state = initialState();

      expect(userProcess.reducer(state, setMe(USER))).toEqual({
        ...state,
        me: USER,
      });
    });

    it('Записывает в ключ me undefined', () => {
      const state = initialState();

      expect(userProcess.reducer(state, setMe(undefined))).toEqual({
        ...state,
        me: undefined,
      });
    });
  });
});
