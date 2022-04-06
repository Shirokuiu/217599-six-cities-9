import { offers } from 'src/mocks/offers';
import { CommentsStatus, InitialState, OfferStatus } from 'src/types/offer-page-process';
import {
  addComment,
  clearState,
  offerPageProcess,
  setComments,
  setNearOffers,
  setOffer,
  toggleCommentsStatus,
  toggleHoverOffer,
  toggleOfferStatus,
} from 'src/store/offer-page-process/reducer/offer-page-process';
import { comments } from 'src/mocks/comments';

describe('Проверка редьюсера offerPageProcess', () => {
  const initialState = (): InitialState => ({
    offer: undefined,
    currentHoveredOffer: undefined,
    nearOffers: [],
    offerStatus: OfferStatus.Unknown,
    comments: [],
    commentsStatus: CommentsStatus.Unknown,
  });
  const getOffers = () => offers;
  // const OFFER_ID = 6;

  describe('Проверка экшена setOffer', () => {
    it('Получая объект offer сеттит его в стор', () => {
      const state = initialState();
      const offersMock = getOffers();

      expect(offerPageProcess.reducer(state, setOffer(offersMock[7]))).toEqual({
        ...initialState(),
        offerStatus: OfferStatus.Filled,
        offers: offersMock[7],
      });
    });
  });

  describe('Проверка экшена toggleOfferStatus', () => {
    it('Получая сеттит переданный статус', () => {
      const state = initialState();

      expect(offerPageProcess.reducer(state, toggleOfferStatus(OfferStatus.Filled))).toEqual({
        ...initialState(),
        offerStatus: OfferStatus.Filled,
      });
    });
  });

  describe('Проверка экшена setComments', () => {
    it('Получая массив comments сеттит его в стор', () => {
      const state = initialState();

      expect(offerPageProcess.reducer(state, setComments(comments))).toEqual({
        ...initialState(),
        comments: comments,
        commentsStatus: CommentsStatus.Filled,
      });
    });
  });

  describe('Проверка экшена toggleCommentsStatus', () => {
    it('Получая сеттит переданный статус', () => {
      const state = initialState();

      expect(offerPageProcess.reducer(state, toggleCommentsStatus(CommentsStatus.Filled))).toEqual({
        ...initialState(),
        commentsStatus: CommentsStatus.Filled,
      });
    });
  });

  describe('Проверка экшена addComment', () => {
    it('Получая comments сеттит в стор', () => {
      const state = initialState();

      expect(offerPageProcess.reducer(state, addComment(comments))).toEqual({
        ...initialState(),
        comments: comments,
      });
    });
  });

  describe('Проверка экшена setNearOffers', () => {
    it('Получая массив offers сеттит его в стор', () => {
      const state = initialState();
      const offersMock = getOffers();

      expect(offerPageProcess.reducer(state, setNearOffers(offersMock))).toEqual({
        ...initialState(),
        nearOffers: offersMock,
      });
    });
  });

  describe('Проверка экшена toggleHoverOffer', () => {
    it('Получая объект offer сеттит его в стор', () => {
      const state = initialState();
      const offersMock = getOffers();

      expect(offerPageProcess.reducer(state, toggleHoverOffer(offersMock[7]))).toEqual({
        ...initialState(),
        currentHoveredOffer: offersMock[7],
      });
    });
  });

  describe('Проверка экшена clearState', () => {
    it('Возвращает первоначальное стостояние стейта', () => {
      const offersMock = getOffers();
      const state = {
        ...initialState(),
        offerStatus: OfferStatus.Filled,
        offers: offersMock[7],
      };

      expect(offerPageProcess.reducer(state, clearState())).toEqual(initialState());
    });
  });
});
