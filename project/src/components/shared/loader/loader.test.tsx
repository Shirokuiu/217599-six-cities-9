import { render } from '@testing-library/react';

import Loader from 'src/components/shared/loader/loader';

describe('Проверка на корректность рендера компонента Loader', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', () => {
      const { container } = render(<Loader />);

      expect(container).toHaveTextContent('Loading...');
      expect(container).toBeInTheDocument();
    });
  });
});
