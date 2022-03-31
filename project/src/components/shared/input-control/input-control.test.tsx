import { render, screen } from '@testing-library/react';

import InputControl from 'src/components/shared/input-control/input-control';
import { InputControlType } from 'src/types/input-control';

describe('Проверка на корректность рендера компонента InputControl', () => {
  describe('Проверка передачи параметров', () => {
    it('При не переданных параметрах компонент верно отрисовывает вариант по умолчанию', () => {
      const value = 'test';
      const type = InputControlType.Text;
      const name = 'input';
      const placeholder = 'Введите текст';

      render(<InputControl value={value} />);

      expect(screen.getByRole('textbox')).toHaveValue(value);

      // NOTE По умолчанию type = text
      expect(screen.getByRole('textbox').getAttribute('type')).toBe(type);

      // NOTE По умолчанию name = input
      expect(screen.getByRole('textbox').getAttribute('name')).toBe(name);

      // NOTE По умолчанию placeholder = Введите текст
      expect(screen.getByRole('textbox').getAttribute('placeholder')).toBe(placeholder);

      // NOTE По умолчанию required не выставлен
      expect(screen.getByRole('textbox').getAttribute('required')).not.toBe('required');
    });

    it('При переданных параметрах компонент верно отрисовывается с введеными параметрами', () => {
      const value = 'test-input';
      const type = InputControlType.Email;
      const name = 'test-input';
      const placeholder = 'Введите почту';
      const isRequired = true;

      render(
        <InputControl
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          isRequired={isRequired}
        />,
      );

      expect(screen.getByRole('textbox')).toHaveValue(value);
      expect(screen.getByRole('textbox').getAttribute('type')).toBe(type);
      expect(screen.getByRole('textbox').getAttribute('name')).toBe(name);
      expect(screen.getByRole('textbox').getAttribute('placeholder')).toBe(placeholder);
      expect(screen.getByRole('textbox').getAttribute('required')).toBe('');
    });
  });
});
