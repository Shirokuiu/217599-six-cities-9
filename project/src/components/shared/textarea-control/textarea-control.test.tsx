import { render, screen } from '@testing-library/react';

import TextareaControl from 'src/components/shared/textarea-control/textarea-control';

describe('Проверка на корректность рендера компонента TextareaControl', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(<TextareaControl />);

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('textarea').id).toBe('textarea');
      expect(screen.getByTestId('textarea').getAttribute('name')).toBe('textarea');
      expect(screen.getByTestId('textarea').getAttribute('placeholder')).toBe('Type some text');
      expect(screen.getByTestId('textarea')).toHaveValue('');
    });
  });
});
