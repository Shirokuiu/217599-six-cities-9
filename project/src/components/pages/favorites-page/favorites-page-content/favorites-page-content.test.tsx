import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import FavoritesPageContent from 'src/components/pages/favorites-page/favorites-page-content/favorites-page-content';
import { api } from 'src/store';
import { NameSpace } from 'src/store/constants/constants';
import { AuthorizationStatus } from 'src/types/auth';
import { FavoritesState } from 'src/types/favorite-process';
import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента FavoritesPageContent', () => {
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

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', () => {
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
          <FavoritesPageContent />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(screen.getByTestId('title')).toHaveTextContent('Saved listing');
    });
  });
});
