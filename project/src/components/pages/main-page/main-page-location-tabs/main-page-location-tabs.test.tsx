import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { MainPageLocationTabs } from 'src/components/pages/main-page/main-page-location-tabs/main-page-location-tabs';
import { Tab } from 'src/types/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';

describe('Проверка на корректность рендера компонента MainPageLocationTabs', () => {
  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const locationTabs: Tab[] = buildLocationTabs();

      const { container } = render(
        <MainPageLocationTabs locationTabs={locationTabs} currentCountry="Paris" />,
        { wrapper: BrowserRouter },
      );

      expect(container).toBeInTheDocument();
    });
  });
});
