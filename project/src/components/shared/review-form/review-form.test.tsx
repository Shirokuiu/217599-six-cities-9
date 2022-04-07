import { render } from '@testing-library/react';

import ReviewForm from 'src/components/shared/review-form/review-form';

describe('Проверка на корректность рендера компонента Loader', () => {
  describe('Проверка рендера', () => {
    it('Компонент верно отрисовывается', () => {
      const { container } = render(<ReviewForm />);

      expect(container).toBeInTheDocument();
    });
  });
});
