import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import FavoritesPageFooter from 'src/components/pages/favorites-page/favorites-page-footer/favorites-page-footer';
import { AppRoutingPath } from 'src/types/app';

describe('Проверка на корректность рендера компонента FavoritesPageFooter', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(<FavoritesPageFooter />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logo-link').getAttribute('href')).toBe(AppRoutingPath.Index);
    });
  });
});
