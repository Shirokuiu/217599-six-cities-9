import { render } from '@testing-library/react';

import BookmarkIcon from 'src/components/shared/bookmark/bookmark-icon/bookmark-icon';
import { StyleMode } from 'src/types/bookmark';

describe('Проверка на корректность рендера компонента Bookmark', () => {
  describe('Проверка передачи рендера', () => {
    it('Компонент верно отрисоывается', () => {
      const { container } = render(
        <BookmarkIcon styleMode={StyleMode.Default} classNameIcon="test" />,
      );

      expect(container).toBeInTheDocument();
    });
  });
});
