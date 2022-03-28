import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { api } from 'src/store/index';
import { State } from 'src/types/state';
import { FavoritesRoute } from 'src/services/favorites-service/constants/constants';
import { apiUnmark, fetchFavorites } from 'src/store/favorite-page-process/api-actions/api-actions';
import {
  setFavorites,
  unmark,
} from 'src/store/favorite-page-process/reducer/favorite-page-process';
import { SendStatus } from 'src/types/favorites-service';
import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';

describe('Проверка асинхронных экшенов для favoriteProcess', () => {
  const mockApi = api;
  const mockAPI = new MockAdapter(mockApi);
  const middlewares = [thunk.withExtraArgument(mockApi)];
  const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof mockApi, Action>>(
    middlewares,
  );

  describe('Проверка экшена fetchFavorites', () => {
    it('При GET запросе /favorite возвращает код ответа 200, после этого вызывается синхронный экшен setFavorites', async () => {
      const store = mockStore();

      mockAPI.onGet(FavoritesRoute.favorite).reply(200, []);

      await store.dispatch(fetchFavorites());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setFavorites.toString());
    });
  });

  describe('Проверка экшена apiUnmark', () => {
    it('При удалении из избранного возвращает код ответа 200 и объявление с выключеным флагом isFavorite, после этого вызывается синхронный экшен unmark', async () => {
      const store = mockStore();
      const OFFER_ID = 6;
      const groupedCities = groupCities(offers);

      mockAPI
        .onPost(`${FavoritesRoute.favorite}/${OFFER_ID}/${SendStatus.RemoveFavorite}`)
        .reply(200, groupedCities[0].offers[1]);

      await store.dispatch(apiUnmark({ id: 1, offerId: OFFER_ID }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(unmark.toString());
    });
  });
});
