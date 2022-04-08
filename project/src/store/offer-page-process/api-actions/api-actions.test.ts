import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';

import { api } from 'src/store/index';
import { State } from 'src/types/state';
import { HotelsRoute } from 'src/services/hotels-service/constants/constants';
import { offers } from 'src/mocks/offers';
import { groupCities } from 'src/helpers/group-cities';
import { FavoritesRoute } from 'src/services/favorites-service/constants/constants';
import { SendStatus } from 'src/types/favorites-service';
import {
  getOffer,
  apiSetFavoriteOffer,
  apiRemoveFavoriteOffer,
  getComments,
  apiAddComment,
  getNearOffers
} from 'src/store/offer-page-process/api-actions/api-actions';
import {
  addComment,
  setComments,
  setNearOffers,
  setOffer
} from 'src/store/offer-page-process/reducer/offer-page-process';
import { CommentsRoute } from 'src/services/comments/constants/constants';
import { comments } from 'src/mocks/comments';
import { CommentBody } from 'src/types/comments-service';

describe('Проверка асинхронных экшенов для offerPageProcess', () => {
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(
    middlewares,
  );

  describe('Проверка экшена getOffer', () => {
    it('При GET запросе /hotels/:offerId возвращает код ответа 200 и объявлениe, после этого вызывается синхронный экшен setOffer', async () => {
      const store = mockStore();
      const offerId = 7;

      mockAPI.onGet(`${HotelsRoute.Hotels}/${offerId}`).reply(200, offers[7]);

      await store.dispatch(getOffer(offerId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setOffer.toString());
    });
  });

  describe('Проверка экшена apiSetFavoriteOffer', () => {
    it('При добавлении в избранное возвращает код ответа 200 и объявление с включеным флагом isFavorite', async () => {
      const store = mockStore();
      const OFFER_ID = 6;
      const groupedCities = groupCities(offers);

      mockAPI
        .onPost(`${FavoritesRoute.favorite}/${OFFER_ID}/${SendStatus.AddFavorite}`)
        .reply(200, groupedCities[0].offers[1]);

      await store.dispatch(apiSetFavoriteOffer(OFFER_ID));
    });
  });

  describe('Проверка экшена apiRemoveFavoriteOffer', () => {
    it('При удалении из избранного возвращает код ответа 200 и объявление с выключеным флагом isFavorite', async () => {
      const store = mockStore();
      const OFFER_ID = 6;
      const groupedCities = groupCities(offers);

      mockAPI
        .onPost(`${FavoritesRoute.favorite}/${OFFER_ID}/${SendStatus.RemoveFavorite}`)
        .reply(200, groupedCities[0].offers[1]);

      await store.dispatch(apiRemoveFavoriteOffer(OFFER_ID));
    });
  });

  describe('Проверка экшена getComments', () => {
    it('При GET запросе /comments/:offerId возвращает код ответа 200 и массив комментариев, после этого вызывается синхронный экшен setComments', async () => {
      const store = mockStore();
      const offerId = 7;

      mockAPI.onGet(`${CommentsRoute.comments}/${offerId}`).reply(200, comments);

      await store.dispatch(getComments(offerId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setComments.toString());
    });
  });

  describe('Проверка экшена apiAddComment', () => {
    it('При POST запросе /comments/:offerId возвращает код ответа 200 и массив обновленных комментариев, после этого вызывается синхронный экшен addComment', async () => {
      const store = mockStore();
      const offerId = 7;
      const commentBody: CommentBody = {
        comment: 'Test',
        rating: 4,
      };

      mockAPI.onPost(`${CommentsRoute.comments}/${offerId}`, commentBody).reply(200, comments);

      await store.dispatch(apiAddComment({ offerId, body: commentBody }));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(addComment.toString());
    });
  });

  describe('Проверка экшена getNearOffers', () => {
    it('При GET запросе /hotels/:offerId/nearby возвращает код ответа 200 и массив близлежащих объявлений, после этого вызывается синхронный экшен setNearOffers', async () => {
      const store = mockStore();
      const offerId = 7;

      mockAPI.onGet(`${HotelsRoute.Hotels}/${offerId}/nearby`).reply(200, offers);

      await store.dispatch(getNearOffers(offerId));

      const actions = store.getActions().map(({ type }) => type);

      expect(actions).toContain(setNearOffers.toString());
    });
  });
});
