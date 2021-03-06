import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import OfferPreview from 'src/components/shared/offer-preview/offer-preview';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента OfferPreview', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается при переданных параметрах', async () => {
      const { container } = render(<OfferPreview offer={offers[0]} />, { wrapper: BrowserRouter });

      expect(container).toBeInTheDocument();
      expect(screen.getByTestId('place-image').getAttribute('src')).toBe(offers[0].previewImage);
    });
  });
});
