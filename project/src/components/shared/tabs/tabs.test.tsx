import { render } from '@testing-library/react';

import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import Tabs from 'src/components/shared/tabs/tabs';

describe('Проверка на корректность рендера компонента Tabs', () => {
  describe('Проверка передачи параметров', () => {
    it('Компонент верно отрисовывается', async () => {
      const locationTabs = buildLocationTabs();

      const { container } = render(<Tabs tabs={locationTabs} />);

      expect(container).toBeInTheDocument();
    });
  });
});
