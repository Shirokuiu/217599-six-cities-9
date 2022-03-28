import { render, screen } from '@testing-library/react';

import Btn from 'src/components/shared/btn/btn';
import { BtnType } from 'src/types/btn';

describe('Проверка на корректность рендера компонента btn', () => {
  describe('Проверка передачи параметров', () => {
    it('При не переданных параметрах компонент верно отрисовывает вариант по умолчанию', () => {
      render(<Btn />);

      // NOTE По умолчанию кнопка имеет класс - button
      expect(screen.getByRole('button')).toHaveClass('button');

      // NOTE По умолчанию кнопка имеет type - button
      expect(screen.getByRole('button').getAttribute('type')).toBe('button');

      // NOTE По умолчанию кнопка не задизейблена
      expect(screen.getByRole('button')).not.toBeDisabled();

      // NOTE По умолчанию текст в кнопке - button
      expect(screen.getByRole('button')).toHaveTextContent('button');
    });

    it('При переданных параметрах кнопка верно отрисовывается с введеными параметрами', () => {
      render(<Btn classNames={['test']} type={BtnType.Submit} isDisabled text="test test" />);

      expect(screen.getByRole('button')).toHaveClass('test button');
      expect(screen.getByRole('button').getAttribute('type')).toBe(BtnType.Submit);
      expect(screen.getByRole('button')).toBeDisabled();
      expect(screen.getByRole('button')).toHaveTextContent('test test');
    });
  });
});
