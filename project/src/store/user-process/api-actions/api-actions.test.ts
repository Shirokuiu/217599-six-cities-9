import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { api } from 'src/store/index';
import { State } from 'src/types/state';
import { UserRoute } from 'src/services/user-service/constants/constants';
import { checkAuth, login, logout } from 'src/store/user-process/api-actions/api-actions';
import { setAuthStatus, setMe } from 'src/store/user-process/reducer/user-process';
import { TOKEN_KEY_LOCAL_STORAGE } from 'src/services/constants/constants';

describe('Проверка асинхронных экшенов для userProcess', () => {
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(
    middlewares,
  );
  const USER = {
    avatarUrl: 'img/1.png',
    email: 'Oliver.conner@gmail.com',
    id: 1,
    isPro: false,
    name: 'Oliver.conner',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  };

  describe('Проверка экшена checkAuth', () => {
    it('Проверка на авторизованность, если возвращает 200, вызываются два синхронных метода setAuthStatus, setMe', async () => {
      const store = mockStore();

      mockAPI.onGet(UserRoute.Login).reply(200, USER);

      await store.dispatch(checkAuth());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setAuthStatus.toString());
      expect(actions).toContain(setAuthStatus.toString());
    });
  });

  describe('Проверка экшена login', () => {
    it('При успешной авторизации, записывается в localeStorage токен авторизации и вызывается 2 синхронных метода setAuthStatus, setMe', async () => {
      const store = mockStore();
      const token = { token: 'authToken' };
      const authBodyData = {
        email: 'asd@mail.ru',
        password: '123ds',
      };

      mockAPI.onPost(UserRoute.Login).reply(200, token);
      Storage.prototype.setItem = jest.fn();

      await store.dispatch(login(authBodyData));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setAuthStatus.toString());
      expect(actions).toContain(setMe.toString());

      expect(Storage.prototype.setItem).toBeCalledTimes(1);
      expect(Storage.prototype.setItem).toBeCalledWith(TOKEN_KEY_LOCAL_STORAGE, token.token);
    });
  });

  it('При разлогине, удаляется из localeStorage токен авторизации и вызывается 2 синхронных метода setAuthStatus, setMe', async () => {
    const store = mockStore();
    const token = { token: 'authToken' };

    mockAPI.onPost(UserRoute.Login).reply(200, token);
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logout());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toContain(setAuthStatus.toString());
    expect(actions).toContain(setMe.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith(TOKEN_KEY_LOCAL_STORAGE);
  });
});
