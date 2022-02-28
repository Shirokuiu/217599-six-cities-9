import { useEffect } from 'react';

import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { Link, useSearchParams } from 'react-router-dom';
import { parseSearchParams } from 'src/helpers/parseSearchParams';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
import {
  LocationTabSearchParam,
  MainPageLocationTabsProps
} from 'src/types/main-page-location-tabs';
import { Tab } from 'src/types/tabs';

function MainPageLocationTabs({
  onCountryChange = () => undefined,
}: MainPageLocationTabsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const locationTabs: Tab[] = buildLocationTabs();

  useEffect(() => {
    const parsedSearchParams: LocationTabSearchParam =
      parseSearchParams(searchParams);

    if (!parsedSearchParams.country) {
      setSearchParams({ country: DEFAULT_LOCATION_TAB_NAME });
    }

    onCountryChange(parsedSearchParams.country);
  }, [searchParams]);

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
