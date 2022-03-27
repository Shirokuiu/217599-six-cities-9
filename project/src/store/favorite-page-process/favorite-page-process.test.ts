import { offers } from 'src/mocks/offers';
import { FavoritesState } from 'src/types/favorite-process';
import {
  clearState,
  favoritePageProcess,
  setFavorites,
  unmark,
} from 'src/store/favorite-page-process/favorite-page-process';
import { groupCities } from 'src/helpers/group-cities';
import { unmarkFavorite } from 'src/store/favorite-page-process/helpers/unmark-city-favorite';

const initialState = () => ({
  favorite: {
    favoriteState: FavoritesState.Unknown,
    items: [],
  },
});
const GROUPED_CITY_ID = 1;
const OFFER_ID = 6;

describe('Проверка редьюсера favoritePageProcess', () => {
  describe('Проверка экшена setFavorites', () => {
    it('При передаче не пустого массива, добавляет новые избранные элементы в items и ставит статус - filled', () => {
      const state = initialState();
      const groupedFavorites = groupCities(offers);

      expect(favoritePageProcess.reducer(state, setFavorites(offers))).toStrictEqual({
        favorite: {
          favoriteState: FavoritesState.Filled,
          items: groupedFavorites,
        },
      });
    });

    it('При передаче пустого массива, добавляет этот массив в items и ставит статус - empty', () => {
      const state = initialState();

      expect(favoritePageProcess.reducer(state, setFavorites([]))).toStrictEqual({
        favorite: {
          favoriteState: FavoritesState.Empty,
          items: groupCities([]),
        },
      });
    });
  });

  describe('Проверка экшена unmark', () => {
    it('При передаче id города и id избранного объявления, удаляет из массива избранное объявление и показывает статус filled, если массив не пустой', () => {
      const state = {
        favorite: {
          ...initialState().favorite,
          items: groupCities(offers),
        },
      };
      const groupedFavorites = groupCities(offers);
      const favoritesAfterUnmark = unmarkFavorite(groupedFavorites, GROUPED_CITY_ID, OFFER_ID);

      expect(
        favoritePageProcess.reducer(state, unmark({ id: GROUPED_CITY_ID, offerId: OFFER_ID })),
      ).toStrictEqual({
        favorite: {
          favoriteState: FavoritesState.Filled,
          items: favoritesAfterUnmark,
        },
      });
    });
  });

  describe('Проверка экшена clearState', () => {
    it('Возвращает первоначальное стостояние стейта', () => {
      const state = {
        favorite: {
          ...initialState().favorite,
          items: groupCities(offers),
        },
      };

      expect(favoritePageProcess.reducer(state, clearState())).toEqual(initialState());
    });
  });
});
