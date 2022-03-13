import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { Tab } from 'src/types/tabs';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { setCurrentCity } from 'src/store/actions/actions';
import { LocationTabSearchParam } from 'src/types/main-page';

const locationTabs: Tab[] = buildLocationTabs();

function MainPageLocationTabs() {
  const [searchParams, setSearchParams] = useSearchParams({});
  const { groupedCities } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const parsedSearchParams =
    parseSearchParams<LocationTabSearchParam>(searchParams);

  useEffect(() => {
    if (!parsedSearchParams.country) {
      setSearchParams({
        ...parsedSearchParams,
        country: DEFAULT_LOCATION_TAB_NAME,
      });
    }

    if (parsedSearchParams.country && groupedCities.length) {
      dispatch(setCurrentCity(parsedSearchParams.country));
    }
  }, [searchParams.get('country'), groupedCities]);

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
            parsedSearchParams.country === tabText && 'tabs__item--active',
          ].join(' ')}
        >
          <span>{tabText}</span>
        </Link>
      )}
    />
  );
}

export default MainPageLocationTabs;
