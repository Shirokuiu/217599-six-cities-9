import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';
import SortDropdown from 'src/components/shared/sort-dropdown/sort-dropdown';

describe('Проверка на корректность рендера компонента SortDropdown', () => {
  describe('Проверка передачи параметров', () => {
    it('При переданных параметрах компонент верно отрисовывается', async () => {
      const dropdownItems = buildDropdownItems();

      render(<SortDropdown items={dropdownItems} />);

      expect(screen.getByTestId('caption')).toHaveTextContent('Sort by');
    });
  });

  describe('Проверка кликов событий', () => {
    it('При клике по названию показывает компонент dropdown', () => {
      const dropdownItems = buildDropdownItems();

      render(<SortDropdown items={dropdownItems} />);

      userEvent.click(screen.getByTestId('value'));

      expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    });

    it('При клике по элементу dropdown подставляет верное значение', () => {
      const dropdownItems = buildDropdownItems();

      render(<SortDropdown items={dropdownItems} />);

      userEvent.click(screen.getByTestId('value'));
      userEvent.click(screen.getByTestId('dropdown-item-Popular'));

      expect(screen.getByTestId('value')).toHaveTextContent('Popular');
    });
  });
});
