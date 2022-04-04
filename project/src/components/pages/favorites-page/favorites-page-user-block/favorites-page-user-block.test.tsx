import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { FavoritesState } from 'src/types/favorite-process';
import { api } from 'src/store';
import { NameSpace } from 'src/store/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';
import FavoritesPageUserBlock from 'src/components/pages/favorites-page/favorites-page-user-block/favorites-page-user-block';

describe('Проверка на корректность рендера компонента FavoritesPageUserBlock', () => {
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
    it('Компонент отрисовывает UserBlock', () => {
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
          <FavoritesPageUserBlock />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(screen.getByTestId('nav-list')).toBeInTheDocument();
    });
  });
});
