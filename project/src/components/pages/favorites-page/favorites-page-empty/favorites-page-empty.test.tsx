import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import { NameSpace } from 'src/store/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';
import { FavoritesState } from 'src/types/favorite-process';
import FavoritesPageEmpty from 'src/components/pages/favorites-page/favorites-page-empty/favorites-page-empty';

describe('Проверка на корректность рендера компонента FavoritesPageEmpty', () => {
  const mockStore = configureMockStore();
  const USER = {
    avatarUrl: 'img/1.png',
    email: 'Oliver.conner@gmail.com',
    id: 1,
    isPro: false,
    name: 'Oliver.conner',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  };

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', () => {
      const store = mockStore({
        [NameSpace.FavoritePage]: {
          favorite: {
            favoriteState: FavoritesState.Filled,
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
          <FavoritesPageEmpty />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(screen.getByTestId('description')).toHaveTextContent(
        'Save properties to narrow down search or plan your future trips.',
      );
    });
  });
});
