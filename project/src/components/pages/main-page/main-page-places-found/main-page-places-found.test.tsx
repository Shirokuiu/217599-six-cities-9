import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';

import { NameSpace } from 'src/store/constants/constants';
import { api } from 'src/store';
import MainPagePlacesFound from 'src/components/pages/main-page/main-page-places-found/main-page-places-found';

describe('Проверка на корректность рендера компонента MainPagePlacesFound', () => {
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore(middlewares);

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const store = mockStore({
        [NameSpace.MainPage]: {
          currentCity: undefined,
        },
      });

      const { container } = render(
        <Provider store={store}>
          <MainPagePlacesFound />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
