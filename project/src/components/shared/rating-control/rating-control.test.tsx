import { render, screen } from '@testing-library/react';

import RatingControl from 'src/components/shared/rating-control/rating-control';
import { buildRatingItems } from 'src/components/shared/rating-control/helpers/build-rating-items';

describe('Проверка на корректность рендера компонента RatingControl', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', async () => {
      const formRatingItems = buildRatingItems();

      render(<RatingControl />);

      const radioInputs = await screen.findAllByTestId('radio');
      const itemsLabel = await screen.findAllByTestId('label');

      radioInputs.forEach((item, idx) => {
        expect(item.getAttribute('value')).toBe(formRatingItems[idx].value);
        expect(item.id).toBe(formRatingItems[idx].id);
      });

      itemsLabel.forEach((item, idx) => {
        expect(item.getAttribute('for')).toBe(formRatingItems[idx].id);
        expect(item.title).toBe(formRatingItems[idx].labelTitle);
      });
    });
  });
});
