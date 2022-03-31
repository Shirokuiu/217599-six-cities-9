import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { offers } from 'src/mocks/offers';
import FavoritePreview from 'src/components/shared/favorite-preview/favorite-preview';

describe('Проверка на корректность рендера компонента FavoritePreview', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается при переданных параметрах', async () => {
      const { container } = render(<FavoritePreview favorite={offers[0]} />, {
        wrapper: BrowserRouter,
      });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('place-image').getAttribute('src')).toBe(offers[0].previewImage);
    });
  });
});
