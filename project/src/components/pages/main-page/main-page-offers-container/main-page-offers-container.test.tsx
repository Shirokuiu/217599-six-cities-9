import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import { NameSpace } from 'src/store/constants/constants';
import { api } from 'src/store';
import { AuthorizationStatus } from 'src/types/auth';
import MainPageOffersContainer from 'src/components/pages/main-page/main-page-offers-container/main-page-offers-container';
import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента MainPageOffersContainer', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка отрисовки', () => {
    it('Компонент отрисовывает MainPageOffersEmpty, если массив offers пустой или undefined', async () => {
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

      render(
        <Provider store={store}>
          <MainPageOffersContainer />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(screen.getByTestId('status')).toHaveTextContent('No places to stay available');
    });

    it('Компонент отрисовывает MainPageOffers, если массив offers не пустой и не undefined', async () => {
      const groupedCities = groupCities(offers);

      const store = mockStore({
        [NameSpace.User]: {
          authorizationStatus: AuthorizationStatus.NoAuth,
          me: undefined,
        },
        [NameSpace.MainPage]: {
          offers,
          groupedCities,
          currentCity: groupedCities[0],
          currentHoveredOffer: 'unknown',
        },
      });

      render(
        <Provider store={store}>
          <MainPageOffersContainer />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(screen.getByTestId('cities')).toBeInTheDocument();
    });
  });
});
