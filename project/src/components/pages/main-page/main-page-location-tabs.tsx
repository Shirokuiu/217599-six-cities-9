import { useEffect } from 'react';

import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { Link, useSearchParams } from 'react-router-dom';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { LocationTabSearchParam } from 'src/types/main-page-location-tabs';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';

function MainPageLocationTabs() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const locationTabs: Tab[] = buildLocationTabs();

  useEffect(() => {
    if (!parseSearchParams<LocationTabSearchParam>(searchParams).country) {
      setSearchParams({ country: DEFAULT_LOCATION_TAB_NAME });
    }
  }, []);

  return (
    <Tabs
      tabs={locationTabs}
      renderTabContent={(tabText: string) => (
        <Link
          to={`?country=${tabText}`}
          className={[
            'locations__item-link',
            'tabs__item',
            parseSearchParams<LocationTabSearchParam>(searchParams).country ===
              tabText && 'tabs__item--active',
          ].join(' ')}
        >
          <span>{tabText}</span>
        </Link>
      )}
    />
  );
}

export default MainPageLocationTabs;
