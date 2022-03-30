import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import UserLoggedIn from 'src/components/shared/user-logged-in/user-logged-in';

describe('Проверка на корректность рендера компонента UserLoggedId', () => {
  describe('Проверка передачи параметров', () => {
    const USER = {
      avatarUrl: 'img/1.png',
      email: 'Oliver.conner@gmail.com',
      id: 1,
      isPro: false,
      name: 'Oliver.conner',
      token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    };

    it('Компонент верно отрисовывается c переданными параметрами', async () => {
      const { container } = render(<UserLoggedIn user={USER} />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('user-name')).toHaveTextContent(USER.name);
    });
  });
});
