import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LogoLink from 'src/components/shared/logo-link/logo-link';

describe('Проверка на корректность рендера компонента LogoLink', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается по умолчанию c правильным модификатором класса на ссылку', async () => {
      const { container } = render(
        <BrowserRouter>
          <LogoLink />
        </BrowserRouter>,
      );

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logo-link')).toHaveClass('header__logo-link');
    });

    it('Компонент верно отрисовывается c правильным модификатором класса на ссылку', async () => {
      const { container } = render(
        <BrowserRouter>
          <LogoLink isActive />
        </BrowserRouter>,
      );

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('logo-link')).toHaveClass(
        'header__logo-link header__logo-link--active',
      );
    });
  });
});
