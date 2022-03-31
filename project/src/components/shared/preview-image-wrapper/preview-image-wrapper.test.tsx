import { render, screen } from '@testing-library/react';

import PreviewImageWrapper from 'src/components/shared/preview-image-wrapper/preview-image-wrapper';
import { WrapperClass } from 'src/types/preview-image-wrapper';

describe('Проверка на корректность рендера компонента PreviewImageWrapper', () => {
  describe('Проверка передачи параметров', () => {
    it('При не переданных параметрах компонент верно отрисовывает вариант по умолчанию', () => {
      const { container } = render(<PreviewImageWrapper />);

      expect(container).toBeInTheDocument();

      //NOTE По умолчанию isPremium = false, дом нода не должна отрисоваться
      expect(screen.queryByTestId('mark')).not.toBeInTheDocument();

      expect(screen.getByTestId('link-wrapper')).toHaveClass(WrapperClass.OfferPreview);
    });

    it('Переданных параметрах компонент верно отрисовывается', () => {
      const { container } = render(
        <PreviewImageWrapper isPremium wrapperClass={WrapperClass.FavoritePreview} />,
      );

      expect(container).toBeInTheDocument();

      expect(screen.getByTestId('mark')).toBeInTheDocument();
      expect(screen.getByTestId('link-wrapper')).toHaveClass(WrapperClass.FavoritePreview);
    });
  });
});
