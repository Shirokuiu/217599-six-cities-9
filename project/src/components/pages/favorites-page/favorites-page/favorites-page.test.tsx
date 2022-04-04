import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';
import { FavoritesState } from 'src/types/favorite-process';
import FavoritesPage from 'src/components/pages/favorites-page/favorites-page/favorites-page';
import { api } from 'src/store';
import { NameSpace } from 'src/store/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';

describe('Проверка на корректность рендера компонента FavoritesPage', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const USER = {
    avatarUrl: 'img/1.png',
    email: 'Oliver.conner@gmail.com',
    id: 1,
    isPro: false,
    name: 'Oliver.conner',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  };

  describe('Проверка верной отрисовки компонента', () => {
    it('Компонент отрисовывает Loader, пока идет загрудка контента', () => {
      const store = mockStore({
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Unknown,
            items: [],
          },
        },
      });

      const { container } = render(
        <Provider store={store}>
          <FavoritesPage />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(container).toHaveTextContent('Loading...');
    });

    it('Компонент отрисовывает FavoritesPageEmpty, если после загрузки контента массив пуст', () => {
      const store = mockStore({
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Empty,
            items: [],
          },
        },
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          me: USER,
        },
      });

      render(
        <Provider store={store}>
          <FavoritesPage />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(screen.getByTestId('description')).toHaveTextContent(
        'Save properties to narrow down search or plan your future trips.',
      );
    });

    it('Компонент отрисовывает FavoritesPageContent, если после загрузки контента массив не пуст', () => {
      const groupedFavorites = groupCities(offers);

      const store = mockStore({
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Filled,
            items: groupedFavorites,
          },
        },
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.Auth,
          me: USER,
        },
      });

      render(
        <Provider store={store}>
          <FavoritesPage />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(screen.getByTestId('title')).toHaveTextContent('Saved listing');
    });
  });
});
