import { render, screen } from '@testing-library/react';

import PreviewDescriptionWrapper from 'src/components/shared/preview-description-wrapper/preview-description-wrapper';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента PreviewDescriptionWrapper', () => {
  describe('Проверка передачи параметров', () => {
    it('При не переданных параметрах компонент верно отрисовывает вариант по умолчанию', () => {
      const offer = offers[0];

      const { container } = render(<PreviewDescriptionWrapper offer={offer} />);

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('price-value')).toHaveTextContent('€154');
      expect(screen.getByTestId('type')).toHaveTextContent('house');
    });
  });
});