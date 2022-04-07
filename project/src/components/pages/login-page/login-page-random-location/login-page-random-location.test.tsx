import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginPageRandomLocation from 'src/components/pages/login-page/login-page-random-location/login-page-random-location';

describe('Проверка на корректность рендера компонента LoginPageRandomLocation', () => {
  describe('Проверка рендера', () => {
    it('Компонент верно отрисовывается', () => {
      const { container } = render(<LoginPageRandomLocation />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
    });
  });
});
