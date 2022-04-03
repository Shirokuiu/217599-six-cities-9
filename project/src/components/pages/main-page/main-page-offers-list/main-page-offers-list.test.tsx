import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import { NameSpace } from 'src/store/constants/constants';
import { api } from 'src/store';
import { AuthorizationStatus } from 'src/types/auth';
import MainPageOffersList from 'src/components/pages/main-page/main-page-offers-list/main-page-offers-list';

describe('Проверка на корректность рендера компонента MainPageOffersList', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const store = mockStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          me: undefined,
        },
        [NameSpace.MainPage]: {
          offers: [],
          groupedCities: [],
          currentCity: undefined,
          currentHoveredOffer: 'unknown',
        },
      });

      const { container } = render(
        <Provider store={store}>
          <MainPageOffersList />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
