import { configureMockStore } from '@jedmao/redux-mock-store';
import { screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { api } from 'src/store';
import { NameSpace } from 'src/store/constants/constants';
import { FavoritesState } from 'src/types/favorite-process';
import App from 'src/components/pages/app/app';
import { AuthorizationStatus } from 'src/types/auth';
import { AppRoutingPath } from 'src/types/app';
import { testRenderWithRouter } from 'src/helpers/test-render-with-router';
import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';

describe('Проверка роутинга', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);
  const favoriteInitialState = () => ({
    favorite: {
      favoriteState: FavoritesState.Unknown,
      items: [],
    },
  });
  const mainPageInitialState = () => ({
    offers: [],
    groupedCities: [],
    currentCity: undefined,
    currentHoveredOffer: 'unknown',
  });
  const userInitialState = () => ({
    authorizationStatus: AuthorizationStatus.NoAuth,
    me: undefined,
  });

  const renderMockApp = (path: string, updatedStore = {}) => {
    const store = mockStore({
      [NameSpace.MainPage]: mainPageInitialState(),
      [NameSpace.User]: userInitialState(),
      [NameSpace.FavoritePage]: favoriteInitialState(),
      ...updatedStore,
    });

    return testRenderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: path },
    );
  };

  describe('Проверка роута по умолчанию', () => {
    it('При роуте по умолчанию подгружается компонент MainPage', async () => {
      renderMockApp(AppRoutingPath.Index);

      expect(screen.getByTestId('main-page')).toHaveClass('page page--gray');
    });
  });

  describe('Проверка роута /login', () => {
    it('При роуте /login подгружается компонент loginPage', async () => {
      renderMockApp(AppRoutingPath.Login);

      await waitFor(() => {
        expect(screen.getByTestId('title')).toHaveTextContent('Sign in');
      });
    });
  });

  describe('Проверка роута /favorites', () => {
    it('При роуте /favorites и подгрузке избранных элементов подгружается компонент Loader', async () => {
      const { container } = renderMockApp(AppRoutingPath.Favorites, {
        [NameSpace.User]: {
          ...userInitialState(),
          authorizationStatus: AuthorizationStatus.Auth,
        },
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Unknown,
            items: [],
          },
        },
      });

      await waitFor(() => {
        expect(container.textContent).toBe('Loading...');
      });
    });

    it('При роуте /favorites и отсутствующих избранных элементов подгружается компонент FavoritesPageEmpty', async () => {
      renderMockApp(AppRoutingPath.Login, {
        [NameSpace.User]: {
          ...userInitialState(),
          authorizationStatus: AuthorizationStatus.Auth,
        },
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Empty,
            items: [],
          },
        },
      });

      await waitFor(() => {
        expect(screen.getByTestId('description')).toHaveTextContent(
          'Save properties to narrow down search or plan your future trips.',
        );
      });
    });

    it('При роуте /favorites и присутствующих избранных элементов подгружается компонент FavoritesPageContent', async () => {
      const groupedFavorites = groupCities(offers);

      renderMockApp(AppRoutingPath.Favorites, {
        [NameSpace.User]: {
          ...userInitialState(),
          authorizationStatus: AuthorizationStatus.Auth,
        },
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Filled,
            items: groupedFavorites,
          },
        },
      });

      await waitFor(() => {
        expect(screen.getByTestId('title')).toHaveTextContent('Saved listing');
      });
    });
  });

  describe('Проверка роута * (404 not found)', () => {
    it('При роуте, при не зарегистрироаном роуте подгружается компонент NotFoundPage', async () => {
      renderMockApp('/test');

      expect(screen.getByTestId('title')).toHaveTextContent('Page not found');
    });
  });
});
