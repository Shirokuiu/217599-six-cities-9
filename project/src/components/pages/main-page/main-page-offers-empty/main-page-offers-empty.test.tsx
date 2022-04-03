import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainPageOffersEmpty from 'src/components/pages/main-page/main-page-offers-empty/main-page-offers-empty';

describe('Проверка на корректность рендера компонента MainPageOffersEmpty', () => {
  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(<MainPageOffersEmpty />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
    });
  });
});
