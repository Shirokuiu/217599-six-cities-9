import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Bookmark from 'src/components/shared/bookmark/bookmark';
import { toggleActiveBookmarkClass } from 'src/components/shared/bookmark/helpers/toogle-active-bookmark-class';
import { getAriaText } from 'src/components/shared/bookmark/helpers/get-aria-text';

describe('Проверка на корректность рендера компонента Bookmark', () => {
  describe('Проверка передачи параметров', () => {
    it('При переданных параметрах компонент верно генерирует css класс', async () => {
      const isActive = true;

      render(<Bookmark isActive={isActive} />);

      expect(screen.getByTestId('bookmark')).toHaveClass(toggleActiveBookmarkClass({ isActive }));
    });

    it('При переданных параметрах компонент верно генерирует ariaText', () => {
      const isActive = false;

      render(<Bookmark isActive={isActive} />);

      expect(screen.getByTestId('aria-text')).toHaveTextContent(getAriaText(isActive));
    });
  });

  describe('При нажатии на кнопку', () => {
    it('Верно переключает css класс', () => {
      const isActive = true;

      render(<Bookmark isActive={isActive} />);

      userEvent.click(screen.getByTestId('bookmark'));

      expect(screen.getByTestId('bookmark')).toHaveClass(
        toggleActiveBookmarkClass({ isActive: false }),
      );
    });

    it('Верно переключает текст ariaText', () => {
      const isActive = true;

      render(<Bookmark isActive={isActive} />);

      userEvent.click(screen.getByTestId('bookmark'));

      expect(screen.getByTestId('aria-text')).toHaveTextContent(getAriaText(false));
    });
  });
});
