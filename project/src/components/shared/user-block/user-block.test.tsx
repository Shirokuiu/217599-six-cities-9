import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserBlock from 'src/components/shared/user-block/user-block';
import { AuthorizationStatus } from 'src/types/auth';

describe('Проверка на корректность рендера компонента UserBlock', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывает в switch другой компонент при AuthorizationStatus NoAuth', async () => {
      const { container } = render(<UserBlock authorizationStatus={AuthorizationStatus.NoAuth} />, {
        wrapper: BrowserRouter,
      });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logout-signout')).toHaveTextContent('Sign in');
    });

    it('Компонент верно отрисовывает в switch другой компонент при AuthorizationStatus Auth', async () => {
      render(<UserBlock authorizationStatus={AuthorizationStatus.Auth} />, {
        wrapper: BrowserRouter,
      });

      expect(screen.getByTestId('logged-signout')).toHaveTextContent('Sign out');
    });
  });
});
