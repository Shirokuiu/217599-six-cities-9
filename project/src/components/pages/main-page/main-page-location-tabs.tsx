import { useEffect } from 'react';

import Tabs from 'src/components/shared/tabs/tabs';
import { buildLocationTabs } from 'src/components/pages/main-page/helpers/build-location-tabs';
import { Link, useSearchParams } from 'react-router-dom';
import { parseSearchParams } from 'src/helpers/parse-search-params';
import { LocationTabSearchParam } from 'src/types/main-page-location-tabs';
import { Tab } from 'src/types/tabs';
import { buildSearchParamsTab } from 'src/components/pages/main-page/helpers/build-search-params-tab';
import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
// import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';
// import { useAppDispatch, useAppSelector } from 'src/hooks';
// import { setCurrentCity } from 'src/store/actions/actions';
// import { DEFAULT_LOCATION_TAB_NAME } from 'src/components/pages/main-page/constants/constants';

const locationTabs: Tab[] = buildLocationTabs();

function MainPageLocationTabs() {
  const [searchParams, setSearchParams] = useSearchParams({}); // eslint-disable-line
  // const { groupedCities } = useAppSelector((state) => state);
  // const dispatch = useAppDispatch();

  // console.log(searchParams.get('country'));

  useEffect(() => {
    const parsedSearchParams =
      parseSearchParams<LocationTabSearchParam>(searchParams);

    if (!parsedSearchParams.country) {
      setSearchParams({
        ...parsedSearchParams,
        country: DEFAULT_LOCATION_TAB_NAME,
      });
    }
  }, []);

  console.log('ok');

  // useEffect(() => {
  //   const parsedSearchParams =
  //     parseSearchParams<LocationTabSearchParam>(searchParams);
  //
  //   if (!parsedSearchParams.country) {
  //     setSearchParams({
  //       ...parsedSearchParams,
  //       country: DEFAULT_LOCATION_TAB_NAME,
  //     });
  //   }
  //
  //   dispatch(setCurrentCity(parsedSearchParams.country));
  // }, [groupedCities, searchParams]);

  // useEffect(() => {
  //   const parsedSearchParams =
  //     parseSearchParams<LocationTabSearchParam>(searchParams);
  //
  //   if (groupedCities.length) {
  //     dispatch(setCurrentCity(parsedSearchParams.country));
  //   }
  // }, [searchParams, groupedCities]);

  // NOTE К сожалению, если вынести в кастомный хук не будет работать
  useEffect(() => {
    // const parsedSearchParams =
    //   parseSearchParams<LocationTabSearchParam>(searchParams);
    //
    // if (!parsedSearchParams.country) {
    //   setSearchParams({
    //     ...parsedSearchParams,
    //     country: DEFAULT_LOCATION_TAB_NAME,
    //   });
    // }
    //
    // console.log(groupedCities);
    // if (groupedCities.length) {
    //   dispatch(setCurrentCity(parsedSearchParams.country));
    // }
  }, [searchParams]);

  return (
    <Tabs
      tabs={locationTabs}
      renderTabContent={(tabText: string) => (
        <Link
          to={{
            search: buildSearchParamsTab(tabText, searchParams),
          }}
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
