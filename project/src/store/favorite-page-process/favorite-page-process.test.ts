import { favorites } from 'src/mocks/favorites';
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

describe('Проверка редьюсера favoritePageProcess', () => {
  describe('Проверка экшена setFavorites', () => {
    it('При передаче не пустого массива, добавляет новые избранные элементы в items и ставит статус - filled', () => {
      const state = initialState();
      const groupedFavorites = groupCities(favorites);

      expect(favoritePageProcess.reducer(state, setFavorites(favorites))).toStrictEqual({
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
          items: groupCities(favorites),
        },
      };
      const groupedFavorites = groupCities(favorites);
      const favoritesAfterUnmark = unmarkFavorite(groupedFavorites, 1, 6);

      expect(favoritePageProcess.reducer(state, unmark({ id: 1, offerId: 6 }))).toStrictEqual({
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
          items: groupCities(favorites),
        },
      };

      expect(favoritePageProcess.reducer(state, clearState())).toEqual(initialState());
    });
  });
});
