import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { MainPageSortOffers } from 'src/components/pages/main-page/main-page-sort-offers/main-page-sort-offers';
import { DropdownItem } from 'src/types/dropdown';
import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';

describe('Проверка на корректность рендера компонента MainPageSortOffers', () => {
  const dropdownItems: DropdownItem[] = buildDropdownItems();

  describe('Проверка отрисовки', () => {
    it('Компонент верно отрисовывается', async () => {
      const { container } = render(<MainPageSortOffers dropdownItems={dropdownItems} />, {
        wrapper: BrowserRouter,
      });

      expect(container).toBeInTheDocument();
    });
  });
});
