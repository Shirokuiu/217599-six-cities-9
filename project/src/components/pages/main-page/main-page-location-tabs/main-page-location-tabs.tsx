import { Link } from 'react-router-dom';
import { memo } from 'react';

import Tabs from 'src/components/shared/tabs/tabs';
import { MainPageLocationTabsProps } from 'src/types/main-page';

export function MainPageLocationTabs({ locationTabs, currentCountry }: MainPageLocationTabsProps) {
  return (
    <Tabs
      tabs={locationTabs}
      renderTabContent={(tabText: string) => (
        <Link
          to={{
            search: `country=${tabText}`,
          }}
          className={[
            'locations__item-link',
            'tabs__item',
            currentCountry === tabText && 'tabs__item--active',
          ].join(' ')}
        >
          <span>{tabText}</span>
        </Link>
      )}
    />
  );
}

// NOTE Так как родитель перерендеривается из-за изменения в адресной строке
// делаю условие, чтобы табы перерендеривались только тогда, когда это нужно
export default memo(
  MainPageLocationTabs,
  (prev, next) => prev.currentCountry === next.currentCountry,
);
