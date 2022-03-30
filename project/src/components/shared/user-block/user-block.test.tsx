import { render, screen } from '@testing-library/react';

import UserBlock from 'src/components/shared/user-block/user-block';
import { AuthorizationStatus } from 'src/types/auth';
import { BrowserRouter } from 'react-router-dom';

describe('Проверка на корректность рендера компонента UserBlock', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывает в switch другой компонент при AuthorizationStatus NoAuth', async () => {
      const { container } = render(
        <BrowserRouter>
          <UserBlock authorizationStatus={AuthorizationStatus.NoAuth} />
        </BrowserRouter>,
      );

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logout-signout')).toHaveTextContent('Sign in');
    });

    it('Компонент верно отрисовывает в switch другой компонент при AuthorizationStatus Auth', async () => {
      render(
        <BrowserRouter>
          <UserBlock authorizationStatus={AuthorizationStatus.Auth} />
        </BrowserRouter>,
      );

      expect(screen.getByTestId('logged-signout')).toHaveTextContent('Sign out');
    });
  });
});
