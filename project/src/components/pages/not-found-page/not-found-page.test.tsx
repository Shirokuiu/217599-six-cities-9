import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFoundPage from 'src/components/pages/not-found-page/not-found-page';

describe('Проверка на корректность рендера компонента NotFoundPage', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>,
      );

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('title')).toHaveTextContent('Page not found');
      expect(screen.getByTestId('link').getAttribute('href')).toBe('/');
    });
  });
});
