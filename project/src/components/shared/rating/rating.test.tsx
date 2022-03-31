import { render, screen } from '@testing-library/react';

import Rating from 'src/components/shared/rating/rating';
import { makeRateStyle } from 'src/components/shared/rating/helpers/make-rate-style';
import { DEFAULT_RATE } from 'src/components/shared/rating/constants/constants';

describe('Проверка на корректность рендера компонента Rating', () => {
  describe('Проверка передачи параметров', () => {
    it('Переданных параметрах компонент верно отрисовывается', () => {
      const { container } = render(<Rating rate={3} />);
      const rate = makeRateStyle({ rate: 3, maxRate: DEFAULT_RATE });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('rate-style').style.width).toBe(rate);
    });
  });
});
