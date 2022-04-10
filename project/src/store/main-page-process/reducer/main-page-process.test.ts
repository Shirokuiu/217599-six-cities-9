import {offers} from 'src/mocks/offers';
import {
  clearState,
  groupCitiesAction,
  mainPageProcess,
  markFavoriteOffer,
  setCurrentCity,
  setOffers,
  toggleHoverOffer,
  unmarkFavoriteOffer
} from 'src/store/main-page-process/reducer/main-page-process';
import {InitialState, OffersLoadingStatus} from 'src/types/main-page-process';
import {groupCities} from 'src/helpers/group-cities';
import {getCurrentOffer} from 'src/store/main-page-process/helpers/get-current-offer';
import {toggleFavoriteOffers} from 'src/store/main-page-process/helpers/toggle-favorite-offers';
import {getGroupedCityIdx} from 'src/store/main-page-process/helpers/get-grouped-city-idx';

describe('Проверка редьюсера mainPageProcess', () => {
  const initialState = (): InitialState => ({
    offers: [],
    offersLoadingStatus: OffersLoadingStatus.Unknown,
    groupedCities: [],
    currentCity: undefined,
    currentHoveredOffer: 'unknown',
  });
  const getOffers = () => offers;
  const GROUPED_CITY_ID = 1;
  const OFFER_ID = 6;

  describe('Проверка экшена setOffers', () => {
    it('Получая массив offers сеттит его в стор', () => {
      const state = initialState();
      const offersMock = getOffers();

      expect(mainPageProcess.reducer(state, setOffers(offersMock))).toEqual({
        ...initialState(),
        offers: offersMock,
        offersLoadingStatus: OffersLoadingStatus.Filled,
      });
    });
  });

  describe('Проверка экшена groupCitiesAction', () => {
    it('Получая массив offers, маппит его в структуру массива GroupCity и записывает в groupedCities', () => {
      const offersMock = getOffers();
      const state = {
        ...initialState(),
        offers: offersMock,
      };

      expect(mainPageProcess.reducer(state, groupCitiesAction())).toEqual({
        ...state,
        groupedCities: groupCities(state.offers),
      });
    });
  });

  describe('Проверка экшена setCurrentCity', () => {
    it('Получая название города, возвращает конкретный город из массива GroupCity и записывает его в ключ currentCity', () => {
      const offersMock = getOffers();
      const country = 'Paris';
      const state = {
        ...initialState(),
        offers: offersMock,
      };

      expect(mainPageProcess.reducer(state, setCurrentCity(country))).toEqual({
        ...state,
        currentCity: getCurrentOffer({
          countryName: country,
          groupedCities: state.groupedCities,
        }),
      });
    });

    it('Получая название города, которого нет в массиве GroupCity, возвращает undefined и записывает его в ключ currentCity', () => {
      const offersMock = getOffers();
      const country = 'asd';
      const state = {
        ...initialState(),
        offers: offersMock,
      };

      expect(mainPageProcess.reducer(state, setCurrentCity(country))).toEqual({
        ...state,
        currentCity: undefined,
      });
    });
  });

  describe('Проверка экшена toggleHoverOffer', () => {
    it('Получая конкретное предложение, записывает его в ключ currentHoveredOffer', () => {
      const state = initialState();
      const offersMock = getOffers();
      const groupedCities = groupCities(offersMock);

      expect(mainPageProcess.reducer(state, toggleHoverOffer(groupedCities[0].offers[0]))).toEqual({
        ...state,
        currentHoveredOffer: groupedCities[0].offers[0],
      });
    });

    it('Получая undefined, записывает его в ключ currentHoveredOffer', () => {
      const state = initialState();

      expect(mainPageProcess.reducer(state, toggleHoverOffer(undefined))).toEqual({
        ...state,
        currentHoveredOffer: undefined,
      });
    });
  });

  describe('Проверка экшена markFavoriteOffer', () => {
    it('Выставляет isFavorite: true для конкретного объявления и перезаписывает массив offers', () => {
      const offersMock = getOffers();
      const groupedCities = groupCities(offersMock);
      const state = { ...initialState(), groupedCities };
      const idx = getGroupedCityIdx(state.groupedCities, 1);

      groupedCities[idx].offers = toggleFavoriteOffers(idx, state.groupedCities, OFFER_ID, true);

      expect(
        mainPageProcess.reducer(
          state,
          markFavoriteOffer({ groupedCityId: GROUPED_CITY_ID, offerId: OFFER_ID }),
        ),
      ).toEqual({
        ...state,
        groupedCities,
      });
    });
  });

  describe('Проверка экшена unmarkFavoriteOffer', () => {
    it('Выставляет isFavorite: false для конкретного объявления и перезаписывает массив offers', () => {
      const offersMock = getOffers();
      const groupedCities = groupCities(offersMock);
      const state = { ...initialState(), groupedCities };
      const idx = getGroupedCityIdx(state.groupedCities, 1);

      groupedCities[idx].offers = toggleFavoriteOffers(idx, state.groupedCities, OFFER_ID, false);

      expect(
        mainPageProcess.reducer(
          state,
          unmarkFavoriteOffer({ groupedCityId: GROUPED_CITY_ID, offerId: OFFER_ID }),
        ),
      ).toEqual({
        ...state,
        groupedCities,
      });
    });
  });

  describe('Проверка экшена clearState', () => {
    it('Возвращает первоначальное стостояние стейта', () => {
      const offersMock = getOffers();
      const groupedCities = groupCities(offersMock);
      const state = { ...initialState(), offers: offersMock, groupedCities };

      expect(mainPageProcess.reducer(state, clearState())).toEqual(initialState());
    });
  });
});
