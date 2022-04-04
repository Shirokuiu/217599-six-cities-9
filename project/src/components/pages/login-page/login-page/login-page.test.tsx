import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from 'src/components/pages/login-page/login-page/login-page';
import { configureMockStore } from '@jedmao/redux-mock-store';

describe('Проверка на корректность рендера компонента LoginPage', () => {
  const mockStore = configureMockStore();

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      render(
        <Provider store={mockStore()}>
          <LoginPage />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(screen.getByTestId('title')).toHaveTextContent('Sign in');
    });
  });
});
