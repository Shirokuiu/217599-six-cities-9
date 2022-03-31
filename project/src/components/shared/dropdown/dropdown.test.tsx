import { render, screen } from '@testing-library/react';

import Dropdown from 'src/components/shared/dropdown/dropdown';
import { buildDropdownItems } from 'src/components/pages/main-page/helpers/build-dropdown-items';

describe('Проверка на корректность рендера компонента Dropdown', () => {
  describe('Проверка передачи параметров', () => {
    it('При переданных параметрах компонент верно отрисовывается', async () => {
      const dropdownItems = buildDropdownItems();

      render(<Dropdown items={dropdownItems} />);

      const items = await screen.findAllByRole('listitem');
      const activeClass = 'places__option places__option--active';
      const noActiveClass = 'places__option';

      items.forEach((item, idx) => {
        // NOTE Отрисовывается верный текстовый контент
        expect(item).toHaveTextContent(dropdownItems[idx].text);

        // NOTE Проставляется верный активный класс
        expect(item).toHaveClass(dropdownItems[idx].isActive ? activeClass : noActiveClass);
      });
    });
  });
});
