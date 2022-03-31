import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserLoggedOut from 'src/components/shared/user-logged-out/user-logged-out';

describe('Проверка на корректность рендера компонента UserLoggedOut', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается c переданными параметрами', async () => {
      const { container } = render(<UserLoggedOut />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logout-signout')).toHaveTextContent('Sign in');
    });
  });
});
