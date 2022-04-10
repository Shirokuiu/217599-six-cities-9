import { render } from '@testing-library/react';

import ErrorApiMsg from 'src/components/shared/error-api-msg/error-api-msg';

describe('Проверка на корректность рендера компонента ErrorApiMsg', () => {
  describe('Проверка рендера', () => {
    it('Компонент верно отрисовывается',  () => {

      const {container} = render(<ErrorApiMsg />);

      expect(container).toBeInTheDocument();
    });
  });
});
