import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureMockStore } from '@jedmao/redux-mock-store';
import LoginPageForm from 'src/components/pages/login-page/login-page-form/login-page-form';

describe('Проверка на корректность рендера компонента LoginPageForm', () => {
  const mockStore = configureMockStore();

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      render(
        <Provider store={mockStore()}>
          <LoginPageForm />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(screen.getByTestId('submit')).toHaveTextContent('Sign in');
    });
  });
});
