import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import FavoritesPageList from 'src/components/pages/favorites-page/favorites-page-list/favorites-page-list';
import { groupCities } from 'src/helpers/group-cities';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента FavoritesPageList', () => {
  const mockStore = configureMockStore();

  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', () => {
      const groupedFavorites = groupCities(offers);

      const { container } = render(
        <Provider store={mockStore()}>
          <FavoritesPageList favorites={groupedFavorites} />
        </Provider>,
        {
          wrapper: BrowserRouter,
        },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
