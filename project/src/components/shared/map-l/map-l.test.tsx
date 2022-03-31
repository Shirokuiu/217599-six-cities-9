import { render } from '@testing-library/react';

import MapL from 'src/components/shared/map-l/map-l';
import { buildMapLPoints } from 'src/components/pages/main-page/helpers/build-map-l-points';
import { offers } from 'src/mocks/offers';

describe('Проверка на корректность рендера компонента MapL', () => {
  describe('Проверка передачи параметров', () => {
    it('При переданных параметрах компонент верно отрисовывется', async () => {
      const points = buildMapLPoints(offers);

      const { container } = render(<MapL points={points} />);

      expect(container).toBeInTheDocument();
    });
  });
});
