import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configureMockStore } from '@jedmao/redux-mock-store';
import LoginPageEmailControl from 'src/components/pages/login-page/login-page-email-control/login-page-email-control';

describe('Проверка на корректность рендера компонента LoginPageEmailControl', () => {
  const mockStore = configureMockStore();

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(
        <Provider store={mockStore()}>
          <LoginPageEmailControl />
        </Provider>,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
