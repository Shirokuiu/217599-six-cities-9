import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainPageSortOffersWrap from 'src/components/pages/main-page/main-page-sort-offers-wrap/main-page-sort-offers-wrap';

describe('Проверка на корректность рендера компонента MainPageSortOffersWrap', () => {
  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(<MainPageSortOffersWrap />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
    });
  });
});
