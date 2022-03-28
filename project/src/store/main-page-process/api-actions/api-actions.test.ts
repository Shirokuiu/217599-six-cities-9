import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { api } from 'src/store/index';
import { State } from 'src/types/state';
import { HotelsRoute } from 'src/services/hotels-service/constants/constants';
import { offers } from 'src/mocks/offers';
import {
  apiRemoveFavoriteOffer,
  apiSetFavoriteOffer,
  getOffers,
} from 'src/store/main-page-process/api-actions/api-actions';
import {
  markFavoriteOffer,
  setOffers,
  unmarkFavoriteOffer,
} from 'src/store/main-page-process/reducer/main-page-process';
import { groupCities } from 'src/helpers/group-cities';
import { FavoritesRoute } from 'src/services/favorites-service/constants/constants';
import { SendStatus } from 'src/types/favorites-service';

describe('Проверка асинхронных экшенов для mainPageProcess', () => {
  const mockApi = api;
  const mockAPI = new MockAdapter(mockApi);
  const middlewares = [thunk.withExtraArgument(mockApi)];
  const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof mockApi, Action>>(
    middlewares,
  );

  describe('Проверка экшена getOffers', () => {
    it('При GET запросе /hotels возвращает код ответа 200 и массив объявлений, после этого вызывается синхронный экшен setOffers', async () => {
      const store = mockStore();

      mockAPI.onGet(HotelsRoute.Hotels).reply(200, offers);

      await store.dispatch(getOffers());

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setOffers.toString());
    });
  });

  describe('Проверка экшена apiSetFavoriteOffer', () => {
    it('При добавлении в избранное возвращает код ответа 200 и объявление с включеным флагом isFavorite, после этого вызывается синхронный экшен markFavoriteOffer', async () => {
      const store = mockStore();
      const OFFER_ID = 6;
      const groupedCities = groupCities(offers);

      mockAPI
        .onPost(`${FavoritesRoute.favorite}/${OFFER_ID}/${SendStatus.AddFavorite}`)
        .reply(200, groupedCities[0].offers[1]);

      await store.dispatch(apiSetFavoriteOffer({ groupedCityId: 1, offerId: OFFER_ID }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(markFavoriteOffer.toString());
    });
  });

  describe('Проверка экшена apiRemoveFavoriteOffer', () => {
    it('При удалении из избранного возвращает код ответа 200 и объявление с выключеным флагом isFavorite, после этого вызывается синхронный экшен unmarkFavoriteOffer', async () => {
      const store = mockStore();
      const OFFER_ID = 6;
      const groupedCities = groupCities(offers);

      mockAPI
        .onPost(`${FavoritesRoute.favorite}/${OFFER_ID}/${SendStatus.RemoveFavorite}`)
        .reply(200, groupedCities[0].offers[1]);

      await store.dispatch(apiRemoveFavoriteOffer({ groupedCityId: 1, offerId: OFFER_ID }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(unmarkFavoriteOffer.toString());
    });
  });
});
