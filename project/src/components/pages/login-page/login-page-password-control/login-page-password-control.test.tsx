import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureMockStore } from '@jedmao/redux-mock-store';
import LoginPagePasswordControl from 'src/components/pages/login-page/login-page-password-control/login-page-password-control';

describe('Проверка на корректность рендера компонента LoginPagePasswordControl', () => {
  const mockStore = configureMockStore();

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(
        <Provider store={mockStore()}>
          <LoginPagePasswordControl />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
