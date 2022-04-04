import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import { NameSpace } from 'src/store/constants/constants';
import { api } from 'src/store';
import MainPageMap from 'src/components/pages/main-page/main-page-map/main-page-map';

describe('Проверка на корректность рендера компонента MainPageLocationTabsWrap', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const store = mockStore({
        [NameSpace.MainPage]: {
          offers: [],
          groupedCities: [],
          currentCity: undefined,
          currentHoveredOffer: 'unknown',
        },
      });

      const { container } = render(
        <Provider store={store}>
          <MainPageMap />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
